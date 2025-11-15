<script setup>
const features = [
  { text: 'Indonesia/English CV', color: 'bg-blue-400' },
  { text: 'Template Profesional', color: 'bg-green-400' },
  { text: 'Support 24/7', color: 'bg-purple-400' },
];
</script>

<template>
  <section class="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-black">
    <div class="absolute inset-0 z-1">
      <BitsBGAurora
        :color-stops="['#000000', '#171D22', '#000000']"
        :amplitude="1.0"
        :blend="0.5"
        :speed="1.0"
        :intensity="1.0"
        class="size-full"
      />
    </div>

    <div class="relative z-2 h-full flex items-center justify-center px-4">
      <div class="mx-auto max-w-4xl w-full text-center text-white space-y-8">
        <div class="space-y-4">
          <h1 class="animate-fade-in text-6xl font-black tracking-tight md:text-8xl" style="--delay: 0.2s">
            Bang<span class="text-green-400">CV</span>
          </h1>
          <p class="mx-auto max-w-2xl animate-fade-in text-xl text-white/80 font-light leading-relaxed md:text-2xl" style="--delay: 0.4s">
            Ciptakan CV yang memukau dengan desain modern dan profesional
          </p>
        </div>

        <div class="flex flex-col animate-fade-in items-center justify-center gap-8 text-sm text-white/60 md:flex-row" style="--delay: 0.8s">
          <div v-for="(feature, index) in features" :key="index" class="flex items-center gap-2">
            <div :class="`h-2 w-2 rounded-full ${feature.color}`" />
            <span>{{ feature.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.8s ease-out var(--delay, 0s) forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
