<template>
  <svg
    class="nav"
    viewBox="0 0 844 756"
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
        id="filter0_b_0_1"
        x="-31.5521"
        y="222.739"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_dddd_0_1"
        x="87.6719"
        y="303.963"
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
          result="effect1_dropShadow_0_1"
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
          in2="effect1_dropShadow_0_1"
          result="effect2_dropShadow_0_1"
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
          in2="effect2_dropShadow_0_1"
          result="effect3_dropShadow_0_1"
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
          in2="effect3_dropShadow_0_1"
          result="effect4_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_b_0_1"
        x="65.4479"
        y="273.739"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_b_0_1"
        x="116.003"
        y="-32.0756"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_dddd_0_1"
        x="235.227"
        y="73.1484"
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
          result="effect1_dropShadow_0_1"
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
          in2="effect1_dropShadow_0_1"
          result="effect2_dropShadow_0_1"
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
          in2="effect2_dropShadow_0_1"
          result="effect3_dropShadow_0_1"
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
          in2="effect3_dropShadow_0_1"
          result="effect4_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter5_b_0_1"
        x="213.003"
        y="42.9244"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter6_b_0_1"
        x="413.409"
        y="-32.0756"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter7_dddd_0_1"
        x="532.633"
        y="73.1484"
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
          result="effect1_dropShadow_0_1"
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
          in2="effect1_dropShadow_0_1"
          result="effect2_dropShadow_0_1"
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
          in2="effect2_dropShadow_0_1"
          result="effect3_dropShadow_0_1"
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
          in2="effect3_dropShadow_0_1"
          result="effect4_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter8_b_0_1"
        x="510.409"
        y="42.9244"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter9_b_0_1"
        x="116.003"
        y="473.406"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter10_dddd_0_1"
        x="235.227"
        y="566.63"
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
          result="effect1_dropShadow_0_1"
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
          in2="effect1_dropShadow_0_1"
          result="effect2_dropShadow_0_1"
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
          in2="effect2_dropShadow_0_1"
          result="effect3_dropShadow_0_1"
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
          in2="effect3_dropShadow_0_1"
          result="effect4_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter11_b_0_1"
        x="213.003"
        y="536.406"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter12_b_0_1"
        x="413.409"
        y="473.406"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter13_dddd_0_1"
        x="532.633"
        y="566.63"
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
          result="effect1_dropShadow_0_1"
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
          in2="effect1_dropShadow_0_1"
          result="effect2_dropShadow_0_1"
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
          in2="effect2_dropShadow_0_1"
          result="effect3_dropShadow_0_1"
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
          in2="effect3_dropShadow_0_1"
          result="effect4_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter14_b_0_1"
        x="510.409"
        y="536.406"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter15_b_0_1"
        x="561.042"
        y="222.739"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter16_dddd_0_1"
        x="680.266"
        y="315.963"
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
          result="effect1_dropShadow_0_1"
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
          in2="effect1_dropShadow_0_1"
          result="effect2_dropShadow_0_1"
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
          in2="effect2_dropShadow_0_1"
          result="effect3_dropShadow_0_1"
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
          in2="effect3_dropShadow_0_1"
          result="effect4_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter17_b_0_1"
        x="658.042"
        y="285.739"
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
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter18_b_0_1"
        x="255.35"
        y="213.349"
        width="333.191"
        height="333.191"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.54785" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter19_dddd_0_1"
        x="376.945"
        y="308.444"
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
          result="effect1_dropShadow_0_1"
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
          in2="effect1_dropShadow_0_1"
          result="effect2_dropShadow_0_1"
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
          in2="effect2_dropShadow_0_1"
          result="effect3_dropShadow_0_1"
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
          in2="effect3_dropShadow_0_1"
          result="effect4_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect4_dropShadow_0_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter20_b_0_1"
        x="367.85"
        y="291.349"
        width="110.191"
        height="110.191"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.54785" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_0_1"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_0_1"
        x1="125.672"
        y1="254.963"
        x2="125.672"
        y2="504.963"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_1"
        x1="125.672"
        y1="309.963"
        x2="125.672"
        y2="357.963"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_0_1"
        x1="273.227"
        y1="0.148437"
        x2="273.227"
        y2="250.148"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_0_1"
        x1="273.227"
        y1="79.1484"
        x2="273.227"
        y2="127.148"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_0_1"
        x1="570.633"
        y1="0.148437"
        x2="570.633"
        y2="250.148"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_0_1"
        x1="570.633"
        y1="79.1484"
        x2="570.633"
        y2="127.148"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_0_1"
        x1="273.227"
        y1="505.63"
        x2="273.227"
        y2="755.63"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_0_1"
        x1="273.227"
        y1="572.63"
        x2="273.227"
        y2="620.63"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_0_1"
        x1="570.633"
        y1="505.63"
        x2="570.633"
        y2="755.63"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_0_1"
        x1="570.633"
        y1="572.63"
        x2="570.633"
        y2="620.63"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_0_1"
        x1="718.266"
        y1="254.963"
        x2="718.266"
        y2="504.963"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_0_1"
        x1="718.266"
        y1="321.963"
        x2="718.266"
        y2="369.963"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_0_1"
        x1="422.945"
        y1="314.444"
        x2="422.945"
        y2="378.444"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3A56C7" stop-opacity="0" />
        <stop offset="1" stop-color="#3A56C7" />
      </linearGradient>
    </defs>
  </svg>
