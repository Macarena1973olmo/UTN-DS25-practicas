import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// Importamos el ícono del libro abierto
import { FaBookOpen } from 'react-icons/fa'; 

export default function Header() {
  return (
    // 1. Reemplazamos bg="primary" por un style con el degradado
    <Navbar 
        style={{ 
            background: 'linear-gradient(90deg, #ff6b81, #ff9a9e)' 
        }} 
        variant="dark" 
        expand="lg"
    >
      <Container>
        {/* 2. Usamos el ícono moderno en la marca */}
        <Navbar.Brand href="/">
            <FaBookOpen style={{ marginRight: '8px' }} /> 
            Mi Librería
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Usamos ms-auto para alinear a la derecha (como ya lo tienes) */}
          <Nav className="ms-auto"> 
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#libros">Libros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}