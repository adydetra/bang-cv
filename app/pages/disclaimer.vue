<script setup lang="ts">
useHead({ title: 'Penolakan Tanggung Jawab - Bang CV' });

interface DisclaimerSection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

const disclaimerIntro = 'Selamat datang di Bang CV. Harap baca penolakan tanggung jawab ini dengan seksama sebelum menggunakan layanan kami. Dengan mengakses dan menggunakan layanan kami, Anda menyetujui syarat-syarat yang tercantum di bawah ini.';

const disclaimerSections: DisclaimerSection[] = [
  {
    title: '1. Layanan CV Profesional',
    paragraphs: [
      'Bang CV menyediakan layanan pembuatan dan desain Curriculum Vitae (CV) profesional berdasarkan informasi yang Anda berikan. Kami berusaha untuk memberikan hasil yang berkualitas tinggi, namun kami tidak dapat menjamin bahwa CV yang dibuat akan diterima oleh perusahaan mana pun atau akan menghasilkan tawaran pekerjaan.',
    ],
  },
  {
    title: '2. Akurasi Informasi',
    paragraphs: [
      'Anda bertanggung jawab penuh atas keakuratan dan kebenaran informasi yang Anda berikan kepada kami. Kami tidak bertanggung jawab atas konsekuensi yang timbul dari informasi yang tidak akurat, tidak lengkap, atau menyesatkan yang disertakan dalam CV Anda. Pastikan semua data pendidikan, pengalaman kerja, dan keterampilan yang Anda berikan adalah benar dan dapat diverifikasi.',
    ],
  },
  {
    title: '3. Tidak Ada Jaminan Kesuksesan',
    paragraphs: [
      'Meskipun kami berkomitmen untuk memberikan CV yang menarik dan profesional, kami tidak dapat menjamin kesuksesan dalam pencarian kerja Anda. Faktor-faktor seperti kondisi pasar kerja, persaingan, dan preferensi perekrut berada di luar kendali kami. Hasil akhir bergantung pada berbagai faktor eksternal yang tidak dapat kami prediksi atau kendalikan.',
    ],
  },
  {
    title: '4. Hak Cipta dan Kekayaan Intelektual',
    paragraphs: [
      'CV yang dibuat melalui layanan kami adalah milik Anda sepenuhnya setelah pembayaran selesai. Namun, template dan desain umum yang kami gunakan mungkin tunduk pada hak cipta pihak ketiga. Anda tidak diperbolehkan untuk menyalin, mendistribusikan, atau menjual template kami tanpa izin tertulis.',
    ],
  },
  {
    title: '5. Batasan Tanggung Jawab',
    paragraphs: [
      'Dalam batas maksimal yang diizinkan oleh hukum yang berlaku, Bang CV tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, atau konsekuensial yang timbul dari penggunaan layanan kami, termasuk namun tidak terbatas pada kehilangan pekerjaan, kehilangan pendapatan, atau kerusakan reputasi.',
    ],
  },
  {
    title: '6. Layanan Pihak Ketiga',
    paragraphs: [
      'Layanan kami mungkin mengintegrasikan atau merujuk ke layanan pihak ketiga, seperti platform lowongan kerja atau alat perekrutan. Kami tidak bertanggung jawab atas kinerja, kebijakan privasi, atau konten dari layanan pihak ketiga tersebut.',
    ],
  },
  {
    title: '7. Perubahan Syarat',
    paragraphs: [
      'Kami berhak untuk mengubah penolakan tanggung jawab ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Versi terbaru akan selalu tersedia di situs web kami. Penggunaan berkelanjutan dari layanan kami setelah perubahan berarti Anda menerima syarat-syarat baru.',
    ],
  },
  {
    title: '8. Hukum yang Berlaku',
    paragraphs: [
      'Penolakan tanggung jawab ini diatur oleh hukum Republik Indonesia. Setiap perselisihan yang timbul akan diselesaikan melalui pengadilan yang berwenang di Indonesia.',
    ],
  },
  {
    title: '9. Kontak Kami',
    paragraphs: [
      'Jika Anda memiliki pertanyaan tentang penolakan tanggung jawab ini, silakan hubungi kami melalui:',
    ],
    list: ['Instagram: @bang.cv.id', 'Telepon: 0851-5529-9160'],
  },
];
</script>

<template>
  <section class="bg-white py-16 text-gray-900">
    <div class="mx-auto max-w-4xl px-4">
      <div class="mb-12 text-center space-y-4">
        <h1 class="text-4xl font-bold md:text-5xl">
          Penolakan Tanggung Jawab (Disclaimer)
        </h1>
        <p class="mx-auto mt-4 max-w-3xl text-base text-gray-600 leading-relaxed">
          {{ disclaimerIntro }}
        </p>
      </div>

      <div class="space-y-8">
        <article
          v-for="section in disclaimerSections"
          :key="section.title"
          class="border border-neutral-200 rounded-xl bg-white/90 p-6 shadow-sm"
        >
          <h2 class="text-2xl text-gray-900 font-semibold">
            {{ section.title }}
          </h2>
          <div class="mt-4 space-y-4">
            <p
              v-for="paragraph in section.paragraphs"
              :key="paragraph"
              class="text-base text-gray-600 leading-relaxed"
            >
              {{ paragraph }}
            </p>
            <ul v-if="section.list" class="list-disc list-inside text-base text-gray-600 space-y-1">
              <li v-for="item in section.list" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