</template>
<script setup lang="ts">
const navPathList = [
  {
    id: 1,
    path: `<g filter="url(#filter18_b_0_1)">
      <path
        d="M406.482 235.52C416.383 231.419 427.508 231.419 437.408 235.52L513.135 266.887C523.035 270.988 530.902 278.854 535.003 288.755L566.37 364.481C570.471 374.382 570.471 385.507 566.37 395.407L535.003 471.134C530.902 481.034 523.035 488.901 513.135 493.002L437.408 524.369C427.508 528.47 416.383 528.47 406.482 524.369L330.756 493.002C320.855 488.901 312.989 481.034 308.888 471.134L277.521 395.407C273.42 385.507 273.42 374.382 277.521 364.481L308.888 288.755C312.989 278.854 320.855 270.988 330.756 266.887L406.482 235.52Z"
        fill="#0C72EA"
        fill-opacity="0.159"
      />
      <path
        d="M407.699 238.457C416.821 234.679 427.07 234.679 436.192 238.457L511.918 269.824C521.04 273.603 528.287 280.85 532.065 289.972L563.432 365.698C567.211 374.82 567.211 385.069 563.432 394.191L532.065 469.917C528.287 479.039 521.04 486.286 511.918 490.064L436.192 521.431C427.07 525.21 416.821 525.21 407.699 521.431L331.973 490.064C322.851 486.286 315.604 479.039 311.825 469.917L280.458 394.191C276.68 385.069 276.68 374.82 280.458 365.698L311.825 289.972C315.604 280.85 322.851 273.603 331.973 269.824L407.699 238.457Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.35852"
      />
    </g>
    <g filter="url(#filter19_dddd_0_1)">
      <g filter="url(#filter20_b_0_1)">
        <rect
          x="390.945"
          y="314.444"
          width="64"
          height="64"
          rx="12"
          fill="url(#paint12_linear_0_1)"
        />
        <rect
          x="388.945"
          y="312.444"
          width="68"
          height="68"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M414.642 327.777C414.824 327.777 414.861 327.816 414.866 327.821C414.871 327.821 414.959 327.821 415.006 327.87C415.184 328.094 415.277 328.275 415.319 328.499C415.366 328.543 415.366 328.543 415.413 328.592C415.455 328.592 415.502 328.636 415.548 328.636C415.637 328.636 415.773 328.636 415.861 328.68C415.903 328.728 415.997 328.772 415.997 328.816C416.132 328.948 416.132 328.997 416.132 329.04C416.357 329.04 416.403 328.997 416.446 328.997C416.488 328.997 416.534 328.997 416.581 329.04C416.623 329.084 416.623 329.084 416.67 329.133C416.988 329.04 417.03 329.001 417.03 328.953C417.301 328.86 417.301 328.909 417.343 328.953C417.39 329.001 417.483 329.084 417.525 329.084C417.796 329.084 417.843 329.04 417.885 329.04C418.24 328.997 418.329 328.953 418.334 328.948C418.469 328.904 418.511 328.816 418.605 328.723C418.651 328.631 418.74 328.543 418.829 328.499C418.876 328.45 418.964 328.45 419.058 328.45C419.32 328.406 419.544 328.406 419.815 328.363H419.95C420.039 328.499 420.039 328.543 420.039 328.592C420.039 328.68 420.039 328.723 419.993 328.767C419.993 328.948 420.035 329.036 420.039 329.04C420.039 329.084 420.086 329.133 420.128 329.172C420.175 329.221 420.222 329.265 420.264 329.309C420.31 329.353 420.357 329.44 420.404 329.44C420.446 329.484 420.493 329.484 420.581 329.484C420.717 329.44 420.764 329.44 420.81 329.44C420.899 329.44 420.946 329.484 420.993 329.484C421.264 329.44 421.348 329.353 421.437 329.26C421.53 329.167 421.619 329.079 421.708 329.036C421.75 328.992 421.796 328.992 421.843 328.992C421.932 328.992 421.979 329.036 422.021 329.036C422.156 329.036 422.203 328.992 422.296 328.992C422.339 328.992 422.385 328.992 422.432 329.036C422.474 329.036 422.521 329.079 422.567 329.128L422.521 329.309C422.834 329.757 422.923 329.982 423.016 330.162C423.105 330.162 423.152 330.206 423.194 330.294C423.24 330.343 423.287 330.426 423.287 330.474C423.376 330.567 423.469 330.606 423.558 330.699C423.605 330.791 423.647 330.83 423.694 330.879C423.74 330.923 423.829 330.923 423.876 330.972C424.012 331.016 424.147 331.016 424.325 331.016C424.413 330.884 424.413 330.791 424.502 330.747C424.549 330.699 424.596 330.655 424.638 330.655C424.731 330.655 424.867 330.655 424.951 330.606C425.044 330.606 425.133 330.562 425.18 330.474C425.133 330.25 425.133 330.25 425.086 330.201C425.18 329.796 425.222 329.704 425.269 329.616C425.362 329.523 425.404 329.479 425.451 329.479C425.498 329.436 425.54 329.436 425.586 329.436C425.675 329.343 425.675 329.343 425.722 329.304C425.904 329.255 425.951 329.255 425.993 329.304C425.993 329.392 425.993 329.436 425.993 329.479C426.04 329.704 426.04 329.796 426.04 329.84C426.04 329.884 426.04 329.933 426.04 329.972L426.264 330.196L426.357 330.377C426.357 330.508 426.357 330.601 426.357 330.694C426.4 330.825 426.446 330.825 426.493 330.874C426.717 330.967 426.806 330.967 426.853 330.967C426.988 330.918 427.035 330.874 427.082 330.83C427.171 330.699 427.264 330.655 427.353 330.606C427.442 330.562 427.577 330.513 427.713 330.513C427.853 330.562 427.984 330.65 428.119 330.694C428.255 330.786 428.344 330.825 428.479 330.825C428.573 330.825 428.615 330.825 428.708 330.738C428.844 330.689 428.886 330.689 428.932 330.689C428.979 330.689 429.068 330.689 429.115 330.689C429.161 330.689 429.204 330.738 429.25 330.738C429.339 330.738 429.386 330.738 429.475 330.689C429.521 330.689 429.615 330.645 429.657 330.645C429.704 330.645 429.75 330.645 429.839 330.689C429.928 330.738 429.928 330.821 429.975 330.869C430.11 330.913 430.157 330.913 430.204 330.869C430.246 330.821 430.292 330.821 430.381 330.777C430.563 330.552 430.563 330.46 430.652 330.416C430.699 330.372 430.746 330.328 430.834 330.328C430.97 330.328 431.017 330.372 431.106 330.372C431.199 330.416 431.288 330.465 431.335 330.504C431.377 330.552 431.377 330.596 431.423 330.596C431.47 330.689 431.559 330.733 431.652 330.733C431.741 330.777 431.83 330.777 431.923 330.821C431.965 330.869 432.012 330.869 432.059 330.913C432.194 330.962 432.33 331.006 432.377 331.006C432.465 331.006 432.512 330.962 432.554 330.913C432.648 330.869 432.694 330.782 432.825 330.689C432.867 330.645 432.914 330.557 432.914 330.465C432.961 330.372 432.961 330.284 433.05 330.24C433.185 330.284 433.227 330.328 433.232 330.333C433.456 330.377 433.503 330.421 433.545 330.421C433.769 330.513 433.863 330.469 433.947 330.469C434.082 330.562 434.082 330.65 434.082 330.743C434.082 330.83 434.036 330.967 434.036 331.06C433.947 331.191 433.858 331.284 433.723 331.377C433.68 331.42 433.68 331.469 433.634 331.508C433.634 331.733 433.68 331.733 433.723 331.781C433.769 331.957 433.723 332.006 433.723 332.05C433.68 332.098 433.68 332.186 433.68 332.23C433.68 332.279 433.68 332.323 433.769 332.362C433.769 332.454 433.769 332.542 433.723 332.635C433.68 332.727 433.68 332.815 433.587 332.859C433.587 333.084 433.587 333.132 433.68 333.132C433.769 333.132 433.905 333.132 434.04 333.176C434.134 333.176 434.223 333.225 434.269 333.225C434.269 333.405 434.223 333.449 434.223 333.493C434.176 333.542 434.176 333.586 434.176 333.63C434.176 333.722 434.223 333.805 434.223 333.947C434.311 334.127 434.358 334.171 434.405 334.171L434.587 334.039C434.811 334.039 434.811 334.083 434.858 334.132C434.9 334.176 434.994 334.264 435.036 334.264C435.082 334.308 435.129 334.308 435.176 334.308C435.218 334.308 435.311 334.308 435.4 334.215C435.536 334.215 435.582 334.215 435.625 334.264V334.488C435.536 334.62 435.4 334.761 435.223 334.849C435.181 334.898 435.181 334.898 435.134 334.942C435.04 335.122 434.998 335.122 434.952 335.171C434.816 335.215 434.727 335.215 434.681 335.215C434.634 335.215 434.545 335.215 434.545 335.259C434.452 335.395 434.41 335.395 434.316 335.395C434.227 335.395 434.181 335.395 434.092 335.346C434.003 335.346 433.956 335.303 433.909 335.303C433.727 335.303 433.685 335.303 433.638 335.346C433.55 335.439 433.55 335.527 433.55 335.663C433.592 335.844 433.638 335.893 433.685 335.893C433.727 335.98 433.821 336.024 433.867 336.117C433.909 336.161 433.909 336.21 433.909 336.249C433.55 336.566 433.461 336.702 433.372 336.878C433.19 336.878 433.143 336.834 433.101 336.834C433.054 336.785 433.008 336.785 432.965 336.785L432.783 336.966C432.554 336.834 432.381 336.785 432.152 336.785C432.11 336.785 432.064 336.785 431.97 336.785C431.928 336.834 431.928 336.834 431.881 336.878C431.97 337.058 432.017 337.058 432.064 337.102C432.11 337.151 432.11 337.195 432.11 337.239C432.11 337.331 432.11 337.37 432.152 337.419C432.152 337.463 432.199 337.507 432.246 337.551C432.288 337.683 432.288 337.731 432.246 337.775C432.246 337.824 432.199 337.868 432.199 337.907L432.736 338.677C432.872 338.809 432.872 338.902 432.872 338.946C432.736 339.126 432.694 339.175 432.648 339.219C432.601 339.263 432.554 339.35 432.465 339.399L432.152 339.76C432.064 339.667 432.064 339.667 432.017 339.628C431.97 339.628 431.835 339.585 431.746 339.585C431.657 339.585 431.521 339.585 431.386 339.536C431.297 339.492 431.25 339.443 431.208 339.404C431.115 339.355 431.026 339.311 430.979 339.268C430.937 339.224 430.891 339.18 430.844 339.136C430.802 339.092 430.802 339.043 430.755 338.955C430.662 338.78 430.619 338.731 430.573 338.687C430.573 338.638 430.573 338.595 430.573 338.555C430.573 338.463 430.573 338.419 430.573 338.326C430.573 338.282 430.526 338.195 430.484 338.151C430.302 338.151 430.124 338.195 429.989 338.238L429.806 338.56C429.853 338.692 429.9 338.736 429.9 338.785C429.9 338.829 429.942 338.916 429.942 338.96C429.942 339.097 429.9 339.233 429.806 339.365C429.764 339.414 429.764 339.458 429.718 339.546C429.718 339.594 429.671 339.677 429.671 339.726L429.582 339.906C429.535 339.95 429.489 339.95 429.447 339.994C429.4 340.043 429.353 340.087 429.264 340.087C429.218 340.087 429.175 340.043 429.129 339.994C429.082 339.95 429.04 339.906 428.993 339.863C428.946 339.819 428.858 339.77 428.858 339.731V339.506C428.993 339.326 428.993 339.233 429.04 339.189L429.082 338.829C429.04 338.604 429.04 338.56 429.04 338.512C429.04 338.419 429.04 338.331 429.04 338.238C429.04 338.151 429.082 338.063 429.129 338.014C429.175 337.97 429.175 337.97 429.264 337.97C429.26 338.019 429.302 338.019 429.39 338.019C429.573 338.019 429.661 337.887 429.661 337.702C429.526 337.702 429.479 337.702 429.432 337.702L429.255 337.434L429.073 337.341C428.984 337.205 428.844 337.112 428.671 337.112C428.442 337.248 428.175 337.205 427.951 337.248C427.904 337.248 427.816 337.292 427.769 337.341C427.722 337.385 427.633 337.385 427.54 337.385C427.404 337.341 427.404 337.292 427.362 337.253C427.316 337.205 427.316 337.161 427.269 337.161C427.227 337.112 427.18 337.112 427.133 337.112C427.044 337.068 426.909 337.068 426.82 337.024C426.685 337.024 426.643 337.024 426.596 337.024C426.549 337.068 426.549 337.156 426.507 337.248C426.46 337.341 426.46 337.473 426.414 337.565C426.367 337.609 426.325 337.658 426.278 337.697C426.231 337.746 426.231 337.746 426.189 337.79C426.143 337.839 426.143 337.882 426.143 337.921C426.189 338.014 426.231 338.102 426.231 338.195C426.231 338.238 426.231 338.287 426.189 338.326C426.143 338.375 426.096 338.419 426.054 338.507C425.96 338.599 425.918 338.638 425.825 338.687C425.778 338.731 425.736 338.731 425.642 338.731C425.6 338.78 425.554 338.868 425.554 338.912C425.465 338.955 425.465 339.004 425.465 339.043C425.507 339.136 425.554 339.224 425.554 339.268C425.6 339.36 425.6 339.404 425.642 339.497C425.736 339.541 425.778 339.541 425.825 339.589C425.871 339.633 425.871 339.677 425.871 339.721C425.871 339.765 425.871 339.853 425.825 339.945C425.736 339.989 425.689 340.077 425.6 340.126C425.507 340.17 425.465 340.258 425.465 340.35C425.465 340.394 425.418 340.443 425.418 340.482C425.507 340.662 425.554 340.711 425.6 340.755C425.642 340.799 425.689 340.848 425.736 340.935C425.778 340.979 425.825 341.028 425.871 341.111C426.096 341.248 426.362 341.34 426.591 341.433C426.638 341.433 426.68 341.433 426.727 341.477C426.773 341.521 426.773 341.521 426.815 341.569C426.862 341.613 426.862 341.701 426.909 341.75C426.951 341.794 426.951 341.794 427.044 341.794C427.18 341.75 427.227 341.75 427.269 341.794C427.316 341.843 427.316 341.843 427.362 341.886C427.404 341.979 427.404 342.067 427.404 342.111C427.404 342.16 427.451 342.203 427.451 342.247C427.498 342.291 427.54 342.335 427.633 342.379C427.722 342.423 427.816 342.423 427.858 342.472C427.993 342.603 428.04 342.696 428.087 342.833C428.129 342.969 428.087 343.057 428.129 343.237C428.311 343.237 428.358 343.237 428.446 343.286C428.493 343.33 428.582 343.374 428.629 343.418C428.675 343.511 428.717 343.598 428.811 343.691C428.9 343.735 428.993 343.779 429.082 343.779C429.129 343.779 429.218 343.779 429.264 343.735C429.577 343.462 429.802 343.193 430.073 342.969C430.386 342.969 430.433 343.013 430.475 343.013C430.568 342.969 430.568 342.92 430.61 342.881C430.657 342.833 430.704 342.789 430.75 342.789C430.792 342.789 430.839 342.789 430.886 342.789C431.11 342.789 431.288 342.881 431.47 343.013C431.648 343.145 431.783 343.237 431.961 343.286C432.321 343.013 432.363 342.969 432.363 342.925C432.409 342.881 432.409 342.833 432.456 342.833C432.545 342.789 432.592 342.74 432.68 342.701C432.909 342.569 433.082 342.52 433.222 342.477C433.311 342.428 433.358 342.428 433.4 342.384C433.494 342.335 433.536 342.291 433.629 342.252C433.718 342.203 433.811 342.116 433.853 342.072C433.9 342.023 433.947 342.023 434.036 341.979C434.082 341.979 434.171 342.023 434.26 342.072C434.353 342.116 434.442 342.164 434.489 342.164C434.624 342.164 434.671 342.164 434.713 342.164C434.76 342.164 434.807 342.164 434.849 342.116C434.849 342.116 434.896 342.072 434.942 342.023C434.942 341.891 435.031 341.755 435.078 341.662C435.167 341.569 435.26 341.482 435.302 341.389C435.349 341.345 435.396 341.257 435.438 341.209C435.484 341.165 435.573 341.116 435.62 341.077C435.667 341.077 435.713 341.033 435.755 340.984C435.802 340.94 435.802 340.892 435.802 340.853C435.849 340.76 435.849 340.628 435.849 340.536L436.073 340.355C436.12 340.311 436.162 340.262 436.162 340.223C436.209 340.175 436.209 340.087 436.255 340.043C436.302 339.994 436.302 339.994 436.344 339.95C436.704 340.175 436.746 340.175 436.793 340.175C436.928 340.223 436.975 340.267 437.022 340.267C437.064 340.267 437.157 340.223 437.246 340.223C437.335 340.175 437.382 340.175 437.47 340.131C437.517 340.131 437.564 340.082 437.611 340.082C437.611 340.262 437.611 340.262 437.564 340.311C437.47 340.76 437.293 341.121 437.293 341.482C437.293 341.613 437.246 341.706 437.246 341.799C437.199 341.891 437.157 341.979 437.111 342.072C437.022 342.116 437.022 342.164 436.928 342.203C436.882 342.252 436.84 342.296 436.746 342.335C436.704 342.652 436.657 342.881 436.522 343.057C436.882 343.106 436.882 343.193 436.84 343.33C436.84 343.423 436.793 343.554 436.793 343.647C436.657 343.828 436.611 343.92 436.611 343.964C436.793 344.096 436.882 344.145 436.97 344.237C437.017 344.281 437.059 344.369 437.059 344.413C437.106 344.642 437.059 344.686 437.017 344.735C436.97 344.779 436.924 344.822 436.877 344.866C436.788 345.091 436.835 345.227 436.835 345.315C436.653 345.408 436.517 345.364 436.386 345.271C436.251 345.222 436.115 345.135 436.026 345.091C435.938 345.047 435.891 345.047 435.849 345.047C435.713 345.135 435.578 345.222 435.489 345.271C435.129 345.403 435.087 345.632 434.994 345.9C434.952 346.032 434.905 346.261 434.816 346.442C434.723 346.622 434.634 346.802 434.503 346.895C434.456 346.939 434.41 346.939 434.367 346.939C434.321 346.939 434.274 346.939 434.232 346.939L434.003 347.032C433.914 346.988 433.867 346.988 433.825 346.939C433.779 346.939 433.732 346.895 433.685 346.895C433.55 347.119 433.596 347.212 433.596 347.3C433.596 347.344 433.596 347.432 433.55 347.475C433.508 347.612 433.461 347.705 433.461 347.836C433.461 347.88 433.461 347.929 433.461 347.968C433.508 348.017 433.508 348.061 433.508 348.105C433.508 348.192 433.461 348.28 433.414 348.329C433.372 348.422 433.372 348.461 433.372 348.505C433.414 348.909 433.414 349.002 433.414 349.051C433.414 349.143 433.414 349.226 433.372 349.275C433.325 349.319 433.279 349.319 433.237 349.368C433.19 349.412 433.143 349.412 433.096 349.46L432.961 349.592V349.773L433.054 349.865C433.096 349.865 433.19 349.865 433.237 349.865C433.279 349.865 433.325 349.865 433.372 349.909C433.414 350.226 433.414 350.407 433.414 350.587C433.414 350.811 433.372 350.992 433.279 351.172C433.279 351.353 433.325 351.445 433.325 351.577C433.372 351.67 433.414 351.757 433.414 351.85C433.414 351.943 433.414 351.982 433.372 352.074C433.372 352.123 433.325 352.206 433.325 352.299C433.372 352.391 433.372 352.528 433.372 352.616C433.414 352.528 433.414 352.484 433.461 352.484C433.643 352.577 433.685 352.616 433.732 352.709L433.961 352.845V353.069L434.05 353.386C434.05 353.479 434.05 353.518 434.003 353.611C434.003 353.703 433.961 353.791 433.961 353.835C433.867 353.928 433.867 353.928 433.825 353.967C433.685 354.016 433.643 353.967 433.596 353.923C433.325 354.016 433.325 354.055 433.372 354.103C433.372 354.235 433.325 354.284 433.325 354.372C433.279 354.42 433.237 354.464 433.19 354.552C433.054 354.645 433.008 354.684 433.008 354.776C433.008 355.274 433.008 355.41 433.054 355.547C433.054 355.727 433.096 355.908 433.096 356.088C433.096 356.181 433.096 356.313 433.054 356.405C432.961 356.498 432.919 356.542 432.919 356.63C432.919 356.678 432.919 356.722 432.961 356.766C433.096 356.81 433.143 356.81 433.19 356.81C433.325 356.903 433.325 356.942 433.372 357.034C433.414 357.083 433.414 357.171 433.414 357.264C433.414 357.307 433.414 357.351 433.372 357.395C433.279 357.395 433.237 357.395 433.237 357.439C433.19 357.532 433.19 357.62 433.143 357.712C433.279 357.937 433.279 357.985 433.325 358.029C433.325 358.122 433.325 358.161 433.372 358.21C433.55 358.341 433.55 358.478 433.55 358.571C433.55 358.619 433.55 358.663 433.55 358.707C433.685 358.795 433.732 358.795 433.779 358.795C433.825 358.795 433.867 358.795 433.914 358.795L433.732 359.292V359.473C433.643 359.566 433.55 359.566 433.461 359.566C433.372 359.566 433.279 359.566 433.19 359.566L432.919 359.341C432.736 359.434 432.736 359.473 432.736 359.566C432.69 359.697 432.69 359.834 432.69 359.926C432.601 360.019 432.554 360.156 432.465 360.243C432.507 360.336 432.507 360.424 432.554 360.473C432.601 360.517 432.601 360.565 432.648 360.604C432.69 360.604 432.736 360.648 432.783 360.697C432.825 360.741 432.872 360.79 432.872 360.877C432.872 360.921 432.872 360.97 432.872 361.009C432.783 361.233 432.736 361.233 432.69 361.282V361.687C432.736 361.775 432.783 361.863 432.783 361.955C432.783 362.092 432.736 362.18 432.736 362.272C432.736 362.321 432.736 362.365 432.783 362.409C432.554 362.814 432.47 362.814 432.423 362.814L432.199 363.038L431.75 363.131C431.704 363.175 431.657 363.218 431.657 363.262C431.615 363.306 431.568 363.306 431.521 363.306C431.479 363.306 431.433 363.262 431.386 363.262C431.339 363.214 431.297 363.17 431.297 363.131L431.204 363.038C431.204 363.214 431.204 363.262 431.162 363.355C431.115 363.399 431.115 363.448 431.026 363.487C430.891 363.487 430.844 363.531 430.755 363.531C430.662 363.579 430.615 363.623 430.526 363.623C430.479 363.623 430.437 363.579 430.391 363.531C430.344 363.487 430.344 363.487 430.302 363.443C430.073 363.214 429.942 363.262 429.806 363.262C429.76 363.262 429.718 363.262 429.671 363.262C429.442 362.901 429.4 362.901 429.358 362.945C429.311 362.989 429.269 362.989 429.222 363.038L428.685 363.214C428.549 362.897 428.503 362.897 428.456 362.897C428.274 363.033 428.32 363.17 428.32 363.257C428.274 363.301 428.274 363.35 428.231 363.35C427.96 363.848 427.918 363.848 427.918 363.891C427.872 363.935 427.872 363.935 427.83 363.984C427.783 363.984 427.736 364.028 427.689 364.028C427.601 363.935 427.554 363.935 427.512 363.935C427.465 363.935 427.418 363.935 427.376 363.984C427.33 364.028 427.283 364.077 427.241 364.116C427.241 364.208 427.147 364.296 427.105 364.389C427.012 364.482 426.923 364.521 426.834 364.521C426.657 364.613 426.61 364.652 426.61 364.701C426.61 364.745 426.563 364.794 426.521 364.794C426.381 364.886 426.339 364.925 426.339 365.018C426.292 365.062 426.292 365.111 426.245 365.111L425.843 364.838C425.797 364.657 425.797 364.569 425.797 364.521C425.797 364.477 425.797 364.389 425.755 364.34C425.484 364.389 425.442 364.34 425.353 364.34C425.306 364.116 425.306 364.072 425.306 363.979L425.17 363.848V363.667L425.035 363.618C424.853 363.799 424.806 363.755 424.764 363.711C424.717 363.667 424.67 363.667 424.624 363.667L424.488 363.76C424.446 363.804 424.488 363.852 424.535 363.891C424.582 363.891 424.624 363.935 424.67 363.935C424.717 363.984 424.806 364.028 424.853 364.072C424.899 364.116 424.899 364.165 424.899 364.204C424.853 364.335 424.853 364.384 424.899 364.477C424.899 364.521 424.942 364.608 424.942 364.652C424.942 364.701 424.942 364.745 424.899 364.789C424.853 364.833 424.806 364.881 424.764 364.92C424.67 364.969 424.624 364.969 424.535 364.969C424.488 364.969 424.399 365.013 424.353 365.057C424.128 364.969 424.128 364.881 424.128 364.833C424.175 364.608 424.217 364.516 424.217 364.428C424.217 364.335 424.175 364.204 424.128 364.067C424.082 363.93 424.082 363.843 424.082 363.794L423.68 363.926L423.455 363.565C423.455 363.516 423.455 363.472 423.409 363.433V363.072C423.544 362.979 423.544 362.979 423.591 362.94L423.815 362.76C423.815 362.58 423.815 362.487 423.815 362.443C423.726 362.311 423.68 362.311 423.633 362.263C423.591 362.219 423.591 362.17 423.591 362.087C423.726 361.765 423.726 361.726 423.726 361.726C423.633 361.594 423.544 361.594 423.455 361.502C423.362 361.277 423.315 361.277 423.226 361.229C422.553 360.912 422.596 360.868 422.642 360.824C422.642 360.731 422.642 360.78 422.596 360.824L422.371 361.048C422.371 361.141 422.324 361.185 422.324 361.277C422.282 361.321 422.236 361.365 422.142 361.409C422.053 361.36 421.965 361.36 421.871 361.316C421.782 361.272 421.782 361.272 421.736 361.224C421.694 361.092 421.694 361.043 421.694 360.999C421.694 360.868 421.694 360.819 421.694 360.726C422.007 360.595 422.095 360.551 422.138 360.502L422.278 360.278L422.549 360.185L422.591 359.912C422.591 359.819 422.591 359.78 422.591 359.736C422.591 359.6 422.549 359.463 422.502 359.331C422.455 359.195 422.413 359.058 422.413 358.878C422.367 358.785 422.32 358.702 422.278 358.61L422.329 358.502C422.376 358.502 422.423 358.458 422.423 358.41C422.423 358.366 422.465 358.322 422.465 358.278C422.647 358.054 422.647 358.01 422.647 357.961C422.465 357.829 422.423 357.868 422.376 357.917C422.329 357.961 422.287 358.01 422.24 358.01C422.147 358.141 422.105 358.141 422.058 358.185C421.834 358.141 421.656 358.054 421.521 358.01C421.474 357.961 421.474 357.917 421.474 357.873L421.338 357.829C421.292 357.873 421.25 357.873 421.203 357.922C421.156 357.922 421.114 357.966 421.067 357.966L421.021 358.239C420.75 358.332 420.708 358.332 420.661 358.332C420.479 358.507 420.432 358.6 420.39 358.693C420.343 358.561 420.343 358.512 420.343 358.419C420.114 358.6 420.072 358.741 420.072 358.873C420.114 359.19 420.025 359.414 419.979 359.595L419.754 359.639C419.591 359.77 419.544 359.77 419.502 359.722C419.455 359.722 419.408 359.678 419.366 359.678C419.32 359.629 419.273 359.629 419.231 359.629C419.184 359.629 419.091 359.678 419.002 359.678C418.866 359.585 418.82 359.585 418.777 359.541C418.731 359.497 418.642 359.541 418.595 359.497C418.548 359.497 418.502 359.453 418.46 359.453C418.46 359.361 418.502 359.317 418.502 359.273C418.595 358.01 418.595 358.01 418.548 357.961C418.413 357.961 418.324 358.01 418.231 358.01C418.142 357.917 418.142 357.873 418.142 357.781C418.142 357.693 418.142 357.605 418.142 357.556C418.053 357.425 418.006 357.376 417.96 357.376C417.824 357.605 417.824 357.698 417.735 357.781C417.689 357.781 417.642 357.781 417.6 357.737C417.553 357.737 417.506 357.693 417.506 357.644C417.506 357.6 417.506 357.551 417.506 357.512C417.506 357.464 417.506 357.42 417.464 357.376C417.418 357.332 417.418 357.288 417.371 357.244C417.324 357.2 417.324 357.112 417.324 357.112C417.464 356.976 417.553 356.976 417.595 356.976C417.637 357.025 417.637 357.069 417.684 357.112C417.866 357.02 417.866 356.976 417.819 356.932C417.773 356.888 417.773 356.888 417.731 356.839C417.684 356.708 417.731 356.659 417.731 356.571L417.955 356.478C417.955 356.386 417.955 356.342 417.908 356.342C417.773 356.249 417.731 356.249 417.684 356.249C417.502 356.205 417.502 356.205 417.46 356.161C417.277 356.113 417.231 356.113 417.189 356.161C417.189 356.249 417.147 356.293 417.147 356.337C417.011 356.386 416.964 356.386 416.918 356.386C416.829 356.337 416.782 356.249 416.782 356.205C416.782 356.113 416.782 356.025 416.782 355.981C416.782 355.932 416.782 355.844 416.74 355.801L416.558 355.576C416.511 355.527 416.511 355.527 416.464 355.484C416.464 355.44 416.422 355.391 416.422 355.352C416.422 355.259 416.422 355.171 416.375 355.123C416.375 355.079 416.329 354.991 416.24 354.898C416.193 354.806 416.151 354.718 416.104 354.674L416.011 354.357C415.969 354.133 415.969 354.084 415.969 353.996C415.969 353.952 415.969 353.908 415.922 353.864C415.922 353.82 415.922 353.772 415.922 353.733C415.922 353.64 415.922 353.601 415.922 353.508C415.922 353.46 415.922 353.416 415.922 353.372C415.833 353.328 415.74 353.328 415.651 353.24V353.089C415.604 353.04 415.604 352.996 415.604 352.952L415.202 353.274C415.067 353.274 415.02 353.274 414.978 353.225C414.749 353.225 414.707 353.274 414.665 353.274C414.618 353.274 414.572 353.274 414.53 353.225C414.665 353.001 414.665 353.001 414.707 352.952C414.572 352.865 414.53 352.865 414.436 352.821C414.347 352.64 414.347 352.596 414.394 352.552V352.279C414.301 352.279 414.254 352.231 414.212 352.231C414.118 352.187 414.076 352.143 414.029 352.143C413.941 352.143 413.894 352.143 413.847 352.094C413.805 352.05 413.758 352.05 413.712 352.001C413.623 351.957 413.529 351.87 413.487 351.821C413.394 351.821 413.352 351.777 413.305 351.777C413.17 351.87 413.17 351.909 413.123 352.001C412.941 352.05 412.852 351.957 412.805 351.909C412.716 351.865 412.67 351.777 412.627 351.733C412.534 351.64 412.445 351.597 412.314 351.46C412.314 351.328 412.268 351.236 412.268 351.143C412.221 351.05 412.221 350.963 412.132 350.87C411.997 350.777 411.908 350.689 411.819 350.553C411.73 350.421 411.683 350.28 411.637 350.148C411.548 349.924 411.548 349.88 411.548 349.787C411.548 349.738 411.548 349.651 411.501 349.607C411.324 349.558 411.23 349.514 411.141 349.475C411.048 349.426 411.006 349.339 411.006 349.246L410.511 348.978C410.422 348.661 410.375 348.387 410.375 348.075C410.328 347.983 410.286 347.895 410.286 347.802C410.286 347.714 410.239 347.627 410.193 347.578C410.151 347.534 410.151 347.446 410.151 347.402C410.151 347.354 410.151 347.31 410.104 347.266C410.057 347.173 410.015 347.134 409.968 347.041C409.922 346.949 409.875 346.817 409.875 346.681C409.833 346.593 409.833 346.505 409.833 346.412C409.833 346.32 409.833 346.232 409.786 346.139C409.786 346.047 409.739 346.008 409.739 345.915C409.739 345.871 409.739 345.822 409.739 345.734C409.739 345.642 409.739 345.554 409.651 345.466V344.876C409.604 344.335 409.604 344.247 409.604 344.198V343.881C409.651 343.837 409.697 343.837 409.739 343.837C409.786 343.564 409.786 343.476 409.786 343.432C409.833 342.984 409.833 342.935 409.833 342.891C409.833 342.842 409.833 342.798 409.833 342.755L410.235 342.438C410.324 342.345 410.324 342.306 410.37 342.262C410.417 342.169 410.459 342.033 410.459 341.989C410.506 341.94 410.553 341.896 410.595 341.896C410.641 341.852 410.688 341.804 410.688 341.765V341.174C410.688 341.17 410.688 341.082 410.735 341.043C410.735 340.95 410.777 340.906 410.777 340.862C410.688 340.638 410.595 340.589 410.553 340.545C410.417 340.365 410.37 340.272 410.37 340.184C410.324 340.053 410.235 339.867 410.235 339.824C410.235 339.775 410.235 339.731 410.188 339.687C410.146 339.643 410.146 339.599 410.099 339.555C409.426 339.194 409.333 339.15 409.244 339.15C409.151 339.15 409.109 339.15 409.015 339.15C408.973 339.15 408.926 339.15 408.88 339.107C408.655 338.833 408.655 338.702 408.655 338.565C408.253 338.385 408.253 338.336 408.295 338.292C408.342 338.243 408.342 338.199 408.342 338.16C408.478 338.112 408.524 338.112 408.566 338.112L409.333 338.019L409.426 337.751C409.739 337.795 409.875 337.843 409.964 337.843C410.099 337.843 410.282 337.795 410.366 337.751C410.412 337.658 410.412 337.57 410.459 337.478C410.501 337.385 410.501 337.346 410.595 337.253H410.777C410.912 336.892 410.954 336.8 411.048 336.8C411.09 336.756 411.183 336.756 411.226 336.756C411.272 336.756 411.272 336.712 411.319 336.663C411.501 336.571 411.543 336.439 411.543 336.302C411.543 336.254 411.543 336.21 411.501 336.166C411.501 336.122 411.455 336.122 411.408 336.073C411.366 335.98 411.408 335.941 411.455 335.941C411.59 335.81 411.679 335.717 411.726 335.668C411.814 335.576 411.908 335.537 411.997 335.537C412.043 335.493 412.09 335.444 412.132 335.405C412.179 335.356 412.226 335.268 412.268 335.225C412.314 335.132 412.314 335.093 412.361 335.044C412.403 335 412.45 334.912 412.497 334.864C412.585 334.864 412.632 334.864 412.679 334.82C412.721 334.776 412.768 334.776 412.814 334.727C413.039 334.41 413.085 334.322 413.216 334.186C413.305 333.961 413.352 333.913 413.352 333.869C413.399 333.737 413.352 333.688 413.263 333.688C413.17 333.737 413.128 333.82 413.034 333.869C412.899 333.737 412.899 333.688 412.945 333.644C412.945 333.596 412.987 333.552 412.987 333.508C412.763 333.6 412.716 333.688 412.674 333.737C412.627 333.781 412.627 333.825 412.581 333.869L412.179 333.644C412.132 333.596 412.132 333.508 412.132 333.464C412.132 333.371 412.132 333.283 412.132 333.24C412.09 333.191 412.043 333.191 411.997 333.191C411.955 333.191 411.861 333.147 411.814 333.098C411.772 333.01 411.772 332.966 411.772 332.923C411.772 332.874 411.772 332.83 411.726 332.786C411.726 332.742 411.679 332.742 411.637 332.693C411.501 332.693 411.455 332.693 411.366 332.693C411.226 332.469 411.226 332.425 411.226 332.376C411.455 332.201 411.539 332.201 411.543 332.201C411.674 332.015 411.674 331.972 411.674 331.928C411.674 331.835 411.721 331.747 411.768 331.747C412.039 331.796 412.17 331.884 412.305 331.884C412.441 331.835 412.487 331.835 412.576 331.791C412.623 331.698 412.758 331.562 412.805 331.474C412.894 331.201 412.941 331.069 413.029 330.928C413.123 330.796 413.212 330.611 413.3 330.567C413.529 330.474 413.529 330.43 413.571 330.43C413.712 330.343 413.8 330.343 413.889 330.343C413.983 330.206 414.072 330.07 414.118 329.938C414.16 329.889 414.16 329.845 414.16 329.801C414.118 329.67 414.072 329.67 414.025 329.626L413.8 329.221C413.8 329.128 413.8 329.084 413.8 329.04C414.025 328.948 414.025 328.997 414.072 329.04C414.254 328.909 414.254 328.86 414.254 328.767C414.343 328.543 414.436 328.363 414.478 328.138C414.553 328.046 414.595 327.909 414.642 327.777Z"
        fill="white"
      />
    </g>
    <path
      d="M416.189 420.664V417.444H405.349V403.284H407.869V415.204H414.369V403.284H416.889V415.204H418.449V420.664H416.189ZM420.807 417.644C420.113 417.644 419.513 417.584 419.007 417.464L419.327 415.224C419.713 415.344 420.107 415.404 420.507 415.404C421.027 415.404 421.44 415.278 421.747 415.024C422.067 414.771 422.38 414.344 422.687 413.744L423.127 412.904L417.687 403.284H420.607L424.547 410.564L428.267 403.284H431.087L425.207 414.184C424.567 415.384 423.94 416.264 423.327 416.824C422.727 417.371 421.887 417.644 420.807 417.644ZM431.455 417.444V403.284H436.075C439.635 403.284 441.415 404.651 441.415 407.384C441.415 408.851 440.908 409.918 439.895 410.584C438.881 411.251 437.555 411.584 435.915 411.584H433.975V417.444H431.455ZM433.975 409.464H435.735C437.828 409.464 438.875 408.771 438.875 407.384C438.875 406.624 438.595 406.104 438.035 405.824C437.488 405.544 436.748 405.404 435.815 405.404H433.975V409.464ZM360.249 441.444V427.284H369.529V429.404H362.769V433.044H365.269C366.843 433.044 368.109 433.391 369.069 434.084C370.029 434.778 370.509 435.831 370.509 437.244C370.509 438.631 370.029 439.678 369.069 440.384C368.109 441.091 366.849 441.444 365.289 441.444H360.249ZM362.769 439.324H365.009C366.983 439.324 367.969 438.631 367.969 437.244C367.969 436.564 367.709 436.051 367.189 435.704C366.683 435.344 365.956 435.164 365.009 435.164H362.769V439.324ZM377.824 441.444V440.224H377.764C377.524 440.651 377.13 441.004 376.584 441.284C376.05 441.551 375.45 441.684 374.784 441.684C373.864 441.684 373.03 441.444 372.284 440.964C371.55 440.471 371.184 439.718 371.184 438.704C371.184 438.158 371.317 437.684 371.584 437.284C371.864 436.871 372.21 436.551 372.624 436.324C373.037 436.098 373.55 435.918 374.164 435.784C374.79 435.638 375.377 435.544 375.924 435.504C376.484 435.464 377.104 435.444 377.784 435.444V435.204C377.784 434.644 377.577 434.211 377.164 433.904C376.75 433.598 376.224 433.444 375.584 433.444C374.57 433.444 373.697 433.811 372.964 434.544L371.724 433.084C372.817 432.071 374.17 431.564 375.784 431.564C376.61 431.564 377.31 431.684 377.884 431.924C378.47 432.151 378.917 432.471 379.224 432.884C379.53 433.284 379.744 433.711 379.864 434.164C379.997 434.604 380.064 435.084 380.064 435.604V441.444H377.824ZM377.784 437.404V437.064H377.244C374.804 437.064 373.584 437.598 373.584 438.664C373.584 439.091 373.744 439.398 374.064 439.584C374.397 439.771 374.797 439.864 375.264 439.864C376.077 439.864 376.697 439.651 377.124 439.224C377.564 438.784 377.784 438.178 377.784 437.404ZM381.86 441.444V431.844H384.26V439.484H387.84V431.844H390.24V439.484H393.8V431.844H396.2V441.444H381.86ZM398.204 441.444V431.844H400.604V436.104H400.664L404.364 431.844H407.404L403.184 436.364L407.724 441.444H404.644L400.664 436.884H400.604V441.444H398.204ZM406.976 436.604C406.976 435.124 407.476 433.918 408.476 432.984C409.476 432.038 410.716 431.564 412.196 431.564C413.676 431.564 414.916 432.038 415.916 432.984C416.916 433.918 417.416 435.124 417.416 436.604C417.416 438.098 416.909 439.324 415.896 440.284C414.896 441.244 413.662 441.724 412.196 441.724C410.729 441.724 409.489 441.244 408.476 440.284C407.476 439.324 406.976 438.098 406.976 436.604ZM410.136 434.444C409.656 435.058 409.416 435.778 409.416 436.604C409.416 437.431 409.656 438.158 410.136 438.784C410.616 439.411 411.302 439.724 412.196 439.724C413.089 439.724 413.776 439.411 414.256 438.784C414.736 438.158 414.976 437.431 414.976 436.604C414.976 435.778 414.736 435.058 414.256 434.444C413.776 433.831 413.089 433.524 412.196 433.524C411.302 433.524 410.616 433.831 410.136 434.444ZM418.743 431.844H421.043V433.184H421.103C421.383 432.744 421.803 432.364 422.363 432.044C422.936 431.724 423.623 431.564 424.423 431.564C425.783 431.564 426.896 432.044 427.763 433.004C428.643 433.964 429.083 435.164 429.083 436.604C429.083 438.044 428.649 439.258 427.783 440.244C426.929 441.231 425.789 441.724 424.363 441.724C423.696 441.724 423.076 441.584 422.503 441.304C421.929 441.024 421.489 440.644 421.183 440.164H421.143V446.244H418.743V431.844ZM425.903 438.784C426.396 438.158 426.643 437.431 426.643 436.604C426.643 435.778 426.396 435.058 425.903 434.444C425.423 433.831 424.749 433.524 423.883 433.524C423.043 433.524 422.363 433.844 421.843 434.484C421.323 435.124 421.063 435.844 421.063 436.644C421.063 437.444 421.323 438.158 421.843 438.784C422.363 439.411 423.043 439.724 423.883 439.724C424.749 439.724 425.423 439.411 425.903 438.784ZM432.205 441.444V433.764H429.125V431.844H437.665V433.764H434.605V441.444H432.205ZM437.706 436.604C437.706 435.124 438.206 433.918 439.206 432.984C440.206 432.038 441.446 431.564 442.926 431.564C444.406 431.564 445.646 432.038 446.646 432.984C447.646 433.918 448.146 435.124 448.146 436.604C448.146 438.098 447.64 439.324 446.626 440.284C445.626 441.244 444.393 441.724 442.926 441.724C441.46 441.724 440.22 441.244 439.206 440.284C438.206 439.324 437.706 438.098 437.706 436.604ZM440.866 434.444C440.386 435.058 440.146 435.778 440.146 436.604C440.146 437.431 440.386 438.158 440.866 438.784C441.346 439.411 442.033 439.724 442.926 439.724C443.82 439.724 444.506 439.411 444.986 438.784C445.466 438.158 445.706 437.431 445.706 436.604C445.706 435.778 445.466 435.058 444.986 434.444C444.506 433.831 443.82 433.524 442.926 433.524C442.033 433.524 441.346 433.831 440.866 434.444ZM457.673 433.064L456.033 434.504C455.847 434.238 455.567 434.018 455.193 433.844C454.82 433.658 454.44 433.564 454.053 433.564C453.227 433.564 452.58 433.878 452.113 434.504C451.647 435.118 451.413 435.831 451.413 436.644C451.413 437.471 451.653 438.191 452.133 438.804C452.613 439.418 453.28 439.724 454.133 439.724C455.013 439.724 455.687 439.438 456.153 438.864L457.653 440.384C456.827 441.278 455.647 441.724 454.113 441.724C452.647 441.724 451.413 441.264 450.413 440.344C449.413 439.424 448.913 438.191 448.913 436.644C448.913 435.124 449.407 433.898 450.393 432.964C451.38 432.031 452.6 431.564 454.053 431.564C454.76 431.564 455.447 431.698 456.113 431.964C456.78 432.231 457.3 432.598 457.673 433.064ZM460.63 441.444V433.764H457.55V431.844H466.09V433.764H463.03V441.444H460.63ZM472.886 441.444V440.224H472.826C472.586 440.651 472.193 441.004 471.646 441.284C471.113 441.551 470.513 441.684 469.846 441.684C468.926 441.684 468.093 441.444 467.346 440.964C466.613 440.471 466.246 439.718 466.246 438.704C466.246 438.158 466.38 437.684 466.646 437.284C466.926 436.871 467.273 436.551 467.686 436.324C468.1 436.098 468.613 435.918 469.226 435.784C469.853 435.638 470.44 435.544 470.986 435.504C471.546 435.464 472.166 435.444 472.846 435.444V435.204C472.846 434.644 472.64 434.211 472.226 433.904C471.813 433.598 471.286 433.444 470.646 433.444C469.633 433.444 468.76 433.811 468.026 434.544L466.786 433.084C467.88 432.071 469.233 431.564 470.846 431.564C471.673 431.564 472.373 431.684 472.946 431.924C473.533 432.151 473.98 432.471 474.286 432.884C474.593 433.284 474.806 433.711 474.926 434.164C475.06 434.604 475.126 435.084 475.126 435.604V441.444H472.886ZM472.846 437.404V437.064H472.306C469.866 437.064 468.646 437.598 468.646 438.664C468.646 439.091 468.806 439.398 469.126 439.584C469.46 439.771 469.86 439.864 470.326 439.864C471.14 439.864 471.76 439.651 472.186 439.224C472.626 438.784 472.846 438.178 472.846 437.404ZM476.922 441.444V431.844H479.322V435.464H483.362V431.844H485.762V441.444H483.362V437.384H479.322V441.444H476.922Z"
      fill="#FAFAFA"
    />`,
    title: 'ЦУР Башкортостан',
    name: 'home',
  },
  {
    id: 2,
    path: `<g filter="url(#filter3_b_0_1)">
      <path
        d="M260.122 2.75504C268.513 -0.720434 277.94 -0.720426 286.331 2.75504L350.506 29.3371C358.896 32.8126 365.562 39.4788 369.038 47.8694L395.62 112.044C399.095 120.435 399.095 129.862 395.62 138.253L369.038 202.428C365.562 210.818 358.896 217.484 350.506 220.96L286.331 247.542C277.94 251.017 268.513 251.017 260.122 247.542L195.947 220.96C187.557 217.484 180.891 210.818 177.415 202.427L150.833 138.253C147.358 129.862 147.358 120.435 150.833 112.044L177.415 47.8693C180.891 39.4788 187.557 32.8126 195.947 29.3371L260.122 2.75504Z"
        fill="url(#paint2_linear_0_1)"
      />
      <path
        d="M261.339 5.69297C268.951 2.54025 277.503 2.54026 285.114 5.69298L349.289 32.2751C356.9 35.4278 362.947 41.475 366.1 49.0863L392.682 113.261C395.835 120.872 395.835 129.424 392.682 137.036L366.1 201.211C362.947 208.822 356.9 214.869 349.289 218.022L285.114 244.604C277.503 247.757 268.951 247.757 261.339 244.604L197.164 218.022C189.553 214.869 183.506 208.822 180.353 201.211L153.771 137.036C150.618 129.424 150.618 120.872 153.771 113.261L180.353 49.0863C183.506 41.4749 189.553 35.4278 197.164 32.275L261.339 5.69297Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter4_dddd_0_1)">
      <g filter="url(#filter5_b_0_1)">
        <rect
          x="249.227"
          y="79.1484"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint3_linear_0_1)"
        />
        <rect
          x="247.227"
          y="77.1484"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M285.227 101.474V109.065C285.227 109.879 284.903 110.66 284.327 111.235C283.752 111.811 282.971 112.134 282.157 112.134H276.274L273.037 114.947C272.884 115.077 272.69 115.148 272.49 115.148C272.366 115.15 272.244 115.124 272.133 115.07C271.989 115.002 271.867 114.895 271.782 114.76C271.697 114.626 271.652 114.47 271.653 114.311V112.134H270.994C270.18 112.134 269.399 111.811 268.823 111.235C268.248 110.66 267.924 109.879 267.924 109.065V106.553H269.554L272.322 108.953C272.776 109.351 273.36 109.569 273.963 109.567C274.325 109.566 274.682 109.49 275.013 109.344C275.449 109.141 275.819 108.819 276.078 108.413C276.337 108.008 276.475 107.537 276.475 107.055V106.497C277.53 106.264 278.475 105.678 279.153 104.836C279.83 103.993 280.201 102.946 280.203 101.865V98.4042H282.157C282.971 98.4042 283.752 98.7276 284.327 99.3033C284.903 99.879 285.227 100.66 285.227 101.474ZM278.529 94.2182V101.809C278.529 102.623 278.205 103.404 277.63 103.979C277.054 104.555 276.273 104.879 275.459 104.879H274.801V107.055C274.801 107.214 274.756 107.37 274.671 107.505C274.586 107.639 274.464 107.747 274.321 107.814C274.209 107.868 274.087 107.895 273.963 107.893C273.763 107.892 273.569 107.821 273.416 107.692L270.179 104.879H264.296C263.482 104.879 262.701 104.555 262.126 103.979C261.55 103.404 261.227 102.623 261.227 101.809V94.2182C261.227 93.404 261.55 92.6232 262.126 92.0475C262.701 91.4719 263.482 91.1484 264.296 91.1484H275.459C276.273 91.1484 277.054 91.4719 277.63 92.0475C278.205 92.6232 278.529 93.404 278.529 94.2182ZM274.064 100.358C274.061 100.137 273.972 99.9253 273.815 99.7689C273.659 99.6125 273.448 99.5234 273.227 99.5205H266.529C266.307 99.5205 266.094 99.6087 265.937 99.7657C265.78 99.9227 265.692 100.136 265.692 100.358C265.692 100.58 265.78 100.793 265.937 100.95C266.094 101.107 266.307 101.195 266.529 101.195H273.227C273.448 101.192 273.659 101.103 273.815 100.946C273.972 100.79 274.061 100.579 274.064 100.358ZM274.064 95.8926C274.061 95.6715 273.972 95.4602 273.815 95.3038C273.659 95.1474 273.448 95.0583 273.227 95.0554H266.529C266.307 95.0554 266.094 95.1436 265.937 95.3006C265.78 95.4576 265.692 95.6706 265.692 95.8926C265.692 96.1146 265.78 96.3276 265.937 96.4846C266.094 96.6416 266.307 96.7298 266.529 96.7298H273.227C273.448 96.7269 273.659 96.6378 273.815 96.4814C273.972 96.325 274.061 96.1137 274.064 95.8926Z"
        fill="white"
      />
    </g>
    <path
      d="M204.093 159.028C204.093 156.788 204.8 154.995 206.213 153.648C207.64 152.302 209.46 151.628 211.673 151.628C213.913 151.628 215.746 152.302 217.173 153.648C218.6 154.995 219.313 156.788 219.313 159.028C219.313 161.228 218.593 163.028 217.153 164.428C215.726 165.815 213.9 166.508 211.673 166.508C209.473 166.508 207.66 165.815 206.233 164.428C204.806 163.028 204.093 161.228 204.093 159.028ZM206.833 159.028C206.833 160.548 207.286 161.802 208.193 162.788C209.1 163.762 210.266 164.248 211.693 164.248C213.133 164.248 214.306 163.762 215.213 162.788C216.12 161.802 216.573 160.548 216.573 159.028C216.573 157.548 216.12 156.315 215.213 155.328C214.32 154.342 213.146 153.848 211.693 153.848C210.253 153.848 209.08 154.342 208.173 155.328C207.28 156.315 206.833 157.548 206.833 159.028ZM225.526 166.428C223.859 166.428 222.532 165.875 221.546 164.768C221.079 164.235 220.739 163.608 220.526 162.888C220.326 162.168 220.226 161.208 220.226 160.008C220.226 159.008 220.252 158.162 220.306 157.468C220.372 156.775 220.492 156.082 220.666 155.388C220.852 154.695 221.106 154.135 221.426 153.708C221.759 153.268 222.199 152.895 222.746 152.588C223.306 152.282 223.972 152.075 224.746 151.968L227.206 151.648C227.779 151.568 228.192 151.468 228.446 151.348C228.699 151.228 228.866 151.015 228.946 150.708L230.666 151.208C230.492 151.982 230.199 152.548 229.786 152.908C229.386 153.255 228.792 153.482 228.006 153.588L225.406 153.928C224.819 154.008 224.332 154.122 223.946 154.268C223.572 154.415 223.226 154.655 222.906 154.988C222.599 155.308 222.366 155.755 222.206 156.328C222.059 156.902 221.972 157.628 221.946 158.508H222.006C222.792 157.055 224.126 156.328 226.006 156.328C227.312 156.328 228.426 156.795 229.346 157.728C230.266 158.662 230.726 159.868 230.726 161.348C230.726 162.855 230.226 164.082 229.226 165.028C228.226 165.962 226.992 166.428 225.526 166.428ZM223.466 163.508C223.959 164.108 224.632 164.408 225.486 164.408C226.339 164.408 227.019 164.108 227.526 163.508C228.046 162.895 228.306 162.155 228.306 161.288C228.306 160.435 228.046 159.708 227.526 159.108C227.019 158.495 226.332 158.188 225.466 158.188C224.612 158.188 223.939 158.488 223.446 159.088C222.966 159.688 222.726 160.422 222.726 161.288C222.726 162.155 222.972 162.895 223.466 163.508ZM232.028 156.548H234.328V157.888H234.388C234.668 157.448 235.088 157.068 235.648 156.748C236.221 156.428 236.908 156.268 237.708 156.268C239.068 156.268 240.181 156.748 241.048 157.708C241.928 158.668 242.368 159.868 242.368 161.308C242.368 162.748 241.935 163.962 241.068 164.948C240.215 165.935 239.075 166.428 237.648 166.428C236.981 166.428 236.361 166.288 235.788 166.008C235.215 165.728 234.775 165.348 234.468 164.868H234.428V170.948H232.028V156.548ZM239.188 163.488C239.681 162.862 239.928 162.135 239.928 161.308C239.928 160.482 239.681 159.762 239.188 159.148C238.708 158.535 238.035 158.228 237.168 158.228C236.328 158.228 235.648 158.548 235.128 159.188C234.608 159.828 234.348 160.548 234.348 161.348C234.348 162.148 234.608 162.862 235.128 163.488C235.648 164.115 236.328 164.428 237.168 164.428C238.035 164.428 238.708 164.115 239.188 163.488ZM249.644 166.148V164.928H249.584C249.344 165.355 248.951 165.708 248.404 165.988C247.871 166.255 247.271 166.388 246.604 166.388C245.684 166.388 244.851 166.148 244.104 165.668C243.371 165.175 243.004 164.422 243.004 163.408C243.004 162.862 243.137 162.388 243.404 161.988C243.684 161.575 244.031 161.255 244.444 161.028C244.857 160.802 245.371 160.622 245.984 160.488C246.611 160.342 247.197 160.248 247.744 160.208C248.304 160.168 248.924 160.148 249.604 160.148V159.908C249.604 159.348 249.397 158.915 248.984 158.608C248.571 158.302 248.044 158.148 247.404 158.148C246.391 158.148 245.517 158.515 244.784 159.248L243.544 157.788C244.637 156.775 245.991 156.268 247.604 156.268C248.431 156.268 249.131 156.388 249.704 156.628C250.291 156.855 250.737 157.175 251.044 157.588C251.351 157.988 251.564 158.415 251.684 158.868C251.817 159.308 251.884 159.788 251.884 160.308V166.148H249.644ZM249.604 162.108V161.768H249.064C246.624 161.768 245.404 162.302 245.404 163.368C245.404 163.795 245.564 164.102 245.884 164.288C246.217 164.475 246.617 164.568 247.084 164.568C247.897 164.568 248.517 164.355 248.944 163.928C249.384 163.488 249.604 162.882 249.604 162.108ZM255.72 166.148V158.468H252.64V156.548H261.18V158.468H258.12V166.148H255.72ZM262.016 166.148V156.548H264.416V160.168H268.456V156.548H270.856V166.148H268.456V162.088H264.416V166.148H262.016ZM278.695 166.148V164.928H278.635C278.395 165.355 278.002 165.708 277.455 165.988C276.922 166.255 276.322 166.388 275.655 166.388C274.735 166.388 273.902 166.148 273.155 165.668C272.422 165.175 272.055 164.422 272.055 163.408C272.055 162.862 272.188 162.388 272.455 161.988C272.735 161.575 273.082 161.255 273.495 161.028C273.908 160.802 274.422 160.622 275.035 160.488C275.662 160.342 276.248 160.248 276.795 160.208C277.355 160.168 277.975 160.148 278.655 160.148V159.908C278.655 159.348 278.448 158.915 278.035 158.608C277.622 158.302 277.095 158.148 276.455 158.148C275.442 158.148 274.568 158.515 273.835 159.248L272.595 157.788C273.688 156.775 275.042 156.268 276.655 156.268C277.482 156.268 278.182 156.388 278.755 156.628C279.342 156.855 279.788 157.175 280.095 157.588C280.402 157.988 280.615 158.415 280.735 158.868C280.868 159.308 280.935 159.788 280.935 160.308V166.148H278.695ZM278.655 162.108V161.768H278.115C275.675 161.768 274.455 162.302 274.455 163.368C274.455 163.795 274.615 164.102 274.935 164.288C275.268 164.475 275.668 164.568 276.135 164.568C276.948 164.568 277.568 164.355 277.995 163.928C278.435 163.488 278.655 162.882 278.655 162.108ZM282.011 166.148L284.431 162.508C283.004 162.095 282.291 161.142 282.291 159.648C282.291 158.635 282.644 157.868 283.351 157.348C284.071 156.815 284.998 156.548 286.131 156.548H290.971V166.148H288.571V162.748H286.791L284.831 166.148H282.011ZM286.711 160.968H288.571V158.348H286.711C285.951 158.348 285.411 158.448 285.091 158.648C284.771 158.848 284.611 159.188 284.611 159.668C284.611 160.135 284.778 160.468 285.111 160.668C285.458 160.868 285.991 160.968 286.711 160.968ZM305.044 157.768L303.404 159.208C303.218 158.942 302.938 158.722 302.564 158.548C302.191 158.362 301.811 158.268 301.424 158.268C300.598 158.268 299.951 158.582 299.484 159.208C299.018 159.822 298.784 160.535 298.784 161.348C298.784 162.175 299.024 162.895 299.504 163.508C299.984 164.122 300.651 164.428 301.504 164.428C302.384 164.428 303.058 164.142 303.524 163.568L305.024 165.088C304.198 165.982 303.018 166.428 301.484 166.428C300.018 166.428 298.784 165.968 297.784 165.048C296.784 164.128 296.284 162.895 296.284 161.348C296.284 159.828 296.778 158.602 297.764 157.668C298.751 156.735 299.971 156.268 301.424 156.268C302.131 156.268 302.818 156.402 303.484 156.668C304.151 156.935 304.671 157.302 305.044 157.768ZM305.61 166.148V156.548H310.57C311.143 156.548 311.657 156.608 312.11 156.728C312.577 156.848 312.997 157.108 313.37 157.508C313.743 157.895 313.93 158.408 313.93 159.048C313.93 159.542 313.777 159.975 313.47 160.348C313.177 160.708 312.79 160.948 312.31 161.068V161.108C312.91 161.202 313.397 161.455 313.77 161.868C314.157 162.268 314.35 162.788 314.35 163.428C314.35 164.282 314.017 164.948 313.35 165.428C312.683 165.908 311.803 166.148 310.71 166.148H305.61ZM308.01 164.428H310.27C311.377 164.428 311.93 164.042 311.93 163.268C311.93 162.495 311.397 162.108 310.33 162.108H308.01V164.428ZM308.01 160.388H310.29C311.17 160.388 311.61 160.035 311.61 159.328C311.61 158.608 311.11 158.248 310.11 158.248H308.01V160.388ZM314.945 166.148L317.365 162.508C315.938 162.095 315.225 161.142 315.225 159.648C315.225 158.635 315.578 157.868 316.285 157.348C317.005 156.815 317.931 156.548 319.065 156.548H323.905V166.148H321.505V162.748H319.725L317.765 166.148H314.945ZM319.645 160.968H321.505V158.348H319.645C318.885 158.348 318.345 158.448 318.025 158.648C317.705 158.848 317.545 159.188 317.545 159.668C317.545 160.135 317.711 160.468 318.045 160.668C318.391 160.868 318.925 160.968 319.645 160.968ZM328.838 166.468C327.038 166.468 325.638 165.888 324.638 164.728L326.078 163.328C326.358 163.702 326.725 164.008 327.178 164.248C327.645 164.488 328.138 164.608 328.658 164.608C329.925 164.608 330.558 164.202 330.558 163.388C330.558 162.895 330.358 162.555 329.958 162.368C329.571 162.182 329.031 162.088 328.338 162.088H327.578V160.368H328.338C329.658 160.368 330.318 159.962 330.318 159.148C330.318 158.442 329.778 158.088 328.698 158.088C327.725 158.088 326.958 158.455 326.398 159.188L325.058 157.888C325.911 156.808 327.218 156.268 328.978 156.268C330.111 156.268 331.018 156.502 331.698 156.968C332.391 157.435 332.738 158.075 332.738 158.888C332.738 159.435 332.558 159.915 332.198 160.328C331.838 160.728 331.378 160.988 330.818 161.108V161.148C331.471 161.268 331.998 161.535 332.398 161.948C332.798 162.362 332.998 162.875 332.998 163.488C332.998 164.422 332.598 165.155 331.798 165.688C331.011 166.208 330.025 166.468 328.838 166.468ZM334.387 166.148V156.548H336.787V159.908H338.867C340.054 159.908 340.994 160.168 341.687 160.688C342.394 161.195 342.747 161.968 342.747 163.008C342.747 164.022 342.394 164.802 341.687 165.348C340.981 165.882 340.041 166.148 338.867 166.148H334.387ZM336.787 164.328H338.247C338.967 164.328 339.494 164.228 339.827 164.028C340.174 163.828 340.347 163.495 340.347 163.028C340.347 162.548 340.187 162.208 339.867 162.008C339.547 161.808 339.007 161.708 338.247 161.708H336.787V164.328Z"
      fill="#FAFAFA"
    />`,
    title: 'Обратная связь',
    name: 'obr-sv',
  },
  {
    id: 3,
    path: `<g filter="url(#filter6_b_0_1)">
      <path
        d="M557.529 2.75504C565.919 -0.720434 575.347 -0.720426 583.737 2.75504L647.912 29.3371C656.302 32.8126 662.969 39.4788 666.444 47.8694L693.026 112.044C696.502 120.435 696.502 129.862 693.026 138.253L666.444 202.428C662.969 210.818 656.302 217.484 647.912 220.96L583.737 247.542C575.347 251.017 565.919 251.017 557.529 247.542L493.354 220.96C484.963 217.484 478.297 210.818 474.821 202.427L448.239 138.253C444.764 129.862 444.764 120.435 448.239 112.044L474.821 47.8693C478.297 39.4788 484.963 32.8126 493.354 29.3371L557.529 2.75504Z"
        fill="url(#paint4_linear_0_1)"
      />
      <path
        d="M558.745 5.69297C566.357 2.54025 574.909 2.54026 582.52 5.69298L646.695 32.2751C654.306 35.4278 660.353 41.475 663.506 49.0863L690.088 113.261C693.241 120.872 693.241 129.424 690.088 137.036L663.506 201.211C660.353 208.822 654.306 214.869 646.695 218.022L582.52 244.604C574.909 247.757 566.357 247.757 558.745 244.604L494.571 218.022C486.959 214.869 480.912 208.822 477.759 201.211L451.177 137.036C448.025 129.424 448.025 120.872 451.177 113.261L477.759 49.0863C480.912 41.4749 486.959 35.4278 494.571 32.275L558.745 5.69297Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter7_dddd_0_1)">
      <g filter="url(#filter8_b_0_1)">
        <rect
          x="546.633"
          y="79.1484"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint5_linear_0_1)"
        />
        <rect
          x="544.633"
          y="77.1484"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M560.685 104.048H562.822C562.601 104.601 562.528 105.224 562.528 105.847V113.387C562.528 113.664 562.528 113.941 562.675 114.148H559.064C557.738 114.148 556.633 113.111 556.633 111.935V107.784C556.633 105.708 558.475 104.048 560.685 104.048Z"
        fill="#FAFAFA"
      />
      <path
        d="M578.812 113.387V105.847C578.812 105.224 578.664 104.601 578.443 104.048H580.58C582.791 104.048 584.633 105.708 584.633 107.784V111.935C584.633 113.18 583.528 114.148 582.201 114.148H578.591C578.738 113.941 578.812 113.664 578.812 113.387Z"
        fill="#FAFAFA"
      />
      <path
        d="M576.38 114.148H564.959C564.517 114.148 564.149 113.802 564.149 113.387V105.846C564.149 103.771 565.991 102.11 568.201 102.11H573.138C575.349 102.11 577.191 103.771 577.191 105.846V113.387C577.191 113.802 576.822 114.148 576.38 114.148Z"
        fill="#FAFAFA"
      />
      <path
        d="M568.275 100.589C566.801 99.8277 565.77 98.3748 565.77 96.6453C565.77 94.1547 567.98 92.1484 570.633 92.1484C573.285 92.1484 575.496 94.1547 575.496 96.6453C575.496 98.3056 574.464 99.7585 572.991 100.589C572.254 100.935 571.443 101.142 570.633 101.142C569.822 101.211 568.938 101.004 568.275 100.589Z"
        fill="#FAFAFA"
      />
      <path
        d="M576.011 101.35C575.717 100.865 575.569 100.312 575.569 99.7586C575.569 97.8906 577.19 96.3686 579.18 96.3686C581.169 96.3686 582.79 97.8906 582.79 99.7586C582.79 101.626 581.169 103.148 579.18 103.148C578.664 103.148 578.148 103.079 577.78 102.872C576.969 102.526 576.38 101.972 576.011 101.35Z"
        fill="#FAFAFA"
      />
      <path
        d="M563.558 102.872C563.116 103.079 562.6 103.148 562.158 103.148C560.169 103.148 558.548 101.626 558.548 99.7586C558.548 97.8906 560.095 96.3686 562.085 96.3686C564.074 96.3686 565.695 97.8906 565.695 99.7586C565.695 100.312 565.548 100.865 565.253 101.35C564.958 101.972 564.295 102.526 563.558 102.872Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M529.614 153.788L527.694 155.308C527.347 154.828 526.874 154.468 526.274 154.228C525.687 153.975 525.087 153.848 524.474 153.848C523.034 153.848 521.854 154.342 520.934 155.328C520.027 156.315 519.574 157.548 519.574 159.028C519.574 160.575 520.007 161.835 520.874 162.808C521.754 163.768 522.921 164.248 524.374 164.248C525.867 164.248 527.014 163.702 527.814 162.608L529.834 164.028C528.514 165.682 526.687 166.508 524.354 166.508C522.141 166.508 520.327 165.815 518.914 164.428C517.501 163.028 516.794 161.228 516.794 159.028C516.794 156.802 517.514 155.015 518.954 153.668C520.407 152.308 522.247 151.628 524.474 151.628C525.461 151.628 526.427 151.815 527.374 152.188C528.334 152.548 529.081 153.082 529.614 153.788ZM529.72 161.308C529.72 159.828 530.22 158.622 531.22 157.688C532.22 156.742 533.46 156.268 534.94 156.268C536.42 156.268 537.66 156.742 538.66 157.688C539.66 158.622 540.16 159.828 540.16 161.308C540.16 162.802 539.653 164.028 538.64 164.988C537.64 165.948 536.407 166.428 534.94 166.428C533.473 166.428 532.233 165.948 531.22 164.988C530.22 164.028 529.72 162.802 529.72 161.308ZM532.88 159.148C532.4 159.762 532.16 160.482 532.16 161.308C532.16 162.135 532.4 162.862 532.88 163.488C533.36 164.115 534.047 164.428 534.94 164.428C535.833 164.428 536.52 164.115 537 163.488C537.48 162.862 537.72 162.135 537.72 161.308C537.72 160.482 537.48 159.762 537 159.148C536.52 158.535 535.833 158.228 534.94 158.228C534.047 158.228 533.36 158.535 532.88 159.148ZM549.727 168.888V166.148H541.487V156.548H543.887V164.188H547.927V156.548H550.327V164.188H551.727V168.888H549.727ZM552.557 166.148V156.548H554.957V162.748H554.997L559.197 156.548H561.797V166.148H559.397V159.988H559.357L555.197 166.148H552.557ZM563.126 161.308C563.126 159.828 563.626 158.622 564.626 157.688C565.626 156.742 566.866 156.268 568.346 156.268C569.826 156.268 571.066 156.742 572.066 157.688C573.066 158.622 573.566 159.828 573.566 161.308C573.566 162.802 573.059 164.028 572.046 164.988C571.046 165.948 569.813 166.428 568.346 166.428C566.879 166.428 565.639 165.948 564.626 164.988C563.626 164.028 563.126 162.802 563.126 161.308ZM566.286 159.148C565.806 159.762 565.566 160.482 565.566 161.308C565.566 162.135 565.806 162.862 566.286 163.488C566.766 164.115 567.453 164.428 568.346 164.428C569.239 164.428 569.926 164.115 570.406 163.488C570.886 162.862 571.126 162.135 571.126 161.308C571.126 160.482 570.886 159.762 570.406 159.148C569.926 158.535 569.239 158.228 568.346 158.228C567.453 158.228 566.766 158.535 566.286 159.148ZM574.759 166.268C574.119 166.268 573.639 166.215 573.319 166.108L573.499 164.148C573.699 164.215 573.912 164.248 574.139 164.248C574.752 164.248 575.219 163.935 575.539 163.308C575.859 162.682 576.019 161.568 576.019 159.968V156.548H583.879V166.148H581.479V158.468H578.319V160.508C578.319 162.482 578.032 163.935 577.459 164.868C576.885 165.802 575.985 166.268 574.759 166.268ZM585.208 161.308C585.208 159.828 585.708 158.622 586.708 157.688C587.708 156.742 588.948 156.268 590.428 156.268C591.908 156.268 593.148 156.742 594.148 157.688C595.148 158.622 595.648 159.828 595.648 161.308C595.648 162.802 595.141 164.028 594.128 164.988C593.128 165.948 591.895 166.428 590.428 166.428C588.961 166.428 587.721 165.948 586.708 164.988C585.708 164.028 585.208 162.802 585.208 161.308ZM588.368 159.148C587.888 159.762 587.648 160.482 587.648 161.308C587.648 162.135 587.888 162.862 588.368 163.488C588.848 164.115 589.535 164.428 590.428 164.428C591.321 164.428 592.008 164.115 592.488 163.488C592.968 162.862 593.208 162.135 593.208 161.308C593.208 160.482 592.968 159.762 592.488 159.148C592.008 158.535 591.321 158.228 590.428 158.228C589.535 158.228 588.848 158.535 588.368 159.148ZM596.975 166.148V156.548H603.715V158.468H599.375V166.148H596.975ZM604.549 166.148V156.548H606.949V162.748H606.989L611.189 156.548H613.789V166.148H611.389V159.988H611.349L607.189 166.148H604.549ZM614.958 166.148L617.378 162.508C615.952 162.095 615.238 161.142 615.238 159.648C615.238 158.635 615.592 157.868 616.298 157.348C617.018 156.815 617.945 156.548 619.078 156.548H623.918V166.148H621.518V162.748H619.738L617.778 166.148H614.958ZM619.658 160.968H621.518V158.348H619.658C618.898 158.348 618.358 158.448 618.038 158.648C617.718 158.848 617.558 159.188 617.558 159.668C617.558 160.135 617.725 160.468 618.058 160.668C618.405 160.868 618.938 160.968 619.658 160.968Z"
      fill="#FAFAFA"
    />`,
    title: 'Социология',
    name: 'soc',
  },

  {
    id: 4,
    path: `<g filter="url(#filter15_b_0_1)">
      <path
        d="M705.161 257.569C713.552 254.094 722.979 254.094 731.37 257.569L795.545 284.152C803.935 287.627 810.601 294.293 814.077 302.684L840.659 366.859C844.135 375.249 844.134 384.677 840.659 393.067L814.077 457.242C810.601 465.633 803.935 472.299 795.545 475.774L731.37 502.356C722.979 505.832 713.552 505.832 705.161 502.356L640.987 475.774C632.596 472.299 625.93 465.632 622.454 457.242L595.872 393.067C592.397 384.677 592.397 375.249 595.872 366.859L622.454 302.684C625.93 294.293 632.596 287.627 640.987 284.152L705.161 257.569Z"
        fill="url(#paint10_linear_0_1)"
      />
      <path
        d="M706.378 260.507C713.99 257.355 722.542 257.355 730.153 260.507L794.328 287.09C801.939 290.242 807.986 296.289 811.139 303.901L837.721 368.076C840.874 375.687 840.874 384.239 837.721 391.85L811.139 456.025C807.986 463.636 801.939 469.684 794.328 472.836L730.153 499.418C722.542 502.571 713.99 502.571 706.378 499.418L642.203 472.836C634.592 469.684 628.545 463.636 625.392 456.025L598.81 391.85C595.657 384.239 595.657 375.687 598.81 368.076L625.392 303.901C628.545 296.289 634.592 290.242 642.203 287.09L706.378 260.507Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter16_dddd_0_1)">
      <g filter="url(#filter17_b_0_1)">
        <rect
          x="694.266"
          y="321.963"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint11_linear_0_1)"
        />
        <rect
          x="692.266"
          y="319.963"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M727.755 343.873C727.787 340.208 724.581 336.847 720.608 336.383C720.529 336.373 720.443 336.36 720.352 336.345C720.155 336.313 719.952 336.281 719.747 336.281C718.933 336.281 718.715 336.838 718.658 337.17C718.602 337.493 718.655 337.764 718.815 337.976C719.085 338.333 719.559 338.397 719.94 338.447C720.052 338.462 720.158 338.476 720.246 338.496C723.815 339.272 725.017 340.494 725.605 343.94C725.619 344.024 725.625 344.128 725.632 344.238C725.658 344.65 725.711 345.507 726.658 345.507C726.736 345.507 726.821 345.5 726.909 345.487C727.79 345.357 727.763 344.573 727.749 344.197C727.746 344.091 727.742 343.991 727.751 343.924C727.754 343.907 727.755 343.89 727.755 343.873Z"
        fill="#FAFAFA"
      />
      <path
        d="M719.516 335.037C719.622 335.044 719.722 335.052 719.805 335.064C725.666 335.942 728.362 338.646 729.109 344.399C729.122 344.496 729.124 344.616 729.126 344.742C729.133 345.191 729.148 346.126 730.18 346.146L730.212 346.146C730.535 346.146 730.792 346.051 730.976 345.864C731.297 345.537 731.275 345.051 731.257 344.661C731.252 344.565 731.248 344.475 731.249 344.396C731.324 338.512 726.094 333.178 720.058 332.979C720.033 332.978 720.009 332.98 719.985 332.983C719.961 332.986 719.937 332.987 719.913 332.987C719.853 332.987 719.779 332.982 719.701 332.976C719.606 332.97 719.498 332.963 719.389 332.963C718.428 332.963 718.245 333.628 718.221 334.025C718.168 334.941 719.078 335.006 719.516 335.037ZM728.826 351.833C728.7 351.74 728.575 351.646 728.452 351.55C727.812 351.049 727.131 350.586 726.473 350.139C726.336 350.047 726.2 349.954 726.063 349.861C725.22 349.284 724.462 349.003 723.745 349.003C722.78 349.003 721.939 349.523 721.245 350.546C720.937 351 720.564 351.221 720.104 351.221C719.832 351.221 719.523 351.145 719.185 350.996C716.463 349.794 714.519 347.951 713.407 345.518C712.87 344.342 713.044 343.573 713.99 342.947C714.527 342.592 715.527 341.932 715.456 340.666C715.376 339.229 712.119 334.905 710.748 334.414C710.167 334.206 709.556 334.204 708.93 334.409C707.353 334.926 706.222 335.832 705.657 337.031C705.112 338.19 705.137 339.55 705.728 340.965C707.44 345.056 709.846 348.623 712.88 351.566C715.85 354.447 719.5 356.808 723.729 358.581C724.11 358.741 724.51 358.828 724.802 358.891C724.901 358.913 724.987 358.932 725.05 358.948C725.084 358.957 725.12 358.962 725.155 358.963L725.189 358.963C727.178 358.963 729.566 357.193 730.3 355.175C730.942 353.408 729.769 352.535 728.826 351.833ZM720.396 339.71C720.055 339.719 719.346 339.736 719.098 340.439C718.981 340.767 718.995 341.052 719.139 341.286C719.35 341.63 719.755 341.735 720.123 341.793C721.457 342.001 722.142 342.72 722.279 344.053C722.343 344.675 722.773 345.11 723.325 345.11C723.366 345.11 723.408 345.107 723.449 345.103C724.113 345.026 724.435 344.55 724.406 343.69C724.417 342.793 723.934 341.774 723.114 340.962C722.291 340.148 721.298 339.689 720.396 339.71Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M665.493 396.603L663.573 398.123C663.226 397.643 662.753 397.283 662.153 397.043C661.566 396.79 660.966 396.663 660.353 396.663C658.913 396.663 657.733 397.156 656.813 398.143C655.906 399.13 655.453 400.363 655.453 401.843C655.453 403.39 655.886 404.65 656.753 405.623C657.633 406.583 658.8 407.063 660.253 407.063C661.746 407.063 662.893 406.516 663.693 405.423L665.713 406.843C664.393 408.496 662.566 409.323 660.233 409.323C658.02 409.323 656.206 408.63 654.793 407.243C653.38 405.843 652.673 404.043 652.673 401.843C652.673 399.616 653.393 397.83 654.833 396.483C656.286 395.123 658.126 394.443 660.353 394.443C661.34 394.443 662.306 394.63 663.253 395.003C664.213 395.363 664.96 395.896 665.493 396.603ZM666.159 408.963V399.363H668.559V405.563H668.599L672.799 399.363H675.399V408.963H672.999V402.803H672.959L668.799 408.963H666.159ZM679.328 408.963V401.283H676.248V399.363H684.788V401.283H681.728V408.963H679.328ZM688.304 408.963L684.184 399.363H686.844L689.524 406.343H689.564L691.944 399.363H694.444L689.904 411.023C689.53 411.97 689.077 412.663 688.544 413.103C688.024 413.543 687.264 413.763 686.264 413.763C685.824 413.763 685.41 413.716 685.024 413.623L685.224 411.543C685.517 411.636 685.817 411.683 686.124 411.683C686.604 411.683 686.95 411.57 687.164 411.343C687.377 411.13 687.597 410.743 687.824 410.183L688.304 408.963ZM700.838 408.963V407.743H700.778C700.538 408.17 700.144 408.523 699.598 408.803C699.064 409.07 698.464 409.203 697.798 409.203C696.878 409.203 696.044 408.963 695.298 408.483C694.564 407.99 694.198 407.236 694.198 406.223C694.198 405.676 694.331 405.203 694.598 404.803C694.878 404.39 695.224 404.07 695.638 403.843C696.051 403.616 696.564 403.436 697.178 403.303C697.804 403.156 698.391 403.063 698.938 403.023C699.498 402.983 700.118 402.963 700.798 402.963V402.723C700.798 402.163 700.591 401.73 700.178 401.423C699.764 401.116 699.238 400.963 698.598 400.963C697.584 400.963 696.711 401.33 695.978 402.063L694.738 400.603C695.831 399.59 697.184 399.083 698.798 399.083C699.624 399.083 700.324 399.203 700.898 399.443C701.484 399.67 701.931 399.99 702.238 400.403C702.544 400.803 702.758 401.23 702.878 401.683C703.011 402.123 703.078 402.603 703.078 403.123V408.963H700.838ZM700.798 404.923V404.583H700.258C697.818 404.583 696.598 405.116 696.598 406.183C696.598 406.61 696.758 406.916 697.078 407.103C697.411 407.29 697.811 407.383 698.278 407.383C699.091 407.383 699.711 407.17 700.138 406.743C700.578 406.303 700.798 405.696 700.798 404.923ZM713.114 411.703V408.963H704.874V399.363H707.274V407.003H711.314V399.363H713.714V407.003H715.114V411.703H713.114ZM715.944 408.963V399.363H718.344V405.563H718.384L722.584 399.363H725.184V408.963H722.784V402.803H722.744L718.584 408.963H715.944ZM726.513 404.123C726.513 402.643 727.013 401.436 728.013 400.503C729.013 399.556 730.253 399.083 731.733 399.083C733.213 399.083 734.453 399.556 735.453 400.503C736.453 401.436 736.953 402.643 736.953 404.123C736.953 405.616 736.446 406.843 735.433 407.803C734.433 408.763 733.199 409.243 731.733 409.243C730.266 409.243 729.026 408.763 728.013 407.803C727.013 406.843 726.513 405.616 726.513 404.123ZM729.673 401.963C729.193 402.576 728.953 403.296 728.953 404.123C728.953 404.95 729.193 405.676 729.673 406.303C730.153 406.93 730.839 407.243 731.733 407.243C732.626 407.243 733.313 406.93 733.793 406.303C734.273 405.676 734.513 404.95 734.513 404.123C734.513 403.296 734.273 402.576 733.793 401.963C733.313 401.35 732.626 401.043 731.733 401.043C730.839 401.043 730.153 401.35 729.673 401.963ZM738.28 408.963V399.363H740.68V402.983H744.72V399.363H747.12V408.963H744.72V404.903H740.68V408.963H738.28ZM748.999 408.963V399.363H751.399V402.983H755.439V399.363H757.839V408.963H755.439V404.903H751.399V408.963H748.999ZM769.777 408.963V399.363H772.177V408.963H769.777ZM759.717 408.963V399.363H762.117V402.723H764.197C765.384 402.723 766.324 402.983 767.017 403.503C767.724 404.01 768.077 404.783 768.077 405.823C768.077 406.836 767.724 407.616 767.017 408.163C766.311 408.696 765.371 408.963 764.197 408.963H759.717ZM762.117 407.143H763.577C764.297 407.143 764.824 407.043 765.157 406.843C765.504 406.643 765.677 406.31 765.677 405.843C765.677 405.363 765.517 405.023 765.197 404.823C764.877 404.623 764.337 404.523 763.577 404.523H762.117V407.143ZM778.629 397.683C777.736 397.683 777.023 397.436 776.489 396.943C775.956 396.436 775.629 395.743 775.509 394.863L776.809 394.723C776.876 395.176 777.069 395.523 777.389 395.763C777.723 396.003 778.136 396.123 778.629 396.123C779.123 396.123 779.536 396.003 779.869 395.763C780.203 395.523 780.403 395.176 780.469 394.723L781.749 394.983C781.643 395.836 781.323 396.503 780.789 396.983C780.256 397.45 779.536 397.683 778.629 397.683ZM774.049 408.963V399.363H776.449V405.563H776.489L780.689 399.363H783.289V408.963H780.889V402.803H780.849L776.689 408.963H774.049ZM666.846 435.703V432.963H658.606V423.363H661.006V431.003H665.046V423.363H667.446V431.003H668.846V435.703H666.846ZM671.516 427.203H676.436C676.436 426.536 676.243 425.983 675.856 425.543C675.47 425.103 674.91 424.883 674.176 424.883C673.47 424.883 672.863 425.103 672.356 425.543C671.85 425.983 671.57 426.536 671.516 427.203ZM678.836 428.283C678.836 428.563 678.83 428.776 678.816 428.923H671.516C671.57 429.59 671.863 430.15 672.396 430.603C672.93 431.056 673.55 431.283 674.256 431.283C675.363 431.283 676.21 430.87 676.796 430.043L678.396 431.323C677.45 432.603 676.076 433.243 674.276 433.243C672.77 433.243 671.53 432.79 670.556 431.883C669.596 430.976 669.116 429.756 669.116 428.223C669.116 426.69 669.596 425.45 670.556 424.503C671.516 423.556 672.73 423.083 674.196 423.083C675.583 423.083 676.703 423.53 677.556 424.423C678.41 425.316 678.836 426.603 678.836 428.283ZM680.161 432.963V423.363H682.561V426.983H686.601V423.363H689.001V432.963H686.601V428.903H682.561V432.963H680.161ZM692.919 432.963V425.283H689.839V423.363H698.379V425.283H695.319V432.963H692.919ZM699.215 423.363H701.515V424.703H701.575C701.855 424.263 702.275 423.883 702.835 423.563C703.409 423.243 704.095 423.083 704.895 423.083C706.255 423.083 707.369 423.563 708.235 424.523C709.115 425.483 709.555 426.683 709.555 428.123C709.555 429.563 709.122 430.776 708.255 431.763C707.402 432.75 706.262 433.243 704.835 433.243C704.169 433.243 703.549 433.103 702.975 432.823C702.402 432.543 701.962 432.163 701.655 431.683H701.615V437.763H699.215V423.363ZM706.375 430.303C706.869 429.676 707.115 428.95 707.115 428.123C707.115 427.296 706.869 426.576 706.375 425.963C705.895 425.35 705.222 425.043 704.355 425.043C703.515 425.043 702.835 425.363 702.315 426.003C701.795 426.643 701.535 427.363 701.535 428.163C701.535 428.963 701.795 429.676 702.315 430.303C702.835 430.93 703.515 431.243 704.355 431.243C705.222 431.243 705.895 430.93 706.375 430.303ZM709.677 435.483L711.077 430.203H713.397L711.697 435.483H709.677ZM721.287 433.283C719.487 433.283 718.087 432.703 717.087 431.543L718.527 430.143C718.807 430.516 719.174 430.823 719.627 431.063C720.094 431.303 720.587 431.423 721.107 431.423C722.374 431.423 723.007 431.016 723.007 430.203C723.007 429.71 722.807 429.37 722.407 429.183C722.02 428.996 721.48 428.903 720.787 428.903H720.027V427.183H720.787C722.107 427.183 722.767 426.776 722.767 425.963C722.767 425.256 722.227 424.903 721.147 424.903C720.174 424.903 719.407 425.27 718.847 426.003L717.507 424.703C718.36 423.623 719.667 423.083 721.427 423.083C722.56 423.083 723.467 423.316 724.147 423.783C724.84 424.25 725.187 424.89 725.187 425.703C725.187 426.25 725.007 426.73 724.647 427.143C724.287 427.543 723.827 427.803 723.267 427.923V427.963C723.92 428.083 724.447 428.35 724.847 428.763C725.247 429.176 725.447 429.69 725.447 430.303C725.447 431.236 725.047 431.97 724.247 432.503C723.46 433.023 722.474 433.283 721.287 433.283ZM726.836 432.963V423.363H731.796C732.37 423.363 732.883 423.423 733.336 423.543C733.803 423.663 734.223 423.923 734.596 424.323C734.97 424.71 735.156 425.223 735.156 425.863C735.156 426.356 735.003 426.79 734.696 427.163C734.403 427.523 734.016 427.763 733.536 427.883V427.923C734.136 428.016 734.623 428.27 734.996 428.683C735.383 429.083 735.576 429.603 735.576 430.243C735.576 431.096 735.243 431.763 734.576 432.243C733.91 432.723 733.03 432.963 731.936 432.963H726.836ZM729.236 431.243H731.496C732.603 431.243 733.156 430.856 733.156 430.083C733.156 429.31 732.623 428.923 731.556 428.923H729.236V431.243ZM729.236 427.203H731.516C732.396 427.203 732.836 426.85 732.836 426.143C732.836 425.423 732.336 425.063 731.336 425.063H729.236V427.203ZM736.331 428.123C736.331 426.643 736.831 425.436 737.831 424.503C738.831 423.556 740.071 423.083 741.551 423.083C743.031 423.083 744.271 423.556 745.271 424.503C746.271 425.436 746.771 426.643 746.771 428.123C746.771 429.616 746.265 430.843 745.251 431.803C744.251 432.763 743.018 433.243 741.551 433.243C740.085 433.243 738.845 432.763 737.831 431.803C736.831 430.843 736.331 429.616 736.331 428.123ZM739.491 425.963C739.011 426.576 738.771 427.296 738.771 428.123C738.771 428.95 739.011 429.676 739.491 430.303C739.971 430.93 740.658 431.243 741.551 431.243C742.445 431.243 743.131 430.93 743.611 430.303C744.091 429.676 744.331 428.95 744.331 428.123C744.331 427.296 744.091 426.576 743.611 425.963C743.131 425.35 742.445 425.043 741.551 425.043C740.658 425.043 739.971 425.35 739.491 425.963ZM748.098 432.963V423.363H750.498V426.983H754.538V423.363H756.938V432.963H754.538V428.903H750.498V432.963H748.098ZM758.817 432.963V423.363H761.217V427.623H761.277L764.977 423.363H768.017L763.797 427.883L768.337 432.963H765.257L761.277 428.403H761.217V432.963H758.817ZM768.676 432.963V423.363H771.076V429.563H771.116L775.316 423.363H777.916V432.963H775.516V426.803H775.476L771.316 432.963H768.676Z"
      fill="#FAFAFA"
    />`,
    title: 'Ситуационный центр, звонки',
    name: 'sit-centr',
  },
  {
    id: 5,
    path: `<g filter="url(#filter12_b_0_1)">
      <path
        d="M557.529 508.236C565.919 504.761 575.347 504.761 583.737 508.236L647.912 534.819C656.302 538.294 662.969 544.96 666.444 553.351L693.026 617.526C696.502 625.916 696.502 635.344 693.026 643.734L666.444 707.909C662.969 716.299 656.302 722.966 647.912 726.441L583.737 753.023C575.347 756.499 565.919 756.499 557.529 753.023L493.354 726.441C484.963 722.966 478.297 716.299 474.821 707.909L448.239 643.734C444.764 635.344 444.764 625.916 448.239 617.526L474.821 553.351C478.297 544.96 484.963 538.294 493.354 534.819L557.529 508.236Z"
        fill="url(#paint8_linear_0_1)"
      />
      <path
        d="M558.745 511.174C566.357 508.022 574.909 508.022 582.52 511.174L646.695 537.757C654.306 540.909 660.353 546.956 663.506 554.568L690.088 618.743C693.241 626.354 693.241 634.906 690.088 642.517L663.506 706.692C660.353 714.303 654.306 720.351 646.695 723.503L582.52 750.085C574.909 753.238 566.357 753.238 558.745 750.085L494.571 723.503C486.959 720.351 480.912 714.303 477.759 706.692L451.177 642.517C448.025 634.906 448.025 626.354 451.177 618.743L477.759 554.568C480.912 546.956 486.959 540.909 494.571 537.756L558.745 511.174Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter13_dddd_0_1)">
      <g filter="url(#filter14_b_0_1)">
        <rect
          x="546.633"
          y="572.63"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint9_linear_0_1)"
        />
        <rect
          x="544.633"
          y="570.63"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M570.632 584.63C564.006 584.63 558.633 590.003 558.633 596.629C558.633 603.256 564.006 608.63 570.632 608.63C577.259 608.63 582.633 603.256 582.633 596.629C582.633 590.003 577.259 584.63 570.632 584.63ZM573.13 603.227C572.513 603.471 572.021 603.656 571.652 603.784C571.239 603.919 570.805 603.984 570.37 603.976C569.623 603.976 569.04 603.793 568.626 603.429C568.211 603.064 568.005 602.602 568.005 602.04C568.005 601.822 568.02 601.598 568.051 601.37C568.089 601.111 568.138 600.854 568.2 600.599L568.973 597.869C569.041 597.607 569.1 597.358 569.147 597.126C569.194 596.892 569.216 596.678 569.216 596.483C569.216 596.136 569.144 595.892 569.001 595.755C568.856 595.618 568.582 595.551 568.175 595.551C567.976 595.551 567.771 595.58 567.56 595.642C567.352 595.706 567.171 595.764 567.023 595.821L567.227 594.98C567.733 594.773 568.218 594.597 568.68 594.45C569.102 594.309 569.545 594.234 569.99 594.229C570.733 594.229 571.306 594.41 571.709 594.767C572.11 595.126 572.313 595.592 572.313 596.165C572.313 596.284 572.298 596.493 572.271 596.792C572.247 597.071 572.195 597.347 572.116 597.616L571.347 600.338C571.279 600.585 571.222 600.834 571.178 601.086C571.136 601.296 571.111 601.508 571.104 601.722C571.104 602.084 571.184 602.33 571.346 602.462C571.507 602.593 571.788 602.659 572.187 602.659C572.375 602.659 572.585 602.625 572.823 602.56C573.058 602.495 573.229 602.437 573.337 602.387L573.13 603.227ZM572.994 592.177C572.645 592.507 572.18 592.686 571.699 592.677C571.195 592.677 570.76 592.51 570.399 592.177C570.227 592.026 570.089 591.839 569.996 591.63C569.902 591.421 569.855 591.194 569.857 590.965C569.857 590.492 570.04 590.086 570.399 589.75C570.749 589.418 571.216 589.236 571.699 589.245C572.204 589.245 572.637 589.413 572.994 589.75C573.353 590.086 573.533 590.492 573.533 590.965C573.533 591.439 573.353 591.844 572.994 592.177Z"
        fill="white"
      />
    </g>
    <path
      d="M488.449 659.63V645.47H490.969V655.83H491.029L497.669 645.47H500.389V659.63H497.869V649.35H497.829L491.209 659.63H488.449ZM502.387 659.63V650.03H504.787V653.65H508.827V650.03H511.227V659.63H508.827V655.57H504.787V659.63H502.387ZM520.566 657.97C521.579 657.957 522.359 657.67 522.906 657.11C523.466 656.55 523.746 655.797 523.746 654.85C523.746 653.917 523.466 653.177 522.906 652.63C522.346 652.083 521.566 651.803 520.566 651.79V657.97ZM520.566 664.43H518.166V659.95C516.419 659.937 515.046 659.463 514.046 658.53C513.046 657.597 512.546 656.377 512.546 654.87C512.546 653.31 513.039 652.083 514.026 651.19C515.013 650.297 516.393 649.837 518.166 649.81V644.51H520.566V649.81C522.339 649.837 523.719 650.297 524.706 651.19C525.693 652.083 526.186 653.31 526.186 654.87C526.186 656.377 525.686 657.597 524.686 658.53C523.686 659.463 522.313 659.937 520.566 659.95V664.43ZM518.166 657.97V651.79C517.166 651.803 516.386 652.083 515.826 652.63C515.266 653.177 514.986 653.917 514.986 654.85C514.986 655.797 515.259 656.55 515.806 657.11C516.366 657.67 517.153 657.957 518.166 657.97ZM526.937 654.79C526.937 653.31 527.437 652.103 528.437 651.17C529.437 650.223 530.677 649.75 532.157 649.75C533.637 649.75 534.877 650.223 535.877 651.17C536.877 652.103 537.377 653.31 537.377 654.79C537.377 656.283 536.87 657.51 535.857 658.47C534.857 659.43 533.623 659.91 532.157 659.91C530.69 659.91 529.45 659.43 528.437 658.47C527.437 657.51 526.937 656.283 526.937 654.79ZM530.097 652.63C529.617 653.243 529.377 653.963 529.377 654.79C529.377 655.617 529.617 656.343 530.097 656.97C530.577 657.597 531.263 657.91 532.157 657.91C533.05 657.91 533.737 657.597 534.217 656.97C534.697 656.343 534.937 655.617 534.937 654.79C534.937 653.963 534.697 653.243 534.217 652.63C533.737 652.017 533.05 651.71 532.157 651.71C531.263 651.71 530.577 652.017 530.097 652.63ZM538.704 650.03H541.004V651.37H541.064C541.344 650.93 541.764 650.55 542.324 650.23C542.897 649.91 543.584 649.75 544.384 649.75C545.744 649.75 546.857 650.23 547.724 651.19C548.604 652.15 549.044 653.35 549.044 654.79C549.044 656.23 548.61 657.443 547.744 658.43C546.89 659.417 545.75 659.91 544.324 659.91C543.657 659.91 543.037 659.77 542.464 659.49C541.89 659.21 541.45 658.83 541.144 658.35H541.104V664.43H538.704V650.03ZM545.864 656.97C546.357 656.343 546.604 655.617 546.604 654.79C546.604 653.963 546.357 653.243 545.864 652.63C545.384 652.017 544.71 651.71 543.844 651.71C543.004 651.71 542.324 652.03 541.804 652.67C541.284 653.31 541.024 654.03 541.024 654.83C541.024 655.63 541.284 656.343 541.804 656.97C542.324 657.597 543.004 657.91 543.844 657.91C544.71 657.91 545.384 657.597 545.864 656.97ZM550.36 659.63V650.03H553.72L556.52 656.51H556.54L559.24 650.03H562.64V659.63H560.28V652.83H560.24L557.26 659.63H555.66L552.76 652.81H552.72V659.63H550.36ZM570.476 659.63V658.41H570.416C570.176 658.837 569.783 659.19 569.236 659.47C568.703 659.737 568.103 659.87 567.436 659.87C566.516 659.87 565.683 659.63 564.936 659.15C564.203 658.657 563.836 657.903 563.836 656.89C563.836 656.343 563.97 655.87 564.236 655.47C564.516 655.057 564.863 654.737 565.276 654.51C565.69 654.283 566.203 654.103 566.816 653.97C567.443 653.823 568.03 653.73 568.576 653.69C569.136 653.65 569.756 653.63 570.436 653.63V653.39C570.436 652.83 570.23 652.397 569.816 652.09C569.403 651.783 568.876 651.63 568.236 651.63C567.223 651.63 566.35 651.997 565.616 652.73L564.376 651.27C565.47 650.257 566.823 649.75 568.436 649.75C569.263 649.75 569.963 649.87 570.536 650.11C571.123 650.337 571.57 650.657 571.876 651.07C572.183 651.47 572.396 651.897 572.516 652.35C572.65 652.79 572.716 653.27 572.716 653.79V659.63H570.476ZM570.436 655.59V655.25H569.896C567.456 655.25 566.236 655.783 566.236 656.85C566.236 657.277 566.396 657.583 566.716 657.77C567.05 657.957 567.45 658.05 567.916 658.05C568.73 658.05 569.35 657.837 569.776 657.41C570.216 656.97 570.436 656.363 570.436 655.59ZM582.752 662.37V659.63H574.512V650.03H576.912V657.67H580.952V650.03H583.352V657.67H584.752V662.37H582.752ZM585.583 659.63V650.03H587.983V656.23H588.023L592.223 650.03H594.823V659.63H592.423V653.47H592.383L588.223 659.63H585.583ZM596.151 654.79C596.151 653.31 596.651 652.103 597.651 651.17C598.651 650.223 599.891 649.75 601.371 649.75C602.851 649.75 604.091 650.223 605.091 651.17C606.091 652.103 606.591 653.31 606.591 654.79C606.591 656.283 606.085 657.51 605.071 658.47C604.071 659.43 602.838 659.91 601.371 659.91C599.905 659.91 598.665 659.43 597.651 658.47C596.651 657.51 596.151 656.283 596.151 654.79ZM599.311 652.63C598.831 653.243 598.591 653.963 598.591 654.79C598.591 655.617 598.831 656.343 599.311 656.97C599.791 657.597 600.478 657.91 601.371 657.91C602.265 657.91 602.951 657.597 603.431 656.97C603.911 656.343 604.151 655.617 604.151 654.79C604.151 653.963 603.911 653.243 603.431 652.63C602.951 652.017 602.265 651.71 601.371 651.71C600.478 651.71 599.791 652.017 599.311 652.63ZM607.919 659.63V650.03H610.319V653.65H614.359V650.03H616.759V659.63H614.359V655.57H610.319V659.63H607.919ZM618.637 659.63V650.03H621.037V653.65H625.077V650.03H627.477V659.63H625.077V655.57H621.037V659.63H618.637ZM639.416 659.63V650.03H641.816V659.63H639.416ZM629.356 659.63V650.03H631.756V653.39H633.836C635.023 653.39 635.963 653.65 636.656 654.17C637.363 654.677 637.716 655.45 637.716 656.49C637.716 657.503 637.363 658.283 636.656 658.83C635.949 659.363 635.009 659.63 633.836 659.63H629.356ZM631.756 657.81H633.216C633.936 657.81 634.463 657.71 634.796 657.51C635.143 657.31 635.316 656.977 635.316 656.51C635.316 656.03 635.156 655.69 634.836 655.49C634.516 655.29 633.976 655.19 633.216 655.19H631.756V657.81ZM648.268 648.35C647.375 648.35 646.661 648.103 646.128 647.61C645.595 647.103 645.268 646.41 645.148 645.53L646.448 645.39C646.515 645.843 646.708 646.19 647.028 646.43C647.361 646.67 647.775 646.79 648.268 646.79C648.761 646.79 649.175 646.67 649.508 646.43C649.841 646.19 650.041 645.843 650.108 645.39L651.388 645.65C651.281 646.503 650.961 647.17 650.428 647.65C649.895 648.117 649.175 648.35 648.268 648.35ZM643.688 659.63V650.03H646.088V656.23H646.128L650.328 650.03H652.928V659.63H650.528V653.47H650.488L646.328 659.63H643.688ZM554.801 683.91C553.134 683.91 551.808 683.357 550.821 682.25C550.354 681.717 550.014 681.09 549.801 680.37C549.601 679.65 549.501 678.69 549.501 677.49C549.501 676.49 549.528 675.643 549.581 674.95C549.648 674.257 549.768 673.563 549.941 672.87C550.128 672.177 550.381 671.617 550.701 671.19C551.034 670.75 551.474 670.377 552.021 670.07C552.581 669.763 553.248 669.557 554.021 669.45L556.481 669.13C557.054 669.05 557.468 668.95 557.721 668.83C557.974 668.71 558.141 668.497 558.221 668.19L559.941 668.69C559.768 669.463 559.474 670.03 559.061 670.39C558.661 670.737 558.068 670.963 557.281 671.07L554.681 671.41C554.094 671.49 553.608 671.603 553.221 671.75C552.848 671.897 552.501 672.137 552.181 672.47C551.874 672.79 551.641 673.237 551.481 673.81C551.334 674.383 551.248 675.11 551.221 675.99H551.281C552.068 674.537 553.401 673.81 555.281 673.81C556.588 673.81 557.701 674.277 558.621 675.21C559.541 676.143 560.001 677.35 560.001 678.83C560.001 680.337 559.501 681.563 558.501 682.51C557.501 683.443 556.268 683.91 554.801 683.91ZM552.741 680.99C553.234 681.59 553.908 681.89 554.761 681.89C555.614 681.89 556.294 681.59 556.801 680.99C557.321 680.377 557.581 679.637 557.581 678.77C557.581 677.917 557.321 677.19 556.801 676.59C556.294 675.977 555.608 675.67 554.741 675.67C553.888 675.67 553.214 675.97 552.721 676.57C552.241 677.17 552.001 677.903 552.001 678.77C552.001 679.637 552.248 680.377 552.741 680.99ZM561.169 683.75C560.529 683.75 560.049 683.697 559.729 683.59L559.909 681.63C560.109 681.697 560.322 681.73 560.549 681.73C561.162 681.73 561.629 681.417 561.949 680.79C562.269 680.163 562.429 679.05 562.429 677.45V674.03H570.289V683.63H567.889V675.95H564.729V677.99C564.729 679.963 564.442 681.417 563.869 682.35C563.296 683.283 562.396 683.75 561.169 683.75ZM571.618 678.79C571.618 677.31 572.118 676.103 573.118 675.17C574.118 674.223 575.358 673.75 576.838 673.75C578.318 673.75 579.558 674.223 580.558 675.17C581.558 676.103 582.058 677.31 582.058 678.79C582.058 680.283 581.552 681.51 580.538 682.47C579.538 683.43 578.305 683.91 576.838 683.91C575.372 683.91 574.132 683.43 573.118 682.47C572.118 681.51 571.618 680.283 571.618 678.79ZM574.778 676.63C574.298 677.243 574.058 677.963 574.058 678.79C574.058 679.617 574.298 680.343 574.778 680.97C575.258 681.597 575.945 681.91 576.838 681.91C577.732 681.91 578.418 681.597 578.898 680.97C579.378 680.343 579.618 679.617 579.618 678.79C579.618 677.963 579.378 677.243 578.898 676.63C578.418 676.017 577.732 675.71 576.838 675.71C575.945 675.71 575.258 676.017 574.778 676.63ZM583.385 683.63V674.03H585.785V678.29H585.845L589.545 674.03H592.585L588.365 678.55L592.905 683.63H589.825L585.845 679.07H585.785V683.63H583.385Z"
      fill="#FAFAFA"
    />`,
    title: 'Информационный блок',
    name: 'info',
  },

  {
    id: 6,
    path: `<g filter="url(#filter9_b_0_1)">
      <path
        d="M260.122 508.236C268.513 504.761 277.94 504.761 286.331 508.236L350.506 534.819C358.896 538.294 365.562 544.96 369.038 553.351L395.62 617.526C399.095 625.916 399.095 635.344 395.62 643.734L369.038 707.909C365.562 716.299 358.896 722.966 350.506 726.441L286.331 753.023C277.94 756.499 268.513 756.499 260.122 753.023L195.947 726.441C187.557 722.966 180.891 716.299 177.415 707.909L150.833 643.734C147.358 635.344 147.358 625.916 150.833 617.526L177.415 553.351C180.891 544.96 187.557 538.294 195.947 534.819L260.122 508.236Z"
        fill="url(#paint6_linear_0_1)"
      />
      <path
        d="M261.339 511.174C268.951 508.022 277.503 508.022 285.114 511.174L349.289 537.757C356.9 540.909 362.947 546.956 366.1 554.568L392.682 618.743C395.835 626.354 395.835 634.906 392.682 642.517L366.1 706.692C362.947 714.303 356.9 720.351 349.289 723.503L285.114 750.085C277.503 753.238 268.951 753.238 261.339 750.085L197.164 723.503C189.553 720.351 183.506 714.303 180.353 706.692L153.771 642.517C150.618 634.906 150.618 626.354 153.771 618.743L180.353 554.568C183.506 546.956 189.553 540.909 197.164 537.756L261.339 511.174Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter10_dddd_0_1)">
      <g filter="url(#filter11_b_0_1)">
        <rect
          x="249.227"
          y="572.63"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint7_linear_0_1)"
        />
        <rect
          x="247.227"
          y="570.63"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M267.353 598.521C268.166 598.521 268.905 598.448 269.644 598.375V590.812C268.905 590.739 268.166 590.666 267.353 590.666C262.921 590.666 259.227 592.266 259.227 594.23V595.03C259.227 596.921 262.847 598.521 267.353 598.521Z"
        fill="#FAFAFA"
      />
      <path
        d="M267.353 602.521C268.166 602.521 268.905 602.448 269.643 602.375V600.121C268.905 600.194 268.166 600.266 267.353 600.266C263.437 600.266 260.187 599.03 259.448 597.43C259.3 597.648 259.3 597.939 259.3 598.157V598.957C259.226 600.921 262.846 602.521 267.353 602.521Z"
        fill="#FAFAFA"
      />
      <path
        d="M269.57 604.266V604.121C268.831 604.193 268.092 604.266 267.279 604.266C263.364 604.266 260.113 603.03 259.374 601.43C259.227 601.648 259.227 601.939 259.227 602.157V602.957C259.227 604.848 262.847 606.448 267.353 606.448C268.24 606.448 269.126 606.375 269.939 606.23C269.717 605.866 269.644 605.43 269.644 604.993L269.57 604.266Z"
        fill="#FAFAFA"
      />
      <path
        d="M279.026 584.63C274.52 584.63 270.9 586.23 270.9 588.194V588.994C270.9 590.957 274.52 592.557 279.026 592.557C283.533 592.557 287.153 590.957 287.153 588.994V588.194C287.079 586.23 283.459 584.63 279.026 584.63Z"
        fill="#FAFAFA"
      />
      <path
        d="M279.026 594.23C275.11 594.23 271.86 592.993 271.121 591.393C270.973 591.612 270.973 591.903 270.973 592.121V592.921C270.973 594.884 274.593 596.484 279.1 596.484C283.606 596.484 287.227 594.884 287.227 592.921V592.121C287.227 591.903 287.153 591.612 287.079 591.393C286.192 593.066 282.942 594.23 279.026 594.23Z"
        fill="#FAFAFA"
      />
      <path
        d="M279.026 598.23C275.11 598.23 271.86 596.994 271.121 595.394C270.973 595.612 270.973 595.903 270.973 596.121V596.921C270.973 598.884 274.593 600.484 279.1 600.484C283.606 600.484 287.227 598.884 287.227 596.921V596.121C287.227 595.903 287.153 595.612 287.079 595.394C286.192 596.994 282.942 598.23 279.026 598.23Z"
        fill="#FAFAFA"
      />
      <path
        d="M279.026 602.375C275.11 602.375 271.86 601.139 271.121 599.539C270.973 599.757 270.973 600.048 270.973 600.266V601.066C270.973 603.03 274.593 604.63 279.1 604.63C283.606 604.63 287.227 603.03 287.227 601.066V600.266C287.227 600.048 287.153 599.757 287.079 599.539C286.192 601.212 282.942 602.375 279.026 602.375Z"
        fill="#FAFAFA"
      />
      <path
        d="M279.026 606.375C275.11 606.375 271.86 605.139 271.121 603.539C270.973 603.757 270.973 604.048 270.973 604.266V605.066C270.973 607.03 274.593 608.63 279.1 608.63C283.606 608.63 287.227 607.03 287.227 605.066V604.266C287.227 604.048 287.153 603.757 287.079 603.539C286.192 605.139 282.942 606.375 279.026 606.375Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M201.805 657.51L203.705 656.05C204.558 657.17 205.778 657.73 207.365 657.73C208.685 657.73 209.771 657.323 210.625 656.51C211.491 655.697 211.965 654.657 212.045 653.39H205.945V651.27H212.005C211.818 650.137 211.305 649.197 210.465 648.45C209.625 647.703 208.591 647.33 207.365 647.33C206.565 647.33 205.845 647.47 205.205 647.75C204.578 648.017 204.105 648.363 203.785 648.79L202.065 647.17C202.598 646.517 203.338 646.01 204.285 645.65C205.245 645.29 206.265 645.11 207.345 645.11C209.491 645.11 211.278 645.81 212.705 647.21C214.131 648.597 214.845 650.377 214.845 652.55C214.845 654.723 214.131 656.51 212.705 657.91C211.278 659.31 209.491 660.01 207.345 660.01C206.131 660.01 205.038 659.783 204.065 659.33C203.105 658.877 202.351 658.27 201.805 657.51ZM216.17 659.63V650.03H218.57V654.29H218.63L222.33 650.03H225.37L221.15 654.55L225.69 659.63H222.61L218.63 655.07H218.57V659.63H216.17ZM224.943 654.79C224.943 653.31 225.443 652.103 226.443 651.17C227.443 650.223 228.683 649.75 230.163 649.75C231.643 649.75 232.883 650.223 233.883 651.17C234.883 652.103 235.383 653.31 235.383 654.79C235.383 656.283 234.876 657.51 233.863 658.47C232.863 659.43 231.629 659.91 230.163 659.91C228.696 659.91 227.456 659.43 226.443 658.47C225.443 657.51 224.943 656.283 224.943 654.79ZM228.103 652.63C227.623 653.243 227.383 653.963 227.383 654.79C227.383 655.617 227.623 656.343 228.103 656.97C228.583 657.597 229.269 657.91 230.163 657.91C231.056 657.91 231.743 657.597 232.223 656.97C232.703 656.343 232.943 655.617 232.943 654.79C232.943 653.963 232.703 653.243 232.223 652.63C231.743 652.017 231.056 651.71 230.163 651.71C229.269 651.71 228.583 652.017 228.103 652.63ZM236.71 659.63V650.03H239.11V653.65H243.15V650.03H245.55V659.63H243.15V655.57H239.11V659.63H236.71ZM246.868 654.79C246.868 653.31 247.368 652.103 248.368 651.17C249.368 650.223 250.608 649.75 252.088 649.75C253.568 649.75 254.808 650.223 255.808 651.17C256.808 652.103 257.308 653.31 257.308 654.79C257.308 656.283 256.802 657.51 255.788 658.47C254.788 659.43 253.555 659.91 252.088 659.91C250.622 659.91 249.382 659.43 248.368 658.47C247.368 657.51 246.868 656.283 246.868 654.79ZM250.028 652.63C249.548 653.243 249.308 653.963 249.308 654.79C249.308 655.617 249.548 656.343 250.028 656.97C250.508 657.597 251.195 657.91 252.088 657.91C252.982 657.91 253.668 657.597 254.148 656.97C254.628 656.343 254.868 655.617 254.868 654.79C254.868 653.963 254.628 653.243 254.148 652.63C253.668 652.017 252.982 651.71 252.088 651.71C251.195 651.71 250.508 652.017 250.028 652.63ZM258.635 659.63V650.03H261.995L264.795 656.51H264.815L267.515 650.03H270.915V659.63H268.555V652.83H268.515L265.535 659.63H263.935L261.035 652.81H260.995V659.63H258.635ZM272.792 659.63V650.03H275.192V656.23H275.232L279.432 650.03H282.032V659.63H279.632V653.47H279.592L275.432 659.63H272.792ZM289.44 659.63V656.05C288.667 656.25 287.82 656.35 286.9 656.35C284.687 656.35 283.58 655.343 283.58 653.33V650.03H285.88V652.65C285.88 653.343 286.02 653.817 286.3 654.07C286.594 654.31 287.054 654.43 287.68 654.43C288.174 654.43 288.76 654.35 289.44 654.19V650.03H291.84V659.63H289.44ZM295.561 653.87H300.481C300.481 653.203 300.288 652.65 299.901 652.21C299.515 651.77 298.955 651.55 298.221 651.55C297.515 651.55 296.908 651.77 296.401 652.21C295.895 652.65 295.615 653.203 295.561 653.87ZM302.881 654.95C302.881 655.23 302.875 655.443 302.861 655.59H295.561C295.615 656.257 295.908 656.817 296.441 657.27C296.975 657.723 297.595 657.95 298.301 657.95C299.408 657.95 300.255 657.537 300.841 656.71L302.441 657.99C301.495 659.27 300.121 659.91 298.321 659.91C296.815 659.91 295.575 659.457 294.601 658.55C293.641 657.643 293.161 656.423 293.161 654.89C293.161 653.357 293.641 652.117 294.601 651.17C295.561 650.223 296.775 649.75 298.241 649.75C299.628 649.75 300.748 650.197 301.601 651.09C302.455 651.983 302.881 653.27 302.881 654.95ZM312.406 651.25L310.766 652.69C310.579 652.423 310.299 652.203 309.926 652.03C309.552 651.843 309.172 651.75 308.786 651.75C307.959 651.75 307.312 652.063 306.846 652.69C306.379 653.303 306.146 654.017 306.146 654.83C306.146 655.657 306.386 656.377 306.866 656.99C307.346 657.603 308.012 657.91 308.866 657.91C309.746 657.91 310.419 657.623 310.886 657.05L312.386 658.57C311.559 659.463 310.379 659.91 308.846 659.91C307.379 659.91 306.146 659.45 305.146 658.53C304.146 657.61 303.646 656.377 303.646 654.83C303.646 653.31 304.139 652.083 305.126 651.15C306.112 650.217 307.332 649.75 308.786 649.75C309.492 649.75 310.179 649.883 310.846 650.15C311.512 650.417 312.032 650.783 312.406 651.25ZM312.971 659.63V650.03H315.371V654.29H315.431L319.131 650.03H322.171L317.951 654.55L322.491 659.63H319.411L315.431 655.07H315.371V659.63H312.971ZM322.831 659.63V650.03H325.231V656.23H325.271L329.471 650.03H332.071V659.63H329.671V653.47H329.631L325.471 659.63H322.831ZM338.54 648.35C337.646 648.35 336.933 648.103 336.4 647.61C335.866 647.103 335.54 646.41 335.42 645.53L336.72 645.39C336.786 645.843 336.98 646.19 337.3 646.43C337.633 646.67 338.046 646.79 338.54 646.79C339.033 646.79 339.446 646.67 339.78 646.43C340.113 646.19 340.313 645.843 340.38 645.39L341.66 645.65C341.553 646.503 341.233 647.17 340.7 647.65C340.166 648.117 339.446 648.35 338.54 648.35ZM333.96 659.63V650.03H336.36V656.23H336.4L340.6 650.03H343.2V659.63H340.8V653.47H340.76L336.6 659.63H333.96ZM257.395 683.91C255.728 683.91 254.401 683.357 253.415 682.25C252.948 681.717 252.608 681.09 252.395 680.37C252.195 679.65 252.095 678.69 252.095 677.49C252.095 676.49 252.121 675.643 252.175 674.95C252.241 674.257 252.361 673.563 252.535 672.87C252.721 672.177 252.975 671.617 253.295 671.19C253.628 670.75 254.068 670.377 254.615 670.07C255.175 669.763 255.841 669.557 256.615 669.45L259.075 669.13C259.648 669.05 260.061 668.95 260.315 668.83C260.568 668.71 260.735 668.497 260.815 668.19L262.535 668.69C262.361 669.463 262.068 670.03 261.655 670.39C261.255 670.737 260.661 670.963 259.875 671.07L257.275 671.41C256.688 671.49 256.201 671.603 255.815 671.75C255.441 671.897 255.095 672.137 254.775 672.47C254.468 672.79 254.235 673.237 254.075 673.81C253.928 674.383 253.841 675.11 253.815 675.99H253.875C254.661 674.537 255.995 673.81 257.875 673.81C259.181 673.81 260.295 674.277 261.215 675.21C262.135 676.143 262.595 677.35 262.595 678.83C262.595 680.337 262.095 681.563 261.095 682.51C260.095 683.443 258.861 683.91 257.395 683.91ZM255.335 680.99C255.828 681.59 256.501 681.89 257.355 681.89C258.208 681.89 258.888 681.59 259.395 680.99C259.915 680.377 260.175 679.637 260.175 678.77C260.175 677.917 259.915 677.19 259.395 676.59C258.888 675.977 258.201 675.67 257.335 675.67C256.481 675.67 255.808 675.97 255.315 676.57C254.835 677.17 254.595 677.903 254.595 678.77C254.595 679.637 254.841 680.377 255.335 680.99ZM263.763 683.75C263.123 683.75 262.643 683.697 262.323 683.59L262.503 681.63C262.703 681.697 262.916 681.73 263.143 681.73C263.756 681.73 264.223 681.417 264.543 680.79C264.863 680.163 265.023 679.05 265.023 677.45V674.03H272.883V683.63H270.483V675.95H267.323V677.99C267.323 679.963 267.036 681.417 266.463 682.35C265.889 683.283 264.989 683.75 263.763 683.75ZM274.212 678.79C274.212 677.31 274.712 676.103 275.712 675.17C276.712 674.223 277.952 673.75 279.432 673.75C280.912 673.75 282.152 674.223 283.152 675.17C284.152 676.103 284.652 677.31 284.652 678.79C284.652 680.283 284.145 681.51 283.132 682.47C282.132 683.43 280.899 683.91 279.432 683.91C277.965 683.91 276.725 683.43 275.712 682.47C274.712 681.51 274.212 680.283 274.212 678.79ZM277.372 676.63C276.892 677.243 276.652 677.963 276.652 678.79C276.652 679.617 276.892 680.343 277.372 680.97C277.852 681.597 278.539 681.91 279.432 681.91C280.325 681.91 281.012 681.597 281.492 680.97C281.972 680.343 282.212 679.617 282.212 678.79C282.212 677.963 281.972 677.243 281.492 676.63C281.012 676.017 280.325 675.71 279.432 675.71C278.539 675.71 277.852 676.017 277.372 676.63ZM285.979 683.63V674.03H288.379V678.29H288.439L292.139 674.03H295.179L290.959 678.55L295.499 683.63H292.419L288.439 679.07H288.379V683.63H285.979Z"
      fill="#FAFAFA"
    />`,
    title: 'Экономический блок',
    name: 'economic',
  },
  {
    id: 7,
    path: `
    <g filter="url(#filter0_b_0_1)">
      <path
        d="M112.568 257.569C120.958 254.094 130.386 254.094 138.776 257.569L202.951 284.152C211.341 287.627 218.008 294.293 221.483 302.684L248.065 366.859C251.541 375.249 251.541 384.677 248.065 393.067L221.483 457.242C218.008 465.633 211.341 472.299 202.951 475.774L138.776 502.356C130.386 505.832 120.958 505.832 112.568 502.356L48.3928 475.774C40.0022 472.299 33.336 465.632 29.8605 457.242L3.27847 393.067C-0.196997 384.677 -0.196988 375.249 3.27848 366.859L29.8606 302.684C33.336 294.293 40.0023 287.627 48.3928 284.152L112.568 257.569Z"
        fill="url(#paint0_linear_0_1)"
      />
      <path
        d="M113.785 260.507C121.396 257.355 129.948 257.355 137.559 260.507L201.734 287.09C209.345 290.242 215.393 296.289 218.545 303.901L245.127 368.076C248.28 375.687 248.28 384.239 245.127 391.85L218.545 456.025C215.393 463.636 209.345 469.684 201.734 472.836L137.559 499.418C129.948 502.571 121.396 502.571 113.785 499.418L49.6097 472.836C41.9984 469.684 35.9512 463.636 32.7985 456.025L6.21641 391.85C3.06369 384.239 3.0637 375.687 6.21642 368.076L32.7985 303.901C35.9512 296.289 41.9984 290.242 49.6097 287.09L113.785 260.507Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter1_dddd_0_1)">
      <g filter="url(#filter2_b_0_1)">
        <rect
          x="101.672"
          y="309.963"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint1_linear_0_1)"
        />
        <rect
          x="99.6719"
          y="307.963"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M119.75 345.933L120.192 345.81C120.293 345.782 120.388 345.734 120.471 345.67C120.553 345.605 120.622 345.525 120.674 345.433C120.725 345.342 120.758 345.241 120.771 345.137C120.783 345.033 120.775 344.928 120.747 344.827L115.692 326.772C115.656 326.645 115.596 326.527 115.515 326.424C115.434 326.321 115.334 326.235 115.219 326.171C115.105 326.107 114.979 326.065 114.848 326.05C114.718 326.034 114.586 326.044 114.46 326.079L114.402 326.095C114.147 326.166 113.931 326.336 113.801 326.566C113.67 326.797 113.637 327.069 113.709 327.324L118.765 345.38C118.822 345.583 118.958 345.756 119.142 345.86C119.327 345.964 119.546 345.99 119.75 345.933ZM137.554 333.316C135.95 332.518 134.467 331.5 133.147 330.291C133.093 330.241 133.054 330.177 133.034 330.106C133.014 330.035 133.015 329.96 133.036 329.89C133.69 327.421 134.175 324.911 134.489 322.376C134.539 321.955 134.311 321.831 134.071 322.12C129.358 327.745 121.204 321.091 116.351 326.203C116.409 326.312 116.455 326.427 116.487 326.546L119.767 338.267C124.629 333.217 132.754 339.829 137.458 334.217C137.699 333.928 137.744 333.399 137.554 333.316Z"
        fill="white"
      />
    </g>
    <path
      d="M24.476 396.963V382.803H33.856V385.003H26.996V388.603H33.496V390.723H26.996V394.723H34.216V396.963H24.476ZM34.383 399.703V395.003H35.383C36.2764 393.843 36.723 392.123 36.723 389.843V387.363H44.523V395.003H45.943V399.703H43.923V396.963H36.403V399.703H34.383ZM37.923 395.003H42.123V389.283H39.003V390.463C39.003 392.236 38.643 393.75 37.923 395.003ZM46.7896 396.963V387.363H49.1896V393.563H49.2296L53.4296 387.363H56.0296V396.963H53.6296V390.803H53.5896L49.4296 396.963H46.7896ZM57.9185 396.963V387.363H60.3185V390.983H64.3585V387.363H66.7585V396.963H64.3585V392.903H60.3185V396.963H57.9185ZM78.6973 396.963V387.363H81.0973V396.963H78.6973ZM68.6373 396.963V387.363H71.0373V390.723H73.1173C74.3039 390.723 75.2439 390.983 75.9373 391.503C76.6439 392.01 76.9973 392.783 76.9973 393.823C76.9973 394.836 76.6439 395.616 75.9373 396.163C75.2306 396.696 74.2906 396.963 73.1173 396.963H68.6373ZM71.0373 395.143H72.4973C73.2173 395.143 73.7439 395.043 74.0773 394.843C74.4239 394.643 74.5973 394.31 74.5973 393.843C74.5973 393.363 74.4373 393.023 74.1173 392.823C73.7973 392.623 73.2573 392.523 72.4973 392.523H71.0373V395.143ZM87.5493 385.683C86.656 385.683 85.9426 385.436 85.4093 384.943C84.876 384.436 84.5493 383.743 84.4293 382.863L85.7293 382.723C85.796 383.176 85.9893 383.523 86.3093 383.763C86.6426 384.003 87.056 384.123 87.5493 384.123C88.0426 384.123 88.456 384.003 88.7893 383.763C89.1226 383.523 89.3226 383.176 89.3893 382.723L90.6693 382.983C90.5626 383.836 90.2426 384.503 89.7093 384.983C89.176 385.45 88.456 385.683 87.5493 385.683ZM82.9693 396.963V387.363H85.3693V393.563H85.4093L89.6093 387.363H92.2093V396.963H89.8093V390.803H89.7693L85.6093 396.963H82.9693ZM98.1982 397.083C97.5582 397.083 97.0782 397.03 96.7582 396.923L96.9382 394.963C97.1382 395.03 97.3515 395.063 97.5782 395.063C98.1915 395.063 98.6582 394.75 98.9782 394.123C99.2982 393.496 99.4582 392.383 99.4582 390.783V387.363H107.318V396.963H104.918V389.283H101.758V391.323C101.758 393.296 101.472 394.75 100.898 395.683C100.325 396.616 99.4249 397.083 98.1982 397.083ZM108.648 392.123C108.648 390.643 109.148 389.436 110.148 388.503C111.148 387.556 112.388 387.083 113.868 387.083C115.348 387.083 116.588 387.556 117.588 388.503C118.588 389.436 119.088 390.643 119.088 392.123C119.088 393.616 118.581 394.843 117.568 395.803C116.568 396.763 115.334 397.243 113.868 397.243C112.401 397.243 111.161 396.763 110.148 395.803C109.148 394.843 108.648 393.616 108.648 392.123ZM111.808 389.963C111.328 390.576 111.088 391.296 111.088 392.123C111.088 392.95 111.328 393.676 111.808 394.303C112.288 394.93 112.974 395.243 113.868 395.243C114.761 395.243 115.448 394.93 115.928 394.303C116.408 393.676 116.648 392.95 116.648 392.123C116.648 391.296 116.408 390.576 115.928 389.963C115.448 389.35 114.761 389.043 113.868 389.043C112.974 389.043 112.288 389.35 111.808 389.963ZM120.415 396.963V387.363H127.155V389.283H122.815V396.963H120.415ZM127.989 396.963V387.363H130.389V393.563H130.429L134.629 387.363H137.229V396.963H134.829V390.803H134.789L130.629 396.963H127.989ZM147.318 388.583L145.678 390.023C145.491 389.756 145.211 389.536 144.838 389.363C144.464 389.176 144.084 389.083 143.698 389.083C142.871 389.083 142.224 389.396 141.758 390.023C141.291 390.636 141.058 391.35 141.058 392.163C141.058 392.99 141.298 393.71 141.778 394.323C142.258 394.936 142.924 395.243 143.778 395.243C144.658 395.243 145.331 394.956 145.798 394.383L147.298 395.903C146.471 396.796 145.291 397.243 143.758 397.243C142.291 397.243 141.058 396.783 140.058 395.863C139.058 394.943 138.558 393.71 138.558 392.163C138.558 390.643 139.051 389.416 140.038 388.483C141.024 387.55 142.244 387.083 143.698 387.083C144.404 387.083 145.091 387.216 145.758 387.483C146.424 387.75 146.944 388.116 147.318 388.583ZM150.275 396.963V389.283H147.195V387.363H155.735V389.283H152.675V396.963H150.275ZM156.571 396.963V387.363H158.971V393.563H159.011L163.211 387.363H165.811V396.963H163.411V390.803H163.371L159.211 396.963H156.571ZM173.22 396.963V393.383C172.446 393.583 171.6 393.683 170.68 393.683C168.466 393.683 167.36 392.676 167.36 390.663V387.363H169.66V389.983C169.66 390.676 169.8 391.15 170.08 391.403C170.373 391.643 170.833 391.763 171.46 391.763C171.953 391.763 172.54 391.683 173.22 391.523V387.363H175.62V396.963H173.22ZM179.341 391.203H184.261C184.261 390.536 184.067 389.983 183.681 389.543C183.294 389.103 182.734 388.883 182.001 388.883C181.294 388.883 180.687 389.103 180.181 389.543C179.674 389.983 179.394 390.536 179.341 391.203ZM186.661 392.283C186.661 392.563 186.654 392.776 186.641 392.923H179.341C179.394 393.59 179.687 394.15 180.221 394.603C180.754 395.056 181.374 395.283 182.081 395.283C183.187 395.283 184.034 394.87 184.621 394.043L186.221 395.323C185.274 396.603 183.901 397.243 182.101 397.243C180.594 397.243 179.354 396.79 178.381 395.883C177.421 394.976 176.941 393.756 176.941 392.223C176.941 390.69 177.421 389.45 178.381 388.503C179.341 387.556 180.554 387.083 182.021 387.083C183.407 387.083 184.527 387.53 185.381 388.423C186.234 389.316 186.661 390.603 186.661 392.283ZM196.185 388.583L194.545 390.023C194.358 389.756 194.078 389.536 193.705 389.363C193.332 389.176 192.952 389.083 192.565 389.083C191.738 389.083 191.092 389.396 190.625 390.023C190.158 390.636 189.925 391.35 189.925 392.163C189.925 392.99 190.165 393.71 190.645 394.323C191.125 394.936 191.792 395.243 192.645 395.243C193.525 395.243 194.198 394.956 194.665 394.383L196.165 395.903C195.338 396.796 194.158 397.243 192.625 397.243C191.158 397.243 189.925 396.783 188.925 395.863C187.925 394.943 187.425 393.71 187.425 392.163C187.425 390.643 187.918 389.416 188.905 388.483C189.892 387.55 191.112 387.083 192.565 387.083C193.272 387.083 193.958 387.216 194.625 387.483C195.292 387.75 195.812 388.116 196.185 388.583ZM196.751 396.963V387.363H199.151V391.623H199.211L202.911 387.363H205.951L201.731 391.883L206.271 396.963H203.191L199.211 392.403H199.151V396.963H196.751ZM206.61 396.963V387.363H209.01V393.563H209.05L213.25 387.363H215.85V396.963H213.45V390.803H213.41L209.25 396.963H206.61ZM222.319 385.683C221.425 385.683 220.712 385.436 220.179 384.943C219.645 384.436 219.319 383.743 219.199 382.863L220.499 382.723C220.565 383.176 220.759 383.523 221.079 383.763C221.412 384.003 221.825 384.123 222.319 384.123C222.812 384.123 223.225 384.003 223.559 383.763C223.892 383.523 224.092 383.176 224.159 382.723L225.439 382.983C225.332 383.836 225.012 384.503 224.479 384.983C223.945 385.45 223.225 385.683 222.319 385.683ZM217.739 396.963V387.363H220.139V393.563H220.179L224.379 387.363H226.979V396.963H224.579V390.803H224.539L220.379 396.963H217.739ZM108.719 423.703V420.963H100.479V411.363H102.879V419.003H106.919V411.363H109.319V419.003H110.719V423.703H108.719ZM113.389 415.203H118.309C118.309 414.536 118.116 413.983 117.729 413.543C117.343 413.103 116.783 412.883 116.049 412.883C115.343 412.883 114.736 413.103 114.229 413.543C113.723 413.983 113.443 414.536 113.389 415.203ZM120.709 416.283C120.709 416.563 120.703 416.776 120.689 416.923H113.389C113.443 417.59 113.736 418.15 114.269 418.603C114.803 419.056 115.423 419.283 116.129 419.283C117.236 419.283 118.083 418.87 118.669 418.043L120.269 419.323C119.323 420.603 117.949 421.243 116.149 421.243C114.643 421.243 113.403 420.79 112.429 419.883C111.469 418.976 110.989 417.756 110.989 416.223C110.989 414.69 111.469 413.45 112.429 412.503C113.389 411.556 114.603 411.083 116.069 411.083C117.456 411.083 118.576 411.53 119.429 412.423C120.283 413.316 120.709 414.603 120.709 416.283ZM122.034 420.963V411.363H124.434V414.983H128.474V411.363H130.874V420.963H128.474V416.903H124.434V420.963H122.034ZM134.793 420.963V413.283H131.713V411.363H140.253V413.283H137.192V420.963H134.793ZM141.088 411.363H143.388V412.703H143.448C143.728 412.263 144.148 411.883 144.708 411.563C145.282 411.243 145.968 411.083 146.768 411.083C148.128 411.083 149.242 411.563 150.108 412.523C150.988 413.483 151.428 414.683 151.428 416.123C151.428 417.563 150.995 418.776 150.128 419.763C149.275 420.75 148.135 421.243 146.708 421.243C146.042 421.243 145.422 421.103 144.848 420.823C144.275 420.543 143.835 420.163 143.528 419.683H143.488V425.763H141.088V411.363ZM148.248 418.303C148.742 417.676 148.988 416.95 148.988 416.123C148.988 415.296 148.742 414.576 148.248 413.963C147.768 413.35 147.095 413.043 146.228 413.043C145.388 413.043 144.708 413.363 144.188 414.003C143.668 414.643 143.408 415.363 143.408 416.163C143.408 416.963 143.668 417.676 144.188 418.303C144.708 418.93 145.388 419.243 146.228 419.243C147.095 419.243 147.768 418.93 148.248 418.303ZM64.2064 448.083C62.2597 445.39 61.2864 442.43 61.2864 439.203C61.2864 435.976 62.2597 433.016 64.2064 430.323L65.8864 431.423C64.1931 433.77 63.3464 436.363 63.3464 439.203C63.3464 442.043 64.1931 444.636 65.8864 446.983L64.2064 448.083ZM67.608 444.963V435.363H76.448V444.963H74.048V437.283H70.008V444.963H67.608ZM77.7667 440.123C77.7667 438.643 78.2667 437.436 79.2667 436.503C80.2667 435.556 81.5067 435.083 82.9867 435.083C84.4667 435.083 85.7067 435.556 86.7067 436.503C87.7067 437.436 88.2067 438.643 88.2067 440.123C88.2067 441.616 87.7001 442.843 86.6867 443.803C85.6867 444.763 84.4534 445.243 82.9867 445.243C81.5201 445.243 80.2801 444.763 79.2667 443.803C78.2667 442.843 77.7667 441.616 77.7667 440.123ZM80.9267 437.963C80.4467 438.576 80.2067 439.296 80.2067 440.123C80.2067 440.95 80.4467 441.676 80.9267 442.303C81.4067 442.93 82.0934 443.243 82.9867 443.243C83.8801 443.243 84.5667 442.93 85.0467 442.303C85.5267 441.676 85.7667 440.95 85.7667 440.123C85.7667 439.296 85.5267 438.576 85.0467 437.963C84.5667 437.35 83.8801 437.043 82.9867 437.043C82.0934 437.043 81.4067 437.35 80.9267 437.963ZM89.5338 444.963V435.363H92.8938L95.6938 441.843H95.7138L98.4138 435.363H101.814V444.963H99.4538V438.163H99.4138L96.4338 444.963H94.8338L91.9338 438.143H91.8938V444.963H89.5338ZM103.13 440.123C103.13 438.643 103.63 437.436 104.63 436.503C105.63 435.556 106.87 435.083 108.35 435.083C109.83 435.083 111.07 435.556 112.07 436.503C113.07 437.436 113.57 438.643 113.57 440.123C113.57 441.616 113.063 442.843 112.05 443.803C111.05 444.763 109.817 445.243 108.35 445.243C106.883 445.243 105.643 444.763 104.63 443.803C103.63 442.843 103.13 441.616 103.13 440.123ZM106.29 437.963C105.81 438.576 105.57 439.296 105.57 440.123C105.57 440.95 105.81 441.676 106.29 442.303C106.77 442.93 107.457 443.243 108.35 443.243C109.243 443.243 109.93 442.93 110.41 442.303C110.89 441.676 111.13 440.95 111.13 440.123C111.13 439.296 110.89 438.576 110.41 437.963C109.93 437.35 109.243 437.043 108.35 437.043C107.457 437.043 106.77 437.35 106.29 437.963ZM129.237 435.363V443.003H130.637V447.703H128.637V444.963H114.897V435.363H117.297V443.003H120.877V435.363H123.277V443.003H126.837V435.363H129.237ZM131.475 444.963V435.363H133.875V438.723H135.955C137.142 438.723 138.082 438.983 138.775 439.503C139.482 440.01 139.835 440.783 139.835 441.823C139.835 442.836 139.482 443.616 138.775 444.163C138.068 444.696 137.128 444.963 135.955 444.963H131.475ZM133.875 443.143H135.335C136.055 443.143 136.582 443.043 136.915 442.843C137.262 442.643 137.435 442.31 137.435 441.843C137.435 441.363 137.275 441.023 136.955 440.823C136.635 440.623 136.095 440.523 135.335 440.523H133.875V443.143ZM157.028 432.603L155.108 434.123C154.761 433.643 154.288 433.283 153.688 433.043C153.101 432.79 152.501 432.663 151.888 432.663C150.448 432.663 149.268 433.156 148.348 434.143C147.441 435.13 146.988 436.363 146.988 437.843C146.988 439.39 147.421 440.65 148.288 441.623C149.168 442.583 150.335 443.063 151.788 443.063C153.281 443.063 154.428 442.516 155.228 441.423L157.248 442.843C155.928 444.496 154.101 445.323 151.768 445.323C149.555 445.323 147.741 444.63 146.328 443.243C144.915 441.843 144.208 440.043 144.208 437.843C144.208 435.616 144.928 433.83 146.368 432.483C147.821 431.123 149.661 430.443 151.888 430.443C152.875 430.443 153.841 430.63 154.788 431.003C155.748 431.363 156.495 431.896 157.028 432.603ZM157.814 444.963V430.803H163.334C164.534 430.803 165.554 431.096 166.394 431.683C167.247 432.27 167.674 433.163 167.674 434.363C167.674 435.136 167.454 435.79 167.014 436.323C166.574 436.856 165.974 437.236 165.214 437.463V437.503C166.134 437.623 166.874 437.976 167.434 438.563C167.994 439.15 168.274 439.91 168.274 440.843C168.274 441.576 168.121 442.223 167.814 442.783C167.521 443.33 167.114 443.756 166.594 444.063C166.074 444.37 165.507 444.596 164.894 444.743C164.281 444.89 163.621 444.963 162.914 444.963H157.814ZM160.334 432.883V436.563H162.574C163.414 436.563 164.054 436.396 164.494 436.063C164.934 435.73 165.154 435.256 165.154 434.643C165.154 434.016 164.927 433.57 164.474 433.303C164.021 433.023 163.314 432.883 162.354 432.883H160.334ZM160.334 438.723V442.843H162.594C164.701 442.843 165.754 442.136 165.754 440.723C165.754 440.003 165.507 439.49 165.014 439.183C164.521 438.876 163.747 438.723 162.694 438.723H160.334ZM169.083 437.843C169.083 435.603 169.79 433.81 171.203 432.463C172.63 431.116 174.45 430.443 176.663 430.443C178.903 430.443 180.736 431.116 182.163 432.463C183.59 433.81 184.303 435.603 184.303 437.843C184.303 440.043 183.583 441.843 182.143 443.243C180.716 444.63 178.89 445.323 176.663 445.323C174.463 445.323 172.65 444.63 171.223 443.243C169.796 441.843 169.083 440.043 169.083 437.843ZM171.823 437.843C171.823 439.363 172.276 440.616 173.183 441.603C174.09 442.576 175.256 443.063 176.683 443.063C178.123 443.063 179.296 442.576 180.203 441.603C181.11 440.616 181.563 439.363 181.563 437.843C181.563 436.363 181.11 435.13 180.203 434.143C179.31 433.156 178.136 432.663 176.683 432.663C175.243 432.663 174.07 433.156 173.163 434.143C172.27 435.13 171.823 436.363 171.823 437.843ZM187.136 430.323C189.082 433.016 190.056 435.976 190.056 439.203C190.056 442.43 189.082 445.39 187.136 448.083L185.456 446.983C187.149 444.636 187.996 442.043 187.996 439.203C187.996 436.363 187.149 433.77 185.456 431.423L187.136 430.323Z"
      fill="#FAFAFA"
    />`,
    title: 'Единый логистический центр (помощь СВО)',
    name: 'ed-centr',
  },
]
</script>
<style lang="scss" scoped>
.nav {
  @apply tw-w-[83%] md2:tw-w-full tw-px-[92px] lg:tw-px-[156px];
}
</style>
