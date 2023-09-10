import React from 'react'

const RoverImage = ({roverInfoData}) => {
    console.log("Rover data", roverInfoData);
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-red-700 to-orange-400 text-white">
        <div className="flex w-11/12 justify-center mx-auto items-center rounded-xl p-6">
            <div className="flex flex-col items-center text-center w-[50%] gap-y-3">
                <h1 className="text-3xl font-semibold w-[70%] px-5 py-3 rounded-xl shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">Rover : {roverInfoData.rover.name}</h1>
                <img src={roverInfoData.img_src} className="w-[70%]"/>
                <div className="font-semibold">Photo By Camera: {roverInfoData.camera?.name} </div>
            </div>

            <div className="w-[50%] flex flex-col text-3xl gap-y-5 font-bold shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-10">
                <div>Launch Date : {roverInfoData.rover.launch_date}</div>
                <div>Landing Date : {roverInfoData.rover.landing_date}</div>
                <div>Status : {roverInfoData.rover.status.toUpperCase()}</div>
                <div className="flex flex-col gap-y-3">
                    <p>Cameras Mounted : </p>
                    <div className="flex gap-x-3 flex-wrap gap-y-5 text-lg">
                        {
                            roverInfoData.rover.cameras.map((c) => (<div className="flex items-center px-6 py-2 rounded-3xl border-[4px] font-semibold text-white border-red-600">{c.name}</div>))
                        }
                    </div>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoverImage
