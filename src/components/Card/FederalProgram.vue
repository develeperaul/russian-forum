<template>
  <div class="tw-flex">
    <h2 class="title-card tw-flex tw-gap-8.1">
      Федеральные программы
      <span
        class="tw-text-t03 -tw-tracking-10 tw-leading-[120%] tw-text-blue-light"
        >(II кв. 2023г.)</span
      >
    </h2>
  </div>
  <div class="tw-grid tw-grid-cols-6 tw-gap-5 lg:tw-gap-8.1">
    <div class="card card_lg card_deep tw-col-span-6">
      <div class="top">
        <IconCard name="list" class="tw-w-full tw-h-full" />
        <div class="tw-text-t00 lg:tw-text-t01">Количество заявок</div>
      </div>
      <div class="bottom">
        <div class="summ">90</div>
        <div class="sub">74 181,9 млн ₽</div>
      </div>
    </div>

    <div class="card card_base tw-col-span-3">
      <div class="top">
        <IconCard name="check-list" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Одобрено <br />
          заявок
        </div>
      </div>
      <div class="bottom">
        <div class="summ">68</div>
        <div class="sub">48 095,6 млн ₽</div>
      </div>
    </div>
    <div class="card card_base card_orange tw-col-span-3">
      <div class="top">
        <IconCard bg="orange" name="hourglass" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Заявок на <br />
          рассмотрении
        </div>
      </div>
      <div class="bottom">
        <div class="summ">6</div>
        <div class="sub">5 771 млн ₽</div>
      </div>
    </div>
    <!-- <div class="card card_base card_deep tw-col-span-2">
      <div class="top">
        <IconCard name="rocket" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Заявок на
          <br />
          стадии подготовки
        </div>
      </div>
      <div class="bottom">
        <div class="summ">2 342</div>
        <div class="sub">45 226 342 млн ₽</div>
      </div>
    </div> -->
    <div class="card card_lg card_deep tw-col-span-6">
      <div class="top">
        <IconCard name="monets" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Финансирование Федеральных
          <br />
          проектов. Предусмотрено
        </div>
      </div>
      <div class="bottom">
        <div class="tw-text-t12 lg:tw-text-t09">113 687,4</div>
        <div class="sub">млн ₽</div>
      </div>
    </div>
    <div class="card card_base card_orange tw-col-span-3">
      <div class="top">
        <IconCard bg="orange" name="hand-circle" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Поступило. Данные за 2 квартал 2023
        </div>
      </div>
      <div class="bottom">
        <div class="summ">57 908,4 млн ₽</div>
      </div>
    </div>
    <div class="card card_base card_green tw-col-span-3">
      <div class="top">
        <IconCard bg="green" name="check-list" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Освоено. Данные за 2 квартал 2023
        </div>
      </div>
      <div class="bottom">
        <div class="summ">56 961,5 млн ₽</div>
        <div class="sub">50,10 %</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCard from '../IconCard.vue'
</script>
<style lang="scss" scoped></style>
