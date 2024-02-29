import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SignUp() {
  const [formData, setformData] =useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData(
      {
        ...formData,
        [e.target.id] : e.target.value,
      }
    );
    console.log(formData);
  };

  const handleSubmit = async(e) => {
    setLoading(true);
    setError(null);
    e.preventDefault();
    const res = await fetch('/api/auth/signup', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if(data.success === false) {
      setError(data.message);
      setLoading(false);
    }
    else {
      navigate('/sign-in');
    }
    setLoading(false);
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text'
          className = 'border rounded-lg p-3' 
          placeholder='Username' 
          id = 'username'
          onChange={handleChange} 
        />

        <input type='email'
          className = 'border rounded-lg p-3' 
          placeholder='Email' 
          id = 'email' 
          onChange={handleChange}
        />

        <input type='password'
          className = 'border rounded-lg p-3' 
          placeholder='Password' 
          id = 'password' 
          onChange={handleChange}
        />

        <button disabled={loading} className = 'bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-88 '>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
      {error && <p className='text-red-500'>{error}</p>}
      
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
