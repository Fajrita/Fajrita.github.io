import { Link } from 'react-router-dom';
import '../css/projects.css';

// Lista completa de proyectos (después la moveremos a un archivo central)
const allProjects = [
  {
    id: 'labrats',
    title: 'LabRats',
    category: 'Game',
    image: '/images/labRats.png',
    tech: 'Unity · C# · UI Toolkit',
    description: '2D fighting game centered on randomness with mutation mechanics.'
  },
  {
    id: 'chromatic-battles',
    title: 'Chromatic Battles',
    category: 'Game',
    image: '/images/chromaticBattles.png',
    tech: 'Unity · C# · ScriptableObjects',
    description: 'Space tower defense with color-matching mechanics.'
  },
  {
    id: 'my-madness',
    title: 'My Madness',
    category: 'Game',
    image: '/images/myMadness.png',
    tech: 'Unity · C# · AI · VFX',
    description: 'Strategic card game for mobile devices.'
  },
  {
    id: 'oh-my-madness',
    title: 'Oh My Madness!',
    category: 'Game',
    image: '/images/ohMyMadness.png',
    tech: 'Unity · C# · Mobile',
    description: 'Fast-paced collectible card game on Android.'
  },
  {
    id: 'gamejam-power',
    title: 'GameJam: Power',
    category: 'Game · Jam',
    image: '/images/gamejamPower.png',
    tech: 'Unity · C# · UX/UI',
    description: 'GameDev.js GameJam project with theme: Power.'
  },
  {
    id: 'woman-gamejam',
    title: 'Woman GameJam',
    category: 'Game · Jam',
    image: '/images/womanGamejam.png',
    tech: 'Unity · C# · Wwise',
    description: 'TimeLoop theme. Enemy AI, behaviors, level design.'
  },
  {
    id: 'monkey-fps',
    title: 'Monkey FPS',
    category: 'Prototype',
    image: '/images/monkeyFps.png',
    tech: 'Unity · C# · 3D',
    description: 'First-person shooter prototype in Doom style.'
  },
  {
    id: '3d-modeling',
    title: '3D Assets & Characters',
    category: '3D Art',
    image: '/images/3dModeling.png',
    tech: 'Blender · Unity',
    description: '3D modeling, texturing, lighting integration.'
  }
];

const Projects = () => {
  return (
    <div className="projects-page">
      {/* <div className="projects-header">
        <h1 className="projects-title">
          <span className="title-accent">//</span> All Projects
        </h1>
        <p className="projects-subtitle">
          A showcase of my work in game development, prototypes, and 3D art
        </p>
      </div> */}

      {/* <div className="projects-filter">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Games</button>
        <button className="filter-btn">Game Jams</button>
        <button className="filter-btn">Prototypes</button>
        <button className="filter-btn">3D Art</button>
      </div> */}

      <div className="projects-grid-full">
        {allProjects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="project-card-full">
            <div className="card-image-full">
              <img src={project.image} alt={project.title} />
              <div className="card-category">{project.category}</div>
            </div>
            <div className="card-content-full">
              <h3 className="card-title-full">{project.title}</h3>
              <p className="card-tech-full">{project.tech}</p>
              <p className="card-description-full">{project.description}</p>
              <span className="card-link-full">
                View Project <span className="arrow">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;