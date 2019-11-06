import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Messages from './components/Messages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' render={() =>
                            <div>
                                <Navigation />
                                <Home />
                            </div>
                        } />
                        <Route exact path='/Messages' render={() =>
                            <Messages />
                        } />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
