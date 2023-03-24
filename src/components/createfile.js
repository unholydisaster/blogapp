import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';

const Newnotes = () => {
    const UserID=Cookies.get("userID")
    const [notes, setNotes]=useState({
        title:"",
        note:"",
        userOwner:UserID && UserID.userID ? UserID.userID : ""
    })
    const router = useRouter()
    console.log(userID)
  const handleChange=(event)=>{
    const {name,value}=event.target
    setNotes({
        ...notes, [name]:value
    })
  }

  const onSubmit=async(event)=>{
    event.preventDefault();
    try{
        const BASE_URL = process.env.BASE_URL;
        await axios.post(`${BASE_URL}/api/notes`, notes)
        alert("note created successfully")
        router.push("/")
    }catch(err){
        alert("an error occurred")
    }
  }

  
  
  return (
      <>
      <form onSubmit={onSubmit}>
        <h1>Create notes</h1>
        <input type="text" placeholder="enter title" name="title" onChange={handleChange} />
        <input type="text" placeholder="create notes here" name="note" onChange={handleChange} />
        <button>create notes</button>
       </form> 
      </>
  );
};

export default Newnotes;