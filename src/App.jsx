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
                        <h1 className="col-10 my-3">
                          Desarrolladora de Videojuegos
                        </h1>
                      </Row>
                      <Row className="d-flex justify-content-center">
                        <p className="col-10 py-3">
                          La combinación de mis distintas formaciones es lo que
                          me permite ver las cosas desde una visión mas amplia.
                          Aprender de todo un poco para ser alguien más completo
                          es lo que me llena.
                          <br />
                          <br />
                          Lo que más disfruto a la hora de realizar un proyecto
                          es encontrar soluciones a los desafíos que se van
                          presentando, mientras más simple mejor.
                          <br />
                          <br />
                          <strong>
                            Actualmente Lead Programer en NightWave Games
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
                <h2>Habilidades</h2>
                <div className="section-title-border"></div>
              </div>
              <Row className="d-none d-lg-inline m-0">
                <p className="skill-paragraph mb-4">
                  Empecé mi camino en la arquitectura y el diseño digital,
                  siempre con una gran pasión por la tecnología y en especial
                  los videojuegos, lo que me llevó a aprender programación web y
                  C#. Con este mix de conocimientos puedo comprender la
                  totalidad de un proyecto y enlazar el arte con la tecnica.
                  <br />
                  <br />
                  Soy alguien muy curioso y estoy aprendiendo sobre distintas
                  cosas constántemente, por eso me considero alguien
                  multidisiplinario. Pues para realizar un buen videojuego no
                  solo hay que saber de juegos, tambien hay que saber de
                  historia, cultura, psicología, estética y quién sabe que más.
                  Un proyecto es un mundo en sí mismo.
                </p>
              </Row>
              <Row>
                <div className="col-md-12 col-lg-6 col-xl-6 mb-sm-4">
                  <div className="col-12">
                    <h4>Desarrollo de Videojuegos</h4>
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
                    <h4>Diseño Digital 2D y 3D</h4>
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
                    <h4>Programación Web</h4>
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
                <div className="col-md-12 col-lg-6 col-xl-6  d-none d-md-inline">
                  <Row className="m-0">
                    <h4 className="pb-2">Estudios</h4>
                    <div className="col-lg-6 col-12">
                      <h6>- Licenciatura en Artes y Humanidades</h6>
                      <p className="skill-paragraph d-inline-flex  px-2">
                        Pontificia Universidad Católica de Chile
                      </p>
                      <p className="px-1 d-inline-flex skill-year">2013-2018</p>
                      <h6>- Mayor en Arquitectura</h6>
                      <p className="skill-paragraph d-inline-flex  px-2">
                        Pontificia Universidad Católica de Chile
                      </p>
                      <p className="px-1 d-inline-flex skill-year">2013-2018</p>
                      <h6>- Minor en Estética del Cine</h6>
                      <p className="skill-paragraph d-inline-flex  px-2">
                        Pontificia Universidad Católica de Chile
                      </p>
                      <p className="px-1 d-inline-flex skill-year">2013-2018</p>
                    </div>
                    <div className="col-lg-6 col-12">
                      <h6>- Desarrollador Fullstack JAVA</h6>
                      <p className="skill-paragraph d-inline-flex  px-2">
                        Adalid Bootcamp
                      </p>
                      <p className="px-1 d-inline-flex skill-year">2023</p>
                      <h6>
                        - Master en Desarrollo y Prgramacion de Videojuegos
                      </h6>
                      <p className="skill-paragraph d-inline-flex  px-2">
                        Centro de Estudios de Innovación
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
                      Juego desarrollado en NightWave Games - En curso
                      <br />
                      Tower defense espacial dondecontrolar el giro de tu torre
                      y cambiar el color de las armas para que calce con el de
                      los enemigos son las mecanicas principales.
                      <br />
                      Realice toda la programacion de enemigos, armas, niveles,
                      tienda y sistema de guardado. Posee un Demo y se encuentra
                      en proceso de ser terminado.
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
                      Proyecto GameJam - En curso
                      <br />
                      Participacion en GameDev.js GameJam, tema Power.
                      <br />
                      Realize el flujo de información entre escenas,
                      programación UX/UI e integración de assets y audio. <br />
                      Actualmente se encuentra en proceso de mejora. Integración
                      de juego Online, personalización de controles,
                      compatibilidad con mandos y mejoras generales.
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
                      Proyecto GameJam
                      <br />
                      Participacion en WomanGameJam, tema TimeLoop.
                      <br />
                      Realize la maquina de Estados de enemigos, Interacciónes
                      inGame, personaje, enemigos, items. Level Design
                      <br />
                      Revisiones generales, audio configurado en Wwise.
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
                      Prototipo
                      <br />
                      Ejercicio de programación e integración de assets en Unity
                      3D. Shooter 3D estilo Doom donde eres un mono que escapa
                      de veterinarios lanzandoles tus heces
                      <br />
                      Exploración en distintos tipos de movimiento. RigidBody,
                      Transform, Character Controller, Hud basico.
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
                      Modelaje 3D
                      <br />
                      Creación de assets y personaje en 3D, modelado,
                      texturizado e integración en Unity. <br />
                      Exploración de iluminación y SFX de ambiente.
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
                <h2>Galería</h2>
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
                      Todo
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
                <h2>Contacto</h2>
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
