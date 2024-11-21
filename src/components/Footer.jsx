import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className='ml-20'>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur corrupti rem quibusdam?</p>
            </div>
            <div className='ml-44'>
                <p className='text-xl font-medium mb-5' > Get in touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>7676765665</li>
                    <li>contact@acb.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'> Copyright 2024</p>
        </div>
    </div>
  )
}

export default Footer
