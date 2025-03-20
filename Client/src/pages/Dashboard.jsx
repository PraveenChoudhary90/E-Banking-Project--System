
import { ToastContainer, toast } from 'react-toastify';

import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

   const Logout = ()=>{
    localStorage.clear();
    toast.success("Your Are Logout Successfully")
    navigate("/home")

   }

  return (
    <>
    <h1>Welcome To SBI Bank </h1>
    Name:{localStorage.getItem("username")}
    Email:{localStorage.getItem("email")}
    <button onClick={Logout}>Logout</button>
           <ToastContainer />
    
    
    </>
  )
}

export default Dashboard