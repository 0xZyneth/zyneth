'use client'

import { Lock, Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ZynethLogoFull } from './logo'

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#">
            <ZynethLogoFull />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <VaultTab />
            <a href="#contact">
              <Button className="ml-4 bg-zyneth-green hover:bg-zyneth-green-dark text-black font-semibold">
                Get Early Access
              </Button>
            </a>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background border-white/10"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-2 text-lg text-muted-foreground hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <VaultTab />
                  <a href="#contact" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-zyneth-green hover:bg-zyneth-green-dark text-black font-semibold mt-4">
                      Get Early Access
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

function VaultTab() {
  return (
    <div className="relative group">
      <button
        className="px-4 py-2 text-sm text-muted-foreground/50 cursor-not-allowed flex items-center gap-1.5 transition-colors"
        disabled
      >
        <Lock className="w-3.5 h-3.5" />
        Vaults
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-3 py-1.5 bg-zyneth-green text-black text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Coming Soon
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zyneth-green rotate-45" />
      </div>
    </div>
  )
}
