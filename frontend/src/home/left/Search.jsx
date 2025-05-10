import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import useGetAll from '../../context/UserGetAll';  
import useConversation from '../../statemanage/useConversation';
import toast, { Toaster } from 'react-hot-toast';

const Search = () => {
  const [search, setSearch] = useState('');
  const [allUsers] = useGetAll();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const conversation = allUsers.find((user) =>
      user.username.toLowerCase().includes(search.trim().toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error('User not found');
    }
  };

  return (
    <div className="px-4 py-2">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 shadow-inner focus-within:ring-2 ring-indigo-500">
          <input
            type="search"
            className="bg-transparent outline-none text-white placeholder-gray-400 flex-1"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="text-gray-400 hover:text-white ml-2">
            <IoSearch />
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Search;
