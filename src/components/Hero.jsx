import React from 'react'
import Cover from './Cover';
import Content from './Content';

const Hero = () => {
   return (
    <div className="flex-1  overflow-y-auto">
      <Cover/>
      <Content/>
    </div>
  );
}

export default Hero