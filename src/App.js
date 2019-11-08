import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MessagesHeader from './components/MessagesHeader';
import SearchHeader from './components/SearchHeader';
import Navigation from './components/Navigation';
import Home from './components/Home';
import BottomBar from './components/BottomBar'
import Search from './components/Search'
import Messages from './components/Messages';
import Activity from './components/activity'
import ActivityHeader from './components/Activityheader';


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
                                <BottomBar/>
                            </div>
                        } />
                        <Route exact path='/Messages' render={() =>
                            <div>
                                <MessagesHeader/>
                                <Messages />
                                <BottomBar/>
                            </div>
                        } />
                        <Route exact path='/Search' render={() =>
                            <div>
                                <SearchHeader />
                                <Search/>
                                <BottomBar/>
                            </div>
                        } />
                        <Route exact path='/activity' render={() =>
                            <div>
                                <ActivityHeader />
                                <Activity />
                                <BottomBar/>
                            </div>
                        } />

                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

