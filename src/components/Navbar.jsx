import React from 'react'
import Logo from '../IMG_20240405_150157.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-3'>
  <Link to='/'><img className="w-[60px] rounded-[5px] "src={Logo} alt="" /></Link>
  <Link to='/' className='text-blue-400'>Movies</Link>
  <Link to='/watchlist' className='text-blue-400' >Watchlist</Link>
    </div>
  )
}

export default Navbar