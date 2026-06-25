import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPost() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [status, setStatus] = useState('lost');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('')
  const navigation = useNavigate()

  const getUserId = async () => {
    try {
        const data = await axios.post(
        'https://lost-and-found-1fv4.onrender.com/profile',
        { id: 1 },
        {
            headers: {
            "Content-Type": "multipart/form-data",
            Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
    )
        setUserId(data.data[0].id)

    } catch (e) {
        console.log(e)
    }
  }

  getUserId()

  const handleSubmit = async (e) => {
  e.preventDefault();

    const formData = new FormData()
    formData.append('user_id', userId)
    formData.append('title', title)
    formData.append('status', status)
    formData.append('description', description)
    formData.append('phone', phone),
    formData.append('postimg', image)
      try {
        let result = await axios.post('https://lost-and-found-1fv4.onrender.com/add/post', 
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )

    console.log(result.data);
    navigation(status === 'lost' ? '/lost' : '/found')

  } catch (e) {
    console.log(e);
  }
};

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };


  return (
    <div className="flex justify-center py-10 min-h-screen -mt-15 ">
      <form onSubmit={handleSubmit} className="bg-white w-full max-w-lg p-8  rounded-3xl shadow-xl flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-center">Хабарлама Салу</h1>

        <label htmlFor="image" className="border-2 border-dashed border-gray-400 h-60 rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden">
          {preview ? (
            <img src={preview} alt="Preview" className="w-full h-full object-cover"/>
          ) : (
            <span className="text-gray-500"> Сүрет Салу...</span>
          )}
        </label>

        <input id="image" type="file" accept="image/*" className="hidden" onChange={handleImage}/>

        <input type="text" placeholder="Заттың аты..." className="border rounded-xl p-3 outline-none"value={title} onChange={(e) => setTitle(e.target.value)}/>

        <select
          className="border rounded-xl p-3 outline-none" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>

        <textarea placeholder="Сипаттамасы..." rows="5" className="border rounded-xl p-3 h-20 resize-none outline-none" value={description}onChange={(e) => setDescription(e.target.value)}/>

        <input type="tel" placeholder="Телефон нөмеріңіз" className="border rounded-xl p-3 outline-none" value={phone} onChange={(e) => setPhone(e.target.value)}/>

        <button type="submit" className="bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 duration-200">Салу</button>
      </form>
    </div>
  );
}

export default AddPost;