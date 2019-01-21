import React from 'react';
import "./ServiceImgComponent.scss";

const ServiceImage = ({img, text, className}) => (
  <div className={`service-image ${className}`}>
    <img src={img} alt='' />
    <span>{text}</span>
  </div>  
)

export default ServiceImage;
