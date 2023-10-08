import React, { useEffect, useState } from 'react'
import ShowCmeData from './ShowCmeData';
// https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2016-09-30&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=DEMO_KEY


const SpaceWeather = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(null);
  const [showCME, setShowCME] = useState(null);
  const [entries, setEntries] = useState(5);

  let nextDate = "";
  useEffect(() => {
    fetch(`https://api.nasa.gov/DONKI/CME?startDate=${date}&endDate=${nextDate}&&catalog=ALL&api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(apidata => {
        setData(apidata.slice(0, entries));
    })
    .catch(err => {
        console.log("API ERROR =====>>", err);
    })
  }, [date, nextDate, entries]);
  if(date) {
    nextDate = date?.split('-');
    nextDate[2] = Number(nextDate[2]) + 15;
    if(Number(nextDate[2] > 30)) nextDate[1] = String(Number(nextDate[1])+1);
    nextDate[2] = String((Number(nextDate[2]) + 30)%30);
    nextDate = nextDate.join('-');
  }
  console.log("API DATA ===>>>", data);
  console.log("Date is: ", date);
  console.log("Next Date is:", nextDate);
  return (
    <div className='w-screen h-full bg-black overflow-x-hidden'>
      <div className='flex flex-col lg:w-11/12 w-11/12 h-full mx-auto pt-16 pb-72'>
        {/* CME */}
        <div className='relative w-full h-full flex flex-col rounded-lg shadow-[0px_0px_16px_4px_#faf089] gap-y-8'>
          <h1 className='text-5xl p-5 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 font-bold pb-5'>Coronal Mass Ejection</h1>
          
          <div className='flex-wrap lg:flex lg:flex-nowrap gap-x-8'>
            <div className='flex gap-x-3 items-center p-5'>
              <div className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 font-semibold'>Select Date :</div>
              <input type='date' className='bg-transparent p-2 text-white border-orange-600 border-2 rounded-lg outline-none' onChange={(e) => setDate(e.target.value)}/>
            </div>

            <div className='flex gap-x-3 items-center p-5'>
              <div className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 font-semibold'>Number of Entries:</div>
              <input type='number' className='bg-transparent p-2 text-white border-orange-600 border-2 rounded-lg outline-none' onChange={(e) => setEntries(e.target.value)}/>
            </div>
          </div>

          <div className='p-5'>
            {
              data?.map((d) => (
                <div onClick={() => {
                  setShowCME(d);
                  window.scrollTo({top:0, behavior:'smooth'});
                }} className='pb-3 hover:cursor-pointer'>
                  <div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 text-3xl font-semibold underline'>{d.startTime}</div>
                  <div className='text-white opacity-60 pl-5'>{d.note}</div>
                </div>
              ))
            }
          </div>

          <div className={`${showCME ? "absolute top-48 left-0 right-0 flex mx-auto justify-center lg:w-10/12 w-full h-fit" : ""}`}>/
            {showCME && <ShowCmeData showCME={showCME} setShowCME={setShowCME}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpaceWeather
