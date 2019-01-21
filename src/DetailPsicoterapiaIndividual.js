import React, { Component } from 'react';
import ServicesDetails  from './DetailGenericService';
import PsicoterapiaIndividual from './assets/psicoterapiaIndividual.jpg';

export default class DetailPsicoterapiaIndividual extends Component{
  render(){
    let text = {
      title: 'Psicoterapia individual',
      paragraph: `Se trata del formato más clásico de terapia psicológica, un espacio íntimo entre paciente y psicóloga, en donde profundizaremos en aquello que te lleva a consultar, para luego construir en conjunto tu objetivo terapéutico y trabajar en el avance de éste, sesión a sesión.`,
      serviceDetail: [
        {'Dirigida a': 'Adolescentes y Adultos'},
        {'Frecuencia': 'Semanal'},
        {'Valor hora': '$30.000'}
      ]
      
    }
    return(
      <ServicesDetails 
          image={PsicoterapiaIndividual} 
          title={text.title}
          paragraph={text.paragraph}
          serviceDetail={text.serviceDetail}
          />
    )
  }
}