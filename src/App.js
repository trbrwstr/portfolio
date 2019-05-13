import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container mainContainer">
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/portfolio" component={Home} />
                    <Route path="*" component={ErrorNotFound} />
                </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
