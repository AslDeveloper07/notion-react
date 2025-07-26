import React from 'react'
import Navbar from './Navbar'
import Accordion from './Accardion'
import Cover from './Cover'

const Hero = () => {
  return (
    <div className=' w-full m-auto h-[729px]'>
      <Navbar/>
      <Cover/>
      <Accordion/>
    </div>
  )
}

export default Hero