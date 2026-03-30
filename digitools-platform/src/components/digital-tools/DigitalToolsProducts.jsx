import React from 'react';
import ProductCard from './ProductCard';

const DigitalToolsProducts = ({ products, cartProducts, setCartProducts, total, setTotal }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                products.map(product => {
                    return <ProductCard product={product} cartProducts={cartProducts} setCartProducts={setCartProducts} total={total} setTotal={setTotal} key={product.id}></ProductCard>
                })
            }
        </div>
    );
};

export default DigitalToolsProducts;