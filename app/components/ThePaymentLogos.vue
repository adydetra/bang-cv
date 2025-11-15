<script setup lang="ts">
const paymentLogos = [
  { src: '/img/payment/bca.svg', alt: 'BCA' },
  { src: '/img/payment/shopee-pay.svg', alt: 'ShopeePay' },
] as const;
</script>

<template>
  <section class="w-full pb-40 pt-20">
    <p class="mb-4 text-center text-base text-gray-700 font-semibold lg:text-xl md:text-lg xl:text-2xl">
      Metode pembayaran yang tersedia
    </p>

    <div class="flex items-center justify-center gap-8 md:gap-12">
      <div
        v-for="logo in paymentLogos"
        :key="logo.alt"
        class="h-14 flex items-center lg:h-32 md:h-16 xl:h-40"
      >
        <NuxtImg
          :src="logo.src"
          :alt="logo.alt"
          class="h-full w-auto object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
