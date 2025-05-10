import React from 'react';
import useConversation from '../../statemanage/useConversation.js';
import { useSocketContext } from '../../context/SocketContest.jsx';

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const {socket, onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  const handleClick = () => {
    setSelectedConversation(user);
  };

  return (
    <div
    onClick={handleClick}
    className={`p-4 rounded-lg cursor-pointer transition duration-200 ${
      isSelected ? 'bg-blue-600' : 'bg-gray-800'
    } text-white hover:bg-gray-700 flex justify-between items-center`}
  >
    <div>
      <div className="font-semibold">{user.username}</div>
      <div className={`text-sm ${isOnline ? 'text-green-400' : 'text-red-400'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </div>
    </div>
  </div>

  );
};

export default User;
