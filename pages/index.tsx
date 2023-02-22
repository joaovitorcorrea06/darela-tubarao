import Head from "next/head";
import Landing from "../components/Landing";
import Chopes from "../components/Chopes";
import Comments from "../components/Comments";

const Home = ({ }) => {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Darela Chopp</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="../path/to/flowbite/dist/flowbite.js"/> */}
      </Head>
      <Landing />
      <Chopes />    
      <Comments/>  
    </div>
  );
};

export default Home;