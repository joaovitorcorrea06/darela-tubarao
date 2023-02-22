import Image from 'next/image'
import React from 'react'
import Chopeira4 from '../public/Chopeira4.jpg'
import Chopeira3 from '../public/chopeira3.jpg'

function Sobre() {
  return (
    <section className="dark:bg-gray-900 bg-[#E7ECEE] " style={{height: '85vh'}}>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Darela Chopp, há 18 anos no mercado trazendo sabor e alegria para o sul de Santa Catarina.</h2>
                <p className="mb-4 text-gray-700">Somos uma empresa com unidades em Criciúma e Tubarão.<br/>
                Atendemos a região AMREC, AMUREL e região litorânea do sul de Santa Catarina com profissionais capacitados e prontos para lhe atender 24 horas.<br/>
                Temos um leque de produtos de alta qualidade, com chopes premiados e um atendimento sem igual.<br/>
                 No sistema leva e traz, você compra o chopp e a instalação sai de graça!<br/>
                Peça e faça a alegria no conforto da sua casa!</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8" >
                <Image className="w-full rounded-lg" src={Chopeira4} alt="office content 1"/>
                <Image className="mt-4 w-full lg:mt-10 rounded-lg" src={Chopeira3} alt="office content 2"/>
            </div>
        </div>
    </section>
  )
}

export default Sobre