import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={classes["nav-bar"]}>
      <h1>Călin Mileșan</h1>
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/MilesanC"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/calin.milesan/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/calin.milesan/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
