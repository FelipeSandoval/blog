import React, { Component } from 'react';
import './MyServices.scss';
import individual from './assets/psicoterapia-individual.jpg';
import sexologica from './assets/terapiaSexologica.jpg';
import gestaltica from './assets/psicoterapiaGestaltica.jpg';
import infantil from './assets/psicoterapiaInfantil.jpg';
import parejas from './assets/psicoterapiaParejas.jpg';
import ServiceImage from './ServiceImgComponent';

import { MdContentPaste } from 'react-icons/md';

export default class MyServices extends Component {
  render(){
    return (
      <div className='service-container'>
        <div className='a'>
          <h2><span><MdContentPaste/> MIS SERVICIOS</span></h2>
        </div>
        <div className='b service-image'> 
          <ServiceImage
            img={parejas} 
            text={'Psicoterapia de Parejas'}
          />
        </div>
        <div className='c service-image'>
          <ServiceImage
            img={infantil} 
            text={'Psicoterapia infantil'}
          />
        </div>
        <div className='d service-image'>
          <ServiceImage 
            img={individual}
            text={'Psicoterapia Individual'}
          />
        </div>
        <div className='e service-image'>
          <ServiceImage 
            img={sexologica}
            text={'Terapia sexológica'}
          />
        </div>
        <div className='f'>
          <ServiceImage 
            img={gestaltica}
            text={'Psicoterapia Gestáltica grupal'}
          />
        </div>
      </div>
    );
  }
}