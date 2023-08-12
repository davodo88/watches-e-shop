"use client"
import React, { useState } from 'react'
import { classNames } from '@/utils/utils'
import NavBar from './NavBar'



const Header = () => {

  // const [menu, setMenu] = useState(false)

  // const handleMenu = () => {
  //   setMenu(!menu)
  // }

  return (
    <>
      <section className={classNames('w-full h-screen md:h-[500px] bg-watch-header bg-cover bg-center md:bg-center flex justify-center items-center text-white relative transition-all ',)}>
        {/* <NavBar handleMenu={handleMenu} menu={menu} /> */}
        <div className=" md:left-12 flex flex-col md:w-2/5 h-1/2 items-center justify-around">
          <h1 className="flex w-2/3 p-4 font-semibold tracking-widest text-xl text-center">
            The most unique watch  brands will make you special
          </h1>
          <div className="flex flex-col w-2/3 justify-center items-center md:flex-row gap-8">
            <button className="bg-blue-500 w-full md:w-1/2  py-2 text-sm ">
              Shopping
            </button>
            <button className="w-full md:w-1/2  py-2 text-sm  border-[1px] border-zinc-300">
              Consult
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header