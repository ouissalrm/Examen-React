
import React, { useEffect, useState } from "react";
export default function CAN(){
    const [dataa,setdata]=useState([]);
      const [search,setsearch]=useState("");
    useEffect(()=>{
        fetch('./can.JSON')
        .then((Response)=>Response.json())
        .then((Response)=>setdata(Response))
    },[])

   const filtrer =
  search === ""
    ? null
    : dataa.find(
        (e) =>
          e.equipe1.toLowerCase().includes(search.toLowerCase()) ||
          e.equipe2.toLowerCase().includes(search.toLowerCase())
      );



    return(
        <div className="container">
        <h1>Programme Des Match - Can maroc 2025</h1>
        <label>Rechercher  le programme  d'une equipe (ex:maroc )</label><br></br>
        <input style={{width:"60%"}} type="text" onChange={(e)=>{
            setsearch(e.target.value)
        }} /><br></br>
        
       <div className="cards">
  {search === "" ? (
    dataa.map((e, index) => (
      <div key={index}>
        <h3>{e.equipe1} Vs {e.equipe2}</h3>
        <p>{e.date} à {e.heure}</p>
        <p>{e.stade} à {e.ville}</p>
      </div>
    ))
  ) : filtrer ? (
    <div>
      <h3>{filtrer.equipe1} Vs {filtrer.equipe2}</h3>
      <p>{filtrer.date} à {filtrer.heure}</p>
      <p>{filtrer.stade} à {filtrer.ville}</p>
    </div>
  ) : (
    <p>Not Found</p>
  )}
</div>
        </div>
    )
}