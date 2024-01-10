import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import {Route,Routes}from 'react-router-dom';
import Posts from './Posts';
function App() {
  const[listOfUser,setListOfUser]=useState([])
  useEffect(()=>{
    const fetchData =async()=>{
      const res =await axios.get("https://jsonplaceholder.typicode.com/users")
      setListOfUser(res.data)
    }

    fetchData()
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<UserList listOfUser={listOfUser}/>}/>
        <Route path='/:id/posts'element={<Posts/>}/>
        <Route path='*'element={<h1>page not found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
