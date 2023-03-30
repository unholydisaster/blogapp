import React from "react";
import fetch from "isomorphic-unfetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function NotesByTitle({ note }) {
  return(
  <ReactMarkdown>{note}</ReactMarkdown>
  )
}

export async function getStaticPaths() {
  const BASE_URL = process.env.BASE_URL;
  const res = await fetch(`${BASE_URL}api/notes`)
  
  const data = await res.json();

  const paths = data.map((blog) => ({
    params: {
      title: blog.title,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { title } = params;

  try {
    const BASE_URL = process.env.BASE_URL;
    const response = await fetch(`${BASE_URL}api/notes/${title}`);
    const data = await response.json();
    
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
}

  
