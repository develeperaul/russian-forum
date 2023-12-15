<template>
  <div class="tw-absolute tw-z-10 tw-w-full">
    <div class="tw-container">
      <div class="content md:tw-pl-0 tw-pt-10 lg:tw-px-15 lg:tw-pt-15">
        <div>
          <router-link
            to="/"
            class="tw-cursor-pointer tw-hidden lg:tw-flex lg:tw-gap-[118px]"
          >
            <img src="~/assets/images/rb-logo.svg" alt="" class="logo" />
            <img src="~/assets/images/cur-logo.svg" alt="" class="logo" />
          </router-link>
        </div>
        <div class="tw-flex tw-px-10">
          <router-link
            to="/"
            class="tw-cursor-pointer tw-flex tw-gap-[64px] lg:tw-hidden"
          >
            <img src="~/assets/images/rb-logo.svg" alt="" class="logo" />
            <img src="~/assets/images/cur-logo.svg" alt="" class="logo" />
          </router-link>
          <div class="tw-ml-auto tw-mr-0">
            <div
              class="tw-font-bold lg:tw-text-t01 lg:tw-leading-[120%] -tw-tracking-6 lg:-tw-tracking-10 tw-flex tw-items-center tw-gap-2 tw-mb-2"
            >
              <div class="tw-capitalize">{{ date.format('dddd') }}</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="4" fill="#4EDC6D" />
              </svg>

              <div>{{ date.format('HH : mm') }}</div>
            </div>
            <div
              class="tw-text-t02 lg:tw-text-t03 lg:tw-leading-[120%] tw-leading-6"
            >
              {{ date.format('D MMMM YYYY' + ' г.') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as dayjs from 'dayjs'
import 'dayjs/locale/ru'
import weekday from 'dayjs/plugin/weekday'
dayjs.extend(weekday)

const date = ref(dayjs().locale('ru'))

const start = () => {
  if (dayjs().format('s') === '0') date.value = dayjs().locale('ru')
}
onMounted(() => setInterval(start, 1000))
</script>
<style lang="scss" scoped>
.logo {
  @apply tw-h-[70px] lg:tw-h-[118px];
}
</style>
