import { Link } from 'react-router-dom';
import '../css/projects.css';

// Lista completa de proyectos (después la moveremos a un archivo central)
const allProjects = [
    {
    id: 'chromatic-battles',
    title: 'Chromatic Battles',
    category: 'Game',
    image: '/images/chromaticBattles.png',
    tech: 'Unity · C# · ScriptableObjects',
    description: 'Space tower defense with color-matching mechanics.'
  },
  {
    id: 'labrats',
    title: 'LabRats',
    category: 'Game',
    image: '/images/labRats.png',
    tech: 'Unity · C# · UI Toolkit',
    description: '2D fighting game centered on randomness with mutation mechanics.'
  },
{
  id: 'oh-my-madness',
  title: 'Oh My Madness!',
  category: 'Game · Mobile',
  image: '/images/ohMyMadness.png',
  tech: 'Unity · C# · UI/UX · IAP',
  description: 'Collectible card dueling game for Android. Touch-based UI, VFX, in-app purchases, and progression systems.'
},
  {
    id: 'zozobra',
    title: 'Zozobra',
   category: 'Game · Jam',
    image: '/images/zozobra.png',
    tech: 'Unity · C# · State Machines',
   description: 'Woman Game Jam 2024. Anxiety-based mechanics, enemy AI with state machines, and level design.'
  },
  {
  id: 'shity-shooter',
  title: 'Shity Shooter',
  category: 'Prototype',
  image: '/images/shityShooter.png',
  tech: 'Unity · C# · 3D Physics · NavMesh',
  description: '3D maze escape prototype exploring physics, movement systems, and AI navigation.'
},
{
  id: 'gallery',
  title: 'Art Gallery',
  category: '2D · 3D Art',
  image: '/images/galleryThumbnail.png',
  tech: 'Blender · Photoshop · Unity',
  description: 'A showcase of 2D and 3D artwork created for game prototypes, Master\'s exercises, and a board game project.'
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