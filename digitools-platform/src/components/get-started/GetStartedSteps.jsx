import React from 'react';
import userIcon from '../../assets/user.png';
import rocketIcon from '../../assets/rocket.png';
import packageIcon from '../../assets/package.png';

const GetStartedSteps = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {/* get-started-1 */}
            <div className="card bg-base-100 border border-slate-200 shadow-sm rounded-2xl p-6 items-center text-center relative">
                <div className="absolute top-6 right-6 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    01
                </div>

                {/* <div className="w-28 h-28 bg-[#F5EFFF] rounded-full flex items-center justify-center">
                    <img src={userIcon} alt="" />
                </div> */}

                <div className="space-y-4 py-20 flex flex-col items-center">
                    <div className="w-28 h-28 bg-[#F5EFFF] rounded-full flex items-center justify-center">
                        <img src={userIcon} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#101727]">Create Account</h2>
                    <p className="text-[#627382] text-base leading-relaxed">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>
            </div>

            {/* get-started-2 */}
            <div className="card bg-base-100 border border-slate-200 shadow-sm rounded-2xl p-6 items-center text-center relative">
                <div className="absolute top-6 right-6 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    02
                </div>

                <div className="space-y-4 py-20 flex flex-col items-center">
                    <div className="w-28 h-28 bg-[#F5EFFF] rounded-full flex items-center justify-center mb-8">
                        <img src={packageIcon} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#101727]">Choose Products</h2>
                    <p className="text-[#627382] text-base leading-relaxed">
                        Browse our catalog and select the toolsthat fit your needs.
                    </p>
                </div>
            </div>
        
            {/* get-started-3 */}
            <div className="card bg-base-100 border border-slate-200 shadow-sm rounded-2xl p-6 items-center text-center relative">
                <div className="absolute top-6 right-6 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    03
                </div>

                <div className="space-y-4 py-20 flex flex-col items-center">
                    <div className="w-28 h-28 bg-[#F5EFFF] rounded-full flex items-center justify-center mb-8">
                        <img src={rocketIcon} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#101727]">Start Creating</h2>
                    <p className="text-[#627382] text-base leading-relaxed">
                        Download and start using your premium tools immediately.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GetStartedSteps;