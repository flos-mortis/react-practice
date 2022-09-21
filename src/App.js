import React, { useEffect, useState } from "react"
import "./styles/index.css"
import { Users } from "./components/Users/Users";

function App(){
  const[users, setUsers] = useState([]);
  const[isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data => {
      setUsers(data.data)
    }).catch(err => {
      console.warn(err);
      alert("Ошибка при получении данных")
    }).finally(() => setLoading(false))
  },[])

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading}/>
    </div>
  );
}

export default App;

