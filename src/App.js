import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";

const Page404 = ({ location }) => (
    <div>
      <h2>No match found for <code>{location.pathname}</code></h2>
    </div>
  );

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container mainContainer">
                <Route exact path="/" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/portfolio" component={Home} />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/portfolio" component={Home} />
                    <Route component={Page404} />
                </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
