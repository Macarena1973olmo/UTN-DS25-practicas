import React, { createContext, useContext, useState } from 'react';

// 1. Crear el contexto (se exporta para que el Provider lo use)
const ThemeContext = createContext();

// 2. Crear el Proveedor (donde reside el estado)
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('claro'); // Estado del tema

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'claro' ? 'oscuro' : 'claro'));
  };

  // El valor que se comparte a todos los hijos
  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook para usar el contexto fácilmente
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
}