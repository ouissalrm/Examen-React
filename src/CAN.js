
import React, { useEffect, useState } from "react";
export default function CAN(){
    const [dataa,setdata]=useState([]);
    useEffect(()=>{
        fetch('./can.JSON')
        .then((Response)=>Response.json())
        .then((Response)=>setdata(Response))
    },[])

    return(
        <div>
        <h1>Programme Des Match - Can maroc 2025</h1>
        <label>Rechercher  le programme  d'une equipe (ex:maroc )</label><br></br>
        <input style={{width:"60%"}} type="text" /><br></br>
        <div className="cards">
           
            {dataa.map((e)=>(
           <div>
            <h3>{e.equipe1} Vs {e.equipe2} </h3>
            <p>{e.date}  a  {e.heure} </p>
             <p>{e.stade}  a  {e.ville} </p>
            
            </div>
            
            
        ))}

        <div/>
        </div>
        </div>
    )
}