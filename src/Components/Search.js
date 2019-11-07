import React, { Component } from 'react';
import meme1 from '../Images/meme1.png';
import meme2 from '../Images/meme2.png';
import meme3 from '../Images/meme3.png';
import meme4 from '../Images/meme4.png';
import meme5 from '../Images/meme5.png';
import meme6 from '../Images/meme6.png';



export default class Search extends Component {
       render (){
           return (
               
    // <div>
    //     <h1>This is the search page</h1>
    // </div>
    <div className="searchGrid">
      <div className="img_search">
        <img src= {meme1} alt="1st"/>
      </div>
      <div className="img_search">
        <img src= {meme2} alt="2nd"/>
      </div>
      <div className="img_search">
        <img src= {meme3} alt="3rd"/>
      </div>
      <div className="img_search">
        <img src= {meme4} alt="4th"/>
      </div>
      <div className="img_search">
        <img src= {meme5} alt="5th"/>
      </div>
      <div className="img_search">
        <img src= {meme6} alt="6th"/>
      </div>
  </div>     
    )
}
}