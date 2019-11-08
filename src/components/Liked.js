import React, { Component } from 'react'
import heart1 from '../images/heart1.png'
import heart2 from '../images/heart2.png'

export default class Liked extends Component {
    state = {
        isLiked: false,
    }
    switchLikedHandler = () => {
        if (this.state.isLiked) {
            this.setState({
                isLiked: false,
            })
        }
        else {
            this.setState({
                isLiked: true,
            })
        }
    }
    render() {
        return (
            <img className="interactIcon" onClick={() => this.switchLikedHandler()} src={this.state.isLiked ? heart2 : heart1} alt="like" />
        )
    }
}
