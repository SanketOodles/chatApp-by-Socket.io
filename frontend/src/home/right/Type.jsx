import React from 'react';
import { TbSend } from 'react-icons/tb';

const Type = () => {
  return (
    <div className='flex items-center space-x-3 px-4 py-2 bg-gray-800 h-[8vh]'>
      <input
        type='text'
        placeholder='Type here...'
        className='input input-bordered w-full bg-gray-700 text-white focus:outline-none'
      />
      <button className='p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-2xl transition duration-300'>
        <TbSend />
      </button>
    </div>
  );
};

export default Type;
