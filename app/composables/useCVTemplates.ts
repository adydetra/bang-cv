export interface CVTemplate {
  id: number;
  img: string;
  title: string;
  harga: string;
  deskripsi: string;
  category: string;
  featured?: boolean;
}

export function useCVTemplates() {
  const cvTemplates: CVTemplate[] = [
    {
      id: 1,
      img: '/img/cv/CV1.jpg',
      title: 'CV Modern Professional',
      harga: 'Rp 50.000',
      deskripsi: 'Template CV modern dengan desain clean dan profesional. Cocok untuk fresh graduate dan profesional muda yang ingin tampil menonjol.',
      category: 'Modern',
      featured: true,
    },
    {
      id: 2,
      img: '/img/cv/CV2.png',
      title: 'CV Creative Designer',
      harga: 'Rp 75.000',
      deskripsi: 'Template CV kreatif dengan elemen visual yang menarik. Perfect untuk designer, marketer, dan profesi kreatif lainnya.',
      category: 'Creative',
      featured: true,
    },
    {
      id: 3,
      img: '/img/cv/CV3.png',
      title: 'CV Executive Premium',
      harga: 'Rp 100.000',
      deskripsi: 'Template CV premium untuk level executive dan senior manager. Desain elegan dengan layout yang sophisticated.',
      category: 'Executive',
      featured: false,
    },
    {
      id: 4,
      img: '/img/cv/CV4.png',
      title: 'CV Tech Specialist',
      harga: 'Rp 60.000',
      deskripsi: 'Template CV khusus untuk IT professional dan tech specialist. Clean, minimalis, dan fokus pada technical skills.',
      category: 'Tech',
      featured: true,
    },
    {
      id: 5,
      img: '/img/cv/CV5.png',
      title: 'CV Business Analyst',
      harga: 'Rp 65.000',
      deskripsi: 'Template CV untuk business analyst dan consultant. Layout terstruktur dengan emphasis pada achievements dan metrics.',
      category: 'Business',
      featured: false,
    },
    {
      id: 6,
      img: '/img/cv/CV6.png',
      title: 'CV Marketing Pro',
      harga: 'Rp 70.000',
      deskripsi: 'Template CV untuk marketing professional dengan desain yang eye-catching dan modern. Highlight your campaigns dan results.',
      category: 'Marketing',
      featured: true,
    },
    {
      id: 7,
      img: '/img/cv/CV7.png',
      title: 'CV Finance Expert',
      harga: 'Rp 55.000',
      deskripsi: 'Template CV untuk finance professional dengan layout yang clean dan trustworthy. Perfect untuk banker dan financial analyst.',
      category: 'Finance',
      featured: false,
    },
    {
      id: 8,
      img: '/img/cv/CV8.png',
      title: 'CV Healthcare Pro',
      harga: 'Rp 65.000',
      deskripsi: 'Template CV untuk healthcare professional. Desain yang professional dan clean dengan focus pada credentials dan experience.',
      category: 'Healthcare',
      featured: false,
    },
    {
      id: 9,
      img: '/img/cv/CV9.jpg',
      title: 'CV Startup Founder',
      harga: 'Rp 80.000',
      deskripsi: 'Template CV untuk entrepreneur dan startup founder. Bold design yang menunjukkan leadership dan innovation mindset.',
      category: 'Startup',
      featured: true,
    },
  ];

  const getAllTemplates = () => cvTemplates;

  const getFeaturedTemplates = () => cvTemplates.filter(template => template.featured);

  const getTemplatesByCategory = (category: string) =>
    cvTemplates.filter(template => template.category === category);

  const getTemplateById = (id: number) =>
    cvTemplates.find(template => template.id === id);

  const getCategories = () =>
    [...new Set(cvTemplates.map(template => template.category))];

  return {
    cvTemplates,
    getAllTemplates,
    getFeaturedTemplates,
    getTemplatesByCategory,
    getTemplateById,
    getCategories,
  };
}
