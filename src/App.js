import AboutSection from "./components/about/AboutSection";
import HomeSection from "./components/home/HomeSection";
import NavigationBar from "./components/navigation/NavigationBar";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import classes from "./App.module.css";
import ContactSection from "./components/contact/ContactSection";

function App() {
  return (
    <div>
      <NavigationBar />
      <div className={classes.main}>
        <HomeSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
