"use client"


import Link from 'next/link'
import React, { useState } from 'react'
import { classNames } from '@/utils/utils'
import useWindowSize from '@/hooks/useWindowSize'


const nav = [
  { Title: 'Home', target: '/' },
  { Title: 'About', target: '#about' },
  { Title: 'Gallery', target: '/' },
  { Title: 'Sale', target: '/' },
  { Title: 'Bestsellers', target: '#bestSellers' },
  { Title: 'Contact us', target: '/' },
]



const NavBar = ({ menu, handleMenu }) => {

  const { width } = useWindowSize()

  return (
    <>
      <div className='absolute top-0 right-0 w-full'>
        <ul className={classNames('flex items-center justify-center gap-8 mt-8 py-4',
          width > 600 ? 'flex' : 'hidden')}>
          {nav.map((navi, index) => {
            return (
              <li key={index} className='text-white no-underline hover:decoration-blue-500 hover:underline hover:text-blue-500 hover:scale-110'>
                <Link href={navi.target}>
                  {navi.Title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={classNames('transition-all duration-500',
        menu ? '' : '',
        width > 600 ? 'hidden' : 'flex'
      )}>
        <ul
          className={classNames('transition-colors duration-500',
            menu ? 'opacity-70 ' : 'opacity-0')}
        >
          {nav.map((navi, index) => {
            return (
              <li key={index}
                className={classNames('transition-all duration-700 hover:scale-105',
                  menu ? 'ml-8 mt-6 ' : 'ml-0')}>
                <button onClick={handleMenu}>
                  <Link href={navi.target}>
                    {navi.Title}
                  </Link>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default NavBar

