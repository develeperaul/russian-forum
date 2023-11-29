<template>
  <q-page class="tw-container content">
    <div class="content__left">
      <Map
        class="tw-px-[40px] md:tw-px-[125px] lg:tw-px-[303px]"
        :active="select?.id"
      />
      <div
        class="tw-hidden lg:tw-flex tw-justify-end tw-items-center tw-absolute tw-bottom-[120px] tw-pl-[58px] tw-pr-[60px] tw-w-full"
      >
        <BaseSelect :options="municipalitets" v-model="select" />
      </div>
    </div>
    <div class="content__right tw-px-[40px] md:tw-px-[125px] lg:tw-px-[211px]">
      <Service v-bind="{ item }" />
      <FooterNav />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import listJson from '/public/112.json'
import { Service112, Option } from 'src/models'

const municipalitets = computed(() => {
  const options = list.map((item) => {
    return { id: +item.ID, raion: item.Municipal_districts }
  })
  return [
    {
      id: 0,
      raion: null,
    },
    ...options,
  ]
})

const general = {
  ID: '0',
  Municipal_districts: null,
  vizovi: '168 824',
  slugbi_vsegi: '74 703',
  slugbi01: '1 095',
  slugbi02: '15 475',
  slugbi03: '36 925',
  slugbi04: '1 898',
  slugbieddc: '19 223',
} as Service112
const list = listJson as Service112[]
const select = ref<Option | null>(null)
const item = ref(general)
const findItem = (id: number) =>
  list.find((item) => +item.ID === id) as Service112
watch(select, (val) => {
  if (val === null) item.value = general
  else item.value = findItem(val?.id)
})
</script>
<style lang="scss" scoped></style>
