import { Suspense, useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Banner from './components/banner/Banner'
import Stats from './components/stats/Stats'
import DigitalTools from './components/digital-tools/DigitalTools'
import GetStarted from './components/get-started/GetStarted'
import Pricing from './components/pricing/Pricing'
import Footer from './components/footer/Footer'
import DigitalToolsCartProducts from './components/digital-tools/DigitalToolsCartProducts'

const fetchProducts = async () => {
  const response = await fetch('/products.json');
  return response.json();
}

function App() {
  const productPromise = fetchProducts();

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <DigitalTools productPromise={productPromise}></DigitalTools>
      </Suspense>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App 
