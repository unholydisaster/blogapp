import React from "react"
import fetch from "isomorphic-unfetch"
import { GridContainer, NotesContainer } from "@/styles/homepage/homepage"
import Image from "next/legacy/image"
import Link from "next/link"


const HomePage=({notes})=>{
  const BASE_URL = process.env.BASE_URL;
  return(
    <>
    <GridContainer>
      {notes.map((notes)=>{
        return(
        <ul key={notes._id}>
        <NotesContainer>
          <Link href={`/${notes.title}`}>
          <h1>{notes.title}</h1>
          </Link>
          <Image
          src={notes.imageUrl}
          height={200}
          width={250}
          alt={notes.title}
        />
        </NotesContainer> 
        </ul>
        )
      })}
    </GridContainer>
    </>
  )
}

export async function getServerSideProps(context) {
  const BASE_URL = process.env.BASE_URL;
  const res = await fetch(`${BASE_URL}api/notes`)
  const notesdata = await res.json()
  console.log(notesdata)
  if(!notesdata){

      return {
          notFound:true
      }
  }
  return{
      props:{
          notes:notesdata
      }
  }
}

export default HomePage

