'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("zacanini2@gmail.com");
    alert("Email copiado para a área de transferência!");
  };

  return (
    <footer className="bg-zinc-950 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-800 pb-8 mb-8">
          {/* Logo e descrição */}
          <div>
            <Link href="/#home">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
                ZACA
              </h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e interfaces interativas.
            </p>
          </div>

          {/* Links de navegação rápida */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                {[
                  { href: '/#home', label: 'Início' },
                  { href: '/#about', label: 'Sobre' },
                  { href: '/#skills', label: 'Skills' },
                  { href: '/#projects', label: 'Projetos' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://linkedin.com/in/seu-linkedin" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Zacanini" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleCopyEmail}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    <FaEnvelope /> zacanini2@gmail.com
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Matheus Zacanini. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}