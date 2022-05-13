import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <li className={classes.item}>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className={classes.card}
      >
        <img src={props.image} alt={props.title} className={classes.image} />
        <h2>{props.title}</h2>
      </a>
    </li>
  );
};

export default ProjectItem;
