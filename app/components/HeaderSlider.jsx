"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useWindowSize from '@/hooks/useWindowSize'



import watch1 from '@/public/images/watch-header.jpg'
import watch2 from '@/public/images/watch2.jpg'
import watch3 from '@/public/images/watch3.jpg'
import watch4 from '@/public/images/watch4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/bundle'
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const watches = [
  { clocks: watch1, },
  { clocks: watch2, },
  { clocks: watch3, },
  { clocks: watch4, },
]


const HeaderSlider = () => {


  const [isMounted, setIsMounted] = useState(false)
  const { width } = useWindowSize()
  const date = Date.now()
  console.log(date)


  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return null
  }

  return (
    <>
      <div className='bg-zinc-300 w-full h-[450px]'>
        <Swiper
          spaceBetween={0}
          slidesPerView={
            width < 900 ? 1 : 2
          }
          onSlideChange={() => {
            console.log('slide change')
          }}
          loop='true'
          onSwiper={(swiper) => console.log(swiper)}
          navigation={
            width < 600 ? false : true
          }
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className='h-full'
        >
          {watches.map((clock, index) => {
            return (
              <SwiperSlide key={index} className='w-full h-full'>
                <div className='w-full h-full p-10 group'>
                  <Image src={clock.clocks}
                    width={'auto'}
                    height={'auto'}
                    alt='Watches'
                    className='h-3/4 group-hover:brightness-105'
                  />
                  <div className='flex w-full'>
                    <div className='w-1/2 flex flex-col ml-0'>
                      <p className='text-sm font-bold'>Name Watch import</p>
                      <p className='text-xs font'>Name Watch import</p>
                      <p className='text-xs font'>{`Cod: ${date * (index + 100)}`}</p>
                    </div>
                    <p className='flex w-1/2 justify-end'>
                      Price $
                    </p>
                  </div>
                  <button className='bg-blue-500 w-full group-hover:bg-blue-300'>
                    Buy It Now
                  </button>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default HeaderSlider