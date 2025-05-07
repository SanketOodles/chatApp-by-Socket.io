import React from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
import Type from './Type';

const Right = () => {
  return (
    <div className="w-[70%] bg-gray-900 text-white flex flex-col h-screen">
      {/* Header */}
      <div className="border-b border-gray-700">
        <Chatuser />
      </div>

      {/* Scrollable message area */}
      <Messages />

      {/* Input box */}
      <div className="border-t border-gray-700">
        <Type />
      </div>
    </div>
  );
};

export default Right;
