import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import Post from './components/Post';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import image from './R (1).jpg';
import imag from './imageinsta.png'; 

function App() {
  const [currentRoute, setCurrentRoute] = useState("Login"); // Initialisez-le avec une valeur par défaut

  return (
    
    <BrowserRouter>
    
    <nav className="mm-1 p-1 border border-info d-flex justify-content-between align-items-center background:black background black
    ">
   
        <ul className="nav nav-pills" style={{ textAlign: 'left' }}>
        
          <li>
            <NavLink
            
              onClick={() => setCurrentRoute("Home")}
              className={currentRoute === "Home" ? "btn btn-outline-info ms-1" : 'btn btn-outline-info ms-1'}
              to="/Home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setCurrentRoute("User")}
              className={currentRoute === "User" ? "btn btn-outline-info ms-1" : 'btn btn-outline-info ms-1'}
              to="/User"
            >
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setCurrentRoute("Post")}
              className={currentRoute === "Post" ? "btn btn-outline-info ms-1" : 'btn btn-outline-info ms-1'}
              to="/Post"
            >
              Post
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setCurrentRoute("Login")}
              className={currentRoute === "Login" ? "btn btn-outline-info ms-1" : 'btn btn-outline-info ms-1'}
              to="/Login"
            >
              login
            </NavLink>
          </li>
        </ul>
              {/* Afficher l'image "imag" au milieu de la page */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={imag}
                alt="Imag"
                style={{ width: '200px', height: 'auto' }} // Ajustez les styles selon vos besoins
              />
            </div>
            
       
        <img
          className="sidenav__logo"
          src={image} // Utilisez la variable image ici
          alt="Instagram Logo"
        />
        
      
      </nav>

      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/User' element={<User />} />
        <Route path='/Post' element={<Post />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
