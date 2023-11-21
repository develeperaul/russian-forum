<template>
  <div class="card-icon" :class="[`card-icon--bg_${bg}`, `card-icon_${size}`]">
    <BaseIcon :name="name" v-bind="$attrs" />
  </div>
</template>
<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(
  defineProps<{
    name: string
    bg?: string
    size?: string
  }>(),
  {
    bg: 'deep',
    size: 'base',
  }
)
</script>
<style lang="scss" scoped>
.card-icon {
  @apply tw-rounded-[10px] tw-grid tw-place-content-center;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.09))
    drop-shadow(0px 13px 8px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 24px 10px rgba(0, 0, 0, 0.01))
    drop-shadow(0px 37px 10px rgba(0, 0, 0, 0));
  &_base {
    @apply tw-h-12 tw-w-12 lg:tw-w-[5.0625rem] lg:tw-h-[5.0625rem];
  }
  &_lg {
    @apply tw-w-15 tw-h-15 lg:tw-w-[6.32813rem] lg:tw-h-[6.32813rem];
  }
  &--bg {
    &_deep {
      @apply tw-bg-deep;
    }
    &_orange {
      @apply tw-bg-orange;
    }
    &_red {
      @apply tw-bg-red;
    }
    &_green {
      @apply tw-bg-green;
    }
    &_blue {
      @apply tw-bg-blue;
    }
  }
}
</style>
