import Image from "next/image";
import burger from '../../../public/burger-removebg-preview.png';
import flavour from '../../../public/otherflavours-removebg-preview.png';
import map0 from '../../../public/images-removebg-preview.png';

export default function Offers() {
    return (
        <div className="md:flex flex-wrap mx-[6%] justify-between gap-5 p-5 mt-[5%]">
            {/* Any Day Offers */}
            <div className="flex gap-5 p-5">
                <div>
                    <h1 className="text-4xl font-semibold">Any day <br /> offers</h1>
                    <p className="text-[18px] font-light text-gray-500">
                        New phenomenon <br />
                        burger taste
                    </p>
                    <h1 className="text-xl text-[#fcc55e] font-semibold">$12.90</h1>
                    <span className="rounded-lg text-[#fcc55e] text-[8px] bg-[#fcc55e] p-1">
                        fweud
                    </span>
                </div>
                <div className="bg-[#fcc55e] rounded-full w-[150px] h-[150px] relative flex items-center justify-center">
                    <Image 
                        src={burger} 
                        alt="Delicious burger" 
                        className="absolute left-[-50px] h-auto w-[200px] z-[1]" 
                    />
                </div>
            </div>

            {/* Other Flavours */}
            <div className="flex gap-5 p-5">
                <div>
                    <h1 className="text-4xl font-semibold">Other <br /> flavours</h1>
                    <p className="text-[18px] font-light text-gray-500">
                        Save room <br />
                        We made salatas
                    </p>
                    <h1 className="text-xl text-[#fcc55e] font-semibold">$12.90</h1>
                    <span className="rounded-lg text-[#fcc55e] text-[8px] bg-[#fcc55e] p-1">
                        fweud
                    </span>
                </div>
                <div className="bg-[#fcc55e] rounded-full w-[150px] h-[150px] relative flex items-center justify-center">
                    <Image 
                        src={flavour} 
                        alt="Other flavours" 
                        className="absolute left-[-20px] h-auto w-[200px] z-[1]" 
                    />
                </div>
            </div>

            {/* Poco Store */}
            <div className="flex gap-5 p-5">
                <div>
                    <h1 className="text-4xl font-semibold">Poco <br /> Store</h1>
                    <p className="text-[18px] font-light text-gray-500">
                        New phenomenon <br />
                        burger taste
                    </p>
                    <h1 className="text-xl text-[#fcc55e] font-semibold">$12.90</h1>
                    <span className="rounded-lg text-[#fcc55e] text-[8px] bg-[#fcc55e] p-1">
                        fweud
                    </span>
                </div>
                <div className="bg-[#fcc55e] rounded-full w-[200px] h-[200px] relative flex items-center justify-center">
                    <Image 
                        src={map0} 
                        alt="Poco store map" 
                        className="absolute left-[-10px] h-[200px] w-[130px] z-[1]" 
                    />
                </div>
            </div>
        </div>
    );
}
