import React from 'react';
import "./ServiceImgComponent.scss";

const ServiceImage = ({img, text, className, url, callBack, responsiveImage}) => (
  <div 
    className={`service-image ${className} ${callBack ? ' hover ' : ''}`}
    onClick={() => callBack(url)} 
    style={callBack ? {cursor: 'pointer'} : {cursor: 'default'}}
    >
    <img className='service-image-img-desktop' src={img} alt='' />
    <img className='service-image-img-mobile' src={responsiveImage} alt='' />
    <span>{text}</span>
  </div>  
)

export default ServiceImage;
