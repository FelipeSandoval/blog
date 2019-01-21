import React, { Component } from 'react';
import ServicesDetails  from './DetailGenericService';
import PsicoterapiaGestalticaBanner from './assets/psicoterapiaGestalticaBanner.jpg';

export default class DetailPsicoterapiaGestalticaGrupal extends Component{
  render(){
    let text = {
      title: 'Psicoterapia Gestáltica Grupal',
      paragraph: `Terapia Psicológica de alto impacto y efectividad, de modalidad intensiva (entre 7 a 10 horas por sesión) y con una frecuencia de una vez al mes. Se realiza sólo un grupo terapéutico al año, con una duración media de 10 meses. Esta es llevada a cabo por dos psicólogos especializados en psicoterapia Gestalt.

      Debido a su alta efectividad y bajo costo, es de alta demanda. Si te interesa, ¡atento/a a la próxima convocatoria!`,
      serviceDetail: [
        {'Cantidad de integrantes por grupo': '10-15 personas'},
        {'note':'Aranceles y fechas, en próxima convocatoria (año 2019)'}
      ]
      
    }
    return(
      <ServicesDetails 
          image={PsicoterapiaGestalticaBanner} 
          title={text.title}
          paragraph={text.paragraph}
          serviceDetail={text.serviceDetail}
          />
    )
  }
}