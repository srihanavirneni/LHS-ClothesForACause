import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import MainNavigation from './components/layouts/Navigation/MainNavigation';

import Home from './pages/Home';
import Sponsors from './pages/Sponsors';

import './App.css';

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <main className="app-content">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/sponsors" exact>
                        <Sponsors />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    );
};

export default App;
