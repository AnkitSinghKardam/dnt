import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <h1 className='flex'>Header</h1>
      <Outlet />  
      <h1 className='flex'>Footer</h1>    
    </>
  )
}

export default HomeLayout