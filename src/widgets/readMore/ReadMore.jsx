import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ReadMore() {
  const { id } = useParams()

  const [post, setPost] = useState([])

  useEffect(() => {
    getPost()
  }, [])

  const getPost = async () => {
    try {
      const result = await axios.get(`https://lost-and-found-1fv4.onrender.com/post/${id}`)
      setPost(result.data[0])
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }

  console.log(post)

  return (
    <div className="flex justify-center py-10 px-4min-h-screen">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl overflow-hidden">

        <img src={`https://lost-and-found-1fv4.onrender.com/uploads/${post.image_url}`} alt={post.title} className="w-full h-96 object-cover" />

        <div className="p-8">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <h1 className="text-4xl font-bold text-gray-800"> {post.title} </h1>

            <span className={ post.status === 'lost' ? 'bg-red-500 text-white px-5 py-2 rounded-full font-semibold w-fit': 'bg-green-500 text-white px-5 py-2 rounded-full font-semibold w-fit'}> {post.status} </span> </div>

          <div className="flex items-center gap-4 border-b pb-6 mb-8"> <img src={`https://lost-and-found-1fv4.onrender.com/uploads/${post.profileimg}`} alt="" className="w-16 h-16 rounded-full object-cover border"/> <div>
              <h2 className="font-bold text-xl"> {post.name} {post.surname} </h2>

              <p className="text-gray-500"> {post.email} </p></div> </div>

          <div className="mb-8"><h2 className="text-2xl font-bold mb-3"> Сипаттама </h2>

            <p className="text-gray-600 leading-relaxed"> {post.description} </p> </div>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-gray-100 rounded-2xl p-5"><p className="text-gray-500 text-sm">Байланыс нөмірі</p>

              <p className="font-bold text-lg mt-1">{post.phone}</p></div>

            <div className="bg-gray-100 rounded-2xl p-5"><p className="text-gray-500 text-sm"> Күйі </p>

              <p className={ post.status === 'lost' ? 'font-bold text-lg mt-1 text-red-500' : 'font-bold text-lg mt-1 text-green-500' } >{post.status} </p> </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <p className="text-gray-500 text-sm">Салынған күні</p>
              <p className="font-bold text-lg mt-1">{new Date(post.created_at).toLocaleDateString()}</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ReadMore