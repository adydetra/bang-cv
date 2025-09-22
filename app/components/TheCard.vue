<script setup lang="ts">
interface _CVTemplate {
  id: number;
  img: string;
  harga: string;
  deskripsi: string;
  category: string;
  featured?: boolean;
}

const { getAllTemplates } = useCVTemplates();
const cvTemplates = getAllTemplates();

const selectedImage = ref('');
const selectedAlt = ref('');
const showPopup = ref(false);

function openPreview(img: string, id: number) {
  selectedImage.value = img;
  selectedAlt.value = `CV-${id}`;
  showPopup.value = true;
}

function closePreview() {
  showPopup.value = false;
}

function chatAdmin(id: string) {
  const message = `Halo kak saya ingin membeli CV-${id}`;
  const whatsappUrl = `https://wa.me/6285155299160?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}
</script>

<template>
  <section class="mx-auto bg-white py-20 lg:px-64">
    <div class="px-4">
      <div class="mb-16 text-center space-y-4">
        <h2 class="text-5xl text-gray-900 font-black tracking-tight md:text-6xl">
          Template CV <span class="from-green-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Pilihan</span>
        </h2>
        <p class="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
          Koleksi template CV premium dengan desain modern 2025. Dibuat khusus untuk berbagai profesi dan industri dengan standar internasional.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
        <div
          v-for="cv in cvTemplates"
          :key="cv.id"
          class="group relative overflow-hidden border border-gray-200/50 rounded-3xl bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2"
        >
          <div class="absolute inset-0 from-green-50/50 to-blue-50/50 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div class="relative p-1">
            <div class="relative overflow-hidden rounded-2xl from-gray-50 to-gray-100 bg-gradient-to-br">
              <NuxtImg
                :src="cv.img"
                :alt="`CV-${cv.id}`"
                class="h-72 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                format="webp"
              />
              <div class="absolute right-3 top-3">
                <button
                  class="size-10 flexcenter cursor-pointer border-0 rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
                  @click="openPreview(cv.img, cv.id)"
                >
                  <svg class="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="relative p-6 space-y-4">
            <div class="space-y-2">
              <h3 class="text-xl text-gray-900 font-bold transition-colors duration-300 group-hover:text-green-600">
                CV-{{ cv.id }}
              </h3>
              <div class="flex items-center gap-2">
                <span class="text-2xl text-green-600 font-black">{{ cv.harga }}</span>
              </div>
            </div>

            <p class="line-clamp-3 text-sm text-gray-600 leading-relaxed">
              {{ cv.deskripsi }}
            </p>

            <button
              class="w-full transform cursor-pointer border-0 rounded-md from-green-600 to-green-700 bg-gradient-to-r px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:from-green-700 hover:to-green-800 hover:shadow-green-500/25 hover:shadow-lg"
              @click="chatAdmin(cv.id.toString())"
            >
              💬 Chat Admin
            </button>
          </div>
        </div>
      </div>

      <!-- Popup Component -->
      <AppCardPopUp
        :img="selectedImage"
        :alt="selectedAlt"
        :is-open="showPopup"
        @close="closePreview"
      />
    </div>
  </section>
</template>
