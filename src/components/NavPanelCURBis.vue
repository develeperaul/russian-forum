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
        id="filter2_b_0_1"
        x="64.776"
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
        y="399"
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
        y="368.776"
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
        id="filter8_b_0_1"
        x="561.776"
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
        y="399"
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
        y="368.776"
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
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_1"
        x1="125"
        y1="55"
        x2="125"
        y2="103"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_0_1"
        x1="125"
        y1="326"
        x2="125"
        y2="576"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_0_1"
        x1="125"
        y1="405"
        x2="125"
        y2="453"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_0_1"
        x1="622"
        y1="0"
        x2="622"
        y2="250"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_0_1"
        x1="622"
        y1="67"
        x2="622"
        y2="115"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_0_1"
        x1="622"
        y1="326"
        x2="622"
        y2="576"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_0_1"
        x1="622"
        y1="405"
        x2="622"
        y2="453"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1AC95E" stop-opacity="0" />
        <stop offset="1" stop-color="#1AC95E" />
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
        d="M371.211 262.111V260.333H358.163L358.144 267.444C358.144 269.418 359.805 271 361.877 271H388.011C390.083 271 391.744 269.418 391.744 267.444V260.333H378.677V262.111H371.211ZM389.877 246.111H382.392V243.414C382.392 242.865 382.164 242.338 381.759 241.953L379.278 239.59C378.881 239.212 378.346 239 377.79 239H372.061C371.504 239 370.97 239.212 370.573 239.59L368.091 241.953C367.687 242.338 367.459 242.865 367.459 243.414V246.111H360.011C357.957 246.111 356.277 247.711 356.277 249.667V255C356.277 256.973 357.939 258.556 360.011 258.556H371.211V255H378.677V258.556H389.877C391.931 258.556 393.611 256.956 393.611 255V249.667C393.611 247.711 391.931 246.111 389.877 246.111ZM378.677 246.111H371.211V244.607C371.211 243.474 372.16 242.556 373.332 242.556H376.556C377.728 242.556 378.677 243.474 378.677 244.607V246.111Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M368.189 329.22V326H357.349V311.84H359.869V323.76H366.369V311.84H368.889V323.76H370.449V329.22H368.189ZM372.807 326.2C372.113 326.2 371.513 326.14 371.007 326.02L371.327 323.78C371.713 323.9 372.107 323.96 372.507 323.96C373.027 323.96 373.44 323.833 373.747 323.58C374.067 323.327 374.38 322.9 374.687 322.3L375.127 321.46L369.687 311.84H372.607L376.547 319.12L380.267 311.84H383.087L377.207 322.74C376.567 323.94 375.94 324.82 375.327 325.38C374.727 325.927 373.887 326.2 372.807 326.2ZM383.455 326V311.84H388.075C391.635 311.84 393.415 313.207 393.415 315.94C393.415 317.407 392.908 318.473 391.895 319.14C390.881 319.807 389.555 320.14 387.915 320.14H385.975V326H383.455ZM385.975 318.02H387.735C389.828 318.02 390.875 317.327 390.875 315.94C390.875 315.18 390.595 314.66 390.035 314.38C389.488 314.1 388.748 313.96 387.815 313.96H385.975V318.02ZM320.83 352.74V348.04H321.83C322.724 346.88 323.17 345.16 323.17 342.88V340.4H330.97V348.04H332.39V352.74H330.37V350H322.85V352.74H320.83ZM324.37 348.04H328.57V342.32H325.45V343.5C325.45 345.273 325.09 346.787 324.37 348.04ZM333.532 350.12C332.892 350.12 332.412 350.067 332.092 349.96L332.272 348C332.472 348.067 332.686 348.1 332.912 348.1C333.526 348.1 333.992 347.787 334.312 347.16C334.632 346.533 334.792 345.42 334.792 343.82V340.4H342.652V350H340.252V342.32H337.092V344.36C337.092 346.333 336.806 347.787 336.232 348.72C335.659 349.653 334.759 350.12 333.532 350.12ZM343.822 350L346.242 346.36C344.815 345.947 344.102 344.993 344.102 343.5C344.102 342.487 344.455 341.72 345.162 341.2C345.882 340.667 346.808 340.4 347.942 340.4H352.782V350H350.382V346.6H348.602L346.642 350H343.822ZM348.522 344.82H350.382V342.2H348.522C347.762 342.2 347.222 342.3 346.902 342.5C346.582 342.7 346.422 343.04 346.422 343.52C346.422 343.987 346.588 344.32 346.922 344.52C347.268 344.72 347.802 344.82 348.522 344.82ZM363.555 350.28C361.888 350.28 360.562 349.727 359.575 348.62C359.108 348.087 358.768 347.46 358.555 346.74C358.355 346.02 358.255 345.06 358.255 343.86C358.255 342.86 358.282 342.013 358.335 341.32C358.402 340.627 358.522 339.933 358.695 339.24C358.882 338.547 359.135 337.987 359.455 337.56C359.788 337.12 360.228 336.747 360.775 336.44C361.335 336.133 362.002 335.927 362.775 335.82L365.235 335.5C365.808 335.42 366.222 335.32 366.475 335.2C366.728 335.08 366.895 334.867 366.975 334.56L368.695 335.06C368.522 335.833 368.228 336.4 367.815 336.76C367.415 337.107 366.822 337.333 366.035 337.44L363.435 337.78C362.848 337.86 362.362 337.973 361.975 338.12C361.602 338.267 361.255 338.507 360.935 338.84C360.628 339.16 360.395 339.607 360.235 340.18C360.088 340.753 360.002 341.48 359.975 342.36H360.035C360.822 340.907 362.155 340.18 364.035 340.18C365.342 340.18 366.455 340.647 367.375 341.58C368.295 342.513 368.755 343.72 368.755 345.2C368.755 346.707 368.255 347.933 367.255 348.88C366.255 349.813 365.022 350.28 363.555 350.28ZM361.495 347.36C361.988 347.96 362.662 348.26 363.515 348.26C364.368 348.26 365.048 347.96 365.555 347.36C366.075 346.747 366.335 346.007 366.335 345.14C366.335 344.287 366.075 343.56 365.555 342.96C365.048 342.347 364.362 342.04 363.495 342.04C362.642 342.04 361.968 342.34 361.475 342.94C360.995 343.54 360.755 344.273 360.755 345.14C360.755 346.007 361.002 346.747 361.495 347.36ZM370.057 350V340.4H372.457V346.6H372.497L376.697 340.4H379.297V350H376.897V343.84H376.857L372.697 350H370.057ZM384.246 350.32C382.446 350.32 381.046 349.74 380.046 348.58L381.486 347.18C381.766 347.553 382.133 347.86 382.586 348.1C383.053 348.34 383.546 348.46 384.066 348.46C385.333 348.46 385.966 348.053 385.966 347.24C385.966 346.747 385.766 346.407 385.366 346.22C384.979 346.033 384.439 345.94 383.746 345.94H382.986V344.22H383.746C385.066 344.22 385.726 343.813 385.726 343C385.726 342.293 385.186 341.94 384.106 341.94C383.133 341.94 382.366 342.307 381.806 343.04L380.466 341.74C381.319 340.66 382.626 340.12 384.386 340.12C385.519 340.12 386.426 340.353 387.106 340.82C387.799 341.287 388.146 341.927 388.146 342.74C388.146 343.287 387.966 343.767 387.606 344.18C387.246 344.58 386.786 344.84 386.226 344.96V345C386.879 345.12 387.406 345.387 387.806 345.8C388.206 346.213 388.406 346.727 388.406 347.34C388.406 348.273 388.006 349.007 387.206 349.54C386.419 350.06 385.433 350.32 384.246 350.32ZM389.795 350V340.4H392.195V344.02H396.235V340.4H398.635V350H396.235V345.94H392.195V350H389.795ZM402.354 344.24H407.274C407.274 343.573 407.081 343.02 406.694 342.58C406.308 342.14 405.748 341.92 405.014 341.92C404.308 341.92 403.701 342.14 403.194 342.58C402.688 343.02 402.408 343.573 402.354 344.24ZM409.674 345.32C409.674 345.6 409.668 345.813 409.654 345.96H402.354C402.408 346.627 402.701 347.187 403.234 347.64C403.768 348.093 404.388 348.32 405.094 348.32C406.201 348.32 407.048 347.907 407.634 347.08L409.234 348.36C408.288 349.64 406.914 350.28 405.114 350.28C403.608 350.28 402.368 349.827 401.394 348.92C400.434 348.013 399.954 346.793 399.954 345.26C399.954 343.727 400.434 342.487 401.394 341.54C402.354 340.593 403.568 340.12 405.034 340.12C406.421 340.12 407.541 340.567 408.394 341.46C409.248 342.353 409.674 343.64 409.674 345.32ZM419.199 341.62L417.559 343.06C417.372 342.793 417.092 342.573 416.719 342.4C416.345 342.213 415.965 342.12 415.579 342.12C414.752 342.12 414.105 342.433 413.639 343.06C413.172 343.673 412.939 344.387 412.939 345.2C412.939 346.027 413.179 346.747 413.659 347.36C414.139 347.973 414.805 348.28 415.659 348.28C416.539 348.28 417.212 347.993 417.679 347.42L419.179 348.94C418.352 349.833 417.172 350.28 415.639 350.28C414.172 350.28 412.939 349.82 411.939 348.9C410.939 347.98 410.439 346.747 410.439 345.2C410.439 343.68 410.932 342.453 411.919 341.52C412.905 340.587 414.125 340.12 415.579 340.12C416.285 340.12 416.972 340.253 417.639 340.52C418.305 340.787 418.825 341.153 419.199 341.62ZM425.724 350V348.78H425.664C425.424 349.207 425.031 349.56 424.484 349.84C423.951 350.107 423.351 350.24 422.684 350.24C421.764 350.24 420.931 350 420.184 349.52C419.451 349.027 419.084 348.273 419.084 347.26C419.084 346.713 419.218 346.24 419.484 345.84C419.764 345.427 420.111 345.107 420.524 344.88C420.938 344.653 421.451 344.473 422.064 344.34C422.691 344.193 423.278 344.1 423.824 344.06C424.384 344.02 425.004 344 425.684 344V343.76C425.684 343.2 425.478 342.767 425.064 342.46C424.651 342.153 424.124 342 423.484 342C422.471 342 421.598 342.367 420.864 343.1L419.624 341.64C420.718 340.627 422.071 340.12 423.684 340.12C424.511 340.12 425.211 340.24 425.784 340.48C426.371 340.707 426.818 341.027 427.124 341.44C427.431 341.84 427.644 342.267 427.764 342.72C427.898 343.16 427.964 343.64 427.964 344.16V350H425.724ZM425.684 345.96V345.62H425.144C422.704 345.62 421.484 346.153 421.484 347.22C421.484 347.647 421.644 347.953 421.964 348.14C422.298 348.327 422.698 348.42 423.164 348.42C423.978 348.42 424.598 348.207 425.024 347.78C425.464 347.34 425.684 346.733 425.684 345.96Z"
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
          y="55"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint1_linear_0_1)"
        />
        <rect
          x="99"
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M134.753 68.3152C134.398 68.1147 133.99 68 133.556 68H116.444C115.1 68 114 69.1 114 70.4444V87.5556C114 87.9896 114.115 88.3983 114.315 88.7526L134.753 68.3152ZM116.192 89.987C116.275 89.9956 116.359 90 116.444 90H133.556C133.823 90 134.08 89.9566 134.321 89.8765L125.312 80.8672L116.192 89.987ZM135.877 88.3206C135.957 88.0797 136 87.8224 136 87.5556V70.4444C136 70.3593 135.996 70.2751 135.987 70.1921L126.868 79.3115L135.877 88.3206Z"
        fill="white"
      />
    </g>
    <path
      d="M75.6192 142V130.04H71.2792V127.84H82.4792V130.04H78.1392V142H75.6192ZM82.9323 136.24H87.8523C87.8523 135.573 87.659 135.02 87.2723 134.58C86.8857 134.14 86.3257 133.92 85.5923 133.92C84.8857 133.92 84.279 134.14 83.7723 134.58C83.2657 135.02 82.9857 135.573 82.9323 136.24ZM90.2523 137.32C90.2523 137.6 90.2457 137.813 90.2323 137.96H82.9323C82.9857 138.627 83.279 139.187 83.8123 139.64C84.3457 140.093 84.9657 140.32 85.6723 140.32C86.779 140.32 87.6257 139.907 88.2123 139.08L89.8123 140.36C88.8657 141.64 87.4923 142.28 85.6923 142.28C84.1857 142.28 82.9457 141.827 81.9723 140.92C81.0123 140.013 80.5323 138.793 80.5323 137.26C80.5323 135.727 81.0123 134.487 81.9723 133.54C82.9323 132.593 84.1457 132.12 85.6123 132.12C86.999 132.12 88.119 132.567 88.9723 133.46C89.8257 134.353 90.2523 135.64 90.2523 137.32ZM91.5767 132.4H93.8767V133.74H93.9367C94.2167 133.3 94.6367 132.92 95.1967 132.6C95.7701 132.28 96.4567 132.12 97.2567 132.12C98.6167 132.12 99.7301 132.6 100.597 133.56C101.477 134.52 101.917 135.72 101.917 137.16C101.917 138.6 101.483 139.813 100.617 140.8C99.7634 141.787 98.6234 142.28 97.1967 142.28C96.5301 142.28 95.9101 142.14 95.3367 141.86C94.7634 141.58 94.3234 141.2 94.0167 140.72H93.9767V146.8H91.5767V132.4ZM98.7367 139.34C99.2301 138.713 99.4767 137.987 99.4767 137.16C99.4767 136.333 99.2301 135.613 98.7367 135C98.2567 134.387 97.5834 134.08 96.7167 134.08C95.8767 134.08 95.1967 134.4 94.6767 135.04C94.1567 135.68 93.8967 136.4 93.8967 137.2C93.8967 138 94.1567 138.713 94.6767 139.34C95.1967 139.967 95.8767 140.28 96.7167 140.28C97.5834 140.28 98.2567 139.967 98.7367 139.34ZM103.233 132.4H105.533V133.74H105.593C105.873 133.3 106.293 132.92 106.853 132.6C107.426 132.28 108.113 132.12 108.913 132.12C110.273 132.12 111.386 132.6 112.253 133.56C113.133 134.52 113.573 135.72 113.573 137.16C113.573 138.6 113.14 139.813 112.273 140.8C111.42 141.787 110.28 142.28 108.853 142.28C108.186 142.28 107.566 142.14 106.993 141.86C106.42 141.58 105.98 141.2 105.673 140.72H105.633V146.8H103.233V132.4ZM110.393 139.34C110.886 138.713 111.133 137.987 111.133 137.16C111.133 136.333 110.886 135.613 110.393 135C109.913 134.387 109.24 134.08 108.373 134.08C107.533 134.08 106.853 134.4 106.333 135.04C105.813 135.68 105.553 136.4 105.553 137.2C105.553 138 105.813 138.713 106.333 139.34C106.853 139.967 107.533 140.28 108.373 140.28C109.24 140.28 109.913 139.967 110.393 139.34ZM114.889 142V132.4H117.289V138.6H117.329L121.529 132.4H124.129V142H121.729V135.84H121.689L117.529 142H114.889ZM128.058 142V134.32H124.978V132.4H133.518V134.32H130.458V142H128.058ZM133.56 137.16C133.56 135.68 134.06 134.473 135.06 133.54C136.06 132.593 137.3 132.12 138.78 132.12C140.26 132.12 141.5 132.593 142.5 133.54C143.5 134.473 144 135.68 144 137.16C144 138.653 143.493 139.88 142.48 140.84C141.48 141.8 140.246 142.28 138.78 142.28C137.313 142.28 136.073 141.8 135.06 140.84C134.06 139.88 133.56 138.653 133.56 137.16ZM136.72 135C136.24 135.613 136 136.333 136 137.16C136 137.987 136.24 138.713 136.72 139.34C137.2 139.967 137.886 140.28 138.78 140.28C139.673 140.28 140.36 139.967 140.84 139.34C141.32 138.713 141.56 137.987 141.56 137.16C141.56 136.333 141.32 135.613 140.84 135C140.36 134.387 139.673 134.08 138.78 134.08C137.886 134.08 137.2 134.387 136.72 135ZM145.327 132.4H147.627V133.74H147.687C147.967 133.3 148.387 132.92 148.947 132.6C149.52 132.28 150.207 132.12 151.007 132.12C152.367 132.12 153.48 132.6 154.347 133.56C155.227 134.52 155.667 135.72 155.667 137.16C155.667 138.6 155.233 139.813 154.367 140.8C153.513 141.787 152.373 142.28 150.947 142.28C150.28 142.28 149.66 142.14 149.087 141.86C148.513 141.58 148.073 141.2 147.767 140.72H147.727V146.8H145.327V132.4ZM152.487 139.34C152.98 138.713 153.227 137.987 153.227 137.16C153.227 136.333 152.98 135.613 152.487 135C152.007 134.387 151.333 134.08 150.467 134.08C149.627 134.08 148.947 134.4 148.427 135.04C147.907 135.68 147.647 136.4 147.647 137.2C147.647 138 147.907 138.713 148.427 139.34C148.947 139.967 149.627 140.28 150.467 140.28C151.333 140.28 152.007 139.967 152.487 139.34ZM156.983 142V132.4H159.383V138.6H159.423L163.623 132.4H166.223V142H163.823V135.84H163.783L159.623 142H156.983ZM168.112 142V132.4H170.512V138.6H170.552L174.752 132.4H177.352V142H174.952V135.84H174.912L170.752 142H168.112ZM55.4425 161.16C55.4425 159.68 55.9425 158.473 56.9425 157.54C57.9425 156.593 59.1825 156.12 60.6625 156.12C62.1425 156.12 63.3825 156.593 64.3825 157.54C65.3825 158.473 65.8825 159.68 65.8825 161.16C65.8825 162.653 65.3758 163.88 64.3625 164.84C63.3625 165.8 62.1292 166.28 60.6625 166.28C59.1958 166.28 57.9558 165.8 56.9425 164.84C55.9425 163.88 55.4425 162.653 55.4425 161.16ZM58.6025 159C58.1225 159.613 57.8825 160.333 57.8825 161.16C57.8825 161.987 58.1225 162.713 58.6025 163.34C59.0825 163.967 59.7692 164.28 60.6625 164.28C61.5558 164.28 62.2425 163.967 62.7225 163.34C63.2025 162.713 63.4425 161.987 63.4425 161.16C63.4425 160.333 63.2025 159.613 62.7225 159C62.2425 158.387 61.5558 158.08 60.6625 158.08C59.7692 158.08 59.0825 158.387 58.6025 159ZM67.2095 166V156.4H76.0495V166H73.6495V158.32H69.6095V166H67.2095ZM79.7683 160.24H84.6883C84.6883 159.573 84.4949 159.02 84.1083 158.58C83.7216 158.14 83.1616 157.92 82.4283 157.92C81.7216 157.92 81.1149 158.14 80.6083 158.58C80.1016 159.02 79.8216 159.573 79.7683 160.24ZM87.0883 161.32C87.0883 161.6 87.0816 161.813 87.0683 161.96H79.7683C79.8216 162.627 80.1149 163.187 80.6483 163.64C81.1816 164.093 81.8016 164.32 82.5083 164.32C83.6149 164.32 84.4616 163.907 85.0483 163.08L86.6483 164.36C85.7016 165.64 84.3283 166.28 82.5283 166.28C81.0216 166.28 79.7816 165.827 78.8083 164.92C77.8483 164.013 77.3683 162.793 77.3683 161.26C77.3683 159.727 77.8483 158.487 78.8083 157.54C79.7683 156.593 80.9816 156.12 82.4483 156.12C83.8349 156.12 84.9549 156.567 85.8083 157.46C86.6616 158.353 87.0883 159.64 87.0883 161.32ZM88.4127 156.4H90.7127V157.74H90.7727C91.0527 157.3 91.4727 156.92 92.0327 156.6C92.606 156.28 93.2927 156.12 94.0927 156.12C95.4527 156.12 96.566 156.6 97.4327 157.56C98.3127 158.52 98.7527 159.72 98.7527 161.16C98.7527 162.6 98.3193 163.813 97.4527 164.8C96.5993 165.787 95.4593 166.28 94.0327 166.28C93.366 166.28 92.746 166.14 92.1727 165.86C91.5993 165.58 91.1593 165.2 90.8527 164.72H90.8127V170.8H88.4127V156.4ZM95.5727 163.34C96.066 162.713 96.3127 161.987 96.3127 161.16C96.3127 160.333 96.066 159.613 95.5727 159C95.0927 158.387 94.4193 158.08 93.5527 158.08C92.7127 158.08 92.0327 158.4 91.5127 159.04C90.9927 159.68 90.7327 160.4 90.7327 161.2C90.7327 162 90.9927 162.713 91.5127 163.34C92.0327 163.967 92.7127 164.28 93.5527 164.28C94.4193 164.28 95.0927 163.967 95.5727 163.34ZM101.909 160.24H106.829C106.829 159.573 106.636 159.02 106.249 158.58C105.862 158.14 105.302 157.92 104.569 157.92C103.862 157.92 103.256 158.14 102.749 158.58C102.242 159.02 101.962 159.573 101.909 160.24ZM109.229 161.32C109.229 161.6 109.222 161.813 109.209 161.96H101.909C101.962 162.627 102.256 163.187 102.789 163.64C103.322 164.093 103.942 164.32 104.649 164.32C105.756 164.32 106.602 163.907 107.189 163.08L108.789 164.36C107.842 165.64 106.469 166.28 104.669 166.28C103.162 166.28 101.922 165.827 100.949 164.92C99.9889 164.013 99.5089 162.793 99.5089 161.26C99.5089 159.727 99.9889 158.487 100.949 157.54C101.909 156.593 103.122 156.12 104.589 156.12C105.976 156.12 107.096 156.567 107.949 157.46C108.802 158.353 109.229 159.64 109.229 161.32ZM108.486 166L112.646 160.96L108.826 156.4H111.786L115.166 160.78H115.226V156.4H117.626V160.78H117.686L121.086 156.4H124.046L120.206 160.96L124.366 166H121.406L117.686 161.36H117.626V166H115.226V161.36H115.166L111.466 166H108.486ZM130.67 166V164.78H130.61C130.37 165.207 129.976 165.56 129.43 165.84C128.896 166.107 128.296 166.24 127.63 166.24C126.71 166.24 125.876 166 125.13 165.52C124.396 165.027 124.03 164.273 124.03 163.26C124.03 162.713 124.163 162.24 124.43 161.84C124.71 161.427 125.056 161.107 125.47 160.88C125.883 160.653 126.396 160.473 127.01 160.34C127.636 160.193 128.223 160.1 128.77 160.06C129.33 160.02 129.95 160 130.63 160V159.76C130.63 159.2 130.423 158.767 130.01 158.46C129.596 158.153 129.07 158 128.43 158C127.416 158 126.543 158.367 125.81 159.1L124.57 157.64C125.663 156.627 127.016 156.12 128.63 156.12C129.456 156.12 130.156 156.24 130.73 156.48C131.316 156.707 131.763 157.027 132.07 157.44C132.376 157.84 132.59 158.267 132.71 158.72C132.843 159.16 132.91 159.64 132.91 160.16V166H130.67ZM130.63 161.96V161.62H130.09C127.65 161.62 126.43 162.153 126.43 163.22C126.43 163.647 126.59 163.953 126.91 164.14C127.243 164.327 127.643 164.42 128.11 164.42C128.923 164.42 129.543 164.207 129.97 163.78C130.41 163.34 130.63 162.733 130.63 161.96ZM143.826 166.3C142.519 166.3 141.399 165.9 140.466 165.1C139.546 164.3 138.999 163.247 138.826 161.94H137.106V166H134.706V156.4H137.106V160.08H138.866C139.106 158.893 139.679 157.94 140.586 157.22C141.492 156.487 142.572 156.12 143.826 156.12C145.292 156.12 146.512 156.593 147.486 157.54C148.459 158.487 148.946 159.707 148.946 161.2C148.946 162.707 148.459 163.933 147.486 164.88C146.512 165.827 145.292 166.3 143.826 166.3ZM143.826 164.26C144.652 164.26 145.306 163.973 145.786 163.4C146.266 162.827 146.506 162.093 146.506 161.2C146.506 160.307 146.266 159.573 145.786 159C145.306 158.413 144.652 158.12 143.826 158.12C143.012 158.12 142.366 158.413 141.886 159C141.406 159.573 141.166 160.307 141.166 161.2C141.166 162.093 141.406 162.827 141.886 163.4C142.379 163.973 143.026 164.26 143.826 164.26ZM164.608 156.4V164.04H166.008V168.74H164.008V166H150.268V156.4H152.668V164.04H156.248V156.4H158.648V164.04H162.208V156.4H164.608ZM168.686 160.24H173.606C173.606 159.573 173.413 159.02 173.026 158.58C172.64 158.14 172.08 157.92 171.346 157.92C170.64 157.92 170.033 158.14 169.526 158.58C169.02 159.02 168.74 159.573 168.686 160.24ZM176.006 161.32C176.006 161.6 176 161.813 175.986 161.96H168.686C168.74 162.627 169.033 163.187 169.566 163.64C170.1 164.093 170.72 164.32 171.426 164.32C172.533 164.32 173.38 163.907 173.966 163.08L175.566 164.36C174.62 165.64 173.246 166.28 171.446 166.28C169.94 166.28 168.7 165.827 167.726 164.92C166.766 164.013 166.286 162.793 166.286 161.26C166.286 159.727 166.766 158.487 167.726 157.54C168.686 156.593 169.9 156.12 171.366 156.12C172.753 156.12 173.873 156.567 174.726 157.46C175.58 158.353 176.006 159.64 176.006 161.32ZM177.331 166V156.4H184.071V158.32H179.731V166H177.331ZM184.11 161.16C184.11 159.68 184.61 158.473 185.61 157.54C186.61 156.593 187.85 156.12 189.33 156.12C190.81 156.12 192.05 156.593 193.05 157.54C194.05 158.473 194.55 159.68 194.55 161.16C194.55 162.653 194.044 163.88 193.03 164.84C192.03 165.8 190.797 166.28 189.33 166.28C187.864 166.28 186.624 165.8 185.61 164.84C184.61 163.88 184.11 162.653 184.11 161.16ZM187.27 159C186.79 159.613 186.55 160.333 186.55 161.16C186.55 161.987 186.79 162.713 187.27 163.34C187.75 163.967 188.437 164.28 189.33 164.28C190.224 164.28 190.91 163.967 191.39 163.34C191.87 162.713 192.11 161.987 192.11 161.16C192.11 160.333 191.87 159.613 191.39 159C190.91 158.387 190.224 158.08 189.33 158.08C188.437 158.08 187.75 158.387 187.27 159ZM85.4283 180.4H87.7283V181.74H87.7883C88.0683 181.3 88.4883 180.92 89.0483 180.6C89.6216 180.28 90.3083 180.12 91.1083 180.12C92.4683 180.12 93.5816 180.6 94.4483 181.56C95.3283 182.52 95.7683 183.72 95.7683 185.16C95.7683 186.6 95.3349 187.813 94.4683 188.8C93.6149 189.787 92.4749 190.28 91.0483 190.28C90.3816 190.28 89.7616 190.14 89.1883 189.86C88.6149 189.58 88.1749 189.2 87.8683 188.72H87.8283V194.8H85.4283V180.4ZM92.5883 187.34C93.0816 186.713 93.3283 185.987 93.3283 185.16C93.3283 184.333 93.0816 183.613 92.5883 183C92.1083 182.387 91.4349 182.08 90.5683 182.08C89.7283 182.08 89.0483 182.4 88.5283 183.04C88.0083 183.68 87.7483 184.4 87.7483 185.2C87.7483 186 88.0083 186.713 88.5283 187.34C89.0483 187.967 89.7283 188.28 90.5683 188.28C91.4349 188.28 92.1083 187.967 92.5883 187.34ZM103.045 190V188.78H102.985C102.745 189.207 102.351 189.56 101.805 189.84C101.271 190.107 100.671 190.24 100.005 190.24C99.0845 190.24 98.2512 190 97.5045 189.52C96.7712 189.027 96.4045 188.273 96.4045 187.26C96.4045 186.713 96.5379 186.24 96.8045 185.84C97.0845 185.427 97.4312 185.107 97.8445 184.88C98.2579 184.653 98.7712 184.473 99.3845 184.34C100.011 184.193 100.598 184.1 101.145 184.06C101.705 184.02 102.325 184 103.005 184V183.76C103.005 183.2 102.798 182.767 102.385 182.46C101.971 182.153 101.445 182 100.805 182C99.7912 182 98.9179 182.367 98.1845 183.1L96.9445 181.64C98.0379 180.627 99.3912 180.12 101.005 180.12C101.831 180.12 102.531 180.24 103.105 180.48C103.691 180.707 104.138 181.027 104.445 181.44C104.751 181.84 104.965 182.267 105.085 182.72C105.218 183.16 105.285 183.64 105.285 184.16V190H103.045ZM103.005 185.96V185.62H102.465C100.025 185.62 98.8045 186.153 98.8045 187.22C98.8045 187.647 98.9645 187.953 99.2845 188.14C99.6179 188.327 100.018 188.42 100.485 188.42C101.298 188.42 101.918 188.207 102.345 187.78C102.785 187.34 103.005 186.733 103.005 185.96ZM110.141 190.32C108.341 190.32 106.941 189.74 105.941 188.58L107.381 187.18C107.661 187.553 108.027 187.86 108.481 188.1C108.947 188.34 109.441 188.46 109.961 188.46C111.227 188.46 111.861 188.053 111.861 187.24C111.861 186.747 111.661 186.407 111.261 186.22C110.874 186.033 110.334 185.94 109.641 185.94H108.881V184.22H109.641C110.961 184.22 111.621 183.813 111.621 183C111.621 182.293 111.081 181.94 110.001 181.94C109.027 181.94 108.261 182.307 107.701 183.04L106.361 181.74C107.214 180.66 108.521 180.12 110.281 180.12C111.414 180.12 112.321 180.353 113.001 180.82C113.694 181.287 114.041 181.927 114.041 182.74C114.041 183.287 113.861 183.767 113.501 184.18C113.141 184.58 112.681 184.84 112.121 184.96V185C112.774 185.12 113.301 185.387 113.701 185.8C114.101 186.213 114.301 186.727 114.301 187.34C114.301 188.273 113.901 189.007 113.101 189.54C112.314 190.06 111.327 190.32 110.141 190.32ZM115.69 190V180.4H120.65C121.223 180.4 121.737 180.46 122.19 180.58C122.657 180.7 123.077 180.96 123.45 181.36C123.823 181.747 124.01 182.26 124.01 182.9C124.01 183.393 123.857 183.827 123.55 184.2C123.257 184.56 122.87 184.8 122.39 184.92V184.96C122.99 185.053 123.477 185.307 123.85 185.72C124.237 186.12 124.43 186.64 124.43 187.28C124.43 188.133 124.097 188.8 123.43 189.28C122.763 189.76 121.883 190 120.79 190H115.69ZM118.09 188.28H120.35C121.457 188.28 122.01 187.893 122.01 187.12C122.01 186.347 121.477 185.96 120.41 185.96H118.09V188.28ZM118.09 184.24H120.37C121.25 184.24 121.69 183.887 121.69 183.18C121.69 182.46 121.19 182.1 120.19 182.1H118.09V184.24ZM125.745 190V180.4H128.145V186.6H128.185L132.385 180.4H134.985V190H132.585V183.84H132.545L128.385 190H125.745ZM138.914 190V182.32H135.834V180.4H144.374V182.32H141.314V190H138.914ZM145.21 190V180.4H147.61V186.6H147.65L151.85 180.4H154.45V190H152.05V183.84H152.01L147.85 190H145.21ZM155.618 190L158.038 186.36C156.612 185.947 155.898 184.993 155.898 183.5C155.898 182.487 156.252 181.72 156.958 181.2C157.678 180.667 158.605 180.4 159.738 180.4H164.578V190H162.178V186.6H160.398L158.438 190H155.618ZM160.318 184.82H162.178V182.2H160.318C159.558 182.2 159.018 182.3 158.698 182.5C158.378 182.7 158.218 183.04 158.218 183.52C158.218 183.987 158.385 184.32 158.718 184.52C159.065 184.72 159.598 184.82 160.318 184.82Z"
      fill="#FAFAFA"
    />`,
    title: 'Территории опережающего развития',
    name: 'terr',
  },

  {
    id: 3,
    path: `<g filter="url(#filter6_b_0_1)">
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
          y="67"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint5_linear_0_1)"
        />
        <rect
          x="596"
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
        d="M621.467 99.7587L620.23 97.4984H623.783L622.546 99.7587L623.84 104H635C635 96.4127 626.34 98.5841 625.255 95.3333V93.1683C625.743 92.927 627.133 91.2635 627.279 89.9683C627.659 89.9365 628.262 89.5873 628.44 88.1968C628.535 87.4476 628.154 87.0286 627.926 86.9016C627.926 86.9016 628.497 85.8159 628.497 84.5016C628.497 81.873 627.463 79.6254 625.248 79.6254C625.248 79.6254 624.481 78 622 78C617.407 78 615.503 80.946 615.503 84.5016C615.503 85.6952 616.074 86.9016 616.074 86.9016C615.846 87.0349 615.465 87.454 615.56 88.1968C615.738 89.5873 616.341 89.9365 616.721 89.9683C616.867 91.2635 618.263 92.927 618.745 93.1683V95.3333C617.66 98.5841 609 96.419 609 104H620.16L621.467 99.7587Z"
        fill="#FAFAFA"
      />
      <path
        d="M626.879 97.4984H624.17V95.3333H625.134C625.547 95.3333 625.921 95.5683 626.105 95.9365L626.879 97.4984Z"
        fill="#FAFAFA"
      />
      <path
        d="M617.134 97.4984H619.843V95.3333H618.878C618.466 95.3333 618.092 95.5683 617.908 95.9365L617.134 97.4984Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M560.368 157.22V151.76H561.568C563.008 150.12 563.728 147.36 563.728 143.48V139.84H573.628V151.76H575.208V157.22H572.948V154H562.628V157.22H560.368ZM564.408 151.76H571.108V142.04H566.168V143.74C566.168 147.393 565.581 150.067 564.408 151.76ZM577.934 148.24H582.854C582.854 147.573 582.661 147.02 582.274 146.58C581.888 146.14 581.328 145.92 580.594 145.92C579.888 145.92 579.281 146.14 578.774 146.58C578.268 147.02 577.988 147.573 577.934 148.24ZM585.254 149.32C585.254 149.6 585.248 149.813 585.234 149.96H577.934C577.988 150.627 578.281 151.187 578.814 151.64C579.348 152.093 579.968 152.32 580.674 152.32C581.781 152.32 582.628 151.907 583.214 151.08L584.814 152.36C583.868 153.64 582.494 154.28 580.694 154.28C579.188 154.28 577.948 153.827 576.974 152.92C576.014 152.013 575.534 150.793 575.534 149.26C575.534 147.727 576.014 146.487 576.974 145.54C577.934 144.593 579.148 144.12 580.614 144.12C582.001 144.12 583.121 144.567 583.974 145.46C584.828 146.353 585.254 147.64 585.254 149.32ZM585.859 154L588.279 150.36C586.852 149.947 586.139 148.993 586.139 147.5C586.139 146.487 586.492 145.72 587.199 145.2C587.919 144.667 588.845 144.4 589.979 144.4H594.819V154H592.419V150.6H590.639L588.679 154H585.859ZM590.559 148.82H592.419V146.2H590.559C589.799 146.2 589.259 146.3 588.939 146.5C588.619 146.7 588.459 147.04 588.459 147.52C588.459 147.987 588.625 148.32 588.959 148.52C589.305 148.72 589.839 148.82 590.559 148.82ZM598.732 154V146.32H595.652V144.4H604.192V146.32H601.132V154H598.732ZM606.634 148.24H611.554C611.554 147.573 611.36 147.02 610.974 146.58C610.587 146.14 610.027 145.92 609.294 145.92C608.587 145.92 607.98 146.14 607.474 146.58C606.967 147.02 606.687 147.573 606.634 148.24ZM613.954 149.32C613.954 149.6 613.947 149.813 613.934 149.96H606.634C606.687 150.627 606.98 151.187 607.514 151.64C608.047 152.093 608.667 152.32 609.374 152.32C610.48 152.32 611.327 151.907 611.914 151.08L613.514 152.36C612.567 153.64 611.194 154.28 609.394 154.28C607.887 154.28 606.647 153.827 605.674 152.92C604.714 152.013 604.234 150.793 604.234 149.26C604.234 147.727 604.714 146.487 605.674 145.54C606.634 144.593 607.847 144.12 609.314 144.12C610.7 144.12 611.82 144.567 612.674 145.46C613.527 146.353 613.954 147.64 613.954 149.32ZM615.378 154.12C614.738 154.12 614.258 154.067 613.938 153.96L614.118 152C614.318 152.067 614.531 152.1 614.758 152.1C615.371 152.1 615.838 151.787 616.158 151.16C616.478 150.533 616.638 149.42 616.638 147.82V144.4H624.498V154H622.098V146.32H618.938V148.36C618.938 150.333 618.651 151.787 618.078 152.72C617.505 153.653 616.605 154.12 615.378 154.12ZM626.387 154V144.4H628.787V147.76H630.867C632.054 147.76 632.994 148.02 633.687 148.54C634.394 149.047 634.747 149.82 634.747 150.86C634.747 151.873 634.394 152.653 633.687 153.2C632.981 153.733 632.041 154 630.867 154H626.387ZM628.787 152.18H630.247C630.967 152.18 631.494 152.08 631.827 151.88C632.174 151.68 632.347 151.347 632.347 150.88C632.347 150.4 632.187 150.06 631.867 149.86C631.547 149.66 631.007 149.56 630.247 149.56H628.787V152.18ZM635.68 154V144.4H638.08V148.02H642.12V144.4H644.52V154H642.12V149.94H638.08V154H635.68ZM645.839 149.16C645.839 147.68 646.339 146.473 647.339 145.54C648.339 144.593 649.579 144.12 651.059 144.12C652.539 144.12 653.779 144.593 654.779 145.54C655.779 146.473 656.279 147.68 656.279 149.16C656.279 150.653 655.772 151.88 654.759 152.84C653.759 153.8 652.526 154.28 651.059 154.28C649.592 154.28 648.352 153.8 647.339 152.84C646.339 151.88 645.839 150.653 645.839 149.16ZM648.999 147C648.519 147.613 648.279 148.333 648.279 149.16C648.279 149.987 648.519 150.713 648.999 151.34C649.479 151.967 650.166 152.28 651.059 152.28C651.952 152.28 652.639 151.967 653.119 151.34C653.599 150.713 653.839 149.987 653.839 149.16C653.839 148.333 653.599 147.613 653.119 147C652.639 146.387 651.952 146.08 651.059 146.08C650.166 146.08 649.479 146.387 648.999 147ZM665.806 145.62L664.166 147.06C663.979 146.793 663.699 146.573 663.326 146.4C662.953 146.213 662.573 146.12 662.186 146.12C661.359 146.12 660.713 146.433 660.246 147.06C659.779 147.673 659.546 148.387 659.546 149.2C659.546 150.027 659.786 150.747 660.266 151.36C660.746 151.973 661.413 152.28 662.266 152.28C663.146 152.28 663.819 151.993 664.286 151.42L665.786 152.94C664.959 153.833 663.779 154.28 662.246 154.28C660.779 154.28 659.546 153.82 658.546 152.9C657.546 151.98 657.046 150.747 657.046 149.2C657.046 147.68 657.539 146.453 658.526 145.52C659.513 144.587 660.733 144.12 662.186 144.12C662.893 144.12 663.579 144.253 664.246 144.52C664.913 144.787 665.433 145.153 665.806 145.62ZM668.763 154V146.32H665.683V144.4H674.223V146.32H671.163V154H668.763ZM675.059 154V144.4H677.459V147.76H679.539C680.726 147.76 681.666 148.02 682.359 148.54C683.066 149.047 683.419 149.82 683.419 150.86C683.419 151.873 683.066 152.653 682.359 153.2C681.652 153.733 680.712 154 679.539 154H675.059ZM677.459 152.18H678.919C679.639 152.18 680.166 152.08 680.499 151.88C680.846 151.68 681.019 151.347 681.019 150.88C681.019 150.4 680.859 150.06 680.539 149.86C680.219 149.66 679.679 149.56 678.919 149.56H677.459V152.18ZM551.949 178.28C550.283 178.28 548.956 177.727 547.969 176.62C547.503 176.087 547.163 175.46 546.949 174.74C546.749 174.02 546.649 173.06 546.649 171.86C546.649 170.86 546.676 170.013 546.729 169.32C546.796 168.627 546.916 167.933 547.089 167.24C547.276 166.547 547.529 165.987 547.849 165.56C548.183 165.12 548.623 164.747 549.169 164.44C549.729 164.133 550.396 163.927 551.169 163.82L553.629 163.5C554.203 163.42 554.616 163.32 554.869 163.2C555.123 163.08 555.289 162.867 555.369 162.56L557.089 163.06C556.916 163.833 556.623 164.4 556.209 164.76C555.809 165.107 555.216 165.333 554.429 165.44L551.829 165.78C551.243 165.86 550.756 165.973 550.369 166.12C549.996 166.267 549.649 166.507 549.329 166.84C549.023 167.16 548.789 167.607 548.629 168.18C548.483 168.753 548.396 169.48 548.369 170.36H548.429C549.216 168.907 550.549 168.18 552.429 168.18C553.736 168.18 554.849 168.647 555.769 169.58C556.689 170.513 557.149 171.72 557.149 173.2C557.149 174.707 556.649 175.933 555.649 176.88C554.649 177.813 553.416 178.28 551.949 178.28ZM549.889 175.36C550.383 175.96 551.056 176.26 551.909 176.26C552.763 176.26 553.443 175.96 553.949 175.36C554.469 174.747 554.729 174.007 554.729 173.14C554.729 172.287 554.469 171.56 553.949 170.96C553.443 170.347 552.756 170.04 551.889 170.04C551.036 170.04 550.363 170.34 549.869 170.94C549.389 171.54 549.149 172.273 549.149 173.14C549.149 174.007 549.396 174.747 549.889 175.36ZM558.452 178V168.4H560.852V174.6H560.892L565.092 168.4H567.692V178H565.292V171.84H565.252L561.092 178H558.452ZM572.641 178.32C570.841 178.32 569.441 177.74 568.441 176.58L569.881 175.18C570.161 175.553 570.527 175.86 570.981 176.1C571.447 176.34 571.941 176.46 572.461 176.46C573.727 176.46 574.361 176.053 574.361 175.24C574.361 174.747 574.161 174.407 573.761 174.22C573.374 174.033 572.834 173.94 572.141 173.94H571.381V172.22H572.141C573.461 172.22 574.121 171.813 574.121 171C574.121 170.293 573.581 169.94 572.501 169.94C571.527 169.94 570.761 170.307 570.201 171.04L568.861 169.74C569.714 168.66 571.021 168.12 572.781 168.12C573.914 168.12 574.821 168.353 575.501 168.82C576.194 169.287 576.541 169.927 576.541 170.74C576.541 171.287 576.361 171.767 576.001 172.18C575.641 172.58 575.181 172.84 574.621 172.96V173C575.274 173.12 575.801 173.387 576.201 173.8C576.601 174.213 576.801 174.727 576.801 175.34C576.801 176.273 576.401 177.007 575.601 177.54C574.814 178.06 573.827 178.32 572.641 178.32ZM578.19 178V168.4H580.59V172.02H584.63V168.4H587.03V178H584.63V173.94H580.59V178H578.19ZM590.749 172.24H595.669C595.669 171.573 595.475 171.02 595.089 170.58C594.702 170.14 594.142 169.92 593.409 169.92C592.702 169.92 592.095 170.14 591.589 170.58C591.082 171.02 590.802 171.573 590.749 172.24ZM598.069 173.32C598.069 173.6 598.062 173.813 598.049 173.96H590.749C590.802 174.627 591.095 175.187 591.629 175.64C592.162 176.093 592.782 176.32 593.489 176.32C594.595 176.32 595.442 175.907 596.029 175.08L597.629 176.36C596.682 177.64 595.309 178.28 593.509 178.28C592.002 178.28 590.762 177.827 589.789 176.92C588.829 176.013 588.349 174.793 588.349 173.26C588.349 171.727 588.829 170.487 589.789 169.54C590.749 168.593 591.962 168.12 593.429 168.12C594.815 168.12 595.935 168.567 596.789 169.46C597.642 170.353 598.069 171.64 598.069 173.32ZM607.593 169.62L605.953 171.06C605.766 170.793 605.486 170.573 605.113 170.4C604.74 170.213 604.36 170.12 603.973 170.12C603.146 170.12 602.5 170.433 602.033 171.06C601.566 171.673 601.333 172.387 601.333 173.2C601.333 174.027 601.573 174.747 602.053 175.36C602.533 175.973 603.2 176.28 604.053 176.28C604.933 176.28 605.606 175.993 606.073 175.42L607.573 176.94C606.746 177.833 605.566 178.28 604.033 178.28C602.566 178.28 601.333 177.82 600.333 176.9C599.333 175.98 598.833 174.747 598.833 173.2C598.833 171.68 599.326 170.453 600.313 169.52C601.3 168.587 602.52 168.12 603.973 168.12C604.68 168.12 605.366 168.253 606.033 168.52C606.7 168.787 607.22 169.153 607.593 169.62ZM612.319 172.06V174.1H607.519V172.06H612.319ZM613.565 178V168.4H615.965V176.04H619.545V168.4H621.945V176.04H625.505V168.4H627.905V178H613.565ZM631.749 172.24H636.669C636.669 171.573 636.475 171.02 636.089 170.58C635.702 170.14 635.142 169.92 634.409 169.92C633.702 169.92 633.095 170.14 632.589 170.58C632.082 171.02 631.802 171.573 631.749 172.24ZM639.069 173.32C639.069 173.6 639.062 173.813 639.049 173.96H631.749C631.802 174.627 632.095 175.187 632.629 175.64C633.162 176.093 633.782 176.32 634.489 176.32C635.595 176.32 636.442 175.907 637.029 175.08L638.629 176.36C637.682 177.64 636.309 178.28 634.509 178.28C633.002 178.28 631.762 177.827 630.789 176.92C629.829 176.013 629.349 174.793 629.349 173.26C629.349 171.727 629.829 170.487 630.789 169.54C631.749 168.593 632.962 168.12 634.429 168.12C635.815 168.12 636.935 168.567 637.789 169.46C638.642 170.353 639.069 171.64 639.069 173.32ZM640.393 168.4H642.693V169.74H642.753C643.033 169.3 643.453 168.92 644.013 168.6C644.586 168.28 645.273 168.12 646.073 168.12C647.433 168.12 648.546 168.6 649.413 169.56C650.293 170.52 650.733 171.72 650.733 173.16C650.733 174.6 650.3 175.813 649.433 176.8C648.58 177.787 647.44 178.28 646.013 178.28C645.346 178.28 644.726 178.14 644.153 177.86C643.58 177.58 643.14 177.2 642.833 176.72H642.793V182.8H640.393V168.4ZM647.553 175.34C648.046 174.713 648.293 173.987 648.293 173.16C648.293 172.333 648.046 171.613 647.553 171C647.073 170.387 646.4 170.08 645.533 170.08C644.693 170.08 644.013 170.4 643.493 171.04C642.973 171.68 642.713 172.4 642.713 173.2C642.713 174 642.973 174.713 643.493 175.34C644.013 175.967 644.693 176.28 645.533 176.28C646.4 176.28 647.073 175.967 647.553 175.34ZM652.049 178V168.4H654.449V174.6H654.489L658.689 168.4H661.289V178H658.889V171.84H658.849L654.689 178H652.049ZM670.638 176.34C671.652 176.327 672.432 176.04 672.978 175.48C673.538 174.92 673.818 174.167 673.818 173.22C673.818 172.287 673.538 171.547 672.978 171C672.418 170.453 671.638 170.173 670.638 170.16V176.34ZM670.638 182.8H668.238V178.32C666.492 178.307 665.118 177.833 664.118 176.9C663.118 175.967 662.618 174.747 662.618 173.24C662.618 171.68 663.112 170.453 664.098 169.56C665.085 168.667 666.465 168.207 668.238 168.18V162.88H670.638V168.18C672.412 168.207 673.792 168.667 674.778 169.56C675.765 170.453 676.258 171.68 676.258 173.24C676.258 174.747 675.758 175.967 674.758 176.9C673.758 177.833 672.385 178.307 670.638 178.32V182.8ZM668.238 176.34V170.16C667.238 170.173 666.458 170.453 665.898 171C665.338 171.547 665.058 172.287 665.058 173.22C665.058 174.167 665.332 174.92 665.878 175.48C666.438 176.04 667.225 176.327 668.238 176.34ZM677.009 173.16C677.009 171.68 677.509 170.473 678.509 169.54C679.509 168.593 680.749 168.12 682.229 168.12C683.709 168.12 684.949 168.593 685.949 169.54C686.949 170.473 687.449 171.68 687.449 173.16C687.449 174.653 686.942 175.88 685.929 176.84C684.929 177.8 683.696 178.28 682.229 178.28C680.762 178.28 679.522 177.8 678.509 176.84C677.509 175.88 677.009 174.653 677.009 173.16ZM680.169 171C679.689 171.613 679.449 172.333 679.449 173.16C679.449 173.987 679.689 174.713 680.169 175.34C680.649 175.967 681.336 176.28 682.229 176.28C683.122 176.28 683.809 175.967 684.289 175.34C684.769 174.713 685.009 173.987 685.009 173.16C685.009 172.333 684.769 171.613 684.289 171C683.809 170.387 683.122 170.08 682.229 170.08C681.336 170.08 680.649 170.387 680.169 171ZM688.776 178V168.4H693.736C694.309 168.4 694.823 168.46 695.276 168.58C695.743 168.7 696.163 168.96 696.536 169.36C696.909 169.747 697.096 170.26 697.096 170.9C697.096 171.393 696.943 171.827 696.636 172.2C696.343 172.56 695.956 172.8 695.476 172.92V172.96C696.076 173.053 696.563 173.307 696.936 173.72C697.323 174.12 697.516 174.64 697.516 175.28C697.516 176.133 697.183 176.8 696.516 177.28C695.849 177.76 694.969 178 693.876 178H688.776ZM691.176 176.28H693.436C694.543 176.28 695.096 175.893 695.096 175.12C695.096 174.347 694.563 173.96 693.496 173.96H691.176V176.28ZM691.176 172.24H693.456C694.336 172.24 694.776 171.887 694.776 171.18C694.776 170.46 694.276 170.1 693.276 170.1H691.176V172.24Z"
      fill="#FAFAFA"
    />`,
    title: 'Деятельность бизнес-шерифов',
    name: 'sopr',
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
          y="405"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint7_linear_0_1)"
        />
        <rect
          x="596"
          y="403"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M632.4 422.053H627.2V419.526C627.2 418.124 626.043 417 624.6 417H619.4C617.957 417 616.8 418.124 616.8 419.526V422.053H611.6C610.157 422.053 609.013 423.177 609.013 424.579L609 438.474C609 439.876 610.157 441 611.6 441H632.4C633.843 441 635 439.876 635 438.474V424.579C635 423.177 633.843 422.053 632.4 422.053ZM624.6 422.053H619.4V419.526H624.6V422.053Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M569.447 492V477.84H571.967V488.2H572.027L578.667 477.84H581.387V492H578.867V481.72H578.827L572.207 492H569.447ZM583.385 492V482.4H585.785V486.02H589.825V482.4H592.225V492H589.825V487.94H585.785V492H583.385ZM594.104 492V482.4H599.064C599.637 482.4 600.151 482.46 600.604 482.58C601.071 482.7 601.491 482.96 601.864 483.36C602.237 483.747 602.424 484.26 602.424 484.9C602.424 485.393 602.271 485.827 601.964 486.2C601.671 486.56 601.284 486.8 600.804 486.92V486.96C601.404 487.053 601.891 487.307 602.264 487.72C602.651 488.12 602.844 488.64 602.844 489.28C602.844 490.133 602.511 490.8 601.844 491.28C601.177 491.76 600.297 492 599.204 492H594.104ZM596.504 490.28H598.764C599.871 490.28 600.424 489.893 600.424 489.12C600.424 488.347 599.891 487.96 598.824 487.96H596.504V490.28ZM596.504 486.24H598.784C599.664 486.24 600.104 485.887 600.104 485.18C600.104 484.46 599.604 484.1 598.604 484.1H596.504V486.24ZM605.999 486.24H610.919C610.919 485.573 610.725 485.02 610.339 484.58C609.952 484.14 609.392 483.92 608.659 483.92C607.952 483.92 607.345 484.14 606.839 484.58C606.332 485.02 606.052 485.573 605.999 486.24ZM613.319 487.32C613.319 487.6 613.312 487.813 613.299 487.96H605.999C606.052 488.627 606.345 489.187 606.879 489.64C607.412 490.093 608.032 490.32 608.739 490.32C609.845 490.32 610.692 489.907 611.279 489.08L612.879 490.36C611.932 491.64 610.559 492.28 608.759 492.28C607.252 492.28 606.012 491.827 605.039 490.92C604.079 490.013 603.599 488.793 603.599 487.26C603.599 485.727 604.079 484.487 605.039 483.54C605.999 482.593 607.212 482.12 608.679 482.12C610.065 482.12 611.185 482.567 612.039 483.46C612.892 484.353 613.319 485.64 613.319 487.32ZM622.843 483.62L621.203 485.06C621.016 484.793 620.736 484.573 620.363 484.4C619.99 484.213 619.61 484.12 619.223 484.12C618.396 484.12 617.75 484.433 617.283 485.06C616.816 485.673 616.583 486.387 616.583 487.2C616.583 488.027 616.823 488.747 617.303 489.36C617.783 489.973 618.45 490.28 619.303 490.28C620.183 490.28 620.856 489.993 621.323 489.42L622.823 490.94C621.996 491.833 620.816 492.28 619.283 492.28C617.816 492.28 616.583 491.82 615.583 490.9C614.583 489.98 614.083 488.747 614.083 487.2C614.083 485.68 614.576 484.453 615.563 483.52C616.55 482.587 617.77 482.12 619.223 482.12C619.93 482.12 620.616 482.253 621.283 482.52C621.95 482.787 622.47 483.153 622.843 483.62ZM625.8 492V484.32H622.72V482.4H631.26V484.32H628.2V492H625.8ZM632.096 492V482.4H634.496V488.6H634.536L638.736 482.4H641.336V492H638.936V485.84H638.896L634.736 492H632.096ZM651.465 494.74V492H643.225V482.4H645.625V490.04H649.665V482.4H652.065V490.04H653.465V494.74H651.465ZM654.295 492V482.4H656.695V488.6H656.735L660.935 482.4H663.535V492H661.135V485.84H661.095L656.935 492H654.295ZM665.424 492V482.4H667.824V488.6H667.864L672.064 482.4H674.664V492H672.264V485.84H672.224L668.064 492H665.424Z"
      fill="#FAFAFA"
    />`,
    title: 'Инвестиции',
    name: 'invest',
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
          y="405"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint3_linear_0_1)"
        />
        <rect
          x="99"
          y="403"
          width="52"
          height="52"
          rx="14"
          stroke="white"
          stroke-opacity="0.318"
          stroke-width="4"
        />
      </g>
      <path
        d="M119.4 425.219L120.542 418H114.6L112.117 424.188C112.04 424.407 112 424.636 112 424.875C112 426.393 113.661 427.625 115.714 427.625C117.606 427.625 119.17 426.575 119.4 425.219ZM125 427.625C127.051 427.625 128.714 426.393 128.714 424.875C128.714 424.819 128.709 424.762 128.706 424.709L127.971 418H122.029L121.292 424.703C121.289 424.76 121.286 424.816 121.286 424.875C121.286 426.393 122.949 427.625 125 427.625ZM132.222 429.063V434.5H117.778V429.071C117.145 429.289 116.449 429.413 115.714 429.413C115.432 429.413 115.159 429.381 114.889 429.345V438.075C114.889 439.134 115.797 440 116.908 440H133.089C134.201 440 135.111 439.132 135.111 438.075V429.346C134.838 429.386 134.563 429.409 134.286 429.414C133.582 429.413 132.883 429.295 132.222 429.063ZM137.884 424.188L135.399 418H129.458L130.599 425.208C130.821 426.569 132.385 427.625 134.286 427.625C136.337 427.625 138 426.393 138 424.875C138 424.636 137.96 424.407 137.884 424.188Z"
        fill="#FAFAFA"
      />
    </g>
    <path
      d="M116.204 479.64L114.284 481.16C113.937 480.68 113.464 480.32 112.864 480.08C112.277 479.827 111.677 479.7 111.064 479.7C109.624 479.7 108.444 480.193 107.524 481.18C106.617 482.167 106.164 483.4 106.164 484.88C106.164 486.427 106.597 487.687 107.464 488.66C108.344 489.62 109.511 490.1 110.964 490.1C112.457 490.1 113.604 489.553 114.404 488.46L116.424 489.88C115.104 491.533 113.277 492.36 110.944 492.36C108.731 492.36 106.917 491.667 105.504 490.28C104.091 488.88 103.384 487.08 103.384 484.88C103.384 482.653 104.104 480.867 105.544 479.52C106.997 478.16 108.837 477.48 111.064 477.48C112.051 477.48 113.017 477.667 113.964 478.04C114.924 478.4 115.671 478.933 116.204 479.64ZM116.99 492V477.84H120.93L124.61 487.9H124.67L128.31 477.84H132.27V492H129.77V480.62H129.73L125.43 492H123.67L119.43 480.62H119.39V492H116.99ZM134.388 492V477.84H145.928V492H143.408V480.04H136.908V492H134.388Z"
      fill="#FAFAFA"
    />`,
    title: 'СМП',
    name: 'smp',
  },
]
</script>
<style lang="scss" scoped>
.nav {
  @apply tw-w-[83%] md2:tw-w-full tw-px-[92px] lg:tw-px-[156px];
}
</style>
