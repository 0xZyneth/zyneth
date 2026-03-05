'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          interests: formData.get('interest'),
        }),
      })

      if (!res.ok && res.status !== 200) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(34,197,94,0.1)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get Early
              <br />
              <span className="text-zyneth-green">Access</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be among the first to access Zyneth narrative vaults. Early
              depositors will be eligible for our Genesis Airdrop and points
              program.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zyneth-green/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-zyneth-green" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <a
                    href="mailto:hello@zyneth.xyz"
                    className="text-white hover:text-zyneth-green transition-colors"
                  >
                    hello@zyneth.xyz
                  </a>
                </div>
              </div>
            </div>

            {/* CTA badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['AI Agents', 'RWA', 'ZK Privacy', 'DeFi', 'Gaming'].map(
                (narrative) => (
                  <span
                    key={narrative}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground"
                  >
                    {narrative}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-zinc-900/50 border-white/5">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-zyneth-green/10 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-zyneth-green" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      You&apos;re on the list!
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ll be in touch with early access details soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          className="bg-white/5 border-white/10 focus:border-zyneth-green"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          className="bg-white/5 border-white/10 focus:border-zyneth-green"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-white/5 border-white/10 focus:border-zyneth-green"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">
                        Which narratives interest you?
                      </Label>
                      <Textarea
                        id="interest"
                        name="interest"
                        placeholder="AI agents, RWA, ZK privacy..."
                        rows={3}
                        className="bg-white/5 border-white/10 focus:border-zyneth-green resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-400 text-center">
                        {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-zyneth-green hover:bg-zyneth-green-dark text-black font-semibold py-6 disabled:opacity-50"
                      size="lg"
                    >
                      {loading ? 'Submitting...' : 'Get Early Access'}
                      {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Join the waitlist for launch priority and Genesis Airdrop
                      eligibility.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
