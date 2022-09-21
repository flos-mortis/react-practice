import React, { useEffect, useState } from "react"
import "./styles/index.css"

function App(){
  const[users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data => {
      setUsers(data.data)
    }).catch(err => {
      console.warn(err);
      alert("Ошибка при получении данных")
    })
  },[])

  return (
    <div className="App">
      <Users items={users}/>
    </div>
  );
}

export default App;

