'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
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
      
        <div className="absolute inset-0 bg-[url('/images/teambg.svg')] bg-cover bg-center"
          aria-hidden="true"></div>
        {/* Hero Content */}
        <div className='px-20 my-28 flex'>
          <div>
            <div className="relative">
              <h1 className="text-white text-5xl font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
                The Team
              </h1> <br />
            </div>
            <div className="relative">
              <h4 className="text-white font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
                The brains behind the awsomeness
              </h4>
            </div>
          </div>
        </div>
      </div>

      <main className="container px-10 my-5">
        <h1 className="text-4xl py-10 font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
          The Core
        </h1>

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-28 sm:gap-x-28'>
          <div className='my-4'>
            <img src="/images/personal_picture.svg" alt="" />
            <p className='text-2xl py-3'>Tope James Moses</p>
          </div>
          <div className='my-4'>
            <img src="/images/personal_picture.svg" alt="" />
            <p className='text-2xl py-3'>Tope James Moses</p>
          </div>
          <div className='my-4'>
            <img src="/images/personal_picture.svg" alt="" />
            <p className='text-2xl py-3'>Tope James Moses</p>
          </div>
          <div className='my-4'>
            <img src="/images/personal_picture.svg" alt="" />
            <p className='text-2xl py-3'>Tope James Moses</p>
          </div>
          <div className='my-4'>
            <img src="/images/personal_picture.svg" alt="" />
            <p className='text-2xl py-3'>Tope James Moses</p>
          </div>
          <div className='my-4'>
            <img src="/images/personal_picture.svg" alt="" />
            <p className='text-2xl py-3'>Tope James Moses</p>
          </div>
        </div>

        <h1 className="text-4xl text-[#881337] py-10 font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
          Team Lead
        </h1>
       <div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-28 sm:gap-x-32'>
          <div className='my-4'>
            <img src="/images/personal_picture.svg" alt="" />
            <p className='text-2xl py-3'>Tope James Moses</p>
          </div>
          <div className='my-4'>
            <img src="/images/personal_picture.svg" alt="" />
            <p className='text-2xl py-3'>Tope James Moses</p>
          </div>
          <div className='my-4'>
            <img src="/images/personal_picture.svg" alt="" />
            <p className='text-2xl py-3'>Tope James Moses</p>
          </div>
          
        </div>

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

