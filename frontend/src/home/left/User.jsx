import React from 'react';
import useConversation from '../../statemanage/useConversation.js';

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === user._id;

  const handleClick = () => {
    setSelectedConversation(user);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-4 rounded-lg cursor-pointer transition duration-200 ${
        isSelected ? 'bg-blue-600' : 'bg-gray-800'
      } text-white hover:bg-gray-700`}
    >
      {user.username}
    </div>
  );
};

export default User;
