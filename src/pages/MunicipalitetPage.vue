<template>
  <q-page
    class="tw-container content test"
    :style="{
      backgroundImage: `url(/municipalitets/${id}.png)`,
    }"
  >
    <div></div>
    <div class="content__right tw-px-[40px] md:tw-px-[125px] lg:tw-px-[211px]">
      <div class="tw-grid tw-grid-cols-6 tw-gap-5 lg:tw-gap-8.1">
        <div
          class="card card_lg card_deep tw-col-span-6 tw-grid tw-content-start"
        >
          <div
            class="tw-text-title00 lg:tw-text-title01 -tw-tracking-12 lg:-tw-tracking-21 tw-leading-[120%]"
          >
            {{ raion?.Municipal_districts }}
          </div>
          <div class="tw-flex tw-gap-16 lg:tw-gap-27">
            <div class="tw-flex tw-gap-6 tw-items-center">
              <div
                class="tw-w-[60px] tw-h-[60px] lg:tw-w-[101px] lg:tw-h-[101px] tw-rounded-full tw-overflow-hidden tw-border-[3px] tw-border-[#fff]/30"
              >
                <q-img
                  :src="`/chiefs/${raion?.Chiefs_foto}.jpg`"
                  class="tw-w-full tw-h-full"
                />
              </div>
              <div>
                <div class="tw-font-normal tw-text-base lg:tw-text-t14">
                  Глава администрации
                </div>
                <div
                  class="tw-text-base md:tw-text-t02 lg:tw-text-t03 -tw-tracking-6 lg:-tw-tracking-10"
                >
                  {{ raion?.Chief }}
                </div>
              </div>
            </div>
            <div class="tw-flex tw-gap-6 tw-items-center">
              <div
                class="tw-w-[60px] tw-h-[60px] lg:tw-w-[101px] lg:tw-h-[101px] tw-rounded-full tw-overflow-hidden tw-border-[3px] tw-border-[#fff]/30"
              >
                <q-img
                  :src="`/raions/${raion?.City_foto}.jpg`"
                  class="tw-w-full tw-h-full"
                />
              </div>
              <div>
                <div class="tw-font-normal tw-text-base lg:tw-text-t14">
                  Административный центр
                </div>
                <div
                  class="tw-text-base md:tw-text-t02 lg:tw-text-t03 -tw-tracking-6 lg:-tw-tracking-10"
                >
                  {{ raion?.Administrative_center }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card card_base card_green tw-col-span-2">
          <div class="top">
            <IconCard
              bg="green"
              name="people-group"
              class="tw-w-full tw-h-full"
            />
            <div
              class="tw-font-normal tw-text-base md:tw-text-t02 lg:tw-text-t03"
            >
              Население
            </div>
          </div>
          <div class="bottom">
            <div class="summ">{{ raion?.People_man }}</div>
            <div class="sub">чел.</div>
          </div>
        </div>
        <div class="card card_base card_green tw-col-span-2">
          <div class="top">
            <IconCard bg="green" name="square" class="tw-w-full tw-h-full" />
            <div class="tw-text-base md:tw-text-t02 lg:tw-text-t03">
              Площадь
            </div>
          </div>
          <div class="bottom">
            <div class="summ">{{ raion?.S_km2 }}</div>
            <div class="sub">км²</div>
          </div>
        </div>
        <div class="card card_base card_green tw-col-span-2">
          <div class="top">
            <IconCard bg="green" name="home" class="tw-w-full tw-h-full" />
            <div class="tw-text-base md:tw-text-t02 lg:tw-text-t03">
              Сельских поселений
            </div>
          </div>
          <div class="bottom">
            <div class="summ">{{ raion?.Village }}</div>
          </div>
        </div>

        <div class="card card_base card_deep tw-col-span-2">
          <div class="top">
            <IconCard name="suitcase" class="tw-w-full tw-h-full" />
            <div class="tw-text-base md:tw-text-t02 lg:tw-text-t03">
              Инвестиции на душу населения
            </div>
          </div>
          <div class="bottom">
            <div class="summ">{{ raion?.invest }}</div>
            <div class="sub">тыс. ₽</div>
          </div>
        </div>

        <div class="card card_base card_deep tw-col-span-2">
          <div class="top">
            <IconCard name="warning" class="tw-w-full tw-h-full" />
            <div class="tw-text-base md:tw-text-t02 lg:tw-text-t03">
              Количество заявлений в Госуслуги
            </div>
          </div>
          <div class="bottom">
            <div class="summ">{{ raion?.gosuslugi }}</div>
          </div>
        </div>

        <div class="card card_base card_deep tw-col-span-2">
          <div class="top">
            <IconCard name="kindergartens" class="tw-w-full tw-h-full" />
            <div class="tw-text-base md:tw-text-t02 lg:tw-text-t03">
              Обеспеченность детскими садами
            </div>
          </div>
          <div class="bottom">
            <div class="summ">{{ raion?.detsad }}</div>
          </div>
        </div>

        <div class="card card_base card_deep tw-col-span-2">
          <div class="top">
            <IconCard name="school" class="tw-w-full tw-h-full" />
            <div
              class="tw-font-normal tw-text-base md:tw-text-t02 lg:tw-text-t03"
            >
              Обеспеченность школами
            </div>
          </div>
          <div class="bottom">
            <div class="summ">{{ raion?.school }}%</div>
          </div>
        </div>
        <div class="card card_base card_deep tw-col-span-2">
          <div class="top">
            <IconCard name="suitacase-close" class="tw-w-full tw-h-full" />
            <div class="tw-text-base md:tw-text-t02 lg:tw-text-t03">
              Уровень безработицы
            </div>
          </div>
          <div class="bottom">
            <div class="summ">{{ raion?.bezrab }}</div>
          </div>
        </div>
        <div class="card card_base card_deep tw-col-span-2">
          <div class="top">
            <IconCard name="road3" class="tw-w-full tw-h-full" />
            <div class="tw-text-base md:tw-text-t02 lg:tw-text-t03">
              Проинспектировано и отремонтировано дорог
            </div>
          </div>
          <div class="bottom">
            <div class="summ">{{ raion?.dorogi }}%</div>
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import listJson from '/public/raions.json'
import { Raion, Option } from 'src/models'
const props = defineProps<{
  id: string
}>()

const list = listJson as Raion[]

const raion = computed(() => list.find((item) => item.ID === props.id))
console.log(typeof props.id)
</script>
<style lang="scss" scoped>
.test {
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
}
</style>
