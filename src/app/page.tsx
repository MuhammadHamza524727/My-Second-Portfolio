"use client" 
import "aos/dist/aos.css"
import HomePage from '@/components/HomePage'
import React, { useEffect } from 'react'
import AOS from "aos" 





const Page = () => {
  useEffect (() => {

AOS.init({
easing:"ease-out-back",
duration:1200,
delay:100,
mirror: true,
anchorPlacement:"bottom-bottom",
offset:160,

});
AOS.refresh()
},[]);


  return (
    <div>
      <HomePage/>
    </div>
  )
}

export default Page
