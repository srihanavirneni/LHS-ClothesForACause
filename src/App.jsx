import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import MainNavigation from './components/layouts/Navigation/MainNavigation';
import MainFooter from './components/layouts/Footer/MainFooter';

import Home from './pages/Home/Home';
import About from './pages/About';
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
                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/sponsors" exact>
                        <Sponsors />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
            <MainFooter />
        </Router>
    );
};

export default App;
