import React from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { motion } from 'framer-motion'; 
import { FaSearch } from 'react-icons/fa'; 

// Recibimos catalogo (filtrado), busqueda y onBusquedaChange
export default function FeaturedBooks({ catalogo, busqueda, onBusquedaChange }) {
  
  return (
    <Container className="my-5">
      {/* Muestra la cantidad de resultados */}
      <h2 className="text-center mb-4">Libros Destacados ({catalogo.length} encontrados)</h2> 
      
      {/* BARRA DE BÚSQUEDA CONECTADA */}
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={8} lg={6}>
          <InputGroup className="shadow-sm">
            <Form.Control
              placeholder="Buscar libros por título o autor..."
              aria-label="Buscar libros"
              // Conectamos el valor al estado que viene de App.jsx
              value={busqueda} 
              // Conectamos el onChange al handler que viene de App.jsx
              onChange={onBusquedaChange} 
              style={{ borderRight: 'none', border: '1px solid #ff9a9e', borderRadius: '8px 0 0 8px' }}
            />
            <Button 
                variant="primary"
                id="button-addon2"
                style={{ borderRadius: '0 8px 8px 0' }} 
            >
              <FaSearch style={{ marginRight: '5px' }} />
              Buscar
            </Button>
          </InputGroup>
        </Col>
      </Row>
      
      <Row xs={1} sm={2} md={3} className="g-4">
        {catalogo.map((libro) => ( 
          <Col key={libro.id}>
            <motion.div whileHover={{ scale: 1.05 }}> 
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={libro.imagen} alt={libro.titulo} style={{ height: 250, objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{libro.titulo}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{libro.autor}</Card.Subtitle>
                  <Card.Text>{libro.descripcion}</Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </motion.div> 
          </Col>
        ))}
        
        {/* Mensaje si no hay resultados */}
        {catalogo.length === 0 && (
            <Col xs={12} className="text-center mt-4">
                <p>No se encontraron libros que coincidan con tu búsqueda. 😔</p>
            </Col>
        )}
      </Row>
    </Container>
  );
}