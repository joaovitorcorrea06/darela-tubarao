import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'


function Landing() {
  return (
    <main className="h-[70vh] bg-[#E7ECEE] z-10" >

    <section className='sticky top-0 mx-auto flex h-[60vh] max-w-[1350px] items-center justify-center px-8 z-10 choppSection'>
        <div className='space-y-8 deliveryTextSection'>

            <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-8xl z-10">
            
                <span className="  bg-gradient-to-r from-[#C38314] to-[#4f4f4f]
                text-transparent bg-clip-text z-0">Delivery</span>
                
                <span className="block text-4xl md:text-4xl xl:text-6xl z-10">
                    24 Horas
                </span>
                
            </h1>

            <div className='space-x-6 z-10'>
               <Button title="Peça Já"/>
                <Link className="link block pt-4 pl-2 lg:inline" href='/sobre'><span className="link block pt-4 pl-2 lg:inline">Saiba Mais</span></Link>
            </div>
        </div>

        <div className="relative transition-all duration-500 
        md:inline  z-15 imageSection" style={{width: '100%', height:'90%'}}>
            {/* <div className="relative  h-[450px] w-[450px] transition-all duration-500 
        md:inline lg:h-[550px] lg:w-[500px] z-10"> */}
            <Image src="/chopp.png" layout="fill" objectFit="contain" priority alt='caneco de chopp'/>

        </div>
    </section>

    
  </main>
  )
}

export default Landing