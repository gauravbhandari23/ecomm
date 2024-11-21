import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et totam fugiat quasi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur excepturi, nam doloremque voluptate neque eligendi nihil, aliquam suscipit omnis mollitia?</p>
            
          </div>
        </div>

      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default About
