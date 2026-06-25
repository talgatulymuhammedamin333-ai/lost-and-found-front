import React from 'react'

function Logo() {
  return (
    <div className='flex'>
        <div className='container flex items-center w-10'>
        <img className=' w-full h-full object-contain' src="/logo.svg" alt="" />
        </div>
        <h1 className='text-3xl font-bold'>Lost and Found</h1>
    </div>
  )
}

export default Logo