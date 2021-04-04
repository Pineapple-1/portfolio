import React from 'react'
import  Email from './Email/Email'
import Classes from './ContactMe.module.css'

function ContactMe() {
  return (
    <div>
      <center>
      <h2 className={Classes.font}>Let's Talk</h2>
      </center>
      
      <Email/>
    </div>
  )
}

export default ContactMe
