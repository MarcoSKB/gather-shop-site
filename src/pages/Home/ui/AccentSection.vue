<script setup lang="ts">
import { BaseContainer, BaseLine } from '@shared/ui'
</script>

<template>
  <BaseLine />
  <section>
    <BaseContainer class="items-center gap-10 py-12 md:gap-18 md:py-20 lg:gap-22 lg:py-23">
      <div class="flex max-w-205.75 gap-2 md:gap-4 lg:gap-10">
        <img src="/assets/images/accent-1.webp" alt="White clothes" class="w-full" />
        <img src="/assets/images/accent-2.webp" alt="Washion" class="w-full" />
      </div>
      <div class="flex flex-col gap-8 text-center md:gap-10 lg:gap-15">
        <span class="font-poppins text-xs leading-3.75 tracking-[10%] uppercase">
          ARTS & CULTURE, FASHION, ISSUE 49
        </span>
        <h2
          class="font-spectral max-w-127.5 text-[40px] leading-10 uppercase md:text-[62px] md:leading-18 lg:text-[75px] lg:leading-20.25"
        >
          A WORLD OF DIFFERENCE
        </h2>
        <span class="font-spectral text-lg leading-7">A fun lesson in cultural faux pas.</span>
      </div>
    </BaseContainer>
  </section>
</template>
