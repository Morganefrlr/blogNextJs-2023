'use client'

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { PiVideoThin,PiUploadSimpleThin, PiImageThin, PiPlusLight } from "react-icons/pi";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';
import { categories } from '@/data.jsx';
import Image from 'next/image';


const storage = getStorage(app);


const WritePage = () => {

    const {status} = useSession()
    const router = useRouter()


    const [file, setFile] = useState(null)
    const [media, setMedia] = useState("")
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")

    useEffect(()=>{
        const upload = () =>{
            const name = new Date().getTime + file.name
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', 
            (snapshot) => {
                
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
               console.log(error)
            }, 
            () => {
               
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setMedia(downloadURL)
                });
            }
            );
        }
        file && upload()
    },[file])

    if(status === 'loading'){
        return <div>Loading....</div>
    }
    if(status === 'unauthenticated'){
        router.push('/')
    } 

   const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const handleSubmit = async () =>{
        const res = await fetch('http://localhost:3000/api/posts',{
            method: "POST",
            body:JSON.stringify({
                title, desc:value, img:media, slug:slugify(title), catSlug:category || 'style'
            })
        })
        if (res.status === 200) {
            const data = await res.json();
            router.push(`http://localhost:3000/posts/${data.slug}`);
          }
    } 

    return (
        <div>
            <input type="text" placeholder='Title' className="p-10 text-6xl font-serif border-none outline-none bg-transparent w-full " onChange={e=>setTitle(e.target.value)}/>
            <div className='w-full flex justify-between h-10 my-6 mx-4'>
                {categories && categories.map(item =>
                    <div key={item.id} className={`h-full ${item.color} ${category === item.title ? "brightness-50" : ""} w-32 text-gray-800 flex justify-center items-center font-semibold uppercase text-sm rounded-md cursor-pointer `} onClick={() => setCategory(item.title)}>
                        <p>{item.title}</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-5 h-[700px] relative">
                <button onClick={() => setOpen(!open)} className="w-10 h-10 border-[1px] text-3xl flex justify-center items-center rounded-full border-yellow-500 text-yellow-500 ml-4"><PiPlusLight /></button>
                {open && 
                    <div className={`flex gap-2 absolute z-10 w-fit rounded-md left-16 justify-center items-center`}>
                        <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{display : 'none'}} />
                            <button className={`w-10 h-10 border-[1px] text-3xl flex justify-center items-center rounded-full border-emerald-500 text-emerald-500 cursor-pointer `}>
                                <label htmlFor='file'> 
                                    <PiImageThin className='cursor-pointer'/>
                                </label>
                            </button>
                        <button className={`w-10 h-10 border-[1px] text-3xl flex justify-center items-center rounded-full border-emerald-500 text-emerald-500 cursor-pointer`}><PiUploadSimpleThin/></button>
                        <button className={`w-10 h-10 border-[1px] text-3xl flex justify-center items-center rounded-full border-emerald-500 text-emerald-500 cursor-pointer`}><PiVideoThin/></button>
                    </div>
                }
                {file && 
                    <Image src={URL.createObjectURL(file)} width={100} height={100} alt="" className='w-10 h-10 object-cover rounded-sm ml-4'/>
                    }
                
                <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your story...." className="w-full"/>
            </div>
            <button className="absolute top-24 right-5 py-3 px-6 border-none bg-emerald-500 text-gray-100 uppercase font-semibold text-sm cursor-pointer rounded-md" onClick={handleSubmit}>Publish</button>
        </div>
    );
};

export default WritePage;