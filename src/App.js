import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import {Routes, Route, useLocation} from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Favorites from './components/Favorites/Favorites'

function App () {
  const navigate = useNavigate()
  const [access, setAccess] = useState(false);
  const username = "lucasgabrielventura20@gmail.com";
  const password = "lucas123";
  const login = (userData) => {
    if(username === userData.username && password === userData.password){
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate('/');
}, [access]);

  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const onSearch = (character) => { 
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
        } else {
            window.alert('No hay personajes con ese ID');
        }
      });
  }
  const onClose = (id) => {
    setCharacters(
      characters.filter(characters => characters.id !== id)
    )
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path='home' element={<Cards onClose={onClose} characters={characters} />}/>
        <Route path='about' element={<About/>}/>
        <Route path='detail/:detailId' element={<Detail/>}/>
        <Route path='favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
}

export default App
