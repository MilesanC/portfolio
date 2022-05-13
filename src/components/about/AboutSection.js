import classes from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={classes.contact} id="contact">
      <div className={classes.left}>
        <div className={classes.card}></div>
        <img src="/assets/IMG_9988.JPG" alt="Calin Milesan" />
      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>About me</h1>
        <p>
          I am an engineering student in 4th year at UMFST Târgu-Mureș, faculty
          of engineering. I started learning JavaScript and React from courses
          on Udemy and I want to start a career in web development.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
