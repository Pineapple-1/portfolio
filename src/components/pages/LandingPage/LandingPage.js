import React from 'react'
import Styles from './LandingPage.module.css'
import Rocket from './rocket/animation'
import Footer from './footer/footer'
const LandingPage =() =>{
    return(
        <div className={Styles.main}>
        <div  >
            <Rocket/>
        </div>
        <div className={Styles.heading}>
            <h2 className={Styles.font}>Hello, Internet User.</h2>
            <h5>I'm Abdulrehman, a javascript developer </h5>
           
        </div>
        <Footer/>
        </div>
    )
}
export default LandingPage