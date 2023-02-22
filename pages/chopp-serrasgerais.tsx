import React from 'react'
import Image from 'next/image'
import Product1 from '../public/chopeira1.png'

function Chopes() {
  return (

        <div className="md:h-[100vh] bg-[#E7ECEE]">

          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Chopp Serras Gerais</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">



              <div className="group relative">

                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <Image src={Product1} alt="Chopp Colônia 30lts" className="h-full w-full object-cover object-center lg:h-full lg:w-full" layout='fill' />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        30 Litros
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Barril de inox</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">R$</p>
                </div>
              </div>

              <div className="group relative">
                
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <Image src={Product1} alt="Chopp Colônia 50lts" className="h-full w-full object-cover object-center lg:h-full lg:w-full" layout='fill' />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        50 Litros
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Barril de Inox</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">R$</p>
                </div>
              </div>

            </div>
          </div>

        </div>
     

  )
}

export default Chopes