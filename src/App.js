import React, { useEffect, useState } from "react"
import "./styles/index.css"
import { Users } from "./components/Users/Users";

function App(){
  const[users, setUsers] = useState([]);
  const[isLoading, setLoading] = useState(true);
  const[searchValue, setSearchValue] = useState('');
  const[invites, setInvites] = useState([]);

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

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)){
      setInvites(prev => prev.filter(_id => _id !== id))
    } else{
      setInvites(prev => [...prev, id])
    }
  }
  
  return (
    <div className="App">
      <Users 
        items={users} 
        isLoading={isLoading} 
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        invites={invites}
        onClickInvite={onClickInvite}
      />
    </div>
  );
}

export default App;

