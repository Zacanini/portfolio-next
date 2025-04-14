'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const characters = [
  {
    name: "Goku",
    image: "/images/gokuVoando.gif",
    className: "fly-across"
  },
  {
    name: "Kuririn",
    image: "/images/kuririn.gif",
    className: "static-display"
  },
  {
    name: "Goku e Vegeta",
    image: "/images/gokuEvegeta.gif",
    className: "static-display"
  },
  {
    name: "Majin Buu vs Goku",
    image: "/images/majinVSgoku.gif",
    className: "static-display"
  },
  {
    name: "Gohan vs Gohan",
    image: "/images/gohanvsgohan.gif",
    className: "static-display"
  },
  {
    name: "Gogeta",
    image: "/images/gogeta.gif",
    className: "shine"
  }
];

// Posições de nuvens estilo Mario - mais alinhadas e em duas fileiras
const cloudPositions = [
  // Primeira fileira de nuvens
  { top: 15, left: 10, delay: 0, duration: 15 },
  { top: 15, left: 40, delay: 5, duration: 18 },
  { top: 15, left: 70, delay: 2, duration: 20 },
  
  // Segunda fileira de nuvens
  { top: 35, left: 25, delay: 7, duration: 17 },
  { top: 35, left: 55, delay: 1, duration: 16 },
  { top: 35, left: 85, delay: 4, duration: 19 },
  
  // Nuvens extras espalhadas
  { top: 8, left: 5, delay: 3, duration: 22 },
  { top: 23, left: 80, delay: 6, duration: 21 },
];

export default function DragonBallGame() {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Efeito para adicionar as animações CSS necessárias
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .static-display {
        /* Sem animação de flutuação */
        transform: scale(1);
      }
      .fly-across {
        animation: flyAcross 8s linear infinite;
      }
      @keyframes flyAcross {
        0% { transform: translateX(-100%) scale(0.7); }
        100% { transform: translateX(100vw) scale(0.7); }
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
        
        <h2 className="section-heading">MiniGame- Dragon Ball Z</h2>
        
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-3xl h-80 md:h-96 mb-8">
            {/* Céu azul */}
            <div className="absolute inset-0 overflow-hidden rounded-xl bg-gradient-to-b from-blue-500 to-blue-300">
              {/* Nuvens alinhadas estilo Mario */}
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
                      opacity: 0.9
                    }}
                  >
                    <div className="relative w-20 h-12">
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
              {currentCharacter === 0 ? (
                // Goku com animação especial de voar atravessando a tela - um pouco maior agora
                <motion.div 
                  className="absolute z-30 top-[15%]"
                  style={{ 
                    animationName: "flyAcross", 
                    animationDuration: "8s",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite"
                  }}
                >
                  <div className="relative h-24 w-24 md:h-28 md:w-28">
                    <Image
                      src={characters[0].image}
                      alt={characters[0].name}
                      fill
                      className="object-contain"
                      unoptimized={true}
                      priority
                    />
                  </div>
                </motion.div>
              ) : currentCharacter === 1 ? (
                // Kuririn - maior e com posição ajustada
                <motion.div 
                  className={`absolute left-1/2 top-[42%] transform -translate-x-1/2 -translate-y-1/3 z-30 ${characters[currentCharacter].className}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isTransitioning ? 0 : 1,
                    scale: isTransitioning ? 0.8 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48 w-48 md:h-64 md:w-64">
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
              ) : (
                // Outros personagens sem animação de flutuação - posicionados 10px mais para cima
                <motion.div 
                  className={`absolute left-1/2 top-[45%] transform -translate-x-1/2 -translate-y-1/3 z-30 ${characters[currentCharacter].className}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isTransitioning ? 0 : 1,
                    scale: isTransitioning ? 0.8 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-40 w-40 md:h-56 md:w-56">
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
              )}
              
              {/* Solo verde com montanhas */}
              <div className="absolute bottom-0 left-0 right-0 z-20">
                {/* Montanhas ao fundo */}
                <div className="relative h-20">
                  {/* Montanha 1 */}
                  <div className="absolute bottom-0 left-[5%] w-24 h-16 bg-green-800 rounded-tl-full rounded-tr-full transform -rotate-2"></div>
                  {/* Montanha 2 */}
                  <div className="absolute bottom-0 left-[20%] w-32 h-20 bg-green-700 rounded-tl-full rounded-tr-full transform rotate-1"></div>
                  {/* Montanha 3 */}
                  <div className="absolute bottom-0 left-[45%] w-36 h-14 bg-green-800 rounded-tl-full rounded-tr-full transform -rotate-1"></div>
                  {/* Montanha 4 */}
                  <div className="absolute bottom-0 right-[10%] w-28 h-18 bg-green-700 rounded-tl-full rounded-tr-full transform rotate-2"></div>
                </div>
                
                {/* Camada de grama */}
                <div className="h-10 bg-green-600 relative">
                  {/* Detalhes de grama */}
                  <div className="absolute top-0 left-0 right-0 h-3 bg-green-500 w-full"
                    style={{
                      clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)'
                    }}
                  ></div>
                </div>
                
                {/* Solo */}
                <div className="h-10 bg-gradient-to-b from-green-700 to-green-900 rounded-b-xl">
                  {/* Textura do solo */}
                  <div className="w-full h-full flex justify-around items-center px-4">
                    <span className="inline-block w-4 h-1 bg-green-800 rounded-full"></span>
                    <span className="inline-block w-6 h-1 bg-green-600 rounded-full"></span>
                    <span className="inline-block w-5 h-1 bg-green-800 rounded-full"></span>
                    <span className="inline-block w-7 h-1 bg-green-600 rounded-full"></span>
                    <span className="inline-block w-5 h-1 bg-green-800 rounded-full"></span>
                    <span className="inline-block w-4 h-1 bg-green-600 rounded-full"></span>
                    <span className="inline-block w-6 h-1 bg-green-800 rounded-full"></span>
                  </div>
                </div>
              </div>
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