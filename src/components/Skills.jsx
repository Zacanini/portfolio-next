'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

// Lista de habilidades dividida por categorias
const skillCategories = [
  {
    name: "Frontend",
    icon: <FaCode className="mr-2" />,
    skills: [
      { name: "HTML", icon: "/images/html.png", level: 90 },
      { name: "CSS", icon: "/images/css.webp", level: 85 },
      { name: "JavaScript", icon: "/images/javaScript.svg", level: 85 },
      { name: "React", icon: "/images/react.svg", level: 80 },
    ]
  },
  {
    name: "Backend",
    icon: <FaServer className="mr-2" />,
    skills: [
      { name: "Node.js", icon: "/images/nodejs.svg", level: 75 },
      { name: "Java", icon: "/images/java.webp", level: 75 },
      { name: "C#", icon: "/images/c-sharp.svg", level: 70 },
    ]
  },
  {
    name: "Banco de Dados",
    icon: <FaDatabase className="mr-2" />,
    skills: [
      { name: "SQL", icon: "/images/sql.svg", level: 80 },
    ]
  },
  {
    name: "Ferramentas",
    icon: <FaTools className="mr-2" />,
    skills: [
      { name: "Git", icon: "/images/git.svg", level: 85 },
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Minhas Skills
        </motion.h2>

        <Tab.Group>
          <Tab.List className="flex rounded-xl p-1 bg-zinc-800/50 backdrop-blur-sm mt-12 mb-8 max-w-3xl mx-auto overflow-x-auto">
            {skillCategories.map((category, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `flex items-center justify-center whitespace-nowrap w-full py-3 px-4 text-sm font-medium transition-all duration-200
                  ${selected ? 
                    'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg rounded-lg' : 
                    'text-gray-400 hover:text-white hover:bg-zinc-700/30'
                  }`
                }
              >
                <span className="flex items-center">
                  {category.icon}
                  {category.name}
                </span>
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels className="mt-8">
            {skillCategories.map((category, idx) => (
              <Tab.Panel key={idx}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        y: 0, 
                        transition: { duration: 0.4, delay: 0.1 * index } 
                      } : { opacity: 0, y: 20 }}
                      className="card p-6 flex flex-col items-center"
                    >
                      <div className="w-16 h-16 relative mb-4">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={64}
                          height={64}
                          className="object-contain"
                          priority={index === 0}
                        />
                      </div>
                      
                      <h3 className="font-medium text-lg mb-3">{skill.name}</h3>
                      
                      {/* Barra de nível de habilidade */}
                      <div className="w-full bg-zinc-700 rounded-full h-2 mb-1">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-700 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-400 self-end">{skill.level}%</p>
                    </motion.div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}