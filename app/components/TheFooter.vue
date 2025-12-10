<script setup lang="ts">
const footerLinks = {
  support: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Disclaimer', to: '/disclaimer' },
  ],
  social: [{ icon: 'i-mingcute:instagram-line', href: 'www.instagram.com/bang.cv.id', label: 'Instagram' }],
};

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-neutral-800 bg-neutral-950 px-4 py-12 text-neutral-300 lg:px-8 sm:px-6">
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2">
        <div class="space-y-4">
          <h2 class="flex items-center gap-2 text-2xl text-white font-bold tracking-tight font-sans -ml-1.3">
            <div class="i-mingcute:document-2-fill text-3xl" />
            Bang CV
          </h2>
          <p class="max-w-xs text-sm text-neutral-400 leading-relaxed">
            Membangun karier profesional dengan alat CV generasi selanjutnya. Dibuat untuk masa depan dunia kerja.
          </p>
        </div>

        <div>
          <h3 class="mb-4 text-sm text-white font-semibold tracking-wider font-sans uppercase">
            Support
          </h3>
          <ul class="list-none pl-0 space-y-3">
            <li v-for="link in footerLinks.support" :key="link.to">
              <NuxtLink :to="`https://${link.to}`" class="text-sm text-neutral-400 transition-colors duration-200 hover:text-blue-400">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-sm text-white font-semibold tracking-wider font-sans uppercase">
            Stay Connected
          </h3>
          <p class="mb-4 text-sm text-neutral-400">
            Bergabunglah dengan buletin kami untuk tips karier dan pembaruan.
          </p>
          <div class="flex gap-4">
            <NuxtLink
              v-for="social in footerLinks.social"
              :key="social.label"
              :to="social.href"
              target="_blank"
              external
              class="text-neutral-400 transition-colors duration-200 hover:text-white"
              :aria-label="social.label"
            >
              <div class="text-xl" :class="[social.icon]" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 md:flex-row">
        <p class="text-xs text-neutral-500">
          &copy; {{ currentYear }} Bang CV. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
