import axios from 'axios';
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Found() {


    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [button, setButton] = useState(false)

    const filteredUsers = posts.filter(user => user.title.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
    getPosts();
    }, []);

const getPosts = async () => {
    try {
        const result = await axios.get(
            'https://lost-and-found-2-i4ut.onrender.com/posts/found'
        );
        console.log(result)
        setPosts(result.data)
    } catch (e) {
        console.log(e);
    }
};

console.log(posts)



  return (
    <div className='mt-20'>
        <h1 className='text-center text-5xl font-bold'>Табылған заттар</h1>
        <div className="flex gap-3 border-b mt-15 border-black pb-8 mb-6">
            <input onChange={(e) => setSearch(e.target.value)} type="text" onch placeholder="Посттарды іздеу..." className="flex-1 ml-5 p-3 bg-gray-100 border rounded-xl outline-none"/>
            <button className="px-5 mr-5 py-3 rounded-xl bg-orange-300 flex items-center gap-2"><Search/> Іздеу</button>
        </div>
        <div className='grid grid-cols-4 gap-15 mx-10'>

            {filteredUsers.map((post) => (
            <div key={post.id} className="bg-green-100 w-72 h-full rounded-3xl overflow-hidden shadow-lg shadow-2xl duration-300">

            <div className="relative">
                <img className="w-full h-52 object-cover" src={`https://lost-and-found-2-i4ut.onrender.com/uploads/${post.image_url}`}  alt=""/>
                    <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{post.status}</span>
                    </div>
                <div className="p-4">

                    <h1 className="text-2xl font-bold text-gray-800">{post.title}</h1>
                    <p className="text-gray-500 mt-2">{post.description}</p>

                    <div className="flex justify-between items-center mt-4"><span className="text-sm text-gray-400">{new Date(post.created_at).toLocaleDateString()}</span>
                    <button onClick={() => navigate(`/post/${post.id}`)} className="bg-orange-400 hover:bg-orange-500 text-white px-4 cursor-pointer hover:scale-110 py-2 rounded-xl duration-200">Толығырақ</button>
                    </div>
                </div>

                </div>
            ))}

            </div>
        </div>

        )
}

export default Found