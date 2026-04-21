import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import WhatsDifferent from './pages/WhatsDifferent'
import Tokenomics from './pages/Tokenomics'
import Roadmap from './pages/Roadmap'
import Team from './pages/Team'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <div className="min-h-screen bg-terminal-black font-mono crt-flicker relative">
      {/* CRT overlay effects */}
      <div className="crt-overlay" />
      <div className="crt-vignette" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <WhatsDifferent />
        <Tokenomics />
        <Roadmap />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
