import React from 'react'
import { NavButtons } from './NavButtons'

export const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen bg-green-400 w-32'>
      <div className='flex flex-col'>
        {/* <div onClick={close}>X</div> */}
        <NavButtons title="Overview"/>
        <NavButtons title="Financial"/>
        <NavButtons title="Environmental"/>
      </div>
    </div>
  )
}

const close = () => {
  
  
  
}