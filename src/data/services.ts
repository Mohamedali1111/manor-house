export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  imageSrc: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'interior-design',
    title: "Interior Design",
    description: "Complete interior design solutions from concept to completion, including space planning, furniture selection, and color schemes.",
    icon: "🎨",
    features: ["Concept Development", "Space Planning", "Material Selection", "Project Management"],
    imageSrc: "/interior-design-service.jpg",
    imageAlt: "Interior Design Service - Manor House"
  },
  {
    id: 'electrical-plumbing',
    title: "Electrical & Plumbing",
    description: "Professional electrical and plumbing installations with attention to safety, efficiency, and modern technology integration.",
    icon: "⚡",
    features: ["Smart Home Integration", "Energy Efficiency", "Safety Compliance", "Modern Fixtures"],
    imageSrc: "/electrical-plumbing-service.jpg",
    imageAlt: "Electrical and Plumbing Service - Manor House"
  },
  {
    id: 'space-planning',
    title: "Space Planning",
    description: "Intelligent layout design that maximizes functionality while maintaining aesthetic appeal and flow.",
    icon: "📐",
    features: ["Traffic Flow Analysis", "Furniture Layout", "Storage Solutions", "Multi-functional Spaces"],
    imageSrc: "/space-planning-service.jpg",
    imageAlt: "Space Planning Service - Manor House"
  },
  {
    id: 'consultation',
    title: "Consultation",
    description: "Expert advice and guidance to help you make informed decisions about your interior design project.",
    icon: "💡",
    features: ["Design Consultation", "Budget Planning", "Vendor Selection", "Timeline Management"],
    imageSrc: "/consultation-service.jpg",
    imageAlt: "Design Consultation Service - Manor House"
  }
]
