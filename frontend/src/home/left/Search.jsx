import React from 'react';
import { IoSearch } from 'react-icons/io5';

const Search = () => {
    return (
        <div className="px-4 py-2">
            <form>
                <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 shadow-inner focus-within:ring-2 ring-indigo-500">
                    <input
                        type="search"
                        className="bg-transparent outline-none text-white placeholder-gray-400 flex-1"
                        placeholder="Search users..."
                    />
                    <div className="hidden md:flex gap-1 items-center text-xs text-gray-500 ml-2">
                        <button>
                            <IoSearch />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;
