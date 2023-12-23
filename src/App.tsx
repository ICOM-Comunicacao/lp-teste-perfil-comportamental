import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Lista from './mocks/Palavras_disc'

interface OptionSelect {
  id: number,
  disabled: boolean,
  row_id: number
}

interface RowList {
  keywords: string[],
  name: string,
  options: OptionSelect[]
}

interface Lista {
  row: RowList[]
}

function App() {
  const [resultado, setResultado] = useState(false);
  const [TOTAL_EXECUTOR, setTotalExecutor] = useState(0);
  const [TOTAL_COMUNICADOR, setTotalComunicador] = useState(0);
  const [TOTAL_PLANEJADOR, setTotalPlanejador] = useState(0);
  const [TOTAL_ANALISTA, setTotalAnalista] = useState(0);
  const [data, setData] = useState<any>({})
  const [lista, setLista] = useState<Lista[]>([])

  function calcularResultado(){
    let EXECUTOR: number = 0;
    let COMUNICADOR: number = 0;
    let PLANEJADOR: number = 0;
    let ANALISTA: number = 0;

    for(let i = 1; i <= 10; i++){
      const D = `d${i}`;
      const I = `i${i}`;
      const S = `s${i}`;
      const C = `c${i}`;
      
      if(!isNaN(data[D] = parseInt(data[D]))){
        EXECUTOR += data[D]
      }

      if(!isNaN(data[I] = parseInt(data[I]))){
        COMUNICADOR += data[I]
      }
      
      if(!isNaN(data[S] = parseInt(data[S]))){
        PLANEJADOR += data[S]
      }
      
      if(!isNaN(data[C] = parseInt(data[C]))){
        ANALISTA += data[C]
      }
    }

    setTotalExecutor(EXECUTOR)
    setTotalComunicador(COMUNICADOR)
    setTotalPlanejador(PLANEJADOR)
    setTotalAnalista(ANALISTA)

    setResultado(true)
  }

  const adicionarValores = (e: any, items: Lista, index: number)=>{
    const value = e.target.value
    items.row.map((item) => {
      item.options.map((option) => {
        if(option.id == value && option.row_id == index){
          option.disabled = true
        }
      })
    })
    setData({...data, [e.target.name]: e.target.value})
  }
  
  const liberarBotoes = (items: Lista, index: number)=>{
    const valuesToReset: any = {}
    items.row.map((item) => {
      item.options.map((option) => {
        if(option.row_id == index){
          option.disabled = false
        }
      })

      valuesToReset[item.name] = 0;
    })

    setData({...data, ...valuesToReset})
  }

  function resetarTudo(){
    
    const valuesToReset: any = {}
    lista.map((items) => {
      items.row.map((item) => {
        item.options.map((option) => {
          option.disabled = false
        })  
        valuesToReset[item.name] = 0;
      })
    })

    setTotalExecutor(0)
    setTotalComunicador(0)
    setTotalPlanejador(0)
    setTotalAnalista(0)
    setData({...data, ...valuesToReset})
  }

  useEffect(()=>{
    if(!resultado){
      resetarTudo()
    }
    window.scrollTo(0, 0);
  }, [resultado])
  
  useEffect(()=>{
    setLista(Lista)
  }, [])

  return (
    <>
      <Header/>
        <main className="min-h-[calc(100vh_-_139.16px)] p-3 w-full max-w-[1300px] mx-auto">
          {!resultado ?
            <>
              {lista.map((items, i) => (
                <form onSubmit={(e) => e.preventDefault()} key={i} className={`flex justify-between flex-wrap md:flex-nowrap py-10 ${(Lista.length - 1) != i ? 'border-b-2': ''}`}>
                  {items.row.map((item, index) => (
                    <div className="flex gap-4 w-full px-3 py-4 md:py-0" key={index}>
                      <div className="group flex items-center justify-center">
                          <select onChange={(e) => adicionarValores(e, items, i)} name={item.name} className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5">
                            <option value="">...</option>
                            {item.options.map((option, indexOption) => <option key={indexOption} disabled={option.disabled} value={option.id}>{option.id}</option>)}
                          </select>
                      </div>
                      <div className="flex flex-col">
                          <ul>
                            {item.keywords.map((words, indexWords) => <li key={indexWords}>{words}</li>)}
                          </ul>
                      </div>
                    </div>
                  ))} 
                  <button type="reset" onClick={() => liberarBotoes(items, i)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300">Limpar seleção</button>
                </form>
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
                        <span className="flex items-center font-bold">%</span>
                        <div className="group flex items-center justify-center">
                            <input disabled type="text" defaultValue={TOTAL_EXECUTOR} className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5" />
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
                        <span className="flex items-center font-bold">%</span>
                        <div className="group flex items-center justify-center">
                          <input disabled type="text" defaultValue={TOTAL_COMUNICADOR} className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5" />
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
                        <span className="flex items-center font-bold">%</span>
                        <div className="group flex items-center justify-center">
                            <input disabled type="text" defaultValue={TOTAL_PLANEJADOR} className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5" />
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
                        <span className="flex items-center font-bold">%</span>
                        <div className="group flex items-center justify-center">
                            <input disabled type="text" defaultValue={TOTAL_ANALISTA} className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5" />
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
              <div className="flex justify-center items-center">
                <button type="button" onClick={()=> setResultado(false)} className="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300">Refazer teste</button>
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
              
            </>
          }
        </main>
      <Footer/>
    </>
  )
}

export default App
