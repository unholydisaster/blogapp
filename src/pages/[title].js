import React from "react"
import fetch from "isomorphic-unfetch"
import ReactMarkdown from "react-markdown";
import { withApiUrl } from "next-api-url";

export default function NotesByTitle({notes}){
  
  return(
    <>
      {notes.map((items)=>{
        return(
        <div key={items.id}>
          <ReactMarkdown>{items.note}</ReactMarkdown>
        </div>
        )
      })}
    </>
  )
}



export const getServerSideProps = withApiUrl(async ({query:{title}}, url) =>{
  // get the current environment
  const {data}= await (await fetch(`${url}/notes/${title}`)).json();
       // extract the data
      
      return {
          props: {
              notes:data
          },
      };
    
  })
  
