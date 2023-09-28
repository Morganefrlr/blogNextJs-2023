'use client'
import { ThemeContext } from "@/context/ThemeContext";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { CiLogout, CiMenuFries } from "react-icons/ci";

const AuthLinks = () => {
    const [open, setOpen] = useState(false)
    const {theme} = useContext(ThemeContext)
    //temporary
    const {status} = useSession()

    return (
        <>
           {status === "unauthenticated" ? 
           (
            <Link href='/login' className="max-sm:hidden">Login</Link>
           ) 
           : 
           (
            <>
                <div className="flex flex-col w-fit items-center relative max-sm:hidden">
                    <Link href="/write" className="cursor-pointer">Write</Link>
                    <hr className="w-3 absolute top-5 border-[0.5px] border-gray-800"/>
                </div>
                <CiLogout className= "text-base cursor-pointer max-sm:hidden" onClick={signOut}/>
            </>
           )
           }
           <div className="hidden max-sm:flex">
            <CiMenuFries className="text-lg rotate-180 cursor-pointer" onClick={() => setOpen(!open)}/>
           </div>
           {open && 
                <div className={`absolute top-24 left-0 h-[calc(95vh-6rem)] w-full flex flex-col items-center justify-center gap-12 text-xl z-10 ${theme === 'dark' ? ' bg-gray-100 text-gray-800' : 'bg-zinc-800 text-gray-100'}`}>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Contact</Link>
                    <Link href='/'>About</Link>
                    {status === "notauthenticated" ? 
                    (
                        <Link href='/login' className="">Login</Link>
                    ) 
                    : 
                    (
                        <>
                            <Link href="/write" className="cursor-pointer">Write</Link>
                            <CiLogout className= "text-2xl cursor-pointer" onClick={signOut}/>
                        </>
                    )
                    }
                </div>
            }
        </>
    );
};

export default AuthLinks;