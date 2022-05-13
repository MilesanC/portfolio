import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

const ProjectList = (props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.title}</h2>
      <ul className={classes.list}>
        {props.projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            image={project.image}
            link={project.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
