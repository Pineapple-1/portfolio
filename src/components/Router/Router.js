import React from 'react';
import {Switch, Route} from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import Project from '../pages/Projects/Projects'
import About from '../pages/AboutMe/AboutMe'
import Contact from '../pages/ContactMe/ContactMe'
import Resume from '../pages/Resume/Resume'




const Router= () =>{
  return(

  <Switch>
    <Route path="/"  exact component={LandingPage}/>
    <Route path="/Projects" component={Project}/>
    <Route path="/About" component={About}/>
    <Route path="/Contact" component={Contact}/>
    <Route path="/Resume" component={Resume}/>
    </Switch>

  
  )
  
  }

 


export default Router
