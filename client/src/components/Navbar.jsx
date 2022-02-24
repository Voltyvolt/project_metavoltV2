import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../images/Dogecoin-PNG-Pic.png';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-none justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="">

      </ul>

    </nav>
  );
}

export default Navbar