import React from 'react';
import Search from './Search';
import Users from './Users';

const Left = () => {
  return (
    <div className="w-[30%] h-full border-r border-gray-700 bg-[#1e1e1e] text-white flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <h1 className="font-bold text-3xl tracking-wide text-center text-indigo-400">Vartaalaap</h1>
      </div>
      
      <div className="px-4 py-3">
        <Search />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Users />
      </div>
    </div>
  );
};

export default Left;
