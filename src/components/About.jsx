'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Sobre Mim
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
          {/* Image Column */}
          <motion.div 
            className="md:col-span-4 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm">
              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-purple-500 rounded-lg opacity-50 z-0 transform -rotate-3"></div>
              <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-orange-500 rounded-lg opacity-50 z-0 transform rotate-3"></div>
              
              {/* Main image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-purple-900/20 border border-zinc-700">
                <div className="pt-[100%] bg-gradient-to-br from-purple-600/20 to-orange-600/20">
                  {/* Este é um placeholder. Se você tiver uma foto sua, adicione aqui */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl text-white/50">MZ</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="md:col-span-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-500">Desenvolvedor Full Stack</h3>
            
            <p className="text-gray-300 mb-6 text-lg">
              Olá! Sou Matheus Zacanini, um desenvolvedor Full Stack apaixonado por construir soluções web 
              inovadoras e experiências digitais envolventes. Com experiência em tecnologias front-end e back-end, 
              busco constantemente aprender e aplicar meus conhecimentos em projetos desafiadores.
            </p>
            
            <p className="text-gray-300 mb-6 text-lg">
              Possuo conhecimento em linguagens como JavaScript, Java e C#, além de frameworks como React e 
              tecnologias de back-end. Minha abordagem combina design moderno com funcionalidades robustas 
              para criar aplicações web de alta qualidade.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {/* Info block 1 */}
              <div className="card p-5">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Educação</h4>
                <p className="text-gray-300">Formação em Sistemas de Informação</p>
              </div>
              
              {/* Info block 2 */}
              <div className="card p-5">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Experiência</h4>
                <p className="text-gray-300">Desenvolvedor de Software</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}