<script setup lang="ts">
const { getAllTemplates } = useCVTemplates();
const cvTemplates = getAllTemplates();
</script>

<template>
  <section class="from-gray-50 via-white to-gray-100 bg-gradient-to-br py-20">
    <div class="container mx-auto px-4">
      <div class="mb-16 text-center space-y-4">
        <div class="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm text-green-700 font-semibold">
          🎯 Template Terpopuler
        </div>
        <h2 class="text-5xl text-gray-900 font-black tracking-tight md:text-6xl">
          Template CV <span class="from-green-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Pilihan</span>
        </h2>
        <p class="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
          Koleksi template CV premium dengan desain modern 2025. Dibuat khusus untuk berbagai profesi dan industri dengan standar internasional.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
        <AppCVCard
          v-for="cv in cvTemplates"
          :key="cv.id"
          :img="cv.img"
          :title="cv.title"
          :harga="cv.harga"
          :deskripsi="cv.deskripsi"
        />
      </div>
    </div>
  </section>
</template>
