import { unsplashPhoto } from '@/lib/images'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  imageSrc: string
  imageAlt: string
}

const interiorImg = unsplashPhoto('photo-1618221195710-dd6b41faaea6', 900, 68)
const electricalImg = unsplashPhoto('photo-1621905251918-48416bd8575a', 900, 68)
const planningImg = unsplashPhoto('photo-1503387762-592deb58ef4e', 900, 68)
const consultImg = unsplashPhoto('photo-1497366216548-375260702972', 900, 68)

export const services: Service[] = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    description:
      'Concept-to-completion interiors with disciplined detailing, layered lighting, and cohesive material direction.',
    icon: '🎨',
    features: ['Concept development', 'Material systems', 'Joinery intent', 'Execution supervision'],
    imageSrc: interiorImg,
    imageAlt: 'Interior design — Manor House',
  },
  {
    id: 'electrical-plumbing',
    title: 'Electrical & Plumbing',
    description:
      'Electrical and plumbing coordination aligned with layout, fixture selections, and safe modern loads.',
    icon: '⚡',
    features: ['Routing clarity', 'Fixture schedules', 'Energy-conscious planning', 'Quality oversight'],
    imageSrc: electricalImg,
    imageAlt: 'Electrical coordination — Manor House',
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description:
      'Layouts that improve circulation, storage logic, and daylight — without sacrificing proportion.',
    icon: '📐',
    features: ['Zoning strategy', 'Traffic flow', 'Built-in logic', 'Furniture anchoring'],
    imageSrc: planningImg,
    imageAlt: 'Space planning — Manor House',
  },
  {
    id: 'consultation',
    title: 'Consultation',
    description:
      'Focused sessions for decisions, prioritization, and a roadmap that matches budget and timeline.',
    icon: '💡',
    features: ['Priorities workshop', 'Budget framing', 'Phasing options', 'Vendor alignment'],
    imageSrc: consultImg,
    imageAlt: 'Design consultation — Manor House',
  },
]
