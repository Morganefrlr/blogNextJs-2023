import Image from "next/image";
import Link from "next/link";

import MenuPost from "./MenuPost";

const getCat = async () =>{
    const res = await fetch("http://localhost:3000/api/categories",{
        cache:"no-store"
    })
    if(!res.ok){
        throw new Error('Failed!')
    }

    return res.json()
}

const Menu = async () => {

    const categories = await getCat()
    return (
        <div className="flex-[2] flex flex-col mt-7 max-lg:hidden">

            {/* Most Popular */}
            

            <h2 className="mt-14 text-sm text-gray-400">What's hot</h2>
            <h1 className="mx-0 mt-1 mb-5 text-2xl font-bold">Most Popular</h1>
            <MenuPost withImage={false}/>
            
            
            {/* categories */}
            

            <h2 className="text-sm mt-16 text-gray-400 ">Discover by topic</h2>
            <h1 className="mx-0 mt-1 mb-5 text-2xl font-bold">Categories</h1>
            <div className="flex flex-wrap gap-3">
                {categories.map((item,index) =>
                    <Link href={`/blog?cat=${item.slug}` }className={`${item.color} w-[30%] h-10 rounded-lg text-xs flex items-center justify-center capitalize font-semibold cursor-pointer text-gray-800`} key={index}>
                        <p>{item.title}</p>
                    </Link>
                )}
            </div>
           
            
                
            {/* Editor pick */}
            <h2 className="text-sm mt-16 text-gray-400">Chosen by the editor</h2>
            <h1 className="mx-0 mt-1 mb-5 text-2xl font-bold">Editor Pick</h1>
            <MenuPost withImage={true}/>
            
        </div>
    );
};

export default Menu;