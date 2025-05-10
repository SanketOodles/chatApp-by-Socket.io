import React from 'react'
import Left from './home/left/left'
import Right from './home/right/Right'
import Logout from './home/left1/Logout'
import Signup from './components/Signup'
import Signin from './components/Signin'
import { Routes, Route, Navigate } from 'react-router-dom'


import { useAuth } from './context/AuthProvider.jsx'
const App = () => {
  // let authUser = true
  const [ authUser, setAuthUser ] = useAuth()
  return (
    <>
    
      <Routes>
        <Route path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/signin"} />
            )
          }
        />
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <Signup />} />
        <Route path="/signin" element={authUser ? <Navigate to={"/"} /> : <Signin />} />

      </Routes>
     
    </>
  )
}

export default App