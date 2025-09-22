<script setup lang="ts">
interface Props {
  img: string;
  alt: string;
  isOpen: boolean;
}

defineProps<Props>();
const emit = defineEmits<{
  close: [];
}>();

function closeModal() {
  emit('close');
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flexcenter bg-black/80 p-4 backdrop-blur-sm"
      @click="closeModal"
    >
      <div class="relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-3xl bg-white shadow-2xl" @click.stop>
        <div class="absolute right-4 top-4 z-10">
          <button
            class="size-12 flexcenter cursor-pointer border-0 rounded-full bg-red-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-600"
            @click="closeModal"
          >
            <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-8">
          <div class="rounded-2xl from-gray-50 to-gray-100 bg-gradient-to-br p-4">
            <NuxtImg
              :src="img"
              :alt="alt"
              class="h-auto max-h-[70vh] w-full rounded-xl object-contain"
              loading="eager"
              format="webp"
            />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
