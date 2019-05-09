import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import './MyServices.scss';
import individual from './assets/psicoterapia-individual.jpg';
import sexologica from './assets/terapiaSexologica.jpg';
import gestaltica from './assets/psicoterapiaGestaltica.jpg';
import gestalticaSmall from  './assets/psicoterapiaGestalticaSmall.jpg';
import infantil from './assets/psicoterapiaInfantil.jpg';
import parejas from './assets/psicoterapiaParejas.jpg';
import ServiceImage from './ServiceImgComponent';

import { MdContentPaste } from 'react-icons/md';

class MyServices extends Component {

  routeChange = (newPath) => {
    this.props.history.push(newPath)
  }

  render(){
    let url ={
      psicoteriaInfantil: '/psicoteriaInfantil',
      terapiaSexologa: '/terapiaSexologa',
      terapiaParejas: '/terapiaParejas',
      psicoterapiaGestalticaGrupal: '/psicoterapiaGestalticaGrupal',
      psicoterapiaIndividual: '/psicoterapiaIndividual'
    }
    return (
      <div className='service-container'>
        <div className='a'>
          <h2><span><MdContentPaste/> MIS SERVICIOS</span></h2>
        </div>
        <div className='b service-image'> 
          <ServiceImage
            callBack={this.routeChange}
            url={url.terapiaParejas}
            img={parejas} 
            responsiveImage={parejas}
            text={'Psicoterapia de Parejas'}
          />
        </div>
        <div className='c service-image'>
          <ServiceImage
            callBack={this.routeChange}
            url={url.psicoteriaInfantil}
            img={infantil}
            responsiveImage={infantil}
            text={'Psicoterapia infantil'}
          />
        </div>
        <div className='d service-image'>
          <ServiceImage 
            callBack={this.routeChange}
            url={url.psicoterapiaIndividual}
            img={individual}
            responsiveImage={individual}
            text={'Psicoterapia Individual'}
          />
        </div>
        <div className='e service-image'>
          <ServiceImage
            callBack={this.routeChange}
            url={url.terapiaSexologa}
            img={sexologica}
            responsiveImage={sexologica}
            text={'Terapia sexológica'}
          />
        </div>
        <div className='f'>
          <ServiceImage
            callBack={this.routeChange}
            url={url.psicoterapiaGestalticaGrupal}
            img={gestaltica}
            responsiveImage={gestalticaSmall}
            text={'Psicoterapia Gestáltica grupal'}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(MyServices);