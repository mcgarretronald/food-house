import Stars from "./stars"
export default function Popularfood() {
    return (
        <>
        <div className=" flex gap-5 flex-wrap mx-10 lg:mx-28 justify-around">
        <div className=" text-center justify-center items-center w-72 inline-block mt-6 mb-8 leading-loose"  >
            <div className="rounded-full  overflow-hidden" style={{ width: "250px", height: "250px ", marginLeft: "20px" }}>
                <img src="https://media.istockphoto.com/id/885537326/photo/stir-fried-pork-steak-served-with-vegetable-side-dish-salad-and-mash-potato-topping-with.jpg?s=612x612&w=0&k=20&c=QWw8vlHh5tzpNGgCjKaUGaq1Dewx4ST-0SFs5DlYi_w="
                    alt=""
                    style={{ width: "100%", height: "100%"}}
                    className="flex justify-center"
                />
            </div>
            <h1 className="text-4xl font-bold mt-8">Fruit Dish</h1>
            <h2 className="mt-5 mb-5 text-xl font-extralight">Dinko Food</h2>
            <div className="p-2.5 flex justify-center my-6">
                <Stars />
            </div>
            <button type="button" className=" bg-[#fcc522] px-8 p-2.5  text-white rounded-3xl">
                Add to Cart
                <span className="ml-10">$696</span>
            </button>
        </div>



       {/* 2 */}
        <div className=" text-center justify-center items-center w-72 inline-block mt-6 mb-8 leading-loose"  >
            <div className="rounded-full  overflow-hidden" style={{ width: "250px", height: "250px " , marginLeft: "20px"}}>
                <img src="https://media.istockphoto.com/id/1277628574/photo/grilled-beef-tenderloin-steak-with-potato.jpg?s=612x612&w=0&k=20&c=t2zW_-4S_Dlp5g69AtaggsM_5vFK87Xiv6pDYWrrzmw="
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <h1 className="text-4xl font-bold mt-8">Fruit Dish</h1>
            <h2 className="mt-5 mb-5 text-xl font-extralight">Dinko Food</h2>
            <div className="p-2.5 flex justify-center my-6">
                <Stars />
            </div>
            <button type="button" className=" bg-[#fcc522] px-8 p-2.5  text-white rounded-3xl">
                Add to Cart
                <span className="ml-10">$696</span>
            </button>
        </div>




        {/* 3 */}
        <div className=" text-center justify-center items-center w-72 inline-block mt-6 mb-8 leading-loose"  >
            <div className="rounded-full  overflow-hidden" style={{ width: "250px", height: "250px " , marginLeft: "20px" }}>
                <img src="https://media.istockphoto.com/id/1644752765/photo/top-view-of-spicy-seafood-served-on-dinner-table.jpg?s=612x612&w=0&k=20&c=1b1y2og8Pj0qGiIXoXhhfYpwVMSUlLHcJQiVHXmekb4="
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <h1 className="text-4xl font-bold mt-8">Sea fish dish</h1>
            <h2 className="mt-5 mb-5 text-xl font-extralight">Dinko Food</h2>
            <div className="p-2.5 flex justify-center my-6">
                <Stars />
            </div>
            <button type="button" className=" bg-[#fcc522] px-8 p-2.5  text-white rounded-3xl">
                Add to Cart
                <span className="ml-10">$696</span>
            </button>
        </div>





        {/* 4*/}
        <div className=" text-center justify-center items-center w-72 inline-block mt-6 mb-8 leading-loose"  >
            <div className="rounded-full  overflow-hidden" style={{ width: "250px", height: "250px " , marginLeft: "20px" }}>
                <img src="https://media.istockphoto.com/id/1502831859/photo/food-photography-of-pizza-with-mozzarella-and-parmesan.jpg?s=612x612&w=0&k=20&c=BB3hsKdzq-42Uj081uEIf9kBGJTm9HAihTEelbSugKM="
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <h1 className="text-4xl font-bold mt-8">Pizza</h1>
            <h2 className="mt-5 mb-5 text-xl font-extralight">Dinko Food</h2>
            <div className="p-2.5 flex justify-center my-6">
                <Stars />
            </div>
            <button type="button" className=" bg-[#fcc522] px-8 p-2.5  text-white rounded-3xl">
                Add to Cart
                <span className="ml-10">$696</span>
            </button>
        </div>
      
       
        
        
        


        </div>
        </>
      
  
    )
}
