import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useGetId } from '@/hooks/getUserId';

const Newnotes = () => {
    const userID=useGetId()
    const [notes, setNotes]=useState({
        title:"",
        note:"",
        userOwner:userID
    })
    const router = useRouter()

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
        console.log(err)
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