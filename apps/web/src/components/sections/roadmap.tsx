'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    phase: 'I',
    title: 'Protocol Initiation',
    timeline: 'Q1 - Early Q2 2026',
    description:
      'Protocol architecture, vault mechanics, smart contract implementation and V1 testnet launch with 3 narrative vaults.',
    active: true,
  },
  {
    phase: 'II',
    title: 'Mainnet V1',
    timeline: 'Q2 - Q3 2026',
    description:
      'Launch mainnet V1 with 3 narrative vaults and full DeFi composability. Deploy 10-week points program to bootstrap initial TVL.',
    active: true,
  },
  {
    phase: 'III',
    title: 'TGE & Governance',
    timeline: 'Q3 2026',
    description:
      'Execute TGE and Genesis Airdrop. Launch Zyneth governance, enabling token holders to propose new narrative vaults and vote on protocol parameters.',
    active: false,
  },
  {
    phase: 'IV',
    title: 'Mainnet V2',
    timeline: 'Q3 2026 - Q1 2027',
    description:
      'Launch permissionless vault creation and yield-bearing strategies where vault tokens automatically earn returns through on-chain DeFi strategies.',
    active: false,
  },
  {
    phase: 'V',
    title: 'Scale',
    timeline: '2027+',
    description:
      'Advanced vault offerings including multi-narrative diversification, custom institutional vaults, and multi-chain expansion.',
    active: false,
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.08)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Development Roadmap
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-white/10" />
          <div
            className="hidden lg:block absolute top-8 left-0 h-0.5 bg-zyneth-green"
            style={{ width: '40%' }}
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Circle */}
                <div className="flex lg:justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold ${
                      phase.active
                        ? 'bg-zyneth-green text-black'
                        : 'bg-zinc-800 text-white border border-white/10'
                    }`}
                  >
                    {phase.phase}
                  </div>
                </div>

                <div className="lg:text-center">
                  <h3 className="text-lg font-bold mb-1">{phase.title}</h3>
                  <p className="text-xs text-zyneth-green font-medium mb-3">
                    {phase.timeline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
