'use client'

import { useState } from 'react'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'

export default function ConsultationPage() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [consultationType, setConsultationType] = useState('')

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  const consultationTypes = [
    {
      id: 'initial',
      title: 'Initial Consultation',
      duration: '60 minutes',
      price: 'Free',
      description: 'Perfect for discussing your vision and project requirements'
    },
    {
      id: 'detailed',
      title: 'Detailed Design Review',
      duration: '90 minutes',
      price: '$150',
      description: 'Comprehensive review of your space with design recommendations'
    },
    {
      id: 'virtual',
      title: 'Virtual Consultation',
      duration: '45 minutes',
      price: '$75',
      description: 'Online consultation via video call for remote clients'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log('Booking submitted:', { selectedDate, selectedTime, consultationType })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-card via-muted to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-xs sm:text-sm font-semibold">Book Consultation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Schedule Your <span className="gradient-text-gold">Consultation</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Get expert advice and personalized design recommendations for your space. 
              Choose from our flexible consultation options.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Choose Your Consultation
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Select the consultation type that best fits your needs and schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  consultationType === type.id
                    ? 'border-accent bg-accent/5'
                    : 'border-border hover:border-accent/50'
                }`}
                onClick={() => setConsultationType(type.id)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{type.title}</h3>
                  <div className="text-2xl font-bold text-accent mb-2">{type.price}</div>
                  <div className="text-sm text-foreground/60 mb-4">{type.duration}</div>
                  <p className="text-foreground/70 leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-muted to-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Book Your Appointment
            </h2>
            <p className="text-lg text-foreground/70">
              Fill out the form below to schedule your consultation.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Select Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  required
                >
                  <option value="">Choose time slot</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                placeholder="Your full name"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Details
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                placeholder="Tell us about your project, space, and any specific questions you'd like to discuss..."
                required
              />
            </div>
            
            <PremiumButton
              type="submit"
              size="lg"
              className="w-full border-glow"
            >
              Book Consultation
            </PremiumButton>
          </form>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              What to Expect
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Here&apos;s what happens during your consultation with our design experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Meet & Greet</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We&apos;ll introduce ourselves and learn about your design preferences and lifestyle.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Space Assessment</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We&apos;ll evaluate your space, take measurements, and identify opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Design Discussion</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We&apos;ll discuss design concepts, color schemes, and material options.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Next Steps</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We&apos;ll outline the project timeline and discuss how to move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-accent/8 via-highlight/15 to-accent/8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Book your consultation today and take the first step toward your dream space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PremiumButton
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              className="border-glow"
            >
              Book Now
            </PremiumButton>
            <PremiumButton
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              size="lg"
              className="border-glow"
            >
              Contact Us
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  )
}
