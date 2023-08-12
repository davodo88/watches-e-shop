import React from "react";


import Header from '@/app/components/header'
import About from '@/app/components/about'
import BestSellers from "@/app/components/bestSellers"



export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-y-8 justify-center items-center w-screen h-max bg-zinc-300">
        <Header />
        <About />
        <BestSellers />
      </main>
    </>
  );
}
