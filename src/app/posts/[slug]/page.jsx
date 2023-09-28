
import Comments from '@/components/Comments';
import Menu from '@/components/Menu';
import Image from 'next/image';


const getData = async (slug) =>{
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`,{
        cache:"no-store"
    })
    if(!res.ok){
        throw new Error('Failed!')
    }

    return res.json()
}

const SinglePage = async ({params}) => {

    const {slug} = params
    const data = await getData(slug)
  
    return (
        <div className=''>
            <div className=''>
                <Image src={data?.img} width={200} height={200} className='w-full h-[30vh] rounded-md object-cover' />
            </div> 
            <div className='flex h-fit '>
                <div className={`text-sm h-fit pb-7 mt-10 mr-10 shadow-2xl px-8 w-[90%] max-lg:w-full max-lg:mr-0`}>
                    <div className='flex my-7 gap-5 font-serif items-center  max-sm:text-xs max-sm:gap-3 max-sm:text-center max-sm:justify-between'>
                        <Image src={data?.user.image} width={50} height={50} className='rounded-full w-14 h-14 object-cover'/>
                        <p>by : {data?.user.name}</p>
                        <hr className={`w-5 max-sm:hidden`}/>
                        <div className={`${data?.cat.color} w-[15%] h-7 flex justify-center items-center text-gray-800 rounded-sm max-sm:w-fit max-sm:p-1 capitalize`}>
                            <p>{data?.catSlug}</p>
                        </div>
                        <hr className={`w-5 max-sm:hidden`}/>
                        <span className=''>{data?.createdAt.substring(0,10)}</span>
                        
                    </div>
                    <h1 className="text-3xl font-bold my-5 max-sm:text-lg">{data?.title}</h1>
                    <div className='text-lg font-extralight' dangerouslySetInnerHTML={{ __html: data?.desc }}/>
                        
                    <hr className={`w-[90%] my-7 mx-auto`}/>
                    <div className='w-full flex'>
                        <Comments postSlug={slug}/>
                    </div>
                </div>
                <div className=''>
                    <Menu/>
                </div>
                
            </div>
        </div>
    );
};

export default SinglePage;