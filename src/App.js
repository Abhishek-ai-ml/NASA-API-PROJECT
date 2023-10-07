import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mars from "./components/Mars";
import Home from "./components/Home";
import RoverImage from "./components/RoverImage";
import Asteroids from "./components/Asteroids";
import EarthSatelliteImage from "./components/EarthSatelliteImage";
import SpaceWeather from "./components/SpaceWeather";
import SpaceSearch from "./components/SpaceSearch";

function App() {
  const [data, setData] = useState([]);
  console.log(process.env.REACT_APP_API_KEY);
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []) 

  console.log("API DATA", data);

  const [roverInfoData, setRoverInfoData] = useState([]);
  return (
    <div className=" overflow-x-hidden">
      

      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home data={data}/>}/>
        <Route path='/mars' element={<Mars setRoverInfoData={setRoverInfoData}/>}/>
        <Route path="/mars/rover-image-desc" element={<RoverImage roverInfoData={roverInfoData}/>}/>
        <Route path="/asteroids-info" element={<Asteroids/>}/>
        {/* <Route path="/earth-satellite-image" element={<EarthSatelliteImage/>}/> */}
        <Route path="/space-weather" element={<SpaceWeather/>}/>
        <Route path="/space-search" element={<SpaceSearch/>}/>
      </Routes>

    </div>
  );
}

export default App;
