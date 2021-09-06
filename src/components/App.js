import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h2>Neon Grenade</h2>
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