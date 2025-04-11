'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { FaGithub, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Lista de projetos divididos por categoria
const projectCategories = [
  {
    name: "Frontend",
    projects: [
      {
        name: "Landing page de uma empresa de sistemas",
        description: "Desenvolvida em React e JSX com design responsivo e moderno para a empresa JF Systems.",
        image: "/images/capaZS.png",
        link: "https://jf-systems.vercel.app/",
        repo: "https://github.com/Zacanini/portfolio",
        technologies: ["React", "JavaScript", "CSS"]
      },
      {
        name: "Tela de Login Light/Dark",
        description: "Interface visual de login com tema claro/escuro usando HTML, CSS e JavaScript.",
        image: "/images/Login.png",
        repo: "https://github.com/Zacanini/LIGHT-DARK-Registration-Screen",
        technologies: ["HTML", "CSS", "JavaScript"]
      },
      {
        name: "Spider Jump",
        description: "Jogo inspirado no Mario Bros, desenvolvido em JavaScript. O jogador clica para pular, com pontuação e aumento de dificuldade progressivo.",
        image: "/images/jogo.png",
        repo: "https://github.com/Zacanini/LIGHT-DARK-Registration-Screen",
        technologies: ["JavaScript", "HTML", "CSS"]
      },
      {
        name: "Aplicação de Previsão do Tempo",
        description: "Aplicativo front-end que utiliza a API da OpenWeather para mostrar previsões do tempo de qualquer cidade.",
        image: "/images/Tempo.png",
        repo: "https://github.com/Zacanini/APIprevisaoDoTempo/tree/main",
        technologies: ["JavaScript", "HTML", "CSS", "API Integration"]
      }
    ]
  },
  {
    name: "Backend",
    projects: [
      {
        name: "Sistema de Gerenciamento de Estoque",
        description: "Sistema completo para gerenciamento de estoque de produtos e análise de vendas desenvolvido com React e .NET Web API (C#).",
        image: "/images/capaGE.png",
        repo: "https://github.com/Zacanini/InventoryManager",
        technologies: ["React", "C#", ".NET", "Web API", "SQL Server"]
      },
      {
        name: "Sistema de Gestão de Ingressos para Teatro",
        description: "Back-end em Java para gerenciamento de vendas e ingressos desenvolvido para o Teatro Central de Juiz de Fora.",
        image: "/images/Teatro.png",
        repo: "https://github.com/Zacanini/SistemaDeComprasEGest-oDeVagasTeatroCentral",
        technologies: ["Java", "Spring", "MySQL"]
      },
      {
        name: "Sistema Bancário",
        description: "Back-end em Java para uma instituição bancária, desenvolvido durante a faculdade.",
        image: "/images/Banco.png",
        repo: "https://github.com/Zacanini/Instituicao-BancariaJava",
        technologies: ["Java", "OOP"]
      }
    ]
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState({
    Frontend: 0,
    Backend: 0
  });

  // Funções para controlar o carrossel
  const nextSlide = (category) => {
    const projects = projectCategories.find(cat => cat.name === category).projects;
    setCurrentSlide({
      ...currentSlide,
      [category]: (currentSlide[category] + 1) % projects.length
    });
  };

  const prevSlide = (category) => {
    const projects = projectCategories.find(cat => cat.name === category).projects;
    setCurrentSlide({
      ...currentSlide,
      [category]: (currentSlide[category] - 1 + projects.length) % projects.length
    });
  };

  return (
    <section id="projects" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Meus Projetos
        </motion.h2>

        <Tab.Group>
          <Tab.List className="flex rounded-xl p-1 bg-zinc-800/50 backdrop-blur-sm mt-12 mb-8 max-w-md mx-auto">
            {projectCategories.map((category, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `w-full py-3 px-5 text-sm font-medium transition-all duration-200
                  ${selected ? 
                    'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg rounded-lg' : 
                    'text-gray-400 hover:text-white hover:bg-zinc-700/30'
                  }`
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels className="mt-8">
            {projectCategories.map((category, categoryIndex) => (
              <Tab.Panel key={categoryIndex}>
                <div className="relative">
                  {/* Carousel Navigation */}
                  <button 
                    onClick={() => prevSlide(category.name)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-800/80 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transform -translate-x-1/2 md:translate-x-0"
                    aria-label="Projeto anterior"
                  >
                    <FaChevronLeft />
                  </button>
                  
                  {/* Carousel */}
                  <div className="overflow-hidden">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide[category.name] * 100}%)` }}
                    >
                      {category.projects.map((project, index) => (
                        <div 
                          key={index} 
                          className="w-full flex-shrink-0 p-4"
                        >
                          <div className="card overflow-hidden">
                            {/* Project Image */}
                            <div className="relative h-64 md:h-80">
                              <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                                loading={index === 0 ? "eager" : "lazy"}
                                sizes="(max-width: 768px) 100vw, 800px"
                              />
                            </div>
                            
                            <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                              <p className="text-gray-300 mb-4">{project.description}</p>
                              
                              {/* Technologies */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                  <span 
                                    key={techIndex}
                                    className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              
                              {/* Links */}
                              <div className="flex gap-4 mt-4">
                                {project.repo && (
                                  <a 
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-md transition-colors"
                                  >
                                    <FaGithub /> Repositório
                                  </a>
                                )}
                                
                                {project.link && (
                                  <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-4 py-2 rounded-md transition-colors"
                                  >
                                    <FaGlobe /> Ver Site
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Pagination Dots */}
                          <div className="flex justify-center mt-4 gap-2">
                            {category.projects.map((_, dotIndex) => (
                              <button
                                key={dotIndex}
                                className={`w-3 h-3 rounded-full ${
                                  currentSlide[category.name] === dotIndex 
                                    ? 'bg-purple-500' 
                                    : 'bg-zinc-700'
                                }`}
                                onClick={() => setCurrentSlide({
                                  ...currentSlide,
                                  [category.name]: dotIndex
                                })}
                                aria-label={`Ir para projeto ${dotIndex + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => nextSlide(category.name)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-800/80 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transform translate-x-1/2 md:translate-x-0"
                    aria-label="Próximo projeto"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}