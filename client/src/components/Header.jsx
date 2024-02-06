import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header  className='bg-slate-200 shadow-md'>
        
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to = '/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '> 
                    <span className='text-slate-500'>House</span>
                    <span className='text-slate-700'>Haven</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input 
                    type='text' 
                    placeholder="Search... " 
                    className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-600'> </FaSearch>
            </form>
            <ul className='flex gap-4'> 
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>
                        Home
                    </li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>
                        About
                    </li>
                </Link>
                <Link to='sign-in'>
                    <li className=' text-slate-700 hover:underline'>
                        Sign In
                    </li>
                </Link>
            </ul>
            {/* 
                        text-sm(for sm screen eg mobile) sm:text-xl (and after sm screen do this)
                        flex(to bring together)
                        flex wrap()
                        shadow-md ()
                        justify-between (to add space between)
                        items-center (vertically center)
                        max-w-6xl (to add space around them)
                        mx-auto (margin x auto to get them to center -> equal space on r and l side)
                        p-3 (padding of 3)
                        rounded-lg (rounded corners)
                */}
        </div>
    </header>
  )
}
