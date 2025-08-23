export interface Project {
  id: string
  name: string
  location: string
  type: string
  area: string
  imageSrc: string
  imageAlt: string
  description: string
}

export const projects: Project[] = [
  {
    id: 'gana-zayed',
    name: "Gana-Zayed Villa",
    location: "Cairo, Egypt",
    type: "Luxury Villa",
    area: "450 sqm",
    imageSrc: "/project-gana-zayed.jpg",
    imageAlt: "Gana-Zayed Villa Interior Design - Manor House",
    description: "Modern luxury villa with contemporary design elements and premium finishes"
  },
  {
    id: 'dar-masr',
    name: "Dar-Masr Residence",
    location: "Alexandria, Egypt",
    type: "Penthouse",
    area: "280 sqm",
    imageSrc: "/project-dar-masr.jpg",
    imageAlt: "Dar-Masr Residence Interior Design - Manor House",
    description: "Elegant penthouse featuring sophisticated design and panoramic views"
  },
  {
    id: 'wahet-el-rayhan',
    name: "Wahet El Rayhan",
    location: "New Cairo, Egypt",
    type: "Compound House",
    area: "380 sqm",
    imageSrc: "/project-wahet-el-rayhan.jpg",
    imageAlt: "Wahet El Rayhan Compound House - Manor House",
    description: "Contemporary compound house with modern amenities and elegant interiors"
  }
]
