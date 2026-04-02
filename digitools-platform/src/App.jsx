import {useState, Suspense } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Banner from './components/banner/Banner'
import Stats from './components/stats/Stats'
import DigitalTools from './components/digital-tools/DigitalTools'
import GetStarted from './components/get-started/GetStarted'
import Pricing from './components/pricing/Pricing'
import Footer from './components/footer/Footer'
import DigitalToolsCartProducts from './components/digital-tools/DigitalToolsCartProducts'
import { ToastContainer } from 'react-toastify'
import Cta from './components/cta/Cta'

const fetchProducts = async () => {
  const response = await fetch('/products.json');
  return response.json();
}

const productPromise = fetchProducts();

function App() {

  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div className='no-select'>
      <NavBar cartProducts={cartProducts}></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <DigitalTools productPromise={productPromise} cartProducts={cartProducts} setCartProducts={setCartProducts}></DigitalTools>
      </Suspense>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <Cta></Cta>
      <Footer></Footer>

      {/* React Toastify */}
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App 
