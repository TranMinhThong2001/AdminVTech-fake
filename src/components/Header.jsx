import React from 'react';
import logo from '../images/logo.jpg';

export default function Header() {
  return (
    <>
        <div className='min-w-full bg-black h-16 font-bold text-white text-3xl text py-4 px-4 bg-gradient-to-r from-cyan-200 to-blue-500'>
          <img className='w-36 h-10' src={logo} alt=''/>
        </div>
    </>
  )
}
