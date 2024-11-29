'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa'
import { Menu } from 'lucide-react'

export default function WhoWeAre() {
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
    <div className="min-h-screen">
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
          {['About us', 'Team', 'Community', 'blog'].map((item) => (
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
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/aboutfr.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* <div 
          className="absolute inset-0 bg-red-900/90"
          aria-hidden="true"
        /> */}
        
       
        {/* Hero Content */}
        <div className="relative z-10 mt-20  ml-20 h-full">
          <h1 className="text-white text-5xl font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
            Connecting Ecosystem Builder's
          </h1>
          <h6 className="text-white font-balooThambi">A community of creative minds driving the Oyo ecosystem through Innovation.</h6>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {/* Who We Are Section */}
        <section className="mb-20 items-center animate-on-scroll fade-in">
          <div>
            <h2 className="text-3xl text-center font-bold mb-4 animate-bounce duration-500">Who We Are</h2>
            <p className="text-black gap-6 text-justify mb-4 text-[23px]">
            Talent Tribe is a community for Oyo students to collaborate, innovate, and foster growth and opportunity.
            </p>
            <p className="text-black text-justify text-[23px]">
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

