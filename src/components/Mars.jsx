import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const rovers = [
    {
        id: 1,
        rname: "Curiosity"
    },

    {
        id:2,
        rname: "Opportunity",
    },

    {
        id: 3,
        rname: "Spirit",
    }
];
const Mars = ({setRoverInfoData}) => {
    const [RoverData, setRoverData] = useState([]);
    const [roverName, setRoverName] = useState('Curiosity');
    const [date, setDate] = useState("2015-5-5");

    const handleChange =(event) => {
        setDate(event.target.value);
    }
    console.log("The date is --------------->", date);

    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(marsTempData => {
            setRoverData(marsTempData.photos)
        })
        .catch(err => {
            console.log(err)
        })
    }, [roverName, date]);
    console.log("DATA from api ------", RoverData);
  return (
    <div className="pt-10">
        <div className='lg:w-10/12 w-11/12 mx-auto flex flex-col justify-center items-center gap-y-10'>
            <h1 className='lg:text-5xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-400'>Welcome To Mars</h1>

            <div className='flex-wrap lg:flex-nowrap lg:flex w-full gap-x-5'>
                <div className='flex flex-col gap-x-5 items-center lg:w-[50%] w-full gap-y-8 p-10 lg:mb-0 mb-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-gradient-to-l from-red-700 to-orange-400 text-white'>
                    <p className='text-xl font-semibold'>Please select the rover :</p>
                    <div className='flex-wrap lg:flex lg:flex-nowrap gap-x-5'>
                        {rovers.map((rover) => (
                            <button onClick={() => setRoverName(rover.rname.toLowerCase())} className='px-5 py-3 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all duration-200 ease-in-out lg:w-fit w-full mb-3 lg:mb-0'>{rover.rname}</button>
                        ))}
                    </div>  
                </div>

                <div className='flex flex-col items-center  gap-x-5 lg:w-[50%] w-full gap-y-8 p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-gradient-to-r from-red-700 to-orange-400 text-white'>
                    <p className='text-xl font-semibold'>Select Earth Date</p>
                    <div className='flex-wrap lg:flex lg:flex-nowrap items-center gap-x-5'>
                        <input type='date' onChange={handleChange} className='px-5 py-3 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gradient-to-r from-red-700 to-orange-400 mb-5 lg:mb-0'/>
                        <button type='submit' className='px-5 py-3 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all duration-200 ease-in-out'>Search</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap w-full justify-around gap-x-5 gap-y-5'>
               { RoverData.length > 0 ? RoverData.map((item) => ( 
                    <Link to="/mars/rover-image-desc" className='lg:w-[25%] w-full  hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110 hover:cursor-pointer transition-all duration-200 ease-in-out'><img src={item.img_src} onClick={() => setRoverInfoData(item)} /></Link>
                )) : <div className='text-5xl text-cyan-500 font-semibold'>No Images found</div>}
            </div>
        </div>
    </div>
  )
}

export default Mars
