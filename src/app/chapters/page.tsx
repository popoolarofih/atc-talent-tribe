'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'
import { Button } from '@/app/components/ui/button'

const institutions = [
  "Ibanduntan University",
  "Dominican University",
  "Tech Technical University",
  "Lead City University",
  "Ibadan Polytechnic",
  "Popular University",
  "City Polytechnic",
  "Ace Creative University",
  "National Polytechnic",
  "LAUTECH Ogbomoso",
  "Federal Cooperative College",
  "Federal College of Education",
  "Ajayi Polytechnic",
  "Adeniran Ogunsanya Polytechnic",
  "Dominican University",
  "Atiba University",
  "Ajayi College of Education, Oyo"
]

export default function Chapters() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Talent Tibe Color Logo 1.png"
                alt="Talent Tribe Logo"
                width={80}
                height={80}
                className="h-11 w-auto"
              />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-md p-2 text-red-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-red-900 hover:text-black transition-colors">
                About us
              </Link>
              <Link href="/team" className="text-red-900 hover:text-black transition-colors">
                Team
              </Link>
              <Link href="/community" className="text-red-900 hover:text-black transition-colors">
                Community
              </Link>
              <Link href="/blog" className="text-red-900 hover:text-black transition-colors">
                Blog
              </Link>
              <Link href="/chapters" className="text-red-900 hover:text-black transition-colors">
                Our Chapters
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                href="/about" 
                className="block text-red-900 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link 
                href="/team" 
                className="block text-red-900 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/community" 
                className="block text-red-900 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                href="/blog" 
                className="block text-red-900 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/chapters" 
                className="block text-red-900 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Chapetrs
              </Link>
              
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 min-h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-[url('/images/chapters.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-red-900/80"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold font-balooThambi mb-4">
            Oyo Talent Tribe Chapter
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Join our growing community and be part of the tech revolution
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              <Link 
                href={`/chapters/${institution.toLowerCase().replace(/\s+/g, '-')}`}
                className="block p-4 border rounded-lg hover:border-red-900 transition-colors bg-white hover:bg-red-50"
              >
                <span className="text-gray-800 group-hover:text-red-900 transition-colors">
                  {institution}
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition-colors"
          >
            Lead a Chapter if your school is not Listed
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-red-900 text-white mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image 
                src="/images/Talent Tibe Official white logo 1.png" 
                alt="Talent Tribe Logo" 
                width={120} 
                height={40}
                className="h-auto"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white/80 transition-colors">About Us</Link></li>
                <li><Link href="/team" className="hover:text-white/80 transition-colors">Team</Link></li>
                <li><Link href="/community" className="hover:text-white/80 transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="hover:text-white/80 transition-colors">Get in Touch</Link></li>
                <li><Link href="/support" className="hover:text-white/80 transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Talent Tribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

