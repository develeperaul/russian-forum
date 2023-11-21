<template>
  <h2 class="title-card">Общественные перевозки</h2>
  <div class="tw-grid tw-grid-cols-6 tw-gap-5 lg:tw-gap-8.1">
    <div class="card card_lg card_deep tw-col-span-6">
      <div class="top">
        <IconCard name="bus" class="tw-w-full tw-h-full" />
        <div class="tw-text-t00 lg:tw-text-t01">Всего поездок</div>
      </div>
      <div class="bottom">
        <div class="summ">447</div>
        <div class="sub">млн</div>
      </div>
    </div>

    <div class="card card_base card_deep tw-col-span-2">
      <div class="top">
        <IconCard name="wallet" class="tw-w-full tw-h-full" />
        <div class="tw-font-normal tw-text-t02 lg:tw-text-t03">
          Сумма поездок <br />
          с начала года
        </div>
      </div>
      <div class="bottom">
        <div class="summ">13 037</div>
        <div class="sub">млн ₽</div>
      </div>
    </div>
    <div class="card card_base tw-col-span-2">
      <div class="top">
        <IconCard name="monets" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Ср. стоимость поездки
          <br />
          за последние сутки
        </div>
      </div>
      <div class="bottom">
        <div class="summ">35</div>
        <div class="sub">₽</div>
      </div>
    </div>
    <div class="card card_base card_green tw-col-span-2">
      <div class="top">
        <IconCard bg="green" name="alga" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Количество карт
          <br />
          АЛГА у населения
        </div>
      </div>
      <div class="bottom">
        <div class="summ">807 019</div>
        <div class="sub">шт.</div>
      </div>
    </div>

    <div class="card card_base card_orange tw-col-span-2">
      <div class="top">
        <IconCard bg="orange" name="alga" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Количество пересадок <br />
          по карте Алга
        </div>
      </div>
      <div class="bottom">
        <div class="summ">263 292</div>
        <div class="sub">шт.</div>
      </div>
    </div>

    <div class="card card_base tw-col-span-2">
      <div class="top">
        <IconCard name="point" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Государственные <br />
          поездки
        </div>
      </div>
      <div class="bottom">
        <div class="summ">10 519</div>
        <div class="sub">млн шт.</div>
      </div>
    </div>

    <div class="card card_base card tw-col-span-2">
      <div class="top">
        <IconCard name="bus2" class="tw-w-full tw-h-full" />
        <div class="tw-text-t02 lg:tw-text-t03">
          Частные <br />
          поездки
        </div>
      </div>
      <div class="bottom">
        <div class="summ">2 518</div>
        <div class="sub">млн шт.</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCard from '../IconCard.vue'
</script>
<style lang="scss" scoped></style>
