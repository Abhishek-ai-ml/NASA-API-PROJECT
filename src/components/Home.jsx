import React, { useState } from "react";

const Home = ({ data }) => {
    const [knowMore, setKnowMore] = useState(false);
    console.log("The data is ====", data);
  return (
    <div className="w-full h-screen relative">
        <p className="absolute left-10 top-5 border-l-2 border-t-2 p-3 pr-7 rounded-lg text-white text-3xl font-semibold">Astronomical Picture Of The Day</p>
        <h1 className="absolute left-10 bottom-16 border-l-2 border-b-2 p-3 pr-7 rounded-lg text-white text-3xl font-semibold">{data.title}</h1>
        <div className={`absolute right-5 bottom-20 bg-transparent ${knowMore ? "text-black" : "text-white"} ${knowMore ? "p-8 rounded-lg bg-white text-justify font-semibold z-10 w-[600px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]" : ""} transition-all duration-200 ease-in-out`}>{knowMore ? data.explanation : data.explanation?.substr(0, 80)}... <button className="underline" onClick={() =>setKnowMore(!knowMore)}>{knowMore ? "Show Less" : "Know More"}</button></div>
        <img src={data.hdurl} className="w-full h-screen"/>
    </div>
  );
};

export default Home;
