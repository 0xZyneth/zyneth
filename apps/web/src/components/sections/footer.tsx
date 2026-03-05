import { Separator } from '@/components/ui/separator'
import { ZynethLogoFull } from '../logo'

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <ZynethLogoFull />
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@zyneth.xyz"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              hello@zyneth.xyz
            </a>
          </div>
        </div>
        <Separator className="my-8 bg-white/5" />
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Zyneth. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
