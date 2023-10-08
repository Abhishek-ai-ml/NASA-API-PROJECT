import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {TbBrandPlanetscale} from 'react-icons/tb'
import {HiSearch} from 'react-icons/hi'
import {GiAsteroid} from 'react-icons/gi'
import {FaCloudflare} from 'react-icons/fa'

const Navbar = () => {
  const location = useLocation();
  console.log("Location is", location.pathname.split('/'));
  console.log("Normal pathname", location.pathname);
  return (
    <div className={`${location.pathname.split('/').at(1) === "asteroids-info" ? "bg-black pb-5" : location.pathname.split('/').at(1) === 'mars'? "" : "bg-black pb-3"}  w-full text-white`}>
      <div className={`${location.pathname.split('/').at(1) === 'asteroids-info' ? "bg-black text-white shadow-[0px_0px_16px_4px_#90cdf4] p-2 lg:rounded-bl-full lg:rounded-br-full lg:text-2xl text-base" : location.pathname.split('/').at(1) === 'mars'? "bg-gradient-to-l from-red-700 to-orange-400 p-2 lg:rounded-bl-full lg:rounded-br-full lg:text-2xl text-base shadow-[0px_0px_16px_4px_#f6ad55]" : "bg-black shadow-[0px_0px_16px_4px_#90cdf4] lg:text-2xl text-base p-2 lg:rounded-bl-full lg:rounded-br-full"}  flex justify-center mx-auto gap-x-8 w-full lg:w-11/12 p-4 font-semibold`}>
          <Link to={'/'} className=' hidden lg:inline'>Home</Link>
          <Link to={'/'} className='inline lg:hidden'><AiFillHome size={28}/></Link>

          <Link to={'/mars'} className=' hidden lg:inline'>Mars</Link>
          <Link to={'/mars'} className='inline lg:hidden'><TbBrandPlanetscale size={28}/></Link>

          <Link to={'/asteroids-info'} className=' hidden lg:flex'>Asteroids</Link>
          <Link to={'asteroids-info'} className='inline lg:hidden'><GiAsteroid size={28}/></Link>

          <Link to={'/space-search'} className=' hidden lg:flex'>Space Search</Link>
          <Link to={'/space-search'} className='inline lg:hidden'><HiSearch size={28}/></Link>

          {/* <Link to={'/earth-satellite-image'}>Satellite Images</Link> */}
          <Link to={'/space-weather'} className=' hidden lg:flex'>Space Weather</Link>
          <Link to={'/space-weather'} className='inline lg:hidden'><FaCloudflare size={28}/></Link>
      </div>
    </div>
  )
}

export default Navbar
