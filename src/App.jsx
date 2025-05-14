import './App.css'
import Bento from './components/Bento'
import Clients from './components/Clients'
import Companies from './components/Companies'
import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'

function App() {


  return (
    <div className='overflow-y-scroll min-h-screen hide-scrollbar'>
      <Navbar />
      <HeroSection />
      <Companies />
      <Bento />
      <Features />
      <Clients />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
