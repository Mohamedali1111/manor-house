'use client'

import { useState } from 'react'
import { PageHero } from '@/components/layout/PageHero'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { FormStatus } from '@/components/ui/FormStatus'
import { Calendar, Clock, User, MapPin } from 'lucide-react'
import { simulateFormSuccess } from '@/lib/form-submit'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    propertyType: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    try {
      await simulateFormSuccess(750)
      setSubmitStatus('success')
    } catch {
      setSubmitStatus('idle')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Booking"
        title={
          <>
            Start Your <span className="gradient-text-gold">Project</span>
          </>
        }
        description="Tell us about your property and ambitions — our studio reviews every submission and responds with clear next steps."
      />

      <section className="bg-background px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-3xl">
          {submitStatus === 'success' ? (
            <FormStatus
              type="success"
              message="Thank you. Your project brief is logged — our studio will reply within one business day with next steps."
            />
          ) : (
          <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-md sm:p-8">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">Project booking</h2>
              <p className="text-sm text-foreground/70">
                Share your details — we respond with clarity on feasibility and timing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <User className="w-6 h-6 text-accent mr-3" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="+20 …"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Calendar className="w-6 h-6 text-accent mr-3" />
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Interior Design</option>
                      <option value="commercial">Commercial Interior Design</option>
                      <option value="hospitality">Hospitality Design</option>
                      <option value="renovation">Home Renovation</option>
                      <option value="consultation">Design Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1m">Under EGP 1,000,000</option>
                      <option value="1m-3m">EGP 1,000,000 – 3,000,000</option>
                      <option value="3m-8m">EGP 3,000,000 – 8,000,000</option>
                      <option value="8m-15m">EGP 8,000,000 – 15,000,000</option>
                      <option value="15m-30m">EGP 15,000,000 – 30,000,000</option>
                      <option value="over-30m">EGP 30,000,000+</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                      Desired Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-foreground mb-2">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">Single Family Home</option>
                      <option value="condo">Condominium</option>
                      <option value="office">Office Space</option>
                      <option value="retail">Retail Space</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="hotel">Hotel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Property Address */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-accent mr-3" />
                  Property Address
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="123 Main Street"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="Cairo"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-foreground mb-2">
                        Governorate *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="Governorate"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-foreground mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="Postal code"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-accent mr-3" />
                  Project Description
                </h3>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                    placeholder="Please describe your project in detail. Include information about the spaces you want to design, your style preferences, any specific requirements, and what you hope to achieve..."
                  />
                </div>
              </div>

              <PremiumButton type="submit" size="md" className="w-full border-glow" disabled={submitStatus === 'loading'}>
                {submitStatus === 'loading' ? 'Sending…' : 'Submit project request'}
              </PremiumButton>
            </form>
          </div>
          )}
        </div>
      </section>

      <section className="bg-gradient-to-br from-muted to-card px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">What happens next</h2>
            <p className="mx-auto max-w-2xl text-sm text-foreground/70">After you submit, our team follows this rhythm.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { n: '1', t: 'Confirmation', d: 'Acknowledgement within one business day.' },
              { n: '2', t: 'Review', d: 'Brief assessed against studio capacity and scope.' },
              { n: '3', t: 'Contact', d: 'Call or WhatsApp to align on visit or proposal.' },
              { n: '4', t: 'Proposal', d: 'Timeline, phases, and investment bands documented.' },
            ].map((step) => (
              <div key={step.n} className="rounded-xl border border-border/60 bg-card p-4 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-sm font-bold text-white">{step.n}</div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">{step.t}</h3>
                <p className="text-xs leading-relaxed text-foreground/70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
