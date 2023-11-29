import React from 'react'
import {topPicks} from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks = () => {
  return (
    <>
      <h1 className='text-purple-700 font-bold text-2xl text-center py-2'>Top Picks</h1>
      <div className='lg:flex max-w[1520px] m-auto py-2 px-2'>
        <Splide options={{perPage: 4, gap:'1rem', drag:'free', type: 'loop', autoplay: true}}>
        {
            topPicks.map((item)=>{
                return (
                    <SplideSlide key={item.id}>
                    <div className='rounded-3xl relative'>
                        <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                            <p className='px-4 py-2 font-bold'>{item.title}</p>
                            
                            <button className='border-white text-white absolute bottom-4 bg-purple-800 ml-2'>Add to Cart</button>
                            <p className=' text-white text-end mr-10 mt-[115px]'>{item.price}</p>
                        </div>
                        <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300' src={item.img} alt={item.title}/>
                    </div>
                    </SplideSlide>

                )
            })
        }
        </Splide>
      </div>
    </>
  )
}

export default TopPicks
