<script setup lang="ts">
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Buka jam berapa BangCV?',
    answer: 'Kami tersedia 24 jam untuk menerima pemesanan dan konsultasi via WhatsApp.',
  },
  {
    question: 'Kapan pengerjaan dilakukan?',
    answer: 'Proses pengerjaan dilakukan setiap hari kerja (Senin–Jumat). Kami libur pada hari Sabtu dan Minggu.',
  },
  {
    question: 'Metode pembayaran apa yang tersedia?',
    answer: 'Pembayaran saat ini hanya melalui transfer bank BCA dan ShoopePay.',
  },
  {
    question: 'File apa saja yang akan dikirim?',
    answer: 'Hasil akhir kami kirim dalam format PDF, PNG, dan JPG sehingga siap digunakan untuk berbagai kebutuhan.',
  },
  {
    question: 'Bagaimana kebijakan revisi?',
    answer: 'Revisi dapat diajukan maksimal 1 hari setelah file diterima, selama tetap menjaga etika. Revisi total atau pergantian desain tidak diperbolehkan. Setelah melewati batas waktu tersebut, revisi tidak dapat kami layani.',
  },
];

const openIndex = ref<number | null>(null);

function toggleFAQ(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}

function formatNumber(position: number) {
  return position.toString().padStart(2, '0');
}
</script>

<template>
  <section class="bg-gray-50 pb-20 pt-5">
    <div class="mx-auto max-w-4xl px-4 lg:px-0">
      <div class="mb-12 text-center space-y-4">
        <h2 class="text-xl text-gray-900 font-black md:text-5xl">
          FAQ
        </h2>
        <p class="text-sm text-gray-600 md:text-lg">
          Informasi yang sering ditanyakan.
        </p>
      </div>

      <div class="space-y-6">
        <div
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="rounded-md bg-white shadow-sm"
        >
          <button
            type="button"
            class="w-full flex cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-6 py-4 text-left"
            :aria-expanded="openIndex === index"
            @click="toggleFAQ(index)"
          >
            <span class="flex items-center gap-3">
              <span class="text-sm text-green-600 font-semibold">{{ formatNumber(index + 1) }}</span>
              <span class="text-sm text-gray-900 font-semibold lg:text-lg">
                {{ faq.question }}
              </span>
            </span>
            <span
              class="size-5 text-gray-500 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
          <div v-if="openIndex === index" class="px-6 pb-3">
            <p class="text-gray-600 leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
