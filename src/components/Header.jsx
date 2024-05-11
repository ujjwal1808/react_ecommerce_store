import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ecomContext from '../context/context'
import logo from '../assets/logo.png'
const Header = () => {
  const { cartcount } = useContext(ecomContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
  <div className='flex flex-row md:place-content-center items-center border-b h-16'>
    <Link to="/">
      <div>
        <img src={logo} width="100" alt="Logo" className='logo' />
      </div>
    </Link>
    <div className='mx-10 hidden  md:block'> 
      <div>
        <div className='flex items-center'>
          <ul className='flex flex-col gap-1 items-center md:flex-row md:flex-wrap'>
            <NavLink activeClassName="text-black" exact to="/"> <li className='px-4 py-3 hover:underline '>Home</li></NavLink>
            <NavLink activeClassName="text-black" to="/shop-all"> <li className='px-4 py-3 hover:underline'>Shop All</li></NavLink>
            <NavLink activeClassName="text-black" to="/mens"> <li className='px-4 py-3 hover:underline'>Mens</li></NavLink>
            <NavLink activeClassName="text-black" to="/womens"> <li className='px-4 py-3 hover:underline'>Womens</li></NavLink>
            <NavLink activeClassName="text-black" to="/kids"> <li className='px-4 py-3 hover:underline'>Kids</li></NavLink>
            <NavLink activeClassName="text-black" to="/get-in-touch"> <li className='px-4 py-3 hover:underline'>Get In Touch</li></NavLink>
            <NavLink activeClassName="text-black" to="/about-us"> <li className='px-4 py-3 hover:underline'>About us</li></NavLink>
          </ul>
        </div>
      </div>
    </div>

    <div className='relative '> 
      <button onClick={toggleMenu} className='md:hidden focus:outline-none'>
        <span className={`material-icons-outlined text-2xl ${isMenuOpen ? 'hidden' : ''}`}>
          <span class="material-symbols-outlined">
            menu
          </span>
        </span>
        <span className={`material-icons-outlined text-2xl ${isMenuOpen ? '' : 'hidden'}`}>
          <span class={`material-symbols-outlined ${isMenuOpen ? 'hidden' : ''}`}>
            close
          </span>
        </span>
      </button>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 bottom-0 bg-white w-60 p-4 shadow-md z-50 animate-slide-in-right">
          <div className='flex items-center'>
            <ul className='flex flex-col gap-1 items-center md:flex-row md:flex-wrap'>
              <NavLink activeClassName="text-black" exact to="/"> <li className='px-4 py-3 hover:underline '>Home</li></NavLink>
              <NavLink activeClassName="text-black" to="/shop-all"> <li className='px-4 py-3 hover:underline'>Shop All</li></NavLink>
              <NavLink activeClassName="text-black" to="/mens"> <li className='px-4 py-3 hover:underline'>Mens</li></NavLink>
              <NavLink activeClassName="text-black" to="/womens"> <li className='px-4 py-3 hover:underline'>Womens</li></NavLink>
              <NavLink activeClassName="text-black" to="/kids"> <li className='px-4 py-3 hover:underline'>Kids</li></NavLink>
              <NavLink activeClassName="text-black" to="/get-in-touch"> <li className='px-4 py-3 hover:underline'>Get In Touch</li></NavLink>
              <NavLink activeClassName="text-black" to="/about-us"> <li className='px-4 py-3 hover:underline'>About us</li></NavLink>
            </ul>
          </div>
          <button onClick={toggleMenu} className="absolute top-0 right-0 m-4 focus:outline-none">
            <span class="material-symbols-outlined">
              close
            </span>
          </button>
        </div>
      )}
    </div>
    <Link to="/add-to-cart" className='relative ml-48'>
      <div >

        <span className={`bg-red-700 ml-3 text-xs text-white rounded-full ${cartcount === 0 ? 'hidden' : 'absolute py-1 px-2'}`} style={{ marginTop: -8 }}>
          {cartcount}
        </span>
        <span className="material-symbols-outlined text-2xl">
          shopping_bag
        </span>
      </div>
    </Link>
  </div>
</>




  );
}

export default Header