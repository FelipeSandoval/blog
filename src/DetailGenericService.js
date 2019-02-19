import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './GenericDetail.scss';
import Modal from 'react-responsive-modal';
import ContactFormComponent from './ContactFormComponent';
class ServicesDetails extends Component{

  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false
    }
  }

  routeChange = (newPath) => {
    this.props.history.push(newPath)
  }

  onOpenModal = () => {
    this.setState({ isModalOpen: true });
  };
 
  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render(){
    const modalStyles = {
      modal: {
        width: '100%',
        borderRadius: '10px'
      }
    }

    let serviceDetails = this.props.serviceDetail.map((element, i) => {
      let key = Object.keys(element)[0];
      let ele =  key !== 'note' ? 
      <p key={i}>{key}:
        <b> {element[key]}</b>
      </p>:
      <p key={i}>{element[key]}</p>
      return ele;
    });
    return(
    <Fragment>
      <div className='genericServiceContainer'>
          <div className='displayedImagesDesktop'>
            <img src={this.props.image} alt='alt'/>
          </div>
          <div className='displayedImagesMobile'>
            <img src={this.props.responsiveImage} alt='alt'/>
          </div>
          <div className='detailContainer'>
            <div className='detailResume '>
                <h1>{this.props.title}</h1>
                <p>{this.props.paragraph}</p>
                  <div className='ServiceDetail'>
                      {serviceDetails}
                  </div>
                  <button 
                    className='button-default' 
                    onClick={ () => this.onOpenModal()}
                    >Agendar hora</button>
            </div>
          </div>
        </div>
      <Modal 
        open={this.state.isModalOpen} 
        styles={modalStyles} 
        onClose={this.onCloseModal} 
        center>
        <ContactFormComponent
          asunto={this.props.title}
        />
      </Modal>
    </Fragment>
    )
  }
}

export default withRouter(ServicesDetails);