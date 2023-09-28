'use client'
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { PiMoonStarsLight, PiSunLight  } from "react-icons/pi";

const ThemeToogle = () => {
    const {theme, toogle} = useContext(ThemeContext)




    return ( 
        <div className={`flex w-12 h-6 rounded-full cursor-pointer items-center justify-evenly relative ${theme === 'dark' ? 'bg-gray-100 text-gray-800' : 'bg-zinc-900 text-gray-100'}` } onClick={toogle}>
           <PiMoonStarsLight className="text-base"/>
           <div className={`w-5 h-5 rounded-full absolute ${theme === 'dark' ? 'right-0.5 bg-zinc-900' : 'left-0.5 bg-gray-100'}`}/>
           <PiSunLight className="text-base"/>
        </div>
    );
};

export default ThemeToogle;