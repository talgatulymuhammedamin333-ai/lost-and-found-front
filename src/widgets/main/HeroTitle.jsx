import { Heart, Search, ThumbsUp, User } from 'lucide-react'
import React from 'react'

function HeroTitle() {
  return (
    <div className='flex gap-29 mx-15 mt-40'>
        <div className='flex flex-col relative items-start gap-2 w-5/10'>

          <div className='absolute right-[-50px] top-40 rotate-10 bg-emerald-500 shadow-2xl shadow-green-500 p-2 rounded-[5px]'>
            <Search color='white' size={30} />
          </div>
          <div className='absolute left-55 bottom-10 rotate-350 bg-yellow-400 shadow-2xl shadow-yellow-500 p-2 rounded-[5px]' >
            <User color='white' size={30}/>
          </div>
          <div className='absolute right-0 bottom-[-50px] rotate-5 bg-orange-400 shadow-2xl shadow-yellow-500 p-2 rounded-[5px]'>
            <ThumbsUp color='white' size={30}/>
          </div>


            <h1 className='text-5xl font-bold'>Сөмкеңізді, күртеңізді немесе басқа затыңызды <span className='text-blue-300'>жоғалттыңыз ба?</span> Табылған заттар тізімін қарап шығыңыз!</h1>
            <p className='text-[18px] font-light'>Жоғалған заттарды іздеудің және табылған заттарды иесіне қайтарудың оңай жолы.</p>
            <button className='bg-black text-[20px] p-3 cursor-pointer rounded-[10px] text-white'>Толықырақ білу</button>
        </div>
        <div>
            <div className='relative'><img className='absolute bottom-[-30px] rotate-350 w-40' src="firework.png" alt="" /></div>
            <div className=' relative bg-amber-300 w-130 h-60 right-5 mt-50 rounded-[10px] '><img className='absolute w-130  bottom-[-37px] ' src="kid.png" alt="" /></div>
        </div>
    </div>
  )
}

export default HeroTitle