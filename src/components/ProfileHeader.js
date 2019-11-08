import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileimage from '../images/profileimage.jpg';

export default class ProfileHeader extends Component {
    render() {
        return (
            <div>
                <div className="profileName"><h1>HarryBoyd1</h1></div>

                <div className="profileImageContainer"><img src={profileimage} alt="pfimage"/>
                        <div className="stats"><h1>248</h1></div>
                        <div className="stats"><h1>1M</h1></div>
                        <div className="stats"><h1>248</h1></div> 
                    </div>
                   
                                   
            </div>

    
        )
    }
}              

                  

                    
                    
                
  
