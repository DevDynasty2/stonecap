import { useEffect, useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Admin from './components/Admin';
import {Routes, Route} from 'react-router-dom';
import SingleProduct from './components/SingleProduct';

function App() {
const [token, setToken] =  useState('');
const [loggedIn, setLoggedIn] = useState(null)

  useEffect(() => {
      const token = localStorage.getItem("token");
      if(token){
        setToken(JSON.parse(localStorage.getItem("token")))
      }
      const loggedIn = localStorage.getItem("loggedIn");
      if(loggedIn){
        setLoggedIn("loggedIn", true)
      }
  }, [])

  return (
    <> 
    <Nav token={token} setToken={setToken}/>
    <Routes>
    <Route path="/" element={<Home />}>Home</Route>
       <Route path="/Login" element={<Login setToken={setToken} />}>Login</Route>
       <Route path="/Register" element={<Register setToken={setToken} />}>Register</Route>
       <Route path="/Profile" element={ <Profile token={token}/> }>Profile</Route>
       <Route path="/Cart" element={<Cart/>}>Cart</Route>
       <Route path="/Admin" element={<Admin token={token}/>}>Admin</Route>
       <Route path="/:id" element={<SingleProduct/>}>SingleProduct</Route>
       </Routes>
    </>
  );

}

export default App;
