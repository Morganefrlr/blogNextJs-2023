import Image from "next/image";


const Featured = () => {
    return (
        <div className="flex flex-col mt-7">
            <h1 className="text-center text-5xl font-light my-5 max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">Hi there, I'm Morgane!<br /> Discover my stories and creative ideas.</h1>
            <div className="mt-10 mx-auto flex w-full items-center gap-12 shadow-2xl rounded-md max-sm:flex-col max-sm:h-[800px]">
                {/* Image */}
                <div className="flex-1 h-[500px] relative max-sm:w-full">
                    <Image src='/i1.jpg' fill alt="" className="object-cover rounded-l-md max-sm:object-cover max-sm:rounded-t-md max-sm:rounded-bl-none"/>
                </div>

                {/* texte */}
                <div className="flex-1 flex flex-col gap-5 items-center px-4 max-sm:justify-center">
                    <h1 className="text-2xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className="text-sm leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae odio autem iusto provident ratione amet excepturi ipsa distinctio debitis!Dolore repudiandae odio autem iusto provident ratione amet excepturi ipsa distinctio debitis!</p>
                    <hr className="w-[90%]"/>
                    <button className="uppercase text-sm font-semibold cursor pointer max-sm:mb-5">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;