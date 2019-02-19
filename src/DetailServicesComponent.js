import React, { Component } from 'react';
import './DetailServicesComponent.scss';
import contactFormBanner from './assets/contactFormBanner.jpg';
import ServiceImage from './ServiceImgComponent';
import individual from './assets/psicoterapia-individual.jpg';
import sexologica from './assets/terapiaSexologica.jpg';
import gestaltica from './assets/psicoterapiaGestalticaSmall.jpg';
import infantil from './assets/psicoterapiaInfantil.jpg';
import parejas from './assets/psicoterapiaParejas.jpg';
import serviciosSmall from './assets/serviciosSmall.jpeg';

export default class DetailServicesComponent extends Component{


  routeChange = (newPath) => {
    this.props.history.push(newPath)
  }

  render(){
    let text = {
      title: 'Servicios',
    }
    let url ={
      psicoteriaInfantil: '/psicoteriaInfantil',
      terapiaSexologa: '/terapiaSexologa',
      terapiaParejas: '/terapiaParejas',
      psicoterapiaGestalticaGrupal: '/psicoterapiaGestalticaGrupal',
      psicoterapiaIndividual: '/psicoterapiaIndividual'
    } 
    return(
      <div className='genericServiceContainer'>
          <div className='displayedImagesDesktop'>
            <img src={contactFormBanner} alt='alt'/>
          </div>
          <div className='displayedImagesMobile'>
            <img src={serviciosSmall} alt='alt'/>
          </div>
          <div className='detailContainer'>
            <div className='detailResume '>
                <h1>{text.title}</h1>
                <p>La consulta se encuentra ubicada en el Barrio Italia, es un espacio acogedor, pensado para cuidar el proceso y comodidad de los pacientes. En este lugar podrás acceder a los siguientes servicios:</p>
            </div>
            <div className='service-list'>
                  <ServiceImage
                    callBack={this.routeChange}
                    url={url.terapiaParejas}
                    className='topLeft'
                    img={parejas} 
                    responsiveImage={parejas}
                    text={'Psicoterapia de Parejas'}
                  />
                  <ServiceImage
                    className='topRight'
                    callBack={this.routeChange}
                    url={url.psicoterapiaIndividual}
                    img={individual}
                    responsiveImage={individual}
                    text={'Psicoterapia Individual'}
                  />
                  <ServiceImage
                    className='bottomLeft'
                    callBack={this.routeChange}
                    url={url.terapiaSexologa}
                    img={sexologica}
                    responsiveImage={sexologica}
                    text={'Terapia sexológica'}
                  />
                  <ServiceImage
                    className='bottomRight'
                    callBack={this.routeChange}
                    url={url.psicoterapiaGestalticaGrupal}
                    img={gestaltica}
                    responsiveImage={gestaltica}
                    text={'Psicoterapia Gestáltica grupal'}
                  />
                  <ServiceImage
                    className='sideImage'
                    callBack={this.routeChange}
                    url={url.psicoteriaInfantil}
                    img={infantil}
                    responsiveImage={infantil}
                    text={'Psicoterapia infantil'}
                  />
                </div>
          </div>
        </div>
    )
  }
}