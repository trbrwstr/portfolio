import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Picture from "../Picture";
import Footer from "../Footer";
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';
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
                        <Picture source={require("./images/SimpleFridge.png")} alt="Simple Fridge" github="https://github.com/Simple-Fridge/SIMPLE-FRIDGE" deployed="https://simple-fridge.herokuapp.com/" />
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
                        <Picture source={require("./images/EatdaBurger.png")} alt="Eat Da Burger" github="https://github.com/trbrwstr/burger" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Hangman.png")} alt="Hangman" github="https://github.com/trbrwstr/hangman" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Times.png")} alt="Times" github="https://github.com/trbrwstr/News-Scrape" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/RomaAntiqua.png")} alt="Roma Antiqua" github="https://github.com/trbrwstr/roma-antiqua" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Memory.png")} alt="Memory" github="https://github.com/trbrwstr/memory-game" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Crystal.png")} alt="Crystal" github="https://github.com/trbrwstr/crystal-game" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/Psychic.png")} alt="Psychic" github="" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Bamazon.png")} alt="Bamazon" github="https://github.com/trbrwstr/bamazon" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/GIPHY.png")} alt="GIPHY" github="https://github.com/trbrwstr/Giphy-App" />
                    </div>
                </div>
                <br />
            
                {/*<h3>Personal</h3>
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
                </div>*/}
                
                <Footer />
                <ScrollToTop showUnder={700}>
                    <span><FaArrowCircleUp /></span>
                </ScrollToTop>
                </div> 
        )
    }
}

export default Home;