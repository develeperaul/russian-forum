<template>
  <h2 class="title-card">Госуслуги</h2>
  <div class="tw-grid tw-grid-cols-4 tw-gap-5 lg:tw-gap-8.1">
    <div class="card card_lg card_deep tw-col-span-4">
      <div class="top">
        <IconCard name="gear" class="tw-w-full tw-h-full" />
        <div class="tw-text-t00 lg:tw-text-t01 tw-leading-[140%]">
          Количество <br />
          оказываемых услуг
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-h01 md:tw-text-h00 lg:tw-text-t08 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[140%]"
        >
          {{ item.kol_uslug }}
        </div>
        <div
          class="tw-text-t05 lg:tw-text-t15 -tw-tracking-12 lg:-tw-tracking-25 tw-leading-[120%]"
        >
          ед.
        </div>
      </div>
    </div>

    <div class="card card_base tw-col-span-1">
      <div class="top">
        <IconCard name="list-pen" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Количество <be /> заявлений
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t05 md:tw-text-h01 lg:tw-text-title01 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.kol_zayav }}
        </div>
        <div
          class="tw-text-base md:tw-text-base md:tw-text-t02 lg:tw-text-t03 -tw-tracking-6 lg:-tw-tracking-10 tw-leading-[120%]"
        >
          ед.
        </div>
      </div>
    </div>
    <div class="card card_base card_orange tw-col-span-1">
      <div class="top">
        <IconCard bg="orange" name="time-warning" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Доля <br />
          просрочки
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t05 md:tw-text-h01 lg:tw-text-title01 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.dolya_prosroch }}%
        </div>
      </div>
    </div>
    <div class="card card_base card_red tw-col-span-1">
      <div class="top">
        <IconCard bg="red" name="close" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Доля <br />
          отказов
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t05 md:tw-text-h01 lg:tw-text-title01 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.dolya_otkaz }}%
        </div>
      </div>
    </div>
    <div class="card card_base card_green tw-col-span-1">
      <div class="top">
        <IconCard bg="green" name="time" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Ср. время <br />
          обработки
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t05 md:tw-text-h01 lg:tw-text-title01 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.sred_vremya }}
        </div>
        <div
          class="tw-text-base md:tw-text-base md:tw-text-t02 lg:tw-text-t03 -tw-tracking-6 lg:-tw-tracking-10 tw-leading-[120%]"
        >
          дня
        </div>
      </div>
    </div>

    <div class="card card_base tw-col-span-2">
      <div class="top tw-items-center">
        <IconCard name="user" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Получатель физическое лицо
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t06 tmd:w-text-t12 lg:tw-text-t09 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
        >
          {{ item.fiz_lico }}%
        </div>
      </div>
    </div>
    <div class="card card_base tw-col-span-2">
      <div class="top tw-items-center">
        <IconCard name="group" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Получатель юридическое лицо
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t06 md:tw-text-t12 lg:tw-text-t09 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
        >
          {{ item.ur_lico }}%
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCard from '../IconCard.vue'
import { Gosusluga } from 'src/models'

const props = defineProps<{
  item: Gosusluga
}>()
</script>
<style lang="scss" scoped></style>
