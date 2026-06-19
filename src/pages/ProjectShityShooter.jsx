import { Link } from 'react-router-dom';
import '../css/projectShityShooter.css';

const ProjectShityShooter = () => {
  return (
    <div className="project-page">
      {/* Banner con título */}
      <div className="project-banner">
        <img 
          src="/images/shityShooterBanner.png" 
          alt="Shity Shooter" 
          className="banner-image"
        />
      </div>

      {/* Descripción corta */}
      <section className="project-description-short">
        <p className="short-description">
          You're a monkey trapped in a 3D maze. Avoid veterinarians hunting you, 
          find the key, and escape. Throw poop at your pursuers to slow them down, 
          and eat bananas to reload your ammo. Each playthrough is unique — 
          the key and door positions are randomized.
        </p>
        <div className="itchio-button-container">
          <a 
            href="https://fajrita.itch.io/shity-shooter" 
            target="_blank" 
            rel="noopener noreferrer"
            className=" btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
            </svg>
            View on Itch.io
          </a>
        </div>
      </section>

      {/* Sección 1: Prototipo y Objetivo */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Prototype Origins
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              <span className="highlight-text">Shitty Shooter</span> was developed during my 
              <span className="tech-highlight"> Master's in Game Programming in Spain</span> as a 
              <span className="tech-highlight"> prototype to explore 3D physics, movement systems, and AI navigation</span>. 
              The challenge was to create a small but complete experience that tested multiple 
              Unity systems working together in a closed 3D environment.
            </p>
            <p>
              The concept is simple but effective: you play as a <span className="tech-highlight">monkey trapped in a maze</span>, 
              pursued by veterinarians. Your only defense is <span className="tech-highlight">throwing poop</span> 
              to temporarily stun them. You need to <span className="tech-highlight">find bananas to reload</span> 
              and locate the <span className="tech-highlight">randomly generated key and exit door</span> 
              to escape. Every playthrough offers a different path to freedom.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/shittyShooterProto1.png" alt="Maze environment screenshot" />
            <img src="/images/shittyShooterProto2.png" alt="Monkey with banana" />
          </div> */}
        </div>
      </section>

      {/* Sección 2: Physics & Movement Systems */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Physics & Movement Systems
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              I implemented and compared <span className="tech-highlight">three different movement systems</span> 
              in Unity: <span className="tech-highlight">RigidBody</span> (physics-based), 
              <span className="tech-highlight">Transform</span> (direct position manipulation), and 
              <span className="tech-highlight">Character Controller</span> (collision-based movement). 
              This allowed me to understand the <span className="tech-highlight">strengths and limitations</span> 
              of each approach for different gameplay scenarios.
            </p>
            <p>
              The prototype also explores <span className="tech-highlight">3D physics interactions</span> — 
              projectiles (poop) with physics-based trajectories, collision detection for enemy vision cones, 
              and <span className="tech-highlight">NavMesh navigation for AI enemies</span> that can 
              <span className="tech-highlight">jump and navigate platforms</span> to chase the player. 
              The result is a <span className="tech-highlight">responsive, fluid movement system</span> 
              that makes the maze feel alive and dangerous.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/shittyShooterPhysics1.png" alt="Physics debugging visualization" />
            <img src="/images/shittyShooterPhysics2.png" alt="Character Controller setup" />
          </div> */}
        </div>
      </section>

      {/* Sección 3: Enemy AI & NavMesh */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Enemy AI & Navigation System
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              The veterinarians are powered by <span className="tech-highlight">Unity's NavMesh system</span>, 
              allowing them to <span className="tech-highlight">dynamically navigate the maze</span> — 
              including <span className="tech-highlight">jumping and descending from platforms</span> 
              to pursue the player. Each enemy has a <span className="tech-highlight">vision cone detection system</span> 
              that triggers chase behavior when the player enters their line of sight.
            </p>
            <p>
              The <span className="tech-highlight">temporary stun mechanic</span> 
              from the poop projectile gives players a brief window to break line of sight and 
              <span className="tech-highlight">regain the element of surprise</span>.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/shittyShooterAI1.png" alt="NavMesh visualization and enemy pursuit" />
            <img src="/images/shittyShooterAI2.png" alt="Vision cone system" />
          </div> */}
        </div>
      </section>

      {/* Sección 4: Randomization System */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Procedural Placement & Replayability
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              To ensure <span className="tech-highlight">replayability</span>, I implemented a 
              <span className="tech-highlight">randomized generation system</span> that places the 
              <span className="tech-highlight">exit key and door in different positions</span> each playthrough. 
              This creates a <span className="tech-highlight">unique escape route</span> every time, 
              forcing players to <span className="tech-highlight">explore the maze</span> and adapt 
              their strategy.
            </p>
            <p>
              The system also <span className="tech-highlight">distributes bananas</span> throughout 
              the maze, creating a <span className="tech-highlight">resource management layer</span> — 
              players must decide whether to engage enemies or conserve their limited ammo. 
              This simple addition adds <span className="tech-highlight">strategic depth</span> to 
              what could otherwise be a straightforward escape sequence.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/shittyShooterRandom1.png" alt="Key and door generation" />
            <img src="/images/shittyShooterRandom2.png" alt="Banana placement" />
          </div> */}
        </div>
      </section>

      {/* Botón de regreso */}
      <div className="back-button-container">
        <Link to="/projects" className="back-button">
          <span className="arrow">←</span> Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectShityShooter;