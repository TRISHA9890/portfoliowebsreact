import React, { useState } from "react";
import "./App.css";

/* 🔹 Navbar */
const Nav = () => (
  <nav className="nav">
    <div className="logo">Trisha Shetty</div>
    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#events">Events</a>
      <a href="#certificates">Certificates</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

/* 🔹 About Me Section */
const About = () => (
  <section className="about-section" id="about">
    <div className="about-photo">
      <img src="/offical_image.jpg" alt="Trisha Shetty" className="about-photo" />


    </div>

    <div className="about-text">
      
      <h2>Hi ! I am Trisha Shetty👋</h2>
<p>
I’m a Computer Science Engineering student at Pimpri Chinchwad University with a CGPA of 8.30.  
Passionate about software development, full-stack engineering, and problem-solving.  
I’ve built projects like a Music Player App and an Attendance System using YOLOv12.  
Eager to grow through internships and create impactful</p>


      <div className="button-group">
        <a
          href="Trisha_New_Resume.pdf"
          className="btn primary"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/trisha-shetty"
          className="btn secondary"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/TRISHA9890"
          className="btn secondary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
);

/* 🔹 Education */
const Education = () => (
  <section id="education" className="card">
    <h2>🎓 Education</h2>
    <table className="edu-table">
      <thead>
        <tr>
          <th>Level</th>
          <th>Institute</th>
          <th>Year</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>B.Tech. Computer Science Engineering</td>
          <td>Pimpri Chinchwad University</td>
          <td>2024 – 2027</td>
          <td>CGPA: 8.30</td>
        </tr>
        <tr>
          <td>12th (HSC)</td>
          <td>CMS English Medium School</td>
          <td>2023</td>
          <td>64%</td>
        </tr>
        <tr>
          <td>10th (SSC)</td>
          <td>Pratibha International School</td>
          <td>2020</td>
          <td>80%</td>
        </tr>
      </tbody>
    </table>
  </section>
);

/* 🔹 Skills */
const Skills = () => {
  const skills = [
    "C",
    "C++",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "DBMS",
    "DSA",
    "Problem Solving",
    "Teamwork",
  ];
  return (
    <section id="skills" className="card">
      <h2>💻 Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <button key={skill} className="skill-chip">
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
};

/* 🔹 Events & Hackathons */
const Events = () => (
  <section id="events" className="card">
    <h2>🎯 Events & Hackathons</h2>
    <p className="section-subtitle">
      🚀 Competitions, volunteering, and hackathons that enhanced my skills
    </p>

    <div className="event-item">
      <h3>💡 ACM Volunteer</h3>
      <p>📅 Organized coding competitions & assisted in event coordination.</p>
      <p className="muted">
        🧠 Developed organizational and teamwork skills by volunteering with ACM
        activities.
      </p>
    </div>

    <div className="event-item">
      <h3>⚙️ Logica 4.0 (JSPM Coding Competition)</h3>
      <p>📅 Participated in 2024</p>
      <p className="muted">
        💻 Gained hands-on competitive programming experience in real-world
        coding environments.
      </p>
    </div>

    <div className="event-item">
      <h3>🚀 Project Expo 2K24</h3>
      <p>🏫 University Innovation Showcase</p>
      <p className="muted">
        🤝 Presented innovative projects and collaborated with peers, gaining
        exposure to real-world feedback.
      </p>
    </div>
  </section>
);

/* 🔹 Certificates */
const Certificates = () => {
  const certs = [
    {
      name: "🔐 Foundation of Cybersecurity",
      link: "https://share.google/PH1Prxfi4ex89qN6k",
    },
    {
      name: "🚀 Red Hat OpenShift Administration I",
      link: "https://rha.ole.redhat.com/rha/api/certificates/attendance/uuid/45091174-ae5e-4c7b-b641-5a548e2389ce",
    },
    {
      name: "⛓️ Blockchain Basics",
      link: "https://www.coursera.org/account/accomplishments/specialization/TSA4VP87C0HT",
    },
    {
      name: "📋 Agile with Atlassian Jira",
      link: "https://www.coursera.org/account/accomplishments/verify/JXZF9ZMDDJTL",
    },
  ];
  return (
    <section id="certificates" className="card">
      <h2>🏅 Certificates</h2>
      <ul className="cert-list">
        {certs.map((cert) => (
          <li key={cert.name}>
            <a href={cert.link} target="_blank" rel="noreferrer">
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

/* 🔹 Contact Section */
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for reaching out!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>🤝 Let’s Work Together</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>📩 Get In Touch</h3>
          <p>I’m open to collaborations and opportunities!</p>
          <ul>
            <li>📧 tshetty279@gmail.com</li>
            <li>📞 +91 7972845152</li>
            <li>📍 Pune, India</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn primary">
            ✉️ Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

/* 🔹 Main App */
export default function App() {
  return (
    <div className="site">
      <Nav />
      <main className="main">
        <About />
        <Education />
        <Skills />
        <Events />
        <Certificates />
        <Contact />
      </main>
      <footer className="footer">
        © 2025 Trisha Shetty. All Rights Reserved.
      </footer>
    </div>
  );
}
