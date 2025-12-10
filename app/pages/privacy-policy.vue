<script setup lang="ts">
useHead({ title: 'Kebijakan Privasi - Bang CV' });

interface PrivacySection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

const privacyIntro
  = 'Selamat datang di Bang CV. Kami berkomitmen untuk melindungi privasi Anda dan menjaga keamanan informasi pribadi yang Anda berikan kepada kami. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan layanan kami untuk membuat Curriculum Vitae (CV) profesional.';

const privacySections: PrivacySection[] = [
  {
    title: 'Informasi yang Kami Kumpulkan',
    paragraphs: [
      'Kami mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat menggunakan layanan kami, termasuk namun tidak terbatas pada:',
    ],
    list: [
      'Nama lengkap',
      'Informasi kontak (alamat email, nomor telepon)',
      'Data pendidikan dan pengalaman kerja',
      'Keterampilan dan kompetensi',
      'Foto profil (jika diunggah)',
    ],
  },
  {
    title: 'Penggunaan Informasi',
    paragraphs: [
      'Informasi yang Anda berikan digunakan secara eksklusif untuk:',
    ],
    list: [
      'Membuat dan merancang CV profesional sesuai permintaan Anda',
      'Menyediakan layanan konsultasi terkait pengembangan karir',
      'Meningkatkan kualitas layanan kami',
      'Menanggapi pertanyaan dan permintaan dukungan pelanggan',
    ],
  },
  {
    title: 'Perlindungan Data',
    paragraphs: [
      'Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Data Anda disimpan dalam server yang aman dan hanya dapat diakses oleh personel yang berwenang.',
    ],
  },
  {
    title: 'Berbagi Informasi',
    paragraphs: [
      'Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali dalam keadaan berikut:',
    ],
    list: [
      'Dengan persetujuan eksplisit Anda',
      'Untuk mematuhi kewajiban hukum atau perintah pengadilan',
      'Untuk melindungi hak dan keselamatan kami atau pihak lain',
    ],
  },
  {
    title: 'Hak Anda',
    paragraphs: [
      'Anda memiliki hak untuk:',
    ],
    list: [
      'Mengakses informasi pribadi yang kami simpan tentang Anda',
      'Memperbaiki atau memperbarui informasi yang tidak akurat',
      'Meminta penghapusan data Anda',
      'Menolak penggunaan data untuk tujuan tertentu',
    ],
  },
  {
    title: 'Cookies',
    paragraphs: [
      'Situs web kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.',
    ],
  },
  {
    title: 'Perubahan Kebijakan',
    paragraphs: [
      'Kami berhak untuk memperbarui kebijakan privasi ini sewaktu-waktu. Perubahan akan diberitahukan melalui situs web kami atau email.',
    ],
  },
  {
    title: 'Kontak Kami',
    paragraphs: [
      'Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui:',
    ],
    list: ['Instagram: @bang.cv.id', 'Telepon: 0851-5529-9160'],
  },
];

function formatSectionTitle(position: number, title: string) {
  return `${position + 1}. ${title}`;
}
</script>

<template>
  <AppBackButton />
  <section class="bg-white py-16">
    <div class="container mx-auto max-w-4xl px-4 text-gray-900">
      <div class="mb-12 text-center space-y-4">
        <h1 class="text-3xl font-bold lg:text-4xl">
          Kebijakan Privasi
        </h1>
        <p class="mx-auto max-w-3xl text-justify text-base text-gray-600 leading-relaxed">
          {{ privacyIntro }}
        </p>
      </div>

      <div class="space-y-8">
        <article
          v-for="(section, index) in privacySections"
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
