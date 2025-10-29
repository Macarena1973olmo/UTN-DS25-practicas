import React, { useState } from 'react';
import Header from './components/Header';
import FeaturedBooks from './components/FeaturedBooks';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import AddBookForm from './components/AddBookForm'; 
import './App.css'; 

// 🎯 ESTA ES LA DEFINICIÓN DE LA LISTA QUE DEBE ESTAR AQUÍ (FUERA DEL COMPONENTE)
const librosIniciales = [
  { id: 1, titulo: 'Cien Años de Soledad', autor: 'G. G. Márquez', descripcion: 'Un clásico de la literatura latinoamericana.', imagen: '/src/assets/libro1.jpg' },
  { id: 2, titulo: 'Rayuela', autor: 'J. Cortázar', descripcion: 'Una novela única y experimental.', imagen: '/src/assets/libro2.jpg' },
  { id: 3, titulo: 'El Principito', autor: 'A. Saint-Exupéry', descripcion: 'Una fábula poética e inolvidable.', imagen: '/src/assets/libro3.jpg' }
];

function App() {
  // AHORA el useState puede encontrar librosIniciales
  const [catalogo, setCatalogo] = useState(librosIniciales); 
  const [busqueda, setBusqueda] = useState(''); 

  const agregarLibro = (nuevoLibro) => { 
    setCatalogo(prevCatalogo => [...prevCatalogo, nuevoLibro]); 
  };
  
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };
  
  const catalogoFiltrado = catalogo.filter(libro => {
    if (!busqueda.trim()) return true; 

    const termino = busqueda.toLowerCase();
    const titulo = libro.titulo.toLowerCase();
    const autor = libro.autor.toLowerCase();

    return titulo.includes(termino) || autor.includes(termino);
  });


  return (
    <>
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
    </>
  );
}

export default App;