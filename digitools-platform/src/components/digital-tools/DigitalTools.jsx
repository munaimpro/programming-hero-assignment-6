import React, {use} from 'react';
import DigitalToolsProducts from './DigitalToolsProducts';
import DigitalToolsCartProducts from './DigitalToolsCartProducts';

const DigitalTools = ({ productPromise }) => {
    const products = use(productPromise);

    return (
        <div className="container mx-auto py-30">
            {/* Section heading */}
            <div className="text-center bg-base-100 mb-10">
                {/* Heading */}
                <h2 className="text-[#101727] font-extrabold text-5xl mb-4">
                    Premium Digital Tools
                </h2>

                {/* Sub heading */}
                <p className="max-w-xl mx-auto text-[16px] text-[#627382] mb-4">
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

                {/* Tabs */}
                <div className="flex justify-center">
                    <div className="flex items-center gap-2 p-1 bg-white rounded-full border border-[#F6F6F6]">
                        <button className="btn btn-primary shadow">Products</button>
                        <button className="btn border-0 bg-transparent shadow-none px-8 py-3 rounded-full text-[#25065D] font-medium">Cart (2)</button>
                    </div>
                </div>
            </div>

            {/* Section content */}
            <DigitalToolsProducts products={products}></DigitalToolsProducts>
            <DigitalToolsCartProducts></DigitalToolsCartProducts>
        </div>
    );
};

export default DigitalTools;