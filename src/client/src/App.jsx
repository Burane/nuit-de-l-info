import React from 'react';
import './App.css';
import SignIn from './components/sign/SignIn'
import SignUp from './components/sign/SignUp'
import NavBar from './components/navbar/NavBar'
import {
    Switch,
    Route
} from "react-router-dom";
function App() {
    // Return the App component.
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/login">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/">
                    <h1>ROUTE DEFAULT</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default App;