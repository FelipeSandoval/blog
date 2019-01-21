import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

//Components
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import DetailAboutMe from './DetailAboutMe';
import DetailPsicoteriaInfantil from './DetailPsicoteriaInfantil';
import DetailArticles from './DetailArticles';
import DetailTerapiaSexologa from './DetailTerapiaSexologa';
import DetailTerapiaParejas from './DetailTerapiaParejas';
import DetailPsicoterapiaGestalticaGrupal from './DetailPsicoterapiaGestalticaGrupal';
import DetailContactForm from './DetailContactForm';
import DetailServicesComponent from './DetailServicesComponent';
import DetailPsicoterapiaIndividual from './DetailPsicoterapiaIndividual';
import * as serviceWorker from './serviceWorker';

//Router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/landing' component={Landing} />
        <Route path='/acercaDeMi' component={DetailAboutMe} />
        <Route path='/psicoteriaInfantil' component={DetailPsicoteriaInfantil} />
        <Route path='/articles' component={DetailArticles} />
        <Route path='/servicios' component={DetailServicesComponent} />
        <Route path='/terapiaSexologa' component={DetailTerapiaSexologa} />
        <Route path='/terapiaParejas' component={DetailTerapiaParejas} />
        <Route path='/psicoterapiaGestalticaGrupal' component={DetailPsicoterapiaGestalticaGrupal} />
        <Route path='/psicoterapiaIndividual' component={DetailPsicoterapiaIndividual} />
        <Route path='/formularioContacto' component={DetailContactForm} />
        <Route exact path='/' render={ () => <Redirect to='/landing'/>}/>
        <Route exact path='/*' render={ () => <Redirect to='/landing'/>}/>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
