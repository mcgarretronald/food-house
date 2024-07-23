import { ImAppleinc } from "react-icons/im";
import { BiLogoPlayStore } from "react-icons/bi";
import Image from 'next/image';
import Subscription from "./Subscription";

export default function Subscribe() {
    return (
        <>
            <div className="bg-[#fff9ef]">
                <div className="md:flex gap-6 justify-around lg:mx-[15%] p-4">
                    {/* App Image Section */}
                    <section>
                        <Image 
                            src="/download app.png" 
                            alt="Download App" 
                            width={500} 
                            height={500} 
                            className="object-cover" 
                        />
                    </section>

                    {/* Text Section */}
                    <section className="lg:mt-[8%] p-5 text-center md:text-left">
                        <h1 className="text-xl text-[#FFA500] font-semibold mb-6 cursor-pointer">Download Our App</h1>
                        <h1 className="md:text-7xl text-5xl text-slate-900 mb-3 font-semibold">It&apos;s all here.</h1>
                        <h1 className="md:text-7xl text-5xl text-slate-900 font-semibold mb-6">All in one App.</h1>
                        <p className="text-xl text-gray-500 mb-6">
                            Discover local on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
                        </p>
                        <div className="p-8 gap-5 md:flex justify-around mx-4 md:mx-0 my-4">
                            <button className="p-2 px-4 mb-4 md:mb-0 bg-slate-950 gap-2 rounded-2xl text-white flex items-center">
                                <section className="text-4xl"><ImAppleinc /></section>
                                <section>
                                    <p>Download on the <br /><span className="font-semibold text-2xl">App Store</span></p>
                                </section>
                            </button>
                            <button className="p-2 px-4 bg-slate-950 gap-2 rounded-2xl text-white flex items-center">
                                <section className="text-4xl"><BiLogoPlayStore /></section>
                                <section>
                                    <p className="text-start">GET IT ON <br /><span className="font-semibold text-2xl">Google Play</span></p>
                                </section>
                            </button>
                        </div>
                    </section>
                </div>
                <Subscription />
            </div>
        </>
    );
}
