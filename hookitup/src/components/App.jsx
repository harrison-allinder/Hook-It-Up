import React from 'react'

import {
    BrowserRouter as Router,
    Switch,                    //This router is handling routing all of the links
    Route
} from "react-router-dom";

import Users from "./Users";
import SingleUser from "./SingleUser.jsx";

function App() {   //makes a router and an switch
    return (
        <Router>
            <nav>
                Hook it up bruh!!!
            </nav>

            <Switch>
                <Route exact path="/" component={Users} />
                <Route path="/:id/details" component={SingleUser} />
            </Switch>
        </Router>


    );
}
export default App