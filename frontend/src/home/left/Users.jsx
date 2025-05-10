import React from 'react';
import User from './User';
import useUserGetAll from '../../context/UserGetAll';

const Users = () => {
  const [allusers, loading] = useUserGetAll();
  console.log(allusers);
  return (
    <div className="h-[calc(100vh-100px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      <div className="flex flex-col space-y-4 px-6 py-4">
        {loading ? (
          <p className="text-white">Loading users...</p>
        ) : (
          allusers.map((user, index) => <User key={user._id || index} user={user} />)

        )}
      </div>
    </div>
  );
};

export default Users;
