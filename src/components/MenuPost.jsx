import Image from "next/image";
import Link from "next/link";

const MenuPost = ({withImage}) => {
    return (
        <div className="flex flex-col">

                {/* single */}
                <Link href='/' className="flex h-14 my-5">
                   {withImage && <div className="">
                        <Image src='/i8.jpg' alt="" width={50} height={50} className="w-20 h-20 object-cover mr-2 max-xl:h-16 max-xl:w-16" />
                    </div>}
                    <div className={`flex flex-col text-xs  h-20 justify-between ${withImage === true? 'w-[70%]' : "w-full"}`} >
                        <span className="bg-cyan-100 w-fit h-6 px-2 py-1 text-center text-gray-800 rounded-sm">Travel</span>
                        <h3 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <div className="flex items-center gap-2 font-serif max-sm:hidden">
                            <span>Jane Doe</span>
                            <hr className="w-3 max-xl:w-2"/>
                            <span className="text-gray-500">01 Janvier 2024</span>
                        </div>
                    </div>
                </Link>

                <Link href='/' className="flex h-14 my-5">
                    {withImage && <div className="">
                        <Image src='/i8.jpg' alt="" width={50} height={50} className="w-20 h-20 object-cover mr-2  max-xl:w-16 max-xl:h-16" />
                    </div>}
                    <div className={`flex flex-col text-xs  h-20 justify-between ${withImage === true? 'w-[70%]' : "w-full"}`} >
                        <span className="bg-purple-100 w-fit h-6 px-2 py-1 text-center text-gray-800 rounded-sm">Landscape</span>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <div className="flex items-center gap-2 font-serif max-sm:hidden">
                            <span>Jane Doe</span>
                            <hr className="w-3 max-xl:w-2"/>
                            <span className="text-gray-500">01 Janvier 2024</span>
                        </div>
                    </div>
                </Link>

                <Link href='/' className="flex h-14 my-5">
                   {withImage && <div className="">
                        <Image src='/i8.jpg' alt="" width={50} height={50} className="w-20 h-20 object-cover mr-2  max-xl:w-16 max-xl:h-16" />
                    </div>}
                    <div className={`flex flex-col text-xs  h-20 justify-between ${withImage === true? 'w-[70%]' : "w-full"}`} >
                        <span className="bg-green-100 w-fit h-6 px-2 py-1 text-center text-gray-800 rounded-sm">Nature</span>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <div className="flex items-center gap-2 font-serif max-sm:hidden">
                            <span>Jane Doe</span>
                            <hr className="w-3 max-xl:w-2"/>
                            <span className="text-gray-500">01 Janvier 2024</span>
                        </div>
                    </div>
                </Link>

                <Link href='/' className="flex h-14 my-5">
                    {withImage && <div className="">
                        <Image src='/i8.jpg' alt="" width={50} height={50} className="w-20 h-20 object-cover mr-2  max-xl:w-16 max-xl:h-16" />
                    </div>}
                    <div className={`flex flex-col text-xs  h-20 justify-between ${withImage === true? 'w-[70%]' : "w-full"}`} >
                        <span className="bg-orange-100 w-fit h-6 px-2 py-1 text-center text-gray-800 rounded-sm">Photography</span>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <div className="flex items-center gap-2 font-serif max-sm:hidden">
                            <span>Jane Doe</span>
                            <hr className="w-3 max-xl:w-2"/>
                            <span className="text-gray-500">01 Janvier 2024</span>
                        </div>
                    </div>
                </Link>
            </div>
    );
};

export default MenuPost;