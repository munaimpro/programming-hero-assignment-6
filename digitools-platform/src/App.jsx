import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Banner from './components/banner/Banner'
import Stats from './components/stats/Stats'
import DigitalTools from './components/digital-tools/DigitalTools'
import GetStarted from './components/get-started/GetStarted'
import Pricing from './components/pricing/Pricing'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <DigitalTools></DigitalTools>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
    </>
  )
}

export default App 
