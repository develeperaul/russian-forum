<template>
  <svg
    class="nav"
    viewBox="0 0 1096 785"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      v-for="item in navPathList"
      v-html="item.path"
      class="tw-cursor-pointer"
      @click="$router.push({ name: item.name })"
    ></g>
    <defs>
      <filter
        id="filter0_b_135_6962"
        x="390.276"
        y="502.776"
        width="314.448"
        height="314.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_dddd_135_6962"
        x="509.5"
        y="608"
        width="76"
        height="92"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_b_135_6962"
        x="487.276"
        y="577.776"
        width="120.448"
        height="120.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_b_135_6962"
        x="415.276"
        y="-32.224"
        width="264.448"
        height="264.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_dddd_135_6962"
        x="509.5"
        y="43"
        width="76"
        height="92"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter5_b_135_6962"
        x="487.276"
        y="12.776"
        width="120.448"
        height="120.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter6_b_135_6962"
        x="863.276"
        y="545.776"
        width="264.448"
        height="264.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter7_dddd_135_6962"
        x="957.5"
        y="621"
        width="76"
        height="92"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter8_b_135_6962"
        x="935.276"
        y="590.776"
        width="120.448"
        height="120.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter9_b_135_6962"
        x="138.276"
        y="55.776"
        width="314.448"
        height="314.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter10_dddd_135_6962"
        x="257.5"
        y="161"
        width="76"
        height="92"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter11_b_135_6962"
        x="235.276"
        y="130.776"
        width="120.448"
        height="120.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter12_b_135_6962"
        x="138.276"
        y="365.776"
        width="314.448"
        height="314.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter13_dddd_135_6962"
        x="257.5"
        y="459"
        width="76"
        height="92"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter14_b_135_6962"
        x="235.276"
        y="428.776"
        width="120.448"
        height="120.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter15_b_135_6962"
        x="368.276"
        y="187.776"
        width="359.448"
        height="359.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter16_dddd_135_6962"
        x="503"
        y="296"
        width="92"
        height="108"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter17_b_135_6962"
        x="480.776"
        y="265.776"
        width="136.448"
        height="136.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter18_b_135_6962"
        x="-31.724"
        y="235.776"
        width="264.448"
        height="264.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter19_dddd_135_6962"
        x="62.5"
        y="311"
        width="76"
        height="92"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter20_b_135_6962"
        x="40.276"
        y="280.776"
        width="120.448"
        height="120.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter21_b_135_6962"
        x="-31.724"
        y="545.776"
        width="264.448"
        height="264.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter22_dddd_135_6962"
        x="62.5"
        y="611.5"
        width="76"
        height="92"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter23_b_135_6962"
        x="40.276"
        y="581.276"
        width="120.448"
        height="120.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter24_b_135_6962"
        x="643.276"
        y="365.776"
        width="314.448"
        height="314.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter25_dddd_135_6962"
        x="762.5"
        y="471"
        width="76"
        height="92"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter26_b_135_6962"
        x="740.276"
        y="440.776"
        width="120.448"
        height="120.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter27_b_135_6962"
        x="643.276"
        y="55.776"
        width="314.448"
        height="314.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter28_dddd_135_6962"
        x="762.5"
        y="137"
        width="76"
        height="92"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter29_b_135_6962"
        x="740.276"
        y="106.776"
        width="120.448"
        height="120.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter30_b_135_6962"
        x="863.276"
        y="235.776"
        width="264.448"
        height="264.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter31_dddd_135_6962"
        x="957.5"
        y="320.5"
        width="76"
        height="92"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_135_6962"
          result="effect2_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_135_6962"
          result="effect3_dropShadow_135_6962"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_dropShadow_135_6962"
          result="effect4_dropShadow_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_135_6962"
          result="shape"
        />
      </filter>
      <filter
        id="filter32_b_135_6962"
        x="935.276"
        y="290.276"
        width="120.448"
        height="120.448"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.112" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_135_6962"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_135_6962"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_135_6962"
        x1="547.5"
        y1="614"
        x2="547.5"
        y2="662"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3A56C7" stop-opacity="0" />
        <stop offset="1" stop-color="#3A56C7" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_135_6962"
        x1="547.5"
        y1="49"
        x2="547.5"
        y2="97"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3A56C7" stop-opacity="0" />
        <stop offset="1" stop-color="#3A56C7" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_135_6962"
        x1="995.5"
        y1="578"
        x2="995.5"
        y2="778"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#534FFF" stop-opacity="0" />
        <stop offset="1" stop-color="#534FFF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_135_6962"
        x1="995.5"
        y1="627"
        x2="995.5"
        y2="675"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#534FFF" stop-opacity="0" />
        <stop offset="1" stop-color="#534FFF" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_135_6962"
        x1="295.5"
        y1="88"
        x2="295.5"
        y2="338"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_135_6962"
        x1="295.5"
        y1="167"
        x2="295.5"
        y2="215"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_135_6962"
        x1="295.5"
        y1="398"
        x2="295.5"
        y2="648"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_135_6962"
        x1="295.5"
        y1="465"
        x2="295.5"
        y2="513"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_135_6962"
        x1="548"
        y1="220"
        x2="548"
        y2="515"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_135_6962"
        x1="549"
        y1="302"
        x2="549"
        y2="366"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_135_6962"
        x1="100.5"
        y1="268"
        x2="100.5"
        y2="468"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_135_6962"
        x1="100.5"
        y1="317"
        x2="100.5"
        y2="365"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_135_6962"
        x1="100.5"
        y1="578"
        x2="100.5"
        y2="778"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_135_6962"
        x1="100.5"
        y1="617.5"
        x2="100.5"
        y2="665.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_135_6962"
        x1="800.5"
        y1="398"
        x2="800.5"
        y2="648"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#534FFF" stop-opacity="0" />
        <stop offset="1" stop-color="#534FFF" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_135_6962"
        x1="800.5"
        y1="477"
        x2="800.5"
        y2="525"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#534FFF" stop-opacity="0" />
        <stop offset="1" stop-color="#534FFF" />
      </linearGradient>
      <linearGradient
        id="paint16_linear_135_6962"
        x1="800.5"
        y1="88"
        x2="800.5"
        y2="338"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#534FFF" stop-opacity="0" />
        <stop offset="1" stop-color="#534FFF" />
      </linearGradient>
      <linearGradient
        id="paint17_linear_135_6962"
        x1="800.5"
        y1="143"
        x2="800.5"
        y2="191"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#534FFF" stop-opacity="0" />
        <stop offset="1" stop-color="#534FFF" />
      </linearGradient>
      <linearGradient
        id="paint18_linear_135_6962"
        x1="995.5"
        y1="268"
        x2="995.5"
        y2="468"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#534FFF" stop-opacity="0" />
        <stop offset="1" stop-color="#534FFF" />
      </linearGradient>
      <linearGradient
        id="paint19_linear_135_6962"
        x1="995.5"
        y1="326.5"
        x2="995.5"
        y2="374.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#534FFF" stop-opacity="0" />
        <stop offset="1" stop-color="#534FFF" />
      </linearGradient>
      <clipPath id="clip0_135_6962">
        <rect
          width="200"
          height="200"
          fill="white"
          transform="translate(895.5 578)"
        />
      </clipPath>
      <clipPath id="clip1_135_6962">
        <rect
          width="250"
          height="250"
          fill="white"
          transform="translate(170.5 398)"
        />
      </clipPath>
      <clipPath id="clip2_135_6962">
        <rect
          width="200"
          height="200"
          fill="white"
          transform="translate(0.5 578)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
