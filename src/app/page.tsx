import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

 async function Home() {
 
  return (
   <main>
    <Navbar/>
    <div id="home"> <Hero/></div>
    <div id="footer"> <Footer/></div>
   
    </main>
  );
}
 export default Home;