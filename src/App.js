import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default function App(){
    return(
        <Router>
            <Switch>
                <Route path='/'>
                    <SignIn/>
                </Route>
            </Switch>
        </Router>
    );

}
