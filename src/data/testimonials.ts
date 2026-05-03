export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  quote: string
  project?: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Nour El-Din Hassan',
    role: 'Homeowner',
    location: 'Sheikh Zayed',
    quote:
      'Manor House orchestrated our villa end-to-end — the coordination between finishes, lighting, and built-ins felt effortless on our side.',
    project: 'Gana-Zayed Villa',
    initials: 'NH',
  },
  {
    id: '2',
    name: 'Layla Farouk',
    role: 'Private Client',
    location: 'Alexandria',
    quote:
      'They translated how we live into a calm, elevated interior. Communication was clear and the site supervision was consistently professional.',
    project: 'Dar-Masr Residence',
    initials: 'LF',
  },
  {
    id: '3',
    name: 'Karim Abdel Rahman',
    role: 'Entrepreneur',
    location: 'New Cairo',
    quote:
      'What impressed us most was discipline — budgets and timelines were treated seriously, without compromising the luxury details.',
    project: 'Wahet El Rayhan',
    initials: 'KA',
  },
  {
    id: '4',
    name: 'Yasmine Mourad',
    role: 'Architect',
    location: 'Cairo',
    quote:
      'As a collaborator on documentation, I appreciated how specifications were organized and how decisions were captured.',
    project: 'Joint project',
    initials: 'YM',
  },
  {
    id: '5',
    name: 'Omar Selim',
    role: 'Developer',
    location: 'New Cairo',
    quote:
      'Their execution supervision reduced rework and kept finishes aligned with the approved mock-ups.',
    project: 'Residential compound',
    initials: 'OS',
  },
  {
    id: '6',
    name: 'Mariam Ashraf',
    role: 'Restaurant Owner',
    location: 'Cairo',
    quote:
      'Guest flow, lighting layers, and durability were balanced beautifully — the space photographs like a showroom.',
    project: 'Hospitality concept',
    initials: 'MA',
  },
]
