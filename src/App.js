import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import './App.css';
import Logo from './images/logo.png';

class App extends React.Component{
  render(){
    return(
      <div>
          <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <div className="container">
          <img src={Logo} alt="logo"></img>
          <a class="navbar-brand">S U P E R M A R K E T</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end TEXT-WHITE">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/belanja">Belanja</Link>
              </li>
            </ul>
            </div>
          </div>
        </nav>
        <p><Utama/></p>
      </div>
    );
  }
}

export default App;