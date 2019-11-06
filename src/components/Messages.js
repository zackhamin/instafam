import React, { Component } from 'react'
import MessagesHeader from './MessagesHeader'
import Chat from './Chat'

export default class Messages extends Component {
    render() {
        return (
            <div>
                <MessagesHeader/>
                <Chat/>
            </div>
        )
    }
}
