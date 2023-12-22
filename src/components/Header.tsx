import LogoIcom from '../assets/img/logo.png'

const Header: React.FC = ()=>{
     return (
          <>
               <header className="bg-[#041527]">
                    <div className="flex flex-col gap-5 items-center md:justify-between md:flex-row w-full p-5">
                         <div className="w-fit">
                              <figure className='max-w-44'>
                                   <img draggable={false} className='w-full' src={LogoIcom} alt="logo-icom"/>
                              </figure>
                         </div>
                         <div className="w-fit flex items-center">
                              <span className='text-white flex text-2xl'>Teste DISC Perfil Comportamental</span>
                         </div>
                    </div>
               </header>
          </>
     )
}

export default Header