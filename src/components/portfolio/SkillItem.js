import classes from "./SkillItem.module.css";

const SkillItem = (props) => {
  return (
    <li className={classes.container}>
        <h2 className={classes.title}>{props.title}</h2>
      <img src={props.image} alt={props.title} className={classes.image} />
    </li>
  );
};

export default SkillItem;
