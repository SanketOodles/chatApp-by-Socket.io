import React from 'react';


    const User = ({ user }) => {
      return (
        <div className="bg-gray-800 p-4 rounded-lg text-white">
          {user.username}
        </div>
      );
};

export default User;
