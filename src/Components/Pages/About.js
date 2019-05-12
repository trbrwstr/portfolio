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
                <Jumbotron phrase="About Me" />
                <h3>Story</h3>
                <hr />
                <div className="row">
                    <div className="col">
                        <h4 className="bio">My name is Timothy Brewster,<br /> I'm a recently graduated Junior Developer well versed in managing projects, research, and time. I love collabrating with teams.
                        <br />Motivated and currently seeking a position as a Front-End Developer. </h4>
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
