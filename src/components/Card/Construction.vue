<template>
  <h2 class="title-card">Строительство</h2>
  <div class="tw-grid tw-grid-cols-6 tw-gap-5 lg:tw-gap-8.1">
    <div class="card card_lg card_deep tw-col-span-6">
      <div class="top">
        <IconCard name="city" class="tw-w-full tw-h-full" />
        <div class="tw-text-t00 lg:tw-text-t01">Количество заявок</div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.vsego_raip }}</div>
        <div class="sub">ед.</div>
      </div>
    </div>

    <div class="card card_base card_deep tw-col-span-2">
      <div class="top">
        <IconCard name="city" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Одобрено <br />
          заявок
        </div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.vvedenovsrok }}</div>
        <div class="sub" v-if="item.vvedenovsrok_persent !== '-'">
          {{ item.vvedenovsrok_persent }} %
        </div>
      </div>
    </div>
    <div class="card card_base card_green tw-col-span-2">
      <div class="top">
        <IconCard bg="green" name="city" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Объектов с допус-<br />
          тимым отклонением<br />
          от сроков
        </div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.obj_s_dop }}</div>
        <div class="sub" v-if="item.obj_s_dop_persent !== '-'">
          {{ item.obj_s_dop_persent }} %
        </div>
      </div>
    </div>
    <div class="card card_base card_orange tw-col-span-2">
      <div class="top">
        <IconCard bg="orange" name="city" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Объектов<br />
          с отставанием<br />
          от сроков
        </div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.obj_s_otst }}</div>
        <div class="sub" v-if="item.obj_s_otst_persent !== '-'">
          {{ item.obj_s_otst_persent }} %
        </div>
      </div>
    </div>
    <div class="card card_lg card_red tw-col-span-6">
      <div class="top">
        <IconCard bg="red" name="hand-circle" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">Выделено средств</div>
      </div>
      <div class="bottom">
        <div class="tw-text-t12 lg:tw-text-t09">{{ item.vivedeno }}</div>
        <div class="sub">млн ₽</div>
      </div>
    </div>
    <div class="card card_base tw-col-span-3">
      <div class="top">
        <IconCard name="list-pen" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">Законтрактовано</div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.zakontrakt }}</div>
        <div class="sub">млн ₽</div>
      </div>
    </div>
    <div class="card card_base tw-col-span-3">
      <div class="top">
        <IconCard name="check-list" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">Исполнено</div>
      </div>
      <div class="bottom">
        <div class="summ">{{ item.ispolneno }}</div>
        <div class="sub">млн ₽</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCard from '../IconCard.vue'
import { Stroit } from 'src/models'

const props = defineProps<{
  item: Stroit
}>()
</script>
<style lang="scss" scoped></style>
