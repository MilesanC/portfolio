import ProjectList from "./ProjectList";
import classes from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  const jsProjects = [
    {
      id: "p1",
      title: "Countdown",
      image: "assets/countdown.PNG",
      link: "https://countdown-bycalinmilesan.netlify.app/",
    },
    {
      id: "p2",
      title: "Weather App",
      image: "/assets/weatherApp.PNG",
      link: "https://weatherapp-bycalinmilesan.netlify.app/",
    },
  ];

  const reactProjects = [
    {
      id: "p3",
      title: "Menu App",
      image: "/assets/menu.PNG",
      link: "https://menu-app-bycalinmilesan.netlify.app/",
    },
    {
      id: "p4",
      title: "Quiz App",
      image: "/assets/quiz.PNG",
      link: "https://quiz-app-bycalinmilesan.netlify.app/",
    },
    {
      id: "p5",
      title: "Movie App",
      image: "/assets/movie.PNG",
      link: "https://movie-app-bycalinmilesan.netlify.app/",
    },
    {
      id: "p6",
      title: "E-commerce",
      image: "/assets/greenery.PNG",
      link: "https://greenery-bycalinmilesan.netlify.app/",
    },
  ];

  return (
    <section className={classes.portfolio}>
      <div className={classes.container}>
        <h1>Projects</h1>
        <ProjectList projects={jsProjects} title="JavaScript" />
        <ProjectList projects={reactProjects} title="React" />
      </div>
    </section>
  );
};

export default ProjectsSection;
