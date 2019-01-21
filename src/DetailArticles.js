import React, { Component } from 'react';
import MyArticles from './MyArticles';
import  axios from 'axios';
import moment from 'moment';
import { ArticleItem } from './ArticleItem';
import './DetailArticles.scss';

export default class DetailArticles extends Component{
  constructor(props){
    super(props);
    this.getArticles = this.getArticles.bind(this);
    this.parseParagraph = this.parseParagraph.bind(this);
    this.parseDate = this.parseDate.bind(this);
    this.state = {
      articles: []
    }
  }

  getArticles(items){
    return items.map((element, index) => {
      return {
        tag: element.categories,
        fecha: this.parseDate(element.pubDate),
        title: element.title,
        image: element.thumbnail,
        url: element.link,
        paragraph: this.parseParagraph(element.description, index)
      }
    });
  }

  parseParagraph(text, position){
    let a = text.split('<p>');
    return a.splice( position > 0 ? 1 : 2, 5 ).join(' ').replace(/<.*?>/g, '');
  }

  parseDate(date){
    return moment(date).format('DD MMMM YYYY');
  }

  componentDidMount(){
    axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${process.env.REACT_APP_MEDIUM_CLIENT_USERNAME}`)
      .then((response) => {
        this.setState({ 
          articles: this.getArticles(
            response.data.items.slice(0, 4)
            ),
            secondary: this.getArticles(
            response.data.items.slice(4, response.data.items.length -1 
              ))
        })
      }, (err) => {
        console.log(err);
      });
  }

  componentDidUpdate(){
    console.log(this.state);
  }


  render(){
    let secondaryList = this.state.secondary ? 
        this.state.secondary.map((item) => (
          <ArticleItem 
            image={item.image}
            url={item.url}
            tag={item.tag}
            title={item.title}
            paragraph={item.paragraph}
            fecha={item.fecha}
          />
        )) : [];
    return(
      <div className='detailArticles'>
        <MyArticles 
          articles={ this.state.articles }
        />
        <div className='detailArticles-list'>
          {secondaryList}
        </div>
      </div>
    );
  }
}