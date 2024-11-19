import Navbar from "./components/Navbar"
import Logo from "./assets/Logo1.png"
import Hero from "./components/Hero"
import Sponsors from"./components/Sponsors"
import Footer from "./components/Footer"


export default function Home(){
  return(
    <div>
      < Navbar />
      <Hero/>
      <Sponsors />
      <Footer />     

    </div>
  )
}