import React from 'react';
import './ArticleItem.scss';

export const ArticleItem = (props) => 
  <div className='article-item'>
      <div className='article-item-image' style={ { backgroundImage: `url(${props.image})` } }>
      </div>
      <div className='article-item-content'>
          <span>
            <a  target="_blank" rel="noopener noreferrer" href={props.url}>{props.tag}</a> - {props.fecha}
            </span>
          <h5>{props.title}</h5>
          <p>{props.paragraph}</p>
      </div>
  </div>
