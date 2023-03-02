import { useState } from 'react';
import styles from './Styles/Search.module.css'


export default function SearchBar({onSearch}) {
   const [character, setCaracters] = useState("");
//          goku
   const handleCharacters = (evento) => {
   setCaracters(evento.target.value);
   } 
   return (//                 value = goku  - detecta en tiempo real lo que la persona escribe en el input
   <div className={styles.search}>
      <input type='search' value={character} onChange={handleCharacters}/> 
      <button onClick={() => onSearch(character)}>Agregar</button>
   </div>
   );
}
