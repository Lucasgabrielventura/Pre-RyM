import SearchBar from "./SearchBar.jsx";
import styles from './Styles/Nav.module.css'
import { Link } from "react-router-dom";

export default function Nav({onSearch}){
return(
<div>
    <nav className={styles.search}>
        <div className={styles.links}>
            <button>
                <Link to="favorites">Favorites</Link>
            </button>
            <button>
            <Link to="/">LOGOUT</Link>
            </button>
            <Link to="about">About Me</Link>
            <Link to="home">Home</Link>
        </div>
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
    </nav>
</div>
    )
}