import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div>
            <button  className="border-2 border-gray-300 py-1 px-4  mt-[200px] rounded-md"
            onClick={() => navigation(-1)}
            >
                back
            </button>
            <h2 className='font-bold text-3xl'>
                Blogs Tagged <span className='text-blue-600 underline'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  )
}

export default TagPage
