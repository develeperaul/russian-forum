<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <q-page-container class="tw-grid md2:tw-grid-cols-[512px_1fr] lg:tw-block">
      <div
        class="tw-pl-10 tw-pr-12 md:tw-pl-[65px] md:tw-pr-[85px] tw-grid tw-grid-cols-2 md:tw-hidden md2:tw-grid"
      >
        <div class="marquee">
          <div
            class="marquee__container tw-top-full"
            :style="{ transform: `translateY(-${procent1}%)` }"
          >
            <div class="marquee__text">
              <span class="tw-text-[#1572FD]">ТОП-5</span>
              в Национальном
              <span class="tw-text-[#1572FD]">рейтинге инвестиционного</span>
              климата
              <span class="tw-text-[#1572FD]">в субъектах Российской</span>
              Федерации
              <span class="tw-text-[#1572FD]">Высший</span>
              уровень в
              <span class="tw-text-[#1572FD]">рейтинге качества</span>
              осуществления
              <span class="tw-text-[#1572FD]"
                >оценки регулирующего воздействия
              </span>
              <span class="tw-text-[#1572FD]">и экспертизы</span>
              ТОП-10 <span class="tw-text-[#1572FD]">в рейтинге</span>
              развития
              <span class="tw-text-[#1572FD]"
                >государственно-частного партнерства</span
              >
              Высокое
              <span class="tw-text-[#1572FD]">качество в</span>
              рейтинге
              <span class="tw-text-[#1572FD]">управления финансами среди</span>
              субъектов РФ
              <span class="tw-text-[#1572FD]">ТОП-3</span>
              в рейтинге
              <span class="tw-text-[#1572FD]">реализации промышленной</span>
              политики
              <span class="tw-text-[#1572FD]">в субъектах РФ</span>
              ТОП-3
              <span class="tw-text-[#1572FD]">в рейтинге</span>
              эффективности работы
              <span class="tw-text-[#1572FD]">региональных фондов</span>
              развития промышленности
            </div>
          </div>
        </div>
        <div class="marquee">
          <div
            class="marquee__container tw-bottom-full"
            :style="{ transform: `translateY(${procent1}%)` }"
          >
            <!-- :style="{ transform: `translateY(-${100}%)` }" -->
            <!-- :style="{ transform: `translateY(${procent1}%)` }" -->
            <div class="marquee__text">
              <span class="tw-text-[#1572FD]">ТОП-5</span>
              в Национальном
              <span class="tw-text-[#1572FD]">рейтинге инвестиционного</span>
              климата
              <span class="tw-text-[#1572FD]">в субъектах Российской</span>
              Федерации
              <span class="tw-text-[#1572FD]">Высший</span>
              уровень в
              <span class="tw-text-[#1572FD]">рейтинге качества</span>
              осуществления
              <span class="tw-text-[#1572FD]"
                >оценки регулирующего воздействия
              </span>
              <span class="tw-text-[#1572FD]">и экспертизы</span>
              ТОП-10 <span class="tw-text-[#1572FD]">в рейтинге</span>
              развития
              <span class="tw-text-[#1572FD]"
                >государственно-частного партнерства</span
              >
              Высокое
              <span class="tw-text-[#1572FD]">качество в</span>
              рейтинге
              <span class="tw-text-[#1572FD]">управления финансами среди</span>
              субъектов РФ
              <span class="tw-text-[#1572FD]">ТОП-3</span>
              в рейтинге
              <span class="tw-text-[#1572FD]">реализации промышленной</span>
              политики
              <span class="tw-text-[#1572FD]">в субъектах РФ</span>
              ТОП-3
              <span class="tw-text-[#1572FD]">в рейтинге</span>
              эффективности работы
              <span class="tw-text-[#1572FD]">региональных фондов</span>
              развития промышленности
            </div>
          </div>
        </div>
      </div>
      <router-view> </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { transform } from 'typescript'

const procent1 = ref(10)
onMounted(() =>
  setInterval(() => {
    procent1.value += 0.015
    if (procent1.value >= 100) procent1.value = 50
  }, 35)
)
</script>
<style lang="scss">
.marquee {
  position: relative;
  overflow: hidden;
  height: 100%;
  &__container {
    white-space: nowrap;
    position: absolute;
  }
  &__text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 6.4rem;
    font-style: normal;
    font-weight: 750;
    line-height: 120%; /* 10.8rem */
    letter-spacing: -0.125rem;
    white-space: nowrap;
    text-transform: uppercase;
  }
}
</style>
