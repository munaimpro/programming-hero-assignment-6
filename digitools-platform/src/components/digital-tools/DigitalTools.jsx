import React, {use, useState} from 'react';
import DigitalToolsProducts from './DigitalToolsProducts';
import DigitalToolsCartProducts from './DigitalToolsCartProducts';

const DigitalTools = ({ productPromise, cartProducts, setCartProducts }) => {

    const products = use(productPromise);

    const [selectedButton, setSelectedButton] = useState('products');

    const [total, setTotal] = useState(0);

    return (
        <div className="container mx-auto py-30">
            {/* Section heading */}
            <div className="text-center bg-base-100 mb-10">
                {/* Heading */}
                <h2 className="text-[#101727] font-extrabold text-5xl mb-4">
                    Premium Digital Tools
                </h2>

                {/* Sub heading */}
                <p className="max-w-xl mx-auto text-[16px] text-[#627382] mb-4">
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

                {/* Tabs */}
                <div className="flex justify-center">
                    <div className="flex items-center gap-2 p-1 bg-white rounded-full border border-[#F6F6F6]">
                        <button onClick={() => { setSelectedButton('products') }} className={`btn ${selectedButton == 'products' ? 'btn-primary shadow' : 'border-0 bg-transparent shadow-none px-8 py-3 rounded-full text-[#25065D] font-medium'}`}>Products</button>
                        <button onClick={() => { setSelectedButton('cart') }} className={`btn ${selectedButton == 'cart' ? 'btn-primary shadow' : 'border-0 bg-transparent shadow-none px-8 py-3 rounded-full text-[#25065D] font-medium'}`}>Cart ({cartProducts.length})</button>
                    </div>
                </div>
            </div>

            {/* Section content */}
            {selectedButton == "products" ? <DigitalToolsProducts products={products} cartProducts={cartProducts} setCartProducts={setCartProducts} total={total} setTotal={setTotal}></DigitalToolsProducts> : <DigitalToolsCartProducts cartProducts={cartProducts} setCartProducts={setCartProducts} total={total} setTotal={setTotal}></DigitalToolsCartProducts>}
            
        </div>
    );
};

export default DigitalTools;