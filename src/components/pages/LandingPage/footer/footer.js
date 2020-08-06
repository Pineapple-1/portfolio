import React from 'react'
import Styles from './footer.module.css'
import RoomIcon from '@material-ui/icons/Room';

const footer= ()=>{
    return(
        <div className={Styles.footer}>
            <div >Resume</div>
            <div className={Styles.Vanish}><a href="https://goo.gl/maps/U55bQqH2wXdBLCRMA" rel="noopener noreferrer" target="_blank" style={{ color:"#969696"}}><RoomIcon style={{ fontSize: 30 }}/> 33.6219°  N, 73.1354°  E</a></div>
            <div className={Styles.left}><a href="https://www.linkedin.com/in/abdulrehman-ajmal-a270891a4/" rel="noopener noreferrer" target="_blank" style={{ color:"#969696"}}>LinkedIn</a></div>
            
        </div>
    )
}
export default footer