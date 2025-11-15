<script setup lang="ts">
const footerLinks = [
  { to: '/privacy-policy', label: 'Kebijakan Privasi' },
  { to: '/disclaimer', label: 'Penolakan Tanggung Jawab' },
];

const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-neutral-100 py-4 text-center">
    <div class="mb-2">
      <template v-for="(link, index) in footerLinks" :key="link.to">
        <NuxtLink :to="link.to" class="mx-2 text-xs text-blue-600 md:text-sm hover:text-blue-800">
          {{ link.label }}
        </NuxtLink>
        <span v-if="index < footerLinks.length - 1" class="mx-1 text-black">|</span>
      </template>
    </div>
    <p class="text-xs text-gray-600 md:text-sm">
      &copy; {{ year }} Bang CV. All rights reserved.
    </p>
  </footer>
</template>
