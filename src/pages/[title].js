import React from "react"
import fetch from "isomorphic-unfetch"
import ReactMarkdown from "react-markdown";


const NotesByTitle=({notes})=>{
  
  return(
    <>
      {notes.map((notes)=>{
        return(
        <ul key={notes.id}>
          <ReactMarkdown>{notes.note}</ReactMarkdown>
        </ul>
        )
      })}
    </>
  )
}

export async function getServerSideProps({ query }) {
  // Get the value of the "id" query parameter
    const title  = query.id;
  // Make a fetch request using the "id" parameter
    const BASE_URL = process.env.BASE_URL;

    const res = await fetch(`${BASE_URL}api/getnotesId/${title}`)
  
  // Parse the response body as JSON
    const data = await res.json();
  
  return{
      props:{
          notes:data
      }
  }
}

export default NotesByTitle
