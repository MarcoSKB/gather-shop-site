<script setup lang="ts">
import { BaseCheckbox, BaseContainer, BaseInput } from '@shared/ui'
</script>

<template>
  <BaseContainer class="items-center pt-4 pb-12 md:py-10">
    <h2 class="font-spectral mb-6 text-center text-[21px] leading-6.75 md:mb-11 md:text-left">
      Sign up to the Kinfolk newsletter
    </h2>
    <div class="mx-auto mb-3.75 flex w-full max-w-135">
      <BaseInput type="email" placeholder="Your email" />
      <button
        type="submit"
        class="border-primary group font-poppins cursor-pointer border-b border-solid py-1.25 text-xs tracking-[10%] uppercase disabled:cursor-default"
      >
        <span class="inline-block transition-transform ease-in group-hover:-translate-y-1">
          submit
        </span>
      </button>
    </div>
    <BaseCheckbox :modelValue="false">
      <span>I’ve read and accept the terms & conditions</span>
    </BaseCheckbox>
  </BaseContainer>
</template>
