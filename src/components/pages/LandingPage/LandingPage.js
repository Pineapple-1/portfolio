import React from 'react'
import Styles from './LandingPage.module.css'
import Rocket from './rocket/animation'
import Footer from './footer/footer'
const LandingPage =() =>{
    return(
        <div style={{backgroundColor:"#161618"}}>
        <div  >
            <Rocket/>
        </div>
        <div className={Styles.heading}>
            <h1 className={Styles.font}>Hello, Internet User.</h1>
            <h5>I'm Abdulrehman, a javascript developer </h5>
           
        </div>
        <Footer/>
        </div>
    )
}
export default LandingPage