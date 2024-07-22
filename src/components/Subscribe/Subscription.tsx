
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Subscription (){
    return(
        <>
       <div className="lg:flex justify-around md:p-9 pb-16 mx-2 mt-[100px]" >
        <section>
            <h1 className="text-5xl mb-9 font-semibold">Subscribe our Newsletter</h1>
            <p className="text-xl text-gray-500">Subcribe on our newsletter to get our  <br />
            news</p>
        </section>
        <section>
            <form action="GET" className="md:flex mt-5 pb-24" >
                <input type="text" placeholder="Your Email Address ..." className="p-5 w-80 md:rounded-[20px_0px_0px_20px] rounded-[10px]" />
                <button type="button" className="bg-[#fcc522] md:rounded-[0px_20px_20px_0px] rounded-[20px] flex md:px-7 px-2 md:p-2.5 text-xl  text-white  items-center gap-5 " style={{ height: '80px' }}>
                        Subscribe
                        <span className="bg-white flex justify-center items-center text-3xl font-black text-black" style={{ height: '40px', width: '40px', borderRadius: '10px' }}>
                            <MdKeyboardArrowRight />

                        </span>
                    </button>
            </form>
        </section>
       </div>
        
        
        
        </>
    )
}