import React, { useEffect, useState } from 'react'

const Asteroids = () => {
    const [asteroid, setAsteroid] = useState('3542519');
    const [asteroidData, setAsteroidData] = useState([]);
    const [unit, setUnit] = useState('feet');

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
    <div className='w-full'>
      <div>
        input text
        <input type='text' onChange={(e) => setAsteroid(e.target.value)}></input>

        <div>Hazardous?{asteroidData?.is_potentially_hazardous_asteroid ? "YES" : "NO"}</div>
        <select onChange={(e) =>handleChange(e)}>
            <option>feet</option>
            <option>kilometers</option>
            <option>meters</option>
            <option>miles</option>
        </select>
        {
            console.log("Unit is ======", unit)
        }
        <div>
            <div>Estimated Diameter Max : {unit === "feet" ? asteroidData?.estimated_diameter?.feet?.estimated_diameter_max : unit === "kilometers" ? asteroidData?.estimated_diameter?.kilometers?.estimated_diameter_max : unit === "meters" ? asteroidData?.estimated_diameter?.meters?.estimated_diameter_max : asteroidData?.estimated_diameter?.miles?.estimated_diameter_max}</div>
            <div>Estimated Diameter Min : {unit === "feet" ? asteroidData?.estimated_diameter?.feet?.estimated_diameter_min : unit === "kilometers" ? asteroidData?.estimated_diameter?.kilometers?.estimated_diameter_min : unit === "meters" ? asteroidData?.estimated_diameter?.meters?.estimated_diameter_min : asteroidData?.estimated_diameter?.miles?.estimated_diameter_min}</div>
        </div>

        <div className='w-10/12 mx-auto mt-12 p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <h2>Orbital Data</h2>
            
            <div className='p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div>{asteroidData?.orbital_data?.orbit_class?.orbit_class_description}</div>
                <div>{asteroidData?.orbital_data?.orbit_class?.orbit_class_range}</div>
                <div>{asteroidData?.orbital_data?.orbit_class?.orbit_class_type}</div>
            </div>

            <div className='grid grid-cols-2 w-full mt-5 mx-auto place-content-center p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
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
