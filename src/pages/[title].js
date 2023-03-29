import React from "react"
import fetch from "isomorphic-unfetch"
import ReactMarkdown from "react-markdown";
import { withApiUrl } from "next-api-url";

export default function NotesByTitle({note}){
  
  return(
    <>
      <ReactMarkdown>{note}</ReactMarkdown>
    </>
  )
}

export const getServerSideProps = withApiUrl(async ({query:{title}}, url) =>{
  try {
    const response = await fetch(`${url}/notes/${title}`);
    const data = await response.json();
    console.log("Server response:", data);

    return {
      props: {
        note: data.note,
      },
    };
  } catch (error) {
    console.error("Error fetching note:", error);
    return {
      props: {
        note: "",
      },
    };
  }
});
  
