import Image from "next/image";
import Link from "next/link";


const getData = async () =>{
    const res = await fetch("http://localhost:3000/api/categories",{
        cache:"no-store"
    })
    if(!res.ok){
        throw new Error('Failed!')
    }

    return res.json()
}

const CategoryList = async () => {

    const data = await getData()
    

    return (
        <div className="mt-7">
            <h1 className="mx-0 my-14 text-2xl font-bold">Popular Categories</h1>
            <div className="flex justify-between gap-6 flex-wrap max-xl:gap-3 max-sm:gap-2 max-sm:justify-center">
                {data.map((item,index) =>
                    <Link href={`/blog?cat=${item.slug}`} className={`${item.color} flex items-center rounded-md shadow-lg gap-3 uppercase text-sm w-[15%] h-20 justify-center text-gray-800 max-xl:text-xs max-xl:gap-1 max-xl:w-[20%] max-lg:w-[30%] max-sm:w-[45%]`} key={index}>
                        <Image src={item.img} alt="" width={50} height={50} className="rounded-full w-10 h-10 object-cover max-xl:w-8 max-xl:h-8"/>
                        {item.title}
                    </Link>
                )

                }
                
            </div>
        </div>
    );
};

export default CategoryList;