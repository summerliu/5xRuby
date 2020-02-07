import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';

function App() {
    return (
        <Router>
            <Route component={Home} path='/'/>
        </Router>
    )
}

export default App;