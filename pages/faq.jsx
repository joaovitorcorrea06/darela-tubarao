import React, { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Faq() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };


  return (
    <div className='dark:bg-gray-900 bg-[#E7ECEE]' style={{ height: '85vh', paddingTop: '10vh'}}>
      <Accordion open={open === 1} className="px-10" animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        <p className='text-left'>Como funciona o aluguel da chopeira?</p>
        </AccordionHeader>
        <AccordionBody>
        <p> Você compra o chopp e disponibilizamos a chopeira, c02 e válvulas necessárias para extração do chopp (sem custo adicional)</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="px-10" animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        <p className='text-left'>Qual a região de atendimento?</p>
        </AccordionHeader>
        <AccordionBody>
        <p>Atendemos toda região sul de Santa Catarina.</p>
        <p>A Unidade de Criciúma atende de Araranguá a Sangão, litoral e região.</p>
        <p>A Unidade de Tubarão atende de Sangão a Garopaba, litoral e região.</p>
        <br/>
        <p>Entre em contato e consulte disponibilidade</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="px-10" animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        <p className='text-left'>Se faltar chopp na minha festa?</p>
        </AccordionHeader>
        <AccordionBody>
        <p>Trabalhamos com sistema de consignado, você só paga o barril que abrir, mas em casos de emergência de faltar chopp, é só ligar para unidade mais próxima que iremos te atender!</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="px-10" animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        <p className='text-left'>Quantos litros de chopp preciso para minha festa?</p>
        </AccordionHeader>
        <AccordionBody>
        <p>Costumamos calcular uma média de 2lts por pessoa, claro que depende muito do tipo de evento e tempo de duração.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} className="px-10" animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        <p className='text-left'>Quanto tempo posso ficar com a chopeira?</p>
        </AccordionHeader>
        <AccordionBody>
        <p>Isso vai depender muito da litragem e disponibilidade de chopeira para a data, entre em contato e faça sua cotação!</p>
        </AccordionBody>
      </Accordion>
    </div>
  )
}

export default Faq