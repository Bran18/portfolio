import { Analytics } from '@vercel/analytics/react'
import { cn } from '@/lib/utils'
import './globals.css'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


export const metadata = {
  title: 'Brandon Fernández | Full Stack Developer',
  description: 'Full Stack Developer specializing in Web3, Open Source, and AI innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        'min-h-screen bg-background antialiased',
        GeistSans.variable,
        GeistMono.variable
      )}>
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}

