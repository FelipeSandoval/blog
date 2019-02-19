import React ,{ Component } from 'react';
import './ContactForm.scss';
import { MapComponent } from './MapComponent';
import { MdMailOutline } from 'react-icons/md';
import ContactFormComponent from './ContactFormComponent';

export default class ContactForm extends Component{

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }


  render(){
    return(
      <div className='ContactForm' ref="ContactFormRef">
        <div className='ContactForm-header'>
          <h2><span><MdMailOutline color='#86b7a4' style={{'marginRight': '1rem'}} />Contacto</span></h2>
        </div>
          <div className='ContactForm-container'>
            <div className='FormSide'>
              <ContactFormComponent />
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
      </div>
    )
  }
}