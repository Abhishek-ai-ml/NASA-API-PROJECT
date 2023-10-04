import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  console.log("Location is", location.pathname.split('/'));
  console.log("Normal pathname", location.pathname);
  return (
    <div className={`${location.pathname.split('/').at(1) === "asteroids-info" ? "bg-black pb-5" : location.pathname.split('/').at(1) === 'mars'? "" : "bg-black pb-3"}  w-full text-white`}>
      <div className={`${location.pathname.split('/').at(1) === 'asteroids-info' ? "bg-black text-white shadow-[0px_0px_16px_4px_#90cdf4] p-2 rounded-bl-full rounded-br-full text-2xl" : location.pathname.split('/').at(1) === 'mars'? "bg-gradient-to-l from-red-700 to-orange-400 p-2 rounded-bl-full rounded-br-full text-2xl shadow-[0px_0px_16px_4px_#f6ad55]" : "bg-black shadow-[0px_0px_16px_4px_#90cdf4] text-2xl p-2 rounded-bl-full rounded-br-full"}  flex justify-center mx-auto gap-x-8 w-11/12 p-4 font-semibold`}>
          <Link to={'/'}>Home</Link>
          <Link to={'/mars'}>Mars</Link>
          <Link to={'/asteroids-info'}>Asteroids</Link>
          <Link to={'/space-search'}>Space Search</Link>
          {/* <Link to={'/earth-satellite-image'}>Satellite Images</Link> */}
          <Link to={'/space-weather'}>Space Weather</Link>
      </div>
    </div>
  )
}

export default Navbar
