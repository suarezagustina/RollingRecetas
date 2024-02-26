import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from "../../assets/logoinicio.png"

const Menu = () => {
    return (
  <Navbar expand="lg" className="bg-white">
  <Container>
    <Navbar.Brand href="#home">
    <img src={logo} className='img-fluid object-fit-cover' id='logonav' alt="logo de sabores secretos" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Recetas</Nav.Link>
        <Nav.Link href="#link">Agregar/editar</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Menu;