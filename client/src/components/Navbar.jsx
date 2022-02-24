import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../images/Metavolt-Logo.png';

const Transfer = () => <h1>Transfer</h1>

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-3">
      <div className="md:flex-[0.5] flex-none justify-center items-center">
        <img src={logo} alt="logo" className="w-64 cursor-pointer" />
      </div>
      <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <Link to="/" className='flex mx-8 hover:underline'>หน้าแรก</Link>
        <Link to="/Cryptocurencies" className='flex mx-6 hover:underline'>ราคาเหรียญ</Link>
        <Link to="/Transactions" className='flex mx-6 hover:underline'>ประวัติการทำธุรกรรม</Link>
        <Link to="/News" className='flex mx-6 hover:underline'>ข่าวสารต่างประเทศ</Link>
        <li className="bg-[#2952e3] text-white py-2 px-7 mx-4 rounded-full text-center cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
        <div className="flex relative">
            {ToggleMenu
            ? <AiOutlineClose fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
          : <HiMenuAlt4 fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>}
          {ToggleMenu &&(
            <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none 
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
              <li className="text-xl w-full my-2">
                  <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <Link to="/">หน้าแรก</Link>
              <Link to="/Transactions">ประวัติการทำธุรกรรม</Link>
              <Link to="/News">ข่าวสารต่างประเทศ</Link>
              <li className="bg-[#2952e3] text-white py-2 px-7 mx-4 rounded-full text-center cursor-pointer hover:bg-[#2546bd]">
                Login
              </li>
            </ul>
          )}
        </div>
    </nav>
  );
}

export default Navbar