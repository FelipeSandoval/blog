import React, { Component } from 'react';
import './DetailServicesComponent.scss';
import contactFormBanner from './assets/contactFormBanner.jpg';
import ServiceImage from './ServiceImgComponent';
import individual from './assets/psicoterapia-individual.jpg';
import sexologica from './assets/terapiaSexologica.jpg';
import gestaltica from './assets/psicoterapiaGestalticaSmall.jpg';
import infantil from './assets/psicoterapiaInfantil.jpg';
import parejas from './assets/psicoterapiaParejas.jpg';

export default class DetailServicesComponent extends Component{
  render(){
    let text = {
      title: 'Servicios',
      paragraph: 'Texto introductorio, queda definir el hover de esta sección y la imagen del banner :D'
    }
    return(
      <div className='genericServiceContainer'>
          <div className='displayedImages'>
            <img src={contactFormBanner} alt='alt'/>
          </div>
          <div className='detailContainer'>
            <div className='detailResume '>
                <h1>{text.title}</h1>
                <p>{text.paragraph}</p>
            </div>
            <div className='service-list'>
                  <ServiceImage
                    className='topLeft'
                    img={parejas} 
                    text={'Psicoterapia de Parejas'}
                  />
                  <ServiceImage
                    className='topRight'
                    img={individual}
                    text={'Psicoterapia Individual'}
                  />
                  <ServiceImage
                    className='bottomLeft'
                    img={sexologica}
                    text={'Terapia sexológica'}
                  />
                  <ServiceImage
                    className='bottomRight'
                    img={gestaltica}
                    text={'Psicoterapia Gestáltica grupal'}
                  />
                  <ServiceImage
                    className='sideImage'
                    img={infantil} 
                    text={'Psicoterapia infantil'}
                  />
                </div>
          </div>
        </div>
    )
  }
}