import React from "react"
import validation from "./validation"

export default function Form({login}){
    const [userData, setUserData] = React.useState({
    username: '',
    password: ''
    });

    const [errors, setErros] = React.useState({
        username: '',
        password: ''
    })
    
    const handleInputChange = (event) => { //guardo los cambios en el estado que el cliente coloca en el input
        setUserData({
            ...userData,
            [event.target.name]: event.target.value //de forma dinamica cambio los 2 estados
        })
        setErros(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }
const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
}
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={userData.name} 
            onChange={handleInputChange}/>
            {errors.username && <p style={{color:"red"}}>{errors.username}</p>}
            <hr />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={userData.password} 
            onChange={handleInputChange}/>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            <hr />
            <button>Ingresar</button>
            
            <div>
                <h2>Datos para ingresar:</h2>
                <p>Email: lucasgabrielventura20@gmail.com</p>
                <p>Password: lucas123</p>
            </div>
        </form>
    )
}
