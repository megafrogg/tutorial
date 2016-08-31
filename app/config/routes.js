import React from 'react';
import {Router, Route} from 'react-router';



var Main = require('../components/Main');
var Home = require('../components/Home');
var route = Router.Route;

module.exports = (
  <Route path="/" component={Main}>

  </Route>
);
