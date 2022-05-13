import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./HomeSection.module.css";

const HomeSection = () => {
  return (
    <section className={classes.home}>
      <div className={classes.left}>
        <div className={classes.info}>
          <h2>Hello, I'm </h2>
          <h1>Călin</h1>
          <h3>an engineering student and a web development enthusiast</h3>
        </div>
        <FontAwesomeIcon icon={faArrowDown} className={classes.arrow} />
      </div>
      <div className={classes.right}>
        <div className={classes.container}>
          <img
            src="assets/IMG_0152.JPG"
            alt="Calin Milesan"
            className={classes.image}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
