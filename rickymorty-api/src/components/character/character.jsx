import { useEffect, useState } from "react";
import "./character.css";

export const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, []);

  return (
    <>
      <ul className="encuadrar">
        {character.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.status}</p>
            <img src={item.image} />
          </li>
        ))}
      </ul>
    </>
  );
};
