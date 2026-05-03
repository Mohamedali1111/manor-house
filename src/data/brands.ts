export interface BrandPartner {
  id: string
  name: string
  category: string
  note: string
}

/** Specification-grade partners frequently specified on Manor House projects */
export const brandPartners: BrandPartner[] = [
  {
    id: 'jotun',
    name: 'Jotun Paints',
    category: 'Finishes',
    note: 'Durable interior coatings with refined color systems for luxury residential work.',
  },
  {
    id: 'elsewedy',
    name: 'El Sewedy Electric',
    category: 'Electrical',
    note: 'Reliable distribution and components for clean, safe electrical infrastructure.',
  },
  {
    id: 'duravit',
    name: 'Duravit',
    category: 'Sanitary',
    note: 'Architectural bathroom ceramics and fixtures with timeless proportions.',
  },
  {
    id: 'grohe',
    name: 'Grohe',
    category: 'Brassware',
    note: 'Precision fittings that balance performance with quiet, refined detailing.',
  },
  {
    id: 'schneider',
    name: 'Schneider Electric',
    category: 'Smart & Control',
    note: 'Integrated control and protection where clarity and safety matter.',
  },
  {
    id: 'egger',
    name: 'Egger',
    category: 'Surfaces',
    note: 'High-performance panels and surfaces for joinery and built-ins.',
  },
]
