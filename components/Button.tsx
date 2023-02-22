import { FaWhatsapp } from 'react-icons/fa';

import React, {useState} from "react";
import Modal from './Modal';
import Link from 'next/link';


interface Props {
    title: string;
    onClick?: () => void;
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
  }
  
  function Button({ title, onClick, width, loading, padding, noIcon }: Props) { 

    const [openModal, setOpenModal] = useState(false)


    return (
    <>
      <Link href='https://api.whatsapp.com/send?phone=5548999177835&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20fazer%20um%20pedido.'>
      <a target="_blank">
        <button
          className={`ease group relative z-30 box-border inline-flex ${
            width ? width : "w-auto"
          } ${padding} cursor-pointer items-center justify-center overflow-hidden rounded bg-indigo-600 bg-gradient-to-r from-[#059315] to-[#003706] px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none`}
        >
          <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
          <span className="absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
          <FaWhatsapp className='mr-2 '/>
          <span className="relative z-20 flex items-center font-semibold">
            {noIcon && (
              <svg
                className="relative mr-2 h-5 w-5 flex-shrink-0 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            )}
            {loading ? "Loading..." : title}
          </span>
        </button>
      </a>
      </Link>  
      {/* <Modal open={openModal} onClose={()=> setOpenModal(false)} /> */}

      </>
    );
  }
  
  export default Button;