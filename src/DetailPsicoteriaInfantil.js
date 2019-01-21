import React, { Component } from 'react';
import ServicesDetails  from './DetailGenericService';
import services from './assets/services.png';

export default class DetailPsicoteriaInfantil extends Component{
  render(){
    let text = {
      title: 'Psicoterapia Infantil',
      paragraph: `Un espacio para trabajar con niñas y niños entre 8 a 13 años (*).  Incluye: Elaboración diagnóstica, co-construcción de objetivo terapéutico con adulto responsable y terapia psicológica. 
          Si bien implica sesiones individuales, según la necesidad del caso, se harán sesiones con madre, padre u otro adulto significativo. Se trata de una terapia lúdica y amigable con la edad y los procesos que está transitando él o la paciente.
          Se realiza devolución regular acerca de los avances y obstaculizadores del proceso. Se espera que adulto/a significativo sea un co-terapeuta, que trabaje junto a la psicóloga de manera responsable. En esta terapia ¡ocuparás un rol muy activo!
          Se realizan coordinaciones y reuniones con establecimientos educacionales y otros profesionales de ser necesario.`,
      serviceDetail: [
        {'Dirigida': 'Niños y Niñas y sus adultos significativos.'},
        {'Frecuencia': 'Semanal con paciente, quincenal o mensual con adulto significativo.'},
        {'Valor Hora': '$35.000'},
        {'Valor Hora en Reuniones con establecimientos': '$30.000'},
        {'Informes Psicológicos': '$10.000'},
        {'note': '(*) Si deseas psicoterapia para alguien de menor edad, puedes contactarme de todos modos para derivar a profesional idóneo.'}
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