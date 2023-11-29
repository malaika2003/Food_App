import React,{useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Featured = () => {
    const sliders=[
        {
            url: 'https://res.cloudinary.com/dgv0zyqbt/image/upload/v1699900791/global-fi_ssef5n.webp'
        },
        {
            url: 'https://res.cloudinary.com/dgv0zyqbt/image/upload/v1699900791/mutton-hyderabadi-biryani-01_ttepfb.jpg'
        },
        {
            url: 'https://res.cloudinary.com/dgv0zyqbt/image/upload/v1699368406/samples/food/pot-mussels.jpg'
        },
        {  
            url: 'https://res.cloudinary.com/dgv0zyqbt/image/upload/v1699368430/samples/breakfast.jpg'
        },
        {
            url: 'https://res.cloudinary.com/dgv0zyqbt/image/upload/v1699368435/samples/dessert-on-a-plate.jpg'
        },
        {
           url: 'https://res.cloudinary.com/dgv0zyqbt/image/upload/v1699368438/cld-sample-4.jpg'
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(2)

    const prevSlider = () => {
      const isFirstSlide=currentIndex===0
      const newIndex=isFirstSlide?sliders.length-1:currentIndex-1
      setCurrentIndex(newIndex)

    }
    const nextSlider = () => {
      const isLastSlide=currentIndex===sliders.length-1
      const newIndex=isLastSlide?0:currentIndex+1
      setCurrentIndex(newIndex)

    }
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage: `url(${sliders[currentIndex].url })`}}>
         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-purple-800 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlider}/>
         </div>
         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-purple-800 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlider}/>
         </div> 

      </div>
      
    </div>
  )
}

export default Featured
