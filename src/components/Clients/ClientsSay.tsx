import Image from 'next/image';

export default function ClientsSay() {
    return (
        <>
            <div className="text-center flex flex-col justify-center my-[10%] md:mx-[10%] lg:mx-[25%]">
                <h1 className="text-2xl mb-9 font-semibold">Testimonial</h1>
                <h1 className="md:text-6xl text-5xl mb-6">What Our Clients Say</h1>
                <div className="flex justify-center mb-9">
                    <Image 
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxdZ-U0J-tnLvCTJerzztW49qGTlFgcHhrGrshmQUsoh7OW77Q" 
                        alt="Client testimonial" 
                        width={100} 
                        height={80} 
                        className="object-cover"
                    />
                </div>
                <p className="text-xl text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut architecto a molestias itaque porro 
                    accusantium ipsam atque iure deleniti tempore dignissimos corrupti autem, maiores maxime, facilis 
                    recusandae neque pariatur eos expedita.
                </p>
            </div>
        </>
    );
}
