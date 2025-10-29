import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';

// Recibe la función de callback 'onAgregarLibro' como prop
export default function AddBookForm({ onAgregarLibro }) {
  
  // Estado de objeto para manejar los datos del formulario [cite: 209]
  const [nuevoLibro, setNuevoLibro] = useState({
    titulo: '',
    autor: '',
    descripcion: '',
    // La imagen será una fija o placeholder para simplificar el estado 
    imagen: '/src/assets/libro_placeholder.jpg'
  });

  // Handler genérico para actualizar cualquier campo del estado de objeto [cite: 213]
  const actualizarCampo = (e) => {
    const { name, value } = e.target;
    setNuevoLibro({
      ...nuevoLibro, // Mantener los valores existentes [cite: 216]
      [name]: value // Actualizar el campo por su nombre [cite: 217]
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); // Evitar recarga de página [cite: 222]
    
    if (nuevoLibro.titulo.trim() && nuevoLibro.autor.trim()) {
      // Llamamos a la función callback del padre, pasándole el nuevo objeto de libro
      onAgregarLibro({
        ...nuevoLibro,
        id: Date.now(), // ID único simple [cite: 446]
        // Las descripciones son muy cortas, las dejamos así
        descripcion: nuevoLibro.descripcion || 'Sin descripción.'
      });
      
      // Limpiar el formulario después de enviar [cite: 224]
      setNuevoLibro({ titulo: '', autor: '', descripcion: '', imagen: '/src/assets/libro_placeholder.jpg' });
    } else {
      alert('Por favor, completa el título y el autor.');
    }
  };

  return (
    <Container className="my-5 py-4">
      <h2 className="text-center mb-4" style={{ color: '#ff6b81' }}>
        <FaPlusCircle style={{ marginRight: '8px' }} /> Agregar un Nuevo Libro
      </h2>
      <div className="p-4 rounded shadow-lg mx-auto" style={{ maxWidth: '600px', backgroundColor: 'white' }}>
        <Form onSubmit={manejarEnvio}>
          
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" name="titulo" placeholder="Título del libro" value={nuevoLibro.titulo} onChange={actualizarCampo} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Autor</Form.Label>
            <Form.Control type="text" name="autor" placeholder="Nombre del autor" value={nuevoLibro.autor} onChange={actualizarCampo} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} name="descripcion" placeholder="Descripción breve" value={nuevoLibro.descripcion} onChange={actualizarCampo} />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Añadir al Catálogo
          </Button>
        </Form>
      </div>
    </Container>
  );
}