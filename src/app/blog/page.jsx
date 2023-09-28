
import CardList from '@/components/CardList';
import Menu from '@/components/Menu';
import React from 'react';
import { categories } from '@/components/CategoryList';


const BlogPage = async ({searchParams}) => {

    const page = parseInt(searchParams.page) || 1
    const{ cat }= searchParams || ''

    const category= categories.filter((el) => el.slug === cat)


    return (
        <div>
            <h1 className={`${category && category[0].color} text-gray-800 p-1 text-center text-2xl font-bold capitalize `}>{cat} Blog</h1>
            <div className="flex gap-12">
                <CardList page={page} cat={cat}/>
                <Menu/>
            </div>
        </div>
    );
};

export default BlogPage;