<script setup lang="ts">
const navPathList = [
  {
    id: 1,
    path: `<g filter="url(#filter0_b_135_6962)">
        <path
          d="M534.396 537.607C542.786 534.131 552.214 534.131 560.604 537.607L624.779 564.189C633.17 567.664 639.836 574.33 643.311 582.721L669.893 646.896C673.369 655.286 673.369 664.714 669.893 673.104L643.311 737.279C639.836 745.67 633.17 752.336 624.779 755.811L560.604 782.393C552.214 785.869 542.786 785.869 534.396 782.393L470.221 755.811C461.83 752.336 455.164 745.67 451.689 737.279L425.107 673.104C421.631 664.714 421.631 655.286 425.107 646.896L451.689 582.721C455.164 574.33 461.83 567.664 470.221 564.189L534.396 537.607Z"
          fill="#0C72EA"
          fill-opacity="0.159"
        />
        <path
          d="M535.613 540.545C543.224 537.392 551.776 537.392 559.387 540.545L623.562 567.127C631.173 570.279 637.221 576.327 640.373 583.938L666.955 648.113C670.108 655.724 670.108 664.276 666.955 671.887L640.373 736.062C637.221 743.673 631.173 749.721 623.562 752.873L559.387 779.455C551.776 782.608 543.224 782.608 535.613 779.455L471.438 752.873C463.826 749.721 457.779 743.673 454.627 736.062L428.045 671.887C424.892 664.276 424.892 655.724 428.045 648.113L454.627 583.938C457.779 576.326 463.827 570.279 471.438 567.127L535.613 540.545Z"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="6.36"
        />
      </g>
      <g filter="url(#filter1_dddd_135_6962)">
        <g filter="url(#filter2_b_135_6962)">
          <rect
            x="523.5"
            y="614"
            width="48"
            height="48"
            rx="12"
            fill="url(#paint0_linear_135_6962)"
          />
          <rect
            x="521.5"
            y="612"
            width="52"
            height="52"
            rx="14"
            stroke="white"
            stroke-opacity="0.318"
            stroke-width="4"
          />
        </g>
        <path
          d="M560.5 650.301L556.02 625.466C555.94 625.233 555.7 625 555.46 625H549.46C549.3 625 549.14 625.078 549.06 625.155C548.98 625.233 548.9 625.388 548.9 625.543L549.06 631.519H546.1L546.26 625.543C546.26 625.388 546.18 625.233 546.1 625.155C545.94 625.078 545.78 625 545.62 625H539.62C539.3 625 539.06 625.233 539.06 625.466L534.5 650.301C534.5 650.457 534.5 650.612 534.66 650.767C534.74 650.922 534.9 651 535.14 651H545.06C545.38 651 545.62 650.767 545.62 650.457L545.7 644.403H549.3L549.46 650.379C549.46 650.69 549.7 650.922 550.02 650.922H559.94C560.1 650.922 560.26 650.845 560.42 650.69C560.5 650.612 560.5 650.457 560.5 650.301ZM545.78 642.463L546.02 633.537H549.06L549.3 642.463H545.78Z"
          fill="#FAFAFA"
        />
      </g>
      <path
        d="M513.61 704.22V698.76H514.81C516.25 697.12 516.97 694.36 516.97 690.48V686.84H526.87V698.76H528.45V704.22H526.19V701H515.87V704.22H513.61ZM517.65 698.76H524.35V689.04H519.41V690.74C519.41 694.393 518.823 697.067 517.65 698.76ZM528.776 696.16C528.776 694.68 529.276 693.473 530.276 692.54C531.276 691.593 532.516 691.12 533.996 691.12C535.476 691.12 536.716 691.593 537.716 692.54C538.716 693.473 539.216 694.68 539.216 696.16C539.216 697.653 538.71 698.88 537.696 699.84C536.696 700.8 535.463 701.28 533.996 701.28C532.53 701.28 531.29 700.8 530.276 699.84C529.276 698.88 528.776 697.653 528.776 696.16ZM531.936 694C531.456 694.613 531.216 695.333 531.216 696.16C531.216 696.987 531.456 697.713 531.936 698.34C532.416 698.967 533.103 699.28 533.996 699.28C534.89 699.28 535.576 698.967 536.056 698.34C536.536 697.713 536.776 696.987 536.776 696.16C536.776 695.333 536.536 694.613 536.056 694C535.576 693.387 534.89 693.08 533.996 693.08C533.103 693.08 532.416 693.387 531.936 694ZM540.544 691.4H542.844V692.74H542.904C543.184 692.3 543.604 691.92 544.164 691.6C544.737 691.28 545.424 691.12 546.224 691.12C547.584 691.12 548.697 691.6 549.564 692.56C550.444 693.52 550.884 694.72 550.884 696.16C550.884 697.6 550.45 698.813 549.584 699.8C548.73 700.787 547.59 701.28 546.164 701.28C545.497 701.28 544.877 701.14 544.304 700.86C543.73 700.58 543.29 700.2 542.984 699.72H542.944V705.8H540.544V691.4ZM547.704 698.34C548.197 697.713 548.444 696.987 548.444 696.16C548.444 695.333 548.197 694.613 547.704 694C547.224 693.387 546.55 693.08 545.684 693.08C544.844 693.08 544.164 693.4 543.644 694.04C543.124 694.68 542.864 695.4 542.864 696.2C542.864 697 543.124 697.713 543.644 698.34C544.164 698.967 544.844 699.28 545.684 699.28C546.55 699.28 547.224 698.967 547.704 698.34ZM551.64 696.16C551.64 694.68 552.14 693.473 553.14 692.54C554.14 691.593 555.38 691.12 556.86 691.12C558.34 691.12 559.58 691.593 560.58 692.54C561.58 693.473 562.08 694.68 562.08 696.16C562.08 697.653 561.573 698.88 560.56 699.84C559.56 700.8 558.326 701.28 556.86 701.28C555.393 701.28 554.153 700.8 553.14 699.84C552.14 698.88 551.64 697.653 551.64 696.16ZM554.8 694C554.32 694.613 554.08 695.333 554.08 696.16C554.08 696.987 554.32 697.713 554.8 698.34C555.28 698.967 555.966 699.28 556.86 699.28C557.753 699.28 558.44 698.967 558.92 698.34C559.4 697.713 559.64 696.987 559.64 696.16C559.64 695.333 559.4 694.613 558.92 694C558.44 693.387 557.753 693.08 556.86 693.08C555.966 693.08 555.28 693.387 554.8 694ZM563.407 701V691.4H570.147V693.32H565.807V701H563.407ZM570.981 701V691.4H573.381V697.6H573.421L577.621 691.4H580.221V701H577.821V694.84H577.781L573.621 701H570.981Z"
        fill="#FAFAFA"
      />`,
    title: 'Дороги',
    name: 'roads',
  },
  {
    id: 2,
    path: `<g filter="url(#filter3_b_135_6962)">
      <path
        d="M537.017 2.08528C543.729 -0.695097 551.271 -0.695091 557.983 2.08529L609.323 23.3509C616.036 26.1313 621.369 31.4643 624.149 38.1767L645.415 89.5166C648.195 96.229 648.195 103.771 645.415 110.483L624.149 161.823C621.369 168.536 616.036 173.869 609.323 176.649L557.983 197.915C551.271 200.695 543.729 200.695 537.017 197.915L485.677 176.649C478.964 173.869 473.631 168.536 470.851 161.823L449.585 110.483C446.805 103.771 446.805 96.229 449.585 89.5166L470.851 38.1767C473.631 31.4643 478.964 26.1313 485.677 23.3509L537.017 2.08528Z"
        fill="#0C72EA"
        fill-opacity="0.159"
      />
      <path
        d="M538.234 5.02322C544.167 2.56559 550.833 2.5656 556.766 5.02322L608.106 26.2889C614.04 28.7465 618.753 33.4604 621.211 39.3937L642.477 90.7335C644.934 96.6668 644.934 103.333 642.477 109.266L621.211 160.606C618.753 166.54 614.04 171.253 608.106 173.711L556.766 194.977C550.833 197.434 544.167 197.434 538.234 194.977L486.894 173.711C480.96 171.253 476.247 166.54 473.789 160.606L452.523 109.266C450.066 103.333 450.066 96.6667 452.523 90.7335L473.789 39.3937C476.247 33.4604 480.96 28.7465 486.894 26.2889L538.234 5.02322Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter4_dddd_135_6962)">
      <g filter="url(#filter5_b_135_6962)">
        <rect
          x="523.5"
          y="49"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint1_linear_135_6962)"
        />
        <rect
          x="521.5"
          y="47"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M558.338 66.6209C558.121 64.464 557.759 62.7534 557.253 62.1584C555.013 59.4065 539.403 59.1833 537.596 62.084C537.162 62.8278 536.873 64.464 536.656 66.6209C536.006 66.6953 535.5 67.2903 535.5 67.9597V70.6373C535.5 71.2323 535.861 71.7529 536.367 71.9016C536.223 76.0667 536.367 80.3805 536.512 82.5374C536.512 84.1737 537.596 83.9506 537.596 83.9506H538.608V85.7356C538.608 86.4794 539.33 87 540.198 87C541.065 87 541.788 86.405 541.788 85.7356V83.9506H553.64V85.7356C553.64 86.4794 554.363 87 555.23 87C556.097 87 556.82 86.405 556.82 85.7356V83.9506H557.181C557.181 83.9506 558.482 84.0993 558.554 83.3556C558.554 81.1987 558.699 76.4386 558.554 71.9016C559.06 71.7529 559.494 71.2323 559.494 70.6373V67.9597C559.566 67.216 558.988 66.6953 558.338 66.6209ZM541.426 62.5303H553.423V64.3897H541.426V62.5303ZM541.571 81.7937C540.631 81.7937 539.836 80.9755 539.836 80.0086C539.836 79.0418 540.631 78.2236 541.571 78.2236C542.51 78.2236 543.305 79.0418 543.305 80.0086C543.305 81.0499 542.51 81.7937 541.571 81.7937ZM553.351 81.7937C552.411 81.7937 551.616 80.9755 551.616 80.0086C551.616 79.0418 552.411 78.2236 553.351 78.2236C554.29 78.2236 555.085 79.0418 555.085 80.0086C555.085 81.0499 554.29 81.7937 553.351 81.7937ZM555.519 74.1329H539.33V65.4309H555.519V74.1329Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M493.431 122.304C493.431 120.512 493.996 119.077 495.127 118C496.268 116.923 497.724 116.384 499.495 116.384C501.287 116.384 502.753 116.923 503.895 118C505.036 119.077 505.607 120.512 505.607 122.304C505.607 124.064 505.031 125.504 503.879 126.624C502.737 127.733 501.276 128.288 499.495 128.288C497.735 128.288 496.284 127.733 495.143 126.624C494.001 125.504 493.431 124.064 493.431 122.304ZM495.623 122.304C495.623 123.52 495.985 124.523 496.711 125.312C497.436 126.091 498.369 126.48 499.511 126.48C500.663 126.48 501.601 126.091 502.327 125.312C503.052 124.523 503.415 123.52 503.415 122.304C503.415 121.12 503.052 120.133 502.327 119.344C501.612 118.555 500.673 118.16 499.511 118.16C498.359 118.16 497.42 118.555 496.695 119.344C495.98 120.133 495.623 121.12 495.623 122.304ZM510.377 128.224C509.043 128.224 507.982 127.781 507.193 126.896C506.819 126.469 506.547 125.968 506.377 125.392C506.217 124.816 506.137 124.048 506.137 123.088C506.137 122.288 506.158 121.611 506.201 121.056C506.254 120.501 506.35 119.947 506.489 119.392C506.638 118.837 506.841 118.389 507.097 118.048C507.363 117.696 507.715 117.397 508.153 117.152C508.601 116.907 509.134 116.741 509.753 116.656L511.721 116.4C512.179 116.336 512.51 116.256 512.713 116.16C512.915 116.064 513.049 115.893 513.113 115.648L514.489 116.048C514.35 116.667 514.115 117.12 513.785 117.408C513.465 117.685 512.99 117.867 512.361 117.952L510.281 118.224C509.811 118.288 509.422 118.379 509.113 118.496C508.814 118.613 508.537 118.805 508.281 119.072C508.035 119.328 507.849 119.685 507.721 120.144C507.603 120.603 507.534 121.184 507.513 121.888H507.561C508.19 120.725 509.257 120.144 510.761 120.144C511.806 120.144 512.697 120.517 513.433 121.264C514.169 122.011 514.537 122.976 514.537 124.16C514.537 125.365 514.137 126.347 513.337 127.104C512.537 127.851 511.55 128.224 510.377 128.224ZM508.729 125.888C509.123 126.368 509.662 126.608 510.345 126.608C511.027 126.608 511.571 126.368 511.977 125.888C512.393 125.397 512.601 124.805 512.601 124.112C512.601 123.429 512.393 122.848 511.977 122.368C511.571 121.877 511.022 121.632 510.329 121.632C509.646 121.632 509.107 121.872 508.713 122.352C508.329 122.832 508.137 123.419 508.137 124.112C508.137 124.805 508.334 125.397 508.729 125.888ZM526.851 120.32V126.432H527.971V130.192H526.371V128H515.379V120.32H517.299V126.432H520.163V120.32H522.083V126.432H524.931V120.32H526.851ZM529.913 123.392H533.849C533.849 122.859 533.694 122.416 533.385 122.064C533.076 121.712 532.628 121.536 532.041 121.536C531.476 121.536 530.99 121.712 530.585 122.064C530.18 122.416 529.956 122.859 529.913 123.392ZM535.769 124.256C535.769 124.48 535.764 124.651 535.753 124.768H529.913C529.956 125.301 530.19 125.749 530.617 126.112C531.044 126.475 531.54 126.656 532.105 126.656C532.99 126.656 533.668 126.325 534.137 125.664L535.417 126.688C534.66 127.712 533.561 128.224 532.121 128.224C530.916 128.224 529.924 127.861 529.145 127.136C528.377 126.411 527.993 125.435 527.993 124.208C527.993 122.981 528.377 121.989 529.145 121.232C529.913 120.475 530.884 120.096 532.057 120.096C533.166 120.096 534.062 120.453 534.745 121.168C535.428 121.883 535.769 122.912 535.769 124.256ZM543.189 121.296L541.877 122.448C541.727 122.235 541.503 122.059 541.205 121.92C540.906 121.771 540.602 121.696 540.293 121.696C539.631 121.696 539.114 121.947 538.741 122.448C538.367 122.939 538.181 123.509 538.181 124.16C538.181 124.821 538.373 125.397 538.757 125.888C539.141 126.379 539.674 126.624 540.357 126.624C541.061 126.624 541.599 126.395 541.973 125.936L543.173 127.152C542.511 127.867 541.567 128.224 540.341 128.224C539.167 128.224 538.181 127.856 537.381 127.12C536.581 126.384 536.181 125.397 536.181 124.16C536.181 122.944 536.575 121.963 537.365 121.216C538.154 120.469 539.13 120.096 540.293 120.096C540.858 120.096 541.407 120.203 541.941 120.416C542.474 120.629 542.89 120.923 543.189 121.296ZM545.354 128V121.856H542.89V120.32H549.722V121.856H547.274V128H545.354ZM550.191 128V120.32H554.159C554.618 120.32 555.028 120.368 555.391 120.464C555.764 120.56 556.1 120.768 556.399 121.088C556.698 121.397 556.847 121.808 556.847 122.32C556.847 122.715 556.724 123.061 556.479 123.36C556.244 123.648 555.935 123.84 555.551 123.936V123.968C556.031 124.043 556.42 124.245 556.719 124.576C557.028 124.896 557.183 125.312 557.183 125.824C557.183 126.507 556.916 127.04 556.383 127.424C555.85 127.808 555.146 128 554.271 128H550.191ZM552.111 126.624H553.919C554.804 126.624 555.247 126.315 555.247 125.696C555.247 125.077 554.82 124.768 553.967 124.768H552.111V126.624ZM552.111 123.392H553.935C554.639 123.392 554.991 123.109 554.991 122.544C554.991 121.968 554.591 121.68 553.791 121.68H552.111V123.392ZM559.507 123.392H563.443C563.443 122.859 563.288 122.416 562.979 122.064C562.669 121.712 562.221 121.536 561.635 121.536C561.069 121.536 560.584 121.712 560.179 122.064C559.773 122.416 559.549 122.859 559.507 123.392ZM565.363 124.256C565.363 124.48 565.357 124.651 565.347 124.768H559.507C559.549 125.301 559.784 125.749 560.211 126.112C560.637 126.475 561.133 126.656 561.699 126.656C562.584 126.656 563.261 126.325 563.731 125.664L565.011 126.688C564.253 127.712 563.155 128.224 561.715 128.224C560.509 128.224 559.517 127.861 558.739 127.136C557.971 126.411 557.587 125.435 557.587 124.208C557.587 122.981 557.971 121.989 558.739 121.232C559.507 120.475 560.477 120.096 561.651 120.096C562.76 120.096 563.656 120.453 564.339 121.168C565.021 121.883 565.363 122.912 565.363 124.256ZM566.222 128V120.32H568.142V123.216H571.374V120.32H573.294V128H571.374V124.752H568.142V128H566.222ZM574.597 128V120.32H576.517V123.216H579.749V120.32H581.669V128H579.749V124.752H576.517V128H574.597ZM591.02 128V120.32H592.94V128H591.02ZM582.972 128V120.32H584.892V123.008H586.556C587.506 123.008 588.258 123.216 588.812 123.632C589.378 124.037 589.66 124.656 589.66 125.488C589.66 126.299 589.378 126.923 588.812 127.36C588.247 127.787 587.495 128 586.556 128H582.972ZM584.892 126.544H586.06C586.636 126.544 587.058 126.464 587.324 126.304C587.602 126.144 587.74 125.877 587.74 125.504C587.74 125.12 587.612 124.848 587.356 124.688C587.1 124.528 586.668 124.448 586.06 124.448H584.892V126.544ZM595.71 123.392H599.646C599.646 122.859 599.491 122.416 599.182 122.064C598.873 121.712 598.425 121.536 597.838 121.536C597.273 121.536 596.787 121.712 596.382 122.064C595.977 122.416 595.753 122.859 595.71 123.392ZM601.566 124.256C601.566 124.48 601.561 124.651 601.55 124.768H595.71C595.753 125.301 595.987 125.749 596.414 126.112C596.841 126.475 597.337 126.656 597.902 126.656C598.787 126.656 599.465 126.325 599.934 125.664L601.214 126.688C600.457 127.712 599.358 128.224 597.918 128.224C596.713 128.224 595.721 127.861 594.942 127.136C594.174 126.411 593.79 125.435 593.79 124.208C593.79 122.981 594.174 121.989 594.942 121.232C595.71 120.475 596.681 120.096 597.854 120.096C598.963 120.096 599.859 120.453 600.542 121.168C601.225 121.883 601.566 122.912 601.566 124.256ZM511.371 147V139.32H518.443V147H516.523V140.856H513.291V147H511.371ZM521.218 142.392H525.154C525.154 141.859 524.999 141.416 524.69 141.064C524.38 140.712 523.932 140.536 523.346 140.536C522.78 140.536 522.295 140.712 521.89 141.064C521.484 141.416 521.26 141.859 521.218 142.392ZM527.074 143.256C527.074 143.48 527.068 143.651 527.058 143.768H521.218C521.26 144.301 521.495 144.749 521.922 145.112C522.348 145.475 522.844 145.656 523.41 145.656C524.295 145.656 524.972 145.325 525.442 144.664L526.722 145.688C525.964 146.712 524.866 147.224 523.426 147.224C522.22 147.224 521.228 146.861 520.45 146.136C519.682 145.411 519.298 144.435 519.298 143.208C519.298 141.981 519.682 140.989 520.45 140.232C521.218 139.475 522.188 139.096 523.362 139.096C524.471 139.096 525.367 139.453 526.05 140.168C526.732 140.883 527.074 141.912 527.074 143.256ZM527.933 139.32H529.773V140.392H529.821C530.045 140.04 530.381 139.736 530.829 139.48C531.288 139.224 531.837 139.096 532.477 139.096C533.565 139.096 534.456 139.48 535.149 140.248C535.853 141.016 536.205 141.976 536.205 143.128C536.205 144.28 535.859 145.251 535.165 146.04C534.483 146.829 533.571 147.224 532.429 147.224C531.896 147.224 531.4 147.112 530.941 146.888C530.483 146.664 530.131 146.36 529.885 145.976H529.853V150.84H527.933V139.32ZM533.661 144.872C534.056 144.371 534.253 143.789 534.253 143.128C534.253 142.467 534.056 141.891 533.661 141.4C533.277 140.909 532.739 140.664 532.045 140.664C531.373 140.664 530.829 140.92 530.413 141.432C529.997 141.944 529.789 142.52 529.789 143.16C529.789 143.8 529.997 144.371 530.413 144.872C530.829 145.373 531.373 145.624 532.045 145.624C532.739 145.624 533.277 145.373 533.661 144.872ZM538.53 142.392H542.466C542.466 141.859 542.312 141.416 542.002 141.064C541.693 140.712 541.245 140.536 540.658 140.536C540.093 140.536 539.608 140.712 539.202 141.064C538.797 141.416 538.573 141.859 538.53 142.392ZM544.386 143.256C544.386 143.48 544.381 143.651 544.37 143.768H538.53C538.573 144.301 538.808 144.749 539.234 145.112C539.661 145.475 540.157 145.656 540.722 145.656C541.608 145.656 542.285 145.325 542.754 144.664L544.034 145.688C543.277 146.712 542.178 147.224 540.738 147.224C539.533 147.224 538.541 146.861 537.762 146.136C536.994 145.411 536.61 144.435 536.61 143.208C536.61 141.981 536.994 140.989 537.762 140.232C538.53 139.475 539.501 139.096 540.674 139.096C541.784 139.096 542.68 139.453 543.362 140.168C544.045 140.883 544.386 141.912 544.386 143.256ZM545.246 147V139.32H549.214C549.672 139.32 550.083 139.368 550.446 139.464C550.819 139.56 551.155 139.768 551.454 140.088C551.752 140.397 551.902 140.808 551.902 141.32C551.902 141.715 551.779 142.061 551.534 142.36C551.299 142.648 550.99 142.84 550.606 142.936V142.968C551.086 143.043 551.475 143.245 551.774 143.576C552.083 143.896 552.238 144.312 552.238 144.824C552.238 145.507 551.971 146.04 551.438 146.424C550.904 146.808 550.2 147 549.326 147H545.246ZM547.166 145.624H548.974C549.859 145.624 550.302 145.315 550.302 144.696C550.302 144.077 549.875 143.768 549.022 143.768H547.166V145.624ZM547.166 142.392H548.99C549.694 142.392 550.046 142.109 550.046 141.544C550.046 140.968 549.646 140.68 548.846 140.68H547.166V142.392ZM552.642 143.128C552.642 141.944 553.042 140.979 553.842 140.232C554.642 139.475 555.634 139.096 556.818 139.096C558.002 139.096 558.994 139.475 559.794 140.232C560.594 140.979 560.994 141.944 560.994 143.128C560.994 144.323 560.588 145.304 559.778 146.072C558.978 146.84 557.991 147.224 556.818 147.224C555.644 147.224 554.652 146.84 553.842 146.072C553.042 145.304 552.642 144.323 552.642 143.128ZM555.17 141.4C554.786 141.891 554.594 142.467 554.594 143.128C554.594 143.789 554.786 144.371 555.17 144.872C555.554 145.373 556.103 145.624 556.818 145.624C557.532 145.624 558.082 145.373 558.466 144.872C558.85 144.371 559.042 143.789 559.042 143.128C559.042 142.467 558.85 141.891 558.466 141.4C558.082 140.909 557.532 140.664 556.818 140.664C556.103 140.664 555.554 140.909 555.17 141.4ZM564.303 147.256C562.863 147.256 561.743 146.792 560.943 145.864L562.095 144.744C562.319 145.043 562.612 145.288 562.975 145.48C563.348 145.672 563.743 145.768 564.159 145.768C565.172 145.768 565.679 145.443 565.679 144.792C565.679 144.397 565.519 144.125 565.199 143.976C564.89 143.827 564.458 143.752 563.903 143.752H563.295V142.376H563.903C564.959 142.376 565.487 142.051 565.487 141.4C565.487 140.835 565.055 140.552 564.191 140.552C563.412 140.552 562.799 140.845 562.351 141.432L561.279 140.392C561.962 139.528 563.007 139.096 564.415 139.096C565.322 139.096 566.047 139.283 566.591 139.656C567.146 140.029 567.423 140.541 567.423 141.192C567.423 141.629 567.279 142.013 566.991 142.344C566.703 142.664 566.335 142.872 565.887 142.968V143C566.41 143.096 566.831 143.309 567.151 143.64C567.471 143.971 567.631 144.381 567.631 144.872C567.631 145.619 567.311 146.205 566.671 146.632C566.042 147.048 565.252 147.256 564.303 147.256ZM568.543 147V139.32H570.463V142.728H570.511L573.471 139.32H575.903L572.527 142.936L576.159 147H573.695L570.511 143.352H570.463V147H568.543ZM576.23 147V139.32H578.15V144.28H578.182L581.542 139.32H583.622V147H581.702V142.072H581.67L578.342 147H576.23Z"
      fill="#FAFAFA"
    />`,
    title: 'Общественные перевозки',
    name: 'transportation',
  },
  {
    id: 3,
    path: `<g clip-path="url(#clip0_135_6962)">
      <g filter="url(#filter6_b_135_6962)">
        <path
          d="M985.017 580.085C991.729 577.305 999.271 577.305 1005.98 580.085L1057.32 601.351C1064.04 604.131 1069.37 609.464 1072.15 616.177L1093.41 667.517C1096.2 674.229 1096.2 681.771 1093.41 688.483L1072.15 739.823C1069.37 746.536 1064.04 751.869 1057.32 754.649L1005.98 775.915C999.271 778.695 991.729 778.695 985.017 775.915L933.677 754.649C926.964 751.869 921.631 746.536 918.851 739.823L897.585 688.483C894.805 681.771 894.805 674.229 897.585 667.517L918.851 616.177C921.631 609.464 926.964 604.131 933.677 601.351L985.017 580.085Z"
          fill="url(#paint2_linear_135_6962)"
        />
        <path
          d="M986.234 583.023C992.167 580.566 998.833 580.566 1004.77 583.023L1056.11 604.289C1062.04 606.747 1066.75 611.46 1069.21 617.394L1090.48 668.734C1092.93 674.667 1092.93 681.333 1090.48 687.266L1069.21 738.606C1066.75 744.54 1062.04 749.253 1056.11 751.711L1004.77 772.977C998.833 775.434 992.167 775.434 986.234 772.977L934.894 751.711C928.96 749.253 924.247 744.54 921.789 738.606L900.523 687.266C898.066 681.333 898.066 674.667 900.523 668.734L921.789 617.394C924.247 611.46 928.96 606.747 934.894 604.289L986.234 583.023Z"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="6.36"
        />
      </g>
      <g filter="url(#filter7_dddd_135_6962)">
        <g filter="url(#filter8_b_135_6962)">
          <rect
            x="971.5"
            y="627"
            width="48"
            height="48"
            rx="12"
            fill="url(#paint3_linear_135_6962)"
          />
          <rect
            x="969.5"
            y="625"
            width="52"
            height="52"
            rx="14"
            stroke="white"
            stroke-opacity="0.318"
            stroke-width="4"
          />
        </g>
        <path
          d="M1007.74 646.159H1000.42L1002.92 648.661H1008.5V646.921C1008.5 646.5 1008.16 646.159 1007.74 646.159ZM990.582 646.159H983.262C982.841 646.159 982.5 646.5 982.5 646.921V648.661H988.08L990.582 646.159ZM993.814 656.657H997.186V664H993.814V656.657ZM995.5 650.13C995.02 650.13 994.63 650.52 994.63 651C994.63 651.48 995.02 651.87 995.5 651.87C995.98 651.87 996.37 651.48 996.37 651C996.37 650.52 995.98 650.13 995.5 650.13Z"
          fill="#FAFAFA"
        />
        <path
          d="M996.262 644.157V642.025H1000.4C1000.82 642.025 1001.16 641.684 1001.16 641.264V638.762C1001.16 638.341 1000.82 638 1000.4 638H995.5C995.079 638 994.738 638.341 994.738 638.762V644.157L988.712 650.184H982.5V663.238C982.5 663.659 982.841 664 983.262 664H992.291V655.895C992.291 655.475 992.632 655.134 993.052 655.134H997.948C998.368 655.134 998.709 655.475 998.709 655.895V664H1007.74C1008.16 664 1008.5 663.659 1008.5 663.238V650.184H1002.29L996.262 644.157ZM987.287 659.975C987.287 660.395 986.946 660.736 986.525 660.736C986.105 660.736 985.764 660.395 985.764 659.975V658.343C985.764 657.922 986.105 657.581 986.525 657.581C986.946 657.581 987.287 657.922 987.287 658.343V659.975ZM987.287 655.079C987.287 655.5 986.946 655.841 986.525 655.841C986.105 655.841 985.764 655.5 985.764 655.079V653.448C985.764 653.027 986.105 652.686 986.525 652.686C986.946 652.686 987.287 653.027 987.287 653.448V655.079ZM990.551 659.975C990.551 660.395 990.209 660.736 989.789 660.736C989.368 660.736 989.027 660.395 989.027 659.975V658.343C989.027 657.922 989.368 657.581 989.789 657.581C990.209 657.581 990.551 657.922 990.551 658.343V659.975ZM990.551 655.079C990.551 655.5 990.209 655.841 989.789 655.841C989.368 655.841 989.027 655.5 989.027 655.079V653.448C989.027 653.027 989.368 652.686 989.789 652.686C990.209 652.686 990.551 653.027 990.551 653.448V655.079ZM995.5 653.394C994.18 653.394 993.107 652.32 993.107 651C993.107 649.68 994.18 648.606 995.5 648.606C996.82 648.606 997.894 649.68 997.894 651C997.894 652.32 996.82 653.394 995.5 653.394ZM1001.97 659.975C1001.97 660.395 1001.63 660.736 1001.21 660.736C1000.79 660.736 1000.45 660.395 1000.45 659.975V658.343C1000.45 657.922 1000.79 657.581 1001.21 657.581C1001.63 657.581 1001.97 657.922 1001.97 658.343V659.975ZM1001.97 655.079C1001.97 655.5 1001.63 655.841 1001.21 655.841C1000.79 655.841 1000.45 655.5 1000.45 655.079V653.448C1000.45 653.027 1000.79 652.686 1001.21 652.686C1001.63 652.686 1001.97 653.027 1001.97 653.448V655.079ZM1003.71 653.448C1003.71 653.027 1004.05 652.686 1004.47 652.686C1004.9 652.686 1005.24 653.027 1005.24 653.448V655.079C1005.24 655.5 1004.9 655.841 1004.47 655.841C1004.05 655.841 1003.71 655.5 1003.71 655.079V653.448ZM1003.71 658.343C1003.71 657.922 1004.05 657.581 1004.47 657.581C1004.9 657.581 1005.24 657.922 1005.24 658.343V659.975C1005.24 660.395 1004.9 660.736 1004.47 660.736C1004.05 660.736 1003.71 660.395 1003.71 659.975V658.343Z"
          fill="#FAFAFA"
        />
      </g>
      <path
        d="M938.102 700.304C938.102 698.512 938.668 697.077 939.798 696C940.94 694.923 942.396 694.384 944.166 694.384C945.958 694.384 947.425 694.923 948.566 696C949.708 697.077 950.278 698.512 950.278 700.304C950.278 702.064 949.702 703.504 948.55 704.624C947.409 705.733 945.948 706.288 944.166 706.288C942.406 706.288 940.956 705.733 939.814 704.624C938.673 703.504 938.102 702.064 938.102 700.304ZM940.294 700.304C940.294 701.52 940.657 702.523 941.382 703.312C942.108 704.091 943.041 704.48 944.182 704.48C945.334 704.48 946.273 704.091 946.998 703.312C947.724 702.523 948.086 701.52 948.086 700.304C948.086 699.12 947.724 698.133 946.998 697.344C946.284 696.555 945.345 696.16 944.182 696.16C943.03 696.16 942.092 696.555 941.366 697.344C940.652 698.133 940.294 699.12 940.294 700.304ZM955.049 706.224C953.715 706.224 952.654 705.781 951.865 704.896C951.491 704.469 951.219 703.968 951.049 703.392C950.889 702.816 950.809 702.048 950.809 701.088C950.809 700.288 950.83 699.611 950.873 699.056C950.926 698.501 951.022 697.947 951.161 697.392C951.31 696.837 951.513 696.389 951.769 696.048C952.035 695.696 952.387 695.397 952.825 695.152C953.273 694.907 953.806 694.741 954.425 694.656L956.393 694.4C956.851 694.336 957.182 694.256 957.385 694.16C957.587 694.064 957.721 693.893 957.785 693.648L959.161 694.048C959.022 694.667 958.787 695.12 958.457 695.408C958.137 695.685 957.662 695.867 957.033 695.952L954.953 696.224C954.483 696.288 954.094 696.379 953.785 696.496C953.486 696.613 953.209 696.805 952.953 697.072C952.707 697.328 952.521 697.685 952.393 698.144C952.275 698.603 952.206 699.184 952.185 699.888H952.233C952.862 698.725 953.929 698.144 955.433 698.144C956.478 698.144 957.369 698.517 958.105 699.264C958.841 700.011 959.209 700.976 959.209 702.16C959.209 703.365 958.809 704.347 958.009 705.104C957.209 705.851 956.222 706.224 955.049 706.224ZM953.401 703.888C953.795 704.368 954.334 704.608 955.017 704.608C955.699 704.608 956.243 704.368 956.649 703.888C957.065 703.397 957.273 702.805 957.273 702.112C957.273 701.429 957.065 700.848 956.649 700.368C956.243 699.877 955.694 699.632 955.001 699.632C954.318 699.632 953.779 699.872 953.385 700.352C953.001 700.832 952.809 701.419 952.809 702.112C952.809 702.805 953.006 703.397 953.401 703.888ZM961.522 701.392H965.458C965.458 700.859 965.304 700.416 964.994 700.064C964.685 699.712 964.237 699.536 963.65 699.536C963.085 699.536 962.6 699.712 962.194 700.064C961.789 700.416 961.565 700.859 961.522 701.392ZM967.378 702.256C967.378 702.48 967.373 702.651 967.362 702.768H961.522C961.565 703.301 961.8 703.749 962.226 704.112C962.653 704.475 963.149 704.656 963.714 704.656C964.6 704.656 965.277 704.325 965.746 703.664L967.026 704.688C966.269 705.712 965.17 706.224 963.73 706.224C962.525 706.224 961.533 705.861 960.754 705.136C959.986 704.411 959.602 703.435 959.602 702.208C959.602 700.981 959.986 699.989 960.754 699.232C961.522 698.475 962.493 698.096 963.666 698.096C964.776 698.096 965.672 698.453 966.354 699.168C967.037 699.883 967.378 700.912 967.378 702.256ZM974.798 699.296L973.486 700.448C973.337 700.235 973.113 700.059 972.814 699.92C972.515 699.771 972.211 699.696 971.902 699.696C971.241 699.696 970.723 699.947 970.35 700.448C969.977 700.939 969.79 701.509 969.79 702.16C969.79 702.821 969.982 703.397 970.366 703.888C970.75 704.379 971.283 704.624 971.966 704.624C972.67 704.624 973.209 704.395 973.582 703.936L974.782 705.152C974.121 705.867 973.177 706.224 971.95 706.224C970.777 706.224 969.79 705.856 968.99 705.12C968.19 704.384 967.79 703.397 967.79 702.16C967.79 700.944 968.185 699.963 968.974 699.216C969.763 698.469 970.739 698.096 971.902 698.096C972.467 698.096 973.017 698.203 973.55 698.416C974.083 698.629 974.499 698.923 974.798 699.296ZM975.05 706V698.32H982.122V706H980.202V699.856H976.97V706H975.05ZM984.897 701.392H988.833C988.833 700.859 988.679 700.416 988.369 700.064C988.06 699.712 987.612 699.536 987.025 699.536C986.46 699.536 985.975 699.712 985.569 700.064C985.164 700.416 984.94 700.859 984.897 701.392ZM990.753 702.256C990.753 702.48 990.748 702.651 990.737 702.768H984.897C984.94 703.301 985.175 703.749 985.601 704.112C986.028 704.475 986.524 704.656 987.089 704.656C987.975 704.656 988.652 704.325 989.121 703.664L990.401 704.688C989.644 705.712 988.545 706.224 987.105 706.224C985.9 706.224 984.908 705.861 984.129 705.136C983.361 704.411 982.977 703.435 982.977 702.208C982.977 700.981 983.361 699.989 984.129 699.232C984.897 698.475 985.868 698.096 987.041 698.096C988.151 698.096 989.047 698.453 989.729 699.168C990.412 699.883 990.753 700.912 990.753 702.256ZM996.029 706V703.136C995.41 703.296 994.733 703.376 993.997 703.376C992.226 703.376 991.341 702.571 991.341 700.96V698.32H993.181V700.416C993.181 700.971 993.293 701.349 993.517 701.552C993.752 701.744 994.12 701.84 994.621 701.84C995.016 701.84 995.485 701.776 996.029 701.648V698.32H997.949V706H996.029ZM1000.73 701.392H1004.66C1004.66 700.859 1004.51 700.416 1004.2 700.064C1003.89 699.712 1003.44 699.536 1002.85 699.536C1002.29 699.536 1001.8 699.712 1001.4 700.064C1000.99 700.416 1000.77 700.859 1000.73 701.392ZM1006.58 702.256C1006.58 702.48 1006.58 702.651 1006.57 702.768H1000.73C1000.77 703.301 1001 703.749 1001.43 704.112C1001.86 704.475 1002.35 704.656 1002.92 704.656C1003.8 704.656 1004.48 704.325 1004.95 703.664L1006.23 704.688C1005.47 705.712 1004.37 706.224 1002.93 706.224C1001.73 706.224 1000.74 705.861 999.958 705.136C999.19 704.411 998.806 703.435 998.806 702.208C998.806 700.981 999.19 699.989 999.958 699.232C1000.73 698.475 1001.7 698.096 1002.87 698.096C1003.98 698.096 1004.87 698.453 1005.56 699.168C1006.24 699.883 1006.58 700.912 1006.58 702.256ZM1007.44 706V698.32H1009.36V701.216H1012.59V698.32H1014.51V706H1012.59V702.752H1009.36V706H1007.44ZM1015.82 706V698.32H1017.74V701.216H1020.97V698.32H1022.89V706H1020.97V702.752H1017.74V706H1015.82ZM1023.74 702.128C1023.74 700.944 1024.14 699.979 1024.94 699.232C1025.74 698.475 1026.74 698.096 1027.92 698.096C1029.1 698.096 1030.1 698.475 1030.9 699.232C1031.7 699.979 1032.1 700.944 1032.1 702.128C1032.1 703.323 1031.69 704.304 1030.88 705.072C1030.08 705.84 1029.09 706.224 1027.92 706.224C1026.75 706.224 1025.75 705.84 1024.94 705.072C1024.14 704.304 1023.74 703.323 1023.74 702.128ZM1026.27 700.4C1025.89 700.891 1025.7 701.467 1025.7 702.128C1025.7 702.789 1025.89 703.371 1026.27 703.872C1026.66 704.373 1027.2 704.624 1027.92 704.624C1028.63 704.624 1029.18 704.373 1029.57 703.872C1029.95 703.371 1030.14 702.789 1030.14 702.128C1030.14 701.467 1029.95 700.891 1029.57 700.4C1029.18 699.909 1028.63 699.664 1027.92 699.664C1027.2 699.664 1026.66 699.909 1026.27 700.4ZM1039.52 699.296L1038.2 700.448C1038.06 700.235 1037.83 700.059 1037.53 699.92C1037.23 699.771 1036.93 699.696 1036.62 699.696C1035.96 699.696 1035.44 699.947 1035.07 700.448C1034.7 700.939 1034.51 701.509 1034.51 702.16C1034.51 702.821 1034.7 703.397 1035.08 703.888C1035.47 704.379 1036 704.624 1036.68 704.624C1037.39 704.624 1037.93 704.395 1038.3 703.936L1039.5 705.152C1038.84 705.867 1037.9 706.224 1036.67 706.224C1035.5 706.224 1034.51 705.856 1033.71 705.12C1032.91 704.384 1032.51 703.397 1032.51 702.16C1032.51 700.944 1032.9 699.963 1033.69 699.216C1034.48 698.469 1035.46 698.096 1036.62 698.096C1037.19 698.096 1037.74 698.203 1038.27 698.416C1038.8 698.629 1039.22 698.923 1039.52 699.296ZM1041.68 706V699.856H1039.22V698.32H1046.05V699.856H1043.6V706H1041.68ZM1046.52 706V698.32H1048.44V701.008H1050.1C1051.05 701.008 1051.8 701.216 1052.36 701.632C1052.92 702.037 1053.21 702.656 1053.21 703.488C1053.21 704.299 1052.92 704.923 1052.36 705.36C1051.79 705.787 1051.04 706 1050.1 706H1046.52ZM1048.44 704.544H1049.61C1050.18 704.544 1050.6 704.464 1050.87 704.304C1051.15 704.144 1051.29 703.877 1051.29 703.504C1051.29 703.12 1051.16 702.848 1050.9 702.688C1050.65 702.528 1050.22 702.448 1049.61 702.448H1048.44V704.544ZM949.532 718.296L948.22 719.448C948.071 719.235 947.847 719.059 947.548 718.92C947.25 718.771 946.946 718.696 946.636 718.696C945.975 718.696 945.458 718.947 945.084 719.448C944.711 719.939 944.524 720.509 944.524 721.16C944.524 721.821 944.716 722.397 945.1 722.888C945.484 723.379 946.018 723.624 946.7 723.624C947.404 723.624 947.943 723.395 948.316 722.936L949.516 724.152C948.855 724.867 947.911 725.224 946.684 725.224C945.511 725.224 944.524 724.856 943.724 724.12C942.924 723.384 942.524 722.397 942.524 721.16C942.524 719.944 942.919 718.963 943.708 718.216C944.498 717.469 945.474 717.096 946.636 717.096C947.202 717.096 947.751 717.203 948.284 717.416C948.818 717.629 949.234 717.923 949.532 718.296ZM949.337 721.128C949.337 719.944 949.737 718.979 950.537 718.232C951.337 717.475 952.329 717.096 953.513 717.096C954.697 717.096 955.689 717.475 956.489 718.232C957.289 718.979 957.689 719.944 957.689 721.128C957.689 722.323 957.283 723.304 956.473 724.072C955.673 724.84 954.686 725.224 953.513 725.224C952.339 725.224 951.347 724.84 950.537 724.072C949.737 723.304 949.337 722.323 949.337 721.128ZM951.865 719.4C951.481 719.891 951.289 720.467 951.289 721.128C951.289 721.789 951.481 722.371 951.865 722.872C952.249 723.373 952.798 723.624 953.513 723.624C954.227 723.624 954.777 723.373 955.161 722.872C955.545 722.371 955.737 721.789 955.737 721.128C955.737 720.467 955.545 719.891 955.161 719.4C954.777 718.909 954.227 718.664 953.513 718.664C952.798 718.664 952.249 718.909 951.865 719.4ZM965.142 727.192V725H958.55V717.32H960.47V723.432H963.702V717.32H965.622V723.432H966.742V727.192H965.142ZM967.723 724.744C967.467 724.509 967.339 724.221 967.339 723.88C967.339 723.539 967.462 723.245 967.707 723C967.963 722.755 968.267 722.632 968.619 722.632C968.971 722.632 969.27 722.749 969.515 722.984C969.771 723.219 969.899 723.507 969.899 723.848C969.899 724.189 969.771 724.483 969.515 724.728C969.27 724.973 968.971 725.096 968.619 725.096C968.278 725.096 967.979 724.979 967.723 724.744ZM972.915 721.128C972.915 719.944 973.315 718.979 974.115 718.232C974.915 717.475 975.907 717.096 977.091 717.096C978.275 717.096 979.267 717.475 980.067 718.232C980.867 718.979 981.267 719.944 981.267 721.128C981.267 722.323 980.862 723.304 980.051 724.072C979.251 724.84 978.264 725.224 977.091 725.224C975.918 725.224 974.926 724.84 974.115 724.072C973.315 723.304 972.915 722.323 972.915 721.128ZM975.443 719.4C975.059 719.891 974.867 720.467 974.867 721.128C974.867 721.789 975.059 722.371 975.443 722.872C975.827 723.373 976.376 723.624 977.091 723.624C977.806 723.624 978.355 723.373 978.739 722.872C979.123 722.371 979.315 721.789 979.315 721.128C979.315 720.467 979.123 719.891 978.739 719.4C978.355 718.909 977.806 718.664 977.091 718.664C976.376 718.664 975.827 718.909 975.443 719.4ZM986.049 725.224C984.715 725.224 983.654 724.781 982.865 723.896C982.491 723.469 982.219 722.968 982.049 722.392C981.889 721.816 981.809 721.048 981.809 720.088C981.809 719.288 981.83 718.611 981.873 718.056C981.926 717.501 982.022 716.947 982.161 716.392C982.31 715.837 982.513 715.389 982.769 715.048C983.035 714.696 983.387 714.397 983.825 714.152C984.273 713.907 984.806 713.741 985.425 713.656L987.393 713.4C987.851 713.336 988.182 713.256 988.385 713.16C988.587 713.064 988.721 712.893 988.785 712.648L990.161 713.048C990.022 713.667 989.787 714.12 989.457 714.408C989.137 714.685 988.662 714.867 988.033 714.952L985.953 715.224C985.483 715.288 985.094 715.379 984.785 715.496C984.486 715.613 984.209 715.805 983.953 716.072C983.707 716.328 983.521 716.685 983.393 717.144C983.275 717.603 983.206 718.184 983.185 718.888H983.233C983.862 717.725 984.929 717.144 986.433 717.144C987.478 717.144 988.369 717.517 989.105 718.264C989.841 719.011 990.209 719.976 990.209 721.16C990.209 722.365 989.809 723.347 989.009 724.104C988.209 724.851 987.222 725.224 986.049 725.224ZM984.401 722.888C984.795 723.368 985.334 723.608 986.017 723.608C986.699 723.608 987.243 723.368 987.649 722.888C988.065 722.397 988.273 721.805 988.273 721.112C988.273 720.429 988.065 719.848 987.649 719.368C987.243 718.877 986.694 718.632 986.001 718.632C985.318 718.632 984.779 718.872 984.385 719.352C984.001 719.832 983.809 720.419 983.809 721.112C983.809 721.805 984.006 722.397 984.401 722.888ZM991.97 725V718.856H989.906V717.32H993.89V720.008H995.554C996.503 720.008 997.255 720.216 997.81 720.632C998.375 721.037 998.658 721.656 998.658 722.488C998.658 723.299 998.375 723.923 997.81 724.36C997.245 724.787 996.493 725 995.554 725H991.97ZM993.89 723.544H995.058C995.634 723.544 996.055 723.464 996.322 723.304C996.599 723.144 996.738 722.877 996.738 722.504C996.738 722.12 996.61 721.848 996.354 721.688C996.098 721.528 995.666 721.448 995.058 721.448H993.89V723.544ZM1000.83 720.392H1004.77C1004.77 719.859 1004.62 719.416 1004.31 719.064C1004 718.712 1003.55 718.536 1002.96 718.536C1002.4 718.536 1001.91 718.712 1001.51 719.064C1001.1 719.416 1000.88 719.859 1000.83 720.392ZM1006.69 721.256C1006.69 721.48 1006.69 721.651 1006.67 721.768H1000.83C1000.88 722.301 1001.11 722.749 1001.54 723.112C1001.97 723.475 1002.46 723.656 1003.03 723.656C1003.91 723.656 1004.59 723.325 1005.06 722.664L1006.34 723.688C1005.58 724.712 1004.48 725.224 1003.04 725.224C1001.84 725.224 1000.85 724.861 1000.07 724.136C999.299 723.411 998.915 722.435 998.915 721.208C998.915 719.981 999.299 718.989 1000.07 718.232C1000.83 717.475 1001.81 717.096 1002.98 717.096C1004.09 717.096 1004.98 717.453 1005.67 718.168C1006.35 718.883 1006.69 719.912 1006.69 721.256ZM1007.55 725V717.32H1009.47V720.728H1009.52L1012.48 717.32H1014.91L1011.53 720.936L1015.17 725H1012.7L1009.52 721.352H1009.47V725H1007.55ZM1016.87 725V718.856H1014.41V717.32H1021.24V718.856H1018.79V725H1016.87ZM1026.47 725V724.024H1026.43C1026.23 724.365 1025.92 724.648 1025.48 724.872C1025.06 725.085 1024.58 725.192 1024.04 725.192C1023.31 725.192 1022.64 725 1022.04 724.616C1021.46 724.221 1021.16 723.619 1021.16 722.808C1021.16 722.371 1021.27 721.992 1021.48 721.672C1021.71 721.341 1021.98 721.085 1022.31 720.904C1022.65 720.723 1023.06 720.579 1023.55 720.472C1024.05 720.355 1024.52 720.28 1024.95 720.248C1025.4 720.216 1025.9 720.2 1026.44 720.2V720.008C1026.44 719.56 1026.28 719.213 1025.95 718.968C1025.62 718.723 1025.19 718.6 1024.68 718.6C1023.87 718.6 1023.17 718.893 1022.59 719.48L1021.59 718.312C1022.47 717.501 1023.55 717.096 1024.84 717.096C1025.5 717.096 1026.06 717.192 1026.52 717.384C1026.99 717.565 1027.35 717.821 1027.59 718.152C1027.84 718.472 1028.01 718.813 1028.11 719.176C1028.21 719.528 1028.27 719.912 1028.27 720.328V725H1026.47ZM1026.44 721.768V721.496H1026.01C1024.06 721.496 1023.08 721.923 1023.08 722.776C1023.08 723.117 1023.21 723.363 1023.47 723.512C1023.73 723.661 1024.05 723.736 1024.43 723.736C1025.08 723.736 1025.57 723.565 1025.91 723.224C1026.27 722.872 1026.44 722.387 1026.44 721.768ZM1029.5 725V717.32H1032.19L1034.43 722.504H1034.45L1036.61 717.32H1039.33V725H1037.44V719.56H1037.41L1035.02 725H1033.74L1031.42 719.544H1031.39V725H1029.5ZM1040.63 725V717.32H1042.55V722.28H1042.58L1045.94 717.32H1048.02V725H1046.1V720.072H1046.07L1042.74 725H1040.63Z"
        fill="#FAFAFA"
      />
    </g>`,
    title: 'Обеспеченность соц. объектами',
    name: 'provision',
  },
  {
    id: 4,
    path: `<g filter="url(#filter9_b_135_6962)">
      <path
        d="M282.396 90.6066C290.786 87.1311 300.214 87.1311 308.604 90.6066L372.779 117.189C381.17 120.664 387.836 127.33 391.311 135.721L417.893 199.896C421.369 208.286 421.369 217.714 417.893 226.104L391.311 290.279C387.836 298.67 381.17 305.336 372.779 308.811L308.604 335.393C300.214 338.869 290.786 338.869 282.396 335.393L218.221 308.811C209.83 305.336 203.164 298.67 199.689 290.279L173.107 226.104C169.631 217.714 169.631 208.286 173.107 199.896L199.689 135.721C203.164 127.33 209.83 120.664 218.221 117.189L282.396 90.6066Z"
        fill="url(#paint4_linear_135_6962)"
      />
      <path
        d="M283.613 93.5445C291.224 90.3918 299.776 90.3918 307.387 93.5445L371.562 120.127C379.173 123.279 385.221 129.327 388.373 136.938L414.955 201.113C418.108 208.724 418.108 217.276 414.955 224.887L388.373 289.062C385.221 296.673 379.173 302.721 371.562 305.873L307.387 332.455C299.776 335.608 291.224 335.608 283.613 332.455L219.438 305.873C211.826 302.721 205.779 296.673 202.627 289.062L176.045 224.887C172.892 217.276 172.892 208.724 176.045 201.113L202.627 136.938C205.779 129.326 211.827 123.279 219.438 120.127L283.613 93.5445Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter10_dddd_135_6962)">
      <g filter="url(#filter11_b_135_6962)">
        <rect
          x="271.5"
          y="167"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint5_linear_135_6962)"
        />
        <rect
          x="269.5"
          y="165"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M306.573 177.88C305.324 176.707 303.319 176.707 302.07 177.88L298.085 181.65C297.059 182.62 296.882 184.1 297.56 185.245L295.325 187.36C295.163 187.513 295.07 187.725 295.07 187.943V191.21C293.983 192.26 294.561 191.706 292.842 193.332C292.672 193.492 292.449 193.573 292.225 193.573C291.462 193.573 291.061 192.69 291.608 192.173L293.844 190.058L291.454 187.797C291.007 187.375 290.259 187.528 290.036 188.082L283.56 203.883C283.29 204.547 283.984 205.203 284.685 204.941L301.338 198.765C301.916 198.546 302.078 197.838 301.631 197.423L296.797 192.851V188.279L298.778 186.405C299.989 187.046 301.546 186.879 302.579 185.909L306.565 182.139C307.814 180.958 307.806 179.054 306.573 177.88Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M242.417 241.64L240.497 243.16C240.15 242.68 239.677 242.32 239.077 242.08C238.49 241.827 237.89 241.7 237.277 241.7C235.837 241.7 234.657 242.193 233.737 243.18C232.83 244.167 232.377 245.4 232.377 246.88C232.377 248.427 232.81 249.687 233.677 250.66C234.557 251.62 235.723 252.1 237.177 252.1C238.67 252.1 239.817 251.553 240.617 250.46L242.637 251.88C241.317 253.533 239.49 254.36 237.157 254.36C234.943 254.36 233.13 253.667 231.717 252.28C230.303 250.88 229.597 249.08 229.597 246.88C229.597 244.653 230.317 242.867 231.757 241.52C233.21 240.16 235.05 239.48 237.277 239.48C238.263 239.48 239.23 239.667 240.177 240.04C241.137 240.4 241.883 240.933 242.417 241.64ZM244.732 254V246.32H241.652V244.4H250.192V246.32H247.132V254H244.732ZM251.028 244.4H253.328V245.74H253.388C253.668 245.3 254.088 244.92 254.648 244.6C255.221 244.28 255.908 244.12 256.708 244.12C258.068 244.12 259.181 244.6 260.048 245.56C260.928 246.52 261.368 247.72 261.368 249.16C261.368 250.6 260.935 251.813 260.068 252.8C259.215 253.787 258.075 254.28 256.648 254.28C255.981 254.28 255.361 254.14 254.788 253.86C254.215 253.58 253.775 253.2 253.468 252.72H253.428V258.8H251.028V244.4ZM258.188 251.34C258.681 250.713 258.928 249.987 258.928 249.16C258.928 248.333 258.681 247.613 258.188 247C257.708 246.387 257.035 246.08 256.168 246.08C255.328 246.08 254.648 246.4 254.128 247.04C253.608 247.68 253.348 248.4 253.348 249.2C253.348 250 253.608 250.713 254.128 251.34C254.648 251.967 255.328 252.28 256.168 252.28C257.035 252.28 257.708 251.967 258.188 251.34ZM262.124 249.16C262.124 247.68 262.624 246.473 263.624 245.54C264.624 244.593 265.864 244.12 267.344 244.12C268.824 244.12 270.064 244.593 271.064 245.54C272.064 246.473 272.564 247.68 272.564 249.16C272.564 250.653 272.057 251.88 271.044 252.84C270.044 253.8 268.811 254.28 267.344 254.28C265.877 254.28 264.637 253.8 263.624 252.84C262.624 251.88 262.124 250.653 262.124 249.16ZM265.284 247C264.804 247.613 264.564 248.333 264.564 249.16C264.564 249.987 264.804 250.713 265.284 251.34C265.764 251.967 266.451 252.28 267.344 252.28C268.237 252.28 268.924 251.967 269.404 251.34C269.884 250.713 270.124 249.987 270.124 249.16C270.124 248.333 269.884 247.613 269.404 247C268.924 246.387 268.237 246.08 267.344 246.08C266.451 246.08 265.764 246.387 265.284 247ZM273.891 254V244.4H276.291V250.6H276.331L280.531 244.4H283.131V254H280.731V247.84H280.691L276.531 254H273.891ZM287.06 254V246.32H283.98V244.4H292.52V246.32H289.46V254H287.06ZM294.962 248.24H299.882C299.882 247.573 299.688 247.02 299.302 246.58C298.915 246.14 298.355 245.92 297.622 245.92C296.915 245.92 296.308 246.14 295.802 246.58C295.295 247.02 295.015 247.573 294.962 248.24ZM302.282 249.32C302.282 249.6 302.275 249.813 302.262 249.96H294.962C295.015 250.627 295.308 251.187 295.842 251.64C296.375 252.093 296.995 252.32 297.702 252.32C298.808 252.32 299.655 251.907 300.242 251.08L301.842 252.36C300.895 253.64 299.522 254.28 297.722 254.28C296.215 254.28 294.975 253.827 294.002 252.92C293.042 252.013 292.562 250.793 292.562 249.26C292.562 247.727 293.042 246.487 294.002 245.54C294.962 244.593 296.175 244.12 297.642 244.12C299.028 244.12 300.148 244.567 301.002 245.46C301.855 246.353 302.282 247.64 302.282 249.32ZM303.706 254.12C303.066 254.12 302.586 254.067 302.266 253.96L302.446 252C302.646 252.067 302.859 252.1 303.086 252.1C303.699 252.1 304.166 251.787 304.486 251.16C304.806 250.533 304.966 249.42 304.966 247.82V244.4H312.826V254H310.426V246.32H307.266V248.36C307.266 250.333 306.979 251.787 306.406 252.72C305.833 253.653 304.933 254.12 303.706 254.12ZM314.715 254V244.4H317.115V247.76H319.195C320.382 247.76 321.322 248.02 322.015 248.54C322.722 249.047 323.075 249.82 323.075 250.86C323.075 251.873 322.722 252.653 322.015 253.2C321.309 253.733 320.369 254 319.195 254H314.715ZM317.115 252.18H318.575C319.295 252.18 319.822 252.08 320.155 251.88C320.502 251.68 320.675 251.347 320.675 250.88C320.675 250.4 320.515 250.06 320.195 249.86C319.875 249.66 319.335 249.56 318.575 249.56H317.115V252.18ZM332.208 245.62L330.568 247.06C330.382 246.793 330.102 246.573 329.728 246.4C329.355 246.213 328.975 246.12 328.588 246.12C327.762 246.12 327.115 246.433 326.648 247.06C326.182 247.673 325.948 248.387 325.948 249.2C325.948 250.027 326.188 250.747 326.668 251.36C327.148 251.973 327.815 252.28 328.668 252.28C329.548 252.28 330.222 251.993 330.688 251.42L332.188 252.94C331.362 253.833 330.182 254.28 328.648 254.28C327.182 254.28 325.948 253.82 324.948 252.9C323.948 251.98 323.448 250.747 323.448 249.2C323.448 247.68 323.942 246.453 324.928 245.52C325.915 244.587 327.135 244.12 328.588 244.12C329.295 244.12 329.982 244.253 330.648 244.52C331.315 244.787 331.835 245.153 332.208 245.62ZM335.166 254V246.32H332.086V244.4H340.626V246.32H337.566V254H335.166ZM341.461 254V244.4H346.421C346.995 244.4 347.508 244.46 347.961 244.58C348.428 244.7 348.848 244.96 349.221 245.36C349.595 245.747 349.781 246.26 349.781 246.9C349.781 247.393 349.628 247.827 349.321 248.2C349.028 248.56 348.641 248.8 348.161 248.92V248.96C348.761 249.053 349.248 249.307 349.621 249.72C350.008 250.12 350.201 250.64 350.201 251.28C350.201 252.133 349.868 252.8 349.201 253.28C348.535 253.76 347.655 254 346.561 254H341.461ZM343.861 252.28H346.121C347.228 252.28 347.781 251.893 347.781 251.12C347.781 250.347 347.248 249.96 346.181 249.96H343.861V252.28ZM343.861 248.24H346.141C347.021 248.24 347.461 247.887 347.461 247.18C347.461 246.46 346.961 246.1 345.961 246.1H343.861V248.24ZM350.956 249.16C350.956 247.68 351.456 246.473 352.456 245.54C353.456 244.593 354.696 244.12 356.176 244.12C357.656 244.12 358.896 244.593 359.896 245.54C360.896 246.473 361.396 247.68 361.396 249.16C361.396 250.653 360.89 251.88 359.876 252.84C358.876 253.8 357.643 254.28 356.176 254.28C354.71 254.28 353.47 253.8 352.456 252.84C351.456 251.88 350.956 250.653 350.956 249.16ZM354.116 247C353.636 247.613 353.396 248.333 353.396 249.16C353.396 249.987 353.636 250.713 354.116 251.34C354.596 251.967 355.283 252.28 356.176 252.28C357.07 252.28 357.756 251.967 358.236 251.34C358.716 250.713 358.956 249.987 358.956 249.16C358.956 248.333 358.716 247.613 358.236 247C357.756 246.387 357.07 246.08 356.176 246.08C355.283 246.08 354.596 246.387 354.116 247Z"
      fill="#FAFAFA"
    />`,
    title: 'Строительство',
    name: 'construction',
  },
  {
    id: 5,
    path: `<g clip-path="url(#clip1_135_6962)">
      <g filter="url(#filter12_b_135_6962)">
        <path
          d="M282.396 400.607C290.786 397.131 300.214 397.131 308.604 400.607L372.779 427.189C381.17 430.664 387.836 437.33 391.311 445.721L417.893 509.896C421.369 518.286 421.369 527.714 417.893 536.104L391.311 600.279C387.836 608.67 381.17 615.336 372.779 618.811L308.604 645.393C300.214 648.869 290.786 648.869 282.396 645.393L218.221 618.811C209.83 615.336 203.164 608.67 199.689 600.279L173.107 536.104C169.631 527.714 169.631 518.286 173.107 509.896L199.689 445.721C203.164 437.33 209.83 430.664 218.221 427.189L282.396 400.607Z"
          fill="url(#paint6_linear_135_6962)"
        />
        <path
          d="M283.613 403.545C291.224 400.392 299.776 400.392 307.387 403.545L371.562 430.127C379.173 433.279 385.221 439.327 388.373 446.938L414.955 511.113C418.108 518.724 418.108 527.276 414.955 534.887L388.373 599.062C385.221 606.673 379.173 612.721 371.562 615.873L307.387 642.455C299.776 645.608 291.224 645.608 283.613 642.455L219.438 615.873C211.826 612.721 205.779 606.673 202.627 599.062L176.045 534.887C172.892 527.276 172.892 518.724 176.045 511.113L202.627 446.938C205.779 439.326 211.827 433.279 219.438 430.127L283.613 403.545Z"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="6.36"
        />
      </g>
      <g filter="url(#filter13_dddd_135_6962)">
        <g filter="url(#filter14_b_135_6962)">
          <rect
            x="271.5"
            y="465"
            width="48"
            height="48"
            rx="12"
            fill="url(#paint7_linear_135_6962)"
          />
          <rect
            x="269.5"
            y="463"
            width="52"
            height="52"
            rx="14"
            stroke="white"
            stroke-opacity="0.318"
            stroke-width="4"
          />
        </g>
        <path
          d="M290.873 484.838C289.257 484.838 287.894 486.152 287.894 487.768H293.851C293.851 486.152 292.489 484.838 290.873 484.838Z"
          fill="#FAFAFA"
        />
        <path
          d="M299.711 476.488V480.443H303.666L299.711 476.488Z"
          fill="#FAFAFA"
        />
        <path
          d="M290.873 480.443C290.065 480.443 289.359 481.101 289.359 481.908C289.359 482.716 290.065 483.373 290.873 483.373C291.68 483.373 292.386 482.716 292.386 481.908C292.386 481.101 291.68 480.443 290.873 480.443Z"
          fill="#FAFAFA"
        />
        <path
          d="M297.513 486.303H301.755C302.457 485.599 303.226 484.829 304.105 483.95V481.908H298.978C298.574 481.908 298.246 481.58 298.246 481.176V476H285.697C284.481 476 283.5 477.03 283.5 478.246V498.754C283.5 499.97 284.481 501 285.697 501H301.908C303.124 501 304.105 499.97 304.105 498.754V492.235L299.999 496.341L296.134 499.094C295.262 499.713 294.061 499.624 293.294 498.846C293.058 498.607 292.91 498.321 292.805 498.021H291.605C291.2 498.021 290.873 497.694 290.873 497.289C290.873 496.884 291.2 496.557 291.605 496.557H292.816C292.886 496.366 292.961 496.176 293.087 496.004L295.752 492.374C295.789 492.319 295.881 492.193 300.293 487.767H297.513C297.109 487.767 296.781 487.44 296.781 487.035C296.781 486.63 297.109 486.303 297.513 486.303ZM293.119 495.092H287.162C286.757 495.092 286.43 494.764 286.43 494.359C286.43 493.955 286.757 493.627 287.162 493.627H293.119C293.524 493.627 293.851 493.955 293.851 494.359C293.851 494.764 293.524 495.092 293.119 495.092ZM293.119 492.162H287.162C286.757 492.162 286.43 491.834 286.43 491.43C286.43 491.025 286.757 490.697 287.162 490.697H293.119C293.524 490.697 293.851 491.025 293.851 491.43C293.851 491.834 293.524 492.162 293.119 492.162ZM295.316 488.5C295.316 488.905 294.989 489.232 294.584 489.232H287.162C286.757 489.232 286.43 488.905 286.43 488.5V487.768C286.43 486.112 287.361 484.684 288.717 483.935C288.21 483.408 287.894 482.696 287.894 481.908C287.894 480.292 289.257 478.978 290.873 478.978C292.489 478.978 293.851 480.292 293.851 481.908C293.851 482.696 293.536 483.408 293.029 483.935C294.385 484.684 295.316 486.112 295.316 487.768V488.5ZM297.513 483.373H300.443C300.848 483.373 301.175 483.701 301.175 484.105C301.175 484.51 300.848 484.838 300.443 484.838H297.513C297.109 484.838 296.781 484.51 296.781 484.105C296.781 483.701 297.109 483.373 297.513 483.373Z"
          fill="#FAFAFA"
        />
        <path
          d="M308.07 484.127C307.499 483.555 306.57 483.555 305.999 484.127C305.965 484.161 304.999 485.128 303.715 486.415L305.784 488.484L308.07 486.199C308.642 485.627 308.644 484.701 308.07 484.127Z"
          fill="#FAFAFA"
        />
        <path
          d="M302.679 487.453C300.84 489.296 298.731 491.413 297.652 492.504C298.664 492.756 299.457 493.553 299.7 494.568L304.747 489.521L302.679 487.453Z"
          fill="#FAFAFA"
        />
        <path
          d="M296.98 493.878H296.465L294.268 496.87C294.055 497.16 294.084 497.562 294.337 497.818C294.589 498.074 294.99 498.109 295.283 497.9L298.319 495.738V495.218C298.319 494.479 297.718 493.878 296.98 493.878Z"
          fill="#FAFAFA"
        />
      </g>
      <path
        d="M239.306 552.36V550.64C237.399 550.613 235.826 550.06 234.586 548.98C233.346 547.887 232.726 546.46 232.726 544.7C232.726 542.833 233.312 541.393 234.486 540.38C235.672 539.367 237.279 538.827 239.306 538.76V537.48H241.906V538.76C243.932 538.827 245.532 539.367 246.706 540.38C247.892 541.393 248.486 542.833 248.486 544.7C248.486 546.46 247.866 547.887 246.626 548.98C245.386 550.06 243.812 550.613 241.906 550.64V552.36H239.306ZM239.306 548.42V540.96C238.012 541.053 237.046 541.433 236.406 542.1C235.766 542.767 235.446 543.64 235.446 544.72C235.446 546.933 236.732 548.167 239.306 548.42ZM241.906 548.42C244.479 548.167 245.766 546.933 245.766 544.72C245.766 543.64 245.446 542.767 244.806 542.1C244.166 541.433 243.199 541.053 241.906 540.96V548.42ZM251.569 546.24H256.489C256.489 545.573 256.296 545.02 255.909 544.58C255.522 544.14 254.962 543.92 254.229 543.92C253.522 543.92 252.916 544.14 252.409 544.58C251.902 545.02 251.622 545.573 251.569 546.24ZM258.889 547.32C258.889 547.6 258.882 547.813 258.869 547.96H251.569C251.622 548.627 251.916 549.187 252.449 549.64C252.982 550.093 253.602 550.32 254.309 550.32C255.416 550.32 256.262 549.907 256.849 549.08L258.449 550.36C257.502 551.64 256.129 552.28 254.329 552.28C252.822 552.28 251.582 551.827 250.609 550.92C249.649 550.013 249.169 548.793 249.169 547.26C249.169 545.727 249.649 544.487 250.609 543.54C251.569 542.593 252.782 542.12 254.249 542.12C255.636 542.12 256.756 542.567 257.609 543.46C258.462 544.353 258.889 545.64 258.889 547.32ZM259.033 554.74V550.04H260.033C260.927 548.88 261.373 547.16 261.373 544.88V542.4H269.173V550.04H270.593V554.74H268.573V552H261.053V554.74H259.033ZM262.573 550.04H266.773V544.32H263.653V545.5C263.653 547.273 263.293 548.787 262.573 550.04ZM273.28 546.24H278.2C278.2 545.573 278.007 545.02 277.62 544.58C277.233 544.14 276.673 543.92 275.94 543.92C275.233 543.92 274.627 544.14 274.12 544.58C273.613 545.02 273.333 545.573 273.28 546.24ZM280.6 547.32C280.6 547.6 280.593 547.813 280.58 547.96H273.28C273.333 548.627 273.627 549.187 274.16 549.64C274.693 550.093 275.313 550.32 276.02 550.32C277.127 550.32 277.973 549.907 278.56 549.08L280.16 550.36C279.213 551.64 277.84 552.28 276.04 552.28C274.533 552.28 273.293 551.827 272.32 550.92C271.36 550.013 270.88 548.793 270.88 547.26C270.88 545.727 271.36 544.487 272.32 543.54C273.28 542.593 274.493 542.12 275.96 542.12C277.347 542.12 278.467 542.567 279.32 543.46C280.173 544.353 280.6 545.64 280.6 547.32ZM281.924 542.4H284.224V543.74H284.284C284.564 543.3 284.984 542.92 285.544 542.6C286.118 542.28 286.804 542.12 287.604 542.12C288.964 542.12 290.078 542.6 290.944 543.56C291.824 544.52 292.264 545.72 292.264 547.16C292.264 548.6 291.831 549.813 290.964 550.8C290.111 551.787 288.971 552.28 287.544 552.28C286.878 552.28 286.258 552.14 285.684 551.86C285.111 551.58 284.671 551.2 284.364 550.72H284.324V556.8H281.924V542.4ZM289.084 549.34C289.578 548.713 289.824 547.987 289.824 547.16C289.824 546.333 289.578 545.613 289.084 545C288.604 544.387 287.931 544.08 287.064 544.08C286.224 544.08 285.544 544.4 285.024 545.04C284.504 545.68 284.244 546.4 284.244 547.2C284.244 548 284.504 548.713 285.024 549.34C285.544 549.967 286.224 550.28 287.064 550.28C287.931 550.28 288.604 549.967 289.084 549.34ZM299.541 552V550.78H299.481C299.241 551.207 298.847 551.56 298.301 551.84C297.767 552.107 297.167 552.24 296.501 552.24C295.581 552.24 294.747 552 294.001 551.52C293.267 551.027 292.901 550.273 292.901 549.26C292.901 548.713 293.034 548.24 293.301 547.84C293.581 547.427 293.927 547.107 294.341 546.88C294.754 546.653 295.267 546.473 295.881 546.34C296.507 546.193 297.094 546.1 297.641 546.06C298.201 546.02 298.821 546 299.501 546V545.76C299.501 545.2 299.294 544.767 298.881 544.46C298.467 544.153 297.941 544 297.301 544C296.287 544 295.414 544.367 294.681 545.1L293.441 543.64C294.534 542.627 295.887 542.12 297.501 542.12C298.327 542.12 299.027 542.24 299.601 542.48C300.187 542.707 300.634 543.027 300.941 543.44C301.247 543.84 301.461 544.267 301.581 544.72C301.714 545.16 301.781 545.64 301.781 546.16V552H299.541ZM299.501 547.96V547.62H298.961C296.521 547.62 295.301 548.153 295.301 549.22C295.301 549.647 295.461 549.953 295.781 550.14C296.114 550.327 296.514 550.42 296.981 550.42C297.794 550.42 298.414 550.207 298.841 549.78C299.281 549.34 299.501 548.733 299.501 547.96ZM303.677 552.12C303.037 552.12 302.557 552.067 302.237 551.96L302.417 550C302.617 550.067 302.83 550.1 303.057 550.1C303.67 550.1 304.137 549.787 304.457 549.16C304.777 548.533 304.937 547.42 304.937 545.82V542.4H312.797V552H310.397V544.32H307.237V546.36C307.237 548.333 306.95 549.787 306.377 550.72C305.803 551.653 304.903 552.12 303.677 552.12ZM314.686 552V542.4H317.086V545.76H319.166C320.353 545.76 321.293 546.02 321.986 546.54C322.693 547.047 323.046 547.82 323.046 548.86C323.046 549.873 322.693 550.653 321.986 551.2C321.279 551.733 320.339 552 319.166 552H314.686ZM317.086 550.18H318.546C319.266 550.18 319.793 550.08 320.126 549.88C320.473 549.68 320.646 549.347 320.646 548.88C320.646 548.4 320.486 548.06 320.166 547.86C319.846 547.66 319.306 547.56 318.546 547.56H317.086V550.18ZM323.979 552V542.4H326.379V546.02H330.419V542.4H332.819V552H330.419V547.94H326.379V552H323.979ZM344.758 552V542.4H347.158V552H344.758ZM334.698 552V542.4H337.098V545.76H339.178C340.364 545.76 341.304 546.02 341.998 546.54C342.704 547.047 343.058 547.82 343.058 548.86C343.058 549.873 342.704 550.653 341.998 551.2C341.291 551.733 340.351 552 339.178 552H334.698ZM337.098 550.18H338.558C339.278 550.18 339.804 550.08 340.138 549.88C340.484 549.68 340.658 549.347 340.658 548.88C340.658 548.4 340.498 548.06 340.178 547.86C339.858 547.66 339.318 547.56 338.558 547.56H337.098V550.18ZM350.87 546.24H355.79C355.79 545.573 355.597 545.02 355.21 544.58C354.823 544.14 354.263 543.92 353.53 543.92C352.823 543.92 352.217 544.14 351.71 544.58C351.203 545.02 350.923 545.573 350.87 546.24ZM358.19 547.32C358.19 547.6 358.183 547.813 358.17 547.96H350.87C350.923 548.627 351.217 549.187 351.75 549.64C352.283 550.093 352.903 550.32 353.61 550.32C354.717 550.32 355.563 549.907 356.15 549.08L357.75 550.36C356.803 551.64 355.43 552.28 353.63 552.28C352.123 552.28 350.883 551.827 349.91 550.92C348.95 550.013 348.47 548.793 348.47 547.26C348.47 545.727 348.95 544.487 349.91 543.54C350.87 542.593 352.083 542.12 353.55 542.12C354.937 542.12 356.057 542.567 356.91 543.46C357.763 544.353 358.19 545.64 358.19 547.32ZM243.713 576V566.4H252.553V576H250.153V568.32H246.113V576H243.713ZM254.432 566.4H256.732V567.74H256.792C257.072 567.3 257.492 566.92 258.052 566.6C258.626 566.28 259.312 566.12 260.112 566.12C261.472 566.12 262.586 566.6 263.452 567.56C264.332 568.52 264.772 569.72 264.772 571.16C264.772 572.6 264.339 573.813 263.472 574.8C262.619 575.787 261.479 576.28 260.052 576.28C259.386 576.28 258.766 576.14 258.192 575.86C257.619 575.58 257.179 575.2 256.872 574.72H256.832V580.8H254.432V566.4ZM261.592 573.34C262.086 572.713 262.332 571.987 262.332 571.16C262.332 570.333 262.086 569.613 261.592 569C261.112 568.387 260.439 568.08 259.572 568.08C258.732 568.08 258.052 568.4 257.532 569.04C257.012 569.68 256.752 570.4 256.752 571.2C256.752 572 257.012 572.713 257.532 573.34C258.052 573.967 258.732 574.28 259.572 574.28C260.439 574.28 261.112 573.967 261.592 573.34ZM265.528 571.16C265.528 569.68 266.028 568.473 267.028 567.54C268.028 566.593 269.268 566.12 270.748 566.12C272.228 566.12 273.468 566.593 274.468 567.54C275.468 568.473 275.968 569.68 275.968 571.16C275.968 572.653 275.462 573.88 274.448 574.84C273.448 575.8 272.215 576.28 270.748 576.28C269.282 576.28 268.042 575.8 267.028 574.84C266.028 573.88 265.528 572.653 265.528 571.16ZM268.688 569C268.208 569.613 267.968 570.333 267.968 571.16C267.968 571.987 268.208 572.713 268.688 573.34C269.168 573.967 269.855 574.28 270.748 574.28C271.642 574.28 272.328 573.967 272.808 573.34C273.288 572.713 273.528 571.987 273.528 571.16C273.528 570.333 273.288 569.613 272.808 569C272.328 568.387 271.642 568.08 270.748 568.08C269.855 568.08 269.168 568.387 268.688 569ZM277.295 576V566.4H284.035V568.32H279.695V576H277.295ZM284.87 566.4H287.17V567.74H287.23C287.51 567.3 287.93 566.92 288.49 566.6C289.063 566.28 289.75 566.12 290.55 566.12C291.91 566.12 293.023 566.6 293.89 567.56C294.77 568.52 295.21 569.72 295.21 571.16C295.21 572.6 294.776 573.813 293.91 574.8C293.056 575.787 291.916 576.28 290.49 576.28C289.823 576.28 289.203 576.14 288.63 575.86C288.056 575.58 287.616 575.2 287.31 574.72H287.27V580.8H284.87V566.4ZM292.03 573.34C292.523 572.713 292.77 571.987 292.77 571.16C292.77 570.333 292.523 569.613 292.03 569C291.55 568.387 290.876 568.08 290.01 568.08C289.17 568.08 288.49 568.4 287.97 569.04C287.45 569.68 287.19 570.4 287.19 571.2C287.19 572 287.45 572.713 287.97 573.34C288.49 573.967 289.17 574.28 290.01 574.28C290.876 574.28 291.55 573.967 292.03 573.34ZM302.486 576V574.78H302.426C302.186 575.207 301.793 575.56 301.246 575.84C300.713 576.107 300.113 576.24 299.446 576.24C298.526 576.24 297.693 576 296.946 575.52C296.213 575.027 295.846 574.273 295.846 573.26C295.846 572.713 295.979 572.24 296.246 571.84C296.526 571.427 296.873 571.107 297.286 570.88C297.699 570.653 298.213 570.473 298.826 570.34C299.453 570.193 300.039 570.1 300.586 570.06C301.146 570.02 301.766 570 302.446 570V569.76C302.446 569.2 302.239 568.767 301.826 568.46C301.413 568.153 300.886 568 300.246 568C299.233 568 298.359 568.367 297.626 569.1L296.386 567.64C297.479 566.627 298.833 566.12 300.446 566.12C301.273 566.12 301.973 566.24 302.546 566.48C303.133 566.707 303.579 567.027 303.886 567.44C304.193 567.84 304.406 568.267 304.526 568.72C304.659 569.16 304.726 569.64 304.726 570.16V576H302.486ZM302.446 571.96V571.62H301.906C299.466 571.62 298.246 572.153 298.246 573.22C298.246 573.647 298.406 573.953 298.726 574.14C299.059 574.327 299.459 574.42 299.926 574.42C300.739 574.42 301.359 574.207 301.786 573.78C302.226 573.34 302.446 572.733 302.446 571.96ZM306.522 576V566.4H309.882L312.682 572.88H312.702L315.402 566.4H318.802V576H316.442V569.2H316.402L313.422 576H311.822L308.922 569.18H308.882V576H306.522ZM320.678 576V566.4H324.038L326.838 572.88H326.858L329.558 566.4H332.958V576H330.598V569.2H330.558L327.578 576H325.978L323.078 569.18H323.038V576H320.678ZM344.895 576V566.4H347.295V576H344.895ZM334.835 576V566.4H337.235V569.76H339.315C340.501 569.76 341.441 570.02 342.135 570.54C342.841 571.047 343.195 571.82 343.195 572.86C343.195 573.873 342.841 574.653 342.135 575.2C341.428 575.733 340.488 576 339.315 576H334.835ZM337.235 574.18H338.695C339.415 574.18 339.941 574.08 340.275 573.88C340.621 573.68 340.795 573.347 340.795 572.88C340.795 572.4 340.635 572.06 340.315 571.86C339.995 571.66 339.455 571.56 338.695 571.56H337.235V574.18Z"
        fill="#FAFAFA"
      />
    </g>`,
    title: 'Федеральные программы',
    name: 'federal-program',
  },
  {
    id: 6,
    path: `<g filter="url(#filter15_b_135_6962)">
      <path
        d="M532.537 223.076C542.438 218.975 553.562 218.975 563.463 223.076L639.189 254.443C649.09 258.544 656.956 266.41 661.057 276.311L692.424 352.037C696.525 361.938 696.525 373.062 692.424 382.963L661.057 458.689C656.956 468.59 649.09 476.456 639.189 480.557L563.463 511.924C553.562 516.025 542.438 516.025 532.537 511.924L456.811 480.557C446.91 476.456 439.044 468.59 434.943 458.689L403.576 382.963C399.475 373.062 399.475 361.938 403.576 352.037L434.943 276.311C439.044 266.41 446.91 258.544 456.811 254.443L532.537 223.076Z"
        fill="url(#paint8_linear_135_6962)"
      />
      <path
        d="M533.754 226.014C542.876 222.235 553.124 222.235 562.246 226.014L637.972 257.381C647.094 261.159 654.341 268.406 658.119 277.528L689.486 353.254C693.265 362.376 693.265 372.624 689.486 381.746L658.119 457.472C654.341 466.594 647.094 473.841 637.972 477.619L562.246 508.986C553.124 512.765 542.876 512.765 533.754 508.986L458.028 477.619C448.906 473.841 441.659 466.594 437.881 457.472L406.514 381.746C402.735 372.624 402.735 362.376 406.514 353.254L437.881 277.528C441.659 268.406 448.906 261.159 458.028 257.381L533.754 226.014Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter16_dddd_135_6962)">
      <g filter="url(#filter17_b_135_6962)">
        <rect
          x="517"
          y="302"
          width="64"
          height="64"
          rx="12"
          fill="url(#paint9_linear_135_6962)"
        />
        <rect
          x="515"
          y="300"
          width="68"
          height="68"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M545.267 341.111V339.333H532.219L532.201 346.444C532.201 348.418 533.862 350 535.934 350H562.067C564.139 350 565.801 348.418 565.801 346.444V339.333H552.734V341.111H545.267ZM563.934 325.111H556.449V322.414C556.449 321.865 556.221 321.338 555.816 320.953L553.335 318.59C552.938 318.212 552.403 318 551.846 318H546.118C545.561 318 545.026 318.212 544.629 318.59L542.148 320.953C541.743 321.338 541.515 321.865 541.515 322.414V325.111H534.067C532.014 325.111 530.334 326.711 530.334 328.667V334C530.334 335.973 531.995 337.556 534.067 337.556H545.267V334H552.734V337.556H563.934C565.987 337.556 567.667 335.956 567.667 334V328.667C567.667 326.711 565.987 325.111 563.934 325.111ZM552.734 325.111H545.267V323.607C545.267 322.474 546.217 321.556 547.389 321.556H550.613C551.784 321.556 552.734 322.474 552.734 323.607V325.111Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M496.447 405V390.84H498.967V401.2H499.027L505.667 390.84H508.387V405H505.867V394.72H505.827L499.207 405H496.447ZM510.385 405V395.4H512.785V399.02H516.825V395.4H519.225V405H516.825V400.94H512.785V405H510.385ZM521.104 405V395.4H526.064C526.637 395.4 527.151 395.46 527.604 395.58C528.071 395.7 528.491 395.96 528.864 396.36C529.237 396.747 529.424 397.26 529.424 397.9C529.424 398.393 529.271 398.827 528.964 399.2C528.671 399.56 528.284 399.8 527.804 399.92V399.96C528.404 400.053 528.891 400.307 529.264 400.72C529.651 401.12 529.844 401.64 529.844 402.28C529.844 403.133 529.511 403.8 528.844 404.28C528.177 404.76 527.297 405 526.204 405H521.104ZM523.504 403.28H525.764C526.871 403.28 527.424 402.893 527.424 402.12C527.424 401.347 526.891 400.96 525.824 400.96H523.504V403.28ZM523.504 399.24H525.784C526.664 399.24 527.104 398.887 527.104 398.18C527.104 397.46 526.604 397.1 525.604 397.1H523.504V399.24ZM532.999 399.24H537.919C537.919 398.573 537.725 398.02 537.339 397.58C536.952 397.14 536.392 396.92 535.659 396.92C534.952 396.92 534.345 397.14 533.839 397.58C533.332 398.02 533.052 398.573 532.999 399.24ZM540.319 400.32C540.319 400.6 540.312 400.813 540.299 400.96H532.999C533.052 401.627 533.345 402.187 533.879 402.64C534.412 403.093 535.032 403.32 535.739 403.32C536.845 403.32 537.692 402.907 538.279 402.08L539.879 403.36C538.932 404.64 537.559 405.28 535.759 405.28C534.252 405.28 533.012 404.827 532.039 403.92C531.079 403.013 530.599 401.793 530.599 400.26C530.599 398.727 531.079 397.487 532.039 396.54C532.999 395.593 534.212 395.12 535.679 395.12C537.065 395.12 538.185 395.567 539.039 396.46C539.892 397.353 540.319 398.64 540.319 400.32ZM549.843 396.62L548.203 398.06C548.016 397.793 547.736 397.573 547.363 397.4C546.99 397.213 546.61 397.12 546.223 397.12C545.396 397.12 544.75 397.433 544.283 398.06C543.816 398.673 543.583 399.387 543.583 400.2C543.583 401.027 543.823 401.747 544.303 402.36C544.783 402.973 545.45 403.28 546.303 403.28C547.183 403.28 547.856 402.993 548.323 402.42L549.823 403.94C548.996 404.833 547.816 405.28 546.283 405.28C544.816 405.28 543.583 404.82 542.583 403.9C541.583 402.98 541.083 401.747 541.083 400.2C541.083 398.68 541.576 397.453 542.563 396.52C543.55 395.587 544.77 395.12 546.223 395.12C546.93 395.12 547.616 395.253 548.283 395.52C548.95 395.787 549.47 396.153 549.843 396.62ZM552.8 405V397.32H549.72V395.4H558.26V397.32H555.2V405H552.8ZM559.096 405V395.4H561.496V401.6H561.536L565.736 395.4H568.336V405H565.936V398.84H565.896L561.736 405H559.096ZM578.465 407.74V405H570.225V395.4H572.625V403.04H576.665V395.4H579.065V403.04H580.465V407.74H578.465ZM581.295 405V395.4H583.695V401.6H583.735L587.935 395.4H590.535V405H588.135V398.84H588.095L583.935 405H581.295ZM592.424 405V395.4H594.824V401.6H594.864L599.064 395.4H601.664V405H599.264V398.84H599.224L595.064 405H592.424ZM462.836 429V419.4H467.796C468.37 419.4 468.883 419.46 469.336 419.58C469.803 419.7 470.223 419.96 470.596 420.36C470.97 420.747 471.156 421.26 471.156 421.9C471.156 422.393 471.003 422.827 470.696 423.2C470.403 423.56 470.016 423.8 469.536 423.92V423.96C470.136 424.053 470.623 424.307 470.996 424.72C471.383 425.12 471.576 425.64 471.576 426.28C471.576 427.133 471.243 427.8 470.576 428.28C469.91 428.76 469.03 429 467.936 429H462.836ZM465.236 427.28H467.496C468.603 427.28 469.156 426.893 469.156 426.12C469.156 425.347 468.623 424.96 467.556 424.96H465.236V427.28ZM465.236 423.24H467.516C468.396 423.24 468.836 422.887 468.836 422.18C468.836 421.46 468.336 421.1 467.336 421.1H465.236V423.24ZM476.331 424.16C476.331 422.68 476.831 421.473 477.831 420.54C478.831 419.593 480.071 419.12 481.551 419.12C483.031 419.12 484.271 419.593 485.271 420.54C486.271 421.473 486.771 422.68 486.771 424.16C486.771 425.653 486.265 426.88 485.251 427.84C484.251 428.8 483.018 429.28 481.551 429.28C480.085 429.28 478.845 428.8 477.831 427.84C476.831 426.88 476.331 425.653 476.331 424.16ZM479.491 422C479.011 422.613 478.771 423.333 478.771 424.16C478.771 424.987 479.011 425.713 479.491 426.34C479.971 426.967 480.658 427.28 481.551 427.28C482.445 427.28 483.131 426.967 483.611 426.34C484.091 425.713 484.331 424.987 484.331 424.16C484.331 423.333 484.091 422.613 483.611 422C483.131 421.387 482.445 421.08 481.551 421.08C480.658 421.08 479.971 421.387 479.491 422ZM496.298 420.62L494.658 422.06C494.472 421.793 494.192 421.573 493.818 421.4C493.445 421.213 493.065 421.12 492.678 421.12C491.852 421.12 491.205 421.433 490.738 422.06C490.272 422.673 490.038 423.387 490.038 424.2C490.038 425.027 490.278 425.747 490.758 426.36C491.238 426.973 491.905 427.28 492.758 427.28C493.638 427.28 494.312 426.993 494.778 426.42L496.278 427.94C495.452 428.833 494.272 429.28 492.738 429.28C491.272 429.28 490.038 428.82 489.038 427.9C488.038 426.98 487.538 425.747 487.538 424.2C487.538 422.68 488.032 421.453 489.018 420.52C490.005 419.587 491.225 419.12 492.678 419.12C493.385 419.12 494.072 419.253 494.738 419.52C495.405 419.787 495.925 420.153 496.298 420.62ZM496.864 429V419.4H499.264V423.02H503.304V419.4H505.704V429H503.304V424.94H499.264V429H496.864ZM507.023 424.16C507.023 422.68 507.523 421.473 508.523 420.54C509.523 419.593 510.763 419.12 512.243 419.12C513.723 419.12 514.963 419.593 515.963 420.54C516.963 421.473 517.463 422.68 517.463 424.16C517.463 425.653 516.956 426.88 515.943 427.84C514.943 428.8 513.709 429.28 512.243 429.28C510.776 429.28 509.536 428.8 508.523 427.84C507.523 426.88 507.023 425.653 507.023 424.16ZM510.183 422C509.703 422.613 509.463 423.333 509.463 424.16C509.463 424.987 509.703 425.713 510.183 426.34C510.663 426.967 511.349 427.28 512.243 427.28C513.136 427.28 513.823 426.967 514.303 426.34C514.783 425.713 515.023 424.987 515.023 424.16C515.023 423.333 514.783 422.613 514.303 422C513.823 421.387 513.136 421.08 512.243 421.08C511.349 421.08 510.663 421.387 510.183 422ZM518.79 429V419.4H523.75C524.323 419.4 524.836 419.46 525.29 419.58C525.756 419.7 526.176 419.96 526.55 420.36C526.923 420.747 527.11 421.26 527.11 421.9C527.11 422.393 526.956 422.827 526.65 423.2C526.356 423.56 525.97 423.8 525.49 423.92V423.96C526.09 424.053 526.576 424.307 526.95 424.72C527.336 425.12 527.53 425.64 527.53 426.28C527.53 427.133 527.196 427.8 526.53 428.28C525.863 428.76 524.983 429 523.89 429H518.79ZM521.19 427.28H523.45C524.556 427.28 525.11 426.893 525.11 426.12C525.11 425.347 524.576 424.96 523.51 424.96H521.19V427.28ZM521.19 423.24H523.47C524.35 423.24 524.79 422.887 524.79 422.18C524.79 421.46 524.29 421.1 523.29 421.1H521.19V423.24ZM528.844 429V419.4H531.244V423.02H535.284V419.4H537.684V429H535.284V424.94H531.244V429H528.844ZM539.003 424.16C539.003 422.68 539.503 421.473 540.503 420.54C541.503 419.593 542.743 419.12 544.223 419.12C545.703 419.12 546.943 419.593 547.943 420.54C548.943 421.473 549.443 422.68 549.443 424.16C549.443 425.653 548.936 426.88 547.923 427.84C546.923 428.8 545.69 429.28 544.223 429.28C542.756 429.28 541.516 428.8 540.503 427.84C539.503 426.88 539.003 425.653 539.003 424.16ZM542.163 422C541.683 422.613 541.443 423.333 541.443 424.16C541.443 424.987 541.683 425.713 542.163 426.34C542.643 426.967 543.33 427.28 544.223 427.28C545.116 427.28 545.803 426.967 546.283 426.34C546.763 425.713 547.003 424.987 547.003 424.16C547.003 423.333 546.763 422.613 546.283 422C545.803 421.387 545.116 421.08 544.223 421.08C543.33 421.08 542.643 421.387 542.163 422ZM555.35 417.72C554.457 417.72 553.743 417.473 553.21 416.98C552.677 416.473 552.35 415.78 552.23 414.9L553.53 414.76C553.597 415.213 553.79 415.56 554.11 415.8C554.443 416.04 554.857 416.16 555.35 416.16C555.843 416.16 556.257 416.04 556.59 415.8C556.923 415.56 557.123 415.213 557.19 414.76L558.47 415.02C558.363 415.873 558.043 416.54 557.51 417.02C556.977 417.487 556.257 417.72 555.35 417.72ZM550.77 429V419.4H553.17V425.6H553.21L557.41 419.4H560.01V429H557.61V422.84H557.57L553.41 429H550.77ZM565.899 429V419.4H568.299V423.66H568.359L572.059 419.4H575.099L570.879 423.92L575.419 429H572.339L568.359 424.44H568.299V429H565.899ZM581.718 429V427.78H581.658C581.418 428.207 581.025 428.56 580.478 428.84C579.945 429.107 579.345 429.24 578.678 429.24C577.758 429.24 576.925 429 576.178 428.52C575.445 428.027 575.078 427.273 575.078 426.26C575.078 425.713 575.212 425.24 575.478 424.84C575.758 424.427 576.105 424.107 576.518 423.88C576.932 423.653 577.445 423.473 578.058 423.34C578.685 423.193 579.272 423.1 579.818 423.06C580.378 423.02 580.998 423 581.678 423V422.76C581.678 422.2 581.472 421.767 581.058 421.46C580.645 421.153 580.118 421 579.478 421C578.465 421 577.592 421.367 576.858 422.1L575.618 420.64C576.712 419.627 578.065 419.12 579.678 419.12C580.505 419.12 581.205 419.24 581.778 419.48C582.365 419.707 582.812 420.027 583.118 420.44C583.425 420.84 583.638 421.267 583.758 421.72C583.892 422.16 583.958 422.64 583.958 423.16V429H581.718ZM581.678 424.96V424.62H581.138C578.698 424.62 577.478 425.153 577.478 426.22C577.478 426.647 577.638 426.953 577.958 427.14C578.292 427.327 578.692 427.42 579.158 427.42C579.972 427.42 580.592 427.207 581.018 426.78C581.458 426.34 581.678 425.733 581.678 424.96ZM585.754 429V419.4H594.594V429H592.194V421.32H588.154V429H585.754ZM596.473 429V419.4H598.873V425.6H598.913L603.113 419.4H605.713V429H603.313V422.84H603.273L599.113 429H596.473ZM609.642 429V421.32H606.562V419.4H615.102V421.32H612.042V429H609.642ZM621.898 429V427.78H621.838C621.598 428.207 621.205 428.56 620.658 428.84C620.125 429.107 619.525 429.24 618.858 429.24C617.938 429.24 617.105 429 616.358 428.52C615.625 428.027 615.258 427.273 615.258 426.26C615.258 425.713 615.391 425.24 615.658 424.84C615.938 424.427 616.285 424.107 616.698 423.88C617.111 423.653 617.625 423.473 618.238 423.34C618.865 423.193 619.451 423.1 619.998 423.06C620.558 423.02 621.178 423 621.858 423V422.76C621.858 422.2 621.651 421.767 621.238 421.46C620.825 421.153 620.298 421 619.658 421C618.645 421 617.771 421.367 617.038 422.1L615.798 420.64C616.891 419.627 618.245 419.12 619.858 419.12C620.685 419.12 621.385 419.24 621.958 419.48C622.545 419.707 622.991 420.027 623.298 420.44C623.605 420.84 623.818 421.267 623.938 421.72C624.071 422.16 624.138 422.64 624.138 423.16V429H621.898ZM621.858 424.96V424.62H621.318C618.878 424.62 617.658 425.153 617.658 426.22C617.658 426.647 617.818 426.953 618.138 427.14C618.471 427.327 618.871 427.42 619.338 427.42C620.151 427.42 620.771 427.207 621.198 426.78C621.638 426.34 621.858 425.733 621.858 424.96ZM626.034 429.12C625.394 429.12 624.914 429.067 624.594 428.96L624.774 427C624.974 427.067 625.187 427.1 625.414 427.1C626.027 427.1 626.494 426.787 626.814 426.16C627.134 425.533 627.294 424.42 627.294 422.82V419.4H635.154V429H632.754V421.32H629.594V423.36C629.594 425.333 629.307 426.787 628.734 427.72C628.161 428.653 627.261 429.12 626.034 429.12Z"
      fill="#FAFAFA"
    />`,
    title: 'Инвестиции в основной капитал',
    name: 'investments',
  },
  {
    id: 6,
    path: `<g filter="url(#filter18_b_135_6962)">
      <path
        d="M90.0166 270.085C96.729 267.305 104.271 267.305 110.983 270.085L162.323 291.351C169.036 294.131 174.369 299.464 177.149 306.177L198.415 357.517C201.195 364.229 201.195 371.771 198.415 378.483L177.149 429.823C174.369 436.536 169.036 441.869 162.323 444.649L110.983 465.915C104.271 468.695 96.729 468.695 90.0166 465.915L38.6767 444.649C31.9643 441.869 26.6313 436.536 23.8509 429.823L2.58528 378.483C-0.195097 371.771 -0.195091 364.229 2.58529 357.517L23.8509 306.177C26.6313 299.464 31.9643 294.131 38.6767 291.351L90.0166 270.085Z"
        fill="url(#paint10_linear_135_6962)"
      />
      <path
        d="M91.2335 273.023C97.1668 270.566 103.833 270.566 109.766 273.023L161.106 294.289C167.04 296.747 171.753 301.46 174.211 307.394L195.477 358.734C197.934 364.667 197.934 371.333 195.477 377.266L174.211 428.606C171.753 434.54 167.04 439.253 161.106 441.711L109.766 462.977C103.833 465.434 97.1667 465.434 91.2335 462.977L39.8937 441.711C33.9604 439.253 29.2465 434.54 26.7889 428.606L5.52322 377.266C3.06559 371.333 3.0656 364.667 5.52322 358.734L26.7889 307.394C29.2465 301.46 33.9604 296.747 39.8937 294.289L91.2335 273.023Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter19_dddd_135_6962)">
      <g filter="url(#filter20_b_135_6962)">
        <rect
          x="76.5"
          y="317"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint11_linear_135_6962)"
        />
        <rect
          x="74.5"
          y="315"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M112.173 331.69C111.987 330.944 111.226 330.499 110.476 330.665C107.319 331.362 103.793 331.667 100.501 331.667C97.2086 331.667 93.6828 331.362 90.5258 330.665C89.7756 330.499 89.0148 330.944 88.8285 331.69C88.6466 332.417 89.0807 333.158 89.8117 333.324C91.5176 333.712 93.3435 334.002 95.1296 334.199C95.9041 334.285 96.5009 334.932 96.5009 335.711V349C96.5009 349.736 97.0979 350.333 97.8342 350.333C98.5706 350.333 99.1676 349.736 99.1676 349V343.667C99.1676 342.93 99.7645 342.333 100.501 342.333C101.237 342.333 101.834 342.93 101.834 343.667V349C101.834 349.736 102.431 350.333 103.168 350.333C103.904 350.333 104.501 349.736 104.501 349V335.711C104.501 334.932 105.098 334.285 105.872 334.199C107.658 334.002 109.484 333.712 111.19 333.324C111.921 333.158 112.355 332.417 112.173 331.69ZM100.501 330.333C101.968 330.333 103.168 329.133 103.168 327.667C103.168 326.2 101.968 325 100.501 325C99.0342 325 97.8342 326.2 97.8342 327.667C97.8342 329.133 99.0342 330.333 100.501 330.333ZM93.8342 355.667C93.8342 356.403 94.4312 357 95.1676 357C95.904 357 96.5009 356.403 96.5009 355.667C96.5009 354.93 95.904 354.333 95.1676 354.333C94.4312 354.333 93.8342 354.93 93.8342 355.667ZM99.1676 355.667C99.1676 356.403 99.7645 357 100.501 357C101.237 357 101.834 356.403 101.834 355.667C101.834 354.93 101.237 354.333 100.501 354.333C99.7645 354.333 99.1676 354.93 99.1676 355.667ZM104.501 355.667C104.501 356.403 105.098 357 105.834 357C106.571 357 107.168 356.403 107.168 355.667C107.168 354.93 106.571 354.333 105.834 354.333C105.098 354.333 104.501 354.93 104.501 355.667Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M45.7558 396V384.672H53.1798V386.368H47.7718V389.28H49.7718C51.0305 389.28 52.0438 389.557 52.8118 390.112C53.5798 390.667 53.9638 391.509 53.9638 392.64C53.9638 393.749 53.5798 394.587 52.8118 395.152C52.0438 395.717 51.0358 396 49.7878 396H45.7558ZM47.7718 394.304H49.5638C51.1425 394.304 51.9318 393.749 51.9318 392.64C51.9318 392.096 51.7238 391.685 51.3078 391.408C50.9025 391.12 50.3211 390.976 49.5638 390.976H47.7718V394.304ZM54.9273 396.096C54.4153 396.096 54.0313 396.053 53.7753 395.968L53.9193 394.4C54.0793 394.453 54.25 394.48 54.4313 394.48C54.922 394.48 55.2953 394.229 55.5513 393.728C55.8073 393.227 55.9353 392.336 55.9353 391.056V388.32H62.2233V396H60.3033V389.856H57.7753V391.488C57.7753 393.067 57.546 394.229 57.0873 394.976C56.6286 395.723 55.9086 396.096 54.9273 396.096ZM68.3028 396V395.024H68.2548C68.0628 395.365 67.7481 395.648 67.3108 395.872C66.8841 396.085 66.4041 396.192 65.8708 396.192C65.1348 396.192 64.4681 396 63.8708 395.616C63.2841 395.221 62.9908 394.619 62.9908 393.808C62.9908 393.371 63.0975 392.992 63.3108 392.672C63.5348 392.341 63.8121 392.085 64.1428 391.904C64.4735 391.723 64.8841 391.579 65.3748 391.472C65.8761 391.355 66.3455 391.28 66.7828 391.248C67.2308 391.216 67.7268 391.2 68.2708 391.2V391.008C68.2708 390.56 68.1055 390.213 67.7748 389.968C67.4441 389.723 67.0228 389.6 66.5108 389.6C65.7001 389.6 65.0015 389.893 64.4148 390.48L63.4228 389.312C64.2975 388.501 65.3801 388.096 66.6708 388.096C67.3321 388.096 67.8921 388.192 68.3508 388.384C68.8201 388.565 69.1775 388.821 69.4228 389.152C69.6681 389.472 69.8388 389.813 69.9348 390.176C70.0415 390.528 70.0948 390.912 70.0948 391.328V396H68.3028ZM68.2708 392.768V392.496H67.8388C65.8868 392.496 64.9108 392.923 64.9108 393.776C64.9108 394.117 65.0388 394.363 65.2948 394.512C65.5615 394.661 65.8815 394.736 66.2548 394.736C66.9055 394.736 67.4015 394.565 67.7428 394.224C68.0948 393.872 68.2708 393.387 68.2708 392.768ZM71.3317 396V388.32H76.7237V389.856H73.2517V396H71.3317ZM76.5556 392.128C76.5556 390.944 76.9556 389.979 77.7556 389.232C78.5556 388.475 79.5476 388.096 80.7316 388.096C81.9156 388.096 82.9076 388.475 83.7076 389.232C84.5076 389.979 84.9076 390.944 84.9076 392.128C84.9076 393.323 84.5022 394.304 83.6916 395.072C82.8916 395.84 81.9049 396.224 80.7316 396.224C79.5582 396.224 78.5662 395.84 77.7556 395.072C76.9556 394.304 76.5556 393.323 76.5556 392.128ZM79.0836 390.4C78.6996 390.891 78.5076 391.467 78.5076 392.128C78.5076 392.789 78.6996 393.371 79.0836 393.872C79.4676 394.373 80.0169 394.624 80.7316 394.624C81.4462 394.624 81.9956 394.373 82.3796 393.872C82.7636 393.371 82.9556 392.789 82.9556 392.128C82.9556 391.467 82.7636 390.891 82.3796 390.4C81.9956 389.909 81.4462 389.664 80.7316 389.664C80.0169 389.664 79.4676 389.909 79.0836 390.4ZM92.3292 389.296L91.0172 390.448C90.8679 390.235 90.6439 390.059 90.3452 389.92C90.0465 389.771 89.7425 389.696 89.4332 389.696C88.7719 389.696 88.2545 389.947 87.8812 390.448C87.5079 390.939 87.3212 391.509 87.3212 392.16C87.3212 392.821 87.5132 393.397 87.8972 393.888C88.2812 394.379 88.8145 394.624 89.4972 394.624C90.2012 394.624 90.7399 394.395 91.1132 393.936L92.3132 395.152C91.6519 395.867 90.7079 396.224 89.4812 396.224C88.3079 396.224 87.3212 395.856 86.5212 395.12C85.7212 394.384 85.3212 393.397 85.3212 392.16C85.3212 390.944 85.7159 389.963 86.5052 389.216C87.2945 388.469 88.2705 388.096 89.4332 388.096C89.9985 388.096 90.5479 388.203 91.0812 388.416C91.6145 388.629 92.0305 388.923 92.3292 389.296ZM92.1337 392.128C92.1337 390.944 92.5337 389.979 93.3337 389.232C94.1337 388.475 95.1257 388.096 96.3097 388.096C97.4937 388.096 98.4857 388.475 99.2857 389.232C100.086 389.979 100.486 390.944 100.486 392.128C100.486 393.323 100.08 394.304 99.2697 395.072C98.4697 395.84 97.483 396.224 96.3097 396.224C95.1364 396.224 94.1444 395.84 93.3337 395.072C92.5337 394.304 92.1337 393.323 92.1337 392.128ZM94.6617 390.4C94.2777 390.891 94.0857 391.467 94.0857 392.128C94.0857 392.789 94.2777 393.371 94.6617 393.872C95.0457 394.373 95.595 394.624 96.3097 394.624C97.0244 394.624 97.5737 394.373 97.9577 393.872C98.3417 393.371 98.5337 392.789 98.5337 392.128C98.5337 391.467 98.3417 390.891 97.9577 390.4C97.5737 389.909 97.0244 389.664 96.3097 389.664C95.595 389.664 95.0457 389.909 94.6617 390.4ZM107.907 389.296L106.595 390.448C106.446 390.235 106.222 390.059 105.923 389.92C105.625 389.771 105.321 389.696 105.011 389.696C104.35 389.696 103.833 389.947 103.459 390.448C103.086 390.939 102.899 391.509 102.899 392.16C102.899 392.821 103.091 393.397 103.475 393.888C103.859 394.379 104.393 394.624 105.075 394.624C105.779 394.624 106.318 394.395 106.691 393.936L107.891 395.152C107.23 395.867 106.286 396.224 105.059 396.224C103.886 396.224 102.899 395.856 102.099 395.12C101.299 394.384 100.899 393.397 100.899 392.16C100.899 390.944 101.294 389.963 102.083 389.216C102.873 388.469 103.849 388.096 105.011 388.096C105.577 388.096 106.126 388.203 106.659 388.416C107.193 388.629 107.609 388.923 107.907 389.296ZM110.073 396V389.856H107.609V388.32H114.441V389.856H111.993V396H110.073ZM114.274 392.128C114.274 390.944 114.674 389.979 115.474 389.232C116.274 388.475 117.266 388.096 118.45 388.096C119.634 388.096 120.626 388.475 121.426 389.232C122.226 389.979 122.626 390.944 122.626 392.128C122.626 393.323 122.221 394.304 121.41 395.072C120.61 395.84 119.624 396.224 118.45 396.224C117.277 396.224 116.285 395.84 115.474 395.072C114.674 394.304 114.274 393.323 114.274 392.128ZM116.802 390.4C116.418 390.891 116.226 391.467 116.226 392.128C116.226 392.789 116.418 393.371 116.802 393.872C117.186 394.373 117.736 394.624 118.45 394.624C119.165 394.624 119.714 394.373 120.098 393.872C120.482 393.371 120.674 392.789 120.674 392.128C120.674 391.467 120.482 390.891 120.098 390.4C119.714 389.909 119.165 389.664 118.45 389.664C117.736 389.664 117.186 389.909 116.802 390.4ZM122.912 396L124.848 393.088C123.707 392.757 123.136 391.995 123.136 390.8C123.136 389.989 123.419 389.376 123.984 388.96C124.56 388.533 125.301 388.32 126.208 388.32H130.08V396H128.16V393.28H126.736L125.168 396H122.912ZM126.672 391.856H128.16V389.76H126.672C126.064 389.76 125.632 389.84 125.376 390C125.12 390.16 124.992 390.432 124.992 390.816C124.992 391.189 125.125 391.456 125.392 391.616C125.669 391.776 126.096 391.856 126.672 391.856ZM131.379 396V388.32H133.299V391.216H136.531V388.32H138.451V396H136.531V392.752H133.299V396H131.379ZM139.754 396V388.32H141.674V393.28H141.706L145.066 388.32H147.146V396H145.226V391.072H145.194L141.866 396H139.754ZM149.929 391.392H153.865C153.865 390.859 153.71 390.416 153.401 390.064C153.091 389.712 152.643 389.536 152.057 389.536C151.491 389.536 151.006 389.712 150.601 390.064C150.195 390.416 149.971 390.859 149.929 391.392ZM155.785 392.256C155.785 392.48 155.779 392.651 155.769 392.768H149.929C149.971 393.301 150.206 393.749 150.633 394.112C151.059 394.475 151.555 394.656 152.121 394.656C153.006 394.656 153.683 394.325 154.153 393.664L155.433 394.688C154.675 395.712 153.577 396.224 152.137 396.224C150.931 396.224 149.939 395.861 149.161 395.136C148.393 394.411 148.009 393.435 148.009 392.208C148.009 390.981 148.393 389.989 149.161 389.232C149.929 388.475 150.899 388.096 152.073 388.096C153.182 388.096 154.078 388.453 154.761 389.168C155.443 389.883 155.785 390.912 155.785 392.256ZM64.6442 415V407.32H66.5642V410.216H69.7962V407.32H71.7162V415H69.7962V411.752H66.5642V415H64.6442ZM77.7872 415V414.024H77.7392C77.5472 414.365 77.2325 414.648 76.7952 414.872C76.3685 415.085 75.8885 415.192 75.3552 415.192C74.6192 415.192 73.9525 415 73.3552 414.616C72.7685 414.221 72.4752 413.619 72.4752 412.808C72.4752 412.371 72.5819 411.992 72.7952 411.672C73.0192 411.341 73.2965 411.085 73.6272 410.904C73.9579 410.723 74.3685 410.579 74.8592 410.472C75.3605 410.355 75.8299 410.28 76.2672 410.248C76.7152 410.216 77.2112 410.2 77.7552 410.2V410.008C77.7552 409.56 77.5899 409.213 77.2592 408.968C76.9285 408.723 76.5072 408.6 75.9952 408.6C75.1845 408.6 74.4859 408.893 73.8992 409.48L72.9072 408.312C73.7819 407.501 74.8645 407.096 76.1552 407.096C76.8165 407.096 77.3765 407.192 77.8352 407.384C78.3045 407.565 78.6619 407.821 78.9072 408.152C79.1525 408.472 79.3232 408.813 79.4192 409.176C79.5259 409.528 79.5792 409.912 79.5792 410.328V415H77.7872ZM77.7552 411.768V411.496H77.3232C75.3712 411.496 74.3952 411.923 74.3952 412.776C74.3952 413.117 74.5232 413.363 74.7792 413.512C75.0459 413.661 75.3659 413.736 75.7392 413.736C76.3899 413.736 76.8859 413.565 77.2272 413.224C77.5792 412.872 77.7552 412.387 77.7552 411.768ZM87.3761 408.296L86.0641 409.448C85.9147 409.235 85.6907 409.059 85.3921 408.92C85.0934 408.771 84.7894 408.696 84.4801 408.696C83.8187 408.696 83.3014 408.947 82.9281 409.448C82.5547 409.939 82.3681 410.509 82.3681 411.16C82.3681 411.821 82.5601 412.397 82.9441 412.888C83.3281 413.379 83.8614 413.624 84.5441 413.624C85.2481 413.624 85.7867 413.395 86.1601 412.936L87.3601 414.152C86.6987 414.867 85.7547 415.224 84.5281 415.224C83.3547 415.224 82.3681 414.856 81.5681 414.12C80.7681 413.384 80.3681 412.397 80.3681 411.16C80.3681 409.944 80.7627 408.963 81.5521 408.216C82.3414 407.469 83.3174 407.096 84.4801 407.096C85.0454 407.096 85.5947 407.203 86.1281 407.416C86.6614 407.629 87.0774 407.923 87.3761 408.296ZM89.1006 410.392H93.0366C93.0366 409.859 92.8819 409.416 92.5726 409.064C92.2632 408.712 91.8152 408.536 91.2286 408.536C90.6632 408.536 90.1779 408.712 89.7726 409.064C89.3672 409.416 89.1432 409.859 89.1006 410.392ZM94.9566 411.256C94.9566 411.48 94.9512 411.651 94.9406 411.768H89.1006C89.1432 412.301 89.3779 412.749 89.8046 413.112C90.2312 413.475 90.7272 413.656 91.2926 413.656C92.1779 413.656 92.8552 413.325 93.3246 412.664L94.6046 413.688C93.8472 414.712 92.7486 415.224 91.3086 415.224C90.1032 415.224 89.1112 414.861 88.3326 414.136C87.5646 413.411 87.1806 412.435 87.1806 411.208C87.1806 409.981 87.5646 408.989 88.3326 408.232C89.1006 407.475 90.0712 407.096 91.2446 407.096C92.3539 407.096 93.2499 407.453 93.9326 408.168C94.6152 408.883 94.9566 409.912 94.9566 411.256ZM95.8961 415.096C95.3841 415.096 95.0001 415.053 94.7441 414.968L94.8881 413.4C95.0481 413.453 95.2187 413.48 95.4001 413.48C95.8907 413.48 96.2641 413.229 96.5201 412.728C96.7761 412.227 96.9041 411.336 96.9041 410.056V407.32H103.192V415H101.272V408.856H98.7441V410.488C98.7441 412.067 98.5147 413.229 98.0561 413.976C97.5974 414.723 96.8774 415.096 95.8961 415.096ZM105.976 410.392H109.912C109.912 409.859 109.757 409.416 109.448 409.064C109.138 408.712 108.69 408.536 108.104 408.536C107.538 408.536 107.053 408.712 106.648 409.064C106.242 409.416 106.018 409.859 105.976 410.392ZM111.832 411.256C111.832 411.48 111.826 411.651 111.816 411.768H105.976C106.018 412.301 106.253 412.749 106.68 413.112C107.106 413.475 107.602 413.656 108.168 413.656C109.053 413.656 109.73 413.325 110.2 412.664L111.48 413.688C110.722 414.712 109.624 415.224 108.184 415.224C106.978 415.224 105.986 414.861 105.208 414.136C104.44 413.411 104.056 412.435 104.056 411.208C104.056 409.981 104.44 408.989 105.208 408.232C105.976 407.475 106.946 407.096 108.12 407.096C109.229 407.096 110.125 407.453 110.808 408.168C111.49 408.883 111.832 409.912 111.832 411.256ZM112.691 415V407.32H114.611V410.216H117.843V407.32H119.763V415H117.843V411.752H114.611V415H112.691ZM121.066 415V407.32H122.986V412.28H123.018L126.378 407.32H128.458V415H126.538V410.072H126.506L123.178 415H121.066ZM129.193 415L131.129 412.088C129.988 411.757 129.417 410.995 129.417 409.8C129.417 408.989 129.7 408.376 130.265 407.96C130.841 407.533 131.583 407.32 132.489 407.32H136.361V415H134.441V412.28H133.017L131.449 415H129.193ZM132.953 410.856H134.441V408.76H132.953C132.345 408.76 131.913 408.84 131.657 409C131.401 409.16 131.273 409.432 131.273 409.816C131.273 410.189 131.407 410.456 131.673 410.616C131.951 410.776 132.377 410.856 132.953 410.856Z"
      fill="#FAFAFA"
    />`,
    title: 'Благосостояние населения',
    name: 'welfare',
  },
  {
    id: 7,
    path: `<g clip-path="url(#clip2_135_6962)" data-v-cc86d35e=""><g filter="url(#filter21_b_135_6962)" data-v-cc86d35e=""><path d="M90.0166 580.085C96.729 577.305 104.271 577.305 110.983 580.085L162.323 601.351C169.036 604.131 174.369 609.464 177.149 616.177L198.415 667.517C201.195 674.229 201.195 681.771 198.415 688.483L177.149 739.823C174.369 746.536 169.036 751.869 162.323 754.649L110.983 775.915C104.271 778.695 96.729 778.695 90.0166 775.915L38.6767 754.649C31.9643 751.869 26.6313 746.536 23.8509 739.823L2.58528 688.483C-0.195097 681.771 -0.195091 674.229 2.58529 667.517L23.8509 616.177C26.6313 609.464 31.9643 604.131 38.6767 601.351L90.0166 580.085Z" fill="url(#paint12_linear_135_6962)" data-v-cc86d35e=""></path><path d="M91.2335 583.023C97.1668 580.566 103.833 580.566 109.766 583.023L161.106 604.289C167.04 606.747 171.753 611.46 174.211 617.394L195.477 668.734C197.934 674.667 197.934 681.333 195.477 687.266L174.211 738.606C171.753 744.54 167.04 749.253 161.106 751.711L109.766 772.977C103.833 775.434 97.1667 775.434 91.2335 772.977L39.8937 751.711C33.9604 749.253 29.2465 744.54 26.7889 738.606L5.52322 687.266C3.06559 681.333 3.0656 674.667 5.52322 668.734L26.7889 617.394C29.2465 611.46 33.9604 606.747 39.8937 604.289L91.2335 583.023Z" stroke="white" stroke-opacity="0.318" stroke-width="6.36" data-v-cc86d35e=""></path></g><g filter="url(#filter22_dddd_135_6962)" data-v-cc86d35e=""><g filter="url(#filter23_b_135_6962)" data-v-cc86d35e=""><rect x="76.5" y="617.5" width="48" height="48" rx="12" fill="url(#paint13_linear_135_6962)" data-v-cc86d35e=""></rect><rect x="74.5" y="615.5" width="52" height="52" rx="14" stroke="white" stroke-opacity="0.318" stroke-width="4" data-v-cc86d35e=""></rect></g><path d="M106.205 634.504L103.898 630.87C103.773 630.697 103.586 630.582 103.399 630.524C103.212 630.466 102.963 630.524 102.776 630.582L95.7302 634.446L106.205 634.504Z" fill="#FAFAFA" data-v-cc86d35e=""></path><path d="M90.7422 635.484C90.1187 635.484 89.6823 635.023 89.6823 634.504C89.6823 633.985 90.1811 633.523 90.7422 633.523H94.3585L97.9748 631.504H90.7422C89.1211 631.504 87.8118 632.6 87.5624 633.985C87.5624 634.042 87.5 634.158 87.5 634.215V649.501C87.5 651.173 88.9341 652.5 90.7422 652.5H109.135C110.32 652.5 111.318 651.577 111.318 650.481V648.462H108.637C105.956 648.462 103.773 646.444 103.773 643.963C103.773 641.483 105.956 639.464 108.637 639.464H111.318V637.446C111.318 636.35 110.32 635.427 109.135 635.427H90.7422V635.484ZM108.076 633.466C108.076 632.427 107.265 631.62 106.205 631.504L108.076 634.504V633.466Z" fill="#FAFAFA" data-v-cc86d35e=""></path><path d="M112.689 640.964H108.637C106.829 640.964 105.394 642.291 105.394 643.963C105.394 645.636 106.829 646.963 108.637 646.963H112.689C113.126 646.963 113.5 646.617 113.5 646.213V641.714C113.5 641.31 113.126 640.964 112.689 640.964ZM108.574 645.002C107.951 645.002 107.514 644.54 107.514 644.021C107.514 643.444 108.013 643.04 108.574 643.04C109.135 643.04 109.634 643.502 109.634 644.021C109.697 644.54 109.198 645.002 108.574 645.002Z" fill="#FAFAFA" data-v-cc86d35e=""></path></g><path d="M70.335 686.612L68.799 687.828C68.5217 687.444 68.143 687.156 67.663 686.964C67.1937 686.761 66.7137 686.66 66.223 686.66C65.071 686.66 64.127 687.055 63.391 687.844C62.6657 688.633 62.303 689.62 62.303 690.804C62.303 692.041 62.6497 693.049 63.343 693.828C64.047 694.596 64.9803 694.98 66.143 694.98C67.3377 694.98 68.255 694.543 68.895 693.668L70.511 694.804C69.455 696.127 67.9937 696.788 66.127 696.788C64.3563 696.788 62.9057 696.233 61.775 695.124C60.6443 694.004 60.079 692.564 60.079 690.804C60.079 689.023 60.655 687.593 61.807 686.516C62.9697 685.428 64.4417 684.884 66.223 684.884C67.0123 684.884 67.7857 685.033 68.543 685.332C69.311 685.62 69.9083 686.047 70.335 686.612ZM70.2196 692.628C70.2196 691.444 70.6196 690.479 71.4196 689.732C72.2196 688.975 73.2116 688.596 74.3956 688.596C75.5796 688.596 76.5716 688.975 77.3716 689.732C78.1716 690.479 78.5716 691.444 78.5716 692.628C78.5716 693.823 78.1663 694.804 77.3556 695.572C76.5556 696.34 75.569 696.724 74.3956 696.724C73.2223 696.724 72.2303 696.34 71.4196 695.572C70.6196 694.804 70.2196 693.823 70.2196 692.628ZM72.7476 690.9C72.3636 691.391 72.1716 691.967 72.1716 692.628C72.1716 693.289 72.3636 693.871 72.7476 694.372C73.1316 694.873 73.681 695.124 74.3956 695.124C75.1103 695.124 75.6596 694.873 76.0436 694.372C76.4276 693.871 76.6196 693.289 76.6196 692.628C76.6196 691.967 76.4276 691.391 76.0436 690.9C75.6596 690.409 75.1103 690.164 74.3956 690.164C73.681 690.164 73.1316 690.409 72.7476 690.9ZM86.0253 698.692V696.5H79.4333V688.82H81.3533V694.932H84.5853V688.82H86.5052V694.932H87.6253V698.692H86.0253ZM88.0895 696.5V688.82H90.0095V693.78H90.0415L93.4015 688.82H95.4815V696.5H93.5615V691.572H93.5295L90.2015 696.5H88.0895ZM101.561 696.5V695.524H101.513C101.321 695.865 101.006 696.148 100.569 696.372C100.142 696.585 99.662 696.692 99.1286 696.692C98.3926 696.692 97.726 696.5 97.1286 696.116C96.542 695.721 96.2486 695.119 96.2486 694.308C96.2486 693.871 96.3553 693.492 96.5686 693.172C96.7926 692.841 97.07 692.585 97.4006 692.404C97.7313 692.223 98.142 692.079 98.6326 691.972C99.134 691.855 99.6033 691.78 100.041 691.748C100.489 691.716 100.985 691.7 101.529 691.7V691.508C101.529 691.06 101.363 690.713 101.033 690.468C100.702 690.223 100.281 690.1 99.7686 690.1C98.958 690.1 98.2593 690.393 97.6726 690.98L96.6806 689.812C97.5553 689.001 98.638 688.596 99.9286 688.596C100.59 688.596 101.15 688.692 101.609 688.884C102.078 689.065 102.435 689.321 102.681 689.652C102.926 689.972 103.097 690.313 103.193 690.676C103.299 691.028 103.353 691.412 103.353 691.828V696.5H101.561ZM101.529 693.268V692.996H101.097C99.1446 692.996 98.1686 693.423 98.1686 694.276C98.1686 694.617 98.2966 694.863 98.5526 695.012C98.8193 695.161 99.1393 695.236 99.5126 695.236C100.163 695.236 100.659 695.065 101.001 694.724C101.353 694.372 101.529 693.887 101.529 693.268ZM104.67 696.596C104.158 696.596 103.774 696.553 103.518 696.468L103.662 694.9C103.822 694.953 103.992 694.98 104.174 694.98C104.664 694.98 105.038 694.729 105.294 694.228C105.55 693.727 105.678 692.836 105.678 691.556V688.82H111.966V696.5H110.046V690.356H107.518V691.988C107.518 693.567 107.288 694.729 106.83 695.476C106.371 696.223 105.651 696.596 104.67 696.596ZM113.277 696.5V688.82H115.197V691.508H116.861C117.81 691.508 118.562 691.716 119.117 692.132C119.682 692.537 119.965 693.156 119.965 693.988C119.965 694.799 119.682 695.423 119.117 695.86C118.552 696.287 117.8 696.5 116.861 696.5H113.277ZM115.197 695.044H116.365C116.941 695.044 117.362 694.964 117.629 694.804C117.906 694.644 118.045 694.377 118.045 694.004C118.045 693.62 117.917 693.348 117.661 693.188C117.405 693.028 116.973 692.948 116.365 692.948H115.197V695.044ZM120.511 696.5V688.82H122.431V691.716H125.663V688.82H127.583V696.5H125.663V693.252H122.431V696.5H120.511ZM128.438 692.628C128.438 691.444 128.838 690.479 129.638 689.732C130.438 688.975 131.43 688.596 132.614 688.596C133.798 688.596 134.79 688.975 135.59 689.732C136.39 690.479 136.79 691.444 136.79 692.628C136.79 693.823 136.385 694.804 135.574 695.572C134.774 696.34 133.788 696.724 132.614 696.724C131.441 696.724 130.449 696.34 129.638 695.572C128.838 694.804 128.438 693.823 128.438 692.628ZM130.966 690.9C130.582 691.391 130.39 691.967 130.39 692.628C130.39 693.289 130.582 693.871 130.966 694.372C131.35 694.873 131.9 695.124 132.614 695.124C133.329 695.124 133.878 694.873 134.262 694.372C134.646 693.871 134.838 693.289 134.838 692.628C134.838 691.967 134.646 691.391 134.262 690.9C133.878 690.409 133.329 690.164 132.614 690.164C131.9 690.164 131.35 690.409 130.966 690.9ZM140.98 691.748V693.38H137.14V691.748H140.98ZM46.689 714.588L47.793 713.452C48.241 713.932 48.8383 714.172 49.585 714.172C50.2037 714.172 50.7157 714.001 51.121 713.66C51.537 713.308 51.7823 712.833 51.857 712.236H48.801V710.86H51.809C51.6917 710.316 51.441 709.889 51.057 709.58C50.673 709.271 50.193 709.116 49.617 709.116C48.8917 709.116 48.2997 709.372 47.841 709.884L46.737 708.7C47.0357 708.369 47.457 708.103 48.001 707.9C48.545 707.697 49.0943 707.596 49.649 707.596C50.8863 707.596 51.889 707.975 52.657 708.732C53.425 709.479 53.809 710.46 53.809 711.676C53.809 712.892 53.425 713.873 52.657 714.62C51.8997 715.367 50.897 715.74 49.649 715.74C48.3903 715.74 47.4037 715.356 46.689 714.588ZM54.6676 715.5V707.82H56.5876V711.228H56.6356L59.5956 707.82H62.0276L58.6516 711.436L62.2836 715.5H59.8196L56.6356 711.852H56.5876V715.5H54.6676ZM61.4853 711.628C61.4853 710.444 61.8853 709.479 62.6853 708.732C63.4853 707.975 64.4773 707.596 65.6613 707.596C66.8453 707.596 67.8373 707.975 68.6373 708.732C69.4373 709.479 69.8373 710.444 69.8373 711.628C69.8373 712.823 69.4319 713.804 68.6213 714.572C67.8213 715.34 66.8346 715.724 65.6613 715.724C64.4879 715.724 63.4959 715.34 62.6853 714.572C61.8853 713.804 61.4853 712.823 61.4853 711.628ZM64.0133 709.9C63.6293 710.391 63.4373 710.967 63.4373 711.628C63.4373 712.289 63.6293 712.871 64.0133 713.372C64.3973 713.873 64.9466 714.124 65.6613 714.124C66.3759 714.124 66.9253 713.873 67.3093 713.372C67.6933 712.871 67.8853 712.289 67.8853 711.628C67.8853 710.967 67.6933 710.391 67.3093 709.9C66.9253 709.409 66.3759 709.164 65.6613 709.164C64.9466 709.164 64.3973 709.409 64.0133 709.9ZM70.6989 715.5V707.82H72.6189V710.716H75.8509V707.82H77.7709V715.5H75.8509V712.252H72.6189V715.5H70.6989ZM78.6259 711.628C78.6259 710.444 79.0259 709.479 79.8259 708.732C80.6259 707.975 81.6179 707.596 82.8019 707.596C83.9859 707.596 84.9779 707.975 85.7779 708.732C86.5779 709.479 86.9779 710.444 86.9779 711.628C86.9779 712.823 86.5725 713.804 85.7619 714.572C84.9619 715.34 83.9752 715.724 82.8019 715.724C81.6285 715.724 80.6365 715.34 79.8259 714.572C79.0259 713.804 78.6259 712.823 78.6259 711.628ZM81.1539 709.9C80.7699 710.391 80.5779 710.967 80.5779 711.628C80.5779 712.289 80.7699 712.871 81.1539 713.372C81.5379 713.873 82.0872 714.124 82.8019 714.124C83.5165 714.124 84.0659 713.873 84.4499 713.372C84.8339 712.871 85.0259 712.289 85.0259 711.628C85.0259 710.967 84.8339 710.391 84.4499 709.9C84.0659 709.409 83.5165 709.164 82.8019 709.164C82.0872 709.164 81.5379 709.409 81.1539 709.9ZM87.8395 715.5V707.82H90.5275L92.7675 713.004H92.7835L94.9435 707.82H97.6635V715.5H95.7755V710.06H95.7435L93.3595 715.5H92.0795L89.7595 710.044H89.7275V715.5H87.8395ZM98.9645 715.5V707.82H100.885V712.78H100.917L104.277 707.82H106.357V715.5H104.437V710.572H104.405L101.077 715.5H98.9645ZM112.084 715.5V712.636C111.465 712.796 110.788 712.876 110.052 712.876C108.281 712.876 107.396 712.071 107.396 710.46V707.82H109.236V709.916C109.236 710.471 109.348 710.849 109.572 711.052C109.806 711.244 110.174 711.34 110.676 711.34C111.07 711.34 111.54 711.276 112.084 711.148V707.82H114.004V715.5H112.084ZM116.78 710.892H120.716C120.716 710.359 120.562 709.916 120.252 709.564C119.943 709.212 119.495 709.036 118.908 709.036C118.343 709.036 117.858 709.212 117.452 709.564C117.047 709.916 116.823 710.359 116.78 710.892ZM122.636 711.756C122.636 711.98 122.631 712.151 122.62 712.268H116.78C116.823 712.801 117.058 713.249 117.484 713.612C117.911 713.975 118.407 714.156 118.972 714.156C119.858 714.156 120.535 713.825 121.004 713.164L122.284 714.188C121.527 715.212 120.428 715.724 118.988 715.724C117.783 715.724 116.791 715.361 116.012 714.636C115.244 713.911 114.86 712.935 114.86 711.708C114.86 710.481 115.244 709.489 116.012 708.732C116.78 707.975 117.751 707.596 118.924 707.596C120.034 707.596 120.93 707.953 121.612 708.668C122.295 709.383 122.636 710.412 122.636 711.756ZM130.056 708.796L128.744 709.948C128.594 709.735 128.37 709.559 128.072 709.42C127.773 709.271 127.469 709.196 127.16 709.196C126.498 709.196 125.981 709.447 125.608 709.948C125.234 710.439 125.048 711.009 125.048 711.66C125.048 712.321 125.24 712.897 125.624 713.388C126.008 713.879 126.541 714.124 127.224 714.124C127.928 714.124 128.466 713.895 128.84 713.436L130.04 714.652C129.378 715.367 128.434 715.724 127.208 715.724C126.034 715.724 125.048 715.356 124.248 714.62C123.448 713.884 123.048 712.897 123.048 711.66C123.048 710.444 123.442 709.463 124.232 708.716C125.021 707.969 125.997 707.596 127.16 707.596C127.725 707.596 128.274 707.703 128.808 707.916C129.341 708.129 129.757 708.423 130.056 708.796ZM130.308 715.5V707.82H132.228V711.228H132.276L135.236 707.82H137.668L134.292 711.436L137.924 715.5H135.46L132.276 711.852H132.228V715.5H130.308ZM137.126 711.628C137.126 710.444 137.526 709.479 138.326 708.732C139.126 707.975 140.118 707.596 141.302 707.596C142.486 707.596 143.478 707.975 144.278 708.732C145.078 709.479 145.478 710.444 145.478 711.628C145.478 712.823 145.073 713.804 144.262 714.572C143.462 715.34 142.475 715.724 141.302 715.724C140.129 715.724 139.137 715.34 138.326 714.572C137.526 713.804 137.126 712.823 137.126 711.628ZM139.654 709.9C139.27 710.391 139.078 710.967 139.078 711.628C139.078 712.289 139.27 712.871 139.654 713.372C140.038 713.873 140.587 714.124 141.302 714.124C142.017 714.124 142.566 713.873 142.95 713.372C143.334 712.871 143.526 712.289 143.526 711.628C143.526 710.967 143.334 710.391 142.95 709.9C142.566 709.409 142.017 709.164 141.302 709.164C140.587 709.164 140.038 709.409 139.654 709.9ZM147.812 710.892H151.748C151.748 710.359 151.593 709.916 151.284 709.564C150.974 709.212 150.526 709.036 149.94 709.036C149.374 709.036 148.889 709.212 148.484 709.564C148.078 709.916 147.854 710.359 147.812 710.892ZM153.668 711.756C153.668 711.98 153.662 712.151 153.652 712.268H147.812C147.854 712.801 148.089 713.249 148.516 713.612C148.942 713.975 149.438 714.156 150.004 714.156C150.889 714.156 151.566 713.825 152.036 713.164L153.316 714.188C152.558 715.212 151.46 715.724 150.02 715.724C148.814 715.724 147.822 715.361 147.044 714.636C146.276 713.911 145.892 712.935 145.892 711.708C145.892 710.481 146.276 709.489 147.044 708.732C147.812 707.975 148.782 707.596 149.956 707.596C151.065 707.596 151.961 707.953 152.644 708.668C153.326 709.383 153.668 710.412 153.668 711.756ZM69.3942 726.82H71.2342V727.892H71.2822C71.5062 727.54 71.8422 727.236 72.2902 726.98C72.7489 726.724 73.2982 726.596 73.9382 726.596C75.0262 726.596 75.9169 726.98 76.6102 727.748C77.3142 728.516 77.6662 729.476 77.6662 730.628C77.6662 731.78 77.3195 732.751 76.6262 733.54C75.9435 734.329 75.0315 734.724 73.8902 734.724C73.3569 734.724 72.8609 734.612 72.4022 734.388C71.9435 734.164 71.5915 733.86 71.3462 733.476H71.3142V738.34H69.3942V726.82ZM75.1222 732.372C75.5169 731.871 75.7142 731.289 75.7142 730.628C75.7142 729.967 75.5169 729.391 75.1222 728.9C74.7382 728.409 74.1995 728.164 73.5062 728.164C72.8342 728.164 72.2902 728.42 71.8742 728.932C71.4582 729.444 71.2502 730.02 71.2502 730.66C71.2502 731.3 71.4582 731.871 71.8742 732.372C72.2902 732.873 72.8342 733.124 73.5062 733.124C74.1995 733.124 74.7382 732.873 75.1222 732.372ZM83.2872 734.5V733.524H83.2392C83.0472 733.865 82.7325 734.148 82.2952 734.372C81.8685 734.585 81.3885 734.692 80.8552 734.692C80.1192 734.692 79.4525 734.5 78.8552 734.116C78.2685 733.721 77.9752 733.119 77.9752 732.308C77.9752 731.871 78.0819 731.492 78.2952 731.172C78.5192 730.841 78.7965 730.585 79.1272 730.404C79.4579 730.223 79.8685 730.079 80.3592 729.972C80.8605 729.855 81.3299 729.78 81.7672 729.748C82.2152 729.716 82.7112 729.7 83.2552 729.7V729.508C83.2552 729.06 83.0899 728.713 82.7592 728.468C82.4285 728.223 82.0072 728.1 81.4952 728.1C80.6845 728.1 79.9859 728.393 79.3992 728.98L78.4072 727.812C79.2819 727.001 80.3645 726.596 81.6552 726.596C82.3165 726.596 82.8765 726.692 83.3352 726.884C83.8045 727.065 84.1619 727.321 84.4072 727.652C84.6525 727.972 84.8232 728.313 84.9192 728.676C85.0259 729.028 85.0792 729.412 85.0792 729.828V734.5H83.2872ZM83.2552 731.268V730.996H82.8232C80.8712 730.996 79.8952 731.423 79.8952 732.276C79.8952 732.617 80.0232 732.863 80.2792 733.012C80.5459 733.161 80.8659 733.236 81.2392 733.236C81.8899 733.236 82.3859 733.065 82.7272 732.724C83.0792 732.372 83.2552 731.887 83.2552 731.268ZM88.7641 734.756C87.3241 734.756 86.2041 734.292 85.4041 733.364L86.5561 732.244C86.7801 732.543 87.0734 732.788 87.4361 732.98C87.8094 733.172 88.2041 733.268 88.6201 733.268C89.6334 733.268 90.1401 732.943 90.1401 732.292C90.1401 731.897 89.9801 731.625 89.6601 731.476C89.3507 731.327 88.9187 731.252 88.3641 731.252H87.7561V729.876H88.3641C89.4201 729.876 89.9481 729.551 89.9481 728.9C89.9481 728.335 89.5161 728.052 88.6521 728.052C87.8734 728.052 87.2601 728.345 86.8121 728.932L85.7401 727.892C86.4227 727.028 87.4681 726.596 88.8761 726.596C89.7827 726.596 90.5081 726.783 91.0521 727.156C91.6067 727.529 91.8841 728.041 91.8841 728.692C91.8841 729.129 91.7401 729.513 91.4521 729.844C91.1641 730.164 90.7961 730.372 90.3481 730.468V730.5C90.8707 730.596 91.2921 730.809 91.6121 731.14C91.9321 731.471 92.0921 731.881 92.0921 732.372C92.0921 733.119 91.7721 733.705 91.1321 734.132C90.5027 734.548 89.7134 734.756 88.7641 734.756ZM93.0036 734.5V726.82H96.9716C97.4302 726.82 97.8409 726.868 98.2036 726.964C98.5769 727.06 98.9129 727.268 99.2116 727.588C99.5102 727.897 99.6596 728.308 99.6596 728.82C99.6596 729.215 99.5369 729.561 99.2916 729.86C99.0569 730.148 98.7476 730.34 98.3636 730.436V730.468C98.8436 730.543 99.2329 730.745 99.5316 731.076C99.8409 731.396 99.9956 731.812 99.9956 732.324C99.9956 733.007 99.7289 733.54 99.1956 733.924C98.6622 734.308 97.9582 734.5 97.0836 734.5H93.0036ZM94.9236 733.124H96.7316C97.6169 733.124 98.0596 732.815 98.0596 732.196C98.0596 731.577 97.6329 731.268 96.7796 731.268H94.9236V733.124ZM94.9236 729.892H96.7476C97.4516 729.892 97.8036 729.609 97.8036 729.044C97.8036 728.468 97.4036 728.18 96.6036 728.18H94.9236V729.892ZM100.847 734.5V726.82H102.767V731.78H102.799L106.159 726.82H108.239V734.5H106.319V729.572H106.287L102.959 734.5H100.847ZM111.182 734.5V728.356H108.718V726.82H115.55V728.356H113.102V734.5H111.182ZM116.019 734.5V726.82H117.939V731.78H117.971L121.331 726.82H123.411V734.5H121.491V729.572H121.459L118.131 734.5H116.019ZM126.194 729.892H130.13C130.13 729.359 129.976 728.916 129.666 728.564C129.357 728.212 128.909 728.036 128.322 728.036C127.757 728.036 127.272 728.212 126.866 728.564C126.461 728.916 126.237 729.359 126.194 729.892ZM132.05 730.756C132.05 730.98 132.045 731.151 132.034 731.268H126.194C126.237 731.801 126.472 732.249 126.898 732.612C127.325 732.975 127.821 733.156 128.386 733.156C129.272 733.156 129.949 732.825 130.418 732.164L131.698 733.188C130.941 734.212 129.842 734.724 128.402 734.724C127.197 734.724 126.205 734.361 125.426 733.636C124.658 732.911 124.274 731.935 124.274 730.708C124.274 729.481 124.658 728.489 125.426 727.732C126.194 726.975 127.165 726.596 128.338 726.596C129.448 726.596 130.344 726.953 131.026 727.668C131.709 728.383 132.05 729.412 132.05 730.756Z" fill="#FAFAFA" data-v-cc86d35e=""></path></g>`,
    title: 'Социально-экономическое развитие',
    name: 'socio-economic',
  },
  {
    id: 8,
    path: `<g filter="url(#filter24_b_135_6962)">
      <path
        d="M787.396 400.607C795.786 397.131 805.214 397.131 813.604 400.607L877.779 427.189C886.17 430.664 892.836 437.33 896.311 445.721L922.893 509.896C926.369 518.286 926.369 527.714 922.893 536.104L896.311 600.279C892.836 608.67 886.17 615.336 877.779 618.811L813.604 645.393C805.214 648.869 795.786 648.869 787.396 645.393L723.221 618.811C714.83 615.336 708.164 608.67 704.689 600.279L678.107 536.104C674.631 527.714 674.631 518.286 678.107 509.896L704.689 445.721C708.164 437.33 714.83 430.664 723.221 427.189L787.396 400.607Z"
        fill="url(#paint14_linear_135_6962)"
      />
      <path
        d="M788.613 403.545C796.224 400.392 804.776 400.392 812.387 403.545L876.562 430.127C884.173 433.279 890.221 439.327 893.373 446.938L919.955 511.113C923.108 518.724 923.108 527.276 919.955 534.887L893.373 599.062C890.221 606.673 884.173 612.721 876.562 615.873L812.387 642.455C804.776 645.608 796.224 645.608 788.613 642.455L724.438 615.873C716.826 612.721 710.779 606.673 707.627 599.062L681.045 534.887C677.892 527.276 677.892 518.724 681.045 511.113L707.627 446.938C710.779 439.326 716.827 433.279 724.438 430.127L788.613 403.545Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter25_dddd_135_6962)">
      <g filter="url(#filter26_b_135_6962)">
        <rect
          x="776.5"
          y="477"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint15_linear_135_6962)"
        />
        <rect
          x="774.5"
          y="475"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M800.411 496.415C799.894 496.464 799.506 496.928 799.555 497.449L799.87 500.829C799.894 501.13 800.128 501.374 800.435 501.399C800.783 501.431 801.09 501.179 801.122 500.829L801.437 497.449C801.445 497.392 801.445 497.327 801.437 497.27C801.389 496.749 800.928 496.366 800.411 496.415ZM800.5 502.099C800.088 502.099 799.749 502.441 799.749 502.856C799.749 503.272 800.088 503.614 800.5 503.614C800.912 503.614 801.251 503.272 801.251 502.856C801.251 502.433 800.912 502.099 800.5 502.099ZM813.468 496.179C813.468 493.98 812.256 492.026 811.246 491.212C810.236 490.397 806.035 487.71 803.934 486.733C801.833 485.756 799.167 485.756 797.066 486.733C794.965 487.71 790.764 490.397 789.754 491.212C788.744 492.026 787.532 493.98 787.532 496.179C787.532 498.378 787.37 500.413 787.774 505.34C788.017 507.62 789.277 509.094 789.713 509.412C790.15 509.729 794.157 512.75 797.551 514.175C799.732 515.275 801.268 515.275 803.449 514.175C806.843 512.75 810.535 509.974 811.287 509.412C812.038 508.85 812.983 507.62 813.226 505.34C813.63 500.413 813.468 498.378 813.468 496.179ZM800.5 506.448C799.53 506.448 798.617 506.228 797.801 505.845C797.753 505.869 797.712 505.886 797.656 505.902L794.917 506.553C794.416 506.676 793.996 506.171 794.19 505.698L795.095 503.426C794.489 502.441 794.133 501.277 794.133 500.039C794.133 496.497 796.985 493.622 800.5 493.622C804.015 493.622 806.867 496.497 806.867 500.039C806.867 503.581 804.015 506.448 800.5 506.448Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M759.39 564V549.84H767.89V552.04H761.91V564H759.39ZM765.444 559.16C765.444 557.68 765.944 556.473 766.944 555.54C767.944 554.593 769.184 554.12 770.664 554.12C772.144 554.12 773.384 554.593 774.384 555.54C775.384 556.473 775.884 557.68 775.884 559.16C775.884 560.653 775.378 561.88 774.364 562.84C773.364 563.8 772.131 564.28 770.664 564.28C769.198 564.28 767.958 563.8 766.944 562.84C765.944 561.88 765.444 560.653 765.444 559.16ZM768.604 557C768.124 557.613 767.884 558.333 767.884 559.16C767.884 559.987 768.124 560.713 768.604 561.34C769.084 561.967 769.771 562.28 770.664 562.28C771.558 562.28 772.244 561.967 772.724 561.34C773.204 560.713 773.444 559.987 773.444 559.16C773.444 558.333 773.204 557.613 772.724 557C772.244 556.387 771.558 556.08 770.664 556.08C769.771 556.08 769.084 556.387 768.604 557ZM785.411 555.62L783.771 557.06C783.585 556.793 783.305 556.573 782.931 556.4C782.558 556.213 782.178 556.12 781.791 556.12C780.965 556.12 780.318 556.433 779.851 557.06C779.385 557.673 779.151 558.387 779.151 559.2C779.151 560.027 779.391 560.747 779.871 561.36C780.351 561.973 781.018 562.28 781.871 562.28C782.751 562.28 783.425 561.993 783.891 561.42L785.391 562.94C784.565 563.833 783.385 564.28 781.851 564.28C780.385 564.28 779.151 563.82 778.151 562.9C777.151 561.98 776.651 560.747 776.651 559.2C776.651 557.68 777.145 556.453 778.131 555.52C779.118 554.587 780.338 554.12 781.791 554.12C782.498 554.12 783.185 554.253 783.851 554.52C784.518 554.787 785.038 555.153 785.411 555.62ZM789.009 564L784.889 554.4H787.549L790.229 561.38H790.269L792.649 554.4H795.149L790.609 566.06C790.235 567.007 789.782 567.7 789.249 568.14C788.729 568.58 787.969 568.8 786.969 568.8C786.529 568.8 786.115 568.753 785.729 568.66L785.929 566.58C786.222 566.673 786.522 566.72 786.829 566.72C787.309 566.72 787.655 566.607 787.869 566.38C788.082 566.167 788.302 565.78 788.529 565.22L789.009 564ZM803.783 555.62L802.143 557.06C801.956 556.793 801.676 556.573 801.303 556.4C800.929 556.213 800.549 556.12 800.163 556.12C799.336 556.12 798.689 556.433 798.223 557.06C797.756 557.673 797.523 558.387 797.523 559.2C797.523 560.027 797.763 560.747 798.243 561.36C798.723 561.973 799.389 562.28 800.243 562.28C801.123 562.28 801.796 561.993 802.263 561.42L803.763 562.94C802.936 563.833 801.756 564.28 800.223 564.28C798.756 564.28 797.523 563.82 796.523 562.9C795.523 561.98 795.023 560.747 795.023 559.2C795.023 557.68 795.516 556.453 796.503 555.52C797.489 554.587 798.709 554.12 800.163 554.12C800.869 554.12 801.556 554.253 802.223 554.52C802.889 554.787 803.409 555.153 803.783 555.62ZM804.644 564.12C804.004 564.12 803.524 564.067 803.204 563.96L803.384 562C803.584 562.067 803.797 562.1 804.024 562.1C804.637 562.1 805.104 561.787 805.424 561.16C805.744 560.533 805.904 559.42 805.904 557.82V554.4H813.764V564H811.364V556.32H808.204V558.36C808.204 560.333 807.917 561.787 807.344 562.72C806.77 563.653 805.87 564.12 804.644 564.12ZM818.333 564L814.213 554.4H816.873L819.553 561.38H819.593L821.973 554.4H824.473L819.933 566.06C819.56 567.007 819.106 567.7 818.573 568.14C818.053 568.58 817.293 568.8 816.293 568.8C815.853 568.8 815.44 568.753 815.053 568.66L815.253 566.58C815.546 566.673 815.846 566.72 816.153 566.72C816.633 566.72 816.98 566.607 817.193 566.38C817.406 566.167 817.626 565.78 817.853 565.22L818.333 564ZM824.907 564V554.4H831.647V556.32H827.307V564H824.907ZM832.481 564V554.4H834.881V560.6H834.921L839.121 554.4H841.721V564H839.321V557.84H839.281L835.121 564H832.481Z"
      fill="#FAFAFA"
    />`,
    title: 'Госуслуги',
    name: 'gosuslugi',
  },
  {
    id: 9,
    path: `<g filter="url(#filter27_b_135_6962)">
      <path
        d="M787.396 90.6066C795.786 87.1311 805.214 87.1311 813.604 90.6066L877.779 117.189C886.17 120.664 892.836 127.33 896.311 135.721L922.893 199.896C926.369 208.286 926.369 217.714 922.893 226.104L896.311 290.279C892.836 298.67 886.17 305.336 877.779 308.811L813.604 335.393C805.214 338.869 795.786 338.869 787.396 335.393L723.221 308.811C714.83 305.336 708.164 298.67 704.689 290.279L678.107 226.104C674.631 217.714 674.631 208.286 678.107 199.896L704.689 135.721C708.164 127.33 714.83 120.664 723.221 117.189L787.396 90.6066Z"
        fill="url(#paint16_linear_135_6962)"
      />
      <path
        d="M788.613 93.5445C796.224 90.3918 804.776 90.3918 812.387 93.5445L876.562 120.127C884.173 123.279 890.221 129.327 893.373 136.938L919.955 201.113C923.108 208.724 923.108 217.276 919.955 224.887L893.373 289.062C890.221 296.673 884.173 302.721 876.562 305.873L812.387 332.455C804.776 335.608 796.224 335.608 788.613 332.455L724.438 305.873C716.826 302.721 710.779 296.673 707.627 289.062L681.045 224.887C677.892 217.276 677.892 208.724 681.045 201.113L707.627 136.938C710.779 129.326 716.827 123.279 724.438 120.127L788.613 93.5445Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter28_dddd_135_6962)">
      <g filter="url(#filter29_b_135_6962)">
        <rect
          x="776.5"
          y="143"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint17_linear_135_6962)"
        />
        <rect
          x="774.5"
          y="141"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M794.57 172.27C794.231 171.861 793.553 171.861 793.158 172.154L792.198 173.147C791.972 173.381 791.859 173.615 791.859 173.965C791.859 174.55 792.367 175.076 792.932 175.076C793.271 175.076 793.553 174.9 793.779 174.667L794.513 173.907C794.682 173.732 794.739 173.556 794.795 173.322C794.908 172.913 794.852 172.504 794.57 172.27Z"
        fill="#FAFAFA"
      />
      <path
        d="M791.972 168.998C791.577 168.588 790.843 168.588 790.447 168.998C790.335 169.056 789.713 169.699 789.6 169.816C788.64 170.926 790.109 172.387 791.182 171.394C791.182 171.394 791.916 170.634 791.972 170.576C792.368 170.108 792.368 169.407 791.972 168.998Z"
        fill="#FAFAFA"
      />
      <path
        d="M796.773 174.784C796.49 174.784 796.208 174.9 795.982 175.134L795.192 175.952C794.796 176.362 794.796 177.121 795.192 177.53C795.587 177.94 796.321 177.94 796.716 177.53L797.507 176.712C798.241 176.011 797.733 174.784 796.773 174.784Z"
        fill="#FAFAFA"
      />
      <path
        d="M804.058 162.393C802.363 163.504 800.161 163.27 798.693 161.75L796.773 159.822L799.145 157.367C796.603 154.445 792.142 154.211 789.431 157.075C786.721 159.822 786.89 164.439 789.77 167.069C791.86 165.9 794.401 167.536 794.232 169.991C795.587 170.167 796.773 171.452 796.829 172.855C798.128 172.855 799.37 173.849 799.709 175.134C800.782 174.842 801.968 175.193 802.702 176.069C803.775 176.712 804.905 175.368 804.114 174.375L799.822 169.933C800.161 169.582 800.839 168.881 801.178 168.53L805.413 172.913C806.486 173.907 807.898 172.446 806.938 171.335L802.702 166.952C803.041 166.601 803.719 165.9 804.058 165.549C805.018 166.543 807.333 168.939 808.293 169.933C808.688 170.342 809.422 170.342 809.818 169.933C810.213 169.524 810.213 168.764 809.818 168.355L804.058 162.393Z"
        fill="#FAFAFA"
      />
      <path
        d="M811.569 157.016C808.971 154.328 804.792 154.328 802.194 157.016C801.63 157.542 799.935 159.296 799.484 159.822L800.048 160.406C801.008 161.4 802.533 161.4 803.437 160.406L804.114 159.705C804.453 160.055 811.06 166.835 811.23 167.069C814.11 164.439 814.279 159.822 811.569 157.016Z"
        fill="#FAFAFA"
      />
      <path
        d="M801.177 177.297C800.782 176.888 800.048 176.888 799.652 177.297L798.862 178.115C798.466 178.524 798.466 179.284 798.862 179.693C799.257 180.102 799.991 180.102 800.386 179.693L801.177 178.875C801.629 178.466 801.629 177.764 801.177 177.297Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M759.921 217.64L758.001 219.16C757.654 218.68 757.181 218.32 756.581 218.08C755.994 217.827 755.394 217.7 754.781 217.7C753.341 217.7 752.161 218.193 751.241 219.18C750.334 220.167 749.881 221.4 749.881 222.88C749.881 224.427 750.314 225.687 751.181 226.66C752.061 227.62 753.227 228.1 754.681 228.1C756.174 228.1 757.321 227.553 758.121 226.46L760.141 227.88C758.821 229.533 756.994 230.36 754.661 230.36C752.447 230.36 750.634 229.667 749.221 228.28C747.807 226.88 747.101 225.08 747.101 222.88C747.101 220.653 747.821 218.867 749.261 217.52C750.714 216.16 752.554 215.48 754.781 215.48C755.767 215.48 756.734 215.667 757.681 216.04C758.641 216.4 759.387 216.933 759.921 217.64ZM760.026 225.16C760.026 223.68 760.526 222.473 761.526 221.54C762.526 220.593 763.766 220.12 765.246 220.12C766.726 220.12 767.966 220.593 768.966 221.54C769.966 222.473 770.466 223.68 770.466 225.16C770.466 226.653 769.96 227.88 768.946 228.84C767.946 229.8 766.713 230.28 765.246 230.28C763.78 230.28 762.54 229.8 761.526 228.84C760.526 227.88 760.026 226.653 760.026 225.16ZM763.186 223C762.706 223.613 762.466 224.333 762.466 225.16C762.466 225.987 762.706 226.713 763.186 227.34C763.666 227.967 764.353 228.28 765.246 228.28C766.14 228.28 766.826 227.967 767.306 227.34C767.786 226.713 768.026 225.987 768.026 225.16C768.026 224.333 767.786 223.613 767.306 223C766.826 222.387 766.14 222.08 765.246 222.08C764.353 222.08 763.666 222.387 763.186 223ZM780.034 232.74V230H771.794V220.4H774.194V228.04H778.234V220.4H780.634V228.04H782.034V232.74H780.034ZM782.864 230V220.4H785.264V226.6H785.304L789.504 220.4H792.104V230H789.704V223.84H789.664L785.504 230H782.864ZM799.953 230V228.78H799.893C799.653 229.207 799.259 229.56 798.713 229.84C798.179 230.107 797.579 230.24 796.913 230.24C795.993 230.24 795.159 230 794.413 229.52C793.679 229.027 793.313 228.273 793.313 227.26C793.313 226.713 793.446 226.24 793.713 225.84C793.993 225.427 794.339 225.107 794.753 224.88C795.166 224.653 795.679 224.473 796.293 224.34C796.919 224.193 797.506 224.1 798.053 224.06C798.613 224.02 799.233 224 799.913 224V223.76C799.913 223.2 799.706 222.767 799.293 222.46C798.879 222.153 798.353 222 797.713 222C796.699 222 795.826 222.367 795.093 223.1L793.853 221.64C794.946 220.627 796.299 220.12 797.913 220.12C798.739 220.12 799.439 220.24 800.013 220.48C800.599 220.707 801.046 221.027 801.353 221.44C801.659 221.84 801.873 222.267 801.993 222.72C802.126 223.16 802.193 223.64 802.193 224.16V230H799.953ZM799.913 225.96V225.62H799.373C796.933 225.62 795.713 226.153 795.713 227.22C795.713 227.647 795.873 227.953 796.193 228.14C796.526 228.327 796.926 228.42 797.393 228.42C798.206 228.42 798.826 228.207 799.253 227.78C799.693 227.34 799.913 226.733 799.913 225.96ZM804.089 230.12C803.449 230.12 802.969 230.067 802.649 229.96L802.829 228C803.029 228.067 803.242 228.1 803.469 228.1C804.082 228.1 804.549 227.787 804.869 227.16C805.189 226.533 805.349 225.42 805.349 223.82V220.4H813.209V230H810.809V222.32H807.649V224.36C807.649 226.333 807.362 227.787 806.789 228.72C806.215 229.653 805.315 230.12 804.089 230.12ZM815.098 230V220.4H817.498V223.76H819.578C820.765 223.76 821.705 224.02 822.398 224.54C823.105 225.047 823.458 225.82 823.458 226.86C823.458 227.873 823.105 228.653 822.398 229.2C821.692 229.733 820.752 230 819.578 230H815.098ZM817.498 228.18H818.958C819.678 228.18 820.205 228.08 820.538 227.88C820.885 227.68 821.058 227.347 821.058 226.88C821.058 226.4 820.898 226.06 820.578 225.86C820.258 225.66 819.718 225.56 818.958 225.56H817.498V228.18ZM824.391 230V220.4H826.791V224.02H830.831V220.4H833.231V230H830.831V225.94H826.791V230H824.391ZM841.07 230V228.78H841.01C840.77 229.207 840.377 229.56 839.83 229.84C839.297 230.107 838.697 230.24 838.03 230.24C837.11 230.24 836.277 230 835.53 229.52C834.797 229.027 834.43 228.273 834.43 227.26C834.43 226.713 834.563 226.24 834.83 225.84C835.11 225.427 835.457 225.107 835.87 224.88C836.283 224.653 836.797 224.473 837.41 224.34C838.037 224.193 838.623 224.1 839.17 224.06C839.73 224.02 840.35 224 841.03 224V223.76C841.03 223.2 840.823 222.767 840.41 222.46C839.997 222.153 839.47 222 838.83 222C837.817 222 836.943 222.367 836.21 223.1L834.97 221.64C836.063 220.627 837.417 220.12 839.03 220.12C839.857 220.12 840.557 220.24 841.13 220.48C841.717 220.707 842.163 221.027 842.47 221.44C842.777 221.84 842.99 222.267 843.11 222.72C843.243 223.16 843.31 223.64 843.31 224.16V230H841.07ZM841.03 225.96V225.62H840.49C838.05 225.62 836.83 226.153 836.83 227.22C836.83 227.647 836.99 227.953 837.31 228.14C837.643 228.327 838.043 228.42 838.51 228.42C839.323 228.42 839.943 228.207 840.37 227.78C840.81 227.34 841.03 226.733 841.03 225.96ZM844.386 230L846.806 226.36C845.379 225.947 844.666 224.993 844.666 223.5C844.666 222.487 845.019 221.72 845.726 221.2C846.446 220.667 847.373 220.4 848.506 220.4H853.346V230H850.946V226.6H849.166L847.206 230H844.386ZM849.086 224.82H850.946V222.2H849.086C848.326 222.2 847.786 222.3 847.466 222.5C847.146 222.7 846.986 223.04 846.986 223.52C846.986 223.987 847.153 224.32 847.486 224.52C847.833 224.72 848.366 224.82 849.086 224.82ZM750.979 254V244.4H759.819V254H757.419V246.32H753.379V254H750.979ZM761.138 249.16C761.138 247.68 761.638 246.473 762.638 245.54C763.638 244.593 764.878 244.12 766.358 244.12C767.838 244.12 769.078 244.593 770.078 245.54C771.078 246.473 771.578 247.68 771.578 249.16C771.578 250.653 771.071 251.88 770.058 252.84C769.058 253.8 767.824 254.28 766.358 254.28C764.891 254.28 763.651 253.8 762.638 252.84C761.638 251.88 761.138 250.653 761.138 249.16ZM764.298 247C763.818 247.613 763.578 248.333 763.578 249.16C763.578 249.987 763.818 250.713 764.298 251.34C764.778 251.967 765.464 252.28 766.358 252.28C767.251 252.28 767.938 251.967 768.418 251.34C768.898 250.713 769.138 249.987 769.138 249.16C769.138 248.333 768.898 247.613 768.418 247C767.938 246.387 767.251 246.08 766.358 246.08C765.464 246.08 764.778 246.387 764.298 247ZM771.725 256.74V252.04H772.725C773.618 250.88 774.065 249.16 774.065 246.88V244.4H781.865V252.04H783.285V256.74H781.265V254H773.745V256.74H771.725ZM775.265 252.04H779.465V246.32H776.345V247.5C776.345 249.273 775.985 250.787 775.265 252.04ZM783.342 256.74V252.04H784.342C785.235 250.88 785.682 249.16 785.682 246.88V244.4H793.482V252.04H794.902V256.74H792.882V254H785.362V256.74H783.342ZM786.882 252.04H791.082V246.32H787.962V247.5C787.962 249.273 787.602 250.787 786.882 252.04ZM797.589 248.24H802.509C802.509 247.573 802.315 247.02 801.929 246.58C801.542 246.14 800.982 245.92 800.249 245.92C799.542 245.92 798.935 246.14 798.429 246.58C797.922 247.02 797.642 247.573 797.589 248.24ZM804.909 249.32C804.909 249.6 804.902 249.813 804.889 249.96H797.589C797.642 250.627 797.935 251.187 798.469 251.64C799.002 252.093 799.622 252.32 800.329 252.32C801.435 252.32 802.282 251.907 802.869 251.08L804.469 252.36C803.522 253.64 802.149 254.28 800.349 254.28C798.842 254.28 797.602 253.827 796.629 252.92C795.669 252.013 795.189 250.793 795.189 249.26C795.189 247.727 795.669 246.487 796.629 245.54C797.589 244.593 798.802 244.12 800.269 244.12C801.655 244.12 802.775 244.567 803.629 245.46C804.482 246.353 804.909 247.64 804.909 249.32ZM806.233 244.4H808.533V245.74H808.593C808.873 245.3 809.293 244.92 809.853 244.6C810.426 244.28 811.113 244.12 811.913 244.12C813.273 244.12 814.386 244.6 815.253 245.56C816.133 246.52 816.573 247.72 816.573 249.16C816.573 250.6 816.14 251.813 815.273 252.8C814.42 253.787 813.28 254.28 811.853 254.28C811.186 254.28 810.566 254.14 809.993 253.86C809.42 253.58 808.98 253.2 808.673 252.72H808.633V258.8H806.233V244.4ZM813.393 251.34C813.886 250.713 814.133 249.987 814.133 249.16C814.133 248.333 813.886 247.613 813.393 247C812.913 246.387 812.24 246.08 811.373 246.08C810.533 246.08 809.853 246.4 809.333 247.04C808.813 247.68 808.553 248.4 808.553 249.2C808.553 250 808.813 250.713 809.333 251.34C809.853 251.967 810.533 252.28 811.373 252.28C812.24 252.28 812.913 251.967 813.393 251.34ZM815.822 254L819.982 248.96L816.162 244.4H819.122L822.502 248.78H822.562V244.4H824.962V248.78H825.022L828.422 244.4H831.382L827.542 248.96L831.702 254H828.742L825.022 249.36H824.962V254H822.562V249.36H822.502L818.802 254H815.822ZM832.045 254V244.4H834.445V248.66H834.505L838.205 244.4H841.245L837.025 248.92L841.565 254H838.485L834.505 249.44H834.445V254H832.045ZM847.865 254V252.78H847.805C847.565 253.207 847.172 253.56 846.625 253.84C846.092 254.107 845.492 254.24 844.825 254.24C843.905 254.24 843.072 254 842.325 253.52C841.592 253.027 841.225 252.273 841.225 251.26C841.225 250.713 841.358 250.24 841.625 249.84C841.905 249.427 842.252 249.107 842.665 248.88C843.078 248.653 843.592 248.473 844.205 248.34C844.832 248.193 845.418 248.1 845.965 248.06C846.525 248.02 847.145 248 847.825 248V247.76C847.825 247.2 847.618 246.767 847.205 246.46C846.792 246.153 846.265 246 845.625 246C844.612 246 843.738 246.367 843.005 247.1L841.765 245.64C842.858 244.627 844.212 244.12 845.825 244.12C846.652 244.12 847.352 244.24 847.925 244.48C848.512 244.707 848.958 245.027 849.265 245.44C849.572 245.84 849.785 246.267 849.905 246.72C850.038 247.16 850.105 247.64 850.105 248.16V254H847.865ZM847.825 249.96V249.62H847.285C844.845 249.62 843.625 250.153 843.625 251.22C843.625 251.647 843.785 251.953 844.105 252.14C844.438 252.327 844.838 252.42 845.305 252.42C846.118 252.42 846.738 252.207 847.165 251.78C847.605 251.34 847.825 250.733 847.825 249.96ZM754.68 278V268.4H757.08V272.02H761.12V268.4H763.52V278H761.12V273.94H757.08V278H754.68ZM771.359 278V276.78H771.299C771.059 277.207 770.666 277.56 770.119 277.84C769.586 278.107 768.986 278.24 768.319 278.24C767.399 278.24 766.566 278 765.819 277.52C765.086 277.027 764.719 276.273 764.719 275.26C764.719 274.713 764.852 274.24 765.119 273.84C765.399 273.427 765.746 273.107 766.159 272.88C766.572 272.653 767.086 272.473 767.699 272.34C768.326 272.193 768.912 272.1 769.459 272.06C770.019 272.02 770.639 272 771.319 272V271.76C771.319 271.2 771.112 270.767 770.699 270.46C770.286 270.153 769.759 270 769.119 270C768.106 270 767.232 270.367 766.499 271.1L765.259 269.64C766.352 268.627 767.706 268.12 769.319 268.12C770.146 268.12 770.846 268.24 771.419 268.48C772.006 268.707 772.452 269.027 772.759 269.44C773.066 269.84 773.279 270.267 773.399 270.72C773.532 271.16 773.599 271.64 773.599 272.16V278H771.359ZM771.319 273.96V273.62H770.779C768.339 273.62 767.119 274.153 767.119 275.22C767.119 275.647 767.279 275.953 767.599 276.14C767.932 276.327 768.332 276.42 768.799 276.42C769.612 276.42 770.232 276.207 770.659 275.78C771.099 275.34 771.319 274.733 771.319 273.96ZM783.595 269.62L781.955 271.06C781.768 270.793 781.488 270.573 781.115 270.4C780.742 270.213 780.362 270.12 779.975 270.12C779.148 270.12 778.502 270.433 778.035 271.06C777.568 271.673 777.335 272.387 777.335 273.2C777.335 274.027 777.575 274.747 778.055 275.36C778.535 275.973 779.202 276.28 780.055 276.28C780.935 276.28 781.608 275.993 782.075 275.42L783.575 276.94C782.748 277.833 781.568 278.28 780.035 278.28C778.568 278.28 777.335 277.82 776.335 276.9C775.335 275.98 774.835 274.747 774.835 273.2C774.835 271.68 775.328 270.453 776.315 269.52C777.302 268.587 778.522 268.12 779.975 268.12C780.682 268.12 781.368 268.253 782.035 268.52C782.702 268.787 783.222 269.153 783.595 269.62ZM786.001 272.24H790.921C790.921 271.573 790.727 271.02 790.341 270.58C789.954 270.14 789.394 269.92 788.661 269.92C787.954 269.92 787.347 270.14 786.841 270.58C786.334 271.02 786.054 271.573 786.001 272.24ZM793.321 273.32C793.321 273.6 793.314 273.813 793.301 273.96H786.001C786.054 274.627 786.347 275.187 786.881 275.64C787.414 276.093 788.034 276.32 788.741 276.32C789.847 276.32 790.694 275.907 791.281 275.08L792.881 276.36C791.934 277.64 790.561 278.28 788.761 278.28C787.254 278.28 786.014 277.827 785.041 276.92C784.081 276.013 783.601 274.793 783.601 273.26C783.601 271.727 784.081 270.487 785.041 269.54C786.001 268.593 787.214 268.12 788.681 268.12C790.067 268.12 791.187 268.567 792.041 269.46C792.894 270.353 793.321 271.64 793.321 273.32ZM794.745 278.12C794.105 278.12 793.625 278.067 793.305 277.96L793.485 276C793.685 276.067 793.898 276.1 794.125 276.1C794.738 276.1 795.205 275.787 795.525 275.16C795.845 274.533 796.005 273.42 796.005 271.82V268.4H803.865V278H801.465V270.32H798.305V272.36C798.305 274.333 798.018 275.787 797.445 276.72C796.872 277.653 795.972 278.12 794.745 278.12ZM807.594 272.24H812.514C812.514 271.573 812.321 271.02 811.934 270.58C811.548 270.14 810.988 269.92 810.254 269.92C809.548 269.92 808.941 270.14 808.434 270.58C807.928 271.02 807.648 271.573 807.594 272.24ZM814.914 273.32C814.914 273.6 814.908 273.813 814.894 273.96H807.594C807.648 274.627 807.941 275.187 808.474 275.64C809.008 276.093 809.628 276.32 810.334 276.32C811.441 276.32 812.288 275.907 812.874 275.08L814.474 276.36C813.528 277.64 812.154 278.28 810.354 278.28C808.848 278.28 807.608 277.827 806.634 276.92C805.674 276.013 805.194 274.793 805.194 273.26C805.194 271.727 805.674 270.487 806.634 269.54C807.594 268.593 808.808 268.12 810.274 268.12C811.661 268.12 812.781 268.567 813.634 269.46C814.488 270.353 814.914 271.64 814.914 273.32ZM816.239 278V268.4H818.639V272.02H822.679V268.4H825.079V278H822.679V273.94H818.639V278H816.239ZM826.958 278V268.4H829.358V274.6H829.398L833.598 268.4H836.198V278H833.798V271.84H833.758L829.598 278H826.958ZM837.366 278L839.786 274.36C838.36 273.947 837.646 272.993 837.646 271.5C837.646 270.487 838 269.72 838.706 269.2C839.426 268.667 840.353 268.4 841.486 268.4H846.326V278H843.926V274.6H842.146L840.186 278H837.366ZM842.066 272.82H843.926V270.2H842.066C841.306 270.2 840.766 270.3 840.446 270.5C840.126 270.7 839.966 271.04 839.966 271.52C839.966 271.987 840.133 272.32 840.466 272.52C840.813 272.72 841.346 272.82 842.066 272.82Z"
      fill="#FAFAFA"
    />`,
    title: 'Социальная поддержка населения',
    name: 'social-support',
  },
  {
    id: 10,
    path: `<g filter="url(#filter30_b_135_6962)">
      <path
        d="M985.017 270.085C991.729 267.305 999.271 267.305 1005.98 270.085L1057.32 291.351C1064.04 294.131 1069.37 299.464 1072.15 306.177L1093.41 357.517C1096.2 364.229 1096.2 371.771 1093.41 378.483L1072.15 429.823C1069.37 436.536 1064.04 441.869 1057.32 444.649L1005.98 465.915C999.271 468.695 991.729 468.695 985.017 465.915L933.677 444.649C926.964 441.869 921.631 436.536 918.851 429.823L897.585 378.483C894.805 371.771 894.805 364.229 897.585 357.517L918.851 306.177C921.631 299.464 926.964 294.131 933.677 291.351L985.017 270.085Z"
        fill="url(#paint18_linear_135_6962)"
      />
      <path
        d="M986.234 273.023C992.167 270.566 998.833 270.566 1004.77 273.023L1056.11 294.289C1062.04 296.747 1066.75 301.46 1069.21 307.394L1090.48 358.734C1092.93 364.667 1092.93 371.333 1090.48 377.266L1069.21 428.606C1066.75 434.54 1062.04 439.253 1056.11 441.711L1004.77 462.977C998.833 465.434 992.167 465.434 986.234 462.977L934.894 441.711C928.96 439.253 924.247 434.54 921.789 428.606L900.523 377.266C898.066 371.333 898.066 364.667 900.523 358.734L921.789 307.394C924.247 301.46 928.96 296.747 934.894 294.289L986.234 273.023Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter31_dddd_135_6962)">
      <g filter="url(#filter32_b_135_6962)">
        <rect
          x="971.5"
          y="326.5"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint19_linear_135_6962)"
        />
        <rect
          x="969.5"
          y="324.5"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M998.757 340.967H996.672V338.853C996.672 338.606 996.457 338.5 996.199 338.5H994.79C994.533 338.5 994.328 338.606 994.328 338.853V340.967H992.21C991.952 340.967 991.75 341.072 991.75 341.318V342.669C991.75 342.916 991.953 343.21 992.21 343.21H994.328V345.124C994.328 345.371 994.533 345.677 994.79 345.677H996.215C996.473 345.677 996.672 345.371 996.672 345.124V343.21H998.757C999.015 343.21 999.25 342.916 999.25 342.669V341.323C999.25 341.076 999.015 340.967 998.757 340.967Z"
        fill="#FAFAFA"
      />
      <path
        d="M1009.8 361.154H1009.33V342.656C1009.33 341.865 1009.21 341.864 1009.08 341.864H1000.66V342.669C1000.66 343.658 999.791 344.555 998.757 344.555H998.078V345.123C998.078 346.112 997.248 347.023 996.215 347.023H994.79C993.756 347.023 992.921 346.112 992.921 345.123V344.555H992.21C991.176 344.555 990.343 343.658 990.343 342.669V341.865H981.92C981.791 341.865 981.672 341.865 981.672 342.657V361.154H981.203C980.814 361.154 980.5 361.455 980.5 361.827C980.5 362.198 980.814 362.5 981.203 362.5H1009.8C1010.19 362.5 1010.5 362.199 1010.5 361.827C1010.5 361.455 1010.19 361.154 1009.8 361.154ZM1000.42 348.475C1000.42 348.351 1000.51 348.369 1000.64 348.369H1005.78C1005.91 348.369 1006.05 348.351 1006.05 348.475V350.612H1000.42L1000.42 348.475ZM1000.42 351.958H1006.05V358.575C1006.05 358.699 1005.91 358.911 1005.78 358.911H1000.64C1000.51 358.911 1000.42 358.699 1000.42 358.575L1000.42 351.958ZM992.687 348.475C992.687 348.351 992.804 348.369 992.933 348.369H998.072C998.201 348.369 998.312 348.351 998.312 348.475V350.612H992.687V348.475ZM992.687 351.958H998.312V358.575C998.312 358.699 998.201 358.911 998.072 358.911H992.933C992.804 358.911 992.687 358.699 992.687 358.575V351.958ZM984.953 348.475C984.953 348.351 985.094 348.369 985.224 348.369H990.362C990.492 348.369 990.578 348.351 990.578 348.475V350.612H984.953V348.475ZM984.953 351.958H990.578V358.575C990.578 358.699 990.491 358.911 990.362 358.911H985.224C985.094 358.911 984.953 358.699 984.953 358.575V351.958Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M964.163 395.612L962.627 396.828C962.35 396.444 961.971 396.156 961.491 395.964C961.022 395.761 960.542 395.66 960.051 395.66C958.899 395.66 957.955 396.055 957.219 396.844C956.494 397.633 956.131 398.62 956.131 399.804C956.131 401.041 956.478 402.049 957.171 402.828C957.875 403.596 958.808 403.98 959.971 403.98C961.166 403.98 962.083 403.543 962.723 402.668L964.339 403.804C963.283 405.127 961.822 405.788 959.955 405.788C958.184 405.788 956.734 405.233 955.603 404.124C954.472 403.004 953.907 401.564 953.907 399.804C953.907 398.023 954.483 396.593 955.635 395.516C956.798 394.428 958.27 393.884 960.051 393.884C960.84 393.884 961.614 394.033 962.371 394.332C963.139 394.62 963.736 395.047 964.163 395.612ZM964.576 405.596C964.064 405.596 963.68 405.553 963.424 405.468L963.568 403.9C963.728 403.953 963.898 403.98 964.08 403.98C964.57 403.98 964.944 403.729 965.2 403.228C965.456 402.727 965.584 401.836 965.584 400.556V397.82H971.872V405.5H969.952V399.356H967.424V400.988C967.424 402.567 967.194 403.729 966.736 404.476C966.277 405.223 965.557 405.596 964.576 405.596ZM975.327 405.5L972.031 397.82H974.159L976.303 403.404H976.335L978.239 397.82H980.239L976.607 407.148C976.309 407.905 975.946 408.46 975.519 408.812C975.103 409.164 974.495 409.34 973.695 409.34C973.343 409.34 973.013 409.303 972.703 409.228L972.863 407.564C973.098 407.639 973.338 407.676 973.583 407.676C973.967 407.676 974.245 407.585 974.415 407.404C974.586 407.233 974.762 406.924 974.943 406.476L975.327 405.5ZM979.154 405.5L982.482 401.468L979.426 397.82H981.794L984.498 401.324H984.546V397.82H986.466V401.324H986.514L989.234 397.82H991.602L988.53 401.468L991.858 405.5H989.49L986.514 401.788H986.466V405.5H984.546V401.788H984.498L981.538 405.5H979.154ZM995.853 405.724C994.52 405.724 993.459 405.281 992.669 404.396C992.296 403.969 992.024 403.468 991.853 402.892C991.693 402.316 991.613 401.548 991.613 400.588C991.613 399.788 991.635 399.111 991.677 398.556C991.731 398.001 991.827 397.447 991.965 396.892C992.115 396.337 992.317 395.889 992.573 395.548C992.84 395.196 993.192 394.897 993.629 394.652C994.077 394.407 994.611 394.241 995.229 394.156L997.197 393.9C997.656 393.836 997.987 393.756 998.189 393.66C998.392 393.564 998.525 393.393 998.589 393.148L999.965 393.548C999.827 394.167 999.592 394.62 999.261 394.908C998.941 395.185 998.467 395.367 997.837 395.452L995.757 395.724C995.288 395.788 994.899 395.879 994.589 395.996C994.291 396.113 994.013 396.305 993.757 396.572C993.512 396.828 993.325 397.185 993.197 397.644C993.08 398.103 993.011 398.684 992.989 399.388H993.037C993.667 398.225 994.733 397.644 996.237 397.644C997.283 397.644 998.173 398.017 998.909 398.764C999.645 399.511 1000.01 400.476 1000.01 401.66C1000.01 402.865 999.613 403.847 998.813 404.604C998.013 405.351 997.027 405.724 995.853 405.724ZM994.205 403.388C994.6 403.868 995.139 404.108 995.821 404.108C996.504 404.108 997.048 403.868 997.453 403.388C997.869 402.897 998.077 402.305 998.077 401.612C998.077 400.929 997.869 400.348 997.453 399.868C997.048 399.377 996.499 399.132 995.805 399.132C995.123 399.132 994.584 399.372 994.189 399.852C993.805 400.332 993.613 400.919 993.613 401.612C993.613 402.305 993.811 402.897 994.205 403.388ZM1005.62 405.5V404.524H1005.58C1005.38 404.865 1005.07 405.148 1004.63 405.372C1004.2 405.585 1003.72 405.692 1003.19 405.692C1002.46 405.692 1001.79 405.5 1001.19 405.116C1000.6 404.721 1000.31 404.119 1000.31 403.308C1000.31 402.871 1000.42 402.492 1000.63 402.172C1000.86 401.841 1001.13 401.585 1001.46 401.404C1001.79 401.223 1002.2 401.079 1002.7 400.972C1003.2 400.855 1003.67 400.78 1004.1 400.748C1004.55 400.716 1005.05 400.7 1005.59 400.7V400.508C1005.59 400.06 1005.43 399.713 1005.1 399.468C1004.76 399.223 1004.34 399.1 1003.83 399.1C1003.02 399.1 1002.32 399.393 1001.74 399.98L1000.74 398.812C1001.62 398.001 1002.7 397.596 1003.99 397.596C1004.65 397.596 1005.21 397.692 1005.67 397.884C1006.14 398.065 1006.5 398.321 1006.74 398.652C1006.99 398.972 1007.16 399.313 1007.26 399.676C1007.36 400.028 1007.42 400.412 1007.42 400.828V405.5H1005.62ZM1005.59 402.268V401.996H1005.16C1003.21 401.996 1002.23 402.423 1002.23 403.276C1002.23 403.617 1002.36 403.863 1002.62 404.012C1002.88 404.161 1003.2 404.236 1003.58 404.236C1004.23 404.236 1004.72 404.065 1005.06 403.724C1005.42 403.372 1005.59 402.887 1005.59 402.268ZM1014.96 405.5V396.508L1012.72 398.348L1011.6 397.02L1015.14 394.172H1016.88V405.5H1014.96ZM1023.73 405.5V396.508L1021.49 398.348L1020.37 397.02L1023.91 394.172H1025.65V405.5H1023.73ZM1029.14 405.5V403.74L1033.5 399.452C1034.27 398.705 1034.66 397.964 1034.66 397.228C1034.66 396.705 1034.48 396.284 1034.14 395.964C1033.8 395.644 1033.37 395.484 1032.85 395.484C1032.31 395.484 1031.88 395.665 1031.54 396.028C1031.2 396.38 1031 396.844 1030.93 397.42L1029.06 397.132C1029.17 396.183 1029.58 395.404 1030.29 394.796C1030.99 394.188 1031.86 393.884 1032.88 393.884C1033.92 393.884 1034.82 394.177 1035.55 394.764C1036.29 395.351 1036.66 396.161 1036.66 397.196C1036.66 397.868 1036.5 398.471 1036.18 399.004C1035.87 399.527 1035.42 400.065 1034.83 400.62L1031.57 403.74H1036.67V405.5H1029.14Z"
      fill="#FAFAFA"
    />`,
    title: 'Служба 112',
    name: 'service',
  },
]
</script>
<style lang="scss" scoped>
.nav {
  @apply tw-w-full tw-px-[92px] lg:tw-px-[156px];
}
</style>
