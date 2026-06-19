import { Link } from 'react-router-dom';
import '../css/projectZozobra.css';

const ProjectZozobra = () => {
  return (
    <div className="project-page">
      {/* Banner con título */}
      <div className="project-banner">
        <img 
          src="/images/zozobraBanner.png" 
          alt="Zozobra" 
          className="banner-image"
        />
      </div>

      {/* Descripción corta */}
      <section className="project-description-short">
        <p className="short-description">
          A young child must face their fears and anxiety in a mysterious dungeon. 
          Guided by spirit statues inspired by tarot arcana, they gain tools to survive 
          and overcome their inner demons.
        </p>
        <div className="itchio-button-container">
          <a 
            href="https://sudokumail.itch.io/zozobra" 
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

      {/* Sección 1: Game Jam */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Game Jam Origins
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              <span className="highlight-text">Zozobra</span> was created during the 
              <span className="tech-highlight"> Woman Game Jam 2024</span> in just 
              <span className="tech-highlight"> 48 hours</span>. The game explores the journey 
              of a defenseless child sent to conquer a dungeon — only to be resurrected 
              after each death by a curious dungeon master who wants to see how far they can go.
            </p>
            <p>
              The narrative tackles <span className="tech-highlight">anxiety and fear</span> 
              through a metaphorical lens. The child receives guidance from 
              <span className="tech-highlight">spirit statues inspired by tarot arcana</span>, 
              serving as maternal figures that provide tools and wisdom to overcome increasingly 
              difficult situations. It's a game about <span className="tech-highlight">perseverance, 
              inner strength, and learning to manage anxiety</span>.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/zozobraJam1.png" alt="Game Jam screenshot" />
            <img src="/images/zozobraJam2.png" alt="Spirit statue concept art" />
          </div> */}
        </div>
      </section>

      {/* Sección 2: Enemy Behavior & Anxiety System */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Enemy AI & Anxiety Mechanics
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              I implemented the <span className="tech-highlight">enemy behavior using State Machines</span>, 
              where each enemy type has distinct states that activate based on the player's proximity 
              and line of sight. When the player enters their <span className="tech-highlight">vision cone</span>, 
              enemies switch from idle to chase mode — creating a <span className="tech-highlight">constant 
              sense of tension and anxiety</span> that fits the game's emotional core.
            </p>
            <p>
              To reinforce this feeling, I developed an <span className="tech-highlight">anxiety system</span> 
              that affects the player's health. <span className="tech-highlight">As anxiety increases, 
              the screen gradually darkens</span>, audio distorts, and the environment becomes harder 
              to navigate — directly impacting gameplay. <span className="tech-highlight">Abilities like 
              generating light</span> can reduce anxiety and distract enemies, giving players tools to 
              regain control when situations become overwhelming.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/zozobraEnemy1.png" alt="Enemy vision cone and chase behavior" />
            <img src="/images/zozobraEnemy2.png" alt="Anxiety system screen effect" />
          </div> */}
        </div>
      </section>

      {/* Sección 3: Level Design */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Level Design & Player Progression
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              I was also responsible for the <span className="tech-highlight">level design</span>, 
              creating a sense of <span className="tech-highlight">progression and pacing</span> throughout 
              the dungeon. The level alternates between <span className="tech-highlight">safe zones 
              (spirit statues that offer guidance and rest)</span> and dangerous areas patrolled by enemies.
            </p>
            <p>
              This structure ensures that even within a small scope, players feel a 
              <span className="tech-highlight">rhythm of tension and relief</span> — facing threats, 
              then finding a moment of safety to recharge.           
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/zozobraLevel1.png" alt="Safe zone with spirit statue" />
            <img src="/images/zozobraLevel2.png" alt="Dangerous enemy encounter" />
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

export default ProjectZozobra;