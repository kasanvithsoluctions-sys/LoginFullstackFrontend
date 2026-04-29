import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { HeroFrase } from './components/HeroFrase'
import { HeroImage } from './components/HeroImage'
import { HeroForm } from './components/HeroForm'
import { Nav } from './components/Nav'





function App(){

return (
  

  <main className="min-h-screen bg-stone-200">
    <Header/>
    <HeroFrase/>
    <HeroImage/>
    <HeroForm/>
    <Nav/>
    </main>

 
  )
}
export default App



