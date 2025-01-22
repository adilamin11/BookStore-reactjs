
import React from 'react'

function BookCards({items}) {
    // console.log(items);
    
  return (
    <>
    
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img className='w-100 h-100'
      src={items.image}
      alt="img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {items.name}
      <div className="badge badge-secondary">{items.category}</div>
    </h2>
    <p>{items.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline ">${items.price}</div>
      <div className=" cursor-pointer px-2 py-1 rounded-full hover:bg-pink-400 duration-200  hover:text-white px-2 py-1">Buynow</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default BookCards
