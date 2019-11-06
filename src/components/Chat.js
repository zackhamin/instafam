import React, { Component } from 'react';
import profilePic from '../images/pfpExample.jpg';
export default class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <img className="profilePic" src={profilePic}/>
                Chat
            </div>
        )
    }
}
