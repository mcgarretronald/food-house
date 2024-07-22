import Offers from "./Offers";

export default function BestOffer() {
    return(
        <>
        <h1 className="text-xl text-center text-gray-500">Quality Food 👌</h1>
        <h1 className="text-6xl text-center mb-5  mt-5 font-medium">Get The Best Offers</h1>
        <p className="text-xl text-center text-gray-500">
         The food at your doorstep. Why starve when you have us. You hunger <br />
        partner. Straight out of the oven to your doorstep.
        </p>
        <Offers/> 
        </>
    )
}