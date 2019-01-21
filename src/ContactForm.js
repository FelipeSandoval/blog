import React ,{ Component } from 'react';
import './ContactForm.scss';
import { MapComponent } from './MapComponent';
import { MdMailOutline } from 'react-icons/md';

export default class ContactForm extends Component{
  render(){
    return(
      <div className='ContactForm' ref="ContactFormRef">
          <h2><span><MdMailOutline color='#86b7a4' style={{'marginRight': '1rem'}} />Contacto</span></h2>
        <div className='FormSide'>
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

        <div className='MapSide'>
          <MapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0bJ_6HC9rD0uXKM4448jUVQ9fv5v8VKY&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>

      </div>
    )
  }
}