import { LogOut, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Registration from '../../pages/Registration'
import LoginPage from '../../pages/LoginPage'
import RegisPanel from '../Registration/RegisPanel'
import axios from 'axios'

function Profile() {

  const [img, setImg] = useState('')
  const [showConfirm, setShowConfirm] = useState(false)
  const [singed, setSinger] = useState(JSON.parse(localStorage.getItem('singed'))) 
  const location = useLocation()
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  
  
  const getUser = async () => {
    try {
      
      const data = await axios.post('https://lost-and-found-2-i4ut.onrender.com/profile',{id: 1}, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      if (data)
        
        setImg(data.data[0].profileimg)
        localStorage.setItem('singed', JSON.stringify(true))
        
      } catch(e) {
        localStorage.setItem('singed', JSON.stringify(false))
        if (e.response?.status === 403) {
          localStorage.removeItem('token  ')
        }
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  
  const logOut = () => {
    localStorage.clear()
    navigate('/')
  }


  return (
    <>
    { location.pathname === '/profile' ? (
    <button onClick={() => setShowConfirm(true)} className='ml-39 mr-3 cursor-pointer '><LogOut size={25} color='red'/></button>
    ) : (
    singed ? (
    <Link to={'/profile'} className=' border-2 cursor-pointer border-gray-500 border-solid rounded-full w-10 h-10 ml-41'>
      <img className=' w-full h-full rounded-full' src={`https://lost-and-found-2-i4ut.onrender.com/uploads/${img}`} alt="" />
    </Link>
    ) : (
      <div className='flex gap-2 -ml-9'>
          <Link to={'/registration'} className=' bg-green-400 p-2 rounded-3xl w-30 cursor-pointer hover:scale-105 duration-300 ease-linear'>Регистарация</Link>
          <Link to={'/login'} className=' bg-blue-400 p-2 rounded-3xl w-30 cursor-pointer hover:scale-105 duration-300 ease-linear text-center' >Логин</Link>
      </div>
    )
    ) }
    {showConfirm && (
       <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-gray-200 rounded-3xl p-6 w-[350px] shadow-2xl">

      <h2 className="text-2xl font-bold text-center mb-3">Растау</h2>

      <p className="text-gray-500 text-center mb-6">
        Аккаунттан шыққыңыз келетініне сенімдісіз бе?</p>

      <div className="flex gap-3">
        <button onClick={() => setShowConfirm(false)} className="flex-1 py-2 rounded-xl bg-blue-400 text-white cursor-pointer hover:bg-blue-500 duration-300 ease-in-out ">Болдырмау</button>

        <button onClick={logOut} className="flex-1 py-2 rounded-xl cursor-pointer bg-red-500 text-white hover:bg-red-700 duration-300 ease-in-out">Шығу</button>
      </div>

    </div>
  </div>
    )}
    </>
  );
}


export default Profile