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
      <div className="relative h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/teambg.svg')] bg-cover bg-center"
          aria-hidden="true"
        />


        <nav className="relative z-10 flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-white text-2xl font-bold flex items-center gap-2">
            <Image src="/images/Talent Tibe Official white logo 1.png" alt="logo" width={80} height={80} />
          </Link>

          {/* Mobile Menu Toggle */}
          <input
            type="checkbox"
            id="menu-toggle"
            className="hidden peer"
          />
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>

          {/* Menu (Hidden by Default) */}
          <div className="hidden md:flex md:items-center gap-8 peer-checked:flex peer-checked:flex-col absolute top-full left-0 w-full bg-black bg-opacity-80 p-4 md:bg-transparent md:relative md:w-auto md:p-0 md:flex-row">
            <Link href="/Who-we-are" className="text-white hover:text-white/80 transition-colors">About Us</Link>
            <Link href="/team" className="text-white hover:text-white/80 transition-colors">Team</Link>
            <Link href="/community" className="text-white hover:text-white/80 transition-colors">Community</Link>
            <Link href="/blog" className="text-white hover:text-white/80 transition-colors">Blog</Link>
            <Link href="/donate" className="text-white hover:text-white/80 transition-colors">Donate</Link>
            <Link href="/institution" className="text-white hover:text-white/80 transition-colors">Institution</Link>
          </div>
        </nav>




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

