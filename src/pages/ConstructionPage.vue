<template>
  <q-page class="tw-container content">
    <div class="content__left">
      <Map class="tw-px-[125px] lg:tw-px-[303px]" :active="select?.id" />
      <div
        class="tw-hidden lg:tw-flex tw-justify-end tw-items-center tw-absolute tw-bottom-[120px] tw-pl-[58px] tw-pr-[60px] tw-w-full"
      >
        <BaseSelect :options="municipalitets" v-model="select" />
      </div>
    </div>
    <div class="content__right tw-px-[125px] lg:tw-px-[211px]">
      <Construction v-bind="{ item }" />
      <FooterNav />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import listJson from '/public/stroit.json'
import { Stroit, Option } from 'src/models'

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
  vsego_raip: '95',
  vvedenovsrok: '38',
  vvedenovsrok_persent: '-',
  obj_s_dop: '26',
  obj_s_dop_persent: '-',
  obj_s_otst: '26',
  obj_s_otst_persent: '-',
  vivedeno: '38 356,46',
  zakontrakt: '25 337,99',
  ispolneno: '5 315,97',
} as Stroit
const list = listJson as Stroit[]
const select = ref<Option | null>(null)
const item = ref(general)
const findItem = (id: number) => list.find((item) => +item.ID === id) as Stroit
watch(select, (val) => {
  if (val === null) item.value = general
  else item.value = findItem(val?.id)
})
</script>
<style lang="scss" scoped></style>
