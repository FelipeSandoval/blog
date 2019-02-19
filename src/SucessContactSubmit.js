import React from 'react';
import sendSVG from './assets/send.svg';
import './SucessContactSubmit.scss';

const SucessContactSubmit = (props) => 
  <div className='SucessContactSubmit-container'>
    <img src={sendSVG}/>
    <h5>¡Hola!</h5>
    <p>Tu mensaje se envió correctamente, recibirás una respuesta en un plazo menor a 24 horas hábiles.</p>
  </div>

export default SucessContactSubmit;