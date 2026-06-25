import React from 'react'

function NotFoundMain() {
  return (
    <div className=' flex flex-col  items-center m-0 justify-center mt-30 '>
        <h1 className=' text-[150px] text-gray-500 ' >404</h1>
        <h1 className=' mb-10 font-medium text-[18px]'>Ой, бұл бет жоғалып кеткен сияқты (～￣▽￣)～ </h1>
        <button className=' bg-yellow-400 cursor-pointer hover:scale-110 duration-200 ease-in rounded-4xl text-2xl p-3 text-white '>Басты бетке көшу</button>
    </div>
  )
}

export default NotFoundMain