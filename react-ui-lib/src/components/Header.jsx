import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBookOpen } from 'react-icons/fa'; 
// 🎯 Importamos el nuevo componente
import ThemeToggle from './ThemeToggle'; 

export default function Header() {
  return (
    <Navbar 
        style={{ 
            background: 'linear-gradient(90deg, #ff6b81, #ff9a9e)' 
        }} 
        variant="dark" 
        expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
            <FaBookOpen style={{ marginRight: '8px' }} /> 
            Mi Librería
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#libros">Libros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        {/* 🎯 AGREGAMOS EL BOTÓN DE CAMBIO DE TEMA FUERA DEL COLLAPSE */}
        <ThemeToggle /> 
      </Container>
    </Navbar>
  );
}