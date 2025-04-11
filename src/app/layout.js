import { Inter, Teko } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
});

export const metadata = {
  title: "Matheus Zacanini | Portfólio",
  description: "Desenvolvedor Full Stack - Portfólio Pessoal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" />
      </head>
      <body className={`${inter.variable} ${teko.variable} bg-zinc-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
