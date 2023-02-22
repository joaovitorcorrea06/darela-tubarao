import Image from 'next/image'
import React from 'react'
import cliente4 from '../public/feedback/feedback4.jpg'
import cliente2 from '../public/feedback/feedback2.jpg'
import cliente3 from '../public/feedback/feedback3.jpg'

const Comments = () => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '2%', backgroundColor: '#e7ecee'}}>
      
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full flex justify-center">
  <div >
      <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
        <div class="flex flex-wrap items-center">
          <div className='flex items-center'>
          <div className='mr-10'>
            <Image src={cliente2} className='imgFeedback'alt="cliente2" height={45} width={45}/>
          </div>
          <h4 class="w-full md:w-auto text-xl font-heading font-medium">MÁRCIO</h4>
          </div>
          <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
          <span class="mr-4 text-xl font-heading font-medium">5.0</span>
          <div class="inline-flex">
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block text-gray-200" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
        <div class="flex flex-wrap">
          {/* <div class="w-full md:w-2/3 mb-6 md:mb-0"> */}
          <div class="w-full mb-6 md:mb-0 p-5">
            <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">Sou cliente a anos, super indico, empresa idônea e confiável!</p>
            {/* <div class="-mb-2">
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Qualidade do produto</span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Atendimento</span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Agilidade</span>
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="">❮</a> 
      <a href="#slide2" className="">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full flex justify-center">
  <div >
      <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
        <div class="flex flex-wrap items-center">
        <div className='flex items-center'>
          <div className='mr-10'>
            <Image src={cliente3} className='imgFeedback'alt="cliente3" height={45} width={45}/>
          </div>
          <h4 class="w-full md:w-auto text-xl font-heading font-medium">ROBSON</h4>
          </div>
          
          <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
          <span class="mr-4 text-xl font-heading font-medium">5.0</span>
          <div class="inline-flex">
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block text-gray-200" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
        <div class="flex flex-wrap">
          <div class="w-full mb-6 md:mb-0 p-5">
            <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">Entregaram rápido meu pedido, chopp gelado na hora!</p>
            {/* <div class="-mb-2">
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Qualidade do produto</span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Atendimento</span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Agilidade</span>
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="">❮</a> 
      <a href="#slide3" className="">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full flex justify-center">
  <div >
      <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
        <div class="flex flex-wrap items-center">
        <div className='flex items-center'>
          <div className='mr-10'>
            <Image src={cliente4} className='imgFeedback'alt="cliente2" height={45} width={45}/>
          </div>
          <h4 class="w-full md:w-auto text-xl font-heading font-medium">FABIANO</h4>
          </div>
          <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
          <span class="mr-4 text-xl font-heading font-medium">5.0</span>
          <div class="inline-flex">
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block text-gray-200" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
        <div class="flex flex-wrap">
          <div class="w-full  mb-6 md:mb-0 p-5">
            <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">No meio da festa acabou o chope e me socorreram, ganharam um cliente fiel! 👏👏</p>
            {/* <div class="-mb-2">
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Qualidade do produto</span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Atendimento</span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Agilidade</span>
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="">❮</a> 
      <a href="#slide1" className="">❯</a>
    </div>
  </div>
</div>

      {/* <div>
        <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
        <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
          <div class="flex flex-wrap items-center">
            <h4 class="w-full md:w-auto text-xl font-heading font-medium">Cliente 1</h4>
            <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
            <span class="mr-4 text-xl font-heading font-medium">5.0</span>
            <div class="inline-flex">
              <a class="inline-block mr-1" href="#">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                </svg>
              </a>
              <a class="inline-block mr-1" href="#">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                </svg>
              </a>
              <a class="inline-block mr-1" href="#">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                </svg>
              </a>
              <a class="inline-block mr-1" href="#">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                </svg>
              </a>
              <a class="inline-block text-gray-200" href="#">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
          <div class="flex flex-wrap">
            <div class="w-full md:w-2/3 mb-6 md:mb-0">
              <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit possimus, minima eos mollitia quo ipsum reiciendis ut natus vitae, hic provident similique? Officiis quibusdam, vitae commodi facilis maiores fugiat!</p>
              <div class="-mb-2">
                <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                  <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                    <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                      <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium">Qualidade do produto</span>
                  </div>
                </div>
                <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                  <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                    <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                      <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium">Atendimento</span>
                  </div>
                </div>
                <div class="inline-flex w-full md:w-auto mb-2">
                  <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                    <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                      <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium">Agilidade</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
      
      <div >
        <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
        <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
          <div class="flex flex-wrap items-center">
            <h4 class="w-full md:w-auto text-xl font-heading font-medium">Cliente 1</h4>
            <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
            <span class="mr-4 text-xl font-heading font-medium">5.0</span>
            <div class="inline-flex">
              <a class="inline-block mr-1" href="#">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                </svg>
              </a>
              <a class="inline-block mr-1" href="#">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                </svg>
              </a>
              <a class="inline-block mr-1" href="#">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                </svg>
              </a>
              <a class="inline-block mr-1" href="#">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                </svg>
              </a>
              <a class="inline-block text-gray-200" href="#">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
          <div class="flex flex-wrap">
            <div class="w-full md:w-2/3 mb-6 md:mb-0">
              <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit possimus, minima eos mollitia quo ipsum reiciendis ut natus vitae, hic provident similique? Officiis quibusdam, vitae commodi facilis maiores fugiat!</p>
              <div class="-mb-2">
                <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                  <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                    <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                      <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium">Qualidade do produto</span>
                  </div>
                </div>
                <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                  <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                    <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                      <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium">Atendimento</span>
                  </div>
                </div>
                <div class="inline-flex w-full md:w-auto mb-2">
                  <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                    <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                      <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <span class="text-green-500 font-heading font-medium">Agilidade</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>

    <div>
      <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
        <div class="flex flex-wrap items-center">
          <h4 class="w-full md:w-auto text-xl font-heading font-medium">Cliente 1</h4>
          <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
          <span class="mr-4 text-xl font-heading font-medium">5.0</span>
          <div class="inline-flex">
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block text-gray-200" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/3 mb-6 md:mb-0">
            <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit possimus, minima eos mollitia quo ipsum reiciendis ut natus vitae, hic provident similique? Officiis quibusdam, vitae commodi facilis maiores fugiat!</p>
            <div class="-mb-2">
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Qualidade do produto</span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Atendimento</span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Agilidade</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
    <div >
      <div class="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div class="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
        <div class="flex flex-wrap items-center">
          <h4 class="w-full md:w-auto text-xl font-heading font-medium">Cliente 1</h4>
          <div class="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
          <span class="mr-4 text-xl font-heading font-medium">5.0</span>
          <div class="inline-flex">
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block mr-1" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block text-gray-200" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/3 mb-6 md:mb-0">
            <p class="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit possimus, minima eos mollitia quo ipsum reiciendis ut natus vitae, hic provident similique? Officiis quibusdam, vitae commodi facilis maiores fugiat!</p>
            <div class="-mb-2">
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Qualidade do produto</span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Atendimento</span>
                </div>
              </div>
              <div class="inline-flex w-full md:w-auto mb-2">
                <div class="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div class="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="text-green-500 font-heading font-medium">Agilidade</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div> */}
    </div>

  )
}

export default Comments