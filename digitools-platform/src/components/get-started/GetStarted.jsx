import React from 'react';
import GetStartedSteps from './GetStartedSteps';

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className="container mx-auto py-20">
                {/* Section heading */}
                <div className="mx-auto pb-20 text-center">
                    {/* Heading */}
                    <h2 className="text-[#101727] font-extrabold text-5xl mb-4">Get Started in 3 Steps</h2>

                    {/* Sub heading */}
                    <p className="max-w-xl mx-auto text-[16px] text-[#627382] mb-4">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                {/* Section content */}
                <GetStartedSteps></GetStartedSteps>
            </div>
        </div>
    );
};

export default GetStarted