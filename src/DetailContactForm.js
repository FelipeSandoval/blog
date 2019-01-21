import React, { Component } from 'react';
import { MapComponent } from './MapComponent';
import contactFormBanner from './assets/contactFormBanner.jpg';
import './GenericDetail.scss';

export default class DetailContactForm extends Component{
  render(){
    return(
      <div className='genericServiceContainer'>
        <div className='displayedImages'>
          <img src={contactFormBanner} alt=''/>
        </div>
        <div className='detailContainer'>
          <div className='detailResume contact-form-padding'>
            <h1 className='page-title'>Contacto</h1>
            <p className='contact-paragraph'>Si deseas agendar una hora y contactarte conmigo, puedes llenar el siguiente formulario.</p>
            <div className='contact-form'>
              <div className='input-form'>
                <label>Nombre</label>
                <input type='text'/>
              </div>

              <div className='input-form'>
                <label>Asunto</label>
                <input type='text'/> 
              </div>

              <div className='input-form'>
                <label>Email</label>
                <input type='text'/> 
              </div>

              <div className='input-form'>
                <label>Mensaje</label>
                <textarea/>
              </div>

              <button className='button-default'>Enviar</button>
            </div>
            <div className='mapSide'>
                <MapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0bJ_6HC9rD0uXKM4448jUVQ9fv5v8VKY&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}