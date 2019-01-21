import React, { Component } from 'react';
import GenericDetail from './GenericDetail';
import aboutMe from './assets/aboutMe.jpg';

export default class DetailAboutMe extends Component{
  render(){
    return(
      <GenericDetail 
          image={aboutMe}
        />
    )
  }
}