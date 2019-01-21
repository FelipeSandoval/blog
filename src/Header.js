import  React, { Component  } from 'react';
import logo  from './assets/logo-caro.svg';
import './Header.scss';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

export default class Header extends Component{

  handleClick = () => {
    this.refs.child.refs.ContactForm.focus();
  }

  render() {
    return (
    <div className='header-container' id="outer-container">
      <div className='header-left' id="page-wrap">
        <img src={logo}  alt='logo'/>
      </div>
      <div>
        <div className='header-right'>
          <Link to='/'>Inicio</Link>
          <Link to='/acercaDeMi'>Sobre mí</Link>
          <Link to='/servicios'>Servicios</Link>
          <Link to='/articles'>Artículos</Link>
          <Link to='/formularioContacto'>Contacto</Link>
          <button className='button-default'>Agendar hora</button>
        </div>
      </div>
    </div>);
  }
}