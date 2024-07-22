export default function Services () {
    return (
        <>
            <h1 className="text-6xl text-center   mt-3.5"> Our Services</h1>

            <div className="flex-wrap flex justify-around">
            <div className="  p-2 shadow-md rounded-xl">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbnafTD2i8ytikQpTMsDCrhEjJqoVJ25n1KeiJfJoR2OmPhZbw" alt="55 + resturants"
                style={{width: '200px', height: '200px'}}
                 />
                <h1 className="text-2xl text-center font-semibold  mt-4">55+ Resturants</h1>
            </div>

            {/* good quality */}
            <div className="p-4 shadow-md rounded-xl">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFy1bG6DG9B_VkzYHT6_jO_eAfCaXR_-Uo_gDDU1fZytnK7hqm" alt="55 + resturants"
                style={{width: '200px', height: '200px'}}
                 />
                <h1 className="text-xl text-center font-semibold  mt-4">Good Quality</h1>
            </div>
            {/* discount system */}
            <div className=" p-2 shadow-md rounded-xl">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3OQW5XqS4qbYRhuNFqzwyKxneomb4DIjyfadm3CKA67zikA-" alt="55 + resturants"
                style={{width: '200px', height: '200px'}}
                 />
                <h1 className="text-xl text-center font-semibold  mt-4">Discount System</h1>
            </div>
            {/* fast delivery */}
            <div className=" p-2 shadow-md rounded-xl">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhEHgZfTC4d5teWLacEZ8XMWBRklmCRGw0MT5TOtTaUtIDjROj" alt="55 + resturants"
                style={{width: '200px', height: '200px'}}
                 />
                <h1 className="text-xl text-center font-semibold  mt-4">Fast Delivery</h1>
            </div>

            </div>
            
        </>
    )
}