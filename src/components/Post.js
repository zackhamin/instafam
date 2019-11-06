import React, { Component } from 'react'
import '../Post.css'
import ted from '../images/ted.jpg'
import heart1 from '../images/heart1.png'
import bubble from '../images/bubble.png'
import forward from '../images/forward.jpg'


export default class Post extends Component {
    render() {
        return (
            <div>
                <div className="user">
                    <img className="userimg" src={ted} alt="" />
                    <h2 className="username">Ted</h2>
                    <h2 className="options">...</h2>
                </div>
                <div className="mainpost">
                </div>
                <div className="bottombar">
                    <img className="heart" src={heart1} alt="" />
                    <img className="bubble" src={bubble} alt="" />
                    <img className="forward" src={forward} alt="" />
                </div>
            </div>
        )
    }
}
