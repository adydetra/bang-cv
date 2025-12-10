<script setup lang="ts">
const router = useRouter();

function handleBack() {
  if (window.history.length > 1 && window.history.state?.back) {
    router.back();
  }
  else {
    router.push('/');
  }
}
</script>

<template>
  <button
    class="fixed left-6 top-6 z-50 hidden size-10 cursor-pointer items-center justify-center border border-neutral-400 rounded-full bg-white/80 text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-300 ease-in-out xl:flex active:scale-95 hover:bg-white hover:text-black hover:shadow-md hover:-translate-x-1"
    aria-label="Kembali"
    @click="handleBack"
  >
    <div class="i-mingcute:arrow-left-line text-xl" />
  </button>
</template>
