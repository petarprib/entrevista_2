import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import StarshipList from './components/Starships/StarshipList.jsx';
import CharacterList from './components/Characters/CharacterList.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={StarshipList} />
          <Route path="/characters" component={CharacterList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;