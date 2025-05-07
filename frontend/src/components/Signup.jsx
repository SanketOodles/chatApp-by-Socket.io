import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { SignupRoute } from '../utils/Apiroutes';
import { useAuth } from '../context/AuthProvider';

const Signup = () => {
    
    const [ authUser, setAuthUser ] = useAuth();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const toastOptions = {
        position: 'top-center',
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const formValidation = () => {
        const { username, email, password, confirmpassword } = user;
        if (!username) {
            toast.error("Enter the username", toastOptions);
            return false;
        }
        if (!email) {
            toast.error("Enter the email", toastOptions);
            return false;
        }
        if (!password) {
            toast.error("Enter the password", toastOptions);
            return false;
        }
        if (password.length < 6) {
            toast.error("Password too short (min 6 characters)", toastOptions);
            return false;
        }
        if (password !== confirmpassword) {
            toast.error("Passwords do not match", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        if (formValidation()) {
            try {
                const { username, email, password, confirmpassword } = user;
                const response = await axios.post(SignupRoute, {
                    username,
                    email,
                    password,
                    confirmpassword,
                },{
                    withCredentials: true,
                });

                if (response.data.user) {
                  console.log(response.data.user);
                    localStorage.setItem("messanger", JSON.stringify(response.data.user));
                    toast.success("Registration successful", toastOptions);
                    setAuthUser(response.data.user);
                 
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
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
                >
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Create New Account</h1>
                        <p className="text-sm text-gray-500">It's free. Always will be.</p>
                    </div>

                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        placeholder="Username"
                        minLength="3"
                        maxLength="30"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="mail@site.com"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
                    />
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Password"
                        minLength="6"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
                    />
                    <input
                        type="password"
                        name="confirmpassword"
                        value={user.confirmpassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        minLength="6"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>

                    <p className="text-center text-sm">
                        Already have an account?
                        <NavLink to="/signin" className="text-blue-600 hover:underline ml-1">
                            Sign in
                        </NavLink>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Signup;
