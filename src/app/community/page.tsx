'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Menu } from 'lucide-react'

export default function Community() {
    const [menuOpen, setMenuOpen] = useState(false);

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
        {/* Navigation */}
      <nav className="relative bg-white z-10 flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-white mr-10  flex items-center ">
          <Image src="/images/Talent Tibe Color Logo 1.png"  className="animate-pulse duration-5" alt="logo" width={80} height={80} />
        

        {/* Desktop Links */}
        <div className="hidden ml-10 md:flex items-center gap-4">
          <Link href="/about" className="text-red-900 hover:text-black transition-colors">About us</Link>
          <Link href="/team" className="text-red-900 hover:text-black">Team</Link>
          <Link href="/community" className="text-red-900 hover:text-black">Community</Link>
          <Link href="/blog" className="text-red-900 hover:text-black">blog</Link>
        </div>
        </Link>
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-red-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-transparent text-white p-4 md:hidden z-20">
          {['About', 'Team', 'Community', 'blog'].map((item) => (
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

