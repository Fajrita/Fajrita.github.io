import { Link } from 'react-router-dom';
import '../css/projectLabRats.css';

const ProjectLabRats = () => {
  return (
    <div className="project-page">
      {/* Banner con título */}
      <div className="project-banner">
        <img 
          src="/images/labRatsBanner.png" 
          alt="LabRats" 
          className="banner-image"
        />
      </div>

      {/* Descripción corta */}
      <section className="project-description-short">
        <p className="short-description">
          Chaotic 2D fighter where mutations rule. Up to 4 players — locally or online — 
          unleash random abilities in unpredictable matches. Full gamepad support and 
          customizable controls.
        </p>
        <div className="steam-button-container">
  <a 
    href="https://fajrita.itch.io/labrats" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn btn-primary"
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
              <span className="highlight-text">LabRats</span> was born during the 
              <span className="tech-highlight"> GameDev.js GameJam (2023)</span> with the theme 
              <span className="tech-highlight"> "Power"</span>. With limited time to deliver 
              something playable, we needed a creative twist that would make our game stand out.
            </p>
            <p>
              We landed on <span className="tech-highlight">randomization as the core mechanic</span> — 
              rats acquire mutations that grant unique abilities, making each match unpredictable. 
              This approach allowed us to <span className="tech-highlight">create surprising gameplay 
              with limited development time</span>, turning a constraint into a feature. 
              The result is a fighting game where no two matches feel the same.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/labRatsJam1.png" alt="Game Jam screenshot" />
            <img src="/images/labRatsJam2.png" alt="Mutation system preview" />
          </div> */}
        </div>
      </section>

      {/* Sección 2: UX/UI Implementación */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> UX/UI Implementation
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              Working under <span className="tech-highlight">Game Jam time constraints</span>, 
              I designed and implemented a <span className="tech-highlight">clean, intuitive UI system</span> 
              that communicates critical information without cluttering the battle scene. 
              Players need to know <span className="tech-highlight">which rat they're controlling</span> 
              at all times — especially in chaotic 4-player matches.
            </p>
            <p>
              The solution was a <span className="tech-highlight">minimal HUD with color-coded player indicators</span> 
              and health bars that integrate seamlessly into the lower part of the scene. 
              This approach keeps the <span className="tech-highlight">focus on the action</span> 
              while ensuring players never lose track of their character.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/labRatsUI1.png" alt="In-game UI screenshot" />
            <img src="/images/labRatsUI2.png" alt="Character selection screen" />
          </div> */}
        </div>
      </section>

      {/* Sección 3: Gamepad y Control System */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Customizable Controls & Gamepad Support
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              One of the most technically challenging features was implementing 
              <span className="tech-highlight"> fully customizable controls for both keyboard and gamepad</span>. 
              The system allows players to <span className="tech-highlight">remap every action</span> — 
              movement, attacks and menu controls — to any key or button.
            </p>
            <p>
              I built the input system using <span className="tech-highlight">Unity's Input System package</span>, 
              which provides robust support for <span className="tech-highlight">multiple controllers, 
              device hot-swapping, and disconnection handling</span>. The game detects when a controller 
              is connected or disconnected in real-time, pauses input from disconnected devices, 
              and allows players to <span className="tech-highlight">reconnect without restarting the match</span>.
              This ensures a <span className="tech-highlight">smooth local multiplayer experience</span> 
              even in chaotic party-game scenarios.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/labRatsControls1.png" alt="Controls configuration menu" />
            <img src="/images/labRatsControls2.png" alt="Gamepad connection UI" />
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
              src="https://www.youtube-nocookie.com/embed/b54TS8Dx4tM"
              title="LabRats Trailer"
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

export default ProjectLabRats;