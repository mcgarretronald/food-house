import Popularfood from "./Popularfood"

export default function PopularFoods() {
    return (
        <>
            <h1 className="text-4xl text-center  mt-3.5 font-black">Online Store</h1>
            <h1 className="text-6xl text-center">Popular Foods</h1>
            <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5DjSwYaA09cYJuCGUno6mihbMKo6W9qYcJoa1Jm25L-IKtTpF"
                alt="Popular Food"
                className=" w-96 mx-auto md:w-1/2 md:mx-96 mt-5"
                style={{ width: "250px" }}
            />
            <div>
                <Popularfood />
            </div>
        </>
    )
}
