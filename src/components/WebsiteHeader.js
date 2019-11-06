import React, { Component } from 'react';
import instaTitle from '../images/instaLogo.png';
import cameraIcon from '../images/camera.png';
import tvIcon from '../images/instagramTvIcon.png';
import messageIcon from '../images/instaDirectMessageIcon.jpg';
import { Link } from 'react-router-dom';


export default class WebsiteHeader extends Component {
    render() {
        return (
            <div className="navigationBar">
                <Link to="/Camera"><img src={cameraIcon} id="cameraIcon" className="navBarItems"/></Link>
                <Link to="/"><img src={instaTitle} alt="Instagram title" id="instaTitle" className="navBarItems"/></Link>
                <div>
                    <Link to="/InstagramTV"><img src={tvIcon} alt="Instagram tv" id="instaTv" className="navBarItems"/></Link>
                    <Link to="/Messages"><img src={messageIcon} alt="Instagram messages" id="instaMessages" className="navBarItems"/></Link>
                </div>
            </div>
        )
    }
}
