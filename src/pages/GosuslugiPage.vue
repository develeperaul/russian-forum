<template>
  <q-page class="tw-container content">
    <div class="content__left">
      <Map
        class="tw-mx-auto !tw-w-[536px] md2:!tw-w-[771px]"
        :active="select?.id"
      />
      <div
        class="tw-hidden lg:tw-flex tw-justify-end tw-items-center tw-absolute tw-bottom-[120px] tw-pl-[58px] tw-pr-[60px] tw-w-full"
      >
        <BaseSelect :options="municipalitets" v-model="select" />
      </div>
    </div>
    <div class="content__right tw-px-[105px] md:tw-px-[125px] lg:tw-px-[211px]">
      <Gosuslugi v-bind="{ item }" />
      <FooterNav />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import listJson from '/public/gosusl.json'
import { Gosusluga, Option } from 'src/models'

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
  kol_uslug: '183',
  kol_zayav: '76 461',
  dolya_prosroch: '5,5',
  dolya_otkaz: '22,3',
  sred_vremya: '9.4',
  fiz_lico: '86,1',
  ur_lico: '12,4',
} as Gosusluga
const list = listJson as Gosusluga[]
const select = ref<Option | null>(null)
const item = ref(general)
const findItem = (id: number) =>
  list.find((item) => +item.ID === id) as Gosusluga
watch(select, (val) => {
  if (val === null) item.value = general
  else item.value = findItem(val?.id)
})
</script>
<style lang="scss" scoped></style>
