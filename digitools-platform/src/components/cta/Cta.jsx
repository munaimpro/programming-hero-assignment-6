import React from 'react';

const Cta = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30 no-select">
            <div className="container mx-auto">
                <div className="cta-text text-center mb-10">
                    <h2 className='font-extrabold text-[40px] text-base-100 mb-4'>Ready to Transform Your Workflow?</h2>
                    <p className='text-base-100 text-[16px]'>Join thousands of professionals who are already using Digitools to work smarter.<br/>Start your free trial today.</p>
                </div>

                <div className="cta-button">
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <button className='btn btn-outline p-4 w-40 h-14 font-semibold'>
                            <span>Explore Products</span>
                        </button>
                        <button className='btn p-4 w-40 h-14 font-semibold bg-transparent border-box border-2 border-base-100 text-base-100 rounded-full'>View Products</button>
                    </div>
                    <div>
                        <p className='text-[16px] text-center text-base-100'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;