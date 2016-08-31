import React from 'react';
import ReactDOM from 'react-dom';
import * from ALLROUTERS from 'react-router';
var routes = require('./config/routes');

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
