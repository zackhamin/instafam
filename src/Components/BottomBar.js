
import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';



export default class BottomBar extends Component {
  render() {
    return (
      <div>
      

      <div className="BottomBar">

          <div>
            <div className="logos">
              <div className="img_wrap">
              <Link to="/"><i className="fas fa-home icon"></i></Link>
              </div>

              <div className="img_wrap">
                <Link to="/Search"><i className="fas fa-search icon"></i></Link>
              </div>

              <div className="img_wrap">
                <i className="far fa-plus-square icon"></i>
              </div>
              <div className="img_like">
                <i className="far fa-heart icon"></i>
              </div>
              <div className="img_wrap">
                <i className="far fa-user icon"></i>
           </div>   </div>
            </div>
</div>
      </div>
      


    )
  }
}