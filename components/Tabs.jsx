import React from "react";
import Image from "next/image";
import ColoniaLogo from '../public/marcas/Colonia.png'
import HardenLogo from '../public/marcas/Harden.png'
import LohnLogo from '../public/marcas/Lohn.png'
import Autentico from '../public/marcas/Autentico.png'
import Brasser from '../public/marcas/Brasser.png'
import Darela from '../public/marcas/Darela.png'
import SaintBier from '../public/marcas/Saint.png'
import Link from 'next/link';

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap sectionMarcas">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {/* DARELA */}
            <li className="-mb-px mr-2 mt-2  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-yellow-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Darela
              </a>
            </li>
            {/* Colônia */}
            <li className="-mb-px mr-2 mt-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-yellow-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Colônia
              </a>
            </li>
            {/* Harden */}
            <li className="-mb-px mr-2 mt-2  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-yellow-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Harden
              </a>
            </li>
            {/* Lohn */}
            <li className="-mb-px mr-2 mt-2  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-yellow-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Lohn Bier
              </a>
            </li>
            {/* SAINT BIER */}
            <li className="-mb-px mr-2 mt-2  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-yellow-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Saint Bier
              </a>
            </li>
            {/* Autêntico */}
            <li className="-mb-px mr-2 mt-2  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "text-white bg-yellow-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Chopp de Vinho
              </a>
            </li>


          </ul>

          {/* Conteúdo */}

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
               
                {/* Colônia */}
                {/* <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div style={{ backgroundColor:' red', height: '30rem'}}>
                      <Image src={ColoniaLogo} className="marcas-tab" alt="colonia"/>
                    </div>
                  <p>
                    Chopp Pilsen Suave, comercial de colarinho cremoso e dourado,
                    aroma e paladar destacam o malte, grande versatilidade para harmonização de pratos.
                    <br />
                    <br />  Teor alcoólico 4,2% e IBU 5,1.
                  </p>
                  <br /><button className="pointer"> <Link href="/chopp-colonia">Saiba Mais</Link> </button>
                </div> */}

                  {/* darela */}
                  <div className={openTab === 1 ? "block" : "hidden"} >
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{margin: '3%'}}>
                  <Image src={Darela} alt="Darela" height={230} width={550} style={{padding: 10}}/>
                    </div>
                  <p>
                  Chopp Pilsen Suave, comercial de colarinho cremoso, dourado, gaseficado e límpido. <br />
                  Ótima versatilidade para harmonização de pratos com carnes vermelhas, frutos do mar e petiscos.
                  <br />
                  <br />
                  Barris de 30lts e 50lts
                  <br />
                  <br />  Teor alcoólico 4,2% e IBU 5,1.
                  </p>
                  {/* <br /><button className="pointer"> <Link href="/chopp-darela">Saiba Mais</Link> </button> */}
                  </div>
                </div>

                {/* Colonia */}
                <div className={openTab === 2 ? "block" : "hidden"} >
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <Image src={ColoniaLogo} alt="colonia" height={400} width={500}/>
                  <p>
                  Chopp Pilsen Suave, comercial, aroma e paladar destacam o malte, grande versatilidade para harmonização de pratos.
                  <br />
                  <br />
                  Barris de 30lts e 50lts
                  <br />
                  <br />  Teor alcoólico 4,2% e IBU 5,1.
                  </p>
                  {/* <br /><button className="pointer"> <Link href="/chopp-colonia">Saiba Mais</Link> </button> */}
                  </div>
                </div>

                {/* Harden */}
                <div className={openTab === 3 ? "block" : "hidden"} >
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <Image src={HardenLogo} alt="HardenLogo" height={400} width={500}/>
                  <p>
                  Chopp Pilsen, grande versatilidade para harmonização de petiscos, carnes vermelhas e frutos do mar.
                  <br />
                  <br />
                  Barris de 30lts e 50lts
                  <br />
                  <br />  Teor alcoólico 4,3% e IBU 5,2.
                  </p>
                  {/* <br /><button className="pointer"> <Link href="/chopp-harden">Saiba Mais</Link> </button> */}
                  </div>
                </div>

                {/* Lohn */}
                <div className={openTab === 4 ? "block" : "hidden"} >
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <Image src={LohnLogo} alt="LohnLogo" height={300} width={400}/>
                  <p>
                  Um Chopp refrescante e dourado, leve e com lúpulos e carbonatação ideais para preservar o sabor do puro malte Pilsen.<br />
                  Combina com pratos diversos, de petiscos e salgadinhos a preparados com temperos, como churrasco, feijoada, carreteiro e paella.
                  <br />
                  <br />
                  Barris de 30lts e 50lts
                  <br />
                  <br />  Teor alcoólico 4,6% e IBU 11 
                  </p>
                  {/* <br /><button className="pointer"> <Link href="/chopp-lohn">Saiba Mais</Link> </button> */}
                  </div>
                </div>

                  {/* saint bier */}
                  <div className={openTab === 5 ? "block" : "hidden"} >
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{margin: '3%'}}>
                    <Image src={SaintBier} alt="SaintBier" height={250} width={350}/>
                    </div>
                    <p>
                    Um Chopp de baixa fermentação, com coloração dourada, límpida e espuma cremosa.<br />
                    Seu paladar apresenta um equilíbrio entre o malte e lúpulo, com ótima sensação de refrescância.
                    <br />
                    <br />
                    Barris de 30lts e 50lts
                    <br />
                    <br />  Teor alcoólico 5% e IBU 12 
                    </p>
                    {/* <br /><button className="pointer"> <Link href="/chopp-saintbier">Saiba Mais</Link> </button> */}
                    </div>
                  </div>

                

                {/* Vinho - autentico e brasser  */}
                <div className={openTab === 6 ? "block" : "hidden"} >
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <div style={{margin: '3%'}}>
                  <Image src={Autentico} alt="Autentico" height={400} width={500}/>
                  </div>
                  <p>
                  Chopp de vinho Autentico
                  <br />
                  O Chopp de Vinho Tinto é uma bebida refrescante e natural, elaborado com a uva Bordeaux, é cultivada<br/>
                  na região sul do país, a mais importante região produtora de vinhos do Brasil.<br /> 
                  A seleção destas uvas, tem como seu processo de envelhecimento, resulta em um vinho frisante com um creme <br/>
                  que torna esta bebida deliciosa e única.
                  <br />
                  <br />
                  Barris de 30lts e 50lts
                  <br />
                  <br />  Teor alcoólico 7%.
                  </p>
                  {/* <br /><button className="pointer"> <Link href="/chopp-saintbier">Saiba Mais</Link> </button> */}
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <div style={{margin: '3%'}}>
                  <Image src={Brasser} alt="Brasser" height={400} width={500}/>
                  </div>
                  <p>
                  Chopp de vinho Brasser
                  <br />
                  Combinação perfeita e harmoniosa entre a leveza e o requinte, o Cooler de Vinho Brasser possui um <br/>
                  sabor refrescante e estilo tropical, grande harmonização com torta de frutas vermelhas e chocolate branco.
                  <br />
                  <br />
                  Barris de 30lts e 50lts
                  <br />
                  <br />  Teor alcoólico 4%.
                  </p>
                  {/* <br /><button className="pointer"> <Link href="/chopp-saintbier">Saiba Mais</Link> </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;