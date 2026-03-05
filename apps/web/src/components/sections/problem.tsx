'use client'

import { motion } from 'framer-motion'
import { DollarSign, Target, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const problems = [
  {
    number: '01',
    title: 'No Direct Narrative Exposure',
    description:
      'Investors want exposure to crypto narratives like ZK privacy but have no simple way to get it. Current options require manually identifying 15-20 tokens, buying across multiple exchanges and constant monitoring as narratives evolve.',
    icon: Target,
    variant: 'green' as const,
  },
  {
    number: '02',
    title: 'Capital Inefficiency',
    description:
      'Traders deploy $50K-500K building narrative baskets, pay 0.3-1% slippage on rebalancing, and capture only 40-60% of the move due to execution costs and token selection risk.',
    icon: DollarSign,
    variant: 'dark' as const,
  },
  {
    number: '03',
    title: 'Alpha Left on the Table',
    description:
      'Smart money spots narratives 2-4 weeks early but can\'t efficiently express conviction. The real edge – recognizing "RWA is heating up" – goes unexpressed or diluted across 15 positions.',
    icon: Zap,
    variant: 'light' as const,
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            What&apos;s Broken in
            <br />
            Today&apos;s Market
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Crypto narratives create massive wealth generation opportunities,
            but capturing them requires constant research, manual rebalancing,
            and significant capital deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card
                className={`h-full border-0 ${
                  problem.variant === 'green'
                    ? 'bg-zyneth-green text-black'
                    : problem.variant === 'dark'
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-100 text-black'
                }`}
              >
                <CardContent className="p-8">
                  <span
                    className={`text-6xl font-bold block mb-6 ${
                      problem.variant === 'green'
                        ? 'text-black/20'
                        : problem.variant === 'dark'
                          ? 'text-white/10'
                          : 'text-black/10'
                    }`}
                  >
                    {problem.number}.
                  </span>
                  <problem.icon
                    className={`w-6 h-6 mb-4 ${
                      problem.variant === 'green'
                        ? 'text-black'
                        : problem.variant === 'dark'
                          ? 'text-zyneth-green'
                          : 'text-zyneth-green-dark'
                    }`}
                  />
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      problem.variant === 'green'
                        ? 'text-black/80'
                        : problem.variant === 'dark'
                          ? 'text-zinc-400'
                          : 'text-zinc-600'
                    }`}
                  >
                    {problem.description}
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
