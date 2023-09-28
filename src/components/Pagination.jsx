'use client'

import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const Pagination = ({page, hasPrev, hasNext}) => {
    const {theme} = useContext(ThemeContext)
    const router = useRouter()

    return (
        <div className="flex justify-between max-lg:mt-10">
            <button className={`${theme === 'dark' ? "bg-gray-100 text-gray-800" : "bg-zinc-900 text-gray-100"} w-24 h-12 text-sm font-semibold cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50`} disabled={!hasPrev} onClick={() => router.push(`?page=${page - 1}`)}>Previous</button>
            <button className={`${theme === 'dark' ? "bg-gray-100 text-gray-800" : "bg-zinc-900 text-gray-100"} w-24 h-12 text-sm font-semibold cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50`} disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)}>Next</button>
        </div>
    );
};

export default Pagination;