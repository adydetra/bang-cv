<template>
  <footer class="bg-neutral-100 py-4 text-center">
    <div class="mb-2">
      <NuxtLink to="/privacy-policy" class="mx-2 text-blue-600 hover:text-blue-800">
        Kebijakan Privasi
      </NuxtLink>
      <span mx-2 text-black>|</span>
      <NuxtLink to="/disclaimer" class="mx-2 text-blue-600 hover:text-blue-800">
        Penolakan Tanggung Jawab
      </NuxtLink>
    </div>
    <p text-gray-600>
      &copy; {{ new Date().getFullYear() }} Bang CV. All rights reserved.
    </p>
  </footer>
</template>
