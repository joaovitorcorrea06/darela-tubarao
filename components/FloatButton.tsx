import { FaWhatsapp } from 'react-icons/fa';
import React, {useState} from "react";
import Modal from './Modal';
import Link from 'next/link';


function FloatButton() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <Link href='https://api.whatsapp.com/send?phone=5548999177835&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20fazer%20um%20pedido.'>
      <a target="_blank">
      <button onClick={() => setOpenModal (true)} title="Contact Sale"
        className="fixed z-900 bottom-10 right-8 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#047211] hover:drop-shadow-2xl animate-bounce duration-300 bg-indigo-600 bg-[#059315]"><FaWhatsapp/></button>
        </a>
      </Link>

    {/* <Modal open={openModal} onClose={()=> setOpenModal(false)} /> */}
    </>
    
  )
}

export default FloatButton

