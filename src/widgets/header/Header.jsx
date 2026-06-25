import React, { useEffect } from 'react'
import Logo from './Logo'
import Navs from './Navs'
import Profile from './Profile'

function Header() {

  return (
    <header className='w-full'>
      <div className='flex justify-between items-center shadow-md p-5 mb-18 w-full bg-[#fefae0] '>
              <Logo/>

              <nav className=' flex gap-6 items-center ml-2'>
                  <Navs id={'/'} text={'Басты бет'} />
                  <Navs id={'/lost'} text={'Жоғалған заттар'} />
                  <Navs id={'/found'} text={'Табылған заттар'} />
                  <Navs id={'/addPost'}  text={'Хабарлама қосу'} />
              </nav>


              <Profile/>
      </div>
    </header>
  )
}

export default Header