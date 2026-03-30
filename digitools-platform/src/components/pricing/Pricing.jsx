import React from 'react';
import PricingOptions from './PricingOptions';

const Pricing = () => {
    return (
        <div className="container mx-auto py-30">
            {/* Section heading */}
            <div className="text-center bg-base-100 mb-10">
                {/* Heading */}
                <h2 className="text-[#101727] font-extrabold text-5xl mb-4">
                    Simple, Transparent Pricing
                </h2>

                {/* Sub heading */}
                <p className="max-w-xl mx-auto text-[16px] text-[#627382] mb-4">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            {/* Section content */}
            <PricingOptions></PricingOptions>
        </div>
    );
};

export default Pricing;