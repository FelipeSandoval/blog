import React, { Component } from 'react';
import ServicesDetails  from './DetailGenericService';
import services from './assets/services.png';

export default class DetailTerapiaSexologa extends Component{
  render(){
    let text = {
      title: 'Terapia sexológica',
      paragraph: `Este tipo de terapia se enfoca en facilitar y acompañar un proceso dirigido a mejorar el bienestar sexual de las personas, ya sea que consultes solo/a o en pareja.  
      En la fase diagnóstica, avanzaremos en la comprensión de la problemática sexual, a modo de poder elaborar la mejor terapia sexológica para ti. Desde un modelo no patológizante, sino más bien respetuoso y comprensivo, en donde lo más importante son tus recursos personales para poder avanzar en el desarrollo de tu bienestar sexual, siempre respondiendo a tus necesidades y propio ritmo. 
      
      Habitualmente las consultas refieren a: Disminución en el interés sexual, aversión sexual, eyaculación precoz, eyaculación retardada, disfunción eréctil, vaginismo, dispareunia, ansiedad asociada al sexo, anorgasmia.
      
      A partir de la necesidad del proceso, se realizarán sesiones en pareja e individuales. 
      Finalmente, es importante que sepas que de ser necesario apoyar tu proceso con otro profesional de la salud, facilitaré la derivación con este/a. A modo de acompañar tu terapia sexológica con profesionales de confianza y especializados en sexualidad humana, contribuyendo así al tratamiento adecuado según tu diagnóstico.  (ginecología, kinesiología, psiquiatría, urología)..`,
      serviceDetail: [
        {'Dirigida': 'Adultos, ya sea consulten de manera individual o en pareja.'}, 
        {'Frecuencia': 'Semanal'},
        {'Valor individual': '$35.000'},
        {'Valor pareja': '$40.000'}
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