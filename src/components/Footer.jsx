import Image from "next/image";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTiktok, BiLogoPinterestAlt} from "react-icons/bi";


const Footer = () => {
    return (
        <div className="flex flex-col mt-28 w-full">
            <div className="flex w-full overflow-hidden relative MB-10">
                <Image src='/i1.jpg' alt="" width={300} height={300} className="w-[250px] h-[250px] object-cover brightness-50"/>
                <Image src='/i2.jpg' alt="" width={300} height={300} className="w-[250px] h-[250px] object-cover brightness-50"/>
                <Image src='/i3.jpg' alt="" width={300} height={300} className="w-[250px] h-[250px] object-cover brightness-50"/>
                <Image src='/i4.jpg' alt="" width={300} height={300} className="w-[250px] h-[250px] object-cover brightness-50"/>
                <Image src='/i5.jpg' alt="" width={300} height={300} className="w-[250px] h-[250px] object-cover brightness-50"/>
                <Image src='/i6.jpg' alt="" width={300} height={300} className="w-[250px] h-[250px] object-cover brightness-50"/>
                <div className="bg-zinc-900 absolute left-[40%] top-[40%] p-5 rounded-md bg-opacity-95 flex justify-center items-center uppercase text-xs text-gray-100 max-md:left-[35%] max-sm:left-[25%]">
                    <p>Let's Blog @instagram</p>
                </div>
            </div>
            <div className=" flex flex-col bg-zinc-900 w-full text-gray-100 justify-center items-center">
                <h1 className="font-serif flex-1 text-3xl max-lg:text-2xl my-10">Let's Blog</h1>
                <div className="flex gap-5 mb-10">
                    <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                        <BiLogoFacebook className="text-xl"/>
                        <p className="text-xs">Facebook</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                        <BiLogoInstagram className="text-xl"/>
                        <p className="text-xs">Instagram</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                        <BiLogoTiktok className="text-xl"/>
                        <p className="text-xs">Tiktok</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                        <BiLogoPinterestAlt className="text-xl"/>
                        <p className="text-xs">Pinterest</p>
                    </div>
                </div>
                <p className="text-xs uppercase mb-10">©2023. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;