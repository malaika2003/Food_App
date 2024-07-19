import React, {useState} from 'react'
import { mealData } from '../data/data'
import {ArrowSmRightIcon} from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";

const Meal = () => {
  const Navigate= useNavigate();
  const [foods, setFoods] = useState(mealData)
  const fillterCat=(category)=>{
    setFoods(
      mealData.filter((item)=>{
        return item.category===category; 
      })
    )
  }

const HandleClick = (item) =>{
     Navigate('/viewmore', { state: item })
    
}
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
     <h1 className='text-purple-700 font-bold text-2xl text-center py-2'>Meals</h1> 
     <div className='flex flex-col lg:flex-row justify-center'>
      <div className='flex justify-center md:justify-center'>
        <button onClick={()=>setFoods(mealData)} className='m-1 border-purple-700 text-white hover:bg-white bg-purple-700 hover:text-purple-700 hover:border-purple-700'>All</button>
        <button onClick={()=>fillterCat("pizza")} className='m-1 border-purple-700 text-white hover:bg-white bg-purple-700 hover:text-purple-700 hover:border-purple-700'>Pizza</button>
        <button onClick={()=>fillterCat("chicken")} className='m-1 border-purple-700 text-white hover:bg-white bg-purple-700 hover:text-purple-700 hover:border-purple-700'>Chicken</button>
        <button onClick={()=>fillterCat("salad")} className='m-1 border-purple-700 text-white hover:bg-white bg-purple-700 hover:text-purple-700 hover:border-purple-700'>Salad</button>

      </div>

     </div>
     <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
        {
            foods.map((item)=>{
                return (
                <div key={item.id} className='border-none hover:scale-105 duration-300 cursor-pointer'>
                   <img src={item.image} alt={item.name} className='object-cover w-full h-[200px] rounded-lg' />
                   <div className='flex justify-between py-2 px-2'>
                    <p className='font-bold'>{item.name}</p>
                    <p className='bg-purple-700 h-18 w-18 rounded-full text-white -mt-10 py-4 px-2 border-8 font-semibold'>{item.price}</p>
                   </div>

                   <div className='pl-2 py-4 -mt-7'>
                       <p className='flex items-center text-purple-800 font-semibold' onClick={async ()=> await HandleClick(item)}> View More <ArrowSmRightIcon className='w-5 ml-2'/></p>
                   </div>
                </div>
                )
            })
        }
     </div>
    </div>
  )
}

export default Meal
