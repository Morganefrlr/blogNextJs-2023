'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginPage = () => {
    const {data, status} = useSession()
    const router = useRouter()
    if(status === 'loading'){
        return <div>Loading....</div>
    }
    if(status === 'authenticated'){
        router.push('/')
    }
    return (
        <div className='flex w-full justify-center'>
            <div className='flex flex-col gap-14 bg-gray-100 w-[40vw] h-[50vh] mt-20 shadow-inner items-center justify-center max-sm:w-[70vw] max-sm:gap-4'>
                <div className='flex justify-center items-center w-1/2 h-20 bg-red-500 rounded-md text-gray-100 shadow-md font-semibold cursor-pointer p-2 text-center max-sm:text-xs' onClick={() => signIn('google')}>Sign in with Google</div>
                <div className='flex justify-center items-center w-1/2 h-20 bg-black rounded-md text-gray-100 shadow-md font-semibold cursor-pointer p-2 text-center max-sm:text-xs'>Sign in with Github</div>
                <div className='flex justify-center items-center w-1/2 h-20 bg-blue-500 rounded-md text-gray-100 shadow-md font-semibold cursor-pointer p-2 text-center max-sm:text-xs'>Sign in with Facebook</div>
            </div>
        </div>
    );
};

export default LoginPage;