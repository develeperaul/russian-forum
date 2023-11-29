<template>
  <h2 class="title-card">Служба 112</h2>
  <div class="tw-grid tw-grid-cols-4 tw-gap-5 lg:tw-gap-8.1">
    <div class="card card_lg card_deep tw-col-span-4">
      <div class="top">
        <IconCard name="call" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t00 lg:tw-text-t01 tw-leading-[140%]"
        >
          Всего вызовов <br />
          за отчетный период
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t15 md:tw-text-t12 md:tw-text-h00 lg:tw-text-t08 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.vizovi }}
        </div>
        <div
          class="tw-text-t05 lg:tw-text-t15 -tw-tracking-12 lg:-tw-tracking-25 tw-leading-[120%]"
        >
          ед.
        </div>
      </div>
    </div>

    <div class="card card_lg tw-col-span-4">
      <div class="top">
        <IconCard name="internet" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Всего по службам
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t15 md:tw-text-t12 lg:tw-text-t09 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.slugbi_vsegi }}
        </div>
        <div
          class="tw-text-t04 lg:tw-text-t01 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
        >
          ед.
        </div>
      </div>
    </div>
    <div class="card card_base card_red tw-col-span-1">
      <div class="top">
        <IconCard bg="red" name="fire" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03 tw-leading-[140%]">
          Вызов <br />
          службы 01
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
        >
          {{ item.slugbi01 }}
        </div>
        <div
          class="tw-text-t02 lg:tw-text-t03 -tw-tracking-6 lg:-tw-tracking-10 tw-leading-[120%]"
        >
          ед.
        </div>
      </div>
    </div>
    <div class="card card_base card_deep tw-col-span-1">
      <div class="top">
        <IconCard name="police" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03 tw-leading-[140%]">
          Вызов <br />
          службы 02
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
        >
          {{ item.slugbi02 }}
        </div>
        <div
          class="tw-text-t02 lg:tw-text-t03 -tw-tracking-6 lg:-tw-tracking-10 tw-leading-[120%]"
        >
          ед.
        </div>
      </div>
    </div>
    <div class="card card_base card_orange tw-col-span-1">
      <div bg="orange" class="top">
        <IconCard name="plus" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03 tw-leading-[140%]">
          Вызов <br />
          службы 03
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
        >
          {{ item.slugbi03 }}
        </div>
        <div
          class="tw-text-t02 lg:tw-text-t03 -tw-tracking-6 lg:-tw-tracking-10 tw-leading-[120%]"
        >
          ед.
        </div>
      </div>
    </div>
    <div class="card card_base card tw-col-span-1">
      <div class="top">
        <IconCard name="gas" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03 tw-leading-[140%]">
          Вызов <br />
          службы 04
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
        >
          {{ item.slugbi04 }}
        </div>
        <div
          class="tw-text-t02 lg:tw-text-t03 -tw-tracking-6 lg:-tw-tracking-10 tw-leading-[120%]"
        >
          ед.
        </div>
      </div>
    </div>
    <div class="card card_lg card_green tw-col-span-4">
      <div class="top">
        <IconCard bg="green" name="house" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03 tw-leading-[140%]">
          Вызов службы ЕДДС/ЖКХ
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t15 md:tw-text-t12 lg:tw-text-t09 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          {{ item.slugbieddc }}
        </div>
        <div
          class="tw-text-t04 lg:tw-text-t01 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
        >
          ед.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCard from '../IconCard.vue'
import { Service112 } from 'src/models'

const props = defineProps<{
  item: Service112
}>()
</script>
<style lang="scss" scoped></style>
