<script setup lang="ts">
import type { Product } from '@entities/product/model/types'
import { BaseAccordion, BaseButton, BaseSelect } from '@shared/ui'
import { ref } from 'vue'

defineProps<{
  product: Pick<Product, 'price' | 'description' | 'details'>
}>()

const quantity = ref(1)
const quantityOptions = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
]
</script>

<template>
  <div class="flex flex-col">
    <p class="font-poppins mb-3 text-lg leading-6 md:mb-5 lg:mb-8">${{ product.price }}</p>
    <p class="font-spectral mb-8 text-base leading-7 md:text-sm lg:text-base">
      {{ product.description }}
    </p>
    <div class="space-y-5.5">
      <div class="divide-primary border-primary flex w-full flex-col divide-y border-y">
        <BaseAccordion title="Details" class="font-spectral opacity-95">
          {{ product.details }}
        </BaseAccordion>
        <BaseAccordion title="Shipping" class="font-spectral flex flex-col gap-1.5 opacity-95">
          <p>
            We take great care in delivering your order with speed, precision, and attention to
            detail.
          </p>
          <p>Order preparation: Each order is carefully processed within 1–2 business days.</p>
          <p>
            Delivery options: Choose between standard and express shipping at checkout, tailored to
            your needs.
          </p>
          <p>Estimated delivery: Standard: 3–7 business days Express: 1–3 business days</p>
          <p>
            Global shipping: We proudly ship worldwide, ensuring a seamless experience wherever you
            are.
          </p>
          <p>
            Tracking: A tracking link will be provided once your order has been dispatched, so you
            can follow its journey.
          </p>
          <p>Shipping costs: Calculated at checkout based on destination and selected service.</p>
          <p>
            Customs & duties: For international orders, applicable duties and taxes are the
            responsibility of the recipient.
          </p>
        </BaseAccordion>
      </div>
      <BaseSelect v-model="quantity" :options="quantityOptions" />
      <BaseButton size="lg">Add to Basket</BaseButton>
    </div>
  </div>
</template>
