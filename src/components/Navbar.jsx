'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaFolderOpen } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-900/90 backdrop-blur-md py-3 shadow-lg shadow-purple-500/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/#home">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
            ZACA
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {[
            { href: '/#home', icon: <FaHome />, label: 'Home' },
            { href: '/#about', icon: <FaUser />, label: 'Sobre' },
            { href: '/#skills', icon: <FaCode />, label: 'Skills' },
            { href: '/#projects', icon: <FaFolderOpen />, label: 'Projetos' }
          ].map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="flex items-center gap-2 text-gray-300 hover:text-white hover:text-purple-400 transition-colors"
            >
              <span className="text-purple-500">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-zinc-800/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {[
                { href: '/#home', icon: <FaHome size={18} />, label: 'Home' },
                { href: '/#about', icon: <FaUser size={18} />, label: 'Sobre' },
                { href: '/#skills', icon: <FaCode size={18} />, label: 'Skills' },
                { href: '/#projects', icon: <FaFolderOpen size={18} />, label: 'Projetos' }
              ].map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  className="flex items-center gap-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                  onClick={handleLinkClick}
                >
                  <span className="text-purple-500">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}