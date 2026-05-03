import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/home/Hero'
import { HomeBelowFallback } from '@/components/layout/HomeBelowFallback'

const HomeBelowFold = dynamic(
  () => import('@/components/sections/home/HomeBelowFold').then((m) => m.HomeBelowFold),
  {
    loading: () => <HomeBelowFallback />,
    ssr: true,
  }
)

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HomeBelowFold />
    </div>
  )
}
