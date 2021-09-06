import React from 'react';
import Route from './Route';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <NavBar />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/react-portfolio">
        <Route path="/" exact component={Homepage} />
      </BrowserRouter>
    </div>
  );
};

export default App;