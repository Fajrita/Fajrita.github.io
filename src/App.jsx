import "./main.css";
import profile from "../public/images/profile.jpg";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
  faArtstation,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";
import galleryData from "./GalleryData";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredImages =
    activeFilter === "*"
      ? galleryData
      : galleryData.filter(
          (image) => image.filter.toUpperCase() === activeFilter
        );

  return (
    <>
      <Container
        fluid
        id="total"
        className="d-flex justify-content-center m-0 p-0"
      >
        <div className=" col-sm-12 col-lg-8 col-sm-10 m-0 p-0">
          {/* === Hero section === */}
          <Element name="hero">
            <Container fluid id="hero" className="pt-3 pb-3 px-3">
              <Row className="my-sm-2 my-md-4"></Row>
              <Row className="justify-content-between">
                <div className="col-md-12 col-sm-12">
                  <Row className=" justify-content-center pt-3">
                    <div className="col-md-8 col-sm-12">
                      <Row className="d-flex justify-content-center pt-3">
                        <h1 className="col-10 my-3">Video Game Developer</h1>
                      </Row>
                      <Row className="d-flex justify-content-center">
                        <p className="col-10 py-3">
                          My diverse background enables me to approach
                          challenges with a broad perspective, allowing me to
                          create more immersive and innovative experiences. I
                          believe that continuous learning and versatility are
                          key to growth.
                          <br />
                          <br />
                          What I enjoy most about game development is the thrill
                          of solving complex challenges in the most efficient
                          and elegant way possible. I strive to turn ideas into
                          engaging and seamless gameplay experiences.
                          <br />
                          <br />
                          <strong>
                            Currently Lead Programmer at NightWave Games
                          </strong>
                        </p>
                      </Row>
                    </div>
                    <div className="col-4 d-none d-md-flex px-3 pt-3 justify-content-end">
                      <img
                        className="img-fluid img--cover"
                        src={profile}
                        alt="foto"
                      />
                    </div>
                  </Row>
                  <Row className="mt-md-5 mt-sm-1">
                    <div className="col-12 p-0 d-flex justify-content-around">
                      <a
                        href="https://github.com/Fajrita"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          className="icon my-3"
                          icon={faGithub}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/fernanda-fajre/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          className="icon my-3"
                          icon={faLinkedin}
                        />
                      </a>
                      <a
                        href="https://www.artstation.com/fajre"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          className="icon my-3"
                          icon={faArtstation}
                        />
                      </a>
                      <a
                        href="https://fajrita.itch.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          className="icon my-3"
                          icon={faItchIo}
                        />
                      </a>
                    </div>
                  </Row>
                </div>
                {/* <div className="col-4 d-none d-md-flex px-3 pt-3 justify-content-end">
              <img className="img-fluid img--cover" src={profile} alt="foto" />
            </div> */}
              </Row>
            </Container>
          </Element>
          {/* === skills section === */}
          <Element name="skills">
            <Container fluid id="skills" className="pt-2 pb-3 px-3">
              <div className="section-title pt-5 pb-1 mb-4">
                <h2>Skills</h2>
                <div className="section-title-border"></div>
              </div>
              <Row className="d-none d-lg-inline m-0">
                <p className="skill-paragraph mb-4">
                  My journey began in architecture and digital design, always
                  driven by a deep passion for technology, especially video
                  games. This passion led me to learn web development and C#,
                  allowing me to bridge the gap between art and technology while
                  understanding the full scope of a project.
                  <br />
                  <br />I am highly curious and constantly learning about
                  different fields, which is why I consider myself
                  multidisciplinary. Creating a great video game requires more
                  than just game knowledge—it demands an understanding of
                  history, culture, psychology, aesthetics, and who knows what
                  else. A project is a world in itself.
                </p>
              </Row>
              <Row>
                <div className="col-md-12 col-lg-6 col-xl-6 mb-sm-4">
                  <div className="col-12">
                    <h4>Video Game Development</h4>
                  </div>
                  <Row className="mb-3">
                    <img
                      className="img-fluid skill-img"
                      src="/images/c.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/unity.png"
                      alt=""
                    />
                  </Row>
                  <div>
                    <h4>2D & 3D Digital Design</h4>
                  </div>
                  <Row className="mb-3">
                    <img
                      className="img-fluid skill-img"
                      src="/images/ps.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/ai.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/pyxel.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/substance.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/designer.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/maya.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/zbrush.png"
                      alt=""
                    />
                  </Row>
                  <div>
                    <h4>Web Development</h4>
                  </div>
                  <Row>
                    <img
                      className="img-fluid skill-img"
                      src="/images/html.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/css.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/js.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/spring.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/java.png"
                      alt=""
                    />
                    <img
                      className="img-fluid skill-img"
                      src="/images/mysql.png"
                      alt=""
                    />
                  </Row>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6 d-none d-md-inline">
                  <Row className="m-0">
                    <h4 className="pb-2">Education</h4>
                    <div className="col-lg-6 col-12">
                      <h6>- Bachelor's Degree in Arts and Humanities</h6>
                      <p className="skill-paragraph d-inline-flex px-2">
                        Pontificia Universidad Católica de Chile
                      </p>
                      <p className="px-1 d-inline-flex skill-year">2013-2018</p>
                      <h6>- Major in Architecture</h6>
                      <p className="skill-paragraph d-inline-flex px-2">
                        Pontificia Universidad Católica de Chile
                      </p>
                      <p className="px-1 d-inline-flex skill-year">2013-2018</p>
                      <h6>- Minor in Film Aesthetics</h6>
                      <p className="skill-paragraph d-inline-flex px-2">
                        Pontificia Universidad Católica de Chile
                      </p>
                      <p className="px-1 d-inline-flex skill-year">2013-2018</p>
                    </div>
                    <div className="col-lg-6 col-12">
                      <h6>- Fullstack JAVA Developer</h6>
                      <p className="skill-paragraph d-inline-flex px-2">
                        Adalid Bootcamp
                      </p>
                      <p className="px-1 d-inline-flex skill-year">2023</p>
                      <h6>
                        - Master's in Video Game Development and Programming
                      </h6>
                      <p className="skill-paragraph d-inline-flex px-2">
                        Center for Innovation Studies
                      </p>
                      <p className="px-1 d-inline-flex skill-year">2023-2024</p>
                    </div>
                  </Row>
                </div>
              </Row>
            </Container>
          </Element>
          {/* === Demo section === */}
          <Element name="demo">
            <Container fluid id="demo" className="pt-2 pb-3 px-3">
              <div className="section-title pt-5 pb-1 mb-4">
                <h2>Juegos</h2>
                <div className="section-title-border"></div>
              </div>
              <Row className="mt-3">
                <div className="col-12 ">
                  <Row className="justify-content-center">
                    <iframe
                      className="col-lg-10 col-md-12"
                      src="https://itch.io/embed/2953132"
                      width="552"
                      height="167"
                    >
                      <a href="https://nightwavegames.itch.io/chromatic-battles">
                        Chromatic Battles by Night Wave Games
                      </a>
                    </iframe>
                    <p className="col-lg-10 d-none d-lg-inline demo-paragraph mt-2 px-3">
                      Developed at NightWave Games - In Progress
                      <br />
                      A space-themed tower defense game where the core mechanics
                      involve rotating your tower and changing weapon colors to
                      match enemy colors.
                      <br />I programmed enemy behavior, weapons, level design,
                      shop system, and save system. A demo is currently
                      available, and the game is still in development.
                    </p>
                  </Row>
                </div>
              </Row>
              <Row className="mt-3">
                <div className="col-12 ">
                  <Row className="justify-content-center">
                    <iframe
                      className="col-lg-10 col-md-12"
                      src="https://itch.io/embed/2665740"
                      width="552"
                      height="167"
                    >
                      <a href="https://fajrita.itch.io/labrats">
                        LabRats by Fajrita
                      </a>
                    </iframe>
                    <p className="col-lg-10 d-none d-lg-inline demo-paragraph mt-2 px-3">
                      GameJam Project - In Progress
                      <br />
                      Participated in the GameDev.js GameJam with the theme:
                      Power.
                      <br />
                      Contributed to scene flow, UX/UI programming, and
                      asset/audio integration.
                      <br />
                      Currently enhancing the game by adding online multiplayer,
                      customizable controls, gamepad support, and overall
                      improvements.
                    </p>
                  </Row>
                </div>
              </Row>
              <div className="section-title pt-5 pb-1 mb-4">
                <h2>Otros</h2>
                <div className="section-title-border"></div>
              </div>
              <Row className="mt-3">
                <div className="col-12 ">
                  <Row className="justify-content-center">
                    <iframe
                      className="col-lg-10 col-md-12"
                      src="https://itch.io/embed/2891243"
                      width="552"
                      height="167"
                    >
                      <a href="https://sudokumail.itch.io/zozobra">
                        Zozobra by Pinky Fairy Studios
                      </a>
                    </iframe>
                    <p className="col-lg-10 d-none d-lg-inline demo-paragraph mt-2 px-3">
                      GameJam Project
                      <br />
                      Participated in WomanGameJam, theme: TimeLoop.
                      <br />
                      Developed enemy state machines, in-game interactions,
                      character and enemy behaviors, and level design.
                      <br />
                      Conducted general reviews and configured audio using
                      Wwise.
                    </p>
                  </Row>
                </div>
              </Row>
              <Row className="mt-3">
                <div className="col-12 ">
                  <Row className="justify-content-center">
                    <iframe
                      className="col-lg-10 col-md-12"
                      src="https://itch.io/embed/2538297"
                      width="552"
                      height="167"
                    >
                      <a href="https://fajrita.itch.io/shitty-shooter">
                        Shitty Shooter by Fajrita
                      </a>
                    </iframe>
                    <p className="col-lg-10 d-none d-lg-inline demo-paragraph mt-2 px-3">
                      Prototype
                      <br />
                      Programming and asset integration exercise in Unity 3D. A
                      first-person shooter in the style of Doom, where you play
                      as a monkey trying to escape from veterinarians by
                      throwing feces at them.
                      <br />
                      Exploration of different movement systems: RigidBody,
                      Transform, Character Controller, and the creation of a
                      basic HUD.
                    </p>
                  </Row>
                </div>
              </Row>
              <Row className="mt-3">
                <div className="col-12 ">
                  <Row className="justify-content-center">
                    <iframe
                      className="col-lg-10 col-md-12"
                      src="https://itch.io/embed/2634017"
                      width="552"
                      height="167"
                    >
                      <a href="https://fajrita.itch.io/croco-western">
                        Croco Western by Fajrita
                      </a>
                    </iframe>
                    <p className="col-lg-10 d-none d-lg-inline demo-paragraph mt-2 px-3">
                      3D Modeling
                      <br />
                      Creation of 3D assets and characters, including modeling,
                      texturing, and integration into Unity.
                      <br />
                      Exploration of lighting and environmental SFX.
                    </p>
                  </Row>
                </div>
              </Row>
            </Container>
          </Element>
          {/* === Gallery section === */}
          <Element name="gallery">
            <Container fluid id="gallery" className="pt-2 pb-3 px-3">
              <div className="section-title pt-5 pb-1 mb-4 ">
                <h2>Gallery</h2>
                <div className="section-title-border"></div>
              </div>
              <Row className="mt-4">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li
                      data-filter="*"
                      className={activeFilter === "*" ? "filter-active" : ""}
                      onClick={() => handleFilterClick("*")}
                    >
                      All
                    </li>
                    <li
                      className={activeFilter === "2D" ? "filter-active" : ""}
                      onClick={() => handleFilterClick("2D")}
                    >
                      2D
                    </li>
                    <li
                      className={activeFilter === "3D" ? "filter-active" : ""}
                      onClick={() => handleFilterClick("3D")}
                    >
                      3D
                    </li>
                    <li
                      className={activeFilter === "WEB" ? "filter-active" : ""}
                      onClick={() => handleFilterClick("WEB")}
                    >
                      Web
                    </li>
                  </ul>
                </div>
              </Row>
              <Row className="mx-3 mx-sm-0 mx-xl-3 d-flex">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    className={`gallery-container d-flex col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 filter-${image.filter}`}
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }}
                  >
                    {image.src.endsWith(".mp4") ? (
                      <video controls className="gallery-img img-fluid rounded">
                        <source src={image.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        className="gallery-img img-fluid rounded"
                        src={image.src}
                        alt={`media-${index}`}
                      />
                    )}
                  </div>
                ))}
                <Modal
                  isOpen={lightboxOpen}
                  onClose={() => setLightboxOpen(false)}
                  images={filteredImages}
                  currentIndex={lightboxIndex}
                />
              </Row>
            </Container>
          </Element>
          {/* === Contact section === */}
          <Element name="contact">
            <Container fluid id="contact" className="pt-2 pb-3 px-3">
              <div className="section-title pt-5 pb-1 mb-4">
                <h2>Contact</h2>
                <div className="section-title-border"></div>
              </div>
              <Row className="mt-4">
                {/* Contact Details Column */}
                <div className="col-12 col-md-4">
                  <div className="d-flex my-2">
                    <FontAwesomeIcon
                      className="mx-3 contact-icon"
                      icon={faEnvelope}
                      size="2x"
                    />
                    <h6 className="pt-1 px-2">ffajrec@gmail.com</h6>
                  </div>
                  <div className="d-flex my-2">
                    <FontAwesomeIcon
                      className="mx-3 contact-icon"
                      icon={faWhatsapp}
                      size="2x"
                    />
                    <h6 className="d-inline pt-1 px-2">+56 984480140</h6>
                  </div>
                  <div className="d-flex my-2">
                    <FontAwesomeIcon
                      className="mx-3 contact-icon"
                      icon={faHouse}
                      size="2x"
                    />
                    <h6 className="d-inline pt-1 px-2">Santiago - Chile</h6>
                  </div>
                </div>

                {/* GitHub, LinkedIn, ArtStation */}
                <div className="col-4 d-none d-md-block">
                  <div className="d-inline my-2">
                    <a
                      href="https://github.com/Fajrita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="mx-3 contact-icon"
                        icon={faGithub}
                        size="2x"
                      />
                    </a>
                    <h6 className="pt-1 px-2 d-inline">Fajrita</h6>
                  </div>
                  <div className="d-flex my-2">
                    <a
                      href="https://www.linkedin.com/in/fernanda-fajre/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="mx-3 contact-icon"
                        icon={faLinkedin}
                        size="2x"
                      />
                    </a>
                    <h6 className="pt-2 px-2 d-inline">Fernanda Fajre</h6>
                  </div>
                  <div className="d-flex my-2">
                    <a
                      href="https://www.artstation.com/fajre"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="mx-3 contact-icon"
                        icon={faArtstation}
                        size="2x"
                      />
                    </a>
                    <h6 className="pt-1 px-2 d-inline">Fajre</h6>
                  </div>
                </div>

                {/* itch.io Column */}
                <div className="col-4 d-none d-md-block">
                  <div className="d-flex my-2">
                    <a
                      href="https://fajrita.itch.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="mx-3 contact-icon"
                        icon={faItchIo}
                        size="2x"
                      />
                    </a>
                    <h6 className="pt-1 px-2 d-inline">Fajrita</h6>
                  </div>
                </div>
              </Row>
            </Container>
          </Element>
        </div>
      </Container>
    </>
  );
}

export default App;
