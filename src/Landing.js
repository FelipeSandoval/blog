import React, { Component } from 'react';
import AboutMe from './AboutMe';
import MyServices from './MyServices';
import MyArticles from './MyArticles';
import  axios from 'axios';
import moment from 'moment';
import ContactForm from './ContactForm';
import './Landing.scss';

class Landing extends Component {
  constructor(props){
    super(props)

    this.getArticles = this.getArticles.bind(this);
    this.parseParagraph = this.parseParagraph.bind(this);
    this.parseDate = this.parseDate.bind(this);
    this.state = {
      articles: []
    }
  }

  getArticles(items){
    return items.slice(0, 4).map((element, index) => {
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
        this.setState({articles: this.getArticles(response.data.items) })
      }, (err) => {
        console.log(err);
      });
  }


  render() {
    return (
      <div>
        <AboutMe />
        <MyServices />
         <MyArticles 
          articles={ this.state.articles }
          />
        <ContactForm />
      </div>
    );
  }
}

export default Landing;
