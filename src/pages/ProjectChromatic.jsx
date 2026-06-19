import { Link } from 'react-router-dom';
import '../css/projectChromatic.css';

const ProjectChromatic = () => {
  return (
    <div className="project-page">
      {/* Banner con título */}
      <div className="project-banner">
        <img 
          src="/images/chromaticBattlesBanner.png" 
          alt="Chromatic Battles" 
          className="banner-image"
        />
      </div>

      {/* Descripción corta y botón de Steam */}
      <section className="project-description-short">
        <p className="short-description">
          2D color-matching shooter/survival. Defend your ship by rotating and matching 
          bullet hues to enemies. Unlock new colors, upgrade weapons between levels, 
          and face evolving enemy patterns.
        </p>
        <div className="steam-button-container">
  <a 
    href="https://store.steampowered.com/app/4160010/Chromatic_Battles/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn btn-primary"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
    </svg>
    View on Steam
  </a>
</div>
      </section>

      {/* Sección 1: Creación de mecánicas principales */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Core Mechanics Design
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              <span className="highlight-text">Chromatic Battles</span> blends 
              <span className="tech-highlight"> Tower Defense, Shooter, and Survival</span> genres 
              into a unique experience. The <span className="tech-highlight">color-matching mechanic</span> 
              became the game's core pillar — players must rotate their turret and match weapon colors 
              to enemy hues, creating a dynamic and strategic combat loop.
            </p>
            <p>
              This mechanic allowed us to build a <span className="tech-highlight">progressive difficulty system</span> 
              where new colors and enemy types are introduced gradually. It also defined the game's 
              <span className="tech-highlight"> 2D art style</span>, with vibrant palettes that communicate 
              gameplay information at a glance.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/chromaticMechanic1.png" alt="Color matching mechanic" />
            <img src="/images/chromaticMechanic2.png" alt="Tower defense gameplay" />
          </div> */}
        </div>
      </section>

      {/* Sección 2: Mecánicas de pelea */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Combat Systems & Enemy AI
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              I designed and implemented <span className="tech-highlight">diverse enemy behaviors</span> 
              to keep players constantly adapting. Each enemy type introduces a unique challenge:
              <span className="tech-highlight"> shielded foes, fast rushers, color-shifters, and bosses</span> 
              with multi-phase patterns.
            </p>
            <p>
              This variety forces players to use all available resources — 
              <span className="tech-highlight"> weapons, objects and power-ups</span> — 
              creating a <span className="tech-highlight">strategic layer</span> where quick decisions 
              matter. The result is a combat system that feels fresh even after multiple playthroughs.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/chromaticCombat1.png" alt="Enemy variety and combat" />
            <img src="/images/chromaticCombat2.png" alt="Boss fight mechanics" />
          </div> */}
        </div>
      </section>

      {/* Sección 3: Arquitectura y optimización (SOLID) */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Clean Architecture & SOLID Principles
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              To ensure <span className="tech-highlight">scalability and maintainability</span>, I built 
              the game using <span className="tech-highlight">object-oriented programming (OOP) principles</span>. 
              All <span className="tech-highlight">enemies, weapons, and power-ups inherit from abstract base classes</span> 
              and implement specific interfaces — following the <span className="tech-highlight">Liskov Substitution 
              and Interface Segregation principles</span>.
            </p>
            <p>
              This architecture allows me to <span className="tech-highlight">add new content without modifying existing systems</span>, 
              ensuring <span className="tech-highlight">polymorphism and code reuse</span>. 
              The result is a <span className="tech-highlight">clean, testable, and extensible codebase</span> 
              that follows <span className="tech-highlight">SOLID principles</span>.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/chromaticCode1.png" alt="Code architecture diagram" />
            <img src="/images/chromaticCode2.png" alt="Unity inspector showing ScriptableObjects" />
          </div> */}
        </div>
      </section>

      {/* Sección 4: Sistema de guardado */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Save System & Progression
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              I implemented a <span className="tech-highlight">lightweight JSON save system</span> that 
              preserves player progress, unlocked weapons, shop upgrades, and level completion status. 
              The system uses <span className="tech-highlight">ScriptableObjects as data containers</span>, 
              making it easy to add new saveable data without touching core logic.
            </p>
            <p>
              Data is serialized to <span className="tech-highlight">encrypted JSON files</span> stored locally, 
              ensuring <span className="tech-highlight">fast load times</span> and 
              <span className="tech-highlight">smooth gameplay flow</span>, critical for a game with 
              escalating difficulty and permanent unlocks.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/chromaticSave1.png" alt="Save system UI" />
            <img src="/images/chromaticSave2.png" alt="JSON data structure" />
          </div> */}
        </div>
      </section>

      {/* Trailer */}
      <section className="project-trailer">
        <h2 className="section-title">
          <span className="title-accent">//</span> Watch the Trailer
        </h2>
        <div className="trailer-container">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/RsAAxlmS44c?rel=0&modestbranding=1&autoplay=0"
              title="Chromatic Battles Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
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

export default ProjectChromatic;