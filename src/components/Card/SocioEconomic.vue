<template>
  <h2 class="title-card">Социально-экономическое развитие</h2>
  <div class="tw-grid tw-grid-cols-6 tw-gap-5 lg:tw-gap-8.1">
    <div class="card card_lg card_deep tw-col-span-6">
      <div class="top">
        <IconCard name="suitcase" class="tw-w-full tw-h-full" />
        <div class="tw-text-t00 lg:tw-text-t01">
          Объем инвестиций
          <br />
          в основной капитал
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-text-t12 lg:tw-text-t09 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          186,67 млрд ₽
        </div>
        <div
          class="tw-text-t00 lg:tw-text-t01 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%] tw-text-green"
        >
          106,5% к АППГ
        </div>
      </div>
    </div>

    <div class="card card_base tw-col-span-2">
      <div class="top">
        <IconCard name="industry" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Индекс промышлен- <br />
          ного производства
        </div>
      </div>
      <div class="bottom">
        <div class="summ">105%</div>
      </div>
    </div>
    <div class="card card_base tw-col-span-2">
      <div class="top">
        <IconCard name="diagram-circle" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Индекс физического <br />
          объема ВРП
        </div>
      </div>
      <div class="bottom">
        <div class="summ">102,8%</div>
      </div>
    </div>
    <div class="card card_base tw-col-span-2">
      <div class="top">
        <IconCard name="wheat" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Продукция <br />
          сельского хозяйства
        </div>
      </div>
      <div class="bottom">
        <div class="summ">122 671,8</div>
        <div class="sub">млн ₽</div>
      </div>
    </div>

    <div class="card card_base tw-col-span-3">
      <div class="top">
        <IconCard name="bar" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Прирост промышленного производства
          <br />
          и физического объема ВРП
        </div>
      </div>
      <div class="bottom">
        <div class="summ">5,4%</div>
      </div>
    </div>
    <div class="card card_base tw-col-span-3">
      <div class="top">
        <IconCard name="instrument" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Объем выполненных работ <br />
          по ВД «Строительство»
        </div>
      </div>
      <div class="bottom">
        <div class="summ">218 136,3</div>
        <div class="sub">млн ₽</div>
      </div>
    </div>
    <div class="card card_lg tw-col-span-6">
      <div class="top">
        <IconCard name="shop" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Оборот малых <br />
          и средних предприятий
        </div>
      </div>
      <div class="bottom">
        <div class="tw-text-t12 lg:tw-text-t09 tw-leading-[120%]">
          372 438,97 млн ₽
        </div>
        <div
          class="tw-text-t00 lg:tw-text-t01 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%] tw-text-green"
        >
          101,63% к АППГ
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCard from '../IconCard.vue'
</script>
<style lang="scss" scoped></style>
