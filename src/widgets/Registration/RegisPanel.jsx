import axios from 'axios'
import { Eye, EyeOff, ImageUp, Lock, Mail, Upload, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'

function RegisPanel() {

        const [fileName, setFileName] = useState(' Файл салу')
        const [errMes, setErrMes] = useState('')
        const [coverPassword, setCoverPassword] = useState(false)
        const [coverSecondPassword, setCoverSecondPassword] = useState(false)
        const navigate = useNavigate()
        
        const [name, setName] = useState('')
        const [surname, setSurname] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [secondPassword, setSecondPassword] = useState('')


        const showFirstPassword = () => {
            if (coverPassword) {
                setCoverPassword(false)
            } else {
                setCoverPassword(true)
            }

        }

        const showSecondPassword = () => {
            if (coverSecondPassword) {
                setCoverSecondPassword(false)
            } else {
                setCoverSecondPassword(true)
            }


        }

        const registration = async (e) => {
            e.preventDefault()

            if (!name || !surname || !email || !password) {
                return setErrMes('Барлық өрістерді толтырыңыз')
            } else if (!email.includes('@')) {
                return setErrMes('Электрондық пошта мекенжайы жарамсыз')
            } else if (password.length < 8) {
                return setErrMes('Құпия сөз кемінде 8 таңбадан тұруы керек')
            } else if (password !== secondPassword ) {
                return setErrMes('Құпия сөздер сәйкес келмейді')
            }

            try {
                let send = await axios.post('https://lost-and-found-1fv4.onrender.com/register', {
                    name: name,
                    surname: surname,
                    email: email,
                    password: password,
                })
                localStorage.setItem('token', send.data)

                localStorage.setItem('singed', JSON.stringify(true))
                navigate('/')
            } catch (e) {
                return setErrMes(e.response.data.message)
            }
        }


  return (
    <div className='flex justify-center'>
        <form className='flex flex-col mt-3 border-2 gap-2 border-black border-solid rounded-[10px] p-5 shadow-2xl '>
            <h1 className='text-3xl font-bold text-center '>Lost and Found қа қош келдініз</h1>

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col' >

                    <label>Аты-жөні</label>
                    <div className='flex gap-2'>
                    
                    <div className='relative w-full'>
                        <User className='absolute bottom-[10px] left-2' />
                        <input type="text" placeholder='Атыңыз...' onChange={(e) => setName(e.target.value)} className='pl-9 w-full border-2 rounded-2xl p-2 border-black border-solid' />
                    </div>
                    
                    <div className='relative w-full'>
                        <User className='absolute bottom-[10px] left-2 '/>
                        <input type='text' placeholder='Жөнініз...' onChange={(e) => setSurname(e.target.value)} className='pl-9 w-full border-2 rounded-2xl p-2 border-black border-solid' />
                    </div>

                    </div>
                </div>

                <div className='relative flex flex-col' >
                    <Mail className='absolute bottom-[10px] left-2' />
                    <label>Электрондық почта</label>
                    <input type="text" placeholder='Электронды почтаңыз...' onChange={(e) => setEmail(e.target.value)} className='pl-9 w-full border-2 rounded-2xl p-2 border-black border-solid' />
                </div>

                <div className=' relative flex flex-col' >
                    <Lock className='absolute bottom-[10px] left-2' />
                    <label>Құпия сөзіңіз</label>
                    <input type={coverPassword ? 'text' : 'password'} placeholder='Құпия сөз кемінде 8-ден көп болу керек...' onChange={(e) => setPassword(e.target.value)} className='pl-9 w-full border-2 rounded-2xl p-2 border-black border-solid' />

                    {coverPassword ? <Eye className='absolute bottom-[10px] right-2 cursor-pointer' onClick={showFirstPassword}/> : (<EyeOff className='absolute bottom-[10px] right-2 cursor-pointer' onClick={showFirstPassword}/>)}
                </div>

                <div className=' relative flex flex-col' >
                    <Lock className='absolute bottom-[10px] left-2' />
                    <label>Құпия сөзіді қайтадаң жазыныс</label>
                    <input type={coverSecondPassword ? 'text' : 'password'} placeholder='Қайтадан жанызыс...' onChange={(e) => setSecondPassword(e.target.value)} className='pl-9 w-full border-2 rounded-2xl p-2 border-black border-solid' />
                    
                    {coverSecondPassword ? <Eye className='absolute bottom-[10px] right-2 cursor-pointer' onClick={showSecondPassword}/> : (<EyeOff className='absolute bottom-[10px] right-2 cursor-pointer' onClick={showSecondPassword}/>)}
                </div>  
            </div>

                <p className='text-center' >Аккаунт бар, кіре аласыз <Link to={'/login'} className='text-blue-400'>логин</Link></p>
                <p className=' text-red-700 flex-none text-center '>{errMes}</p>
                <button className='flex justify-center cursor-pointer hover:scale-110 duration-150 ease-in mx-30 p-3 rounded-3xl bg-yellow-300' onClick={registration}>Тіркелу</button>

        </form>
    </div>
  )
}

export default RegisPanel