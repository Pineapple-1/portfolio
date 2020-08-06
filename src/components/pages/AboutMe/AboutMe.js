import React from 'react'
import DP from '../../../assets/dp.jpg'
import Styles from './Aboutme.module.css'
import Media from '../../Socialbar/Media'

const AboutMe =() =>{
    const About=()=>{
        return(
            <div className={Styles.outer}>
                <div className={Styles.inner}>
                <img className={Styles.DP} src={DP} alt=""/>
                <h3>A bit about yours truly.</h3>
                <p >I'm 21 years old undergraduate lover of interface design, image processing, planes, drones, photography, creative coading... 
                did i mention planes<span role="img" aria-label="sheep">✈️</span>  ? and a beginner at web devlopment with experience of one year<span role="img" aria-label="sheep">🎉</span> .</p>
                <h3 ><span role="img" aria-label="sheep">🌲 </span>I'm a student of Bachelor of Computer Science program at the Bahria University of Islamabad.</h3>
                <p >There, I honed my craft and expanded my understanding of computers, its role in creating products for people, and learned alongside some truly talented peoples.</p>
                <h3 ><span role="img" aria-label="sheep">⚒</span> I'm working towards becoming a professional developer who Codes Perectly Sometimes™</h3>
                <p >Breathing life into static screens is exhilarating. I built this site from scratch using React.JS and spend almost all of my free time keeping up with the latest web technologies ( yeah, I know its my first one ).</p>
                </div>
                
            </div>
            

        )
    }
    return(
        <div className={Styles.container}>
        {About()}
        <Media/>
        </div>
    )
}
export default AboutMe