import { Link } from 'react-router-dom';
import '../css/about.css';

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Fernanda_Fajre_CV.pdf';
    link.download = 'Fernanda_Fajre_CV.pdf';
    link.click();
  };

  // Skills desglosados por área técnica
  const technicalSkills = {
    programming: [
      { name: 'C# / .NET', percentage: 90, description: 'Advanced OOP, design patterns, data structures, LINQ, asynchronous programming' },
      { name: 'Unity Engine', percentage: 100, description: 'Component-based architecture, Editor scripting, custom tools, performance profiling' },
      { name: 'Graphics & VFX', percentage: 75, description: 'Shader Graph, Particle System, VFX Graph, post-processing, lighting optimization' }
    ],
    gameDev: [
      { name: 'Gameplay Programming', percentage: 85, description: 'State machines, AI behavior trees, physics interactions, combat systems' },
      { name: 'UI/UX Systems', percentage: 70, description: 'UI Toolkit, Canvas optimization, reactive interfaces, input handling' },
      { name: 'Data Management', percentage: 80, description: 'ScriptableObjects, save/load systems, JSON/XML serialization, addressables' }
    ],
    tools: [
      { name: 'Version Control', percentage: 100, description: 'Git, GitFlow, collaborative workflows, conflict resolution' },
      { name: 'Project Management', percentage: 75, description: 'Agile/Scrum, Jira, Trello, team coordination, technical leadership' },
      { name: 'Web & Other', percentage: 80, description: 'HTML5/CSS3, JavaScript, React, Bootstrap, responsive design' }
    ]
  };

  // Educación
  const education = [
    {
      degree: "Master in Game Design and Programming",
      institution: "C.E.I. (Center for Innovation Studies)",
      period: "April 2023 - February 2024"
    },
    {
      degree: "FullStack JAVA Bootcamp",
      institution: "Talento Digital",
      period: "March 2023 - July 2023"
    },
    {
      degree: "Bachelor's Degree in Arts and Humanities",
      institution: "Pontificia Universidad Católica de Chile",
      period: "2013 - 2018"
    },
    {
      degree: "Major in Architecture",
      institution: "Pontificia Universidad Católica de Chile",
      period: "2013 - 2018"
    },
    {
      degree: "Minor in Film Aesthetics",
      institution: "Pontificia Universidad Católica de Chile",
      period: "2013 - 2018"
    }
  ];

  // Experiencia laboral resumida
  const workExperience = [
    {
      role: "Lead Programmer",
      company: "Lions Roar Games",
      period: "July 2023 - Present",
      description: "Technical leadership in 'Oh My Madness!'. UI system, gameplay mechanics, card data management, NPC AI, and VFX animations."
    },
    {
      role: "Lead Programmer",
      company: "NightWave Games",
      period: "July 2023 - Present",
      description: "Technical management of 'Chromatic Battles' and 'LabRats'. Gameplay systems, enemy design, ScriptableObject integration, performance optimization."
    },
    {
      role: "Furniture Designer",
      company: "Taller Fajre",
      period: "April 2019 - April 2023",
      description: "Brand identity development, custom designs, and bespoke furniture manufacturing."
    },
    {
      role: "Freelance Designer",
      company: "Freelance",
      period: "July 2021 - July 2022",
      description: "Logos, UX/UI designs for digital platforms, and custom graphic content."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section con imagen */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            About Me
          </div>
          <h1 className="about-hero-title">
            Fernanda <span className="highlight">Fajre</span>
          </h1>
          <p className="about-hero-subtitle">
            Unity Developer & Game Designer
          </p>
          <div className="about-hero-buttons">
            <button onClick={handleDownloadCV} className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </button>
            <a href="#contact" className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact
            </a>
          </div>
        </div>
        <div className="about-hero-image-container">
          <div className="about-hero-image-wrapper">
            <img 
              src="/images/hero.png" 
              alt="Fernanda Fajre - Video Game Developer" 
              className="about-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="about-description">
        <div className="description-card">
          <p className="description-text">
            I started as an architect and digital designer, but my passion for technology led me to 
            <span className="highlight-text"> software engineering and game development</span>. 
            Today, I work as a <strong>Unity Programmer</strong> specializing in gameplay systems, 
            UI architecture, and performance optimization.
          </p>
          <p className="description-text">
            As a <strong>Lead Programmer</strong>, I've created systems for <strong>card games, 
            tower defenses, and fighting games</strong> — implementing everything from 
            <strong>ScriptableObject-driven data management</strong> to 
            <strong>complex AI state machines</strong>. I'm proficient in <strong>C#, design patterns, 
            SOLID principles, and component-based architecture</strong>. I also bring experience in 
            <strong>VFX (Particle System, Shader Graph) and UI optimization</strong>.
          </p>
          <p className="description-text">
            I stay curious about <strong>web technologies (React, Node.js)</strong> and 
            <strong>3D art (Blender)</strong> because I believe great games require understanding 
            the full pipeline. <span className="highlight-text">Code is just another creative medium.</span>
          </p>
          <p className="description-text">
          My favorite games — <strong>Final Fantasy X</strong>, <strong>Slay the Spire</strong>, 
          <strong>Super Smash Bros</strong>, <strong>Fire Emblem</strong>, <strong>Baba Is You</strong>, 
          and <strong>The Legend of Zelda</strong> — constantly remind me why I love this industry. 
          </p>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="about-skills">
        <h2 className="section-title">
          <span className="title-accent">//</span> Technical Skills
        </h2>
        
        {/* Core Programming */}
        <div className="skills-category">
          <h3 className="skills-category-title">
            <span className="category-icon">⚡</span> Core Engineering
          </h3>
          <div className="skills-grid three-columns">
            {technicalSkills.programming.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                </div>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Game Systems */}
        <div className="skills-category">
          <h3 className="skills-category-title">
            <span className="category-icon">🎮</span> Game Systems & Architecture
          </h3>
          <div className="skills-grid three-columns">
            {technicalSkills.gameDev.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                </div>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="skills-category">
          <h3 className="skills-category-title">
            <span className="category-icon">🛠️</span> Development & Workflow
          </h3>
          <div className="skills-grid three-columns">
            {technicalSkills.tools.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                </div>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="about-work">
        <h2 className="section-title">
          <span className="title-accent">//</span> Work Experience
        </h2>
        <div className="timeline">
          {workExperience.map((work, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{work.role}</h3>
                <div className="timeline-subtitle">{work.company}</div>
                <div className="timeline-period">{work.period}</div>
                <p className="timeline-description">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="about-education">
        <h2 className="section-title">
          <span className="title-accent">//</span> Education
        </h2>
        <div className="education-grid">
          {education.map((item, index) => (
            <div key={index} className="education-card">
              <h3 className="education-degree">{item.degree}</h3>
              <div className="education-institution">{item.institution}</div>
              <div className="education-period">{item.period}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="about-languages">
        <h2 className="section-title">
          <span className="title-accent">//</span> Languages
        </h2>
        <div className="languages-container">
          <div className="language-item">
            <span className="language-name">Spanish</span>
            <span className="language-level">Native</span>
          </div>
          <div className="language-item">
            <span className="language-name">English</span>
            <span className="language-level">C2 - EF SET (2023)</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="about-contact">
        <h2 className="section-title">
          <span className="title-accent">//</span> Contact
        </h2>
        <div className="contact-container-two-columns">
          {/* Columna izquierda - Info personal */}
          <div className="contact-info-column">
            <h3 className="contact-subtitle">Let's create something amazing</h3>
            <p className="contact-text">
              I'm currently available for freelance work, full-time and part-time positions. 
              If you have a project in mind or just 
              want to talk about game development, feel free to reach out.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">Chile · Remote</span>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Response Time</span>
                <span className="detail-value">Within 24 hours</span>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Open to</span>
                <span className="detail-value">Full-time · Part-time · Freelance</span>
              </div>
            </div>
          </div>

          {/* Columna derecha - Links de contacto */}
          <div className="contact-links-column">
            <a href="mailto:ffajrec@gmail.com" className="contact-link-item">
              <div className="contact-link-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-link-content">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">ffajrec@gmail.com</span>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>

            <a href="https://www.linkedin.com/in/fernanda-fajre/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-link-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="contact-link-content">
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">/in/fernanda-fajre</span>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>

            <a href="https://github.com/Fajrita" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-link-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div className="contact-link-content">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">/Fajrita</span>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>

            <a href="https://fajrita.github.io" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-link-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H5.78a1.65 1.65 0 0 0-1.51 1 1.65 1.65 0 0 0 .33 1.82l.07.07A10 10 0 0 0 12 17.66a10 10 0 0 0 6.18-2.37z" />
                </svg>
              </div>
              <div className="contact-link-content">
                <span className="contact-link-label">Portfolio</span>
                <span className="contact-link-value">fajrita.github.io</span>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;