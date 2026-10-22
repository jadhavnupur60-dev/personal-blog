
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">WELCOME TO MY PERSONAL BLOG</p>
      <h1>Hello, I'm Nupur Jadhav.</h1>
      <h2>MCA Student | Aspiring Web Developer</h2>
      <p className="intro">
        I enjoy learning web technologies, building projects,
        and sharing my learning journey.
      </p>
      <Link to="/projects" className="btn">
        Explore My Projects
      </Link>
    </section>
  );
}

export default Home;
