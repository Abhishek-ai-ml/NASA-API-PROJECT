import React, { useEffect, useState } from 'react'
import {RxCross1} from 'react-icons/rx'

const SearchResults = ({setSearchResult, searchResult}) => {
    const [mediaData, setMediaData] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(searchResult?.href).
        then(res => res.json())
        .then(data => {setMediaData(data)})
        .catch(err => {console.log(err)});
    }, [])

    console.log("API DATA =>>", mediaData);
    console.log("Media data 0", mediaData[0]);


    mediaData?.map((item) => {
        if(item?.endsWith('.jpg')) {
            if(!images.includes(item))
                setImages(curr => [...curr, item])
        }
        else if(item?.endsWith('.png')) {
            if(!images?.includes(item))
                setImages(curr => [...curr, item])
        }
        else if(item?.endsWith('.mp4')) {
            if(!videos?.includes(item))
                setVideos(curr => [...curr, item])
        }
    })
    console.log("Images", images);
    console.log("Videos", videos);
    
  return (
    <div className='bg-white p-5 h-screen text-black rounded-3xl overflow-x-scroll overflow-y-scroll'>
        <div className='flex flex-col gap-y-8 mx-auto lg:p-5 p-1'>
            <div className='flex justify-between items-center'>
                <h1 className='lg:text-3xl text-xl text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400 font-bold'>{searchResult?.data[0]?.title}</h1>
                <div onClick={() => setSearchResult(null)} className='hover:cursor-pointer p-2 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full text-white font-bold'> <RxCross1 size={24}/> </div>
            </div>

            <div className='lg:p-8 p-3 text-justify rounded-2xl leading-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>{searchResult?.data[0].description.substr(0, 500)}...</div>

            <div className='flex flex-col mx-auto gap-y-5'>
                <div className='text-2xl text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400 font-bold'>Media:</div>

                <div className='flex flex-col gap-y-3 w-full items-center'>
                    <div className='text-xl text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400 font-bold'>Photos</div>
                    <div className='flex flex-wrap gap-x-5 gap-y-5 items-center justify-center mx-auto w-full'>
                        {
                            images?.map((m) => (<img src={m} className='lg:w-[20%] w-full  hover:scale-110 transition-all duration-200 ease-in-out hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'/>))
                        }
                    </div>
                </div>

                <div className='flex flex-col gap-y-3 w-full items-center'>
                    <div className='text-xl border-t-2 border-blue-600 w-full text-center pt-2 text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400 font-bold'>{videos.length > 0 ? "Videos" : "No Videos"}</div>
                    <div className='flex flex-wrap gap-x-5 gap-y-5 items-center justify-center mx-auto w-full '>
                        {
                            videos?.map((m) => (<video src={m} controls className='lg:w-[20%] w-full hover:scale-110 transition-all duration-200 ease-in-out hover:cursor-pointer'/>))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResults
