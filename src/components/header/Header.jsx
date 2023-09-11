import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiSearch } from 'react-icons/hi'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
const Header = () => {
  const location = useLocation();
  const [hideShow, setHideShow] = useState();

  return (
    <header className="text-gray-600 bg-slate-300 body-font">
      <div className=" container mx-auto flex flex-wrap py-6 px-24 flex-col md:flex-row items-center">
        <a className="flex mr-12 title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-4xl">Shop-Phone</span>
        </a>
        {/* input search */}
        <form className='flex items-center '>
          <label >
            <input type="email" placeholder='Search...' className=" outline-none rounded-md px-4 py-3 text-2xl w-96" />
          </label>
          <button className='px-5 py-3 bg-slate-400 ml-3 rounded-md'>
            <HiSearch className='text-3xl flex items-center justify-center' />
          </button>
        </form>
        {/* menu */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to='/'
            className={`mr-6 text-3xl hover:text-gray-900 cursor-pointer  
            ${location.pathname === '/' ? 'text-gray-900 decoration-1 underline ' : ''}`}
          >Home
          </NavLink>
          <NavLink to='/products'
            className={`mr-6 text-3xl hover:text-gray-900 cursor-pointer 
            ${location.pathname === '/products' ? 'text-gray-900 decoration-1 underline ' : ''}`}>
            Products
          </NavLink>
          <NavLink to='/order'
            className={`mr-6 text-3xl hover:text-gray-900 cursor-pointer 
            ${location.pathname === '/order' ? 'text-gray-900 decoration-1 underline ' : ''}`}>
            Order
          </NavLink>
        </nav>
        {/* gio hang */}
        <div className='relative mr-12'>
          <Link className=''>
            <AiOutlineShoppingCart className='text-4xl' />
          </Link>
          <p
            className='absolute -top-6 -right-5 bg-red-600 text-gray-50 text-lg px-2 py-1 rounded-full '>
            10
          </p>
        </div>
        {/* user --> login/ logout */}
        <div
          onClick={() => setHideShow(!hideShow)}
          className="text-gray-900 cursor-pointer relative text-3xl px-5 py-2.5 flex text-center inline-flex items-center">
          <BiUserCircle size={40} className='pr-2 text-blue-600' />
          User
          <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </div>
        {
          hideShow &&
          <div className="z-10 bg-white absolute right-20 top-20 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
              <li>
                <Link to='/login' className="block px-4 py-2 text-2xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
              </li>
              <li>
                <Link to="/logout" className="block px-4 py-2 text-2xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>

        }

      </div>
    </header>
  )
}

export default Header
