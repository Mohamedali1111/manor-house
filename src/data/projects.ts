export interface ProjectGalleryItem {
  src: string
  alt: string
  /** Short label under image on project page */
  caption: string
}

export interface ProjectFact {
  label: string
  value: string
}

export interface SpecGroup {
  category: string
  details: string[]
}

export interface ProjectPhase {
  name: string
  description: string
}

export interface Project {
  id: string
  name: string
  location: string
  type: string
  area: string
  imageSrc: string
  imageAlt: string
  description: string
  story: string
  scope: string[]
  highlights: string[]
  gallery: ProjectGalleryItem[]
  metaTitle: string
  /** Rich detail (portfolio case study) */
  neighborhood: string
  completedYear: string
  durationLabel: string
  briefChallenge: string
  ourApproach: string
  facts: ProjectFact[]
  specifications: SpecGroup[]
  materialsPalette: string[]
  phases: ProjectPhase[]
}

const img = {
  villa:
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',
  penthouse:
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80',
  compound:
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80',
  detailA:
    'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80',
  detailB:
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80',
  detailC:
    'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1600&q=80',
  detailD:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  detailE:
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
}

export const projects: Project[] = [
  {
    id: 'gana-zayed',
    name: 'Gana-Zayed Villa',
    location: 'Cairo, Egypt',
    neighborhood: 'Gana / Sheikh Zayed',
    type: 'Luxury Villa',
    area: '450 sqm',
    completedYear: '2024',
    durationLabel: '11 months (design + build-out)',
    imageSrc: img.villa,
    imageAlt: 'Gana-Zayed Villa — layered living spaces by Manor House',
    description:
      'A contemporary Sheikh Zayed villa shaped around circulation, natural light, and quietly luxurious finishes.',
    metaTitle: 'Gana-Zayed Villa — Manor House',
    story:
      'The clients wanted a home that could host extended family without feeling like a hotel. We began by mapping day paths: kitchen load-in, service movement, and kids’ routes after school. The architecture already offered generous glazing; our job was to sequence materials so daylight never fought the furniture plan. Living and dining read as one generous volume, but ceiling shifts and a stone-clad spine create subtle zoning without extra walls.',
    briefChallenge:
      'Long facades and an open plan risked echo and visual noise. The family also needed storage that disappeared — toys, tableware, and AV had to live behind joinery, not in spare bedrooms.',
    ourApproach:
      'We defined three lighting scenes (day / evening / entertaining), detailed stone-to-metallics transitions for mock-up approval, and coordinated MEP chases with the lighting layout before plaster. Site visits were weekly with photo logs so remote decision-makers could approve quickly.',
    scope: [
      'Full interior architecture coordination',
      'Kitchen & joinery specifications',
      'Lighting layout with scene planning',
      'Site supervision through finishing stages',
    ],
    highlights: [
      'Stone-forward palette with warm metallics',
      'Integrated storage without visual clutter',
      'Outdoor continuity through framing and thresholds',
    ],
    facts: [
      { label: 'Built area', value: '450 sqm' },
      { label: 'Scope', value: 'Full interior + loose FF&E' },
      { label: 'Key spaces', value: 'Formal reception, open living, family kitchen, 4 suites' },
      { label: 'Completion', value: 'Q2 2024' },
    ],
    specifications: [
      {
        category: 'Flooring & walls',
        details: ['Large-format porcelain in living spine', 'Wide plank oak in private quarters', 'Paint schedule tied to north/south exposures'],
      },
      {
        category: 'Kitchen',
        details: ['Integrated fridge column', 'Quartz worktops with waterfall edge', 'Task + ambient layers on separate circuits'],
      },
      {
        category: 'Lighting',
        details: ['Magnetic track in living spine', 'Accent washers on stone', 'Dimming by scene on primary circuits'],
      },
    ],
    materialsPalette: ['Jotun wall finishes', 'Grohe sanitary fittings', 'Duravit ceramics', 'Imported quartz surfaces', 'Bronze-toned metal accents'],
    phases: [
      { name: 'Discovery', description: 'Measured survey, lifestyle interviews, and baseline budget bands.' },
      { name: 'Concept & DD', description: 'Layouts, mood alignment, joinery intent, and fixture schedules for pricing.' },
      { name: 'Execution', description: 'Weekly supervision, mock-ups for stone and metal, snag lists withphoto proof.' },
      { name: 'Handover', description: 'Scene tuning, styling layers, maintenance binder for AV and finishes.' },
    ],
    gallery: [
      { src: img.villa, alt: 'Double-height living toward dining', caption: 'Living spine — daylight + layered lighting scenes' },
      { src: img.detailA, alt: 'Stone wall and joinery detail', caption: 'Stone-to-metal junction approved via mock-up' },
      { src: img.detailD, alt: 'Kitchen island and seating', caption: 'Family kitchen — circulation behind the island' },
      { src: img.detailB, alt: 'Interior hallway', caption: 'Circulation — concealed storage behind veneer' },
      { src: img.detailC, alt: 'Bedroom suite', caption: 'Master suite — acoustic curtain + bedside scenes' },
      { src: img.detailE, alt: 'Detail shot seating', caption: 'FF&E anchors sized for the revised traffic lines' },
    ],
  },
  {
    id: 'dar-masr',
    name: 'Dar-Masr Residence',
    location: 'Alexandria, Egypt',
    neighborhood: 'San Stefano / waterfront band',
    type: 'Penthouse',
    area: '280 sqm',
    completedYear: '2023',
    durationLabel: '9 months',
    imageSrc: img.penthouse,
    imageAlt: 'Dar-Masr Residence — Alexandria penthouse interior',
    description:
      'An Alexandria penthouse tuned for coastal light, panoramic views, and refined entertaining.',
    metaTitle: 'Dar-Masr Residence — Manor House',
    story:
      'The brief emphasized calm after travel: a gallery-like living plane with furniture that could shift for small gatherings. Salt air informed material choices — fewer organic veneers at risk of movement, more stable composites and coated metals in wet zones. We treated the ceiling as a quiet rhythm: bulkheads hide services while defining dining vs lounge without walls.',
    briefChallenge:
      'Tight service core and vertical ducts limited FF&E depth along one façade. The client also wanted blackout performance without heavy drapery blocking the view.',
    ourApproach:
      'We coordinated ceiling zones early with MEP, specified dual-layer shading (sheer + blackout cassette), and kept a tight FF&E footprint verified on-site with full-scale tape layouts before procurement.',
    scope: [
      'Space planning & FF&E direction',
      'Feature walls and ceiling rhythm',
      'Bathroom specifications',
      'Procurement coordination',
    ],
    highlights: [
      'Evening lighting tuned for entertaining',
      'Tailored millwork for compact storage',
      'Soft acoustic considerations in open zones',
    ],
    facts: [
      { label: 'Built area', value: '280 sqm' },
      { label: 'Typology', value: 'Penthouse — full interior' },
      { label: 'Outdoor', value: 'Terrace integrated with interior stone' },
      { label: 'Completion', value: 'Q4 2023' },
    ],
    specifications: [
      {
        category: 'Envelope',
        details: ['Motorized shading with quiet motors', 'Weather-rated terrace detailing', 'Balanced HVAC diffusers away from seating'],
      },
      {
        category: 'Wet areas',
        details: ['Wall-hung sanitary ware', 'Large-format porcelain in wet zones', 'Anti-slip stone on terrace'],
      },
      {
        category: 'Living',
        details: ['Low-profile FF&E for sightlines', 'Acoustic panels behind feature wall', 'Art lighting on dedicated circuit'],
      },
    ],
    materialsPalette: ['Coastal-grade metals', 'Low-sheen lacquer joinery', 'Performance fabrics', 'Large-format porcelain'],
    phases: [
      { name: 'Inventory', description: 'Existing services mapped; ceiling strategy fixed with consultant.' },
      { name: 'Design development', description: 'Full-scale layout verification on-site; FF&E shortlist with lead times.' },
      { name: 'Install', description: 'Phased deliveries to avoid terrace damage; protective regimes during lift moves.' },
      { name: 'Close-out', description: 'Scene balancing for evening entertaining; client walkthrough with punch list.' },
    ],
    gallery: [
      { src: img.penthouse, alt: 'Open plan living', caption: 'Open living — low profiles preserve the view' },
      { src: img.detailC, alt: 'Material palette', caption: 'Palette — calm neutrals, crisp shadow lines' },
      { src: img.detailA, alt: 'Joinery', caption: 'Joinery — shallow depth to protect circulation' },
      { src: img.detailB, alt: 'Evening lounge', caption: 'Evening scene — accent washes only where needed' },
      { src: img.detailD, alt: 'Dining zone', caption: 'Dining — ceiling bulkhead defines zone without walls' },
      { src: img.detailE, alt: 'Detail', caption: 'Metal + stone junction at terrace threshold' },
    ],
  },
  {
    id: 'wahet-el-rayhan',
    name: 'Wahet El Rayhan',
    location: 'New Cairo, Egypt',
    neighborhood: 'Fifth Settlement — compound',
    type: 'Compound House',
    area: '380 sqm',
    completedYear: '2024',
    durationLabel: '12 months',
    imageSrc: img.compound,
    imageAlt: 'Wahet El Rayhan — New Cairo compound residence',
    description:
      'A New Cairo compound house balancing family practicality with elevated hospitality moments.',
    metaTitle: 'Wahet El Rayhan — Manor House',
    story:
      'Multi-generational living required acoustic separation without losing generosity. We anchored the plan with a central kitchen that supervises both formal reception and the informal family lounge. Finishes repeat at thresholds so the eye reads continuity even when functions split. Execution was phased to align with compound rules and lift-access constraints.',
    briefChallenge:
      'Compound HOA guidelines limited facade changes and weekend noise. Interior demolition windows were tight; kids’ study areas needed acoustic discipline next to the entertainment zone.',
    ourApproach:
      'We produced a phased execution map alongside the contractor, specified resilient finishes in high-traffic routes, and built mock-ups for stair and skirting details before mass installation.',
    scope: [
      'Interior concept & detailed drawings',
      'MEP coordination visibility for interiors',
      'Finish schedules & mock-up alignment',
      'Final styling & handover walkthrough',
    ],
    highlights: [
      'Formal entry sequence with controlled acoustics',
      'Kitchen workflow tuned for daily cooking volume',
      'Kids’ zones that age gracefully',
    ],
    facts: [
      { label: 'Built area', value: '380 sqm' },
      { label: 'Program', value: 'Reception, family wing, 5 bedrooms, staff zone' },
      { label: 'Constraint', value: 'Compound phasing + lift logistics' },
      { label: 'Completion', value: 'Q1 2024' },
    ],
    specifications: [
      {
        category: 'Family zones',
        details: ['Study niches with acoustic door sets', 'Soft flooring in kids’ routes', 'Generous pantry adjacent to service'],
      },
      {
        category: 'Entertaining',
        details: ['Formal majlis separation when required', 'Serving niche outside dining', 'Dimming grouped by room usage'],
      },
      {
        category: 'Durability',
        details: ['High-wear stone at entries', 'Washable finishes in secondary baths', 'Metal kick plates at heavy doors'],
      },
    ],
    materialsPalette: ['Egger panels in joinery', 'Schneider Electric distribution', 'Jotun durable schemes', 'Grohe & Duravit in baths'],
    phases: [
      { name: 'Coordination', description: 'HOA submissions, noise windows, and logistics plan with compound admin.' },
      { name: 'Design', description: 'Layouts locking kitchen spine and acoustic zoning.' },
      { name: 'Build', description: 'Weekly supervision; staged approvals for stone and stair details.' },
      { name: 'Handover', description: 'Snag closure, styling, and orientation for AV and fireplace use.' },
    ],
    gallery: [
      { src: img.compound, alt: 'Main living', caption: 'Primary living — repeated detailing language' },
      { src: img.detailB, alt: 'Family corridor', caption: 'Family wing — durable finishes on floor path' },
      { src: img.detailA, alt: 'Stone detail', caption: 'Stone risers + metal trim at stair mock-up' },
      { src: img.villa, alt: 'Secondary lounge', caption: 'Informal lounge — softer light levels' },
      { src: img.detailD, alt: 'Kitchen connection', caption: 'Kitchen spine sightlines to dining' },
      { src: img.detailE, alt: 'Joinery detail', caption: 'Joinery — Egger panels with bronze pulls' },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug)
}
