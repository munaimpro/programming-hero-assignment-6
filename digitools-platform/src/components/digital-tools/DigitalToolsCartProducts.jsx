import React from 'react';
import { toast } from 'react-toastify';

const DigitalToolsCartProducts = ({ cartProducts, setCartProducts, total, setTotal }) => {

    // Function to handle product delete from cart
    const deleteCartProduct = (cartProduct) => {
        const filteredProducts = cartProducts.filter(filteredProduct => filteredProduct.id !== cartProduct.id);
        setCartProducts(filteredProducts);
        setTotal(total - cartProduct.price);
        toast.warn("Product removed")
    }

    // Function to handle checkout
    const handleCheckoutProduct = () => {
        setCartProducts([]);
        setTotal(0);
        toast.success("Checkout successful")
    }

    return (
        <div className='grid grid-cols-1'>
            {
                cartProducts.length > 0 ?
                    <div className="card bg-base-100 border border-slate-200 p-8 relative shadow-sm">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Cart</h2>

                        <div className="cart-items">
                            {
                                cartProducts.map((cartProduct, key) => {
                                    return (
                                        <div key={key} className='flex rounded-2xl p-5 gap-4 bg-[#F9FAFC] mb-4'>
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

                        {/* Checkout Button */}
                        <button onClick={() => handleCheckoutProduct() } className="btn btn-primary w-full rounded-3xl bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white normal-case text-xl h-16">Proceed to Checkout</button>
                    </div>
                :
                    <div className="card bg-base-100 border border-slate-200 p-8 relative shadow-sm py-24">
                        <h2 className="text-3xl text-center font-bold text-slate-900 mb-4">No Products Available on Cart</h2>
                        <p className='text-[#627382] text-lg text-center'>Buy some product now</p>
                    </div>
            }
        </div>
    );
};

export default DigitalToolsCartProducts;