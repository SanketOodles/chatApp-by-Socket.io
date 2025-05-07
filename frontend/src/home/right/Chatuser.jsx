import React from 'react';

const Chatuser = () => {
  return (
    <div className='flex items-center space-x-4 p-4 mx-4 my-2 rounded-lg bg-gray-900 hover:bg-gray-700 transition duration-300 cursor-pointer'>
      <div className='avatar avatar-online'>
        <div className='w-12 rounded-full ring ring-green-400 ring-offset-base-100 ring-offset-2'>
          <img
            src='https://img.daisyui.com/images/profile/demo/gordon@192.webp'
            alt='Ankit Pathak'
          />
        </div>
      </div>
      <div>
        <h1 className='text-white font-medium text-base'>Ankit Pathak</h1>
        <span className='text-green-400 text-sm'>Online</span>
      </div>
    </div>
  );
};

export default Chatuser;
