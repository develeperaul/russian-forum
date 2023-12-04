import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },

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

      {
        path: '/cur-bis',
        name: 'cur-bis',
        component: () => import('pages/ForBis/BashkortostanBis.vue'),
      },

      {
        path: '/cur-bis/terr',
        name: 'terr',
        component: () => import('pages/ForBis/Territoria.vue'),
      },
      {
        path: '/cur-bis/invest',
        name: 'invest',
        component: () => import('pages/ForBis/Invest.vue'),
      },
      {
        path: '/cur-bis/smp',
        name: 'smp',
        component: () => import('pages/ForBis/SMP.vue'),
      },

      {
        path: '/cur-bis/sopr',
        name: 'sopr',
        component: () => import('pages/ForBis/Sopr.vue'),
      },

      {
        path: '/reg-prog',
        name: 'reg-prog',
        component: () => import('pages/RegProg/Reg.vue'),
      },
      {
        path: '/reg-prog/bash-dvor',
        name: 'bash-dvor',
        component: () => import('pages/RegProg/BashDvor.vue'),
      },
      {
        path: '/reg-prog/kap-rem',
        name: 'kap-rem',
        component: () => import('pages/RegProg/KapRem.vue'),
      },
      {
        path: '/reg-prog/ataysal',
        name: 'ataysal',
        component: () => import('pages/RegProg/Ataysal.vue'),
      },
      {
        path: '/reg-prog/osob',
        name: 'osob',
        component: () => import('pages/RegProg/Osob.vue'),
      },

      {
        path: '/cur-bash',
        name: 'cur-bash',
        component: () => import('pages/CURBash/BashkortostanCUR.vue'),
      },

      {
        path: '/cur-bash/economic',
        name: 'economic',
        component: () => import('pages/CURBash/Sopr.vue'),
      },

      {
        path: '/cur-bash/obr-sv',
        name: 'obr-sv',
        component: () => import('pages/CURBash/ObrSv.vue'),
      },

      {
        path: '/cur-bash/soc',
        name: 'soc',
        component: () => import('pages/CURBash/Soc.vue'),
      },

      {
        path: '/cur-bash/sit-centr',
        name: 'sit-centr',
        component: () => import('pages/CURBash/SitCentr.vue'),
      },

      {
        path: '/cur-bash/info',
        name: 'info',
        component: () => import('pages/CURBash/Info.vue'),
      },

      {
        path: '/cur-bash/ed-centr',
        name: 'ed-centr',
        component: () => import('pages/CURBash/EdCentr.vue'),
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
