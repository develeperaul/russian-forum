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

      {
        path: '/ved',
        name: 'ved',
        component: () => import('pages/VED/Index.vue'),
      },
      {
        path: '/ved/exp',
        name: 'ved-exp',
        component: () => import('pages/VED/Export.vue'),
      },
      {
        path: '/ved/exp/arm',
        name: 'ved-exp-arm',
        component: () => import('pages/VED/RegionExport/Arm.vue'),
      },
      {
        path: '/ved/exp/azerb',
        name: 'ved-exp-azerb',
        component: () => import('pages/VED/RegionExport/Azerb.vue'),
      },
      {
        path: '/ved/exp/bel',
        name: 'ved-exp-bel',
        component: () => import('pages/VED/RegionExport/Bel.vue'),
      },
      {
        path: '/ved/exp/kr',
        name: 'ved-exp-kr',
        component: () => import('pages/VED/RegionExport/Kr.vue'),
      },
      {
        path: '/ved/exp/kz',
        name: 'ved-exp-kz',
        component: () => import('pages/VED/RegionExport/Kz.vue'),
      },
      {
        path: '/ved/exp/mold',
        name: 'ved-exp-mold',
        component: () => import('pages/VED/RegionExport/Mold.vue'),
      },
      {
        path: '/ved/exp/tadg',
        name: 'ved-exp-tadg',
        component: () => import('pages/VED/RegionExport/Tadg.vue'),
      },
      {
        path: '/ved/exp/turk',
        name: 'ved-exp-turk',
        component: () => import('pages/VED/RegionExport/Turk.vue'),
      },
      {
        path: '/ved/exp/uzb',
        name: 'ved-exp-uzb',
        component: () => import('pages/VED/RegionExport/Uzb.vue'),
      },
      {
        path: '/ved/imp',
        name: 'ved-imp',
        component: () => import('pages/VED/Import.vue'),
      },

      {
        path: '/ved/imp/arm',
        name: 'ved-imp-arm',
        component: () => import('pages/VED/RegionImport/Arm.vue'),
      },
      {
        path: '/ved/imp/azerb',
        name: 'ved-imp-azerb',
        component: () => import('pages/VED/RegionImport/Azerb.vue'),
      },
      {
        path: '/ved/imp/bel',
        name: 'ved-imp-bel',
        component: () => import('pages/VED/RegionImport/Bel.vue'),
      },
      {
        path: '/ved/imp/kr',
        name: 'ved-imp-kr',
        component: () => import('pages/VED/RegionImport/Kr.vue'),
      },
      {
        path: '/ved/imp/kz',
        name: 'ved-imp-kz',
        component: () => import('pages/VED/RegionImport/Kz.vue'),
      },
      {
        path: '/ved/imp/mold',
        name: 'ved-imp-mold',
        component: () => import('pages/VED/RegionImport/Mold.vue'),
      },
      {
        path: '/ved/imp/tadg',
        name: 'ved-imp-tadg',
        component: () => import('pages/VED/RegionImport/Tadg.vue'),
      },
      {
        path: '/ved/imp/turk',
        name: 'ved-imp-turk',
        component: () => import('pages/VED/RegionImport/Turk.vue'),
      },
      {
        path: '/ved/imp/uzb',
        name: 'ved-imp-uzb',
        component: () => import('pages/VED/RegionImport/Uzb.vue'),
      },

      {
        path: '/ved/ext',
        name: 'ved-ext',
        component: () => import('pages/VED/External.vue'),
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
