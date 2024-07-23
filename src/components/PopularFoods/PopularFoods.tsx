import Image from 'next/image';
import Popularfood from './Popularfood';

export default function PopularFoods() {
    return (
        <>
            <h1 className="text-4xl text-center mt-3.5 font-black">Online Store</h1>
            <h1 className="text-6xl text-center mb-5">Popular Foods</h1>
            <div className="flex  mt-5 relative">
                <Image 
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5DjSwYaA09cYJuCGUno6mihbMKo6W9qYcJoa1Jm25L-IKtTpF" 
                    alt="Popular Food" 
                    width={250} 
                    height={250} 
                    className="object-cover lg:ml-[30%] ml-5"


                />
            </div>
            <div>
                <Popularfood />
            </div>
        </>
    );
}
