import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js'
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import MembersList from './Components/MembersList.js'
import PlantList from './Components/PlantList.js';
import AddPlant from './Components/AddPlant.js';
import SignUp from './Components/SignUp.js'

export default function App() {
  return (
    <Router>
      <div className="page">
        <header>
          <Header />
        </header>
        <nav>
          <ul className="container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/PlantList">Plant List</Link>
            </li>
            <li>
              <Link to="/AddPlant">Add Plant</Link>
            </li>
            <li>
              <Link to="/MembersList">Members</Link>
            </li>
            <li>
              <Link to="/SignUp">Sign Up</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Switch>
            <Route path="/About">
              <About />
            </Route>

            <Route path="/PlantList">
              <PlantList />
            </Route>

            <Route path="/AddPlant">
              <AddPlant />
            </Route>

            <Route path="/MembersList">
              <MembersList />
            </Route>

            <Route path="/SignUp">
              <SignUp />
            </Route>

            <Route path="/Contact">
              <Contact />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>

        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
