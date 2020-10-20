import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import StarshipList from './components/Starships/StarshipList.jsx';

const App = () => {
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser") || ""));
  const [starships, setStarship] = useState(JSON.parse(localStorage.getItem("starships") || "[]"));

  useEffect(() => {
    let nextPage = false;
    while (nextPage === false) {
      let page = 1;
      fetch(`https://swapi.dev/api/starships/?page=${1}`)
        .then(response => response.json)
        .then(data => {
          console.log(data)
        });
    }
  }, []);

  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={() => (
            <StarshipList
              loggedUser={loggedUser}
              starships={starships}
            />
          )} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;