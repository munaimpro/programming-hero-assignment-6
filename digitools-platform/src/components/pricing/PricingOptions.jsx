import React from 'react';

const DigitalToolsProducts = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {/* starter price */}
            <div class="card bg-[#F9FAFC] border border-[#F2F2F2] p-8 shadow-sm space-y-6">
                <div>
                    <h2 class="text-3xl font-bold text-slate-900 mb-2">Starter</h2>
                    <p class="text-[#627382] text-lg leading-relaxed">Perfect for getting started</p>
                </div>

                <div class="flex items-baseline">
                    <span class="text-4xl font-bold text-[#101727]">$0</span>
                    <span class="text-slate-400 text-xl ml-1">/Month</span>
                </div>

                <ul class="space-y-4">
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Access to 10 free tools</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Basic templates</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Community support</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>1 project per month</span>
                    </li>
                </ul>

                {/* Action Button */}
                <button class="btn btn-primary w-full rounded-3xl bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white normal-case text-xl h-16 mt-auto">
                    Buy Now
                </button>
            </div>

            {/* pro price */}
            <div class="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] border border-[#F2F2F2] p-8 shadow-sm space-y-6 text-white">
                <div class="bg-[#FEF3C6] text-[#BB4D00] px-4 py-1.5 rounded-full text-sm font-medium w-fit mx-auto -mt-12.5">
                    Most Popular
                </div>

                <div>
                    <h2 class="text-3xl font-bold mb-2">Pro</h2>
                    <p class="text-base-300 text-lg leading-relaxed">Best for professionals</p>
                </div>

                <div class="flex items-baseline">
                    <span class="text-4xl font-bold">$29</span>
                    <span class="text-xl ml-1">/Month</span>
                </div>

                <ul class="space-y-4">
                    <li class="flex items-center gap-3 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Access to all premium tools</span>
                    </li>
                    <li class="flex items-center gap-3 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Unlimited templates</span>
                    </li>
                    <li class="flex items-center gap-3 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Priority support</span>
                    </li>
                    <li class="flex items-center gap-3 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Unlimited projects</span>
                    </li>
                    <li class="flex items-center gap-3 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Cloud sync</span>
                    </li>
                    <li class="flex items-center gap-3 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Advanced analytics</span>
                    </li>
                </ul>

                {/* Action Button */}
                <button class="btn btn-outline w-full h-16 text-xl mt-auto">
                    <span>Start Pro Trial</span>
                </button>
            </div>

            {/* enterprise price */}
            <div class="card bg-[#F9FAFC] border border-[#F2F2F2] p-8 shadow-sm space-y-6">
                <div>
                    <h2 class="text-3xl font-bold text-slate-900 mb-2">Enterprise</h2>
                    <p class="text-[#627382] text-lg leading-relaxed">For teams and businesses</p>
                </div>

                <div class="flex items-baseline">
                    <span class="text-4xl font-bold text-[#101727]">$99</span>
                    <span class="text-slate-400 text-xl ml-1">/Month</span>
                </div>

                <ul class="space-y-4">
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Everything in Pro</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Team collaboration</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Custom integrations</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Dedicated support</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>SLA guarantee</span>
                    </li>
                    <li class="flex items-center gap-3 text-slate-600 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Custom branding</span>
                    </li>
                </ul>

                {/* Action Button */}
                <button class="btn btn-primary w-full rounded-3xl bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white normal-case text-xl h-16 mt-auto">
                    Contact Sales
                </button>
            </div>
        </div>
    );
};

export default DigitalToolsProducts;