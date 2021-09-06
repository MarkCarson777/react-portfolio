import React from 'react';
// is Route component necessary?
// import Route from './Route';
import NavBar from './NavBar';
import Profile from './Profile'
import Employment from './Employment';
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
        <Route path="/profile" exact component={Profile} />
        <Route path="/employment" exact component={Employment} />
      </BrowserRouter>
    </div>
  );
};

export default App;