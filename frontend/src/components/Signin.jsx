import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { SigninRoute } from '../utils/Apiroutes';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../context/AuthProvider';

const Signin = () => {
    
     const [ authUser, setAuthUser ] = useAuth();
    const [user,setUser]=useState({
        email:"",
        password:"",

    })
    const toastOptions = {
        position: 'top-center',
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
    };


    const submitdata=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const formValidation = () => {
        const {  email, password } = user;
      
        if (!email) {
            toast.error("Enter the email", toastOptions);
            return false;
        }
        if (!password) {
            toast.error("Enter the password", toastOptions);
            return false;
        }
        if (password.length < 6) {
            toast.error("Password too short", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formValidation()) {
            try {
                const {  email, password } = user;
                const response = await axios.post(`${SigninRoute}`, {
                    email,
                    password,                  
                },{
                    withCredentials: true,
                });

                if (response.data.success) {
                    console.log(response.data.success);
                    localStorage.setItem("messanger", JSON.stringify(response.data.user));
                    setAuthUser(response.data.user);
                    toast.success("Login successful", toastOptions);
                    
                    
                } else {
                    toast.error(response.data.message || "Registration failed", toastOptions);
                }
            } catch (error) {
                toast.error(error?.response?.data?.message || "Server error during registration", toastOptions);
            }
        }
    };

    return (
        <>
        <ToastContainer />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Signin Account</h1>
                    <p className="text-sm text-gray-500">It's free. Always will be.</p>
                </div>



                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                    <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input
                        type="email"
                        placeholder="mail@site.com"
                        required
                        name="email"
                        value={user.email}
                        onChange={submitdata}
                        className="w-full outline-none"
                    />
                </div>


                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                    <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        required
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={submitdata}
                        minLength="6"
                        className="w-full outline-none"
                    />
                </div>


                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>
                <h1>Don't have any account<span>  <NavLink to="/signup" className="text-blue-600 hover:underline">
                    Sign up
                </NavLink></span></h1>

            </form>
        </div>
        </>
    );
};

export default Signin;
