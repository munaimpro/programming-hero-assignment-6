import React from 'react';

const ProductCard = ({ product }) => {

    const { name, description, price, period, tag, tagType, icon, features } = product;
    
    return (
        <div className="card bg-base-100 border border-slate-200 p-8 relative shadow-sm">
            {tag == "best seller" && (
                <div className="absolute top-5 right-5 bg-[#FEF3C6] text-[#BB4D00] px-4 py-1.5 rounded-full text-sm font-medium">
                    Best Seller
                </div>
            )}
                
            {tag == "popular" && (
                <div className="absolute top-5 right-5 bg-[#E1E7FF] text-[#4F39F6] px-4 py-1.5 rounded-full text-sm font-medium">
                    Popular
                </div>
            )}

            {tag == "new" && (
                <div className="absolute top-5 right-5 bg-[#DBFCE7] text-[#0A883E] px-4 py-1.5 rounded-full text-sm font-medium">
                    New
                </div>
            )}
                <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center border border-[#F2F2F2] mb-4">
                <img src={icon} alt="icon" />
                </div>

                <div className="mb-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{name}</h2>
                    <p className="text-[#627382] text-lg leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-slate-900">${price}</span>
                    <span className="text-slate-400 text-xl ml-1">/{period}</span>
                </div>

            <ul className="space-y-4 mb-4">
                {
                    features.map(feature => {
                        return (
                            <li className="flex items-center gap-3 text-slate-600 text-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>{feature}</span>
                            </li>
                        )
                    })
                }
                    {/* <li className="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{product}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        50+ writing templates
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Grammar checker
                    </li> */}
                </ul>

                {/* Action Button */}
                <button className="btn btn-primary w-full rounded-3xl bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white normal-case text-xl h-16">
                    Buy Now
                </button>
            </div>
    );
};

export default ProductCard;