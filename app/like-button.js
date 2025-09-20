'use client'; // Kertoo Reactille että komponentti renderöidään selaimessa
 
import { useState } from 'react'; // Tuodaan useState hook React kirjastosta
 
export default function LikeButton() { // Viedään LikeButton komponentti oletuksena
  const [likes, setLikes] = useState(0); // State muuttuja tykkäysten määrälle, alkuarvo 0
 
  function handleClick() { // Funktio joka käsittelee napin klikkauksen
    setLikes(likes + 1); // Lisätään tykkäysten määrää yhdellä
  }
 
  return <button onClick={handleClick}>Like ({likes})</button>; // Palautetaan nappi joka näyttää tykkäysten määrän
}