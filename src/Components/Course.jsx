import React from 'react'
import Cards from './bookcard/BookCards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

export const Course = () => {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-'>
    <div className='mt-28 items-center justify-center  text-center'>
        <h1 className='text-2xl  md:text-4xl '> We're delighted to have you <span className='text-pink-500'>Here!:</span></h1>
        <p className='mt-12'>Our bookstore is a haven for readers, offering a diverse selection of books, from timeless classics to modern bestsellers. We aim to inspire and connect book lovers, providing a warm space to discover your next great read

        </p>
      <Link to="/">
      <button className='mt-6 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300 '>Back

</button>
      </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
       
          {list.map((items) => (
            <Cards items={items} key={items.id} />
          ))}
        
    </div>

   </div>
   </>
  )
}
