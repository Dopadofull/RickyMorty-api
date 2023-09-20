import { useEffect, useState } from "react";
import "./character.css"
export function Character(){

    const [character, setCharacter] = useState([])}

    useEffect(() => {

    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then((data) => setCharacter(data,results));
    },[setCharacter])

return (
    <>
     <ul>
        {character.map((item, index) => (
            <li key={index}>
                <h3>{item.name}</h3>
                <p>{item.status}</p>
                <img src={item.image}/>
            </li>
        ))}    
     <ul/>
    </>
);