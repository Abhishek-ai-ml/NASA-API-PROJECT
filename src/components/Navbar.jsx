import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-l from-red-700 to-orange-400 h-14 flex flex-row justify-end items-center'>
      <div className='text-white text-xl m-10'>
        <Link className="mx-10" to={'/'}>Home</Link>
        <Link className="mx-10" to={"/mars"}>
            Mars Temperature
        </Link>
        <Link className="mx-10" to={"/mars"}>Rover in mars</Link>
      </div>
    </div>
  )
}

export default Navbar
