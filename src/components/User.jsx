import { getSuggestedQuery } from '@testing-library/react'
import React from 'react'
import {useState, useEffect} from "react"
const User = () => {
  const [userData, setUserData]=useState()
 
 const getUser=()=>{

 fetch("https://randomuser.me/api/")
  .then((res)=>res.json())
  .then((data)=>setUserData(data.results[0]) )
  .catch((err)=>console.log(err))
 }
useEffect(()=>{
  const timer=setInterval(getUser,60000)
  getUser()
  return()=>{
    clearInterval(timer)
  }
},[])
console.log(userData)
  return (
    <div>
      <img src={userData?.picture?.large} className="rounded-circle" alt=""/>
      <h4>Hi, My name is</h4>
      <h1>
        {userData?.name?.first} {userData?.name?.last}
      </h1>
      <h3>{userData?.email}</h3>
      <h4>{new Date(userData?.dob?.date).toLocaleDateString("en-UK")}</h4>
      <h6>{userData?.phone}</h6>
      <h6>{userData?.location?.city}</h6>

 <button className="btn btn-success"onClick={getUser}>Get Random User</button>     
    </div>
  )
}

export default User
