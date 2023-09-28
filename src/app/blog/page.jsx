import CardList from '@/components/CardList';
import Menu from '@/components/Menu';
import React from 'react';
import { serverRuntimeConfig } from '../../../next.config';

const BlogPage = ({searchParams}) => {

    const page = parseInt(searchParams.page) || 1
    const{ cat }= searchParams || ''
    return (
        <div>
            <h1 className='bg-red-100 text-gray-800 p-1 text-center text-2xl font-bold capitalize '>{cat} Blog</h1>
            <div className="flex gap-12">
                <CardList page={page} cat={cat}/>
                <Menu/>
            </div>
        </div>
    );
};

export default BlogPage;