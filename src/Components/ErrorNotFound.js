import React, {Component} from 'react';
import Navbar from "./Navbar";
import Jumbotron from './Jumbotron';


export default class ErrorNotFound extends Component {
        render() {
            return (
            <div id='error'>
                <Navbar />
                <Jumbotron phrase="404 Page Not Found" subtitle="Not the droid you're looking for. Move along." />
            </div>
        );          
    }
}