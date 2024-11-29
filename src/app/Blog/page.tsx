'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';

import { Facebook, Twitter, Instagram, Youtube, ArrowRight, Menu } from 'lucide-react'

export default function blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Check for Intersection Observer support
    if (!('IntersectionObserver' in window)) {
      console.warn('Intersection Observer not supported');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Example dynamic blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Ibadan Students Tech Fest",
      description:
        "The Ibadan Students Tech Fest is a platform by students in Ibadan, Nigeria to showcase their skills, network with industry professionals, and learn from the best in the field...",
      image: "/images/blog1.jpg",
      link: "/blog/tech-fest",
    },
    {
      id: 2,
      title: "Tour to Northern Nigeria",
      description:
        "Take a dive into our exclusive tour of a tech community space in Northern Nigeria...",
      image: "/images/blog2.jpg",
      link: "/blog/northern-tour",
    },
    {
      id: 3,
      title: "The CyberSmart Movement",
      description: "The CyberSmart Movement is making waves in the tech community...",
      image: "/images/blog3.jpg",
      link: "/blog/cybersmart",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/firstbgr.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-red-900/90" aria-hidden="true" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-white text-2xl font-bold flex items-center gap-2 animate-pulse">
            <Image
              src="/images/Talent Tibe Official white logo 1.png"
              alt="logo"
              width={80}
              height={80}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Team', 'Community', 'blog', 'Donate', 'Institution'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-white hover:text-white/80 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            className="block md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-transparent text-white p-4 md:hidden">
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

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
            Welcome to Talent Tribe Blog
          </h1>
          <p className="text-white/90 mt-4 mb-8 max-w-2xl mx-auto animate-on-scroll slide-in-from-left duration-700 delay-150">
            Discover the latest news impacting the tech community and the tech world
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Dynamic blog Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(({ id, title, description, image, link }) => (
              <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll fade-in">
                <div className="relative h-[200px]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <Link
                    href={link}
                    className="inline-flex items-center text-red-900 hover:text-red-700"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-red-900 text-white animate-on-scroll fade-in">
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div>
        <Link href="/">
          <Image
            src="/images/Talent Tibe Official white logo 1.png"
            alt="logo"
            width={80}
            height={80}
          />
        </Link>
        
      </div>
      
      <div>
        <h3 className="font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/joinus">Join Us</Link>
          </li>
          <li>
            <Link href="/donate">Donate</Link>
          </li>
          <li>
            <Link href="/chapter">Lead a Chapter</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <Link
            href="#"
            target="_blank"
            className="hover:text-white/80 transition-colors"
          >
            <FaTelegramPlane className="h-6 w-6" />
          </Link>

          <Link
            href="#"
            target="_blank"
            className="hover:text-white/80 transition-colors"
          >
            <FaTwitter className="h-6 w-6" />
          </Link>

          <Link
            href="#"
            target="_blank"
            className="hover:text-white/80 transition-colors"
          >
            <FaDiscord className="h-6 w-6" />
          </Link>
          <Link
            href="#"
            className="hover:text-white/80 transition-colors"
          >
            <Facebook className="h-6 w-6" />
          </Link>

          <Link
            href="#"
            className="hover:text-white/80 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">
          Stay updated with the latest news and updates from our community.
        </p>
        <form className="flex bg-white rounded-lg flex-col sm:flex-row gap-4 max-w-md mx-auto">
          {/* Input field for email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 text-red-900 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <Button
            variant="secondary"
            className="bg-white text-red-900 hover:bg-white/90"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
    <div className="border-t border-white/20 pt-8 text-center">
      <p>&copy; Copyright 2024. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
}
