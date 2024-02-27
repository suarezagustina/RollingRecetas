import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from "../../assets/logoinicio.png"
import {Link, NavLink} from "react-router-dom"

const Menu = () => {
    return (
  <Navbar expand="lg" className="bg-white">
  <Container>
    <Navbar.Brand as={Link} to="/">
    <img src={logo} className='img-fluid object-fit-cover' id='logonav' alt="logo de sabores secretos" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavLink end className="nav-link" to="/">Inicio</NavLink>
        <NavLink end className="nav-link" to="/creador/creareceta">Recetas</NavLink>
        <NavLink end className="nav-link" to="/creador">Agregar/editar</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Menu;