'use client'

import { useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from '../components/ui/button'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function WhoWeAre() {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/aboutfr.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* <div 
          className="absolute inset-0 bg-red-900/90"
          aria-hidden="true"
        /> */}
        
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-white text-2xl font-bold flex items-center gap-2">
            <Image src="/images/Talent Tibe Color Logo 1.png" alt="logo" width={80} height={80} />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/who-we-are" className="text-white hover:text-white/80 transition-colors">
              About us
            </Link>
            <Link href="/team" className="text-white hover:text-white/80 transition-colors">
              Team
            </Link>
            <Link href="/community" className="text-white hover:text-white/80 transition-colors">
              Community
            </Link>
            <Link href="/blog" className="text-white hover:text-white/80 transition-colors">
              Blog
            </Link>
            <Link href="/donate" className="text-white hover:text-white/80 transition-colors">
              Donate
            </Link>
            <Link href="/institution" className="text-white hover:text-white/80 transition-colors">
              Institution
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
            Connecting Ecosystem Builder's
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Who We Are Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-20 items-center animate-on-scroll fade-in">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600">
              Talent Tribe is a community hub for developers and entrepreneurs to innovate, 
              share growth and opportunity. A platform for Tech beginners to connect, create, 
              share and cultivate a culture of innovation and creativity.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image 
              src="/images/who-we-are.jpg" 
              alt="Community gathering" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-20 items-center animate-on-scroll fade-in">
          <div className="relative h-[300px] md:order-2">
            <Image 
              src="/images/mission.jpg" 
              alt="Our mission" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4">Mission</h2>
            <p className="text-gray-600">
              Our mission is to empower aspiring tech professionals through community-driven learning, 
              mentorship, and hands-on experience. We strive to bridge the gap between education and 
              industry by fostering an environment where innovation meets practical application of technology.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-20 items-center animate-on-scroll fade-in">
          <div>
            <h2 className="text-3xl font-bold mb-4">Vision</h2>
            <p className="text-gray-600">
              To be the premier tech community in Africa, recognized for cultivating innovative solutions 
              and nurturing the next generation of tech leaders. We envision a future where every aspiring 
              technologist has access to the resources, mentorship, and opportunities they need to succeed.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image 
              src="/images/vision.jpg" 
              alt="Our vision" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Our Community Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-20 items-center animate-on-scroll fade-in">
          <div className="relative h-[300px] md:order-2">
            <Image 
              src="/images/community.jpg" 
              alt="Our community" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4">Our Community</h2>
            <p className="text-gray-600">
              Our community is a vibrant hub of tech enthusiasts, developers, designers, and innovators. 
              Together, we create an inclusive space where knowledge is shared, skills are developed, 
              and lasting connections are made.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/">
                <Image src="/images/Talent Tibe Official white logo 1.png" alt="logo" width={80} height={80} />
              </Link>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/who-we-are">About us</Link></li>
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/community">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/donate">Donate</Link></li>
                <li><Link href="/institution">Institution</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p>&copy; Copyright 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

