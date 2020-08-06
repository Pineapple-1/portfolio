import React from 'react'
import {Link} from 'react-router-dom'
import Style from './sideDrawer.module.css'
import cx from 'classnames'
 const sideDrawer=({toggle})=>{
     return(    
         <div className={toggle?cx(Style.side,Style.open):cx(Style.side,Style.close)}>
             <ul className={Style.btn}>
             <li><Link style={{color: " rgba(255, 255, 255, 0.815)", fontSize:'14px',cursor: 'pointer'}} to="/Resume">Resume</Link></li>
             <li><Link style={{color: " rgba(255, 255, 255, 0.815)", fontSize:'14px',cursor: 'pointer'}}to="/About">About</Link></li>
             <li><Link style={{color: " rgba(255, 255, 255, 0.815)", fontSize:'14px',cursor: 'pointer'}}to="/Contact">Contact</Link></li>
             <li><Link style={{color: " rgba(255, 255, 255, 0.815)", fontSize:'14px',cursor: 'pointer'}}to="/Projects">Projects</Link></li>
             </ul>
         </div>

     )
 }
 export default sideDrawer