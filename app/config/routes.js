import React from 'react';
import * as ALLROUTERS from 'react-router'; //ALLROUTERS represents all the exports out of react-router bundled into one object
import {Router} from 'react-router'; //Instead of accessing Router from your * import ALLROUTERS.ROUTER, you can do this
//It's like saying, from everything coming out of react-router - { } - give me this specific piece = { Router }
//Now, Router is available in your file as a variable.

console.log(ALLROUTERS); //Check this out in the console to see what something like that looks like

//var Router = ALLROUTES.ROUTER; 
//below, you don't have Router defined yet, as far as the file is concerned
//it's undefined - so something like this is needed



var Main = require('../components/Main');
var Home = require('../components/Home');
var Route = Router.Route;

module.exports = (
  <Route path="/" component={Main}>

  </Route>
);
