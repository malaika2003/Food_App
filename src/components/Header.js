import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill, BsPerson} from 'react-icons/bs'
import {TbTruckReturn} from 'react-icons/tb'
import {FaGoogleWallet} from 'react-icons/fa'
import {MdHelp, MdOutlineFavorite} from 'react-icons/md'

const Nav = () => {

  const [sideNav,setSideNav]=useState(false);
  
  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
        <div onClick={()=> setSideNav(!sideNav)} className='cursor-pointer'>
            <AiOutlineMenu size={25}/>
            
        </div>
        <div className='text-2xl sm:text-2xl lg:text-3xl px-4'> <span className='  text-purple-500 font-bold'>F</span>oodie
                <span className=' text-purple-500 font-bold'>P</span>al
        </div>
 
      </div>
      
      <div className='flex mr-4'>
        <span className='text-2xl text-purple-800 font-bold mr-3' > Cart</span><BsFillCartFill size={30}/> 
      </div>
      
      {
        sideNav? (
          <div className='bg-black/60 w-full h-screen z-10 fixed top-0 left-0'
          onClick={()=> setSideNav(!sideNav)}
          />
        ) : ("")
      }
      <div className={sideNav ? 'bg-white w-[300px] h-screen z-10 fixed top-0 left-0 duration-300' : 
       'bg-white w-[300px] h-screen z-10 fixed top-0 left-[-100%] duration-300'}>
          <AiOutlineClose onClick={()=> setSideNav(!sideNav)} size={25}
          className='absolute top-3 right-3 cursor-pointer hover: bg-purple-500'/>
          <h2 className=' my-2 text-2xl px-4'><span className='text-purple-500 font-bold'>F</span>oodie<span>
            <span className='text-purple-500 font-bold'>P</span>al</span></h2>
            <nav>
              <ul className='flex flex-col p-4 text-gray-900'>
                 <li className='text-xl py-4 flex'>
                  <BsPerson size={25} className='mr-4 text-white bg-black rounded-full'/>
                  My Account 
                 </li>

                 <li className='text-xl py-4 flex'>
                  <TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full'/>
                  My Orders
                 </li>

                 <li className='text-xl py-4 flex'>
                  <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full'/>
                  My Favourite 
                 </li>

                 <li className='text-xl py-4 flex'>
                  <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full'/>
                  Wallet
                 </li>

                 <li className='text-xl py-4 flex'>
                  <MdHelp size={25} className='mr-4 text-white bg-black rounded-full'/>
                  Help
                 </li>
              </ul>
            </nav>
      </div>
    </div>
  )
}

export default Nav
