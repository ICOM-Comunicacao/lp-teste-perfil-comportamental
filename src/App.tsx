import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Lista from './mocks/Palavras_disc'

function App() {
  const [resultado, setResultado] = useState(true);
  function calcularResultado(){
    setResultado(true)
  }

  return (
    <>
      <Header/>
        <main className="min-h-[calc(100vh_-_139.16px)] p-3 w-full max-w-[1300px] mx-auto">
          {!resultado ?
            <>
              {Lista.map((items, i) => (
                <div key={i} className={`flex justify-between flex-wrap md:flex-nowrap py-10 ${(Lista.length - 1) != i ? 'border-b-2': ''}`}>
                  {items.row.map((item, index) => (
                    <div className="flex gap-4 w-full px-3 py-4 md:py-0" key={index}>
                      <div className="group flex items-center justify-center">
                          <input type="text" className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5" />
                      </div>
                      <div className="flex flex-col">
                          <ul>
                            {item.keywords.map((words, indexWords) => <li key={indexWords}>{words}</li>)}
                          </ul>
                      </div>
                    </div>
                  ))} 
                </div>
              ))}
              <br/>
              <div className="flex justify-center items-center">
                  <button type="button" onClick={calcularResultado} className="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300">Ver resultado</button>
              </div>
            </>
          :
            <>
              <br/>
              <br/>
              <h1 className="text-2xl text-center uppercase font-bold">Veja abaixo seu resultado:</h1>
              <div className="bg-slate-200 w-full py-10 px-10 mt-10 rounded-sm shadow-sm">
                <div className="flex justify-between flex-wrap md:flex-nowrap py-10">
                  
                  <div className="px-3 py-4 md:py-0">
                    <div className="w-fit">
                      <div className="flex gap-4">
                        <div className="group flex items-center justify-center">
                            <input disabled type="text" className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5" />
                        </div>
                        <div className="flex flex-col">
                            <p className="uppercase font-bold">Total<br/>vermelho</p>
                        </div>
                      </div>
                      <span className="flex font-bold text-center py-3">(D) Executor</span>
                    </div>
                  </div>

                  <div className="px-3 py-4 md:py-0">
                    <div className="w-fit">
                      <div className="flex gap-4">
                        <div className="group flex items-center justify-center">
                          <input disabled type="text" className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5" />
                        </div>
                        <div className="flex flex-col">
                            <p className="uppercase font-bold">Total<br/>amarelo</p>
                        </div>
                      </div>
                      <span className="flex font-bold text-center py-3">(I) Comunicador</span>
                    </div>
                  </div>

                  <div className="px-3 py-4 md:py-0">
                    <div className="w-fit">
                      <div className="flex gap-4">
                        <div className="group flex items-center justify-center">
                            <input disabled type="text" className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5" />
                        </div>
                        <div className="flex flex-col">
                            <p className="uppercase font-bold">Total<br/>verde</p>
                        </div>
                      </div>
                      <span className="flex font-bold text-center py-3">(S) Planejador</span>
                    </div>
                  </div>
                  

                  <div className="px-3 py-4 md:py-0">
                    <div className="w-fit">
                      <div className="flex gap-4">
                        <div className="group flex items-center justify-center">
                            <input disabled type="text" className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5" />
                        </div>
                        <div className="flex flex-col">
                            <p className="uppercase font-bold">Total<br/>azul</p>
                        </div>
                      </div>
                      <span className="flex font-bold text-center py-3">(C) Analista</span>
                    </div>
                  </div>
                  
                </div>
                <h1 className="text-center text-2xl font-medium">O total corresponde ao percentual que você possui em cada perfil!</h1>
              </div>
              <br/>
              <br/>
              <br/>
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex max-w-[648px] flex-col items-center md:flex-row w-full mx-auto gap-2 relative">
                    <span className="text-2xl uppercase absolute hidden md:flex top-[-35px] font-bold left-[calc((100%_/_2)_-_(93.6px_/_2))]">Primos</span>
                    <span className="text-2xl uppercase absolute hidden md:flex top-[calc(100%_-_10px)] font-bold left-[-68px] rotate-[270deg]">Irmãos</span>
                    <div className="w-full max-w-[320px] min-h-[320px] p-5 bg-[#ece743]">
                      <span className="font-bold text-2xl mb-5 flex">COMUNICADOR</span>
                      <p className="text-xl">Comunicativo</p>
                      <p className="text-xl">Persuasivo</p>
                      <p className="text-xl">Entusiasmado</p>
                      <p className="text-xl">Otimista</p>
                      <p className="text-xl">Se Relaciona com facilidade</p>
                    </div>
                    <div className="w-full max-w-[320px] min-h-[320px] p-5 bg-[#23a449]">
                      <span className="font-bold text-2xl mb-5 flex text-white">PLANEJADOR</span>
                      <p className="text-xl text-white">Estável</p>
                      <p className="text-xl text-white">Paciente</p>
                      <p className="text-xl text-white">Calmo</p>
                      <p className="text-xl text-white">Rítmo consistente</p>
                      <p className="text-xl text-white">Conservador</p>
                    </div>
                </div> 
                <div className="flex max-w-[648px] flex-col items-center md:flex-row w-full mx-auto gap-2 relative">
                    <span className="text-2xl uppercase hidden md:flex absolute bottom-[-35px] font-bold left-[calc((100%_/_2)_-_(93.6px_/_2))]">Primos</span>
                    <span className="text-2xl uppercase hidden md:flex absolute top-[-17px] font-bold right-[-68px] rotate-[90deg]">Irmãos</span>
                    <div className="w-full max-w-[320px] min-h-[320px] p-5 bg-[#e1212d]">
                      <span className="font-bold text-2xl mb-5 flex text-white">EXECUTOR</span>
                      <p className="text-xl text-white">Auto confiante</p>
                      <p className="text-xl text-white">Dominante</p>
                      <p className="text-xl text-white">Aceita e gosta de Desafios</p>
                      <p className="text-xl text-white">Competitivo e audacioso</p>
                      <p className="text-xl text-white">Destemido e corajoso</p>
                    </div>
                    <div className="w-full max-w-[320px] min-h-[320px] p-5 bg-[#1ca9b3]">
                      <span className="font-bold text-2xl mb-5 flex text-white">ANALISTA</span>
                      <p className="text-xl text-white">Preciso</p>
                      <p className="text-xl text-white">Atento aos detalhes</p>
                      <p className="text-xl text-white">Diligente</p>
                      <p className="text-xl text-white">Organizado</p>
                      <p className="text-xl text-white">Auto-disciplinado</p>
                    </div>
                </div>
              </div>
              <br/>
              <div className="mt-20 max-w-[880px] mx-auto">
                <h2 className="text-2xl">Os 4 Perfis Comportamentais e suas Principais Características</h2>
                <br/>
                <span className="flex font-medium text-2xl">Comunicador</span>
                <p className="text-xl">Estimulador, Influenciador, Articulador, Participativo, Comunicativo, Facilitador.</p>
                <br/>
                <span className="flex font-medium text-2xl">Executor</span>
                <p className="text-xl">Desbravador, Impulsionador, Competidor, Direcionador, Solucionador, Dominante.</p>
                <br/>
                <span className="flex font-medium text-2xl">Planejador</span>
                <p className="text-xl">Moderador, Acolhedor, Prevenido, Metódico, Planejador, Estabilizador.</p>
                <br/>
                <span className="flex font-medium text-2xl">Analista</span>
                <p className="text-xl">Regulador, Observador, Ordenado, Criterioso, Especialista, Idealizador.</p>
                <br/>
                <p className="text-xl">Vale ressaltar que os perfis: Comunicador e Executor são aqueles considerados extrovertidos, ou seja, que possuem mais abertura para lidar com as pessoas, interagir e relacionar-se com elas. Já os perfis: Planejador e Analista são mais introvertidos e, por isso, mais voltados para os processos e resultados do que para as relações humanas.</p>
              </div>
              <br/>
              <br/>
              <br/>
              <div className="flex justify-center items-center">
                <button type="button" onClick={()=> setResultado(false)} className="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300">Refazer teste</button>
              </div>
            </>
          }
        </main>
      <Footer/>
    </>
  )
}

export default App
