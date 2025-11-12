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
  const { theme } = useTheme(); 

  // 🚨 LA LÍNEA CRÍTICA: Apunta al Backend local
  const { datos: dataAPI, cargando, error } = useFetch('http://localhost:3000/api/libros');
  
  const [catalogo, setCatalogo] = useState([]); 
  const [busqueda, setBusqueda] = useState(''); 

  const agregarLibro = (nuevoLibro) => { 
    setCatalogo(prevCatalogo => [...prevCatalogo, nuevoLibro]); 
  };
  
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  // 🚨 LÓGICA DE MAPEO: Esperando la estructura de tu API local (dataAPI.books)
  useEffect(() => {
    if (dataAPI && dataAPI.books) {
      const librosMapeados = dataAPI.books.map(libro => ({
        id: libro.id, 
        titulo: libro.title, // Usa 'title'
        autor: libro.author, // Usa 'author'
        descripcion: 'Libro de la librería local.',
        imagen: libro.imageUrl || '/src/assets/libro_placeholder.jpg', 
      }));
      setCatalogo(librosMapeados);
    }
  }, [dataAPI]); 
  
  const catalogoFiltrado = catalogo.filter(libro => {
    if (!busqueda.trim()) return true; 
    const termino = busqueda.toLowerCase();
    const titulo = libro.titulo.toLowerCase();
    const autor = libro.autor.toLowerCase();
    return titulo.includes(termino) || autor.includes(termino);
  });
  
  // Manejo de Carga y Error 
  if (cargando) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2 style={{ color: '#ff6b81' }}>Cargando catálogo desde tu API local... ⏳</h2>
        </div>
      );
  }
  
  if (error) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2 style={{ color: 'red' }}>Error al conectar con tu API local: {error} ❌</h2>
          <p>Asegúrate de que tu servidor de Express esté corriendo en http://localhost:3000.</p>
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
