import React from 'react';
import shoppingCart from '../../assets/products/shopping-cart.png'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className='container flex mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-[#101727] text-[16px]">
                            <li><a href=''>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="text-3xl">
                        <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-extrabold">
                            DigiTools
                        </span>
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-[#101727] text-[16px]">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

                <div className="navbar-end flex gap-4">
                    <a href='#'>
                        <img src={shoppingCart} alt="cart" />
                    </a>
                    <a href='#' className='font-semibold text-[16px] text-[#101727]'>Login</a>
                    <a className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;