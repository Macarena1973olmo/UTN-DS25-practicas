import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    // 1. Eliminamos las clases bg-dark y text-white.
    // 2. Aplicamos el estilo en línea para el degradado y el color del texto.
    <footer 
        className="text-center py-3 mt-5" 
        style={{ 
            // Degradado suave sugerido para el fondo
            background: 'linear-gradient(90deg, #ff9a9e, #fad0c4)', 
            // Usamos el color de texto oscuro (#333333) para que contraste
            color: '#333333', 
            fontSize: '0.9rem',
            // Aseguramos que el footer use todo el ancho
            width: '100%',
        }}
    >
      <Container>
        <p className="mb-0">
            &copy; {new Date().getFullYear()} Mi Librería | Diseño con 💅 estilo.
        </p>
      </Container>
    </footer>
  );
}