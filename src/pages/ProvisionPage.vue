<template>
  <q-page class="tw-container content">
    <div class="content__left">
      <!-- <BaseSelect :options="municipalitets" v-model="select" /> -->
      <Map
        class="tw-mx-auto !tw-w-[536px] md2:!tw-w-[771px]"
        :active="select?.id"
        :comparisionList="comparison"
      />
      <div
        class="tw-absolute tw-bottom-[80px] tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-opacity-0"
        :class="{ 'tw-opacity-100': selectControl }"
      >
        <div
          v-if="comparisonList[selectControl?.kod_name] && select === null"
          class="tool"
        >
          <div
            v-for="item in comparisonList[selectControl?.kod_name]"
            class="tw-flex tw-gap-4 tw-items-center"
          >
            <span
              class="tw-w-1.5 tw-h-1.5 tw-rounded-full"
              :style="{ background: item.fill }"
            ></span>
            <span class="tw-text-base -tw-tracking-12 tw-font-normal">
              {{ item.title }}
            </span>
          </div>
        </div>
      </div>
      <div
        class="md2:tw-hidden tw-flex tw-gap-3 tw-justify-between tw-items-center tw-absolute tw-z-10 tw-bottom-[20px] tw-pl-[24px] tw-pr-[30px] tw-w-full"
      >
        <div class="tw-flex tw-gap-3">
          <template v-if="select === null">
            <button
              v-for="item in controlList"
              @click="selectControl = item"
              class="tw-bg-blue-light tw-w-10 tw-h-10 tw-rounded-lg tw-grid tw-place-content-center"
              :style="[
                item.kod_name === selectControl?.kod_name
                  ? 'background:#1572FD'
                  : '',
              ]"
            >
              <BaseIcon :name="item.name" class="tw-w-full tw-h-full" />
            </button>
            <button
              @click="selectControl = null"
              class="tw-bg-blue-light tw-w-10 tw-h-10 tw-rounded-lg tw-grid tw-place-content-center"
            >
              <BaseIcon name="close" class="tw-w-full tw-h-full" />
            </button>
          </template>
        </div>
        <BaseSelect :options="municipalitets" v-model="select" />
      </div>
    </div>
    <div class="content__right tw-px-[105px] md:tw-px-[125px] lg:tw-px-[211px]">
      <Provision v-bind="{ item }" />
      <FooterNav />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { bexBackground } from 'quasar/wrappers'
import listJson from '/public/obespech.json'
import { Obespech, Option } from 'src/models'

const comparisonList = {
  bolnici: [
    {
      fill: '#FF5656',
      title: 'менее 40,00',
      count: [40],
    },
    {
      fill: '#FF8E4F',
      title: '40,01 — 80,00',
      count: [40, 80],
    },
    {
      fill: '#21CA63',
      title: 'больше 80,01',
      count: [80],
    },
  ],
  policliniki: [
    {
      fill: '#FF5656',
      title: 'менее 80,00',
      count: [80],
    },
    {
      fill: '#FF8E4F',
      title: '80,01 — 90,00',
      count: [80, 90],
    },
    {
      fill: '#21CA63',
      title: 'больше 90,01',
      count: [90],
    },
  ],
  detsad: [
    {
      fill: '#FF5656',
      title: 'менее 65,00',
      count: [65],
    },
    {
      fill: '#FF8E4F',
      title: '65,01 — 75,00',
      count: [65, 75],
    },
    {
      fill: '#21CA63',
      title: 'больше 75,01',
      count: [75],
    },
  ],
  school: [
    {
      fill: '#FF5656',
      title: 'менее 80,02',
      count: [80.02],
    },
    {
      fill: '#FF8E4F',
      title: '80,03 — 82,00',
      count: [80.02, 82],
    },
    {
      fill: '#21CA63',
      title: 'больше 82,01',
      count: [82],
    },
  ],
  sportplosh: [
    {
      fill: '#FF5656',
      title: 'менее 70,00',
      count: [70],
    },
    {
      fill: '#FF8E4F',
      title: '70,01 — 90',
      count: [70, 90],
    },
    {
      fill: '#21CA63',
      title: 'больше 90,01',
      count: [90],
    },
  ],
  sportzal: [
    {
      fill: '#FF5656',
      title: 'менее 70,00',
      count: [70],
    },
    {
      fill: '#FF8E4F',
      title: '70,01 — 90',
      count: [70, 90],
    },
    {
      fill: '#21CA63',
      title: 'больше 90,01',
      count: [90],
    },
  ],
  bassein: [
    {
      fill: '#FF5656',
      title: 'менее 30',
      count: [30],
    },
    {
      fill: '#FF8E4F',
      title: '30,01 — 51,00',
      count: [30, 51],
    },
    {
      fill: '#21CA63',
      title: 'больше 51,01',
      count: [51],
    },
  ],
}
const selectControl = ref<{ name: string; kod_name: string } | null>(null)
const controlList = [
  {
    name: 'hospital',
    kod_name: 'bolnici',
  },
  {
    name: 'policlinic',
    kod_name: 'policliniki',
  },
  {
    name: 'kindergartens',
    kod_name: 'detsad',
  },
  {
    name: 'school',
    kod_name: 'school',
  },
  {
    name: 'sport',
    kod_name: 'sportplosh',
  },
  {
    name: 'pools',
    kod_name: 'bassein',
  },
  {
    name: 'gym',
    kod_name: 'sportzal',
  },
]

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
const comparison = computed(() => {
  if (selectControl.value) {
    const comparisonItemList = comparisonList[selectControl.value?.kod_name]
    return list.map((item) => {
      const count = item[selectControl.value?.kod_name]
      if (Number(count.replace(',', '.')) <= comparisonItemList[0].count[0])
        return { id: +item.ID, fill: comparisonItemList[0].fill }
      if (
        Number(count.replace(',', '.')) > comparisonItemList[1].count[0] &&
        Number(count.replace(',', '.')) <= comparisonItemList[1].count[1]
      )
        return { id: +item.ID, fill: comparisonItemList[1].fill }
      if (Number(count.replace(',', '.')) > comparisonItemList[2].count[0])
        return { id: +item.ID, fill: comparisonItemList[2].fill }
    })
  }
})
const general = {
  ID: '0',
  Municipal_districts: null,
  bolnici: '38,17',
  policliniki: '135',
  detsad: '75,24',
  school: '122',
  sportplosh: '106',
  sportzal: '49,3',
  bassein: '14,91',
} as Obespech
const list = listJson as Obespech[]
const select = ref<Option | null>(null)
const item = ref(general)
const findItem = (id: number) =>
  list.find((item) => +item.ID === id) as Obespech
watch(select, (val) => {
  if (val === null) item.value = general
  else item.value = findItem(val?.id)
})
</script>
