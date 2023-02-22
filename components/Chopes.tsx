import React from 'react'
import Tabs from './Tabs'

function Chopes() {
  return (
    // <section className="sticky z-50 -mt-[100vh] min-h-screen bg-[#1B1B1B]" id='chopes' >
    <section className=" z-50  min-h-screen bg-[#1B1B1B]" id='chopes' >
    <div className="space-y-10 py-16 z-50">
      <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl z-50">
        Nossas Marcas
      </h1>

        <Tabs/>
    </div>
  </section>
  )
}

export default Chopes

