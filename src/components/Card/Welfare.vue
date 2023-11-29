<template>
  <h2 class="title-card">Благосостояние населения</h2>
  <div class="tw-grid tw-grid-cols-6 tw-gap-5 lg:tw-gap-8.1">
    <div class="card card_lg card_deep tw-col-span-6">
      <div class="top">
        <IconCard name="men" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Реальная заработная плата
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-font-ibm tw-text-t06 md:tw-text-t12 lg:tw-text-t09 -tw-tracking-25 lg:-tw-tracking-42 tw-leading-[120%]"
        >
          112,2% к АППГ
        </div>
        <!-- <div
          class="tw-text-t00 lg:tw-text-t13 -tw-tracking-12 lg:-tw-tracking-21 tw-text-green tw-leading-[140%]"
        >
          112,2% к АППГ
        </div> -->
      </div>
    </div>
    <div class="tw-col-span-6 tw-grid tw-grid-cols-8 tw-gap-5 lg:tw-gap-8.1">
      <div class="card card_base tw-col-span-3">
        <div class="top">
          <IconCard name="group" class="tw-w-full tw-h-full" />
          <div
            class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
          >
            Среднегодовая <br />
            численность занятых
          </div>
        </div>
        <div class="bottom">
          <div
            class="tw-font-ibm tw-text-t04 md:tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
          >
            1 650,9 тыс.
          </div>
          <div
            class="tw-text-t18 md:tw-text-base lg:tw-text-t00 -tw-tracking-6 lg:-tw-tracking-10 tw-text-green tw-leading-[140%]"
          >
            103,9% к АППГ
          </div>
        </div>
      </div>
      <div class="card card_base tw-col-span-3">
        <div class="top">
          <IconCard name="suitacase-close" class="tw-w-full tw-h-full" />
          <div
            class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
          >
            Численность <br />
            безработных
          </div>
        </div>
        <div class="bottom">
          <div
            class="tw-font-ibm tw-text-t04 md:tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
          >
            13,79 тыс. чел
          </div>
        </div>
      </div>
      <div class="card card_base card_red tw-col-span-2">
        <div class="top">
          <IconCard
            bg="red"
            name="suitacase-close"
            class="tw-w-full tw-h-full"
          />
          <div
            class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
          >
            Уровень <br />
            безработицы
          </div>
        </div>
        <div class="bottom">
          <div
            class="tw-font-ibm tw-text-t04 md:tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
          >
            0.68%
          </div>
        </div>
      </div>
    </div>
    <div class="card card_base tw-col-span-3">
      <div class="top">
        <IconCard name="monets" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Среднемесячная номинальная <br />
          заработная плата
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-font-ibm tw-text-t04 md:tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
        >
          54 536,8 тыс. ₽
        </div>
        <div
          class="tw-text-t19 md:tw-text-t00 lg:tw-text-t13 -tw-tracking-12 lg:-tw-tracking-21 tw-text-green tw-leading-[140%]"
        >
          116% к АППГ
        </div>
      </div>
    </div>
    <div class="card card_base tw-col-span-3">
      <div class="top">
        <IconCard name="monets" class="tw-w-full tw-h-full" />
        <div
          class="tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Численность населения с доходами <br />
          ниже прожиточного минимума
        </div>
      </div>
      <div class="bottom">
        <div
          class="tw-font-ibm tw-text-t04 md:tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
        >
          404,2 тыс.
        </div>
      </div>
    </div>
    <div class="card tw-grid tw-gap-11 tw-col-span-6">
      <div class="tw-flex tw-gap-8 lg:tw-gap-[3.37rem] tw-items-center">
        <IconCard name="basket" class="tw-w-full tw-h-full" />
        <div
          class="tw-font-normal tw-text-base md:tw-text-t02 lg:tw-text-t03 tw-leading-[140%]"
        >
          Стоимость фиксированного набора товаров и услуг
        </div>
      </div>
      <div class="tw-grid tw-grid-cols-2 tw-gap-5 lg:tw-gap-8.1">
        <div class="tw-grid tw-gap-5 lg:tw-gap-8.1">
          <div
            class="tw-text-green tw-text-t18 md:tw-text-base lg:tw-text-t14 tw-pb-2 lg:tw-pb-3 tw-border-b-[0.106rem] tw-border-[#C2D2E5]/25"
          >
            Республика Башкортостан
          </div>
          <div class="tw-flex tw-gap-4 lg:tw-gap-5.2">
            <div
              class="tw-font-ibm tw-text-t04 md:tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
            >
              18 879 тыс.
            </div>
            <div
              class="tw-text-t19 md:tw-text-t00 lg:tw-text-t13 -tw-tracking-12 lg:-tw-tracking-21 tw-text-green tw-leading-[140%]"
            >
              100,27% к АППГ
            </div>
          </div>
        </div>
        <div class="tw-grid tw-gap-5 lg:tw-gap-8.1">
          <div
            class="tw-text-orange tw-text-t18 md:tw-text-base lg:tw-text-t14 tw-pb-2 lg:tw-pb-3 tw-border-b-[0.106rem] tw-border-[#C2D2E5]/25"
          >
            Приволжский федеральный округ
          </div>
          <div class="tw-flex tw-gap-4 lg:tw-gap-5.2">
            <div
              class="tw-font-ibm tw-text-t04 md:tw-text-t10 lg:tw-text-t11 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
            >
              18 852 тыс.
            </div>
            <div
              class="tw-text-t19 md:tw-text-t00 lg:tw-text-t13 -tw-tracking-12 lg:-tw-tracking-21 tw-text-green tw-leading-[140%]"
            >
              100,12% к АППГ
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCard from '../IconCard.vue'
</script>
<style lang="scss" scoped></style>
