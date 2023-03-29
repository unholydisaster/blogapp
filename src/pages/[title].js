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

export async function getServerSideProps(context) {
  const BASE_URL = process.env.BASE_URL;
   const { title } = context.query;
  const res = await fetch(`${BASE_URL}api/getnotesId/${title}`).json()

  console.log(res)

  return{
      props:{
          notes:res
      }
  }
}

export default NotesByTitle
