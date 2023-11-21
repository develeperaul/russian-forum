<template>
  <div ref="selectEl" class="select" :class="{ active: isOpen }">
    <div class="select__head" @click="isOpen = !isOpen">
      <span> {{ select === null ? 'Выбрать район' : select.raion }} </span>
      <BaseIcon name="forward" class="icon tw-w-12 tw-h-12" />
    </div>
    <Transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <div class="select__body" v-if="isOpen">
        <div class="select__body-wrapper">
          <div class="child">
            <div v-for="item in options" @click="chooseItem(item)">
              {{ item.raion === null ? 'Все районы' : item.raion }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
interface Option {
  id: number
  raion: string | null
}
const props = defineProps<{
  options: Option[]
  modelValue: Option | undefined
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: Option | null): void
}>()
const isOpen = ref(false)
const selectEl = ref<HTMLElement>()
const select = ref<Option | null>(null)
const watchTarget = (e: Event) => {
  if (selectEl.value && !e.composedPath().includes(selectEl.value)) {
    isOpen.value = false
    window.removeEventListener('click', watchTarget)
  }
}

const chooseItem = (item: Option) => {
  if (item.raion) {
    select.value = item
  } else {
    select.value = null
  }
  isOpen.value = false
}
watch(isOpen, (val) => {
  if (val) window.addEventListener('click', watchTarget)
})

watch(select, (val) => {
  emit('update:modelValue', val)
})
</script>
<style lang="scss" scoped>
.select {
  @apply tw-relative tw-z-10 tw-text-t06 tw-leading-[140%] -tw-tracking-25 tw-font-normal tw-w-[520px];
  &__head {
    @apply tw-p-8 tw-flex tw-gap-10 tw-justify-between tw-items-center;
    border-radius: 1.25rem;
    border: 6px solid rgba(255, 255, 255, 0.32);

    background: rgba(12, 114, 234, 0.16);

    backdrop-filter: blur(13.594499588012695px);
    .icon {
      @apply tw-transition-transform tw-duration-200 tw-ease-in-out;
    }
  }
  &__body {
    @apply -tw-top-4   tw-rounded-[1.25rem] tw-bg-blue-light tw-z-10;
    @apply tw-transform -tw-translate-y-full;
    @apply tw-overflow-hidden tw-absolute tw-w-full tw-z-10  tw-transform;
    @apply tw-transition-all tw-duration-200 tw-ease-in;
    max-height: 531px;
    backdrop-filter: blur(13.594499588012695px);
    &-wrapper {
      @apply tw-border-[24px] tw-border-[transparent];
    }
    .child {
      @apply tw-overflow-auto tw-grid tw-gap-3;
      max-height: calc(531px - 48px);
      min-height: 0;
      & > * {
        @apply tw-p-6 tw-rounded-2xl tw-text-t05;
        @apply tw-transition-all tw-duration-150 tw-ease-in;
        &:hover {
          @apply tw-bg-blue;
        }
      }
      &::-webkit-scrollbar {
        width: 2px;
        height: 2px;
      }

      &::-webkit-scrollbar-track {
        background-color: #494d71;
      }

      &::-webkit-scrollbar-thumb {
        background: #bec3ff;
        border-radius: 50px;
      }
    }
  }
  &.active .icon {
    @apply tw-transform -tw-rotate-90;
  }
}
</style>
