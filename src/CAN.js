
import React, { useEffect, useState } from "react";
export default function CAN(){
    const [data,setdata]=useState({});
    useEffect(()=>{
        fetch('./can.JSON')
        .then((Response)=>Response.json())
        .then
    },[])

    return(
        <>
        <h1>Programme Des Match - Can maroc 2025</h1>
        <label>Rechercher  le programme  d'une equipe (ex:maroc )</label><br></br>
        <input type="text" />
        </>
    )
}