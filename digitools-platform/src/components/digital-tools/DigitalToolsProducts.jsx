import React from 'react';
import ProductCard from './ProductCard';

const DigitalToolsProducts = ({ products }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                products.map(product => {
                    return <ProductCard product={product}></ProductCard>
                })
            }
        </div>
    );
};

export default DigitalToolsProducts;