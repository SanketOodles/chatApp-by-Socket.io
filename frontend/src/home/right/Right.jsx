import React, { useEffect } from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
import Type from './Type';
import useConversation from '../../statemanage/useConversation.js';
import {useAuth} from '../../context/AuthProvider.jsx'

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  if (!selectedConversation) {
    return <div className="w-[70%] flex items-center justify-center text-white">Welcome To Vartaalap</div>;
  }

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

const Nochat = () => {
  const [authUser] = useAuth();
  return <>
    <div className="relative">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center">
          Welcome{" "}
          <span className="font-semibold text-xl">
            {authUser.user.fullname}
          </span>
          <br />
          No chat selected, please start conversation by selecting anyone to
          your contacts
        </h1>
      </div>
    </div>
  </>
}