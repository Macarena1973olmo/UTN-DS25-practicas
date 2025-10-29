// src/components/ThemeToggle.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext'; // Importamos el hook que nos da el contexto

export default function ThemeToggle() {
  // Obtenemos el estado y la función del contexto
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      // Si el tema es claro, el botón se ve oscuro y viceversa
      variant={theme === 'claro' ? 'dark' : 'light'} 
      onClick={toggleTheme}
      className="ms-3" // Margen a la izquierda para separarlo de la navegación
    >
      Cambiar a tema {theme === 'claro' ? 'Oscuro 🌙' : 'Claro ☀️'}
    </Button>
  );
}