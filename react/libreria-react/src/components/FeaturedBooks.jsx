import React from 'react'
import BookCard from './BookCard'


const libros = [
{ titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', imagen: '/src/assets/libro1.jpg', descripcion: 'Una obra maestra de la literatura latinoamericana.' },
{ titulo: 'Rayuela', autor: 'Julio Cortázar', imagen: '/src/assets/libro2.jpg', descripcion: 'Un viaje surrealista a través de la mente y el tiempo.' },
{ titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', imagen: '/src/assets/libro3.jpg', descripcion: 'Una fábula poética sobre la infancia y la imaginación.' }
]


export default function FeaturedBooks() {
return (
<section className="featured">
<h2>Libros destacados</h2>
<div className="books-grid">
{libros.map((l, i) => (
<BookCard key={i} {...l} />
))}
</div>
</section>
)
}