import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Banner from './components/banner/Banner'
import Stats from './components/stats/Stats'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
    </>
  )
}

export default App 
