  import axios from 'axios'
  import { Edit } from 'lucide-react'
  import React, { useEffect, useState } from 'react'

  function MyProfile() {

    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [about, setAbout] = useState('Мен туралы...')
    const [user, setUser] = useState()
    const [edit, setEdit] = useState(false)
    const [bgColor, setBgColor] = useState('#bfbfbf')
    const [aboutEdit, setAboutEdit] = useState('')
    const [userId, setUserId] = useState()

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    setPreview(URL.createObjectURL(file));
  };


      const myProfile = async () => {
      try {

        const result = await axios.post('https://lost-and-found-1fv4.onrender.com/profile',{id: 1}, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        setImg(result.data[0].profileimg)
        setName(result.data[0].name)
        setSurname(result.data[0].surname)
        setEmail(result.data[0].email)
        setBgColor(result.data[0].bgc)
        setAboutEdit(result.data[0].about)
        setUserId(result.data[0].id)

        console.log(aboutEdit)

        
      } catch(e) {
        console.log(e)
      }
    }
    useEffect(() => {
      myProfile()
    }, [])

    const updateEdit = async () => {
      const formData = new FormData();
      formData.append('bgc', bgColor);
      formData.append('about', aboutEdit);
      formData.append('id', userId)
      formData.append('profileimg', image);

      setEdit(false)
      try {
        let result = await axios.put('https://lost-and-found-1fv4.onrender.com/updateProfile', 
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        myProfile()
      } catch (error) {
        console.log(error.response.data.message)
      }
    }



    const changeEdit = () => {
      if (edit) {
        setEdit(false)
      } else {
        setEdit(true)
      }
    }

    const cancel = () => {
      setEdit(false)
      setPreview(null)
      myProfile()
    }


    return (
      <div className=" flex justify-center items-center pb-30">
        <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl overflow-hidden">


          <div className="relative h-48 duration-300 ease-in-out " style={{ backgroundColor: bgColor }}>
            <label htmlFor="color"><Edit className={edit ? 'bg-white absolute right-2 top-2 rounded-4xl p-1 cursor-pointer ' : 'hidden bg-white absolute right-2 top-2 rounded-4xl p-1 cursor-pointer'} size={30}/></label>
            <input type="color" id='color' onChange={e => setBgColor(e.target.value)}  className=' absolute right-[-12px] top-5 opacity-0 pointer-events-none' />
          </div>


          <div className="relative flex justify-center">
            <label className='absolute' htmlFor="avatar"><Edit className={edit ? 'bg-gray-300 absolute left-10 bottom-6 rounded-4xl p-1 cursor-pointer ' : 'hidden bg-white absolute right-2 top-2 rounded-4xl p-1 cursor-pointer'} size={30}/></label>
            <input id='avatar' accept='image/*' onChange={handleImageChange} className='hidden' type="file" />
            {edit ? <img src={preview || `https://lost-and-found-1fv4.onrender.com/uploads/${img}`} alt={preview} className="w-32 h-32 rounded-full border-4 border-gray-500 -mt-16 object-cover"/> : <img src={`https://lost-and-found-1fv4.onrender.com/uploads/${img}`} alt="" className="w-32 h-32 rounded-full border-4 border-gray-500 -mt-16 object-cover"/>}
          </div>

          <div className="text-center p-6">
            <h1 className="text-3xl font-bold">{name + " " + surname}</h1>
            <p className="text-gray-500">{email}</p>

            <div className="flex justify-center gap-4 mt-6">
              {edit ? (
                <>
                  <button onClick={cancel} className='w-30 flex justify-center rounded-xl cursor-pointer bg-red-500 hover:bg-red-600 duration-200 ease in py-2 px-6'>Отмена</button> 
                  <button onClick={updateEdit} className='w-30 flex justify-center rounded-xl cursor-pointer hover:bg-blue-600 duration-200 ease-in bg-blue-500 py-2 px-6'>Потвердить</button> 
                </>

              ) : (
              <button onClick={changeEdit} className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-xl duration-200 ease-in">
                Профиль өзгерту
              </button>
              )}
            </div>
          </div>

          <div className=" border-t p-6">
            <div className='relative w-fit'>
              <h2 className=" text-xl font-semibold mb-3 flex items-center">Өзі туралы</h2>
              <label htmlFor="about"><Edit className={edit ? ' absolute top-0 right-[-25px] top-1 rounded-4xl p-1 cursor-pointer ' : 'hidden bg-white absolute top-2 rounded-4xl p-1 cursor-pointer'} size={25}/></label>
            </div>
            <textarea name="" id="about" value={aboutEdit} onChange={e => setAboutEdit(e.target.value)} className='shadow-2xl duration-300 ease-in-out p-2 rounded-2xl text-gray-500 bg-gray-200 w-full outline-0 resize-none cursor-default pointer-events-none'  placeholder='Өзің туралы жаз...'  />
          </div>

        </div>
      </div>
    )
  }

  export default MyProfile