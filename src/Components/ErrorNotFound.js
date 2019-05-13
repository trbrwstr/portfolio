import React, {Component} from 'react';
import Navbar from "./Navbar";
import Jumbotron from './Jumbotron';


export default class ErrorNotFound extends Component {
        render() {
            return (
            <div id='error'>
                <Navbar />
                <Jumbotron phrase="404 Page Not Found" subtitle="Well, I don't know how you got here." />
            </div>
        );          
    }
}