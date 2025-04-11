'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const characters = [
  {
    name: "Goku",
    image: "/images/gokuVoando.gif",
    className: "float"
  },
  {
    name: "Kuririn",
    image: "/images/kuririn.gif",
    className: "float rotate-3"
  },
  {
    name: "Goku e Vegeta",
    image: "/images/gokuEvegeta.gif",
    className: "float-slow"
  },
  {
    name: "Majin Buu vs Goku",
    image: "/images/majinVSgoku.gif",
    className: "bounce"
  },
  {
    name: "Gohan vs Gohan",
    image: "/images/gohanvsgohan.gif",
    className: "pulse"
  },
  {
    name: "Gogeta",
    image: "/images/gogeta.gif",
    className: "shine"
  }
];

// Gere posições de nuvem fixas uma vez para evitar diferenças entre servidor e cliente
const cloudPositions = Array.from({ length: 15 }).map((_, i) => ({
  top: 20 + Math.floor((i * 40) / 15),
  left: (i * 20) % 100,
  delay: i * 0.5,
  duration: Math.floor(3 + (i % 3))
}));

export default function DragonBallGame() {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Efeito para adicionar as animações CSS necessárias
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .float-slow {
        animation: float 4s ease-in-out infinite;
      }
      .bounce {
        animation: bounce 2s ease-in-out infinite;
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      .pulse {
        animation: pulse 2s ease-in-out infinite;
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .shine {
        animation: shine 3s ease-in-out infinite;
      }
      @keyframes shine {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.3); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleChangeCharacter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCharacter((prev) => (prev + 1) % characters.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Dragon Ball Z</h2>
        
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-3xl h-80 md:h-96 mb-8">
            {/* Céu com nuvens */}
            <div className="absolute inset-0 overflow-hidden rounded-xl bg-gradient-to-b from-blue-600 to-blue-300">
              {/* Nuvens animadas com posições estáticas */}
              <div className="absolute inset-0 z-0">
                {cloudPositions.map((cloud, index) => (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      top: `${cloud.top}%`,
                      left: `${cloud.left}%`,
                      animationName: "float",
                      animationDuration: `${cloud.duration}s`,
                      animationTimingFunction: "ease-in-out",
                      animationIterationCount: "infinite",
                      animationDelay: `${cloud.delay}s`,
                      opacity: 0.8
                    }}
                  >
                    <div className="relative w-24 h-12">
                      <Image
                        src="/images/nuvem.png"
                        alt="Nuvem"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Personagem */}
              <motion.div 
                className={`absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10 ${characters[currentCharacter].className}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isTransitioning ? 0 : 1,
                  scale: isTransitioning ? 0.8 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-40 w-40 md:h-60 md:w-60">
                  {/* Usando unoptimized={true} para resolver o aviso de GIF animado */}
                  <Image
                    src={characters[currentCharacter].image}
                    alt={characters[currentCharacter].name}
                    fill
                    className="object-contain"
                    unoptimized={true}
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Chão */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-800 to-amber-600 rounded-b-xl"></div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">
              {characters[currentCharacter].name}
            </h3>
            <p className="text-sm text-gray-400">
              {currentCharacter + 1} de {characters.length}
            </p>
          </div>
          
          <button
            onClick={handleChangeCharacter}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 rounded-full text-white font-medium shadow-lg shadow-orange-500/20 transition-all"
          >
            Trocar Personagem
          </button>
        </div>
      </div>
    </section>
  );
}