import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Card from "../Card";
import Footer from "../Footer";
import "./Pages.css";
import ScrollToTop from 'react-scroll-up';
{/*import Mailto from 'react-mailto.js';*/}

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron phrase="Get In Touch" />
                <hr />
                <div className="row">
                    <div className="col contactCol">
                        <Card source={require("./images/gmail.png")} text={<a href="trbrwstr@gmail.com" target="_blank"><button className="btn btn-dark">Email</button></a>} />
                        <Card source={require("./images/github.png")} text={<a href="https://github.com/trbrwstr" target="_blank"><button className="btn btn-dark">GitHub</button></a>} />
                        <Card source={require("./images/linkedin.png")} text={<a href="https://www.linkedin.com/in/trbrwstr" target="_blank"><button className="btn btn-dark">LinkedIn</button></a>} />
                        <Card source={require("./images/phone.png")} text={<a href="619-348-4424"><button className="btn btn-dark">619-348-4424</button></a>} />
                    </div>
                </div>
                <Footer />
                <ScrollToTop showUnder={700}>
  <span>UP</span>
</ScrollToTop>
            </div>
        )
    }
}

export default App;