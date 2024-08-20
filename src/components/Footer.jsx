import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <>
          <Navbar id='nav' bg="primary" data-bs-theme="dark">
            <Container className="d-flex justify-content-end" >
              <Navbar.Brand className="footer-title" href="/">2024 - Fernanda Fajre</Navbar.Brand>
            </Container>
          </Navbar>
        </>
      );
    }
export default Footer;