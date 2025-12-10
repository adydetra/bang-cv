<script setup lang="ts">
useHead({ title: 'Syarat dan Ketentuan - Bang CV' });

interface TermsSection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

const termsIntro = 'Selamat datang di Bang CV. Syarat dan Ketentuan ini mengatur penggunaan Anda atas situs web dan layanan kami. Dengan mengakses atau menggunakan Bang CV, Anda setuju untuk terikat oleh syarat-syarat ini.';

const termsSections: TermsSection[] = [
  {
    title: 'Penerimaan Syarat',
    paragraphs: [
      'Dengan mengakses situs web ini dan menggunakan layanan kami, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat-syarat ini, Anda tidak diperkenankan menggunakan layanan kami.',
    ],
  },
  {
    title: 'Layanan Kami',
    paragraphs: [
      'Bang CV menyediakan platform untuk pembuatan dan desain Curriculum Vitae (CV) profesional. Kami menyediakan berbagai template dan alat bantu untuk memudahkan Anda membuat CV yang menarik. Layanan kami dapat mencakup fitur gratis dan berbayar.',
    ],
  },
  {
    title: 'Akun Pengguna',
    paragraphs: [
      'Untuk mengakses fitur tertentu, Anda mungkin perlu mendaftar dan membuat akun. Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda, termasuk kata sandi. Anda setuju untuk memberi tahu kami segera jika ada penggunaan akun yang tidak sah.',
    ],
  },
  {
    title: 'Pembayaran dan Pengembalian Dana',
    paragraphs: [
      'Beberapa layanan atau template mungkin berbayar. Pembayaran harus dilakukan melalui metode yang kami sediakan. Kami tidak menawarkan pengembalian dana (refund) untuk layanan atau produk digital yang telah dibeli, kecuali diwajibkan oleh hukum atau dinyatakan lain dalam kebijakan khusus kami.',
    ],
  },
  {
    title: 'Hak Kekayaan Intelektual',
    paragraphs: [
      'Semua konten, desain, logo, dan materi yang tersedia di situs web Bang CV adalah milik kami atau pemberi lisensi kami dan dilindungi oleh hukum hak cipta. Anda diberikan lisensi terbatas untuk menggunakan template kami untuk keperluan pribadi (pembuatan CV Anda sendiri), tetapi dilarang keras menjual kembali, mendistribusikan ulang, atau mengklaim kepemilikan atas template tersebut.',
    ],
  },
  {
    title: 'Perilaku Pengguna',
    paragraphs: [
      'Anda setuju untuk tidak menggunakan layanan kami untuk tujuan yang melanggar hukum atau dilarang. Anda tidak boleh mengunggah konten yang menyinggung, memfitnah, atau melanggar hak orang lain. Kami berhak untuk menangguhkan atau menghentikan akun Anda jika Anda melanggar ketentuan ini.',
    ],
  },
  {
    title: 'Batasan Tanggung Jawab',
    paragraphs: [
      'Bang CV tidak menjamin bahwa layanan kami akan selalu tersedia, bebas dari kesalahan, atau memenuhi harapan Anda sepenuhnya. Kami tidak bertanggung jawab atas kerugian apa pun yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan kami.',
    ],
  },
  {
    title: 'Perubahan pada Syarat',
    paragraphs: [
      'Kami dapat merevisi Syarat dan Ketentuan ini dari waktu ke waktu. Perubahan akan berlaku segera setelah diposting di halaman ini. Kami menyarankan Anda untuk meninjau halaman ini secara berkala.',
    ],
  },
  {
    title: 'Kontak Kami',
    paragraphs: [
      'Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami melalui:',
    ],
    list: ['Instagram: @bang.cv.id', 'Telepon: 0851-5529-9160'],
  },
];

function formatSectionTitle(position: number, title: string) {
  return `${position + 1}. ${title}`;
}
</script>

<template>
  <section class="bg-white py-16 text-gray-900">
    <div class="mx-auto max-w-4xl px-4">
      <div class="mb-12 text-center space-y-4">
        <h1 class="text-3xl font-bold lg:text-4xl">
          Syarat dan Ketentuan
        </h1>
        <p class="mx-auto mt-4 max-w-3xl text-justify text-base text-gray-600 leading-relaxed">
          {{ termsIntro }}
        </p>
      </div>

      <div class="space-y-8">
        <article
          v-for="(section, index) in termsSections"
          :key="section.title"
          class="border border-neutral-200 rounded-xl bg-white/90 p-6 shadow-sm"
        >
          <h2 class="text-2xl text-gray-900 font-semibold">
            {{ formatSectionTitle(index, section.title) }}
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
