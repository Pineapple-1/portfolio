import React from 'react'
 import Rocket from '../../../../assets/rocket.png' 
 import Styles from './animation.module.css'
const rocket =()=>{
 return (
<div className={Styles.container}> 
    <div className={Styles.rokit} style={{columnFill:"#888888"}}>
        <img src={Rocket} alt="rocket"/>
    </div>
</div>
 )

}

export default rocket