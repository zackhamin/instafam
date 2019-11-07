import React, { Component } from 'react';
import backIcon from '../images/backArrow.png';
import videoChatIcon from '../images/videoChatIcon.png'
import newMessageIcon from '../images/newMessageIcon.png';
import { Link } from 'react-router-dom';


export default class MessagesHeader extends Component {
    render() {
        return (
            <div className="navigationBar">
                <Link to="/"><img src={backIcon} id="backIcon" className="navBarItems"/></Link>
                <Link to="/"><p className="linkTo">samwisegamgee</p></Link>
                <div className="enditemsContainer">
                    <Link to="/VideoChat"><img src={videoChatIcon} alt="Video chat" id="videoChat" className="navBarItems"/></Link>
                    <Link to="/NewMessage"><img src={newMessageIcon} alt="New message" id="newMessage" className="navBarItems"/></Link>
                </div>
            </div>
        )
    }
}
