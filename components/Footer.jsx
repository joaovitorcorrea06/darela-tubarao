import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
//     <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900" style={{ height: '5vh'}}>
//     <div className="sm:flex sm:items-center sm:justify-center">
//         {/* <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
//             <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//         </a> */}
//         <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
//             <li>
//                 <a href="#" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
//             </li>
//             <li>
//                 <a href="#" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
//             </li>
//             <li>
//                 <a href="#" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
//             </li>
//         </ul>
//     </div>

// </footer>
<footer className="border-t border-gray-200 flex items-center justify-center" style={{backgroundColor: '#e7ecee', height: '7vh'}}>
      {/* <div
        className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between"
      > */}
        {/* <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li>Inicio</li>
            <li>Chopes</li>
            <li>Sobre</li>
            <li>Contato</li>
            <li>FAQ</li>
          </ul>
        </div> */}
        <div className="flex justify-center mt-6 mb-6 lg:mt-0">
          <a href='https://www.facebook.com/darelachoppexpress' target='_blank' rel="noreferrer">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-6 h-6 text-blue-600"
              viewBox="0 0 24 24"
              >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
            </svg>
          </a>
          <a className="ml-3" href='https://www.instagram.com/darelachoppexpress' target='_blank' rel="noreferrer" >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-6 h-6 text-pink-400"
              viewBox="0 0 24 24"
              >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
            </svg>
          </a>
          <a className="ml-3" >
          <Link href='/contato'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
          </svg>
          </Link>
          </a>
        </div>
      {/* </div> */}
    </footer>
  )
}

export default Footer 