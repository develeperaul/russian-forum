<template>
  <q-page class="tw-container content">
    <div class="content__left">
      <Map class="tw-mx-auto !tw-w-[536px] md2:!tw-w-[771px]" />
    </div>
    <div class="content__right tw-px-[105px] md:tw-px-[125px] lg:tw-px-[211px]">
      <NavPanel />
      <div
        class="tw-flex tw-justify-between md2:tw-hidden tw-absolute tw-z-10 tw-bottom-[20px] tw-left-0 tw-w-full tw-px-[40px] lg:tw-px-[211px]"
      >
        <div></div>
        <a
          href="http://192.168.88.250:3000/?page=0"
          class="tw-w-[48px] tw-h-[48px] tw-rounded-[10px] tw-bg-green tw-grid tw-place-content-center"
        >
          <BaseIcon name="home" class="tw-w-full tw-h-full" />
        </a>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
