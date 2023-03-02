import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Favorites(){
    const {myFavorites} = useSelector(state => state)
    return(
        <div>
            <button>
                <Link to="/home">Back To Home</Link>
            </button>
            {
            myFavorites.map((character) => {
                return (
                    <div> 
                        <Link to={`/detail/${character.id}`}>
                        <h2>{character.name}</h2>
                        </Link>
                        <h2>{character.species}</h2>
                        <h2>{character.gender}</h2>
                        <img src={character.image} alt={character.name} /> 
                    </div>
                )
            })
        }
        </div>
    )
}
