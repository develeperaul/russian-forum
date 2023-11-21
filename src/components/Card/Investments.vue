<template>
  <h2 class="title-card">Инвестиции в основной капитал</h2>
  <div class="tw-grid tw-grid-cols-6 tw-gap-5 lg:tw-gap-8.1">
    <div class="card card_lg card_deep tw-col-span-6">
      <div class="top">
        <IconCard name="suitcase" class="tw-w-full tw-h-full" />
        <div class="tw-text-t00 lg:tw-text-t01">
          Инвестиции в основной капитал
        </div>
      </div>
      <div class="bottom">
        <div class="summ">186,67</div>
        <div class="sub">млрд ₽</div>
      </div>
    </div>

    <div class="card card_base tw-col-span-2">
      <div class="top">
        <IconCard name="group" class="tw-w-full tw-h-full" />
        <div class="tw-font-normal tw-text-t02 lg:tw-text-t03">
          Инвестиции на душу <br />
          населения (без СМП)
        </div>
      </div>
      <div class="bottom">
        <div class="summ">21,15</div>
        <div class="sub">тыс. ₽</div>
      </div>
    </div>
    <div class="card card_base tw-col-span-2">
      <div class="top">
        <IconCard name="office-men" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Привлеченные <br />
          инвестиции
        </div>
      </div>
      <div class="bottom">
        <div class="summ">39,052</div>
        <div class="sub">млрд ₽</div>
      </div>
    </div>
    <div class="card card_base card_green tw-col-span-2">
      <div class="top">
        <IconCard
          bg="green"
          name="suitcase-check"
          class="tw-w-full tw-h-full"
        />
        <div class="tw-text-t02 lg:tw-text-t03">
          Собственные <br />
          инвестиции
        </div>
      </div>
      <div class="bottom">
        <div class="summ">70,752</div>
        <div class="sub">млрд ₽</div>
      </div>
    </div>

    <div class="card card_base tw-col-span-2">
      <div class="top">
        <IconCard name="industry" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Инвестиции по <br />
          крупным и средним <br />
          предприятиям
        </div>
      </div>
      <div class="bottom">
        <div class="summ">86,4</div>
        <div class="sub">млрд ₽</div>
      </div>
    </div>

    <div class="card card_base tw-col-span-2">
      <div class="top">
        <IconCard name="shop" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Инвестиции <br />
          субъектов МСП
        </div>
      </div>
      <div class="bottom">
        <div class="summ">76,86</div>
        <div class="sub">млрд ₽</div>
      </div>
    </div>

    <div class="card card_base card_orange tw-col-span-2">
      <div class="top">
        <IconCard bg="orange" name="rocket" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Бюджетные <br />
          инвестиции
        </div>
      </div>
      <div class="bottom">
        <div class="summ">23,4</div>
        <div class="sub">млрд ₽</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCard from '../IconCard.vue'
</script>
<style lang="scss" scoped></style>
