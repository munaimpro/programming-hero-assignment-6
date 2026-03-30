import React from 'react';
import bannerImage from '../../assets/banner.png'
import playButton from '../../assets/Play.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen py-15">
            <div className="container hero-content flex-col lg:flex-row-reverse gap-15">
                <img
                    src={bannerImage}
                    className="max-w-full rounded-lg shadow-2xl"
                />
                <div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E1E7FF] text-[#4F39F6] text-sm font-semibold w-fit">
                        <div className="relative flex items-center justify-center w-4 h-4">
                            {/* Outer glow */}
                            <span className="absolute w-5 h-5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] opacity-30"/>
                            {/* Middle circle */}
                            <span className="absolute w-4 h-4 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] opacity-60"></span>
                            {/* Inner dot */}
                            <span className="w-2 h-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]"></span>
                        </div>
                        <span>New: AI-Powered Tools Available</span>
                    </div>

                    <h2 className="py-6 font-extrabold text-7xl text-[#101727] mb-4"> Supercharge Your Digital Workflow</h2>
                    <p className='text-[#627382] text-lg mb-8'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                    <div className='flex gap-3'>
                        <button className="btn btn-primary">Explore Products</button>
                        <button className="btn btn-outline">
                            <img src={playButton} alt="play icon" />
                            <span>Watch Demo</span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;