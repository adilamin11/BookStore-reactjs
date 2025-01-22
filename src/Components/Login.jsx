// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form"

// function Login() {
  
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => console.log(data)
//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//        onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
//     </form>
//     <h3 className="font-bold text-lg">Hello</h3>
//   <div className='mt-4 space-y-2'> 
//     <span>Email</span>
//     <br/>
//     <input type="email" placeholder='Enter your email' className='w-78 px-3 py-1 border-rounded-md outline-none' 
//     {...register("email", { required: true })}
//     />
//     {errors.email && <span>This field is required</span>}

//   </div>
//   <div className='mt-4 space-y-2'> 
//     <span>Password</span>
//     <br/>
//     <input type="password" placeholder='Enter your password' className='w-78 px-3 py-1 border-rounded-md outline-none'
//     {...register("password", { required: true })}
//     />
//     {errors.password && <span>This field is required</span>}

//   </div>
//   <div className='flex justify-around mt-4'>
//     <button className='bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200'
    
//     >Login</button>
//   <p>Not registered ? <Link  to="/Signup" className='underline text-blue-500 cursor-pointer'> Signup</Link>{" "}</p>
//   </div>
//   </div>
// </dialog>
//     </div>
//   )
// }

// export default Login



import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
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

  // Open modal for testing purposes
  const openModal = () => {
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div>
      {/* <button onClick={openModal} className="btn">
        Open Login Modal
      </button> */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close modal button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Hello</h3>

            <div className="mt-4 space-y-2">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1 border-rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-1 border-rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/Signup" className="underline text-blue-500">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
