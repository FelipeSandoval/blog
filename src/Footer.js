import React, { Component } from 'react';
import './Footer.scss';
import iconFooter from './assets/footer-logo.svg';
import { MdPhoneIphone, MdMailOutline  } from 'react-icons/md';

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isAtScrollBottom: false,
      componentHeigh: 0
    }
    this.handleScroll = (e) => {
      if((window.innerHeight + document.documentElement.scrollTop) >= document.body.scrollHeight){
        if(!this.state.isAtScrollBottom)this.setState({ isAtScrollBottom : true })
      }
      if((window.innerHeight + document.documentElement.scrollTop) <= (document.body.scrollHeight - this.state.componentHeigh)){
        if(this.state.isAtScrollBottom)this.setState({ isAtScrollBottom : false })
      }
    };
  }

  componentDidMount(){
    this.setState({ componentHeigh: document.querySelector('.Footer').clientHeight})
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    return (
      <div className='Footer' style={this.state.isAtScrollBottom ? {position : 'relative'} : {position : 'fixed'} }>
        <img src={iconFooter} alt=''/>
        <div className='contactInfo'>
          <span><MdPhoneIphone /> +5695555333</span>
          <span><MdMailOutline />contacto@carolafernandez.cl</span>
        </div>
      </div>
    )
  }
}