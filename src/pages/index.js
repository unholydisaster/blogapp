import React from "react"
import fetch from "isomorphic-unfetch"
import { GridContainer, NotesContainer } from "@/styles/homepage/homepage"

const data=[{
  id:"1",
  title:"our first title",
  description:"this is our first description and some bunch on ajdoeidjhcbdcberhedbchfbd",
},
{
  id:"2",
  title:"our second title",
  description:"this is our second description and some bunch on ajdoeidjhcbdcberhedbchfbd",
},
{
  id:"3",
  title:"our third title",
  description:"this is our third description and some bunch on ajdoeidjhcbdcberhedbchfbd",
},
{
  id:"4",
  title:"our fouth title",
  description:"this is our fourth description and some bunch on ajdoeidjhcbdcberhedbchfbd",
},
{ 
  id:"5",
  title:"our fiveth title",
  description:"this is our fiveth description and some bunch on ajdoeidjhcbdcberhedbchfbd",
},
{
  id:"6",
  title:"our sixth title",
  description:"this is our sixth description and some bunch on ajdoeidjhcbdcberhedbchfbd",
},
{
  id:"7",
  title:"our sixth really long title and I don know why",
  description:"this is our sixth description and some bunch on ajdoeidjhcbdcberhedbchfbd",
}]

const HomePage=()=>{
  
  return(
    <>
    <GridContainer>
      {data.map((notes)=>{
        return(
        <ul key={notes.id}>
        <NotesContainer>
          <h1>{notes.title}</h1>
          <p>{notes.description}</p>
        </NotesContainer> 
        </ul>  
        )
      })}
    </GridContainer>
    </>
  )
}
export default HomePage

/*
import { HomeContainer, HomeWrapper, Paragraph } from "../styles/homepage/homepage";
import React from "react";
import fetch from "isomorphic-unfetch";


const  HomePage=({notedata})=>{

  return (<div>
  
   <HomeContainer>
    <HomeWrapper>
    {notedata.map((items)=>{
      return(
        <ul  key={items._id}>
        <li>
          <Paragraph>{items.title}</Paragraph>
          <Paragraph>{items.note}</Paragraph>
          <button onClick={()=>savedNotes(items._id)}>save notes</button>
        </li>
        </ul>
      )
    })}
    </HomeWrapper>
  </HomeContainer>  
  </div>
  );
};

export async function getServerSideProps(context) {
  const BASE_URL = process.env.BASE_URL;
  const res = await fetch(`${BASE_URL}/api/notes`)
  const notes = await res.json()
  console.log(notes)
  if(!notes){

      return {
          notFound:true
      }
  }
  return{
      props:{
          notedata:notes
      }
  }
}

export default HomePage
*/