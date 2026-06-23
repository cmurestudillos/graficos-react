import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../../assets/img/logo.png';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="bg-custom">
        <Navbar.Brand>
          <img src={logo} alt="Logo" title="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/linea" className="active me-2">
              Lineas
            </NavLink>
            <NavLink to="/barra" className="active me-2">
              Barras
            </NavLink>
            <NavLink to="/donut" className="active me-2">
              Donut
            </NavLink>
            <NavLink to="/radar" className="active me-2">
              Radar
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
