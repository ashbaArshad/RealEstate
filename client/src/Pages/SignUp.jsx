import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form className='flex flex-col gap-4'>
        <input type='text'
          className = 'border rounded-lg p-3' 
          placeholder='Username' 
          id = 'username' 
        />

        <input type='email'
          className = 'border rounded-lg p-3' 
          placeholder='Email' 
          id = 'email' 
        />

        <input type='password'
          className = 'border rounded-lg p-3' 
          placeholder='Password' 
          id = 'password' 
        />

        <button className = 'bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-88 '>
          Sign Up
        </button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
      
    </div>
  )
  {/* 
          text-3xl : font size
          text-center : to center
          my-7 : to add space up and down
          flex : to get them in them same line
          flex-col : flex direction
          gap-4 : to add space between them
          mx-auto : to center elements 
          mt-5 : margin top
  */}
}
