import { FaBars } from "react-icons/fa";
const NavigationBar = () => {

    return (
        <>
            <nav className="flex justify-between mt-12  lg:mx-9 mx-5 text-xl  text-center hover:cursor-pointer ">
                <section className="flex gap-x-2.5 text-center">
                <FaBars className="md:hidden"/>
                    <h1 className="text-[#fcc522] italic">Food House</h1>
                </section>
                <section className="flex-col list-none justify-between text-left w-7/12 hidden md:flex md:flex-row" >
                    <li className=" hover:text-[#fcc522]">HOME</li>
                    <li className=" hover:text-[#fcc522]">RESTURANT</li>
                    <li className=" hover:text-[#fcc522]">SERVICES</li>
                    <li className=" hover:text-[#fcc522]">CART</li>
                </section>
                <section>
                    Sign in
                </section>

            </nav>


        </>


    )
}
export default NavigationBar