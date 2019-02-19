import React, { Component } from 'react';
import image from './assets/curriculum.png';
import { withRouter } from 'react-router-dom';
import './AboutMe.scss';

class AboutMe extends Component {
  constructor(props){
    super(props);

    this.redirectToTarget = this.redirectToTarget.bind(this);
  }

  redirectToTarget = () => {
    this.props.history.push(`/acercaDeMi`);
  }

  render(){
    return(
      <div className='AboutMe-container'>
        <img src={image} alt='AboutMePicture' />
        <div className='right-description'>
          <h2>Sobre Mí</h2>
          <p>Con cerca de 8 años trabajando en consulta particular. Muchas historias han transitado por este lugar, dandome el honor de poder presenciar importante procesos de crecimiento personal. Cuando esto sucede, es difícil no amar lo que se hace…</p>
          <button className='button-secondary' onClick={this.redirectToTarget}>Conoce mi historia</button>
        </div>
      </div>
    )
  }
}

export default withRouter(AboutMe);