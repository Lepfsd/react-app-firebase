import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Counter from './Counter';
import App from './App';
import Platillos from './Platillos';
import Bebidas from './Bebidas';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const routes = (
  <Router>
    <div>
      <App>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/platillos" component={Platillos}/>
          <Route path="/bebidas" component={Bebidas}/>
        </Switch>
      </App>
    </div>
</Router>
);

ReactDOM.render(
  routes,
    document.getElementById('root')
);

/*

*/