import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import classes from "./ContactSection.module.css";

const ContactSection = () => {
  const formRef = useRef();
  const [messageSend, setMessageSend] = useState(false);

  const submitFormHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_60vkvda",
        "template_exhvc7i",
        formRef.current,
        "Woaj-OHEf7oLAGIiQ"
      )
      .then(
        (result) => {
          setMessageSend(true);
        },
        (error) => {}
      );
  };

  return (
    <section>
      <div className={classes.footer}>
        <div className={classes.left}>
          <h1>Let's talk!</h1>
          <span>
            <FontAwesomeIcon icon={faPhone} className={classes.icons} />
            +40 741 115 005
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} className={classes.icons} />
            milesan_calin@yahoo.com
          </span>
        </div>
        <div className={classes.right}>
          <h2>Send me an email!</h2>
          <form ref={formRef} onSubmit={submitFormHandler}>
            <input
              type="text"
              placeholder="Name"
              autoComplete="off"
              name="user_name"
            />
            <input
              type="text"
              placeholder="Subject"
              autoComplete="off"
              name="user_subject"
            />
            <input
              type="text"
              placeholder="Email"
              autoComplete="off"
              name="user_email"
            />
            <textarea
              rows="5"
              placeholder="Message"
              autoComplete="off"
              name="message"
            />
            {messageSend && <p>Email send successfully!</p>}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
