import React from 'react';
import '../App.css';
import sellbtn from '../images/sellbtn.png';

export default class Sellbtn extends React.Component {
  render(){
    return(
      <a href="/createadd">
      {/* <button className="sellbtn">Sell</button> */}
      <img src={sellbtn} />
      </a>
    )
  }
}
