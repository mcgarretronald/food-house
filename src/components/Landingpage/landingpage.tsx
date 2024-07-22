function LandingPage() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between md:mx-20 md:mt-6 mx-3 lg:my-20">
                <section className="lg:mt-20">
                    <h1 className="lg:text-6xl md:text-6xl text-3xl md:my-10 my-12 leading-tight font-bold">
                        Enjoy Delicious <br />
                        Food in <span className="text-[#fcc522]">Healthy Life</span>
                    </h1>
                    <p className="leading-normal lg:text-2xl text-xl mb-9 md:mt-4">
                        Tandoori masala is an Indian spice blend consisting of a <br />
                        variety of spices. Tandoori masala is an Indian spice blend <br />
                        consisting of a variety of spices.
                    </p>
                    <button
                        type="button"
                        className="text-white bg-[#fcc522] hover:bg-[#e6b71d] focus:ring-4 focus:outline-none focus:ring-[#fcc522] font-medium rounded-lg text-lg px-5 py-2.5 text-center mb-12 md:mx-0"
                    >
                        ORDER NOW
                    </button>
                </section>
                <section className=" lg:justify-center">
                    <div >
                        <img
                            src="https://media.istockphoto.com/id/1023108376/photo/chicken-whole-fried-on-a-wooden-background-tomato.jpg?s=612x612&w=0&k=20&c=qDv3VG91pvbvG5UOimmVgfR6P5tL0tBCfui1iqm5h6w="
                            alt="Chicken"
                            className="rounded-full "
                            style={{ width: "500px", height: "500px" }}
                        />
                    </div>
                </section>
            </div>
        </>
    );
}

export default LandingPage;
