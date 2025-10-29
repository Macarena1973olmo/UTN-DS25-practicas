import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <Container className="my-5 py-4">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h2 className="text-center mb-5" style={{ color: '#ff6b81' }}>
            Contáctanos 💌
          </h2>
          
          <Row className="g-4">
            {/* Columna de Información de Contacto */}
            <Col md={4} className="d-flex flex-column justify-content-center text-center">
              <div className="mb-4">
                <FaEnvelope size={24} style={{ color: '#ff6b81' }} />
                <h5 className="mt-2">Email</h5>
                <p className="text-muted">infomaca@milibros.com</p>
              </div>
              <div className="mb-4">
                <FaPhone size={24} style={{ color: '#ff6b81' }} />
                <h5 className="mt-2">Teléfono</h5>
                <p className="text-muted">+54 11 2214542669</p>
              </div>
              <div className="mb-4">
                <FaMapMarkerAlt size={24} style={{ color: '#ff6b81' }} />
                <h5 className="mt-2">Ubicación</h5>
                <p className="text-muted">La Plata n°4545</p>
              </div>
            </Col>

            {/* Columna del Formulario */}
            <Col md={8}>
              <div className="p-4 rounded shadow-sm" style={{ backgroundColor: 'white', border: '1px solid #ff9a9e20' }}>
                <Form>
                  {/* Nombre */}
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" />
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                  </Form.Group>

                  {/* Mensaje */}
                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." />
                  </Form.Group>

                  {/* El botón ya tiene el estilo coral gracias a App.css */}
                  <Button variant="primary" type="submit" className="w-100 mt-3">
                    Enviar Mensaje
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}