import { Link } from 'react-router-dom';
import '../css/home.css';

// Datos de proyectos destacados
const featuredProjects = [
  {
    id: 'chromatic-battles',
    title: 'Chromatic Battles',
    description: '2D color-matching shooter/survival. Defend your ship by rotating and matching bullet hues to enemies. Unlock new colors, upgrade weapons between levels, and face evolving enemy patterns.',
    image: '/images/chromaticBattles.png',
    tech: 'Unity · C# · ScriptableObjects · JSON Save System',
    role: 'Lead Programmer · Core Mechanics'
  },
  {
    id: 'labrats',
    title: 'LabRats',
    description: 'Chaotic 2D fighter where mutations rule. Up to 4 players — locally or online — unleash random abilities in unpredictable matches. Full gamepad support and customizable controls.',
    image: '/images/labRats.png',
    tech: 'Unity · C# · Netcode for GameObjects',
    role: 'Lead Programmer · UX/UI Designer'
  },
  {
    id: 'oh-my-madness',
    title: 'Oh My Madness!',
    description: 'Collectible 2D card game for Android where madness reigns. fight your opponent with bizarre cards, and climb a tower of increasing difficulty. Daily missions, card upgrades, and strategic combat.',
    image: '/images/ohMyMadness.png',
    tech: 'Unity · C# · UI/UX Mobile',
    role: 'Lead Programmer · Combat System · NPC'
  },
];

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Fernanda_Fajre_CV.pdf';
    link.download = 'Fernanda_Fajre_CV.pdf';
    link.click();
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Video Game Developer
          </div>
          <h1 className="hero-title">
            Fernanda <span className="highlight">Fajre</span>
          </h1>
          <p className="hero-subtitle">
            Programmer · Game Designer · Multidisciplinary
          </p>
<p className="hero-description">
  I specialize in gameplay programming, mechanic design, and full integration 
  of systems — from combat mechanics to 
  UI architecture and save systems.
</p>
          <div className="hero-buttons">
            <button onClick={handleDownloadCV} className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </button>
            <Link to="/about#contact" className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact Me
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img 
              src="/images/hero.png" 
              alt="Fernanda Fajre - Video Game Developer" 
              className="hero-image"
            />
            <div className="hero-image-glow"></div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-accent">//</span> Featured Projects
          </h2>
          <Link to="/projects" className="view-all">
            View all projects <span className="arrow">→</span>
          </Link>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <Link to={`/project/${project.id}`} className="card-link">
                    View Project
                  </Link>
                </div>
              </div>
              <div className="card-content">
                <div className="card-tags">
                  <span className="tag">{project.tech.split('·')[0]}</span>
                  <span className="tag">{project.role}</span>
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <Link to={`/project/${project.id}`} className="btn-view-more">
                  View More <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;