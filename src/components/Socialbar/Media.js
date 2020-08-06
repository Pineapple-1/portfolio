import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebookF,faInstagram,faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons'
import Styles from './Media.module.css'
library.add(faTwitter, faFacebookF,faInstagram,faLinkedinIn,faGithub,)
const Media=()=>{
    return(
        <div className={Styles.outer}>
            <div className={Styles.inner}>
                <a href="https://www.facebook.com/abdulrehman305/" rel="noopener noreferrer" target="_blank"> <FontAwesomeIcon icon={faFacebookF} size="sm"/></a>
                <a href="https://twitter.com/explore" rel="noopener noreferrer"target="_blank"><FontAwesomeIcon  icon={faTwitter} size="sm"/></a>
                <a href="https://www.instagram.com/abdulrehman_ajmal/"  rel="noopener noreferrer" target="_blank"> <FontAwesomeIcon icon={faInstagram} size="sm"/></a>
                <a href="https://www.linkedin.com/in/abdulrehman-ajmal-a270891a4/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="sm"/></a>
                <a href="https://github.com/Pineapple-1" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="sm"/></a>
                
            </div>
           
           
        </div>
    )
}

export default Media

