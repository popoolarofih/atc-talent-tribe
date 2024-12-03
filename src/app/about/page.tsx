'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa'
import { Menu, X } from 'lucide-react'

export default function WhoWeAre() {

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
    <div className="min-h-screen">
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
      <div className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/aboutfr.png')] bg-cover bg-center"
          aria-hidden="true"
        />
       
        {/* Hero Content */}
        <div className="px-20 my-28 flex">
          <div>
          <div className='relative'>
          <h1 className="text-white text-5xl font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
            Connecting Ecosystem Builder's
          </h1> <br />
          </div>
          <div className="relative">
          <h6 className="text-white font-balooThambi">A community of creative minds driving the Oyo ecosystem through Innovation.</h6>
          </div>
          </div>
        </div>
        
      </div>

      <main className="container mx-auto px-4 py-16">
        {/* Who We Are Section */}
        <section className="mb-20 items-center animate-on-scroll fade-in">
          <div>
            <h2 className="text-3xl text-center font-bold mb-4 animate-bounce duration-500">Who We Are</h2>
            <p className="text-black gap-8 text-justify mb-4 text-[25px]">
            Talent Tribe is a community for Oyo students to collaborate, innovate, and foster growth and opportunity.
            </p>
            <p className="text-black gap-8 text-justify text-[25px]">
            A platform for Oyo students to connect, create, and cultivate a culture of innovation and growth.
            </p>
          </div>
        </section>
       {/* Mission Section */}
<section className="grid md:grid-cols-2 gap-12 mb-20 items-center ">
  {/* Image on the Left */}
  <div className="relative h-[350px]  md:order-1">
    <Image 
      src="/images/mission.png" 
      alt="Our mission" 
      fill
      className="object-cover rounded-lg animate-in duration-1000"
    />
  </div>

  {/* Text on the Right */}
  <div className="md:order-2">
    <h2 className="text-3xl font-bold mb-6 text-center animate-bounce duration-500">Mission</h2>
    <p className="text-black text-justify text-2xl mb-6">
      Our Mission is to create opportunities for Oyo's tech-savvy students to innovate, collaborate, and shape the future. 
    </p>
    <p className="text-black text-justify text-2xl">
      Create opportunities for Oyo's tech-savvy students to develop essential skills, collaborate with like-minded peers, 
      and launch successful careers in technology.
    </p>
  </div>
</section>
{/* Vision Section */}
<section className="grid md:grid-cols-2 gap-12 mb-20 items-center animate-on-scroll fade-in">
          <div>
            <h2 className="text-3xl font-bold text-center mb-6 animate-bounce duration-500">Vision</h2>
            <p className="text-black text-justify text-2xl animate-in">
              Driving innovation and opportunity for Oyo's students through collaboration and community. 
              We nurture well-rounded individuals with strong academic foundations, creative thinking skills, and a global perspective.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image 
              src="/images/vision.png" 
              alt="Our Vision" 
              fill 
              className="object-cover rounded-lg animate-in duration-1000"
            />
          </div>
        </section>

        {/* Our Community Section */}
        <section className="grid md:grid-cols-2 bg-gray-100 gap-12 mb-20 items-center p-8 rounded-lg">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-center mb-6 animate-bounce duration-700">Our Community</h2>
            <p className="text-black text-justify text-xl mb-4">
            Our community is a safe enabling environment on Telegram chat, consisting of diverse people all working together to grow a collaborative system.
            </p>
            <p className="text-black text-justify text-xl mb-4">
            Currently we have smaller communities of people in a particular city called chapters in Oyo.
            </p>
          </div>
          <div className="relative h-[300px] md:order-1">
            <Image 
              src="/images/community.png" 
              alt="Our Community" 
              fill 
              className="object-cover rounded-lg animate-in duration-1000"
            />
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
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/community">Community</Link></li>
                <li><Link href="/blog">blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/joinus">Join Us</Link></li>
                <li><Link href="/donate">Donate</Link></li>
                <li><Link href="/chapter">Lead a Chapter</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
  <Link href="#"target="_blank" className="hover:text-white/80 transition-colors">
    <FaTelegramPlane className="h-6 w-6" />
  </Link>

  {/* X (Twitter) */}
  <Link href="#" target="_blank" className="hover:text-white/80 transition-colors">
    <FaTwitter className="h-6 w-6" />
  </Link>

  {/* Discord */}
  <Link href="#" target="_blank" className="hover:text-white/80 transition-colors">
    <FaDiscord className="h-6 w-6" />
  </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
              
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Instagram className="h-6 w-6" />
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

