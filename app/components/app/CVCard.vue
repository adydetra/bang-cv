<script setup lang="ts">
interface Props {
  img: string;
  title: string;
  harga: string;
  deskripsi: string;
}

const props = defineProps<Props>();

const showModal = ref(false);

function openPreview() {
  showModal.value = true;
}

function closePreview() {
  showModal.value = false;
}

function chatAdmin() {
  const message = `Halo kak saya ingin membeli ${props.title}`;
  const whatsappUrl = `https://wa.me/6285155299160?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}
</script>

<template>
  <div class="group relative overflow-hidden border border-gray-200/50 rounded-3xl bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
    <div class="absolute inset-0 from-green-50/50 to-blue-50/50 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    <div class="relative p-1">
      <div class="relative overflow-hidden rounded-2xl from-gray-50 to-gray-100 bg-gradient-to-br">
        <NuxtImg
          :src="img"
          :alt="title"
          class="h-72 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          format="webp"
        />
        <div class="absolute right-3 top-3">
          <button
            class="size-10 flexcenter cursor-pointer border-0 rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
            @click="openPreview"
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
          {{ title }}
        </h3>
        <div class="flex items-center gap-2">
          <span class="text-2xl text-green-600 font-black">{{ harga }}</span>
        </div>
      </div>

      <p class="line-clamp-3 text-sm text-gray-600 leading-relaxed">
        {{ deskripsi }}
      </p>

      <button
        class="w-full transform cursor-pointer border-0 rounded-md from-green-600 to-green-700 bg-gradient-to-r px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:from-green-700 hover:to-green-800 hover:shadow-green-500/25 hover:shadow-lg"
        @click="chatAdmin"
      >
        💬 Chat Admin
      </button>
    </div>
  </div>

  <Teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flexcenter bg-black/80 p-4 backdrop-blur-sm"
      @click="closePreview"
    >
      <div class="relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-3xl bg-white shadow-2xl" @click.stop>
        <div class="absolute right-4 top-4 z-10">
          <button
            class="h-12 w-12 flexcenter rounded-full bg-red-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-600"
            @click="closePreview"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-8">
          <div class="rounded-2xl from-gray-50 to-gray-100 bg-gradient-to-br p-4">
            <NuxtImg
              :src="img"
              :alt="title"
              class="h-auto max-h-[70vh] w-full rounded-xl object-contain"
            />
          </div>

          <div class="mt-6 text-center">
            <h3 class="mb-2 text-2xl text-gray-900 font-bold">
              {{ title }}
            </h3>
            <p class="mb-4 text-gray-600">
              {{ deskripsi }}
            </p>
            <button
              class="rounded-2xl from-green-600 to-green-700 bg-gradient-to-r px-8 py-3 text-white font-semibold transition-all duration-300 hover:from-green-700 hover:to-green-800"
              @click="chatAdmin"
            >
              💬 Pesan Sekarang - {{ harga }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
