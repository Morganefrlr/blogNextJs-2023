import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTiktok, BiLogoPinterestAlt} from "react-icons/bi";
import AuthLinks from "./AuthLinks";
import ThemeToogle from "./ThemeToogle";

const Navbar = () => {


    return (
        <div className="flex items-center justify-between h-24 relative">
           {/* Social */}
            <div className="flex gap-3 flex-1 pl-2 max-lg:hidden">
                <BiLogoFacebook/>
                <BiLogoInstagram/>
                <BiLogoTiktok/>
                <BiLogoPinterestAlt/>
            </div>

            {/* Logo */}
            <div className="font-serif flex-1 text-3xl max-lg:text-2xl">
                Let's Blog
            </div>

            {/* Links */}
            <div className="flex flex-1 gap-5 uppercase text-xs justify-center max-lg:gap-4 max-sm:justify-end">
                <ThemeToogle/>
                <div className="flex flex-col w-fit items-center relative max-sm:hidden">
                    <Link href="/" className="cursor-pointer ">Home</Link>
                    <hr className="w-3 absolute top-5 border-[0.5px] border-gray-800"/>
                </div>
                <div className="flex flex-col w-fit items-center relative max-sm:hidden">
                    <Link href="/" className="cursor-pointer">Contact</Link>
                    <hr className="w-3 absolute top-5 border-[0.5px] border-gray-800"/>
                </div>
                <div className="flex flex-col w-fit items-center relative max-sm:hidden">
                    <Link href="/" className="cursor-pointer">About</Link>
                    <hr className="w-3 absolute top-5 border-[0.5px] border-gray-800"/>
                </div>
                <AuthLinks/>
            </div>
            <hr className="w-full absolute bottom-4 border-[1px]"/>
        </div>
    );
};

export default Navbar;