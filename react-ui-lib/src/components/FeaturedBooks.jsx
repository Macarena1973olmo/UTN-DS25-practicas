import React from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap'; // Importamos Form y InputGroup
import { motion } from 'framer-motion'; 
import { FaSearch } from 'react-icons/fa'; // Importamos el ícono de búsqueda (asegúrate de tener react-icons instalado)

const libros = [
  { id: 1, titulo: 'Cien Años de Soledad', autor: 'G. G. Márquez', imagen: '/src/assets/libro1.jpg', descripcion: 'Un clásico de la literatura latinoamericana.' },
  { id: 2, titulo: 'Rayuela', autor: 'J. Cortázar', imagen: '/src/assets/libro2.jpg', descripcion: 'Una novela única y experimental.' },
  { id: 3, titulo: 'El Principito', autor: 'A. Saint-Exupéry', imagen: '/src/assets/libro3.jpg', descripcion: 'Una fábula poética e inolvidable.' }
];

export default function FeaturedBooks() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Libros Destacados</h2>
      
      {/* INICIO: BARRA DE BÚSQUEDA (Filtro Visual) */}
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={8} lg={6}>
          <InputGroup className="shadow-sm">
            <Form.Control
              placeholder="Buscar libros por título o autor..."
              aria-label="Buscar libros"
              // Estilo del input para que combine con la paleta
              style={{ borderRight: 'none', border: '1px solid #ff9a9e', borderRadius: '8px 0 0 8px' }}
            />
            <Button 
                variant="primary"
                id="button-addon2"
                // Estilo del botón para que combine con la paleta
                style={{ borderRadius: '0 8px 8px 0' }} 
            >
              <FaSearch style={{ marginRight: '5px' }} />
              Buscar
            </Button>
          </InputGroup>
        </Col>
      </Row>
      {/* FIN: BARRA DE BÚSQUEDA */}
      
      <Row xs={1} sm={2} md={3} className="g-4">
        {libros.map((libro) => (
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
      </Row>
    </Container>
  );
}