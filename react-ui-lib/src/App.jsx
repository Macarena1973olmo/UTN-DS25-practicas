import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FeaturedBooks from './components/FeaturedBooks';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import AddBookForm from './components/AddBookForm';
import './App.css'; 
import { useFetch } from './hooks/useFetch'; 
import { ThemeProvider, useTheme } from './context/ThemeContext'; 


// 🎯 1. COMPONENTE INTERNO (Contenido de la App)
function AppContent() {
  // Obtenemos el tema del contexto
  const { theme } = useTheme(); 

  // 🚨 CAMBIO CLAVE 1: Nueva URL de Google Books API (Buscando 10 libros de ficción)
  const { datos: dataAPI, cargando, error } = useFetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=10');
  
  const [catalogo, setCatalogo] = useState([]); 
  const [busqueda, setBusqueda] = useState(''); 

  const agregarLibro = (nuevoLibro) => { 
    setCatalogo(prevCatalogo => [...prevCatalogo, nuevoLibro]); 
  };
  
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  // 🚨 CAMBIO CLAVE 2: Ajuste del useEffect para mapear Google Books (dataAPI.items)
  useEffect(() => {
    if (dataAPI && dataAPI.items) {
      // dataAPI.items es el array que contiene los libros en Google Books API
      const librosMapeados = dataAPI.items.map(item => ({
        id: item.id, // ID del volumen
        titulo: item.volumeInfo.title,
        // Los autores vienen en un array, usamos join para convertirlos a string
        autor: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Autor Desconocido',
        // Usamos una descripción corta
        descripcion: item.volumeInfo.description ? item.volumeInfo.description.substring(0, 50) + '...' : 'Sin descripción.',
        // La imagen está en imageLinks y puede no existir
        imagen: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '/src/assets/libro_placeholder.jpg',
      }));
      setCatalogo(librosMapeados);
    }
  }, [dataAPI]); // Se ejecuta cuando la data de la API cambia
  
  const catalogoFiltrado = catalogo.filter(libro => {
    if (!busqueda.trim()) return true; 
    const termino = busqueda.toLowerCase();
    const titulo = libro.titulo.toLowerCase();
    const autor = libro.autor.toLowerCase();
    return titulo.includes(termino) || autor.includes(termino);
  });
  
  // Manejo de Carga y Error (sin cambios)
  if (cargando) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2 style={{ color: '#ff6b81' }}>Cargando catálogo de Google Books... ⏳</h2>
        </div>
      );
  }
  
  if (error) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2 style={{ color: 'red' }}>Error al conectar con la API: {error} ❌</h2>
        </div>
      );
  }

  return (
    <div className={`app-theme-${theme}`}>
        <Header />
        <main>
            <div id="libros"> 
                <FeaturedBooks 
                    catalogo={catalogoFiltrado} 
                    busqueda={busqueda}
                    onBusquedaChange={manejarBusqueda}
                /> 
            </div>
            <AddBookForm onAgregarLibro={agregarLibro} />
            <div id="contacto">
                <Contact />
            </div>
        </main>
        <Footer />
    </div>
  );
}


// 2. COMPONENTE PRINCIPAL (Contenedor del Proveedor)
export default function App() {
    return (
        <ThemeProvider>
            <AppContent /> 
        </ThemeProvider>
    )
}
