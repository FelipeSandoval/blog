import React, { Component } from 'react';
import axios from 'axios';
import './ContactFormComponent.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SucessContactSubmit from './SucessContactSubmit';

export default class ContactFormComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      isRequestDone: false,
      asunto: props.asunto ? `Consulta ${props.asunto}` : '',
      disableAsunto: !!props.asunto
    }
  }


  handleSubmitForm = (values, setSubmitting) => {
    const formBody = Object.keys(values).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(values[key])).join('&');
    axios({
      method: 'post',
      url: `https://script.google.com/macros/s/AKfycbwmKC8RyuG4NIwlWoJYCN8DlymoMjeGR7lwZAJX/exec`,
      data: formBody,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      }).then((response) => {
        setSubmitting(false);
        this.setState({isRequestDone: true})
      }).catch((error) => {
          console.log(error);
      });
  }


  render(){
    return(
      !this.state.isRequestDone ?
      <div className='contactFormContainer'>
        <Formik
          initialValues={{ nombre: '', asunto: '' ,email: '', mensaje: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Email Requerido';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Direccion de correo invalida';
            }
            if(!values.nombre){
              errors.nombre = 'Nombre Requerido';
            }
            if(!values.asunto){
              errors.asunto = 'Asunto Requerido';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.handleSubmitForm(values,setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='input-form'>
                <label>Nombre</label>
                <Field type="text" name="nombre" />
                <ErrorMessage className='input-form-error-message' name="nombre" component="div" />
              </div>
              <div className='input-form'>
                <label>Asunto</label>
                <Field 
                    className='input-form' 
                    type="text" 
                    name="asunto"
                    value={this.state.asunto ? this.state.asunto : undefined}
                    disabled={this.state.disableAsunto}
                    />
                <ErrorMessage className='input-form-error-message' name="asunto" component="div" />
              </div>
              <div className='input-form'>
                <label>Email</label>
                <Field className='input-form' type="text" name="email" />
                <ErrorMessage className='input-form-error-message' name="email" component="div" />
              </div>
              <div className='input-form'>
                <label>Mensaje</label>
                <Field className='input-form' type="text" name="mensaje" />
                <ErrorMessage className='input-form-error-message' name="mensaje" component="div" />
              </div>
              <button type="submit" className='button-default' disabled={isSubmitting}>
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </div> : <SucessContactSubmit />
    )
  }
}