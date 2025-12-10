<script setup lang="ts">
interface _CVTemplate {
  id: number;
  img: string;
  harga: string;
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
        <h2 class="text-2xl text-gray-900 font-black tracking-tight md:text-6xl">
          Template CV <span class="from-green-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Pilihan</span>
        </h2>
        <p class="mx-auto max-w-3xl text-base text-gray-600 leading-relaxed md:text-xl">
          Koleksi template CV premium dengan desain modern {{ new Date().getFullYear() }}. Dibuat khusus untuk berbagai profesi dan industri dengan standar internasional.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
        <div
          v-for="cv in cvTemplates"
          :key="cv.id"
          class="group relative overflow-hidden border border-gray-200/50 rounded-3xl bg-white/80 backdrop-blur-sm"
        >
          <div class="relative p-1">
            <div class="relative overflow-hidden rounded-2xl from-gray-50 to-gray-100 bg-gradient-to-br">
              <NuxtImg
                :src="cv.img"
                :alt="`CV-${cv.id}`"
                class="h-72 w-full object-contain p-4"
                loading="lazy"
                format="webp"
              />
              <div class="absolute right-3 top-3">
                <button
                  class="size-10 flexcenter cursor-pointer border-0 rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
                  @click="openPreview(cv.img, cv.id)"
                >
                  <svg class="size-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="relative p-6 space-y-4">
            <div class="space-y-2">
              <h3 class="text-xl text-gray-900 font-bold">
                CV-{{ cv.id }}
              </h3>
              <div class="flex items-center gap-2">
                <span class="text-2xl text-green-600 font-black">{{ cv.harga }}</span>
              </div>
            </div>

            <button
              class="w-full flexcenter transform cursor-pointer gap-2 border-0 rounded-xl from-emerald-500 to-green-600 bg-gradient-to-r px-6 py-3.5 text-white font-semibold shadow-green-500/20 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-emerald-600 hover:to-green-700 hover:shadow-green-500/40"
              @click="chatAdmin(cv.id.toString())"
            >
              <div class="i-mingcute:whatsapp-fill text-xl" />
              Chat Admin
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
