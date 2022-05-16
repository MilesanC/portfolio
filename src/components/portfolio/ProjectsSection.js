import ProjectList from "./ProjectList";
import SkillsList from "./SkillsList";
import classes from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  const projects = [
    {
      id: "p6",
      title: "E-commerce",
      image: "/assets/greenery.PNG",
      link: "https://greenery-bycalinmilesan.netlify.app/",
    },
    {
      id: "p5",
      title: "Movie App",
      image: "/assets/movie.PNG",
      link: "https://movie-app-bycalinmilesan.netlify.app/",
    },
    {
      id: "p4",
      title: "Quiz App",
      image: "/assets/quiz.PNG",
      link: "https://quiz-app-bycalinmilesan.netlify.app/",
    },
    {
      id: "p3",
      title: "Menu App",
      image: "/assets/menu.PNG",
      link: "https://menu-app-bycalinmilesan.netlify.app/",
    },
    {
      id: "p2",
      title: "Weather App",
      image: "/assets/weatherApp.PNG",
      link: "https://weatherapp-bycalinmilesan.netlify.app/",
    },
    {
      id: "p1",
      title: "Countdown",
      image: "assets/countdown.PNG",
      link: "https://countdown-bycalinmilesan.netlify.app/",
    },
  ];

  const skills = [
    {
      id: "s1",
      image: "assets/html.PNG",
      title: "HTML",
    },
    {
      id: "s2",
      image: "assets/css.png",
      title: "CSS",
    },
    {
      id: "s3",
      image: "assets/js.png",
      title: "JavaScript",
    },
    {
      id: "s4",
      image: "assets/react.png",
      title: "ReactJS",
    },
    {
      id: "s5",
      image: "assets/git.png",
      title: "Git",
    },
    {
      id: "s6",
      image: "assets/github.png",
      title: "GitHub",
    },
    {
      id: "s7",
      image: "assets/photoshop.png",
      title: "Photoshop",
    },
    {
      id: "s8",
      image: "assets/after.png",
      title: "After Effects",
    },
    {
      id: "s9",
      image: "assets/premier.png",
      title: "Premier Pro",
    },
    {
      id: "s10",
      image: "assets/illustrator.png",
      title: "Illustrator",
    },
  ];

  return (
    <section className={classes.portfolio}>
      <div className={classes.container}>
        <h1>Projects</h1>
        <ProjectList projects={projects} />
        <h1>Skills</h1>
        <SkillsList skills={skills} />
      </div>
    </section>
  );
};

export default ProjectsSection;
