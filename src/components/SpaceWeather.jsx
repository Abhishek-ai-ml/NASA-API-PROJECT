import React, { useEffect, useState } from 'react'
// https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2016-09-30&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=DEMO_KEY


const SpaceWeather = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.nasa.gov/DONKI/CME?startDate=2017-01-03&endDate=2017-01-03&&catalog=ALL&api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(apidata => {
        setData(apidata);
    })
    .catch(err => {
        console.log("API ERROR =====>>", err);
    })
  }, []);

  console.log("API DATA ===>>>", data);
  return (
    <div className='flex w-screen h-screen bg-black'>
      <div className='flex mx-auto w-11/12 rounded-xl mt-8 p-2 shadow-[0px_0px_16px_4px_#90cdf4]'>
        
       {/* Coronal Mass Ejection */}
       <section className='text-white'>
          <h2>Coronal Mass Ejection</h2>

          <div>{data[0]?.note}</div>
       </section>
      </div>
    </div>
  )
}

export default SpaceWeather
