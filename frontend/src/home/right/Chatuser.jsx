import React from 'react';
import useConversation from '../../statemanage/useConversation.js';
import { useSocketContext } from '../../context/SocketContest.jsx';

const Chatuser = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  if (!selectedConversation) return null;

  const isOnline = onlineUsers?.includes(selectedConversation._id);
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusColor = isOnline ? 'text-green-400' : 'text-red-400';

  return (
    <div className='flex items-center space-x-4 p-4 mx-4 my-2 rounded-lg bg-gray-900 hover:bg-gray-700 transition duration-300 cursor-pointer'>
      <div className={`avatar ${isOnline ? 'avatar-online' : 'avatar-offline'}`}>
        <div className='w-12 rounded-full ring ring-green-400 ring-offset-base-100 ring-offset-2'>
          <img
            src='https://img.daisyui.com/images/profile/demo/gordon@192.webp'
            alt={selectedConversation.username}
          />
        </div>
      </div>
      <div>
        <h1 className='text-white font-medium text-base'>{selectedConversation.username}</h1>
        <span className={`${statusColor} text-sm`}>{statusText}</span>
      </div>
    </div>
  );
};

export default Chatuser;
