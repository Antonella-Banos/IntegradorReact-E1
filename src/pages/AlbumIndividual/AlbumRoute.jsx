import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import AlbumDetails from './AlbumDetails';
import { albumes } from './albumes.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <h1>Home Page</h1>} />
        <Route exact path="/album/:id" component={AlbumDetails} />
        <Route exact path="/albums">
          {albumes.map((album) => (
            <AlbumCard key={album.id} {...album} />
          ))}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
