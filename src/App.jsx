import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import CTA from './Components/CTA'
import ThemeToggle from './Components/ThemeToggle'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <ThemeToggle />
      <CTA />
      <Footer />
    </div>
  )
}

export default App