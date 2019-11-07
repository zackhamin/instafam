import React, { Component } from 'react';
export default function Chat(props) {
    return (
        <div className="chat">
            <img className="profilePic" src={props.imageurl} />
            <div className="chatMessages">
                {props.username}:
                <p className="greyedText">{props.message} {props.time}</p>
            </div>
        </div>
    )
}
