import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const headers = {
    Date: Date.UTC(),
    Access_Control_Allow_Origin: "*",
  }

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
      <h1>{data.title}</h1>
      <img src={data.hdurl}/>
      <div>{data.explanation}</div>
    </div>
  );
}

export default App;
