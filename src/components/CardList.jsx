import Card from "./Card";
import Pagination from "./Pagination";

const getData = async (page,cat) =>{
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`,{
        cache:"no-store"
    })
    if(!res.ok){
        throw new Error('Failed!')
    }

    return res.json()
}

const CardList = async ({page, cat}) => {

    const {posts , count}= await getData(page,cat)


    const POST_PER_PAGE = 2
    const hasPrev = POST_PER_PAGE * (page-1) >0
    const hasNext = POST_PER_PAGE * (page-1) + POST_PER_PAGE < count
    return (
        <div className="flex-[5] mt-7">
            <h1 className="mx-0 my-14 text-2xl font-bold">Recent Posts</h1>

            {/* posts */}
            <div className="flex flex-col w-full">
                {/* single post */}
                {posts?.map((item, index) =>
                    <Card key={index} item={item} />
                )}
    
            </div>
            <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
        </div>
    );
};

export default CardList;