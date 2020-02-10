import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Contacts from './Contacts';
import Posts from './Posts';
import Navigatior from '../components/navigatior';
import Footer from '../components/footer';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <Navigatior />
      <Route component={Home} exact path="/5xRuby" />
      <Route component={Contacts} path="/contacts" />
      <Route component={Posts} path="/posts" />
      <Footer />
    </Router>
  );
}

export default App;
