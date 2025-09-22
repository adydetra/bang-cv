<template>
  <section class="relative h70vh min-h-500px w-full overflow-hidden">
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

    <div class="relative z-2 h-full flexcenter px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center text-white space-y-8">
          <div class="space-y-4">
            <h1 class="animate-fade-in-delay text-6xl font-black tracking-tight md:text-8xl">
              Bang<span class="text-green-400">CV</span>
            </h1>
            <p class="animate-fade-in-delay-2 mx-auto max-w-2xl text-xl text-white/80 font-light leading-relaxed md:text-2xl">
              Ciptakan CV yang memukau dengan desain modern dan profesional
            </p>
          </div>

          <div class="animate-fade-in-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button class="group relative transform rounded-2xl bg-white px-8 py-4 text-lg text-gray-900 font-semibold shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <span class="relative z-10">Jelajahi Template</span>
              <div class="absolute inset-0 rounded-2xl from-green-400 to-blue-500 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <button class="border-2 border-white/30 rounded-2xl px-8 py-4 text-lg text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10">
              Mulai Gratis
            </button>
          </div>

          <div class="animate-fade-in-delay-4 flexcenter gap-8 text-sm text-white/60">
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 rounded-full bg-green-400" />
              <span>50+ Template</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 rounded-full bg-blue-400" />
              <span>Indonesia/English CV</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 rounded-full bg-purple-400" />
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.min-h-500px {
  min-height: 500px;
}

.animate-fade-in {
  animation: fadeInUp 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.animate-fade-in-delay-3 {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.animate-fade-in-delay-4 {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
