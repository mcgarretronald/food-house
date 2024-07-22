import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Copyright from "./Copyright";
export default function Footer() {
    return (
        <>
            <footer className="bg-[#180606] text-white lg:flex md:justify-around md:p-16 p-5 ">
                <section >
                    <h1 className="text-4xl mb-6">FoodHouse<span className="text-[#fcc522]">.</span></h1>
                    <p className="text-xl text-gray-300  mb-9 leading-normal">
                        Best cooks and best delivery guys all <br />
                        at your service. Hot tasty food will <br />
                        reach you in 60 minutes.
                    </p>
                    <div className="flex gap-4 cursor-pointer mb-9">
                        <span className="text-xl p-2 font-bold rounded-lg bg-white text-[#fcc522]"><LiaFacebookF /></span>
                        <span className="text-xl p-2 font-bold rounded-lg bg-white text-[#fcc522]"><FaTwitter /></span>
                        <span className="text-xl p-2 font-black rounded-lg bg-white text-[#fcc522]"><FaLinkedinIn />
                        </span>
                    </div>
                </section>
                <section className="md:flex   justify-between lg:justify-around text-gray-300 lg:w-1/2 list-none">
                    <div className="leading-loose cursor-pointer text-[17px] mb-9 items-start">
                        <h1 className="text-xl mb-5 text-white">Company</h1>
                       
                        <li>Carrer</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Press info</li>
                        <li>Features</li>
            
                        
                    </div>
                    {/* FUDO */}
                    <div className="leading-loose  cursor-pointer text-[17px] items-start">
                        <h1 className="text-xl text-white mb-5">Fudo</h1>
                        <li>Why Fudo</li>
                        <li>How it Works</li>
                        <li>Why Choose Us </li>
                        <li>Client Stories</li>
                        <li>Gallery</li>
                    </div>
                    {/* Menu */}
                    <div className="leading-loose  cursor-pointer text-[17px] items-start">
                        <h1 className="text-xl mb-5 text-white">Menu</h1>
                        <li>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Fast Foods</li>
                        <li>Drinks</li>
                    </div>
                </section>
            </footer>
            <Copyright/>



        </>
    )
}