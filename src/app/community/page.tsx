'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Menu, X } from 'lucide-react'

export default function Community() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1
      });
  
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
  
      return () => observer.disconnect();
    }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
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
      <div className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-[url('/images/mission.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-red-900/80"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl font-bold font-balooThambi">
            Our Community
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
  <div className="relative overflow-hidden border rounded-2xl shadow-lg">
    <Image 
      src="/images/community1.png" 
      alt="Community Image 1"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Image 2 */}
  <div className="relative overflow-hidden border rounded-2xl shadow-lg">
    <Image 
      src="/images/community2.png" // Replace with the second image file name
      alt="Community Image 2"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Image 3 */}
  <div className="relative overflow-hidden border rounded-2xl shadow-lg">
    <Image 
      src="/images/community3.png" // Replace with the third image file name
      alt="Community Image 3"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Image 4 */}
  <div className="relative overflow-hidden border rounded-2xl shadow-lg">
    <Image 
      src="/images/community4.png" // Replace with the fourth image file name
      alt="Community Image 4"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
</div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed">
            <strong>Talent Tribe</strong> is committed to empowering individuals across Oyo to build successful careers in technology and innovation.
          </p>

          <p className="text-lg leading-relaxed">
            We believe that fostering innovation and growth requires strong leadership and mentorship, which is why we invest heavily in community-building skills.
          </p>

          <p className="text-lg leading-relaxed">
            That's why we're working towards leads to establish chapters in their respective regions. If you have the skills and capability to lead a community-focused initiative, we encourage you to apply.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>Local Engagement:</strong> Real success looks virtual and in-person events, workshops, and training sessions that help build skills and foster connections within our community.
          </p>

          <p className="text-lg leading-relaxed">
            We encourage knowledge-sharing and innovation within these chapters in our designated regions.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-red-900 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="inline-block">
                <Image 
                  src="/images/Talent Tibe Official white logo 1.png" 
                  alt="Talent Tribe Logo" 
                  width={120} 
                  height={40}
                  className="h-auto"
                />
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-white/80 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white/80 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white/80 transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="hover:text-white/80 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="hover:text-white/80 transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/institution" className="hover:text-white/80 transition-colors">
                    Institution
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p>&copy; Copyright {new Date().getFullYear()} Talent Tribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

