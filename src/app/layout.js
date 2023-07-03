'use client'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Header from './components/Header'
import Footer from './components/Footer'


const montserrat = Montserrat({ subsets: ['latin'], variable: "--font-mont" })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
    <html lang="es" className='`${montserrat.variable}`'>
      <body className={montserrat.className}><Header />{children}<Footer /></body>
    </html>
    </AnimatePresence>
  )
}
