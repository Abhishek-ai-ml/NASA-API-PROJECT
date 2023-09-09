import React from "react";

const Home = ({ data }) => {
  return (
    <div className="text-white px-20 py-5 bg-slate-600 h-screen">
      <div className="h-200 w-30 flex ">
        <div className="flex-col">
          <div className="text-start font-bold text-3xl mb-5">
            Photo of the day
          </div>
          <div className="h-[400px] w-30 shadow-none hover:shadow-lg cursor-pointer">
            <img
              src={data.hdurl}
              alt="todaypicture"
              className="h-[400px] w-30 rounded-lg"
            />
          </div>
          <div className="text-base mt-3 ">Photographer:{data.copyright}</div>
          <div className="text-base mt-1 ">Date:{data.date}</div>
        </div>

        <div className="mt-12 ml-10">
          <div className="text-sm max-w-lg"><b>Discription:</b>{data.explanation}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
