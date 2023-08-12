import Image from 'next/image'
import React from 'react'



import watchBG from '@/public/images/watchBlackGold.jpg'
import watchBeach from '@/public/images/watchBeach.jpg'

const About = () => {
  return (
    <div>
      <h1 className='text-left ml-[10%] text-lg'>Wrist Wacht</h1>
      <section id='about'
        className='w-full flex flex-col md:flex-row 
        h-max md:h-[450px] p-10 gap-14'
      >
        <div className='w-full h-full md:w-1/2 flex justify-center items-start flex-col md:flex-row gap-x-4 '>
          <div className='flex w-full h-full md:w-4/5'>
            <Image src={watchBG} width={'auto'} height={'auto'} alt='watch premium'/>
          </div>
          <div className='w-full  md:w-2/5 md:h-2/5 mt-8'>
            <h1 className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium officiis eius pariatur aperiam possimus fugit tenetur itaque, eum blanditiis nemo, harum aut quibusdam a animi quis, error quidem vitae. Soluta.</h1>
          </div>
        </div>
        <div className='h-full w-full md:w-1/2 flex flex-col md:flex-row items-end gap-x-4 px-2'>
          <div className='flex w-full  h-3/5 md:w-3/5'>
            <Image src={watchBeach} width={'auto'} height={'auto'} alt='premium watch 2'/>
          </div>
          <div className='w-full h-max md:w-2/5  mb-8'>
            <h1 className='text-xs'>Lorem ipsum, dolor sit amet   consectetur adipisicing elit. In, ullam eius.   Necessitatibus alias minima nulla culpa non animi deserunt soluta impedit dolorem odit iusto, sequi optio quos.
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About