import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage';
const Type = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit =async(e)=>{
    console.log("message", message);
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
  }


  return (
    <form onSubmit={handleSubmit}>

      <div className='flex items-center space-x-3 px-4 py-2 bg-gray-800 h-[8vh]'>
        <input
          type='text'
          placeholder='Type here...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='input input-bordered w-full bg-gray-700 text-white focus:outline-none'
        />
        <button className='p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-2xl transition duration-300'>
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default Type;
