import { useState, useEffect } from 'react';

// Custom Hook para manejar peticiones HTTP
export function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        setCargando(true);
        setError(null);
        
        // Simulación: Usaremos una URL de prueba de libros/productos
        const response = await fetch(url);

        if (!response.ok) {
          // Lanza un error si la respuesta HTTP no es exitosa (ej: 404, 500)
          throw new Error(`Error en la petición: ${response.statusText}`); 
        }

        const resultado = await response.json();
        setDatos(resultado);

      } catch (error) {
        // Captura errores de red o errores lanzados
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };
    
    obtenerDatos();
  // El efecto se ejecuta solo cuando la URL cambia (o al montar, si la URL es fija)
  }, [url]); 

  // Devuelve los datos, el estado de carga y el estado de error
  return { datos, cargando, error };
}