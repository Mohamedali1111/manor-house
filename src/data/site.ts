/** Global brand & contact — Egyptian studio defaults (update when you publish live numbers) */

export const site = {
  name: 'Manor House',
  tagline: 'Interior Design',
  legalName: 'Manor House Interior Design',
  region: 'Egypt',
  description:
    'Luxury interior design studio delivering timeless residences across Cairo, Alexandria, and New Cairo — from concept and space planning to execution and handover.',
  /** Display format spacing used across UI */
  phoneDisplay: '+20 115 337 2849',
  /** E.164 for tel: links — same mobile line used for calls & WhatsApp */
  phoneTel: '+201153372849',
  whatsappDisplay: '+20 115 337 2849',
  whatsappUrl: 'https://wa.me/201153372849',
  email: 'studio@manorhouse.co.eg',
  /** Formal correspondence */
  emailProjects: 'projects@manorhouse.co.eg',
  addressLines: ['South Investors Area, Building 12B', 'Sheikh Zayed, Giza Governorate'],
  hours: {
    weekdays: 'Sunday–Thursday: 10:00 – 19:00',
    saturday: 'Saturday: By appointment',
  },
  social: {
    instagram: 'https://instagram.com/manorhouse.eg',
    linkedin: 'https://linkedin.com/company/manorhouse-eg',
  },
} as const
