'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.p variants={item} className="text-purple-500 text-lg mb-2">
              Olá, eu sou
            </motion.p>
            
            <motion.h1 variants={item} className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Matheus </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
                Zacanini
              </span>
            </motion.h1>
            
            <motion.p variants={item} className="text-gray-300 text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Desenvolvedor Full Stack .
            </motion.p>

            {/* Buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="/CurrículoMatheusZacanini(2025-1).pdf" 
                download
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-md hover:from-purple-700 hover:to-purple-900 transition-all flex items-center justify-center gap-2"
              >
                Baixar Currículo
              </a>
              
              <a 
                href="#projects"
                className="px-6 py-3 bg-transparent border border-purple-500 text-white rounded-md hover:bg-purple-500/10 transition-all flex items-center justify-center"
              >
                Ver Projetos
              </a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              variants={item} 
              className="flex gap-6 mt-8 justify-center lg:justify-start"
            >
              <a 
                href="https://linkedin.com/in/matheus-zacanini" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors text-2xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/Zacanini" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors text-2xl"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:zacanini2@gmail.com"
                className="text-gray-400 hover:text-purple-500 transition-colors text-2xl"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              {/* Gradient background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 blur-3xl" />
              
              {/* Profile image or illustration can go here */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-orange-600 flex items-center justify-center">
                  <span className="text-6xl">MZ</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-0 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-60 float" />
              <div className="absolute -bottom-6 left-10 w-8 h-8 bg-orange-500 rounded-full opacity-60 float" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-20 -right-10 w-10 h-10 bg-purple-700 rounded-full opacity-40 float" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}