import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { addFavorite, deleteFavorite } from '../redux/action';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Card({name, species, gender, image, id, onClose}) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)

   const handleFavorite = () => {
   if(isFav){
   setIsFav(false);
   dispatch(deleteFavorite(id))
   }
   else{
      setIsFav(true);
      dispatch(addFavorite({name, species, gender, image, id}))
   }
}

useEffect(() => {
   myFavorites.forEach((character) => {
      if (character.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

return (
      <div>
         { isFav ? ( <button onClick={handleFavorite}>❤️</button>) : 
         ( <button onClick={handleFavorite}>🤍</button> )}

            <button onClick={onClose}>X</button>
            <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
            </Link>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img src={image} alt={name} /> 
      </div>
   );
}

