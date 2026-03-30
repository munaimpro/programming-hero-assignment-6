import React from 'react';
import aiWritingIcon from '../../assets/products/writing_2327400 1.png'

const DigitalToolsProducts = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div class="card w-96 bg-base-100 border border-slate-200 p-8 relative shadow-sm">
                <div class="absolute top-5 right-5 bg-[#FEF3C6] text-[#BB4D00] px-4 py-1.5 rounded-full text-sm font-medium">
                    Best Seller
                </div>
                <div class="absolute top-5 right-5 bg-[#E1E7FF] text-[#4F39F6] px-4 py-1.5 rounded-full text-sm font-medium">
                    Popular
                </div>
                <div class="absolute top-5 right-5 bg-[#DBFCE7] text-[#0A883E] px-4 py-1.5 rounded-full text-sm font-medium">
                    New
                </div>

                <div class="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center border border-[#F2F2F2] mb-8 mt-2">
                    <img src={aiWritingIcon} alt="icon" />
                </div>

                <div class="mb-6">
                    <h2 class="text-3xl font-bold text-slate-900 mb-4">AI Writing Pro</h2>
                    <p class="text-[#627382] text-lg leading-relaxed">
                        Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.
                    </p>
                </div>

                <div class="flex items-baseline mb-8">
                    <span class="text-4xl font-bold text-slate-900">$29</span>
                    <span class="text-slate-400 text-xl ml-1">/Mo</span>
                </div>

                <ul class="space-y-4 mb-10">
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Unlimited AI generations
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        50+ writing templates
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Grammar checker
                    </li>
                </ul>

                {/* Action Button */}
                <button class="btn btn-primary w-full rounded-3xl bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white normal-case text-xl h-16">
                    Buy Now
                </button>
            </div>

            <div class="card w-96 bg-base-100 border border-slate-200 p-8 relative shadow-sm">
                <div class="absolute top-5 right-5 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium">
                    Best Seller
                </div>

                <div class="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center border border-[#F2F2F2] mb-8 mt-2">
                    <img src={aiWritingIcon} alt="icon" />
                </div>

                <div class="mb-6">
                    <h2 class="text-3xl font-bold text-slate-900 mb-4">AI Writing Pro</h2>
                    <p class="text-[#627382] text-lg leading-relaxed">
                        Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.
                    </p>
                </div>

                <div class="flex items-baseline mb-8">
                    <span class="text-4xl font-bold text-slate-900">$29</span>
                    <span class="text-slate-400 text-xl ml-1">/Mo</span>
                </div>

                <ul class="space-y-4 mb-10">
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Unlimited AI generations
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        50+ writing templates
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Grammar checker
                    </li>
                </ul>

                {/* Action Button */}
                <button class="btn btn-primary w-full rounded-3xl bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white normal-case text-xl h-16">
                    Buy Now
                </button>
            </div>

            <div class="card w-96 bg-base-100 border border-slate-200 p-8 relative shadow-sm">
                <div class="absolute top-5 right-5 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium">
                    Best Seller
                </div>

                <div class="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center border border-[#F2F2F2] mb-8 mt-2">
                    <img src={aiWritingIcon} alt="icon" />
                </div>

                <div class="mb-6">
                    <h2 class="text-3xl font-bold text-slate-900 mb-4">AI Writing Pro</h2>
                    <p class="text-[#627382] text-lg leading-relaxed">
                        Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.
                    </p>
                </div>

                <div class="flex items-baseline mb-8">
                    <span class="text-4xl font-bold text-slate-900">$29</span>
                    <span class="text-slate-400 text-xl ml-1">/Mo</span>
                </div>

                <ul class="space-y-4 mb-10">
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Unlimited AI generations
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        50+ writing templates
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Grammar checker
                    </li>
                </ul>

                {/* Action Button */}
                <button class="btn btn-primary w-full rounded-3xl bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white normal-case text-xl h-16">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default DigitalToolsProducts;