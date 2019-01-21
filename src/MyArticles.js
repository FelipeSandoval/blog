import React, { Component } from 'react';
import './MyArticles.scss';


export default class MyArticles extends Component{

  render (){
    let mainArticle = this.props.articles.shift();
    let articles = this.props.articles.map((cv, i) => (
      <div className='articles-list-item' key={i}>
        <div className='sideImage' style={{'backgroundImage': `url(${cv.image})`}} alt='theme'>
        </div>
        <div className='content'>
          <span><a target="_blank" rel="noopener noreferrer" href={cv.url}>{cv.tag}</a> - {cv.fecha}</span>
          <h5>{cv.title}</h5>
          <p>{cv.paragraph}</p>
        </div>
      </div>
    ));
    

    return(
      this.props.articles.length > 0 ? <div className='articles'>
        <h2>ARTÍCULOS</h2>
        <div className='articles-container'>
          <div className='articles-list-main'>
            <div className='articles-list-main-background' style={ { backgroundImage: `url(${mainArticle.image})` } } />
            <div className='content'>
              <span><a  target="_blank" rel="noopener noreferrer" href={mainArticle.url}>{mainArticle.tag}</a> - {mainArticle.fecha}</span>
              <h5>{mainArticle.title}</h5>
              <p>{mainArticle.paragraph}</p>
            </div>
          </div>
          <div className='articles-list'>
              {articles}
          </div>
        </div>
      </div> : 
      <div>
        No Existen Articulos
      </div> 
    )
  }
}