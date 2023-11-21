<template>
  <h2 class="title-card">Обеспеченность социальными объектами</h2>
  <div class="tw-grid tw-grid-cols-6 tw-gap-5 lg:tw-gap-8.1">
    <div class="card card_base card_red tw-col-span-3">
      <div class="top">
        <IconCard bg="red" name="hand-circle" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Больницы. <br />
          Количество коек
        </div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.bolnici }}%</div>
      </div>
    </div>
    <div class="card card_base card_green tw-col-span-3">
      <div class="top">
        <IconCard bg="green" name="check-list" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Поликлиники. Количество
          <br />
          посещений в смену
        </div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.policliniki }}</div>
        <div class="sub">млн ₽</div>
      </div>
    </div>

    <div class="card card_base card_red tw-col-span-2">
      <div class="top">
        <IconCard bg="red" name="check-list" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Детские сады <br />
          (мест на 100 детей)
        </div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.detsad }}%</div>
      </div>
    </div>
    <div class="card card_base card_green tw-col-span-2">
      <div class="top">
        <IconCard bg="green" name="hourglass" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Школы. <br />
          Количество мест
        </div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.school }}%</div>
      </div>
    </div>
    <div class="card card_base card_green tw-col-span-2">
      <div class="top">
        <IconCard bg="green" name="rocket" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Спорт. площадки. <br />
          Обеспеченность
        </div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.sportplosh }}</div>
        <div class="sub">млн ₽</div>
      </div>
    </div>

    <div class="card card_base card_red tw-col-span-3">
      <div class="top">
        <IconCard bg="red" name="hand-circle" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">Бассейны. Обеспеченность</div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.bassein }}%</div>
      </div>
    </div>
    <div class="card card_base card_green tw-col-span-3">
      <div class="top">
        <IconCard bg="green" name="check-list" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">Спортзалы. Обеспеченность</div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.sportzal }}</div>
        <div class="sub">млн ₽</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCard from '../IconCard.vue'

import { Obespech } from 'src/models'

const props = defineProps<{
  item: Obespech
}>()
</script>
<style lang="scss" scoped></style>
