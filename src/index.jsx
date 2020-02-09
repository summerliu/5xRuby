'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

// callback function for HMR
function initialApplication() {
    // use commonJS require here because webpack HMR can't handle ES6 import
    const App = require('./pages/App').default;
    // render the app and save the new root element
    ReactDOM.render(<App/>, document.getElementById('app'));
}

initialApplication();

// If this is webpack-dev-server, set up HMR
if (module.hot) {module.hot.accept('./pages/App', initialApplication);}
