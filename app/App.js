import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import routes from './config/routes';

import DEFAULT_IMPORT from './components/export-test';
import {someString, someObj} from './components/export-test';
import * as ALLTHINGS from './components/export-test';

console.log('I AM THE DEFAULT IMPORT', DEFAULT_IMPORT);
console.log(someString);
console.log(someObj);
console.log('ALL THINGS', ALLTHINGS);


ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
