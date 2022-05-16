import SkillItem from "./SkillItem";
import classes from "./SkillsList.module.css";

const SkillsList = (props) => {
  return (
    <div>
      <ul className={classes.list}>
        {props.skills.map((skill) => (
          <SkillItem key={skill.id} title={skill.title} image={skill.image} />
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
