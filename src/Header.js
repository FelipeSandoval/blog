import  React, { Component, Fragment  } from 'react';
import logo  from './assets/logo-caro.svg';
import burguer from './assets/burguer.svg';
import './Header.scss';
import { NavLink, withRouter } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Modal from 'react-responsive-modal';
import ContactFormComponent from './ContactFormComponent';

class Header extends Component{
  constructor(props){
    super(props);

    this.state = {
      isMenuOpen: false,
      scrollAtTop: true,
      componentHeigh: 0,
      isModalOpen: false
    };
  }

  redirectToHome = () => {
    this.props.history.push(`/landing`);
  }


  handleClick = () => {
    this.refs.child.refs.ContactForm.focus();
  }

  onOpenModal = () => {
    this.setState({ isModalOpen: true });
  };
 
  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const modalStyles = {
      modal: {
        width: '100%',
        borderRadius: '10px'
      }
    }


    return (
    <Fragment>
    <div className='header-container-desktop'>
      <div className='header-left'>
        <img className='header-logo' src={logo} onClick={this.redirectToHome} alt='logo'/>
      </div>
      <div>
        <div className='header-right'>
          <NavLink  exact activeClassName='is-active' to='/landing'>Inicio</NavLink>
          <NavLink activeClassName='is-active' to='/acercaDeMi'>Sobre mí</NavLink>
          <NavLink activeClassName='is-active' to='/servicios'>Servicios</NavLink>
          <NavLink activeClassName='is-active' to='/articles'>Artículos</NavLink>
          <NavLink activeClassName='is-active' to='/formularioContacto'>Contacto</NavLink>
          <button 
            className='button-default'
            onClick={this.onOpenModal}
            >Agendar hora</button>
        </div>
      </div>
    </div>
    
    <div className='header-container-mobile'>
      <div className='header-left'>
        <Menu 
          outerContainerId={ "outer-container" } 
          pageWrapId={ "page-wrap" }
          customBurgerIcon={ <img alt='burger' src={burguer} /> }
          isOpen={this.state.isMenuOpen}
        >
          <NavLink  exact  activeClassName='is-active' to='/landing'>Inicio</NavLink>
          <NavLink activeClassName='is-active' to='/acercaDeMi'>Sobre mí</NavLink>
          <NavLink activeClassName='is-active' to='/servicios'>Servicios</NavLink>
          <NavLink activeClassName='is-active' to='/articles'>Artículos</NavLink>
          <NavLink activeClassName='is-active' to='/formularioContacto'>Contacto</NavLink>
          <button 
            className='button-default' 
            onClick={this.onOpenModal}
          >Agendar hora</button>
        </Menu>
        <img 
          className='header-logo' 
          onClick={this.redirectToHome} src={logo} id="page-wrap"  alt='logo' 
          />
      </div>
    </div>
      <Modal open={this.state.isModalOpen} styles={modalStyles} onClose={this.onCloseModal} center>
        <ContactFormComponent />
      </Modal>
    </Fragment>
    );
  }
}

export default withRouter(Header);