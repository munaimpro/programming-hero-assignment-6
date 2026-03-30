import React from 'react';

const Stats = () => {
    return (
        <div className='py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className='text-white text-center lg:border-r-2 lg:border-r-base-200 w-max-content mb-5 lg:mb-0'>
                    <h2 className='mb-3 font-extrabold text-6xl'>50K+</h2>
                    <p className='opacity-85'>Active Users</p>
                </div>

                <div className='text-white text-center lg:border-r-2 lg:border-r-base-200 w-max-content mb-5 lg:mb-0'>
                    <h2 className='mb-3 font-extrabold text-6xl'>200+</h2>
                    <p className='opacity-85'>Premium Tools</p>
                </div>

                <div className='text-white text-center w-max-content'>
                    <h2 className='mb-3 font-extrabold text-6xl'>4.9</h2>
                    <p className='opacity-85'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;