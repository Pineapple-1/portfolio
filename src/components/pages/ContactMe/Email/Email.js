import React from "react";
import emailjs from "emailjs-com";
import Styles from "./Email.module.css";

export default function Email() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_z5w9lim", "template_rbqx6xg", e.target, "user_iIgPvTgUfNziEJcb8k4RW")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  }

  return (
    <div className={Styles.form}>
      <center>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <div>
            <input type="text" placeholder="Name" name="user_name" required />
          </div>
          <div>
            <input type="email" placeholder="Email" name="user_email" />
          </div>
          <div>
            <textarea name="message" placeholder="Message" />
          </div>
          <input className= {Styles.send} type="submit" value="Send" />
        </form>
      </center>
    </div>
  );
}
