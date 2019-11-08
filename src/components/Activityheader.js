import React, { Component } from 'react';
import backIcon from '../images/backArrow.png';
import { Link } from 'react-router-dom';


export default class ActivityHeader extends Component {
    render() {
        return (
            <div className="navigationBar">
                <p className="enditemsContainer">Activity</p>
                <Link to="/"><img src={backIcon} id="backIcon" className="navBarItems"/></Link>
            </div>
        )
    }
}
