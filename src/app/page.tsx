import Image from "next/image";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Jumbotron from "./components/Jumbotron";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      <Image
        src="/imagenes/cordobavector.png" 
        alt="Cordoba Ciudad Vector"
        layout="fill" 
        objectFit="cover"  
        className="fixed top-0 left-0 z-0 opacity-30"/>
      
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500  to-transparent opacity-100 z-2" />
      
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Jumbotron />
          <Formulario />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
}
