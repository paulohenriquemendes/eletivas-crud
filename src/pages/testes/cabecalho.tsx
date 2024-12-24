import Link from "next/link";

export default function Cabecalho(){
    return (
      <header className="
        flex w-full p-2 flex-row items-center h-18 bg-blue-950 text-slate-50
        ">
        <div className="w-1/4 flex pl-8 bg-slate-600">
        <Link href="/">Home</Link>
        </div>
        <nav className="w-3/4 bg-slate-600 pr-8 flex justify-end gap-2">
          <Link href="/testes/formEletiva">Cadastro</Link>
          <Link href="/testes/formEletiva">DEV PHM</Link>
          <p>link 3</p>
        </nav>
      </header>
    )
  }