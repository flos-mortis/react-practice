import React, { useEffect, useState } from "react"
import "./styles/index.css"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={320}
    height={50}
    viewBox="0 0 320 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="25" cy="25" r="25" />
    <rect x="64" y="0" rx="6" ry="6" width="137" height="25" />
    <rect x="64" y="32" rx="6" ry="6" width="183" height="15" />
    <rect x="290" y="12" rx="6" ry="6" width="26" height="26" />
  </ContentLoader>
);

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
      <Skeleton/>
    </div>
  );
}

export default App;

