<template>
  <div
    class="tw-hidden lg:tw-flex lg:tw-justify-between tw-absolute tw-z-10 tw-bottom-[120px] tw-left-0 tw-w-full tw-px-[125px] lg:tw-px-[211px]"
  >
    <button
      @click="$router.go(-1)"
      class="tw-w-[120px] tw-h-[120px] tw-rounded-[10px] tw-bg-deep tw-grid tw-place-content-center"
    >
      <BaseIcon name="back-line" class="tw-w-full tw-h-full" />
    </button>
    <a
      href="http://192.168.88.250:3000/?page=0"
      class="tw-w-[120px] tw-h-[120px] tw-rounded-[10px] tw-bg-green tw-grid tw-place-content-center"
    >
      <BaseIcon name="home" class="tw-w-full tw-h-full" />
    </a>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
