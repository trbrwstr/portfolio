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
                <Jumbotron phrase="About" subtitle="Get to know me"  />
                <h3>Story</h3>
                <hr />
                <div className="row">
                    <div className="col">
                        <h4 className="bio">My name is Timothy Brewster,<br />and I've grown in the last few years.<br />I'm a recent graduate of the Full-Time Web Development Bootcamp at the UCSD Extension.<br /> In that brief three-month period I've picked up and built the majority of skills and projects that you'll find on this site.<br />But I came away with more than that.</h4>
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
