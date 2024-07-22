import { ImAppleinc } from "react-icons/im";
import { BiLogoPlayStore } from "react-icons/bi";
import Subscription from "./Subscription";
export default function Subscribe() {
    return (
        <>
            <div className="bg-[#fff9ef]">
                <div className="md:flex  gap-6 justify-around lg:mx-[15%]">
                    <section >
                        <img src="/download app.png" alt="Download App" />
                    </section>
                    <section className="lg:mt-[8%] p-5">
                        <h1 className="text-xl text-[orange] font-semibold mb-9 cursor-pointer">Download Our App</h1>
                        <h1 className="md:text-7xl text-5xl text-slate-900 mb-3 font-semibold">It's all here. </h1>
                        <h1 className="md:text-7xl text-5xl  text-slate-900 font-semibold mb-9">All in one App.</h1>
                        <p className="text-xl text-gray-500">Discover local on-demand delivery or Pickup from
                            resturants, nearby grocery and convinience stores,
                            and more. </p>
                        <div className=" p-8 gap-5 md:flex justify-around mx-16 md:mx-0  my-4">
                            <button className="p-2 px-4 mb-4 md:mb-0 bg-slate-950 gap-2 rounded-2xl text-white flex items-center">
                                <section className="text-4xl"><ImAppleinc /> </section>
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
                <Subscription/>
            </div>
        
        </>
    )
}
