<template>
  <h2 class="title-card">Дороги</h2>
  <div class="tw-grid tw-grid-cols-2 tw-gap-5 lg:tw-gap-8.1">
    <div class="card card_lg card_deep tw-col-span-2">
      <div class="top">
        <IconCard name="ab" class="tw-w-full tw-h-full" />
        <div class="tw-text-t00 lg:tw-text-t01 tw-leading-[140%]">
          Протяженность дорог
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-h00 lg:tw-text-t08 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.protyajonnost }}
        </div>
        <div
          class="tw-text-t05 lg:tw-text-t15 -tw-tracking-12 lg:-tw-tracking-25 tw-leading-[120%]"
        >
          км
        </div>
      </div>
    </div>

    <div class="card card_base tw-col-span-1 tw-grid">
      <div class="top tw-items-center">
        <IconCard name="road" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03 tw-leading-[140%]">
          Асфальтобетон
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t12 lg:tw-text-t09 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.asfaltobeton }}
        </div>
        <div
          class="tw-text-t02 lg:tw-text-t03 -tw-tracking-6 lg:-tw-tracking-10 tw-leading-[140%]"
        >
          км
        </div>
      </div>
    </div>
    <div class="card card_base tw-col-span-1 tw-grid">
      <div class="top tw-items-center">
        <IconCard name="road2" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03 tw-leading-[140%]">
          Переходный тип покрытия
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t12 lg:tw-text-t09 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.perehodnii }}
        </div>
        <div
          class="tw-text-t02 lg:tw-text-t03 -tw-tracking-6 lg:-tw-tracking-10 tw-leading-[140%]"
        >
          км
        </div>
      </div>
    </div>
    <div class="card card_base card_orange tw-col-span-1 tw-grid">
      <div class="top tw-items-center">
        <IconCard bg="orange" name="inspector" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03 tw-leading-[140%]">
          Проинспектировано <br />
          дорог
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t12 lg:tw-text-t09 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.proinspectorovano }}%
        </div>
      </div>
    </div>
    <div class="card card_base card_green tw-col-span-1 tw-grid">
      <div class="top tw-items-center">
        <IconCard bg="green" name="user-work" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03 tw-leading-[140%]">
          Доля устраненных дефектов <br />
          дорог асфальтобетонного типа
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t12 lg:tw-text-t09 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.defects }}%
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCard from '../IconCard.vue'
import { Road } from 'src/models'

const props = defineProps<{
  item: Road
}>()
</script>
<style lang="scss" scoped></style>
