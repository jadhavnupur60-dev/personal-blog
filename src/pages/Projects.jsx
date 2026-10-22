
const projects = [
  {
    title: "Code Plagiarism Checker",
    description: "A project for comparing code submissions.",
  },
  {
    title: "Favorite Movies API",
    description: "An API for retrieving and adding movie data.",
  },
  {
    title: "Personal Portfolio",
    description: "A website to showcase skills and projects.",
  },
];

function Projects() {
  return (
    <section className="page">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
