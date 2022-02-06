import React from "react";
import { RecipesState } from './context/RecipesContext';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import Hero from './components/Hero';
import './App.css';

const App = () => {
  return (
    <RecipesState>
    <Router>
      <Nav />
      <Route exact path="/" component={Hero} />
    </Router>
    </RecipesState>
  );
};

export default App;
