import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/federal-program',
        name: 'federal-program',
        component: () => import('pages/FederalProgramPage.vue'),
      },
      {
        path: '/federal-program',
        name: 'federal-program',
        component: () => import('pages/FederalProgramPage.vue'),
      },
      {
        path: '/provision',
        name: 'provision',
        component: () => import('pages/ProvisionPage.vue'),
      },
      {
        path: '/welfare',
        name: 'welfare',
        component: () => import('pages/WelfarePage.vue'),
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('pages/Service112Page.vue'),
      },
      {
        path: '/social-support',
        name: 'social-support',
        component: () => import('pages/SocialSupportPage.vue'),
      },
      {
        path: '/gosuslugi',
        name: 'gosuslugi',
        component: () => import('pages/GosuslugiPage.vue'),
      },
      {
        path: '/investments',
        name: 'investments',
        component: () => import('pages/InvestmentsPage.vue'),
      },
      {
        path: '/roads',
        name: 'roads',
        component: () => import('pages/RoadsPage.vue'),
      },
      {
        path: '/transportation',
        name: 'transportation',
        component: () => import('pages/TransportationPage.vue'),
      },
      {
        path: '/construction',
        name: 'construction',
        component: () => import('pages/ConstructionPage.vue'),
      },
      {
        path: '/socio-economic',
        name: 'socio-economic',
        component: () => import('pages/SocioEconomicPage.vue'),
      },
      {
        path: '/municipalitet/:id',
        name: 'municipalitet',
        component: () => import('pages/MunicipalitetPage.vue'),
        props: true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/debugs/icons',
    component: () => import('pages/Debugs/Icons.vue'),
  },
]

export default routes
