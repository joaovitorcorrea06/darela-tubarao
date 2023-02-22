import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header";
import FloatButton from '../components/FloatButton';
import Footer from '../components/Footer';
import  TagManager  from 'react-gtm-module';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const tagManagerArgs ={
      gtmId:'GTM-NWHD8KG'
    }
    TagManager.initialize(tagManagerArgs)
  }, []);
  
  return (
    <>
  {/* <GTM id="GTM-NWHD8KG" /> */}
    <Header />
    <Component {...pageProps}/>
    <FloatButton/>
    <Footer/>
    </>
  ) 
  
  
}

export default MyApp


