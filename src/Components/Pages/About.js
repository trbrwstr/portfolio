import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Footer from "../Footer";
import "./Pages.css";
import IconImage from "../IconImage";
import html from "./icons/html.png";
import bootstrap from "./icons/bootstrap.png";
import css from "./icons/css.png";
import github from "./icons/github.png";
import handlebars from "./icons/handlebars.png";
import javascript from "./icons/javascript.png";
import mongodb from "./icons/mongodb.png";
import mysql from "./icons/mysql.png";
import node from "./icons/nodejs.png";
import react from "./icons/React.png";
import jquery from "./icons/jquery.png";
import express from "./icons/express.png";
import ScrollToTop from 'react-scroll-up';
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';


class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron phrase="Timothy Brewster" subtitle="Clean Functional Design"/>
                <hr />
                <div className="row">
                    <div className="col">
                        <h4 className="bio">Hey everyone, Tim here. Welcome to my website. Here you'll find my portfolio,
                         contact info, and more about me.<br /><br />
                        My main motivation in life is to leave the world in better condition than I found it. 
                        I believe that properly applied technology will be one of the best ways in achieving this.<br />
                        As a student at UCSD's Coding Bootcamp, I learned how to create full MERN 
                        stack web applications. Now, I study Computer Science at University of the People. 
                        Where I most recently started learning Python.<br /><br />
                        {/*I haven't always been this focused. All journeys contain struggle. My myth is no different.
                        I was diagnosed with anxiety, adhd, and clinical depression at a very young age. 
                        For as long as I can remember, my life was a never-ending cycle of negativity.
                        But this story isn't about pity. Its about perseverence.
                        
                        */}
                        

                        </h4>
                        
                    </div>
                </div>
                <h3 className="skills">Skills</h3>
                <hr />
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-sm-6">
                                <IconImage source={html} alt="html" />
                                <IconImage source={bootstrap} alt="bootstrap" />
                                <IconImage source={css} alt="css" />
                            </div>
                            <div className="col-sm-6">
                                <IconImage source={handlebars} alt="handlebars" />
                                <IconImage source={github} alt="github" />
                                <IconImage source={javascript} alt="javascript" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-sm-6">
                                <IconImage source={jquery} alt="jquery" />
                                <IconImage source={mongodb} alt="mongodb" />
                                <IconImage source={express} alt="express" />
                            </div>
                            <div className="col-sm-6">
                                <IconImage source={react} alt="react" />
                                <IconImage source={node} alt="node" />
                                <IconImage source={mysql} alt="mysql" />
                            </div>
                        </div>
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
