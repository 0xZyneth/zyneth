'use client'

import { motion } from 'framer-motion'
import { ArrowDownLeft, TrendingUp, Wallet } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const fees = [
  {
    icon: Wallet,
    title: 'Management Fees',
    rate: '1.5%',
    subtitle: 'annual',
    description:
      'Annual management fee on vault assets, covering narrative curation, rebalancing, and infrastructure costs. Standard rate aligned with DeFi index protocols.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Fees',
    rate: '20%',
    subtitle: 'on yield',
    description:
      'As yield-generating strategies launch, we introduce a 20% performance fee on returns generated through lending, staking, and liquidity provision.',
  },
  {
    icon: ArrowDownLeft,
    title: 'Redemption Fees',
    rate: '0.05%',
    subtitle: 'flat',
    description:
      'Flat fee on all withdrawals, significantly lower than market standard. Prevents arbitrage bot exploitation while remaining nearly invisible to legitimate users.',
  },
]

export function BusinessModelSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Business Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Revenue directly aligned with vault adoption and capital growth,
            creating a scalable model that compounds as the ecosystem expands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {fees.map((fee, index) => (
            <motion.div
              key={fee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full bg-zinc-900/50 border-white/5">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-zyneth-green/10 flex items-center justify-center mb-6">
                    <fee.icon className="w-6 h-6 text-zyneth-green" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-zyneth-green">
                      {fee.rate}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {fee.subtitle}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{fee.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {fee.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
