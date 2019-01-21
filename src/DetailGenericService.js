import React, { Component } from 'react';
import './GenericDetail.scss';

export default class ServicesDetails extends Component{
  render(){
    let serviceDetails = this.props.serviceDetail.map((element) => {
      let key = Object.keys(element)[0];
      let ele =  key !== 'note' ? 
      <p>{key}:
        <b> {element[key]}</b>
      </p>:
      <p>{element[key]}</p>
      return ele;
    });
    return(
      <div className='genericServiceContainer'>
          <div className='displayedImages'>
            <img src={this.props.image} alt='alt'/>
          </div>
          <div className='detailContainer'>
            <div className='detailResume '>
                <h1>{this.props.title}</h1>
                <p>{this.props.paragraph}</p>
                  <div className='ServiceDetail'>
                      {serviceDetails}
                  </div>
                  <button className='button-default'>Agendar hora</button>
            </div>
          </div>
        </div>
    )
  }
}