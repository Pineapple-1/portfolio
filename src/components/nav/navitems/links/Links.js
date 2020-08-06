import React from 'react';
import {Link} from 'react-router-dom'
import Styles from './Links.module.css'
import Icon from '../Icon/Icon'
const Links = ({toggle,setToggle}) =>{
    return (   
        <div className={Styles.center}>
        <label><Link style={{color:' rgba(255, 255, 255, 0.774)'}} to="/">Abdulrehman ajmal</Link></label>
         <ul className={Styles.sm}>
             <li><Link style={{color: " rgba(255, 255, 255, 0.815)", fontSize:'11px',cursor: 'pointer'}}to="/About">About</Link></li>
             <li><Link style={{color: " rgba(255, 255, 255, 0.815)", fontSize:'11px',cursor: 'pointer'}}to="/Contact">Contact</Link></li>
             <li><Link style={{color: " rgba(255, 255, 255, 0.815)", fontSize:'11px',cursor: 'pointer'}}to="/Projects">Projects</Link></li>
             
         </ul>
         <ul className ={Styles.fuck}><li style={{float:'right',marginTop:'7px',display: 'inline'}}><Icon toggle={toggle} setToggle={setToggle}/></li></ul>
         </div>
    )
}
export default Links




