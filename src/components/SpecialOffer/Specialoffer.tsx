import { MdKeyboardArrowRight } from "react-icons/md";
import Stars from "../PopularFoods/stars";
export default function SpecialOffer() {
    return (
        <>
            <div className="bg-[#fffbf2] md:flex justify-evenly my-16 md:p-10 mx-3 overflow-x-hidden gap-4">
                <section className="mt-32 mb-12"> 
                    <span className=" my-8 inline-block p-2 font-semibold bg-[#fcc522] text-white rounded-lg ">-50%</span>
                    <h1 className="text-6xl font-bold mb-9">Our Special Offer</h1>
                    <p className="text-lg font-normal text-gray-500 mb-8">Best cooks and  best delivery guys all at your <br />
                        service. Hot tasty food will reach you in 60 minutes.
                    </p>
                    <button type="button" className="bg-[#fcc522] flex px-8 p-2.5 text-xl  text-white  items-center gap-5 " style={{ height: '60px', borderRadius: '20px' }}>
                        See All Menu
                        <span className="bg-white flex justify-center items-center text-3xl font-black text-black" style={{ height: '40px', width: '40px', borderRadius: '10px' }}>
                            <MdKeyboardArrowRight />

                        </span>
                    </button>
                </section>
                <section className=" relative flex justify-center mt-12">
                    <img src="https://media.istockphoto.com/id/646771262/photo/tuna-steaks-asian-style.jpg?s=612x612&w=0&k=20&c=_GZ6_oo_kBsZ3hWPVRrTyOetmZzfHByJwcvPR5oiop0="
                        alt=""
                        className="rounded-full"
                        style={{ width: '500px', height: '500px' }}
                    />
                    <div className=" shadow-lg flex gap-5 absolute bg-white rounded-xl p-5 items-center "
                        style={{
                         left: '-100px',
                            top: '-40px',
                            width: '350px',
                            height: '100px'
                        }}>
                        <img src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=" profile"
                            className="rounded-full"
                            style={{ width: '70px', height: '70px' }}
                        />
                        <section>
                            <h1 className="font-bold">Cristio Maria</h1>
                            <p className="text-gray-500">Healthy and delicious pizza</p>
                            <Stars />
                        </section>

                    </div>
                    <div className="shadow-lg flex gap-5 absolute bg-white rounded-xl p-5 items-center "
                        style={{
                            right: '-100px',
                            bottom: '-20px',
                            width: '350px',
                            height: '100px'
                        }}>
                        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" profile"
                            className="rounded-full"
                            style={{ width: '70px', height: '70px' }} />
                        <section>
                            <h1 className="font-bold">Srah Ali Khan</h1>
                            <p className="text-gray-500">Healthy and delicious pizza</p>
                            <Stars />
                        </section>
                    </div>
                </section>
            </div>


        </>
    )
}