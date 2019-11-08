import React, { Component } from 'react'
import heart1 from '../images/heart1.png'
import bubble from '../images/bubble.png'
import forward from '../images/forward.jpg'
import Liked from './Liked'

export default function Post(props) {
    return (
        <div className='post'>
            <div className="user">
                <div className="profileHolder">
                    <img className="profilePic" src={props.pfp} alt="" />
                    <p className="username"><b>{props.username}</b></p>
                </div>
                <p className="options"><b>...</b></p>
            </div>
            <div className="mainpost">
                <img src={props.postpic}></img>
            </div>
            <div className="bottombox">
                <div className="interactBox">
                    <Liked />
                    <img className="interactIcon" src={bubble} alt="comment" />
                    <img className="interactIcon" src={forward} alt="send" />
                </div>
                <div className="imageCaption">
                    <p><b>{props.username}:</b> {props.caption}</p>
                    <p className='greyedText'>{props.time} ago</p>
                </div>
            </div>
        </div>
    )

}
