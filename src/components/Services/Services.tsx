import Image from 'next/image';

export default function Services() {
    return (
        <>
            <h1 className="text-6xl text-center mt-[10%]">Our Services</h1>

            <div className="flex flex-wrap justify-around gap-4 p-4 mx-[10%] mt-3">
                {/* 55+ Restaurants */}
                <div className="p-4 shadow-md rounded-xl text-center">
                    <Image 
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbnafTD2i8ytikQpTMsDCrhEjJqoVJ25n1KeiJfJoR2OmPhZbw" 
                        alt="55+ Restaurants"
                        width={200}
                        height={200}
                        className="object-cover rounded-xl"
                    />
                    <h1 className="text-2xl font-semibold mt-4">55+ Restaurants</h1>
                </div>

                {/* Good Quality */}
                <div className="p-4 shadow-md rounded-xl text-center">
                    <Image 
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFy1bG6DG9B_VkzYHT6_jO_eAfCaXR_-Uo_gDDU1fZytnK7hqm" 
                        alt="Good Quality"
                        width={200}
                        height={200}
                        className="object-cover rounded-xl"
                    />
                    <h1 className="text-xl font-semibold mt-4">Good Quality</h1>
                </div>

                {/* Discount System */}
                <div className="p-4 shadow-md rounded-xl text-center">
                    <Image 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3OQW5XqS4qbYRhuNFqzwyKxneomb4DIjyfadm3CKA67zikA-" 
                        alt="Discount System"
                        width={200}
                        height={200}
                        className="object-cover rounded-xl"
                    />
                    <h1 className="text-xl font-semibold mt-4">Discount System</h1>
                </div>

                {/* Fast Delivery */}
                <div className="p-4 shadow-md rounded-xl text-center">
                    <Image 
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhEHgZfTC4d5teWLacEZ8XMWBRklmCRGw0MT5TOtTaUtIDjROj" 
                        alt="Fast Delivery"
                        width={200}
                        height={200}
                        className="object-cover rounded-xl"
                    />
                    <h1 className="text-xl font-semibold mt-4">Fast Delivery</h1>
                </div>
            </div>
        </>
    );
}
