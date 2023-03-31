import React from "react";
import fetch from "isomorphic-unfetch";
import { useState } from "react";
import { useEffect } from "react";
import { ArticleContainer,Article } from "@/styles/articles/articlepage";
import CodeBlock from "@/styles/codecontainers/highlighter";
import remarkGfm from "remark-gfm";

export default function NotesByTitle({ note }) {
  return(
    <ArticleContainer>
    <Article components={CodeBlock} remarkPlugins={[remarkGfm]}>
    {note}
    </Article>
    </ArticleContainer>

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

  
