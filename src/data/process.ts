import type { LucideIcon } from 'lucide-react'
import { DoorOpen, Lightbulb, FileSignature, HardHat, Bell, KeyRound } from 'lucide-react'

export interface ProcessStep {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const processSteps: ProcessStep[] = [
  {
    id: 'visit',
    title: 'Initial Visit',
    description:
      'We walk the space with you, capture measurements, and align on lifestyle, priorities, and expectations.',
    icon: DoorOpen,
  },
  {
    id: 'concept',
    title: 'Planning & Concept',
    description:
      'Layouts, mood direction, and material direction come together in a clear concept you can see and approve.',
    icon: Lightbulb,
  },
  {
    id: 'contract',
    title: 'Contract & Budget',
    description:
      'Scope, milestones, and investment are documented so execution stays predictable and transparent.',
    icon: FileSignature,
  },
  {
    id: 'execution',
    title: 'Execution & Supervision',
    description:
      'Our team coordinates trades, finishes, and installations with disciplined site supervision.',
    icon: HardHat,
  },
  {
    id: 'updates',
    title: 'Regular Updates',
    description:
      'Structured reports and scheduled reviews keep you informed without surprises.',
    icon: Bell,
  },
  {
    id: 'handover',
    title: 'Final Handover',
    description:
      'Punch-list closure, styling layers, and a composed walkthrough deliver a finished residence.',
    icon: KeyRound,
  },
]
