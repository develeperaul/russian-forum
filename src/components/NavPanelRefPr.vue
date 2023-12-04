<template>
  <svg
    class="nav"
    viewBox="0 0 747 576"
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
        x="-32.224"
        y="-32.224"
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
        x="87"
        y="61"
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
        x="64.776"
        y="30.776"
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
        x="-32.224"
        y="293.776"
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
        x="87"
        y="375"
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
        x="64.776"
        y="344.776"
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
        x="464.776"
        y="-32.224"
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
        x="584"
        y="49"
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
        x="561.776"
        y="18.776"
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
        x="464.776"
        y="293.776"
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
        x="584"
        y="387"
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
        x="561.776"
        y="356.776"
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
        x="207.35"
        y="121.904"
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
        id="filter13_dddd_0_1"
        x="328.945"
        y="217"
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
        id="filter14_b_0_1"
        x="319.85"
        y="199.904"
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
        x1="125"
        y1="0"
        x2="125"
        y2="250"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_1"
        x1="125"
        y1="67"
        x2="125"
        y2="115"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_0_1"
        x1="125"
        y1="326"
        x2="125"
        y2="576"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_0_1"
        x1="125"
        y1="381"
        x2="125"
        y2="429"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_0_1"
        x1="622"
        y1="0"
        x2="622"
        y2="250"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_0_1"
        x1="622"
        y1="55"
        x2="622"
        y2="103"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_0_1"
        x1="622"
        y1="326"
        x2="622"
        y2="576"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_0_1"
        x1="622"
        y1="393"
        x2="622"
        y2="441"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF8E4F" stop-opacity="0" />
        <stop offset="1" stop-color="#FF8E4F" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_0_1"
        x1="374.945"
        y1="223"
        x2="374.945"
        y2="287"
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
    path: `<g filter="url(#filter12_b_0_1)">
      <path
        d="M358.482 144.076C368.383 139.975 379.508 139.975 389.408 144.076L465.135 175.443C475.035 179.544 482.902 187.41 487.003 197.311L518.37 273.037C522.471 282.938 522.471 294.062 518.37 303.963L487.003 379.689C482.902 389.59 475.035 397.456 465.135 401.557L389.408 432.924C379.508 437.025 368.383 437.025 358.482 432.924L282.756 401.557C272.855 397.456 264.989 389.59 260.888 379.689L229.521 303.963C225.42 294.062 225.42 282.938 229.521 273.037L260.888 197.311C264.989 187.41 272.855 179.544 282.756 175.443L358.482 144.076Z"
        fill="#0C72EA"
        fill-opacity="0.159"
      />
      <path
        d="M359.699 147.013C368.821 143.235 379.07 143.235 388.192 147.013L463.918 178.38C473.04 182.158 480.287 189.406 484.065 198.527L515.432 274.254C519.211 283.375 519.211 293.625 515.432 302.746L484.065 378.473C480.287 387.594 473.04 394.842 463.918 398.62L388.192 429.987C379.07 433.765 368.821 433.765 359.699 429.987L283.973 398.62C274.851 394.842 267.604 387.594 263.825 378.473L232.458 302.746C228.68 293.625 228.68 283.375 232.458 274.254L263.825 198.527C267.604 189.405 274.851 182.158 283.973 178.38L359.699 147.013Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.35852"
      />
    </g>
    <g filter="url(#filter13_dddd_0_1)">
      <g filter="url(#filter14_b_0_1)">
        <rect
          x="342.945"
          y="223"
          width="64"
          height="64"
          rx="12"
          fill="url(#paint8_linear_0_1)"
        />
        <rect
          x="340.945"
          y="221"
          width="68"
          height="68"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M384.055 270.228L385.855 260.188H388.508C389.025 260.188 389.445 259.767 389.445 259.25V253.603L390.781 251.655C390.888 251.499 390.945 251.314 390.945 251.125V246.875C390.945 246.408 390.6 246.011 390.137 245.947L388.695 245.747V242.563C388.695 242.314 388.596 242.076 388.42 241.9C388.245 241.724 388.006 241.626 387.758 241.626L384.799 241.626L382.703 239.308C382.526 239.112 382.273 239 382.008 239L377.258 239C377.01 239 376.772 239.098 376.596 239.274C376.42 239.45 376.321 239.688 376.321 239.937V245.957L371.917 250.932L366.503 252.607L362.735 250.381C362.503 250.243 362.222 250.213 361.964 250.298C361.707 250.383 361.499 250.574 361.394 250.823L359.019 256.448C358.969 256.566 358.945 256.69 358.945 256.812C358.945 257.076 359.057 257.335 359.264 257.516L364.232 261.891C364.403 262.042 364.623 262.125 364.851 262.125H366.508V265.5C366.508 265.991 366.887 266.399 367.376 266.435L372.936 266.845L376.371 270.687C376.548 270.887 376.802 271 377.07 271L383.133 271C383.587 271 383.975 270.675 384.055 270.228Z"
        fill="white"
      />
    </g>
    <path
      d="M312.376 326V311.84H316.996C320.556 311.84 322.336 313.207 322.336 315.94C322.336 317.407 321.83 318.473 320.816 319.14C319.803 319.807 318.476 320.14 316.836 320.14H314.896V326H312.376ZM314.896 318.02H316.656C318.75 318.02 319.796 317.327 319.796 315.94C319.796 315.18 319.516 314.66 318.956 314.38C318.41 314.1 317.67 313.96 316.736 313.96H314.896V318.02ZM324.307 320.24H329.227C329.227 319.573 329.034 319.02 328.647 318.58C328.261 318.14 327.701 317.92 326.967 317.92C326.261 317.92 325.654 318.14 325.147 318.58C324.641 319.02 324.361 319.573 324.307 320.24ZM331.627 321.32C331.627 321.6 331.621 321.813 331.607 321.96H324.307C324.361 322.627 324.654 323.187 325.187 323.64C325.721 324.093 326.341 324.32 327.047 324.32C328.154 324.32 329.001 323.907 329.587 323.08L331.187 324.36C330.241 325.64 328.867 326.28 327.067 326.28C325.561 326.28 324.321 325.827 323.347 324.92C322.387 324.013 321.907 322.793 321.907 321.26C321.907 319.727 322.387 318.487 323.347 317.54C324.307 316.593 325.521 316.12 326.987 316.12C328.374 316.12 329.494 316.567 330.347 317.46C331.201 318.353 331.627 319.64 331.627 321.32ZM332.952 326V316.4H339.692V318.32H335.352V326H332.952ZM340.526 326V316.4H342.926V322.6H342.966L347.166 316.4H349.766V326H347.366V319.84H347.326L343.166 326H340.526ZM351.095 321.16C351.095 319.68 351.595 318.473 352.595 317.54C353.595 316.593 354.835 316.12 356.315 316.12C357.795 316.12 359.035 316.593 360.035 317.54C361.035 318.473 361.535 319.68 361.535 321.16C361.535 322.653 361.028 323.88 360.015 324.84C359.015 325.8 357.782 326.28 356.315 326.28C354.848 326.28 353.608 325.8 352.595 324.84C351.595 323.88 351.095 322.653 351.095 321.16ZM354.255 319C353.775 319.613 353.535 320.333 353.535 321.16C353.535 321.987 353.775 322.713 354.255 323.34C354.735 323.967 355.422 324.28 356.315 324.28C357.208 324.28 357.895 323.967 358.375 323.34C358.855 322.713 359.095 321.987 359.095 321.16C359.095 320.333 358.855 319.613 358.375 319C357.895 318.387 357.208 318.08 356.315 318.08C355.422 318.08 354.735 318.387 354.255 319ZM362.862 326V316.4H365.262V320.02H369.302V316.4H371.702V326H369.302V321.94H365.262V326H362.862ZM379.541 326V324.78H379.481C379.241 325.207 378.847 325.56 378.301 325.84C377.767 326.107 377.167 326.24 376.501 326.24C375.581 326.24 374.747 326 374.001 325.52C373.267 325.027 372.901 324.273 372.901 323.26C372.901 322.713 373.034 322.24 373.301 321.84C373.581 321.427 373.927 321.107 374.341 320.88C374.754 320.653 375.267 320.473 375.881 320.34C376.507 320.193 377.094 320.1 377.641 320.06C378.201 320.02 378.821 320 379.501 320V319.76C379.501 319.2 379.294 318.767 378.881 318.46C378.467 318.153 377.941 318 377.301 318C376.287 318 375.414 318.367 374.681 319.1L373.441 317.64C374.534 316.627 375.887 316.12 377.501 316.12C378.327 316.12 379.027 316.24 379.601 316.48C380.187 316.707 380.634 317.027 380.941 317.44C381.247 317.84 381.461 318.267 381.581 318.72C381.714 319.16 381.781 319.64 381.781 320.16V326H379.541ZM379.501 321.96V321.62H378.961C376.521 321.62 375.301 322.153 375.301 323.22C375.301 323.647 375.461 323.953 375.781 324.14C376.114 324.327 376.514 324.42 376.981 324.42C377.794 324.42 378.414 324.207 378.841 323.78C379.281 323.34 379.501 322.733 379.501 321.96ZM383.677 326.12C383.037 326.12 382.557 326.067 382.237 325.96L382.417 324C382.617 324.067 382.83 324.1 383.057 324.1C383.67 324.1 384.137 323.787 384.457 323.16C384.777 322.533 384.937 321.42 384.937 319.82V316.4H392.797V326H390.397V318.32H387.237V320.36C387.237 322.333 386.95 323.787 386.377 324.72C385.803 325.653 384.903 326.12 383.677 326.12ZM394.686 326V316.4H397.086V319.76H399.166C400.353 319.76 401.293 320.02 401.986 320.54C402.693 321.047 403.046 321.82 403.046 322.86C403.046 323.873 402.693 324.653 401.986 325.2C401.279 325.733 400.339 326 399.166 326H394.686ZM397.086 324.18H398.546C399.266 324.18 399.793 324.08 400.126 323.88C400.473 323.68 400.646 323.347 400.646 322.88C400.646 322.4 400.486 322.06 400.166 321.86C399.846 321.66 399.306 321.56 398.546 321.56H397.086V324.18ZM403.979 326V316.4H406.379V320.02H410.419V316.4H412.819V326H410.419V321.94H406.379V326H403.979ZM424.758 326V316.4H427.158V326H424.758ZM414.698 326V316.4H417.098V319.76H419.178C420.364 319.76 421.304 320.02 421.998 320.54C422.704 321.047 423.058 321.82 423.058 322.86C423.058 323.873 422.704 324.653 421.998 325.2C421.291 325.733 420.351 326 419.178 326H414.698ZM417.098 324.18H418.558C419.278 324.18 419.804 324.08 420.138 323.88C420.484 323.68 420.658 323.347 420.658 322.88C420.658 322.4 420.498 322.06 420.178 321.86C419.858 321.66 419.318 321.56 418.558 321.56H417.098V324.18ZM430.87 320.24H435.79C435.79 319.573 435.597 319.02 435.21 318.58C434.823 318.14 434.263 317.92 433.53 317.92C432.823 317.92 432.217 318.14 431.71 318.58C431.203 319.02 430.923 319.573 430.87 320.24ZM438.19 321.32C438.19 321.6 438.183 321.813 438.17 321.96H430.87C430.923 322.627 431.217 323.187 431.75 323.64C432.283 324.093 432.903 324.32 433.61 324.32C434.717 324.32 435.563 323.907 436.15 323.08L437.75 324.36C436.803 325.64 435.43 326.28 433.63 326.28C432.123 326.28 430.883 325.827 429.91 324.92C428.95 324.013 428.47 322.793 428.47 321.26C428.47 319.727 428.95 318.487 429.91 317.54C430.87 316.593 432.083 316.12 433.55 316.12C434.937 316.12 436.057 316.567 436.91 317.46C437.763 318.353 438.19 319.64 438.19 321.32ZM323.159 350V340.4H331.999V350H329.599V342.32H325.559V350H323.159ZM333.878 340.4H336.178V341.74H336.238C336.518 341.3 336.938 340.92 337.498 340.6C338.071 340.28 338.758 340.12 339.558 340.12C340.918 340.12 342.031 340.6 342.898 341.56C343.778 342.52 344.218 343.72 344.218 345.16C344.218 346.6 343.784 347.813 342.918 348.8C342.064 349.787 340.924 350.28 339.498 350.28C338.831 350.28 338.211 350.14 337.638 349.86C337.064 349.58 336.624 349.2 336.318 348.72H336.278V354.8H333.878V340.4ZM341.038 347.34C341.531 346.713 341.778 345.987 341.778 345.16C341.778 344.333 341.531 343.613 341.038 343C340.558 342.387 339.884 342.08 339.018 342.08C338.178 342.08 337.498 342.4 336.978 343.04C336.458 343.68 336.198 344.4 336.198 345.2C336.198 346 336.458 346.713 336.978 347.34C337.498 347.967 338.178 348.28 339.018 348.28C339.884 348.28 340.558 347.967 341.038 347.34ZM344.974 345.16C344.974 343.68 345.474 342.473 346.474 341.54C347.474 340.593 348.714 340.12 350.194 340.12C351.674 340.12 352.914 340.593 353.914 341.54C354.914 342.473 355.414 343.68 355.414 345.16C355.414 346.653 354.907 347.88 353.894 348.84C352.894 349.8 351.66 350.28 350.194 350.28C348.727 350.28 347.487 349.8 346.474 348.84C345.474 347.88 344.974 346.653 344.974 345.16ZM348.134 343C347.654 343.613 347.414 344.333 347.414 345.16C347.414 345.987 347.654 346.713 348.134 347.34C348.614 347.967 349.3 348.28 350.194 348.28C351.087 348.28 351.774 347.967 352.254 347.34C352.734 346.713 352.974 345.987 352.974 345.16C352.974 344.333 352.734 343.613 352.254 343C351.774 342.387 351.087 342.08 350.194 342.08C349.3 342.08 348.614 342.387 348.134 343ZM356.741 350V340.4H363.481V342.32H359.141V350H356.741ZM364.315 340.4H366.615V341.74H366.675C366.955 341.3 367.375 340.92 367.935 340.6C368.508 340.28 369.195 340.12 369.995 340.12C371.355 340.12 372.468 340.6 373.335 341.56C374.215 342.52 374.655 343.72 374.655 345.16C374.655 346.6 374.222 347.813 373.355 348.8C372.502 349.787 371.362 350.28 369.935 350.28C369.268 350.28 368.648 350.14 368.075 349.86C367.502 349.58 367.062 349.2 366.755 348.72H366.715V354.8H364.315V340.4ZM371.475 347.34C371.968 346.713 372.215 345.987 372.215 345.16C372.215 344.333 371.968 343.613 371.475 343C370.995 342.387 370.322 342.08 369.455 342.08C368.615 342.08 367.935 342.4 367.415 343.04C366.895 343.68 366.635 344.4 366.635 345.2C366.635 346 366.895 346.713 367.415 347.34C367.935 347.967 368.615 348.28 369.455 348.28C370.322 348.28 370.995 347.967 371.475 347.34ZM381.931 350V348.78H381.871C381.631 349.207 381.238 349.56 380.691 349.84C380.158 350.107 379.558 350.24 378.891 350.24C377.971 350.24 377.138 350 376.391 349.52C375.658 349.027 375.291 348.273 375.291 347.26C375.291 346.713 375.425 346.24 375.691 345.84C375.971 345.427 376.318 345.107 376.731 344.88C377.145 344.653 377.658 344.473 378.271 344.34C378.898 344.193 379.485 344.1 380.031 344.06C380.591 344.02 381.211 344 381.891 344V343.76C381.891 343.2 381.685 342.767 381.271 342.46C380.858 342.153 380.331 342 379.691 342C378.678 342 377.805 342.367 377.071 343.1L375.831 341.64C376.925 340.627 378.278 340.12 379.891 340.12C380.718 340.12 381.418 340.24 381.991 340.48C382.578 340.707 383.025 341.027 383.331 341.44C383.638 341.84 383.851 342.267 383.971 342.72C384.105 343.16 384.171 343.64 384.171 344.16V350H381.931ZM381.891 345.96V345.62H381.351C378.911 345.62 377.691 346.153 377.691 347.22C377.691 347.647 377.851 347.953 378.171 348.14C378.505 348.327 378.905 348.42 379.371 348.42C380.185 348.42 380.805 348.207 381.231 347.78C381.671 347.34 381.891 346.733 381.891 345.96ZM385.967 350V340.4H389.327L392.127 346.88H392.147L394.847 340.4H398.247V350H395.887V343.2H395.847L392.867 350H391.267L388.367 343.18H388.327V350H385.967ZM400.124 350V340.4H403.484L406.284 346.88H406.304L409.004 340.4H412.404V350H410.044V343.2H410.004L407.024 350H405.424L402.524 343.18H402.484V350H400.124ZM424.34 350V340.4H426.74V350H424.34ZM414.28 350V340.4H416.68V343.76H418.76C419.947 343.76 420.887 344.02 421.58 344.54C422.287 345.047 422.64 345.82 422.64 346.86C422.64 347.873 422.287 348.653 421.58 349.2C420.873 349.733 419.933 350 418.76 350H414.28ZM416.68 348.18H418.14C418.86 348.18 419.387 348.08 419.72 347.88C420.067 347.68 420.24 347.347 420.24 346.88C420.24 346.4 420.08 346.06 419.76 345.86C419.44 345.66 418.9 345.56 418.14 345.56H416.68V348.18Z"
      fill="#FAFAFA"
    />`,
    title: 'ЦУР для бизнеса',
    name: 'home',
  },
  {
    id: 2,
    path: `<g filter="url(#filter0_b_0_1)">
      <path
        d="M111.896 2.6066C120.286 -0.868872 129.714 -0.868863 138.104 2.60661L202.279 29.1887C210.67 32.6642 217.336 39.3304 220.811 47.7209L247.393 111.896C250.869 120.286 250.869 129.714 247.393 138.104L220.811 202.279C217.336 210.67 210.67 217.336 202.279 220.811L138.104 247.393C129.714 250.869 120.286 250.869 111.896 247.393L47.7209 220.811C39.3304 217.336 32.6641 210.67 29.1887 202.279L2.6066 138.104C-0.868872 129.714 -0.868863 120.286 2.60661 111.896L29.1887 47.7209C32.6642 39.3304 39.3304 32.6641 47.7209 29.1887L111.896 2.6066Z"
        fill="url(#paint0_linear_0_1)"
      />
      <path
        d="M113.113 5.54454C120.724 2.39182 129.276 2.39182 136.887 5.54454L201.062 32.1266C208.673 35.2793 214.721 41.3265 217.873 48.9379L244.455 113.113C247.608 120.724 247.608 129.276 244.455 136.887L217.873 201.062C214.721 208.673 208.673 214.721 201.062 217.873L136.887 244.455C129.276 247.608 120.724 247.608 113.113 244.455L48.9378 217.873C41.3265 214.721 35.2793 208.673 32.1266 201.062L5.54454 136.887C2.39182 129.276 2.39182 120.724 5.54454 113.113L32.1266 48.9378C35.2793 41.3265 41.3265 35.2793 48.9379 32.1266L113.113 5.54454Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter1_dddd_0_1)">
      <g filter="url(#filter2_b_0_1)">
        <rect
          x="101"
          y="67"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint1_linear_0_1)"
        />
        <rect
          x="99"
          y="65"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M138.18 103.359H137.359V81.1009C137.359 80.71 137.083 80.3735 136.7 80.2966L120.239 77.0152C119.999 76.9687 119.748 77.0297 119.558 77.185C119.464 77.262 119.389 77.3589 119.337 77.4686C119.285 77.5783 119.258 77.6982 119.258 77.8195V88.5386H121.719C123.076 88.5386 124.18 89.6425 124.18 90.9996V105H129.102V101.581C127.232 101.2 125.82 99.5429 125.82 97.5623C125.82 95.5907 127.418 91.8199 129.922 91.8199C132.426 91.8199 134.023 95.5907 134.023 97.5623C134.023 99.5429 132.612 101.2 130.742 101.581V105H138.18C138.633 105 139 104.633 139 104.18C139 103.726 138.633 103.359 138.18 103.359ZM126.641 86.8979H123.359C122.906 86.8979 122.539 86.531 122.539 86.0776C122.539 85.6242 122.906 85.2572 123.359 85.2572H126.641C127.094 85.2572 127.461 85.6242 127.461 86.0776C127.461 86.531 127.094 86.8979 126.641 86.8979ZM126.641 83.6166H123.359C122.906 83.6166 122.539 83.2497 122.539 82.7962C122.539 82.3428 122.906 81.9759 123.359 81.9759H126.641C127.094 81.9759 127.461 82.3428 127.461 82.7962C127.461 83.2497 127.094 83.6166 126.641 83.6166ZM133.203 90.1793H129.922C129.468 90.1793 129.102 89.8124 129.102 89.3589C129.102 88.9055 129.468 88.5386 129.922 88.5386H133.203C133.657 88.5386 134.023 88.9055 134.023 89.3589C134.023 89.8124 133.657 90.1793 133.203 90.1793ZM133.203 86.8979H129.922C129.468 86.8979 129.102 86.531 129.102 86.0776C129.102 85.6242 129.468 85.2572 129.922 85.2572H133.203C133.657 85.2572 134.023 85.6242 134.023 86.0776C134.023 86.531 133.657 86.8979 133.203 86.8979Z"
        fill="#FAFAFA"
      />
      <path
        d="M132.383 97.5623C132.383 95.9425 131.063 93.4606 129.922 93.4606C128.781 93.4606 127.461 95.9425 127.461 97.5623C127.461 98.9193 128.565 100.023 129.922 100.023C131.279 100.023 132.383 98.9193 132.383 97.5623ZM121.719 90.1793H115.922V84.4369C115.922 83.9835 115.555 83.6166 115.102 83.6166C114.648 83.6166 114.281 83.9835 114.281 84.4369V90.1793H113.461C113.008 90.1793 112.641 90.5464 112.641 90.9996V103.359H111.82C111.367 103.359 111 103.727 111 104.18C111 104.633 111.367 105 111.82 105H122.539V90.9996C122.539 90.5464 122.172 90.1793 121.719 90.1793ZM119.258 101.664H115.922C115.468 101.664 115.102 101.297 115.102 100.844C115.102 100.39 115.468 100.023 115.922 100.023H119.258C119.711 100.023 120.078 100.39 120.078 100.844C120.078 101.297 119.711 101.664 119.258 101.664ZM119.258 98.3826H115.922C115.468 98.3826 115.102 98.0157 115.102 97.5623C115.102 97.1089 115.468 96.742 115.922 96.742H119.258C119.711 96.742 120.078 97.1089 120.078 97.5623C120.078 98.0157 119.711 98.3826 119.258 98.3826ZM119.258 95.1013H115.922C115.468 95.1013 115.102 94.7344 115.102 94.2809C115.102 93.8275 115.468 93.4606 115.922 93.4606H119.258C119.711 93.4606 120.078 93.8275 120.078 94.2809C120.078 94.7344 119.711 95.1013 119.258 95.1013Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M70.5815 154V139.84H79.8615V141.96H73.1015V145.6H75.6015C77.1748 145.6 78.4415 145.947 79.4015 146.64C80.3615 147.333 80.8415 148.387 80.8415 149.8C80.8415 151.187 80.3615 152.233 79.4015 152.94C78.4415 153.647 77.1815 154 75.6215 154H70.5815ZM73.1015 151.88H75.3415C77.3148 151.88 78.3015 151.187 78.3015 149.8C78.3015 149.12 78.0415 148.607 77.5215 148.26C77.0148 147.9 76.2882 147.72 75.3415 147.72H73.1015V151.88ZM88.1559 154V152.78H88.0959C87.8559 153.207 87.4625 153.56 86.9159 153.84C86.3825 154.107 85.7825 154.24 85.1159 154.24C84.1959 154.24 83.3625 154 82.6159 153.52C81.8825 153.027 81.5159 152.273 81.5159 151.26C81.5159 150.713 81.6492 150.24 81.9159 149.84C82.1959 149.427 82.5425 149.107 82.9559 148.88C83.3692 148.653 83.8825 148.473 84.4959 148.34C85.1225 148.193 85.7092 148.1 86.2559 148.06C86.8159 148.02 87.4359 148 88.1159 148V147.76C88.1159 147.2 87.9092 146.767 87.4959 146.46C87.0825 146.153 86.5559 146 85.9159 146C84.9025 146 84.0292 146.367 83.2959 147.1L82.0559 145.64C83.1492 144.627 84.5025 144.12 86.1159 144.12C86.9425 144.12 87.6425 144.24 88.2159 144.48C88.8025 144.707 89.2492 145.027 89.5559 145.44C89.8625 145.84 90.0759 146.267 90.1959 146.72C90.3292 147.16 90.3959 147.64 90.3959 148.16V154H88.1559ZM88.1159 149.96V149.62H87.5759C85.1359 149.62 83.9159 150.153 83.9159 151.22C83.9159 151.647 84.0759 151.953 84.3959 152.14C84.7292 152.327 85.1292 152.42 85.5959 152.42C86.4092 152.42 87.0292 152.207 87.4559 151.78C87.8959 151.34 88.1159 150.733 88.1159 149.96ZM92.192 154V144.4H94.592V152.04H98.172V144.4H100.572V152.04H104.132V144.4H106.532V154H92.192ZM108.536 154V144.4H110.936V148.66H110.996L114.696 144.4H117.736L113.516 148.92L118.056 154H114.976L110.996 149.44H110.936V154H108.536ZM118.395 154V144.4H120.795V150.6H120.835L125.035 144.4H127.635V154H125.235V147.84H125.195L121.035 154H118.395ZM129.524 144.4H131.824V145.74H131.884C132.164 145.3 132.584 144.92 133.144 144.6C133.717 144.28 134.404 144.12 135.204 144.12C136.564 144.12 137.677 144.6 138.544 145.56C139.424 146.52 139.864 147.72 139.864 149.16C139.864 150.6 139.431 151.813 138.564 152.8C137.711 153.787 136.571 154.28 135.144 154.28C134.477 154.28 133.857 154.14 133.284 153.86C132.711 153.58 132.271 153.2 131.964 152.72H131.924V158.8H129.524V144.4ZM136.684 151.34C137.177 150.713 137.424 149.987 137.424 149.16C137.424 148.333 137.177 147.613 136.684 147C136.204 146.387 135.531 146.08 134.664 146.08C133.824 146.08 133.144 146.4 132.624 147.04C132.104 147.68 131.844 148.4 131.844 149.2C131.844 150 132.104 150.713 132.624 151.34C133.144 151.967 133.824 152.28 134.664 152.28C135.531 152.28 136.204 151.967 136.684 151.34ZM149.38 145.62L147.74 147.06C147.554 146.793 147.274 146.573 146.9 146.4C146.527 146.213 146.147 146.12 145.76 146.12C144.934 146.12 144.287 146.433 143.82 147.06C143.354 147.673 143.12 148.387 143.12 149.2C143.12 150.027 143.36 150.747 143.84 151.36C144.32 151.973 144.987 152.28 145.84 152.28C146.72 152.28 147.394 151.993 147.86 151.42L149.36 152.94C148.534 153.833 147.354 154.28 145.82 154.28C144.354 154.28 143.12 153.82 142.12 152.9C141.12 151.98 140.62 150.747 140.62 149.2C140.62 147.68 141.114 146.453 142.1 145.52C143.087 144.587 144.307 144.12 145.76 144.12C146.467 144.12 147.154 144.253 147.82 144.52C148.487 144.787 149.007 145.153 149.38 145.62ZM149.946 154V144.4H152.346V148.66H152.406L156.106 144.4H159.146L154.926 148.92L159.466 154H156.386L152.406 149.44H152.346V154H149.946ZM159.805 154V144.4H162.205V150.6H162.245L166.445 144.4H169.045V154H166.645V147.84H166.605L162.445 154H159.805ZM172.774 148.24H177.694C177.694 147.573 177.501 147.02 177.114 146.58C176.727 146.14 176.167 145.92 175.434 145.92C174.727 145.92 174.121 146.14 173.614 146.58C173.107 147.02 172.827 147.573 172.774 148.24ZM180.094 149.32C180.094 149.6 180.087 149.813 180.074 149.96H172.774C172.827 150.627 173.121 151.187 173.654 151.64C174.187 152.093 174.807 152.32 175.514 152.32C176.621 152.32 177.467 151.907 178.054 151.08L179.654 152.36C178.707 153.64 177.334 154.28 175.534 154.28C174.027 154.28 172.787 153.827 171.814 152.92C170.854 152.013 170.374 150.793 170.374 149.26C170.374 147.727 170.854 146.487 171.814 145.54C172.774 144.593 173.987 144.12 175.454 144.12C176.841 144.12 177.961 144.567 178.814 145.46C179.667 146.353 180.094 147.64 180.094 149.32ZM86.6291 180.74V176.04H87.6291C88.5225 174.88 88.9691 173.16 88.9691 170.88V168.4H96.7691V176.04H98.1891V180.74H96.1691V178H88.6491V180.74H86.6291ZM90.1691 176.04H94.3691V170.32H91.2491V171.5C91.2491 173.273 90.8891 174.787 90.1691 176.04ZM99.0357 178V168.4H103.996C104.569 168.4 105.082 168.46 105.536 168.58C106.002 168.7 106.422 168.96 106.796 169.36C107.169 169.747 107.356 170.26 107.356 170.9C107.356 171.393 107.202 171.827 106.896 172.2C106.602 172.56 106.216 172.8 105.736 172.92V172.96C106.336 173.053 106.822 173.307 107.196 173.72C107.582 174.12 107.776 174.64 107.776 175.28C107.776 176.133 107.442 176.8 106.776 177.28C106.109 177.76 105.229 178 104.136 178H99.0357ZM101.436 176.28H103.696C104.802 176.28 105.356 175.893 105.356 175.12C105.356 174.347 104.822 173.96 103.756 173.96H101.436V176.28ZM101.436 172.24H103.716C104.596 172.24 105.036 171.887 105.036 171.18C105.036 170.46 104.536 170.1 103.536 170.1H101.436V172.24ZM108.53 173.16C108.53 171.68 109.03 170.473 110.03 169.54C111.03 168.593 112.27 168.12 113.75 168.12C115.23 168.12 116.47 168.593 117.47 169.54C118.47 170.473 118.97 171.68 118.97 173.16C118.97 174.653 118.464 175.88 117.45 176.84C116.45 177.8 115.217 178.28 113.75 178.28C112.284 178.28 111.044 177.8 110.03 176.84C109.03 175.88 108.53 174.653 108.53 173.16ZM111.69 171C111.21 171.613 110.97 172.333 110.97 173.16C110.97 173.987 111.21 174.713 111.69 175.34C112.17 175.967 112.857 176.28 113.75 176.28C114.644 176.28 115.33 175.967 115.81 175.34C116.29 174.713 116.53 173.987 116.53 173.16C116.53 172.333 116.29 171.613 115.81 171C115.33 170.387 114.644 170.08 113.75 170.08C112.857 170.08 112.17 170.387 111.69 171ZM120.297 168.4H122.597V169.74H122.657C122.937 169.3 123.357 168.92 123.917 168.6C124.491 168.28 125.177 168.12 125.977 168.12C127.337 168.12 128.451 168.6 129.317 169.56C130.197 170.52 130.637 171.72 130.637 173.16C130.637 174.6 130.204 175.813 129.337 176.8C128.484 177.787 127.344 178.28 125.917 178.28C125.251 178.28 124.631 178.14 124.057 177.86C123.484 177.58 123.044 177.2 122.737 176.72H122.697V182.8H120.297V168.4ZM127.457 175.34C127.951 174.713 128.197 173.987 128.197 173.16C128.197 172.333 127.951 171.613 127.457 171C126.977 170.387 126.304 170.08 125.437 170.08C124.597 170.08 123.917 170.4 123.397 171.04C122.877 171.68 122.617 172.4 122.617 173.2C122.617 174 122.877 174.713 123.397 175.34C123.917 175.967 124.597 176.28 125.437 176.28C126.304 176.28 126.977 175.967 127.457 175.34ZM131.954 178V168.4H134.354V174.6H134.394L138.594 168.4H141.194V178H138.794V171.84H138.754L134.594 178H131.954ZM143.083 178V168.4H145.483V172.66H145.543L149.243 168.4H152.283L148.063 172.92L152.603 178H149.523L145.543 173.44H145.483V178H143.083ZM152.942 178V168.4H155.342V174.6H155.382L159.582 168.4H162.182V178H159.782V171.84H159.742L155.582 178H152.942Z"
      fill="#FAFAFA"
    />`,
    title: 'Башкирские дворики',
    name: 'bash-dvor',
  },
  {
    id: 3,
    path: ` <g filter="url(#filter6_b_0_1)">
      <path
        d="M608.896 2.6066C617.286 -0.868872 626.714 -0.868863 635.104 2.60661L699.279 29.1887C707.67 32.6642 714.336 39.3304 717.811 47.7209L744.393 111.896C747.869 120.286 747.869 129.714 744.393 138.104L717.811 202.279C714.336 210.67 707.67 217.336 699.279 220.811L635.104 247.393C626.714 250.869 617.286 250.869 608.896 247.393L544.721 220.811C536.33 217.336 529.664 210.67 526.189 202.279L499.607 138.104C496.131 129.714 496.131 120.286 499.607 111.896L526.189 47.7209C529.664 39.3304 536.33 32.6641 544.721 29.1887L608.896 2.6066Z"
        fill="url(#paint4_linear_0_1)"
      />
      <path
        d="M610.113 5.54454C617.724 2.39182 626.276 2.39182 633.887 5.54454L698.062 32.1266C705.673 35.2793 711.721 41.3265 714.873 48.9379L741.455 113.113C744.608 120.724 744.608 129.276 741.455 136.887L714.873 201.062C711.721 208.673 705.673 214.721 698.062 217.873L633.887 244.455C626.276 247.608 617.724 247.608 610.113 244.455L545.938 217.873C538.326 214.721 532.279 208.673 529.127 201.062L502.545 136.887C499.392 129.276 499.392 120.724 502.545 113.113L529.127 48.9378C532.279 41.3265 538.327 35.2793 545.938 32.1266L610.113 5.54454Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter7_dddd_0_1)">
      <g filter="url(#filter8_b_0_1)">
        <rect
          x="598"
          y="55"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint5_linear_0_1)"
        />
        <rect
          x="596"
          y="53"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M628.536 67C621.579 67.005 617.972 66.994 613.216 67.0252C612.308 67.0101 612 67.4855 612 68.0021V88.7096C611.999 88.9208 612.063 89.1268 612.182 89.2985C612.301 89.4702 612.468 89.5989 612.662 89.6665L624.893 93.9369C625.481 94.1806 626.177 93.6881 626.177 92.9801V72.2726C626.177 71.8395 625.915 71.4567 625.516 71.3258L621.793 70.0215H628.536C628.838 70.0215 629.081 70.2733 629.081 70.5956V87.1334C629.081 87.4557 628.838 87.7075 628.536 87.7075H628.088V90.729H628.536C630.453 90.729 632 89.1176 632 87.1334V70.5956C632 68.6115 630.453 67 628.536 67ZM622.848 80.763C622.848 81.3774 622.362 81.8911 621.768 81.8911C621.165 81.8911 620.669 81.3774 620.669 80.763C620.669 80.1386 621.165 79.6249 621.768 79.6249C622.362 79.6249 622.848 80.1386 622.848 80.763Z"
        fill="white"
      />
    </g>
    <path
      d="M571.027 142V127.84H582.567V142H580.047V130.04H573.547V142H571.027ZM584.575 132.4H586.875V133.74H586.935C587.215 133.3 587.635 132.92 588.195 132.6C588.768 132.28 589.455 132.12 590.255 132.12C591.615 132.12 592.728 132.6 593.595 133.56C594.475 134.52 594.915 135.72 594.915 137.16C594.915 138.6 594.481 139.813 593.615 140.8C592.761 141.787 591.621 142.28 590.195 142.28C589.528 142.28 588.908 142.14 588.335 141.86C587.761 141.58 587.321 141.2 587.015 140.72H586.975V146.8H584.575V132.4ZM591.735 139.34C592.228 138.713 592.475 137.987 592.475 137.16C592.475 136.333 592.228 135.613 591.735 135C591.255 134.387 590.581 134.08 589.715 134.08C588.875 134.08 588.195 134.4 587.675 135.04C587.155 135.68 586.895 136.4 586.895 137.2C586.895 138 587.155 138.713 587.675 139.34C588.195 139.967 588.875 140.28 589.715 140.28C590.581 140.28 591.255 139.967 591.735 139.34ZM595.671 137.16C595.671 135.68 596.171 134.473 597.171 133.54C598.171 132.593 599.411 132.12 600.891 132.12C602.371 132.12 603.611 132.593 604.611 133.54C605.611 134.473 606.111 135.68 606.111 137.16C606.111 138.653 605.604 139.88 604.591 140.84C603.591 141.8 602.358 142.28 600.891 142.28C599.424 142.28 598.184 141.8 597.171 140.84C596.171 139.88 595.671 138.653 595.671 137.16ZM598.831 135C598.351 135.613 598.111 136.333 598.111 137.16C598.111 137.987 598.351 138.713 598.831 139.34C599.311 139.967 599.998 140.28 600.891 140.28C601.784 140.28 602.471 139.967 602.951 139.34C603.431 138.713 603.671 137.987 603.671 137.16C603.671 136.333 603.431 135.613 602.951 135C602.471 134.387 601.784 134.08 600.891 134.08C599.998 134.08 599.311 134.387 598.831 135ZM607.438 142V132.4H614.178V134.32H609.838V142H607.438ZM615.012 132.4H617.312V133.74H617.372C617.652 133.3 618.072 132.92 618.632 132.6C619.206 132.28 619.892 132.12 620.692 132.12C622.052 132.12 623.166 132.6 624.032 133.56C624.912 134.52 625.352 135.72 625.352 137.16C625.352 138.6 624.919 139.813 624.052 140.8C623.199 141.787 622.059 142.28 620.632 142.28C619.966 142.28 619.346 142.14 618.772 141.86C618.199 141.58 617.759 141.2 617.452 140.72H617.412V146.8H615.012V132.4ZM622.172 139.34C622.666 138.713 622.912 137.987 622.912 137.16C622.912 136.333 622.666 135.613 622.172 135C621.692 134.387 621.019 134.08 620.152 134.08C619.312 134.08 618.632 134.4 618.112 135.04C617.592 135.68 617.332 136.4 617.332 137.2C617.332 138 617.592 138.713 618.112 139.34C618.632 139.967 619.312 140.28 620.152 140.28C621.019 140.28 621.692 139.967 622.172 139.34ZM632.629 142V140.78H632.569C632.329 141.207 631.935 141.56 631.389 141.84C630.855 142.107 630.255 142.24 629.589 142.24C628.669 142.24 627.835 142 627.089 141.52C626.355 141.027 625.989 140.273 625.989 139.26C625.989 138.713 626.122 138.24 626.389 137.84C626.669 137.427 627.015 137.107 627.429 136.88C627.842 136.653 628.355 136.473 628.969 136.34C629.595 136.193 630.182 136.1 630.729 136.06C631.289 136.02 631.909 136 632.589 136V135.76C632.589 135.2 632.382 134.767 631.969 134.46C631.555 134.153 631.029 134 630.389 134C629.375 134 628.502 134.367 627.769 135.1L626.529 133.64C627.622 132.627 628.975 132.12 630.589 132.12C631.415 132.12 632.115 132.24 632.689 132.48C633.275 132.707 633.722 133.027 634.029 133.44C634.335 133.84 634.549 134.267 634.669 134.72C634.802 135.16 634.869 135.64 634.869 136.16V142H632.629ZM632.589 137.96V137.62H632.049C629.609 137.62 628.389 138.153 628.389 139.22C628.389 139.647 628.549 139.953 628.869 140.14C629.202 140.327 629.602 140.42 630.069 140.42C630.882 140.42 631.502 140.207 631.929 139.78C632.369 139.34 632.589 138.733 632.589 137.96ZM636.665 142V132.4H640.025L642.825 138.88H642.845L645.545 132.4H648.945V142H646.585V135.2H646.545L643.565 142H641.965L639.065 135.18H639.025V142H636.665ZM650.821 142V132.4H654.181L656.981 138.88H657.001L659.701 132.4H663.101V142H660.741V135.2H660.701L657.721 142H656.121L653.221 135.18H653.181V142H650.821ZM670.937 142V140.78H670.877C670.637 141.207 670.244 141.56 669.697 141.84C669.164 142.107 668.564 142.24 667.897 142.24C666.977 142.24 666.144 142 665.397 141.52C664.664 141.027 664.297 140.273 664.297 139.26C664.297 138.713 664.43 138.24 664.697 137.84C664.977 137.427 665.324 137.107 665.737 136.88C666.15 136.653 666.664 136.473 667.277 136.34C667.904 136.193 668.49 136.1 669.037 136.06C669.597 136.02 670.217 136 670.897 136V135.76C670.897 135.2 670.69 134.767 670.277 134.46C669.864 134.153 669.337 134 668.697 134C667.684 134 666.81 134.367 666.077 135.1L664.837 133.64C665.93 132.627 667.284 132.12 668.897 132.12C669.724 132.12 670.424 132.24 670.997 132.48C671.584 132.707 672.03 133.027 672.337 133.44C672.644 133.84 672.857 134.267 672.977 134.72C673.11 135.16 673.177 135.64 673.177 136.16V142H670.937ZM670.897 137.96V137.62H670.357C667.917 137.62 666.697 138.153 666.697 139.22C666.697 139.647 666.857 139.953 667.177 140.14C667.51 140.327 667.91 140.42 668.377 140.42C669.19 140.42 669.81 140.207 670.237 139.78C670.677 139.34 670.897 138.733 670.897 137.96ZM569.376 166V156.4H571.776V160.66H571.836L575.536 156.4H578.576L574.356 160.92L578.896 166H575.816L571.836 161.44H571.776V166H569.376ZM585.195 166V164.78H585.135C584.895 165.207 584.502 165.56 583.955 165.84C583.422 166.107 582.822 166.24 582.155 166.24C581.235 166.24 580.402 166 579.655 165.52C578.922 165.027 578.555 164.273 578.555 163.26C578.555 162.713 578.688 162.24 578.955 161.84C579.235 161.427 579.582 161.107 579.995 160.88C580.408 160.653 580.922 160.473 581.535 160.34C582.162 160.193 582.748 160.1 583.295 160.06C583.855 160.02 584.475 160 585.155 160V159.76C585.155 159.2 584.948 158.767 584.535 158.46C584.122 158.153 583.595 158 582.955 158C581.942 158 581.068 158.367 580.335 159.1L579.095 157.64C580.188 156.627 581.542 156.12 583.155 156.12C583.982 156.12 584.682 156.24 585.255 156.48C585.842 156.707 586.288 157.027 586.595 157.44C586.902 157.84 587.115 158.267 587.235 158.72C587.368 159.16 587.435 159.64 587.435 160.16V166H585.195ZM585.155 161.96V161.62H584.615C582.175 161.62 580.955 162.153 580.955 163.22C580.955 163.647 581.115 163.953 581.435 164.14C581.768 164.327 582.168 164.42 582.635 164.42C583.448 164.42 584.068 164.207 584.495 163.78C584.935 163.34 585.155 162.733 585.155 161.96ZM589.231 166V156.4H598.071V166H595.671V158.32H591.631V166H589.231ZM599.95 156.4H602.25V157.74H602.31C602.59 157.3 603.01 156.92 603.57 156.6C604.143 156.28 604.83 156.12 605.63 156.12C606.99 156.12 608.103 156.6 608.97 157.56C609.85 158.52 610.29 159.72 610.29 161.16C610.29 162.6 609.856 163.813 608.99 164.8C608.136 165.787 606.996 166.28 605.57 166.28C604.903 166.28 604.283 166.14 603.71 165.86C603.136 165.58 602.696 165.2 602.39 164.72H602.35V170.8H599.95V156.4ZM607.11 163.34C607.603 162.713 607.85 161.987 607.85 161.16C607.85 160.333 607.603 159.613 607.11 159C606.63 158.387 605.956 158.08 605.09 158.08C604.25 158.08 603.57 158.4 603.05 159.04C602.53 159.68 602.27 160.4 602.27 161.2C602.27 162 602.53 162.713 603.05 163.34C603.57 163.967 604.25 164.28 605.09 164.28C605.956 164.28 606.63 163.967 607.11 163.34ZM613.446 160.24H618.366C618.366 159.573 618.173 159.02 617.786 158.58C617.399 158.14 616.839 157.92 616.106 157.92C615.399 157.92 614.793 158.14 614.286 158.58C613.779 159.02 613.499 159.573 613.446 160.24ZM620.766 161.32C620.766 161.6 620.759 161.813 620.746 161.96H613.446C613.499 162.627 613.793 163.187 614.326 163.64C614.859 164.093 615.479 164.32 616.186 164.32C617.293 164.32 618.139 163.907 618.726 163.08L620.326 164.36C619.379 165.64 618.006 166.28 616.206 166.28C614.699 166.28 613.459 165.827 612.486 164.92C611.526 164.013 611.046 162.793 611.046 161.26C611.046 159.727 611.526 158.487 612.486 157.54C613.446 156.593 614.659 156.12 616.126 156.12C617.513 156.12 618.633 156.567 619.486 157.46C620.339 158.353 620.766 159.64 620.766 161.32ZM622.09 166V156.4H625.45L628.25 162.88H628.27L630.97 156.4H634.37V166H632.01V159.2H631.97L628.99 166H627.39L624.49 159.18H624.45V166H622.09ZM635.687 161.16C635.687 159.68 636.187 158.473 637.187 157.54C638.187 156.593 639.427 156.12 640.907 156.12C642.387 156.12 643.627 156.593 644.627 157.54C645.627 158.473 646.127 159.68 646.127 161.16C646.127 162.653 645.62 163.88 644.607 164.84C643.607 165.8 642.373 166.28 640.907 166.28C639.44 166.28 638.2 165.8 637.187 164.84C636.187 163.88 635.687 162.653 635.687 161.16ZM638.847 159C638.367 159.613 638.127 160.333 638.127 161.16C638.127 161.987 638.367 162.713 638.847 163.34C639.327 163.967 640.013 164.28 640.907 164.28C641.8 164.28 642.487 163.967 642.967 163.34C643.447 162.713 643.687 161.987 643.687 161.16C643.687 160.333 643.447 159.613 642.967 159C642.487 158.387 641.8 158.08 640.907 158.08C640.013 158.08 639.327 158.387 638.847 159ZM647.454 166V156.4H649.854V160.02H653.894V156.4H656.294V166H653.894V161.94H649.854V166H647.454ZM660.212 166V158.32H657.132V156.4H665.672V158.32H662.612V166H660.212ZM672.468 166V164.78H672.408C672.168 165.207 671.775 165.56 671.228 165.84C670.695 166.107 670.095 166.24 669.428 166.24C668.508 166.24 667.675 166 666.928 165.52C666.195 165.027 665.828 164.273 665.828 163.26C665.828 162.713 665.962 162.24 666.228 161.84C666.508 161.427 666.855 161.107 667.268 160.88C667.682 160.653 668.195 160.473 668.808 160.34C669.435 160.193 670.022 160.1 670.568 160.06C671.128 160.02 671.748 160 672.428 160V159.76C672.428 159.2 672.222 158.767 671.808 158.46C671.395 158.153 670.868 158 670.228 158C669.215 158 668.342 158.367 667.608 159.1L666.368 157.64C667.462 156.627 668.815 156.12 670.428 156.12C671.255 156.12 671.955 156.24 672.528 156.48C673.115 156.707 673.562 157.027 673.868 157.44C674.175 157.84 674.388 158.267 674.508 158.72C674.642 159.16 674.708 159.64 674.708 160.16V166H672.468ZM672.428 161.96V161.62H671.888C669.448 161.62 668.228 162.153 668.228 163.22C668.228 163.647 668.388 163.953 668.708 164.14C669.042 164.327 669.442 164.42 669.908 164.42C670.722 164.42 671.342 164.207 671.768 163.78C672.208 163.34 672.428 162.733 672.428 161.96ZM575.057 190V180.4H583.897V190H581.497V182.32H577.457V190H575.057ZM585.216 185.16C585.216 183.68 585.716 182.473 586.716 181.54C587.716 180.593 588.956 180.12 590.436 180.12C591.916 180.12 593.156 180.593 594.156 181.54C595.156 182.473 595.656 183.68 595.656 185.16C595.656 186.653 595.149 187.88 594.136 188.84C593.136 189.8 591.903 190.28 590.436 190.28C588.969 190.28 587.729 189.8 586.716 188.84C585.716 187.88 585.216 186.653 585.216 185.16ZM588.376 183C587.896 183.613 587.656 184.333 587.656 185.16C587.656 185.987 587.896 186.713 588.376 187.34C588.856 187.967 589.543 188.28 590.436 188.28C591.329 188.28 592.016 187.967 592.496 187.34C592.976 186.713 593.216 185.987 593.216 185.16C593.216 184.333 592.976 183.613 592.496 183C592.016 182.387 591.329 182.08 590.436 182.08C589.543 182.08 588.856 182.387 588.376 183ZM595.803 192.74V188.04H596.803C597.696 186.88 598.143 185.16 598.143 182.88V180.4H605.943V188.04H607.363V192.74H605.343V190H597.823V192.74H595.803ZM599.343 188.04H603.543V182.32H600.423V183.5C600.423 185.273 600.063 186.787 599.343 188.04ZM609.75 190V182.32H607.17V180.4H612.15V183.76H614.23C615.416 183.76 616.356 184.02 617.05 184.54C617.756 185.047 618.11 185.82 618.11 186.86C618.11 187.873 617.756 188.653 617.05 189.2C616.343 189.733 615.403 190 614.23 190H609.75ZM612.15 188.18H613.61C614.33 188.18 614.856 188.08 615.19 187.88C615.536 187.68 615.71 187.347 615.71 186.88C615.71 186.4 615.55 186.06 615.23 185.86C614.91 185.66 614.37 185.56 613.61 185.56H612.15V188.18ZM621.081 184.24H626.001C626.001 183.573 625.807 183.02 625.421 182.58C625.034 182.14 624.474 181.92 623.741 181.92C623.034 181.92 622.427 182.14 621.921 182.58C621.414 183.02 621.134 183.573 621.081 184.24ZM628.401 185.32C628.401 185.6 628.394 185.813 628.381 185.96H621.081C621.134 186.627 621.427 187.187 621.961 187.64C622.494 188.093 623.114 188.32 623.821 188.32C624.927 188.32 625.774 187.907 626.361 187.08L627.961 188.36C627.014 189.64 625.641 190.28 623.841 190.28C622.334 190.28 621.094 189.827 620.121 188.92C619.161 188.013 618.681 186.793 618.681 185.26C618.681 183.727 619.161 182.487 620.121 181.54C621.081 180.593 622.294 180.12 623.761 180.12C625.147 180.12 626.267 180.567 627.121 181.46C627.974 182.353 628.401 183.64 628.401 185.32ZM632.785 190.32C630.985 190.32 629.585 189.74 628.585 188.58L630.025 187.18C630.305 187.553 630.672 187.86 631.125 188.1C631.592 188.34 632.085 188.46 632.605 188.46C633.872 188.46 634.505 188.053 634.505 187.24C634.505 186.747 634.305 186.407 633.905 186.22C633.518 186.033 632.978 185.94 632.285 185.94H631.525V184.22H632.285C633.605 184.22 634.265 183.813 634.265 183C634.265 182.293 633.725 181.94 632.645 181.94C631.672 181.94 630.905 182.307 630.345 183.04L629.005 181.74C629.858 180.66 631.165 180.12 632.925 180.12C634.058 180.12 634.965 180.353 635.645 180.82C636.338 181.287 636.685 181.927 636.685 182.74C636.685 183.287 636.505 183.767 636.145 184.18C635.785 184.58 635.325 184.84 634.765 184.96V185C635.418 185.12 635.945 185.387 636.345 185.8C636.745 186.213 636.945 186.727 636.945 187.34C636.945 188.273 636.545 189.007 635.745 189.54C634.958 190.06 633.972 190.32 632.785 190.32ZM637.155 192.74V188.04H638.155C639.048 186.88 639.495 185.16 639.495 182.88V180.4H647.295V188.04H648.715V192.74H646.695V190H639.175V192.74H637.155ZM640.695 188.04H644.895V182.32H641.775V183.5C641.775 185.273 641.415 186.787 640.695 188.04ZM649.001 185.16C649.001 183.68 649.501 182.473 650.501 181.54C651.501 180.593 652.741 180.12 654.221 180.12C655.701 180.12 656.941 180.593 657.941 181.54C658.941 182.473 659.441 183.68 659.441 185.16C659.441 186.653 658.934 187.88 657.921 188.84C656.921 189.8 655.688 190.28 654.221 190.28C652.754 190.28 651.514 189.8 650.501 188.84C649.501 187.88 649.001 186.653 649.001 185.16ZM652.161 183C651.681 183.613 651.441 184.333 651.441 185.16C651.441 185.987 651.681 186.713 652.161 187.34C652.641 187.967 653.328 188.28 654.221 188.28C655.114 188.28 655.801 187.967 656.281 187.34C656.761 186.713 657.001 185.987 657.001 185.16C657.001 184.333 656.761 183.613 656.281 183C655.801 182.387 655.114 182.08 654.221 182.08C653.328 182.08 652.641 182.387 652.161 183ZM660.768 190V180.4H665.728C666.301 180.4 666.815 180.46 667.268 180.58C667.735 180.7 668.155 180.96 668.528 181.36C668.901 181.747 669.088 182.26 669.088 182.9C669.088 183.393 668.935 183.827 668.628 184.2C668.335 184.56 667.948 184.8 667.468 184.92V184.96C668.068 185.053 668.555 185.307 668.928 185.72C669.315 186.12 669.508 186.64 669.508 187.28C669.508 188.133 669.175 188.8 668.508 189.28C667.841 189.76 666.961 190 665.868 190H660.768ZM663.168 188.28H665.428C666.535 188.28 667.088 187.893 667.088 187.12C667.088 186.347 666.555 185.96 665.488 185.96H663.168V188.28ZM663.168 184.24H665.448C666.328 184.24 666.768 183.887 666.768 183.18C666.768 182.46 666.268 182.1 665.268 182.1H663.168V184.24Z"
      fill="#FAFAFA"
    />`,
    title: 'Программа капремонта подъездов',
    name: 'kap-rem',
  },

  {
    id: 4,
    path: ` <g filter="url(#filter9_b_0_1)">
      <path
        d="M608.896 328.607C617.286 325.131 626.714 325.131 635.104 328.607L699.279 355.189C707.67 358.664 714.336 365.33 717.811 373.721L744.393 437.896C747.869 446.286 747.869 455.714 744.393 464.104L717.811 528.279C714.336 536.67 707.67 543.336 699.279 546.811L635.104 573.393C626.714 576.869 617.286 576.869 608.896 573.393L544.721 546.811C536.33 543.336 529.664 536.67 526.189 528.279L499.607 464.104C496.131 455.714 496.131 446.286 499.607 437.896L526.189 373.721C529.664 365.33 536.33 358.664 544.721 355.189L608.896 328.607Z"
        fill="url(#paint6_linear_0_1)"
      />
      <path
        d="M610.113 331.545C617.724 328.392 626.276 328.392 633.887 331.545L698.062 358.127C705.673 361.279 711.721 367.327 714.873 374.938L741.455 439.113C744.608 446.724 744.608 455.276 741.455 462.887L714.873 527.062C711.721 534.673 705.673 540.721 698.062 543.873L633.887 570.455C626.276 573.608 617.724 573.608 610.113 570.455L545.938 543.873C538.326 540.721 532.279 534.673 529.127 527.062L502.545 462.887C499.392 455.276 499.392 446.724 502.545 439.113L529.127 374.938C532.279 367.326 538.327 361.279 545.938 358.127L610.113 331.545Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter10_dddd_0_1)">
      <g filter="url(#filter11_b_0_1)">
        <rect
          x="598"
          y="393"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint7_linear_0_1)"
        />
        <rect
          x="596"
          y="391"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M631.753 406.315C631.398 406.115 630.99 406 630.556 406H613.444C612.1 406 611 407.1 611 408.444V425.556C611 425.99 611.115 426.398 611.315 426.753L631.753 406.315ZM613.192 427.987C613.275 427.996 613.359 428 613.444 428H630.556C630.823 428 631.08 427.957 631.321 427.876L622.312 418.867L613.192 427.987ZM632.877 426.321C632.957 426.08 633 425.822 633 425.556V408.444C633 408.359 632.996 408.275 632.987 408.192L623.868 417.312L632.877 426.321Z"
        fill="white"
      />
    </g>
    <path
      d="M602.513 472.88C602.513 470.64 603.219 468.847 604.633 467.5C606.059 466.153 607.879 465.48 610.093 465.48C612.333 465.48 614.166 466.153 615.593 467.5C617.019 468.847 617.733 470.64 617.733 472.88C617.733 475.08 617.013 476.88 615.573 478.28C614.146 479.667 612.319 480.36 610.093 480.36C607.893 480.36 606.079 479.667 604.653 478.28C603.226 476.88 602.513 475.08 602.513 472.88ZM605.253 472.88C605.253 474.4 605.706 475.653 606.613 476.64C607.519 477.613 608.686 478.1 610.113 478.1C611.553 478.1 612.726 477.613 613.633 476.64C614.539 475.653 614.993 474.4 614.993 472.88C614.993 471.4 614.539 470.167 613.633 469.18C612.739 468.193 611.566 467.7 610.113 467.7C608.673 467.7 607.499 468.193 606.593 469.18C605.699 470.167 605.253 471.4 605.253 472.88ZM617.605 477.88L619.505 476.42C620.359 477.54 621.579 478.1 623.165 478.1C624.485 478.1 625.572 477.693 626.425 476.88C627.292 476.067 627.765 475.027 627.845 473.76H621.745V471.64H627.805C627.619 470.507 627.105 469.567 626.265 468.82C625.425 468.073 624.392 467.7 623.165 467.7C622.365 467.7 621.645 467.84 621.005 468.12C620.379 468.387 619.905 468.733 619.585 469.16L617.865 467.54C618.399 466.887 619.139 466.38 620.085 466.02C621.045 465.66 622.065 465.48 623.145 465.48C625.292 465.48 627.079 466.18 628.505 467.58C629.932 468.967 630.645 470.747 630.645 472.92C630.645 475.093 629.932 476.88 628.505 478.28C627.079 479.68 625.292 480.38 623.145 480.38C621.932 480.38 620.839 480.153 619.865 479.7C618.905 479.247 618.152 478.64 617.605 477.88ZM636.091 480.36C633.878 480.36 632.158 479.673 630.931 478.3L632.631 476.6C633.471 477.68 634.585 478.22 635.971 478.22C636.745 478.22 637.418 478.013 637.991 477.6C638.565 477.173 638.851 476.6 638.851 475.88C638.851 474.467 637.745 473.76 635.531 473.76H634.531V471.64H635.571C637.505 471.64 638.471 470.94 638.471 469.54C638.471 468.967 638.218 468.5 637.711 468.14C637.218 467.767 636.645 467.58 635.991 467.58C634.738 467.58 633.751 468.027 633.031 468.92L631.451 467.36C632.558 466.107 634.118 465.48 636.131 465.48C637.598 465.48 638.771 465.82 639.651 466.5C640.531 467.167 640.971 468.093 640.971 469.28C640.971 470.107 640.745 470.807 640.291 471.38C639.838 471.953 639.251 472.333 638.531 472.52V472.58C639.385 472.78 640.085 473.18 640.631 473.78C641.178 474.38 641.451 475.133 641.451 476.04C641.451 477.387 640.925 478.447 639.871 479.22C638.831 479.98 637.571 480.36 636.091 480.36ZM596.369 495.58L594.069 499.04L596.389 502.54L594.869 503.56L591.829 499.04L594.869 494.56L596.369 495.58ZM600.829 495.58L598.529 499.04L600.849 502.54L599.329 503.56L596.289 499.04L599.329 494.56L600.829 495.58ZM600.44 504L606.6 489.84H608.78L614.88 504H612L610.68 500.76H604.54L603.26 504H600.44ZM605.4 498.6H609.8L607.62 492.84L605.4 498.6ZM615.261 504.12C614.621 504.12 614.141 504.067 613.821 503.96L614.001 502C614.201 502.067 614.414 502.1 614.641 502.1C615.254 502.1 615.721 501.787 616.041 501.16C616.361 500.533 616.521 499.42 616.521 497.82V494.4H624.381V504H621.981V496.32H618.821V498.36C618.821 500.333 618.534 501.787 617.961 502.72C617.387 503.653 616.487 504.12 615.261 504.12ZM626.27 504V494.4H633.01V496.32H628.67V504H626.27ZM639.804 504V502.78H639.744C639.504 503.207 639.111 503.56 638.564 503.84C638.031 504.107 637.431 504.24 636.764 504.24C635.844 504.24 635.011 504 634.264 503.52C633.531 503.027 633.164 502.273 633.164 501.26C633.164 500.713 633.298 500.24 633.564 499.84C633.844 499.427 634.191 499.107 634.604 498.88C635.018 498.653 635.531 498.473 636.144 498.34C636.771 498.193 637.358 498.1 637.904 498.06C638.464 498.02 639.084 498 639.764 498V497.76C639.764 497.2 639.558 496.767 639.144 496.46C638.731 496.153 638.204 496 637.564 496C636.551 496 635.678 496.367 634.944 497.1L633.704 495.64C634.798 494.627 636.151 494.12 637.764 494.12C638.591 494.12 639.291 494.24 639.864 494.48C640.451 494.707 640.898 495.027 641.204 495.44C641.511 495.84 641.724 496.267 641.844 496.72C641.978 497.16 642.044 497.64 642.044 498.16V504H639.804ZM639.764 499.96V499.62H639.224C636.784 499.62 635.564 500.153 635.564 501.22C635.564 501.647 635.724 501.953 636.044 502.14C636.378 502.327 636.778 502.42 637.244 502.42C638.058 502.42 638.678 502.207 639.104 501.78C639.544 501.34 639.764 500.733 639.764 499.96ZM647.64 502.54L649.94 499.08L647.62 495.58L649.14 494.56L652.18 499.08L649.14 503.56L647.64 502.54ZM643.18 502.54L645.48 499.08L643.16 495.58L644.68 494.56L647.72 499.08L644.68 503.56L643.18 502.54Z"
      fill="#FAFAFA"
    />`,
    title: 'ОЭЗ «Алга»',
    name: 'osob',
  },
  {
    id: 5,
    path: `<g filter="url(#filter3_b_0_1)">
      <path
        d="M111.896 328.607C120.286 325.131 129.714 325.131 138.104 328.607L202.279 355.189C210.67 358.664 217.336 365.33 220.811 373.721L247.393 437.896C250.869 446.286 250.869 455.714 247.393 464.104L220.811 528.279C217.336 536.67 210.67 543.336 202.279 546.811L138.104 573.393C129.714 576.869 120.286 576.869 111.896 573.393L47.7209 546.811C39.3304 543.336 32.6641 536.67 29.1887 528.279L2.6066 464.104C-0.868872 455.714 -0.868863 446.286 2.60661 437.896L29.1887 373.721C32.6642 365.33 39.3304 358.664 47.7209 355.189L111.896 328.607Z"
        fill="url(#paint2_linear_0_1)"
      />
      <path
        d="M113.113 331.545C120.724 328.392 129.276 328.392 136.887 331.545L201.062 358.127C208.673 361.279 214.721 367.327 217.873 374.938L244.455 439.113C247.608 446.724 247.608 455.276 244.455 462.887L217.873 527.062C214.721 534.673 208.673 540.721 201.062 543.873L136.887 570.455C129.276 573.608 120.724 573.608 113.113 570.455L48.9378 543.873C41.3265 540.721 35.2793 534.673 32.1266 527.062L5.54454 462.887C2.39182 455.276 2.39182 446.724 5.54454 439.113L32.1266 374.938C35.2793 367.326 41.3265 361.279 48.9379 358.127L113.113 331.545Z"
        stroke="white"
        stroke-opacity="0.318"
        stroke-width="6.36"
      />
    </g>
    <g filter="url(#filter4_dddd_0_1)">
      <g filter="url(#filter5_b_0_1)">
        <rect
          x="101"
          y="381"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint3_linear_0_1)"
        />
        <rect
          x="99"
          y="379"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M127.14 411.875C127.029 411.831 126.911 411.809 126.792 411.81C126.415 411.833 126.058 411.987 125.782 412.247L125 412.906L124.218 412.247C123.942 411.987 123.585 411.833 123.209 411.81C123.088 411.809 122.969 411.832 122.857 411.875C122.294 412.092 121.944 412.782 121.944 413.677C121.944 415.465 123.444 417.195 125 418C126.558 417.194 128.056 415.464 128.056 413.677C128.056 412.782 127.706 412.091 127.14 411.875Z"
        fill="white"
      />
      <path
        d="M125 404.381C128.375 404.381 131.111 401.609 131.111 398.19C131.111 394.772 128.375 392 125 392C121.625 392 118.889 394.772 118.889 398.19C118.889 401.609 121.625 404.381 125 404.381Z"
        fill="white"
      />
      <path
        d="M127.444 405.619H122.556C120.286 405.619 118.11 406.532 116.506 408.157C114.901 409.783 114 411.987 114 414.286C114 414.942 114.258 415.572 114.716 416.037C115.174 416.501 115.796 416.762 116.444 416.762H121.792C121.126 415.872 120.752 414.794 120.722 413.677C120.722 412.255 121.374 411.121 122.424 410.718C122.675 410.621 122.94 410.571 123.209 410.571C123.871 410.592 124.505 410.848 125 411.295V411.296C125.495 410.849 126.129 410.592 126.791 410.571C127.06 410.571 127.326 410.621 127.577 410.718C128.625 411.12 129.278 412.255 129.278 413.677C129.248 414.793 128.874 415.872 128.209 416.762H133.556C134.204 416.762 134.826 416.501 135.284 416.037C135.742 415.572 136 414.942 136 414.286C136 411.987 135.099 409.783 133.494 408.157C131.89 406.532 129.714 405.619 127.444 405.619Z"
        fill="white"
      />
    </g>
    <path
      d="M93.4545 468V453.84H104.995V468H102.475V456.04H95.9745V468H93.4545ZM107.003 458.4H109.303V459.74H109.363C109.643 459.3 110.063 458.92 110.623 458.6C111.196 458.28 111.883 458.12 112.683 458.12C114.043 458.12 115.156 458.6 116.023 459.56C116.903 460.52 117.343 461.72 117.343 463.16C117.343 464.6 116.909 465.813 116.043 466.8C115.189 467.787 114.049 468.28 112.623 468.28C111.956 468.28 111.336 468.14 110.763 467.86C110.189 467.58 109.749 467.2 109.443 466.72H109.403V472.8H107.003V458.4ZM114.163 465.34C114.656 464.713 114.903 463.987 114.903 463.16C114.903 462.333 114.656 461.613 114.163 461C113.683 460.387 113.009 460.08 112.143 460.08C111.303 460.08 110.623 460.4 110.103 461.04C109.583 461.68 109.323 462.4 109.323 463.2C109.323 464 109.583 464.713 110.103 465.34C110.623 465.967 111.303 466.28 112.143 466.28C113.009 466.28 113.683 465.967 114.163 465.34ZM118.099 463.16C118.099 461.68 118.599 460.473 119.599 459.54C120.599 458.593 121.839 458.12 123.319 458.12C124.799 458.12 126.039 458.593 127.039 459.54C128.039 460.473 128.539 461.68 128.539 463.16C128.539 464.653 128.032 465.88 127.019 466.84C126.019 467.8 124.785 468.28 123.319 468.28C121.852 468.28 120.612 467.8 119.599 466.84C118.599 465.88 118.099 464.653 118.099 463.16ZM121.259 461C120.779 461.613 120.539 462.333 120.539 463.16C120.539 463.987 120.779 464.713 121.259 465.34C121.739 465.967 122.425 466.28 123.319 466.28C124.212 466.28 124.899 465.967 125.379 465.34C125.859 464.713 126.099 463.987 126.099 463.16C126.099 462.333 125.859 461.613 125.379 461C124.899 460.387 124.212 460.08 123.319 460.08C122.425 460.08 121.739 460.387 121.259 461ZM131.706 462.24H136.626C136.626 461.573 136.432 461.02 136.046 460.58C135.659 460.14 135.099 459.92 134.366 459.92C133.659 459.92 133.052 460.14 132.546 460.58C132.039 461.02 131.759 461.573 131.706 462.24ZM139.026 463.32C139.026 463.6 139.019 463.813 139.006 463.96H131.706C131.759 464.627 132.052 465.187 132.586 465.64C133.119 466.093 133.739 466.32 134.446 466.32C135.552 466.32 136.399 465.907 136.986 465.08L138.586 466.36C137.639 467.64 136.266 468.28 134.466 468.28C132.959 468.28 131.719 467.827 130.746 466.92C129.786 466.013 129.306 464.793 129.306 463.26C129.306 461.727 129.786 460.487 130.746 459.54C131.706 458.593 132.919 458.12 134.386 458.12C135.772 458.12 136.892 458.567 137.746 459.46C138.599 460.353 139.026 461.64 139.026 463.32ZM140.35 468V458.4H142.75V462.66H142.81L146.51 458.4H149.55L145.33 462.92L149.87 468H146.79L142.81 463.44H142.75V468H140.35ZM152.25 468V460.32H149.17V458.4H157.71V460.32H154.65V468H152.25ZM55.8658 492V482.4H60.8258C61.3991 482.4 61.9124 482.46 62.3658 482.58C62.8324 482.7 63.2524 482.96 63.6258 483.36C63.9991 483.747 64.1858 484.26 64.1858 484.9C64.1858 485.393 64.0324 485.827 63.7258 486.2C63.4324 486.56 63.0458 486.8 62.5658 486.92V486.96C63.1658 487.053 63.6524 487.307 64.0258 487.72C64.4124 488.12 64.6058 488.64 64.6058 489.28C64.6058 490.133 64.2724 490.8 63.6058 491.28C62.9391 491.76 62.0591 492 60.9658 492H55.8658ZM58.2658 490.28H60.5258C61.6324 490.28 62.1858 489.893 62.1858 489.12C62.1858 488.347 61.6524 487.96 60.5858 487.96H58.2658V490.28ZM58.2658 486.24H60.5458C61.4258 486.24 61.8658 485.887 61.8658 485.18C61.8658 484.46 61.3658 484.1 60.3658 484.1H58.2658V486.24ZM68.9805 492.32C67.1805 492.32 65.7805 491.74 64.7805 490.58L66.2205 489.18C66.5005 489.553 66.8671 489.86 67.3205 490.1C67.7871 490.34 68.2805 490.46 68.8005 490.46C70.0671 490.46 70.7005 490.053 70.7005 489.24C70.7005 488.747 70.5005 488.407 70.1005 488.22C69.7138 488.033 69.1738 487.94 68.4805 487.94H67.7205V486.22H68.4805C69.8005 486.22 70.4605 485.813 70.4605 485C70.4605 484.293 69.9205 483.94 68.8405 483.94C67.8671 483.94 67.1005 484.307 66.5405 485.04L65.2005 483.74C66.0538 482.66 67.3605 482.12 69.1205 482.12C70.2538 482.12 71.1605 482.353 71.8405 482.82C72.5338 483.287 72.8805 483.927 72.8805 484.74C72.8805 485.287 72.7005 485.767 72.3405 486.18C71.9805 486.58 71.5205 486.84 70.9605 486.96V487C71.6138 487.12 72.1405 487.387 72.5405 487.8C72.9405 488.213 73.1405 488.727 73.1405 489.34C73.1405 490.273 72.7405 491.007 71.9405 491.54C71.1538 492.06 70.1671 492.32 68.9805 492.32ZM80.4898 492V490.78H80.4298C80.1898 491.207 79.7965 491.56 79.2498 491.84C78.7165 492.107 78.1165 492.24 77.4498 492.24C76.5298 492.24 75.6965 492 74.9498 491.52C74.2165 491.027 73.8498 490.273 73.8498 489.26C73.8498 488.713 73.9832 488.24 74.2498 487.84C74.5298 487.427 74.8765 487.107 75.2898 486.88C75.7032 486.653 76.2165 486.473 76.8298 486.34C77.4565 486.193 78.0432 486.1 78.5898 486.06C79.1498 486.02 79.7698 486 80.4498 486V485.76C80.4498 485.2 80.2432 484.767 79.8298 484.46C79.4165 484.153 78.8898 484 78.2498 484C77.2365 484 76.3632 484.367 75.6298 485.1L74.3898 483.64C75.4832 482.627 76.8365 482.12 78.4498 482.12C79.2765 482.12 79.9765 482.24 80.5498 482.48C81.1365 482.707 81.5832 483.027 81.8898 483.44C82.1965 483.84 82.4098 484.267 82.5298 484.72C82.6632 485.16 82.7298 485.64 82.7298 486.16V492H80.4898ZM80.4498 487.96V487.62H79.9098C77.4698 487.62 76.2498 488.153 76.2498 489.22C76.2498 489.647 76.4098 489.953 76.7298 490.14C77.0632 490.327 77.4632 490.42 77.9298 490.42C78.7432 490.42 79.3632 490.207 79.7898 489.78C80.2298 489.34 80.4498 488.733 80.4498 487.96ZM84.5259 492V482.4H86.9259V488.6H86.9659L91.1659 482.4H93.7659V492H91.3659V485.84H91.3259L87.1659 492H84.5259ZM95.6548 492V482.4H99.0148L101.815 488.88H101.835L104.535 482.4H107.935V492H105.575V485.2H105.535L102.555 492H100.955L98.0548 485.18H98.0148V492H95.6548ZM109.251 487.16C109.251 485.68 109.751 484.473 110.751 483.54C111.751 482.593 112.991 482.12 114.471 482.12C115.951 482.12 117.191 482.593 118.191 483.54C119.191 484.473 119.691 485.68 119.691 487.16C119.691 488.653 119.184 489.88 118.171 490.84C117.171 491.8 115.938 492.28 114.471 492.28C113.004 492.28 111.764 491.8 110.751 490.84C109.751 489.88 109.251 488.653 109.251 487.16ZM112.411 485C111.931 485.613 111.691 486.333 111.691 487.16C111.691 487.987 111.931 488.713 112.411 489.34C112.891 489.967 113.578 490.28 114.471 490.28C115.364 490.28 116.051 489.967 116.531 489.34C117.011 488.713 117.251 487.987 117.251 487.16C117.251 486.333 117.011 485.613 116.531 485C116.051 484.387 115.364 484.08 114.471 484.08C113.578 484.08 112.891 484.387 112.411 485ZM121.018 492V482.4H129.858V492H127.458V484.32H123.418V492H121.018ZM131.177 487.16C131.177 485.68 131.677 484.473 132.677 483.54C133.677 482.593 134.917 482.12 136.397 482.12C137.877 482.12 139.117 482.593 140.117 483.54C141.117 484.473 141.617 485.68 141.617 487.16C141.617 488.653 141.11 489.88 140.097 490.84C139.097 491.8 137.864 492.28 136.397 492.28C134.93 492.28 133.69 491.8 132.677 490.84C131.677 489.88 131.177 488.653 131.177 487.16ZM134.337 485C133.857 485.613 133.617 486.333 133.617 487.16C133.617 487.987 133.857 488.713 134.337 489.34C134.817 489.967 135.504 490.28 136.397 490.28C137.29 490.28 137.977 489.967 138.457 489.34C138.937 488.713 139.177 487.987 139.177 487.16C139.177 486.333 138.937 485.613 138.457 485C137.977 484.387 137.29 484.08 136.397 484.08C135.504 484.08 134.817 484.387 134.337 485ZM142.944 492V482.4H146.304L149.104 488.88H149.124L151.824 482.4H155.224V492H152.864V485.2H152.824L149.844 492H148.244L145.344 485.18H145.304V492H142.944ZM156.54 487.16C156.54 485.68 157.04 484.473 158.04 483.54C159.04 482.593 160.28 482.12 161.76 482.12C163.24 482.12 164.48 482.593 165.48 483.54C166.48 484.473 166.98 485.68 166.98 487.16C166.98 488.653 166.473 489.88 165.46 490.84C164.46 491.8 163.227 492.28 161.76 492.28C160.293 492.28 159.053 491.8 158.04 490.84C157.04 489.88 156.54 488.653 156.54 487.16ZM159.7 485C159.22 485.613 158.98 486.333 158.98 487.16C158.98 487.987 159.22 488.713 159.7 489.34C160.18 489.967 160.867 490.28 161.76 490.28C162.653 490.28 163.34 489.967 163.82 489.34C164.3 488.713 164.54 487.987 164.54 487.16C164.54 486.333 164.3 485.613 163.82 485C163.34 484.387 162.653 484.08 161.76 484.08C160.867 484.08 160.18 484.387 159.7 485ZM182.647 482.4V490.04H184.047V494.74H182.047V492H168.307V482.4H170.707V490.04H174.287V482.4H176.687V490.04H180.247V482.4H182.647ZM184.885 492V482.4H187.285V488.6H187.325L191.525 482.4H194.125V492H191.725V485.84H191.685L187.525 492H184.885ZM88.3576 516L94.5176 501.84H96.6976L102.798 516H99.9176L98.5976 512.76H92.4576L91.1776 516H88.3576ZM93.3176 510.6H97.7176L95.5376 504.84L93.3176 510.6ZM104.63 516V508.32H101.55V506.4H110.09V508.32H107.03V516H104.63ZM116.886 516V514.78H116.826C116.586 515.207 116.193 515.56 115.646 515.84C115.113 516.107 114.513 516.24 113.846 516.24C112.926 516.24 112.093 516 111.346 515.52C110.613 515.027 110.246 514.273 110.246 513.26C110.246 512.713 110.38 512.24 110.646 511.84C110.926 511.427 111.273 511.107 111.686 510.88C112.1 510.653 112.613 510.473 113.226 510.34C113.853 510.193 114.44 510.1 114.986 510.06C115.546 510.02 116.166 510 116.846 510V509.76C116.846 509.2 116.64 508.767 116.226 508.46C115.813 508.153 115.286 508 114.646 508C113.633 508 112.76 508.367 112.026 509.1L110.786 507.64C111.88 506.627 113.233 506.12 114.846 506.12C115.673 506.12 116.373 506.24 116.946 506.48C117.533 506.707 117.98 507.027 118.286 507.44C118.593 507.84 118.806 508.267 118.926 508.72C119.06 509.16 119.126 509.64 119.126 510.16V516H116.886ZM116.846 511.96V511.62H116.306C113.866 511.62 112.646 512.153 112.646 513.22C112.646 513.647 112.806 513.953 113.126 514.14C113.46 514.327 113.86 514.42 114.326 514.42C115.14 514.42 115.76 514.207 116.186 513.78C116.626 513.34 116.846 512.733 116.846 511.96ZM125.502 504.72C124.609 504.72 123.896 504.473 123.362 503.98C122.829 503.473 122.502 502.78 122.382 501.9L123.682 501.76C123.749 502.213 123.942 502.56 124.262 502.8C124.596 503.04 125.009 503.16 125.502 503.16C125.996 503.16 126.409 503.04 126.742 502.8C127.076 502.56 127.276 502.213 127.342 501.76L128.622 502.02C128.516 502.873 128.196 503.54 127.662 504.02C127.129 504.487 126.409 504.72 125.502 504.72ZM120.922 516V506.4H123.322V512.6H123.362L127.562 506.4H130.162V516H127.762V509.84H127.722L123.562 516H120.922ZM140.251 507.62L138.611 509.06C138.425 508.793 138.145 508.573 137.771 508.4C137.398 508.213 137.018 508.12 136.631 508.12C135.805 508.12 135.158 508.433 134.691 509.06C134.225 509.673 133.991 510.387 133.991 511.2C133.991 512.027 134.231 512.747 134.711 513.36C135.191 513.973 135.858 514.28 136.711 514.28C137.591 514.28 138.265 513.993 138.731 513.42L140.231 514.94C139.405 515.833 138.225 516.28 136.691 516.28C135.225 516.28 133.991 515.82 132.991 514.9C131.991 513.98 131.491 512.747 131.491 511.2C131.491 509.68 131.985 508.453 132.971 507.52C133.958 506.587 135.178 506.12 136.631 506.12C137.338 506.12 138.025 506.253 138.691 506.52C139.358 506.787 139.878 507.153 140.251 507.62ZM146.777 516V514.78H146.717C146.477 515.207 146.084 515.56 145.537 515.84C145.004 516.107 144.404 516.24 143.737 516.24C142.817 516.24 141.984 516 141.237 515.52C140.504 515.027 140.137 514.273 140.137 513.26C140.137 512.713 140.27 512.24 140.537 511.84C140.817 511.427 141.164 511.107 141.577 510.88C141.99 510.653 142.504 510.473 143.117 510.34C143.744 510.193 144.33 510.1 144.877 510.06C145.437 510.02 146.057 510 146.737 510V509.76C146.737 509.2 146.53 508.767 146.117 508.46C145.704 508.153 145.177 508 144.537 508C143.524 508 142.65 508.367 141.917 509.1L140.677 507.64C141.77 506.627 143.124 506.12 144.737 506.12C145.564 506.12 146.264 506.24 146.837 506.48C147.424 506.707 147.87 507.027 148.177 507.44C148.484 507.84 148.697 508.267 148.817 508.72C148.95 509.16 149.017 509.64 149.017 510.16V516H146.777ZM146.737 511.96V511.62H146.197C143.757 511.62 142.537 512.153 142.537 513.22C142.537 513.647 142.697 513.953 143.017 514.14C143.35 514.327 143.75 514.42 144.217 514.42C145.03 514.42 145.65 514.207 146.077 513.78C146.517 513.34 146.737 512.733 146.737 511.96ZM150.913 516.12C150.273 516.12 149.793 516.067 149.473 515.96L149.653 514C149.853 514.067 150.066 514.1 150.293 514.1C150.906 514.1 151.373 513.787 151.693 513.16C152.013 512.533 152.173 511.42 152.173 509.82V506.4H160.033V516H157.633V508.32H154.473V510.36C154.473 512.333 154.186 513.787 153.613 514.72C153.04 515.653 152.14 516.12 150.913 516.12Z"
      fill="#FAFAFA"
    />`,
    title: 'Проект взаимопомощи Атайсал',
    name: 'ataysal',
  },
]
</script>
<style lang="scss" scoped>
.nav {
  @apply tw-w-[83%] md2:tw-w-full tw-px-[92px] lg:tw-px-[156px];
}
</style>
