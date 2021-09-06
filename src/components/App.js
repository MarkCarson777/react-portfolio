import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// is Route component necessary?
// import Route from './Route';
import Homepage from './Homepage';
import Profile from './Profile'
import Employment from './Employment';
import Education from './Education';
import Contact from './Contact';
import Destiny from './Destiny';

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/react-portfolio">
        <Route path="/" exact component={Homepage} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/employment" exact component={Employment} />
        <Route path="/education" exact component={Education} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/destiny" exact component={Destiny} />
      </BrowserRouter>
    </div>
  );
};

export default App;