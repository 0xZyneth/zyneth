'use client'

import { motion } from 'framer-motion'
import { Building2, Coins, Eye } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const solutions = [
  {
    icon: Building2,
    title: 'Narrative Index Vaults',
    description:
      'Users deposit USDC into curated, on-chain narrative vaults (e.g., AI, RWA, ZK privacy). Each vault tracks a dynamically managed basket of tokens, giving users sector-level exposure in one transaction.',
  },
  {
    icon: Eye,
    title: 'Transparent & Rules Based',
    description:
      'Each narrative vault follows a defined allocation framework - token selection, weightings, and rebalancing are on-chain and auditable. No discretionary black-box management.',
  },
  {
    icon: Coins,
    title: 'One Position. Full Exposure',
    description:
      'Instead of building and rebalancing complex token baskets, users gain diversified narrative exposure through a single vault token - reducing friction, gas costs, and execution risk.',
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,197,94,0.06)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            The Zyneth Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, trustless narrative exposure. One deposit. Full
            diversification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full bg-zinc-900/50 border-white/5 hover:border-zyneth-green/20 transition-colors group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-zyneth-green/10 flex items-center justify-center mb-6 group-hover:bg-zyneth-green/20 transition-colors">
                    <solution.icon className="w-6 h-6 text-zyneth-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid sm:grid-cols-4 gap-8 text-center"
        >
          {[
            { step: '1', text: 'Choose a narrative vault (AI, RWA, ZK...)' },
            { step: '2', text: 'Deposit USDC in one transaction' },
            { step: '3', text: 'Receive a composable ERC-4626 vault token' },
            { step: '4', text: 'Your basket auto-rebalances on-chain' },
          ].map((item, i) => (
            <div key={item.step} className="relative">
              <div className="w-10 h-10 rounded-full bg-zyneth-green text-black font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                {item.step}
              </div>
              <p className="text-sm text-muted-foreground">{item.text}</p>
              {i < 3 && (
                <div className="hidden sm:block absolute top-5 left-[60%] w-[80%] h-px bg-gradient-to-r from-zyneth-green/30 to-transparent" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
