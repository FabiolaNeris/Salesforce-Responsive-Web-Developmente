import type { Metadata } from "next";
import {Roboto} from 'next/font/google';
import Header from "./Header/header";
import '../../public/css/style.css';
import Chat from "./Chat/chat";

const roboto = Roboto({
  weight: ['400', '700'], // Pesos da fonte
  style: ['normal', 'italic'], // Estilos da fonte
  subsets: ['latin'], // Subconjuntos da fonte
  display: 'swap', // Como a fonte deve ser exibida enquanto está sendo carregada
 });

export const metadata: Metadata = {
  title: "Salesforce",
  description: "Salesforce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <body>
        <Header/>
        {children}
        <Chat/>
      </body>
    </html>
  );
}
