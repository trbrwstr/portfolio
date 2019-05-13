import React, {Component} from 'react';

export default class ErrorNotFound extends Component {
        render() {
            return (
                <div id="error">
                    <h1 className="notFoundTitle">404 Page Not Found</h1>
                    <p className="notFoundDesc">Nothing to see here. Move Along
                    </p>
                </div>
            );
        }

}