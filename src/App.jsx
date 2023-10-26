import React from 'react'
import MiniHeader from './components/MiniHeader'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Siderbar from './components/Sidebar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <MiniHeader/>
      <Header/>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App