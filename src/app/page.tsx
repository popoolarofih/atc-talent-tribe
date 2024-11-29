'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "./components/ui/button"
import { Facebook, Twitter, Instagram, Youtube,  ArrowRight, Menu } from 'lucide-react'
import { FaTelegramPlane} from 'react-icons/fa'
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, {
      threshold: 0.1
    })

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex">
      {/* Left Section with Background Image and Content on Top */}
      <div className="relative w-full lg:w-3/5">
        {/* Background Image */}
        
        
        {/* Red Overlay (Optional) */}
        <div 
          className="absolute inset-0 bg-red-900 opacity-50 animate-on-scroll fade-in duration-1000 delay-300"
          aria-hidden="true"
        />

        <div 
          className="h-full bg-[url('/images/firstbgr.png')] bg-cover bg-center absolute inset-0"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-6 py-4 animate-on-scroll slide-in-from-top duration-500">
            <Link href="/" className="text-white text-2xl font-bold flex items-center gap-2 animate-pulse">
              <Image src="/images/Talent Tibe Official white logo 1.png" alt="logo" width={80} height={80} />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-white hover:text-white/80 transition-colors">
                About us
              </Link>
              <Link href="/team" className="text-white hover:text-white/80 transition-colors">
                Team
              </Link>
              <Link href="/community" className="text-white hover:text-white/80 transition-colors">
                Community
              </Link>
              <Link href="/blog" className="text-white hover:text-white/80 transition-colors">
                blog
              </Link>
              <Link href="/donate" className="text-white hover:text-white/80 transition-colors">
                Donate
              </Link>
              <Link href="/institution" className="text-white hover:text-white/80 transition-colors">
                Institution
              </Link>
            </div>
            {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
          </nav>
          {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-transparent text-white p-4 md:hidden z-20">
          {['About us', 'Team', 'Community', 'blog', 'Donate', 'Institution'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="block py-2 hover:text-white/80 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
          {/* Hero Section */}
          <main className="flex-1 flex flex-col justify-center px-6 py-20">
            <div className="max-w-2xl">
              <h1 className="text-white text-5xl font-bold mb-4 animate-on-scroll slide-in-from-left duration-700">
                Connecting Ecosystem Builder's
              </h1>
              <p className="text-white/90 text-xl mb-8 animate-on-scroll slide-in-from-left duration-700 delay-150">
                A community of creative minds driving the Oyo ecosystem through Innovation.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16 animate-on-scroll slide-in-from-left duration-700 delay-300">
                <Button
                  variant="secondary"
                  className="bg-white text-black hover:bg-white/90 rounded-xl border animate-pulse-slow hover:scale-105 transition-size duration-300"
                >
                  Who we are
                </Button>
                <Button
                  variant="secondary"
                  className="bg-white text-black hover:bg-white/90 rounded-xl border animate-pulse-slow hover:scale-105 transition-size duration-300"
                >
                  Join our Community  <FaTelegramPlane className="h-6 w-6 animate-ping" />
                </Button>
                <Button
                  variant="secondary"
                  className="bg-white text-black hover:bg-white/90 rounded-xl border animate-pulse-slow hover:scale-105 transition-size duration-300"
                >
                  Login
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 ml-6 animate-on-scroll slide-in-from-left duration-700 delay-500">
                <span className="px-6 py-2 rounded-xl border border-white text-white">
                  Developer
                </span>
                <span className="px-6 py-2 rounded-xl border border-white text-white">
                  Designer
                </span>
                <span className="px-6 py-2 rounded-xl border border-white text-white">
                  Community Manager
                </span>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="hidden lg:block w-2/5">
        <div 
          className="h-full bg-[url('/images/image.jpg')] bg-cover bg-center animate-on-scroll fade-in duration-1000 delay-500"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
