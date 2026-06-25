import axios from 'axios'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [errMes, setErrMes] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [coverPassword, setCoverPassword] = useState(false)
    const navigate = useNavigate()

    const sent = async (e) => {
        e.preventDefault() 
        
        if (!email || !password) {
            return setErrMes('All inputs must be refilled')
        }

        

        try {
            const result = await axios.post('https://lost-and-found-1fv4.onrender.com/login', {
                email: email,
                password: password
            })
            localStorage.setItem('token', result.data)
            localStorage.setItem('singed', JSON.stringify(true))
            navigate('/')
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    const showPassword = () => {
        if (coverPassword) {
            setCoverPassword(false)
        } else {
            setCoverPassword(true)
        }
    }

  return (
     <div className='flex justify-center'>
        <form className='flex flex-col mt-[70px] border-2 gap-2 border-black border-solid rounded-[10px] p-5 shadow-2xl'>
            <h1 className='text-3xl font-bold text-center w-100 '>Lost and Found оралғанынызға қуаныштымыз</h1>

                <div className='relative flex flex-col' >
                    <Mail className='absolute bottom-[10px] left-2' />
                    <label>Электрондық почта</label>
                    <input type="text" placeholder='Электронды почтаңыз...' onChange={(e) => setEmail(e.target.value)} className='pl-9 w-full border-2 rounded-2xl p-2 border-black border-solid' />
                </div>

                <div className=' relative flex flex-col' >
                    <Lock className='absolute bottom-[10px] left-2' />
                    <label>Құпия сөзіңіз</label>
                    <input type={coverPassword ? 'text' : 'password'} placeholder='Құпия сөзіңіз...' onChange={(e) => setPassword(e.target.value)} className='pl-9 w-full border-2 rounded-2xl p-2 border-black border-solid' />

                    {coverPassword ? <Eye className='absolute bottom-[10px] right-2 cursor-pointer' onClick={showPassword}/> : <EyeOff className='absolute bottom-[10px] right-2 cursor-pointer' onClick={showPassword}/>}
                </div>
                <p className='text-center' >Аккаунт жоқпа? тіркеле аласыз <Link to={'/registration'} className='text-blue-400'>регистарация</Link></p>
                <p className=' text-red-700 flex-none text-center '></p>
                <button onClick={sent} className='flex justify-center cursor-pointer hover:scale-110 duration-150 ease-in mx-30 p-3 rounded-3xl bg-yellow-300'>Кіру</button>


        </form>
    </div>
  )
}

export default Login