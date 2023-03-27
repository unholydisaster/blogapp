import { Editor, MarkdownContainer, Reviewarea } from "@/styles/createnote/newnote";
import React, { useEffect } from "react";
import { useState } from "react";


const Newnotes = () => {
  const [note, setNote] = useState({ markdown: "" });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(() => {
    const regex = /^#\s+(.*)\s+!\[.*\]\((.*?)\)/m;
    const match = regex.exec(note.markdown);

    if (match) {
      const heading = match[1]; // This is a heading
      const imageUrl = match[2]; // https://amazon.img.sjddf.png

      // Append the extracted heading and image URL to the original data array
      setData([...data, { heading, imageUrl, markdown: note.markdown }]);
    } else {
      console.log("no data got matched");
    }
  }, []);


  return (
    <MarkdownContainer>
      <Editor
        id="textarea_id"
        name= "markdown"
        type= "text"
        onChange={handleChange}
      />
      <Reviewarea>
        {note.markdown}
      </Reviewarea>
    </MarkdownContainer>

  );
}

export default Newnotes


/*import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {useCookies} from "react-cookie"

const Newnotes = () => {
    const [cookies,setCookies]=useCookies(["access_token","userID"]);
    const [notes, setNotes]=useState({
        title:"",
        note:"",
        userOwner:cookies.userID,
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
*/