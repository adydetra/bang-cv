export interface CVTemplate {
  id: number;
  img: string;
  harga: string;
  category: string;
  featured?: boolean;
}

export function useCVTemplates() {
  const cvTemplates: CVTemplate[] = [
    {
      id: 1,
      img: '/img/cv/CV1.jpg',
      harga: 'Rp 20.000',
      category: 'Modern',
      featured: true,
    },
    {
      id: 2,
      img: '/img/cv/CV2.png',
      harga: 'Rp 20.000',
      category: 'Creative',
      featured: true,
    },
    {
      id: 3,
      img: '/img/cv/CV3.png',
      harga: 'Rp 20.000',
      category: 'Executive',
      featured: false,
    },
    {
      id: 4,
      img: '/img/cv/CV4.png',
      harga: 'Rp 20.000',
      category: 'Tech',
      featured: true,
    },
    {
      id: 5,
      img: '/img/cv/CV5.png',
      harga: 'Rp 20.000',
      category: 'Business',
      featured: false,
    },
    {
      id: 6,
      img: '/img/cv/CV6.png',
      harga: 'Rp 20.000',
      category: 'Marketing',
      featured: true,
    },
    {
      id: 7,
      img: '/img/cv/CV7.png',
      harga: 'Rp 20.000',
      category: 'Finance',
      featured: false,
    },
    {
      id: 8,
      img: '/img/cv/CV8.png',
      harga: 'Rp 20.000',
      category: 'Healthcare',
      featured: false,
    },
    {
      id: 9,
      img: '/img/cv/CV9.jpg',
      harga: 'Rp 20.000',
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
