import React from "react";
import fetch from "isomorphic-unfetch";

import { ArticleContainer,Article } from "@/styles/articles/articlepage";
import CodeBlock from "@/styles/codecontainers/highlighter";
import remarkGfm from "remark-gfm";

export default function NotesByTitle({ note,props }) {
  const renderImage = (props) => {
    return <img src={props.src} alt={props.alt} />;
  };
  return(
    <ArticleContainer>
    <Article 
      source={props.source}
      render={renderImage}
      components={CodeBlock}
      remarkPlugins={[remarkGfm]}>
    {note}
    </Article>
    </ArticleContainer>

  )
}


export async function getServerSideProps({ params }) {
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

  
