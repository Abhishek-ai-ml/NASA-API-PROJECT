import React, { useEffect, useState } from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import SearchResults from './SearchResults';
const SpaceSearch = () => {
    const [dataapi, setDataApi] = useState([]);
    const [searchResult, setSearchResult] = useState(null);
    const [searchWord, setSearchWord] = useState("");

    useEffect(() => {
        fetch(`https://images-api.nasa.gov/search?q=${searchWord}`)
        .then(res => res.json())
        .then(apidata => {
            setDataApi(apidata);
        })
        .catch(err => {
            console.log("API ERROR =====>>", err);
        })
    }, [searchWord]);
    
    console.log("API DATA ===>>>", dataapi);
    console.log("SEARCH RSULT ==>", searchResult);

  return (
    <div className={`${searchWord ? "h-full " : "h-screen"} bg-black flex w-full`}>
        <div className='flex flex-col lg:w-10/12 w-full h-full mx-auto pt-10 gap-y-5'>
            {/* Search Section */}
            <div className='relative flex place-content-start w-full max-w-max gap-x-5 items-center border-none justify-center mx-auto'>
                {/* <h1 className='text-5xl font-bold p-5 text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400'>Search Space: </h1> */}
                <input type='text' onChange={(e) => setSearchWord(e.target.value)} className='outline-none shadow-[0px_0px_16px_4px_#90cdf4] bg-transparent rounded-xl border-blue-400 lg:text-5xl text-3xl lg:p-0 p-2 text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400 text-center'></input>
                <BiSearchAlt size={36} className='text-white absolute lg:right-5 right-1'/>
            </div>

            <div className='flex flex-col text-white mx-auto w-full h-fit rounded-xl mt-8 p-2 shadow-[0px_0px_16px_4px_#90cdf4]'>
                {
                    dataapi?.collection?.items?.map((s) => (
                        <div onClick={() => {
                            setSearchResult(s);
                            window.scrollTo({top:0, behavior: 'smooth'})
                        }}>
                            <div className='pl-3 pt-3 lg:text-3xl text-xl bg-transparent rounded-xl border-blue-400 font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400 hover:cursor-pointer'>{s?.data[0]?.title}</div>
                            <div className='pl-8 opacity-60 lg:text-lg text-base bg-transparent rounded-xl border-blue-400 font-bold text-transparent text-white'>{s?.data[0]?.description?.substr(0, 120)}</div>
                        </div>
                    ))
                }
                
                {
                    !searchWord && <div className='lg:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400 font-bold flex justify-center items-center h-full'>No Result Found</div>
                }
            </div>

            <div className={`${searchResult ? "absolute top-56 flex mx-auto justify-center lg:w-10/12 w-full h-fit" : ""}`}>/
                {searchResult && <SearchResults searchResult={searchResult} setSearchResult={setSearchResult}/>}
            </div>
        </div>
    </div>
  )
}

export default SpaceSearch
