import React from 'react'
import Navbar from './Navbar'
import Accordion from './Accardion'
import Cover from './Cover'

const Hero = () => {
  return (
    <div className=' w-full mt-0 mx-auto h-[100vh] flex flex-col' >
      <Navbar/>
      <Cover/>
      <Accordion/>
    </div>
  )
}

export default Hero