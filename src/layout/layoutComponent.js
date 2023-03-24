import React from "react"
import Head from "next/head";
import NavbarComponent from "@/components/navbar";

const Layout=({children})=>{
      
    return(
        <>
        <Head>
          <title>
          Notes App
          </title>
        </Head>
        <NavbarComponent/>
        {children}
        </>
    )
}

export default Layout

