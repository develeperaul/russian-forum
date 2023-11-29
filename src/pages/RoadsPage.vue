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
      <Roads v-bind="{ item }" />
      <FooterNav />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import listJson from '/public/dorogi.json'
import { Road, Option } from 'src/models'

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
  protyajonnost: '47 463,77',
  asfaltobeton: '370,6',
  perehodnii: '381,3',
  proinspectorovano: '97,16',
  defects: '88,31',
} as Road
const list = listJson as Road[]
const select = ref<Option | null>(null)
const item = ref(general)
const findItem = (id: number) => list.find((item) => +item.ID === id) as Road
watch(select, (val) => {
  if (val === null) item.value = general
  else item.value = findItem(val?.id)
})
</script>
