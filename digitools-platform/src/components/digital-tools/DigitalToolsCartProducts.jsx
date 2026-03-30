import React from 'react';

const DigitalToolsCartProducts = ({ cartProducts, setCartProducts, total, setTotal }) => {

    const deleteCartProduct = (cartProduct) => {
        const filteredProducts = cartProducts.filter(filteredProduct => filteredProduct.name !== cartProduct.name);
        setCartProducts(filteredProducts);
        setTotal(total - cartProduct.price)
    }

    return (
        <div className='grid grid-cols-1 gap-4'>
            <div className="card bg-base-100 border border-slate-200 p-8 relative shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Cart</h2>
                
                <div className="cart-items">
                    {
                        cartProducts.map(cartProduct => {
                            return (
                                <div className='flex rounded-2xl p-5 gap-4 bg-[#F9FAFC] mb-4'>
                                    <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center border border-[#F2F2F2]">
                                        <img alt="icon" src={cartProduct.icon} />
                                    </div>

                                    <div className='w-[85%]'>
                                        <h2 className='text-[#101727] font-semibold text-[20px]'>
                                            {cartProduct.name}
                                        </h2>

                                        <p className='text-[#627382] font-medium'>${cartProduct.price}</p>
                                    </div>

                                    <button onClick={() => deleteCartProduct(cartProduct)} className='cursor-pointer font-bold text-[#FF3980]'>Remove</button>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex justify-between mb-6">
                    <span className='text-[#627382]'>Total</span>
                    <span className='text-[#101727] font-bold text-2xl'>${total}</span>
                </div>

                {/* Action Button */}
                <button className="btn btn-primary w-full rounded-3xl bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white normal-case text-xl h-16">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default DigitalToolsCartProducts;