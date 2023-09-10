import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mars from "./components/Mars";
import Home from "./components/Home";
import RoverImage from "./components/RoverImage";
import Asteroids from "./components/Asteroids";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=u7c13MEesZs4jzvuP5fAGf1A21Pc6ALJKYER2BW1")
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
    <div>
      

      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home data={data}/>}/>
        <Route path='/mars' element={<Mars setRoverInfoData={setRoverInfoData}/>}/>
        <Route path="/mars/rover-image-desc" element={<RoverImage roverInfoData={roverInfoData}/>}/>
        <Route path="/asteroids-info" element={<Asteroids/>}/>
      </Routes>

    </div>
  );
}

export default App;
