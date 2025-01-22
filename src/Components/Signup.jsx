import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Login from './Login'
function Signup() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      // Close the modal after successful submission
      document.getElementById("my_modal_3").close();
    };
  return (
    <div className='flex h-screen items-center justify-center '>
       <div  className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'> 
    <span>UserName</span>
    <br/>
    <input type="text" placeholder='Enter your username' className='w-78 px-3 py-1 border-rounded-md outline-none'
     {...register("username", { required: "username is required" })}
    />
    <br/>
     {errors.username && (
                <span className="text-sm text-red-500">{errors.username.message}</span>
              )}
  </div>
  <div className='mt-4 space-y-2'> 
    <span>Email</span>
    <br/>
    <input type="email" placeholder='Enter your email' className='w-78 px-3 py-1 border-rounded-md outline-none'
     {...register("email", { required: "Email is required" })}
    />
     <br/>
     {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
  </div>
  <div className='mt-4 space-y-2'> 
    <span>Password</span>
    <br/>
    <input type="password" placeholder='Enter your password' className='w-78 px-3 py-1 border-rounded-md outline-none'
       {...register("password", { required: "password is required" })}
    />
     <br/>
    {errors.password && (
                <span className="text-sm text-red-500">{errors.password.message}</span>
              )}
  </div>
  <div className='flex justify-around mt-4 gap-8'>
    <button className='bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200'>Signup</button>
  <p className='text-xl'>Have Account ? <button   className='underline text-blue-500 cursor-pointer 'onClick={()=>{
     document.getElementById("my_modal_3").showModal()
  }}> Login</button><Login/></p>
  </div>
  </form>
  </div>
</div>
    </div>
  )
}

export default Signup
