import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Contacts from './Contacts';
import Posts from './Posts';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

function App() {
    return (
        <Router>
            <Navigation/>
            <Route component={Home} exact path='/'/>
            <Route component={Contacts} path='/contacts'/>
            <Route component={Posts} path='/posts'/>
            <Footer/>
        </Router>
    )
}

export default App;