import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Feed from './Components/Feed/Feed';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/feed' exact component={Feed} />
      </Switch>
    </Router>
  );
}

export default App;
