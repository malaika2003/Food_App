import React from 'react'
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { useCart } from './context/cart.js';
const Viewmore = () => {
    const location = useLocation();
    const [cart, setCart] = useCart();
  return (
    <div>
      <Nav />
      <div className='rounded-3xl mr-4 ml-4 overflow-x-hidden'>
        
        <img className='md:h-[30rem] lg:h-[25rem] sm:h-[35rem] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300 mb-10' src={location.state.image} alt={location.state.title}/>
        <div >
            
        <div className='text-5xl font-bold mb-10 '>{location.state.name}</div>
        <div className=' flex flex-col'>
            
            <div className=' text-purple-950 mb-10 ml-2 font-bold text-3xl '>{location.state.price}</div>
            <button className='border-purple-600 text-white mb-0 bottom-4  bg-purple-800 '
             onClick={() => {
                setCart([...cart, location.state]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, location.state])
                );
              
              }}>Add to Cart</button>
            </div>  
        </div>
    </div>
    </div>
  )
}

export default Viewmore
