import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-purple-500'>FoodiePal</h1>
                <p>Connect with us on socials and spread the love of food</p>
                <div className='justify-content flex md:w-[75%] my-6'>
                    <FaFacebookSquare  size={30} className='hover:cursor-pointer'/>
                    <FaInstagram size={30} className='hover:cursor-pointer'/>
                    <FaTwitterSquare size={30} className='hover:cursor-pointer'/>
                    <FaDribbbleSquare size={30} className='hover:cursor-pointer'/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Delhi</li>
                        <li className='py-2 text-sm'>Mumbai</li>
                        <li className='py-2 text-sm'>Ranchi</li>
                        <li className='py-2 text-sm'>Goa</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Agra</li>
                        <li className='py-2 text-sm'>Chennai</li>
                        <li className='py-2 text-sm'>Kolkata</li>
                        <li className='py-2 text-sm'>Ahmedabad</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Hyderabad</li>
                        <li className='py-2 text-sm'>Bangalore</li>
                        <li className='py-2 text-sm'>Pune</li>
                        <li className='py-2 text-sm'>Indore</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Lucknow</li>
                        <li className='py-2 text-sm'>Jaipur</li>
                        <li className='py-2 text-sm'>Patna</li>
                        <li className='py-2 text-sm'>Varanasi</li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
