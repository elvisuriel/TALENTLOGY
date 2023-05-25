
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#profile">Perfil</Nav.Link>
          <Nav.Link href="#friends">Amigos</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#notifications">Notificaciones</Nav.Link>
          <Nav.Link href="#messages">Mensajes</Nav.Link>
          <Nav.Link href="#settings">Configuración</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
