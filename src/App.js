import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {UserProvider} from './contexts/UserContext';
import Home from './pages/Home';
export default function App(){
    return(
        <UserProvider>
            <Router>
                <Switch>
                    <Route path='/sign-in'>
                        <SignIn/>
                    </Route>
                    <Route path='/sign-up'>
                        <SignUp/>
                    </Route>
                    <Route path='/' exact>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </UserProvider>
    );

}
