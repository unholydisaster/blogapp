import { HomeContainer, HomeWrapper, Paragraph } from "@/styles/homepage/homepage";
import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";


const  HomePage=({notedata})=>{

  return (<div>
  
   <HomeContainer>
    <HomeWrapper>
    {notedata.map((items)=>{
      return(
        <ul  key={items.id}>
        <li>
          <Paragraph>{items.title}</Paragraph>
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