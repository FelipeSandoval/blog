import React, { Component } from 'react';
import ServicesDetails  from './DetailGenericService';
import services from './assets/services.png';

export default class DetailTerapiaParejas extends Component{
  render(){
    let text = {
      title: 'Psicoterapia de parejas',
      paragraph: `Una terapia dirigida a reestablecer el bienestar en la pareja, abordando las problemáticas presentes, así como también fortaleciendo los recursos existentes en la relación. 
      Implica sesiones tanto de pareja, como individuales. Requiere de un alto grado de compromiso y responsabilidad, tanto en sesión como fuera de la misma.`,
      serviceDetail: [
        {'Dirigida a': 'Parejas adultas'},
        {'Frecuencia': 'Semanal'},
        {'Valor hora': '$35.000'}
      ]
      
    }
    return(
      <ServicesDetails 
          image={services} 
          title={text.title}
          paragraph={text.paragraph}
          serviceDetail={text.serviceDetail}
          />
    )
  }
}