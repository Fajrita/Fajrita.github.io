import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navi.css';
import { scroller } from 'react-scroll';

function Navi() {

  const scrollToSection = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -40,
    });
  };

    return (
        <>
          <Navbar fixed="top" id='nav' bg="primary" data-bs-theme="dark">
            <Container className=" justify-content-start d-none d-md-flex">
              <Navbar.Brand className="nav-title" onClick={() => scrollToSection('hero')}>Fernanda Fajre</Navbar.Brand>
              <Nav className=" nav-links me-auto d-flex justify-content-start">
                <Nav.Link className="px-3" onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
                <Nav.Link className="px-3" onClick={() => scrollToSection('gallery')}>Gallery</Nav.Link>
                <Nav.Link className="px-3" onClick={() => scrollToSection('demo')}>Demos</Nav.Link>
                <Nav.Link className="px-3" onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    }
export default Navi;