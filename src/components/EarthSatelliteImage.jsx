import React, { useEffect, useState } from 'react'

const EarthSatelliteImage = () => {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState(null);

    function handleLocationClick() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("GeoLocation not supported");
        }
   }

   function success(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    setLocation({latitude, longitude});
    console.log(`Latitude => ${latitude} , Longitude => ${longitude}`);
   }

   function error() {
    console.log("Unable to get Location");
   }

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${location?.longitude}&lat=${location?.latitude}&date=2020-05-22&dim=0.10&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(apidata => {
            setData(apidata);
        })
        .catch(err => {
            console.log("API ERROR =====>>", err);
        })
    }, []);

    console.log("API DATA ===>>", data);
    console.log("Latitude", location?.latitude);

  return (
    <div>
        {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
    </div>
  )
}

export default EarthSatelliteImage
