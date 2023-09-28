"use client"

import Image from 'next/image';
import Link from 'next/link';
import { comments } from '@/data';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const fetcher = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()

    if(!res.ok){
        const error = new Error(data.message)
        throw error
    }

    return data
}


const Comments = ({postSlug}) => {

    const {status} = useSession()
    const {data,mutate, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`,fetcher)
    const [desc, setDesc] = useState("")

    const handleSubmit = async () =>{
        await fetch('http://localhost:3000/api/comments',{
            method: "POST",
            body: JSON.stringify({desc, postSlug})
        })
        mutate()
    }



    return (
        <div className='w-full'>
            <h1 className="mx-0 my-14 text-2xl font-bold">Comments</h1>

            {status === 'authenticated' ? 
            (
                <div className='w-full flex justify-between items-center max-sm:flex-col max-sm:gap-4'>
                    <textarea placeholder='Write a comment...' className='w-[85%] h-20 p-2 text-lg text-gray-800 focus:outline-yellow-500 max-sm:w-full' onChange={e => setDesc(e.target.value)}/>
                    <button className='w-[10%] h-14 bg-yellow-500 rounded-md uppercase font-semibold text-sm max-md:text-xs max-sm:w-full' onClick={handleSubmit}>Send</button>
                </div>
            ) : 
            (
                <Link href='/login'>Login to write a comment</Link>
            )}

            {/* COmmentaires*/}
            <div className='w-full flex flex-col gap-3'>
                {isLoading ? 'loading' : data && data?.map(item =>
                    <div className='p-2 flex flex-col' key={item.id}>
                        <div className='flex my-7 gap-5 font-serif items-center text-xs max-sm:gap-3 max-sm:text-center max-sm:justify-between'>
                            <Image src={item.user.image} width={50} height={50} className='rounded-full w-10 h-10 object-cover max-sm:hidden'/>
                            <p>by : {item.user.name}</p>
                            <hr className={`w-5 max-sm:hidden`}/>
                            <span className=''>{item.createdAt.substring(0,10)}</span>
                        </div>
                        <div>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comments;