import { Link } from "react-router-dom";
import "../css/projectOhMyMadness.css";

const ProjectOhMyMadness = () => {
  return (
    <div className="project-page">
      {/* Banner con título */}
      <div className="project-banner">
        <img
          src="/images/ohMyMadnessBanner.png"
          alt="Oh My Madness!"
          className="banner-image"
        />
      </div>

      {/* Descripción corta */}
      <section className="project-description-short">
        <p className="short-description">
          A chaotic collectible card game for Android where madness reigns.
          Fight opponents with bizarre cards — where swords heal and flying
          sharks attack — climb a tower of increasing difficulty, and upgrade
          your deck to reach the top.
        </p>
        {/* <div className="playstore-button-container">
          <a
            href="https://play.google.com/store/apps/details?id=com.LionsRoarGames.OhMyMadness"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414C17.523 15.3414 16.1531 17.141 15.8122 17.5004C15.4713 17.8598 15.0504 17.8598 14.7895 17.6009C14.5486 17.342 14.4686 17.1031 14.1877 16.8042C13.9068 16.5053 12.5168 15.2456 12.5168 15.2456L10.187 17.6009C9.92608 17.8598 9.50517 17.8798 9.18427 17.6009C8.86338 17.322 8.86338 16.9241 9.12428 16.6652L11.4741 14.3099C11.4741 14.3099 9.26526 12.2343 8.92437 11.8949C8.58348 11.5555 8.74302 11.2566 9.00424 11.1167C9.22464 11.0014 9.50554 11.0014 9.84643 11.2363C10.1873 11.4712 12.4162 13.4269 12.4162 13.4269L14.3661 11.4958C14.3661 11.4958 13.0162 10.1962 12.7161 9.91688C12.416 9.63759 12.5962 9.33867 12.8574 9.23878C13.1186 9.13889 13.3798 9.19882 13.6202 9.39878C13.8606 9.59873 15.6317 11.2961 15.6317 11.2961L17.9626 9.13889C18.1434 8.96083 18.4031 8.95871 18.505 9.13113C18.6069 9.30355 18.505 9.59873 18.2238 9.8568L17.523 15.3414ZM6.1839 19.2417H4.60404V5.342H6.1839V19.2417ZM19.3476 7.26283H8.76524V5.342H17.0408V6.16914L19.3476 5.76239V7.26283ZM8.76524 8.08998V17.7308H19.3476V8.08998H8.76524ZM3.87622 4.51485L5.45608 4.51485V5.342H3.87622V4.51485ZM3.87622 19.2417H5.45608V20.0689H3.87622V19.2417Z" />
            </svg>
            View on Google Play
          </a>
        </div> */}
      </section>

      {/* Sección 1: Descripción del juego */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> The Game
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              <span className="highlight-text">Oh My Madness!</span> is a
              <span className="tech-highlight">
                {" "}
                collectible card dueling game
              </span>{" "}
              for Android developed with the team at{" "}
              <span className="tech-highlight">Lions Roar Games</span>. Players
              battle opponents by playing cards that deal damage to enemy cards
              and their opponent's health — the goal is to{" "}
              <span className="tech-highlight">
                reduce the opponent's life to zero
              </span>
              .
            </p>
            <p>
              The game's lore is built around a{" "}
              <span className="tech-highlight">Tower of Madness</span>, where
              each defeated enemy represents a floor climbed. The cards
              themselves embrace absurdity —{" "}
              <span className="tech-highlight">
                swords that heal instead of cut, flying sharks, and other
                bizarre effects
              </span>{" "}
              — creating a chaotic and unpredictable experience that matches the
              game's name.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/ohMyMadnessGame1.png" alt="Card duel gameplay" />
            <img src="/images/ohMyMadnessGame2.png" alt="Card collection and deck building" />
          </div> */}
        </div>
      </section>

      {/* Sección 2: UI & Touch System */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Mobile UI Architecture &
          Touch Systems
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              As the game is{" "}
              <span className="tech-highlight">
                fully touch-based for mobile devices
              </span>
              , I built the entire UI system with{" "}
              <span className="tech-highlight">Unity's UI Toolkit</span>
              and event handlers like{" "}
              <span className="tech-highlight">
                IPointerEnterHandler, IDragHandler, IPointerClickHandler
              </span>{" "}
              — ensuring responsive and intuitive interactions for card
              selection, dragging, and placement.
            </p>
            <p>
              All scenes are configured with{" "}
              <span className="tech-highlight">anchor-based layout</span>
              to support{" "}
              <span className="tech-highlight">
                multiple screen sizes and resolutions
              </span>
              , from phones to tablets. The UI adapts seamlessly to different
              aspect ratios, maintaining readability and usability across
              devices.{" "}
              <span className="tech-highlight">
                Canvas scaling and safe area handling
              </span>{" "}
              ensure the game looks and feels native on any Android device.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/ohMyMadnessUI1.png" alt="Touch interface on mobile" />
            <img src="/images/ohMyMadnessUI2.png" alt="Responsive UI on different devices" />
          </div> */}
        </div>
      </section>

      {/* Sección 3: VFX & Visual Effects */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> VFX & Combat Effects
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              I created and implemented all{" "}
              <span className="tech-highlight">VFX for card attacks</span>
              using a combination of techniques. Effects are built from
              <span className="tech-highlight">
                {" "}
                library sprites, Unity's Particle System, and Line Renderer
              </span>
              to produce impactful visual feedback for every action — from card
              placement to special ability triggers.
            </p>
            <p>
              The result is a{" "}
              <span className="tech-highlight">
                visually polished experience
              </span>{" "}
              that feels responsive and satisfying on every touch.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/ohMyMadnessVFX1.png" alt="Attack effects in combat" />
            <img src="/images/ohMyMadnessVFX2.png" alt="Particle systems and line renderers" />
          </div> */}
        </div>
      </section>

      {/* Sección 4: Game Balance & Progression */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> Game Balance & Progression
          Systems
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              I handled the{" "}
              <span className="tech-highlight">
                stat balancing and progression systems
              </span>
              — including health, attack power, card costs, and elemental
              effects.
              <span className="tech-highlight">
                Combat systems and reward structures
              </span>{" "}
              were iterated to create a{" "}
              <span className="tech-highlight">smooth difficulty curve</span>{" "}
              that keeps players engaged as they climb the Tower of Madness.
            </p>
            <p>
              The{" "}
              <span className="tech-highlight">
                level progression and card unlock system
              </span>
              was designed to encourage{" "}
              <span className="tech-highlight">strategic deck building</span>,
              with new cards introduced at a pace that allows players to
              experiment and adapt their strategies.{" "}
              <span className="tech-highlight">
                Daily missions and challenges
              </span>{" "}
              provide additional goals and rewards, extending the game's
              longevity.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/ohMyMadnessBalance1.png" alt="Card stats and balancing" />
            <img src="/images/ohMyMadnessBalance2.png" alt="Progression and unlock system" />
          </div> */}
        </div>
      </section>

      {/* Sección 5: In-App Purchases */}
      <section className="project-section">
        <h2 className="section-title">
          <span className="title-accent">//</span> In-App Purchases &
          Monetization
        </h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              I implemented the{" "}
              <span className="tech-highlight">in-app purchase system</span>{" "}
              using
              <span className="tech-highlight">
                {" "}
                Unity's Google Play In-App Purchasing (IAP) plugin
              </span>
              . Players can purchase{" "}
              <span className="tech-highlight">"Pills"</span> — the game's
              premium currency — which are used to{" "}
              <span className="tech-highlight">
                upgrade cards and unlock new ones
              </span>
              .
            </p>
            <p>
              The system handles{" "}
              <span className="tech-highlight">
                product initialization and purchase validation
              </span>{" "}
              with robust error handling and fallback mechanisms.{" "}
 All purchases are
              non-consumable or consumable depending on the item type, with{" "}
              <span className="tech-highlight">real-time reflection</span> in
              the player's inventory.
            </p>
          </div>
          {/* <div className="section-images two-columns">
            <img src="/images/ohMyMadnessIAP1.png" alt="In-app purchase shop" />
            <img src="/images/ohMyMadnessIAP2.png" alt="Card upgrade with Pills" />
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

export default ProjectOhMyMadness;
