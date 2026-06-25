import React from 'react'
import { Link } from 'react-router-dom'

function Navs({text, id}) {
  return (
    <>

    <Link className='text-[17px] hover:scale-110 duration-300 ease-in' to={ id } >{text}</Link>
    
    </>
  )
}

export default Navs