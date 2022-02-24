import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';

const Transfer = () => {

  const commonStyle = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light';

  const connectWallet = () => {

  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3l sm:text-3xl text-gradient outline-1 py-1 drop-shadow-md">
            ทำธุรกรรมบน  <br /> BlockChain ของคุณ
          </h1>
          <p className="text-left mt-5 font-light md:w-9/12 w-11/12 text-base">
            โอนเหรียญของคุณผ่านเครือข่าย Binance Smart Chain
          </p>
          <button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg=[#2546bd]">
            <p className='text-white text-base font-bold'>Connect Metamask</p>
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyle}`}>
              เชื่อถือได้
            </div>
            <div className={`${commonStyle}`}>
              ปลอดภัย
            </div>
            <div className={`rounded-tr-2xl ${commonStyle}`}>
              Blockchain
            </div>
            <div className={`rounded-bl-2xl ${commonStyle}`}>
              Web 3.0
            </div>
            <div className={`${commonStyle}`}>
              Next Generation
            </div>
            <div className={`rounded-br-2xl ${commonStyle}`}>
              รวดเร็ว
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Transfer