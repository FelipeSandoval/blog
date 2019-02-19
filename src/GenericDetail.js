import React, { Component } from 'react';
import './GenericDetail.scss';
import blackAndWhiteLogo from './assets/logo-white-black.svg';

export default class GenericDetail extends Component{
  render(){
    return(
     <div className='generic-something'>
      <div className='displayedImages'>
        <img src={this.props.image} alt=''/>
      </div>
      <div className='detailContainer'>
        <div className='detailResume '>
            <h1>Sobre mí</h1>
            <p>
              Quienes me conocieron de pequeña no se habrían imaginado que seguiría este camino, una persona de bajo perfil que se apoyaba en su amor al arte, en sus dibujos y en su mundo creativo, una adolescente que comenzó a exponerse gracias al teatro y al canto. 
              No era difícil poner las fichas en que yo sería “la artista de la familia”, al igual que mi bisabuela. Ciertamente, yo también lo pensaba.
            </p>
            <p>
              La psicología me parecía una profesión para charlatanes, para gente que intenta ayudar a otros mostrándose siempre resuelta. Hasta los 17 años, no había para mí una profesión menos noble qué esta que hoy ejerzo.
            </p>
            <p>
              Pero ya saben cómo se escriben ciertas historias de amor, la mía con la psicología me sorprende hasta el día de hoy. 
              Una depresión, la necesidad de apoyo externo, caminar por la oscuridad…cuando ni todo el amor de mi familia, ni el arte fueron suficiente, ahí fue cuando me di cuenta, que aquella profesión que tanto rechacé era la que podía ser mi gran compañera para la vida.
            </p>
            <p>
              Entonces me di cuenta de algo, muy importante para elegir a qué carrera entrar. El arte no me apasionaba por su belleza o lo entretenido que era, me apasionaba porque me sanaba y me hacía crecer desde el primer día. Así fue como me comencé a seducir por la psicología, porque me pareció que se trataba de otra manera de hacer arte, la manera más mágica de todas, aquella en que los colores, las melodías, las danzas son determinadas por las emociones, la confianza y la sabiduría que cada paciente trae a la consulta. Me parecía increíble cómo un proceso terapéutico abriera tantas soluciones y caminos creativos en la vida de las personas…y si eso era en teoría, te podrás imaginar cómo fue cuando lo vi en las sesiones con los pacientes…ya no había vuelta atrás, me había enamorado de mi profesión. ¡y que afortunada me siento que así sea!
            </p>
            <p>
              Mi curriculum lo puedes ver más abajo, pero en esta presentación, en primera persona, no puedo no expresar lo que me parece el corazón de esta presentación. Que la psicología se trata de algo más que mi trabajo, para mi representa una historia de amor y de arte, que no se construye sólo gracias a mí, sino a la entrega de aquellos que solemos llamar “pacientes” y que yo siento más como “maestros”.
              ¿Y qué pasó con eso de ser una terapeuta “resuelta”? pues, que yo no aspiro hacerlo. Ahora pretendo algo más transformador, ser lo más auténtica posible conmigo misma y con quienes confían en mi como terapeuta.
            </p>

           <h5>“Maravillarse en el contacto con el otro, en cada momento, en cada sesión…esa es la obra de arte más creativa de todas”</h5>
           <img className='blackAndWhiteLogo' alt='' src={blackAndWhiteLogo}/>
           <div className='containerBottom'>
              <div className='detailBottom'>
                <h4>Mi formación</h4>
                <ul>
                  <li>Psicóloga con mención Clínica (2006- 2010), Universidad Central de Chile. Titulada con Distinción Máxima. </li>
                  <li>Magister en Teoría y Práctica Gestáltica (2015-2017), Universidad Mayor de Chile – Centro Gestalt Santiago. Titulada con Máximo Honor.</li>
                  <li>Master en Sexología © (2017-2019), Universidad de Almería, España.   </li>
                  <li>Diplomado en Sexualidad Humana y Terapia Sexual (2017), Academia de Psicología y Bienestar.</li>
                  <li>Diplomado en Psicoterapia en niños y adolescentes (2013). Centro Gestalt Santiago.</li>
                  <li>Diplomado en Gestión de Riesgos y Reducción de daños en Drogodependencias (2011). Universidad Central de Chile.</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}