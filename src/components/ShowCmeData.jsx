import React from 'react'
import {RxCross1} from 'react-icons/rx'

const ShowCmeData = ({showCME, setShowCME}) => {
  return (
    <div className='bg-white w-full rounded-xl'>
        <div className='flex flex-col mx-auto p-5 gap-y-5'>
            <div className='flex justify-between items-center'>
                <div className='lg:text-3xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400'>{showCME.startTime}</div>
                <div onClick={() => {setShowCME(null)}} className='hover:cursor-pointer bg-gradient-to-r from-red-600 to-orange-400 p-2 rounded-full'><RxCross1 size={24} className='text-white'/></div>
            </div>

            <div className='p-5 text-justify shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl leading-8'>{showCME?.note}</div>

            <div className='p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl flex flex-col gap-y-3'>
                <div className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400'>Instruments</div>

                <div className='pl-3 flex-wrap lg:flex lg:flex-nowrap gap-x-5'>
                    {
                        showCME?.instruments?.map((ins) => (<div className='font-semibold px-3 py-2 border-2 border-orange-400'>{ins?.displayName}</div>))
                    }
                </div>
            </div>

            <div className='p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl flex flex-col gap-y-3'>
                <div className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400'>CME Analysis</div>

                <div>
                    {
                        showCME?.cmeAnalyses?.map((cmean) => (
                            <div className='p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>
                                <div className='text-xl flex-wrap lg:flex lg:flex-nowrap w-full rounded-xl justify-around mb-3'>
                                    <div className='flex flex-col gap-y-2 font-semibold pb-2 lg:pb-0'>
                                        <div className='flex w-full justify-between gap-x-5'>
                                            <div>HalfAngle:</div>
                                            <div>{cmean.halfAngle}</div>
                                        </div>
                                        
                                        <div className='flex w-full justify-between gap-x-5'>
                                            <div>Latitude:</div>
                                            <div>{cmean.latitude}</div>
                                        </div>

                                        <div className='flex w-full justify-between gap-x-5'>
                                            <div>Longitude:</div>
                                            <div>{cmean.longitude}</div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-y-2 font-semibold'>
                                        <div className='flex w-full justify-between gap-x-5'>
                                            <div>Level Of Data:</div>
                                            <div>{cmean.levelOfData}</div>
                                        </div>

                                        <div className='flex w-full justify-between gap-x-5'>
                                            <div>Speed:</div>
                                            <div>{cmean.speed}</div>
                                        </div>

                                        <div className='flex w-full justify-between gap-x-5'>
                                            <div>Type:</div>
                                            <div>{cmean.type}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='lg:pl-5 pl-0 text-justify text-xl font-semibold border-t-2 pt-5 border-orange-400 pb-5 border-b-2 leading-8'>{cmean?.note}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowCmeData
