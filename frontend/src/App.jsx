import "./App.css";

function App() {
  const skills = [
    "C",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MATLAB",
    "Node-RED",
    "Factory IO",
    "GitHub",
    "CSS",
  ];

  const projects = [
    {
      title: "Attendance Management System",
      description:
        "Developed a MERN Stack application to manage student attendance with present, absent and reset functionalities.",
    },
    {
      title: "Insole Based Gait Analysis",
      description:
        "Designed a smart insole system to measure ground reaction force and analyze human gait patterns.",
    },
    {
      title: "Portfolio Website",
      description:
        "Created a responsive personal portfolio using React and modern UI design principles.",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Sivapriya</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <p className="intro">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Sivapriya T</span>
        </h1>

        <h2>Electronics & Instrumentation Engineer | MERN Developer</h2>

        <p>
          Third Year Electronics and Instrumentation Engineering student at
          Kongu Engineering College passionate about software development,
          full-stack web technologies and creating impactful applications.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a
            href="mailto:sivapriyat2007@gmail.com"
            className="btn secondary"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <h2>About Me</h2>

        <div className="card">
          <p>
            I am an aspiring software developer with a strong interest in web
            development and problem solving. I have experience working with
            React, Node.js, Express.js and MongoDB. I enjoy building
            user-friendly applications and continuously learning new
            technologies.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <h2>Skills</h2>

        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2>Education</h2>

        <div className="card">
          <h3>Kongu Engineering College</h3>

          <p>
            B.E Electronics and Instrumentation Engineering
            <br />
            CGPA: 8.77
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <h2>Contact</h2>

        <div className="card contact-card">
          <p>Email: sivapriyat2007@gmail.com</p>
          <p>Location: Perundurai, Erode, Tamil Nadu</p>

          <div className="socials">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;