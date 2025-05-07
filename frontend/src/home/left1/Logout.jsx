import axios from 'axios';
import React from 'react';
import { BiLogOut } from "react-icons/bi";
import { SignoutRoute } from '../../utils/Apiroutes';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';

const Logout = () => {
  const toastOptions = {
    position: 'top-center',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };
  const [loading, setLoading] = React.useState(false);
  const handlelogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post(SignoutRoute);
      localStorage.removeItem("messanger");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logout successful", toastOptions);
      window.location.reload();
    } catch (error) {

    }

  };

  return (
    <>
      <ToastContainer />
      <div className="w-[4%] border-slate-950 bg-[#1e1e1e] text-white flex flex-col items-center justify-end py-4">
        <button className="hover:bg-gray-600 p-2 rounded-full transition duration-300">
          <BiLogOut className="text-3xl" onClick={handlelogout} />
        </button>
      </div>
    </>
  );
};

export default Logout;
