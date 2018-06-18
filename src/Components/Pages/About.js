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
import mern from "./icons/mern.jpg";
import mongodb from "./icons/mongodb.png";
import mysql from "./icons/mysql.png";
import node from "./icons/nodejs.png";
import react from "./icons/React.png";
import jquery from "./icons/jquery.png";
import express from "./icons/express.png";


class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron phrase="Placeholder" subtitle="Placeholder 2: Electric Boogaloo" />
                <h3>Story</h3>
                <hr />
                <div className="row">
                    <div className="col">
                        <h4 className="bio">I am a recent graduate of the UCSD Full-time Web Development Bootcamp.</h4>
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
            </div>
        )
    }
}

export default App;
