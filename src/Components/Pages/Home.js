import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Picture from "../Picture";
import Footer from "../Footer";
import "./Pages.css";


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron phrase="Projects" />
                <h3>Team</h3>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/Dia.png")} alt="dia" github="https://github.com/DiaApp/Dia-App" deployed="https://diaapp.github.io/Dia-App/" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/SimpleFridge.png")} alt="Simple Fridge" github="https://github.com/Simple-Fridge/SIMPLE-FRIDGE" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/whistlr-black.png")} alt="Whistlr" github="https://github.com/kabdullah9/Whistlr" deployed="https://whistlr.herokuapp.com/" />
                    </div>
                </div>
                <br />
                <h3>Solo</h3>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/EatdaBurger.png")} alt="Eat Da Burger" github="" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Hangman.png")} alt="Hangman" github="" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Times.png")} alt="Times" github="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/RomaAntiqua.png")} alt="Roma Antiqua" github="" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Memory.png")} alt="Memory" github="" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Crystal.png")} alt="Crystal" github="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/Psychic.png")} alt="Psychic" github="" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Bamazon.png")} alt="Bamazon" github="" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/GIPHY.png")} alt="GIPHY" github="" />
                    </div>
                </div>
                <br />
                <h3>Personal</h3>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/500x500.png")} alt="Placeholder" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/500x500.png")} alt="Placeholder" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/500x500.png")} alt="Placeholder" />
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

export default Home;