import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Card from "../Card";
import Footer from "../Footer";
import "./Pages.css";
import ScrollToTop from 'react-scroll-up';
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';
{/*import Mailto from 'react-mailto.js';*/}

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron phrase="Contact" subtitle="Get in touch with me" />
                <hr />
                <div className="row">
                    <div className="col contactCol">
                        <Card source={require("./images/github.png")} text={<a href="https://github.com/trbrwstr" target="_blank"><button className="btn btn-dark">GitHub</button></a>} />
                        <Card source={require("./images/linkedin.png")} text={<a href="https://www.linkedin.com/in/trbrwstr" target="_blank"><button className="btn btn-dark">LinkedIn</button></a>} />
                        <Card source={require("./images/phone.png")} text={<button className="btn btn-dark">619-348-4424</button>} />
                        <Card source={require("./images/gmail.png")} text={<button className="btn btn-dark">trbrwstr@gmail.com</button>} />
                    </div>
                </div>
                <Footer />
                <ScrollToTop showUnder={700}>
                    <span><FaArrowCircleUp /></span>
                </ScrollToTop>
                </div>
        )
    }
}
export default App;