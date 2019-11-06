import React, { Component } from 'react';
import WebsiteHeader from './WebsiteHeader';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navBar">
                <WebsiteHeader />
            </nav>
        )
    }
}
