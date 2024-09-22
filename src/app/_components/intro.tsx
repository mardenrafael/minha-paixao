import Link from "next/link";

export function Intro() {
  return (
    <div>
      <div className="mt-3">
        <Link href="/galery">Fotos</Link>
      </div>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Minha paixão
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Hoje é dia 20 de setembro de 2024, estou longe do meu amor e decidi
          mostrar para ela o quando eu amo ela, então nesse blog aqui vou listar
          todos os nossos momentos especiais, vamos apresentar isso para nossos
          filhos.
        </h4>
      </section>
    </div>
  );
}
