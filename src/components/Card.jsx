'use client'
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';


const Card = ({key, item}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className='flex flex-col w-full justify-between h-[600px] relative my-10' key={key}>
            <div className=''>
                <Image src={item.img} alt='' width={200} height={200} className='w-full h-[300px] rounded object-cover max-md:h-[200px]' />
            </div>
            <div className={`w-[90%] absolute text-sm top-[250px] left-[5%] h-fit pb-7 max-md:top-[150px] ${theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-100'} shadow-2xl px-8`}>
                <div className='flex my-7 gap-5 font-serif items-center  max-sm:text-xs max-sm:gap-3 max-sm:text-center max-sm:justify-between'>
                    <p>by : {item?.user?.name}</p>
                    <hr className={`w-5 max-sm:hidden`}/>
                    <div className={`${item?.cat?.color} w-[15%] h-7 flex justify-center items-center text-gray-800 rounded-sm max-sm:w-fit max-sm:p-1 capitalize`}>
                        <p>{item.catSlug}</p>
                    </div>
                    <hr className={`w-5 max-sm:hidden`}/>
                    <span className=''>{item.createdAt.substring(0,10)}</span>
                    
                </div>
                <h1 className="text-xl font-bold my-5 max-sm:text-lg">{item.title}</h1>
                <div className="text-start text-sm max-sm:text-xs" dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
                <hr className={`w-[90%] my-7 mx-auto`}/>
                <div className='w-full flex justify-center items-center'>
                    <Link href={`/posts/${item.slug}`} className="uppercase text-sm font-semibold cursor-pointer">Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;