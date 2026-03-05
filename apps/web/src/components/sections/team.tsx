'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const team = [
  {
    name: 'Kizito Chukwuma',
    role: 'Co-founder & CEO',
    image: '/team-kizito.jpg',
  },
  {
    name: 'Mihail Kirov',
    role: 'Co-founder & CTO',
    image: '/team-mihail.jpg',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.06)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Meet the Founding Team
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="bg-zinc-900/50 border-white/5 hover:border-zyneth-green/20 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-white/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-zyneth-green mt-1">
                    {member.role}
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
