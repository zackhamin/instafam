
import React from 'react';
import './App.css';
import BottomBar from './Components/BottomBar'
import Search from './Components/Search'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' render={() =>
                            <div>
                                {/* <Navigation />
                                <Home /> */}
      <h1>This is the home page</h1>
                                <BottomBar/>
                            </div>
                        } />
                        <Route exact path='/Search' render={() =>
                            // <Messages />
                            <div>
                            <Search/>
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