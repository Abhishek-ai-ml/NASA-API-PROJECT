import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js'

Chart.register(...registerables)

const Asteroids = () => {
    const [asteroid, setAsteroid] = useState('3542519');
    const [asteroidData, setAsteroidData] = useState([]);
    const [unit, setUnit] = useState('feet');
    const [chartRange, setChartRange] = useState({From:0, To:50});

    
    const chartData = {
        labels: asteroidData?.close_approach_data?.map((d) => d?.close_approach_date).slice(chartRange.From, chartRange.To),
        datasets: [
            {
                label: "Relative Velocity",
                data: asteroidData?.close_approach_data?.map((d) => d?.relative_velocity?.kilometers_per_hour),
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
    }

    const handleOnChange = (e) => {
        e.preventDefault();
       setChartRange((prevData) => ({
        ...prevData,
        [e.target.name] : e.target.value,
       }))
    }

    useEffect(() => {
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroid}?api_key=u7c13MEesZs4jzvuP5fAGf1A21Pc6ALJKYER2BW1`)
        .then(res => res.json())
        .then(data => {
            setAsteroidData(data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [asteroid]);

    console.log("Asteroid Data =======", asteroidData);

    const handleChange = (e) => {
        setUnit(e.target.value);
    }

  return (
    <div className='w-full bg-black'>
      <div className='flex flex-col w-10/12 mx-auto pt-10 gap-y-5'>
        
        <div className='flex place-content-start w-full max-w-max gap-x-5 items-center border-none'>
            <h1 className='text-5xl font-bold p-5 text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400'>Search Asteroid By Id : </h1>
            <input type='text' onChange={(e) => setAsteroid(e.target.value)} className='bg-transparent border-b-4 border-l-2 border-r-2 rounded-xl border-blue-400 text-5xl text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400 text-center'></input>
        </div>

        <div className='text-4xl font-bold p-5 text-transparent bg-clip-text bg-gradient-to-t from-red-600 to-orange-400'>{asteroidData?.name?.substr(1, asteroidData.name.length-2)}</div>

        <div className='flex justify-start gap-x-8'>
            <div className='w-[50%] flex justify-center items-center p-5 shadow-[0px_0px_16px_4px_#90cdf4] rounded-2xl text-5xl font-bold '><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600  to-orange-400">Hazardous?</span> {asteroidData?.is_potentially_hazardous_asteroid ? "😱" : "😊"}</div>
            

            <div className='w-[50%] flex flex-col gap-y-3 p-5 text-lg shadow-[0px_0px_16px_4px_#90cdf4] rounded-2xl'>
                <div className='flex item-center gap-x-5'>
                    <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600  to-orange-400'>Change Unit : </div>
                    <select onChange={(e) =>handleChange(e)} className="bg-transparent text-white bg-black">
                        <option>feet</option>
                        <option>kilometers</option>
                        <option>meters</option>
                        <option>miles</option>
                    </select>
                </div>
                
                <div className='flex flex-col gap-y-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600  to-orange-400'>
                    <div>Estimated Diameter Max : {unit === "feet" ? asteroidData?.estimated_diameter?.feet?.estimated_diameter_max : unit === "kilometers" ? asteroidData?.estimated_diameter?.kilometers?.estimated_diameter_max : unit === "meters" ? asteroidData?.estimated_diameter?.meters?.estimated_diameter_max : asteroidData?.estimated_diameter?.miles?.estimated_diameter_max}</div>
                    <div>Estimated Diameter Min : {unit === "feet" ? asteroidData?.estimated_diameter?.feet?.estimated_diameter_min : unit === "kilometers" ? asteroidData?.estimated_diameter?.kilometers?.estimated_diameter_min : unit === "meters" ? asteroidData?.estimated_diameter?.meters?.estimated_diameter_min : asteroidData?.estimated_diameter?.miles?.estimated_diameter_min}</div>
                </div>
            </div>
        </div>

        <div className="mx-auto flex flex-col gap-y-8 h-[650px] w-full p-8 shadow-[0px_0px_16px_4px_#faf089]">
            <div className='text-5xl p-3 font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400'>Relative Velocity Visualization</div>

            <div className='flex text-xl font-bold p-3 gap-x-6'>
                <label className='flex gap-x-3 text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400'>
                    From:
                    <input type='number' name='From' id='From' value={chartRange.From} onChange={handleOnChange} className="text-center w-[50%] border-blue-400 border-b-4 rounded-xl bg-transparent"/>
                </label>
                
                <label className='flex gap-x-3 text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400'>
                    To:
                    <input type='number' name='To' id='To' value={chartRange.To} onChange={handleOnChange} className="text-center w-[50%] border-blue-400 border-b-4 rounded-xl bg-transparent"/>
                </label>                
            </div>

            <div className='h-[400px]'>
                <Line data={chartData} options={options}/>
            </div>
        </div>

        <div className='flex flex-col gap-y-5 w-full mx-auto mt-12 p-8 shadow-[0px_0px_16px_4px_#faf089]'>
            <h2 className='text-5xl p-3 font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400'>Orbital Data</h2>
            
            <div className='flex flex-col gap-y-2 text-xl font-bold p-8 shadow-[0px_0px_16px_4px_#90cdf4] text-white rounded-3xl'>
                <div>{asteroidData?.orbital_data?.orbit_class?.orbit_class_description}</div>
                <div>{asteroidData?.orbital_data?.orbit_class?.orbit_class_range}</div>
                <div>{asteroidData?.orbital_data?.orbit_class?.orbit_class_type}</div>
            </div>

            <div className='grid grid-cols-2 text-lg w-full mt-5 mx-auto place-content-center p-8 shadow-[0px_0px_16px_4px_#90cdf4] rounded-3xl font-semibold  text-white'>
                {/* Part 1 */}
                <div className='flex flex-col gap-y-3'>
                    <div>Aphelion Distance : {asteroidData?.orbital_data?.aphelion_distance}</div>
                    <div>Ascending Node Longitude : {asteroidData?.orbital_data?.ascending_node_longitude}</div>
                    <div>Data arc in days : {asteroidData?.orbital_data?.data_arc_in_days}</div>
                    <div>Eccentricity : {asteroidData?.orbital_data?.eccentricity}</div>
                    <div>Epoch Osculation : {asteroidData?.orbital_data?.epoch_osculation}</div>
                    <div>Equinox : {asteroidData?.orbital_data?.equinox}</div>
                    <div>First Ovservation Date : {asteroidData?.orbital_data?.first_observation_date}</div>
                    <div>Inclination : {asteroidData?.orbital_data?.inclination}</div>
                    <div>Jupiter Tisserans Invarient : {asteroidData?.orbital_data?.jupiter_tisserand_invariant}</div>
                    <div>Last Observation Date : {asteroidData?.orbital_data?.last_observation_date}</div>
                    <div>Mean Anomaly : {asteroidData?.orbital_data?.mean_anomaly}</div>
                </div>

                {/* Part 2 */}
                <div className='flex flex-col gap-y-3'>
                    <div className='flex gap-x-8'>Mean Motion : {asteroidData?.orbital_data?.mean_motion}</div>
                    <div>Min. Orbit Intersection : {asteroidData?.orbital_data?.minimum_orbit_intersection}</div>
                    <div>Observation Used : {asteroidData?.orbital_data?.observations_used}</div>
                    <div>Orbit Determination Date : {asteroidData?.orbital_data?.orbit_determination_date}</div>
                    <div>Orbit Id : {asteroidData?.orbital_data?.orbit_id}</div>
                    <div>Orbit Uncertainity : {asteroidData?.orbital_data?.orbit_uncertainty}</div>
                    <div>Orbital Period : {asteroidData?.orbital_data?.orbital_period}</div>
                    <div>Perihelion Argument : {asteroidData?.orbital_data?.perihelion_argument}</div>
                    <div>Perihelion Distance : {asteroidData?.orbital_data?.perihelion_distance}</div>
                    <div>Perihelion Time : {asteroidData?.orbital_data?.perihelion_time}</div>
                    <div>Semi Major Axis : {asteroidData?.orbital_data?.semi_major_axis}</div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
} 

export default Asteroids
