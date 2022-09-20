import React, { useEffect, useState } from "react"
import "./styles/index.css"

export const Users = ({ items, isLoading}) => {
    
}


function App(){
    const[users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then(res => res.json())
            .then(json => {
                setUsers(json.data)
            }).catch(err => {
                console.warn(err);
                alert("Ошибка при получении пользователей")
            })
    , []})

    return(
        <div className="App">

        </div>
    )
}

export default App;

