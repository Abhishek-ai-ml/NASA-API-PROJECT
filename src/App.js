import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mars from "./components/Mars";
import Home from "./components/Home";

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
  return (
    <div>
      

      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home data={data}/>}/>
        <Route path='/mars' element={<Mars/>}/>
      </Routes>

    </div>
  );
}

export default App;
