// src/services/book.service.ts
import { Book, CreateBookRequest } from '../types/book.types';

// MOCK DATA: Datos de prueba para simular la base de datos
let books: Book[] = [
    { id: 1, title: 'Don Quixote', author: 'Cervantes', price: 1500, createdAt: new Date(), imageUrl: 'url_dquixote' },
    { id: 2, title: '1984', author: 'Orwell', price: 1200, createdAt: new Date(), imageUrl: 'url_1984' },
    { id: 3, title: 'Cien Años de Soledad', author: 'G. G. Márquez', price: 1800, createdAt: new Date(), imageUrl: 'url_cien' },
];

// Lógica de negocio 1: Obtener todos los libros (GET)
export async function getAllBooks(): Promise<Book[]> {
    return books; 
}

// Lógica de negocio 2: Crear un libro (POST)
export async function createBook(bookData: CreateBookRequest): Promise<Book> {
    // Validación de la regla de negocio (Título y autor requeridos)
    if (!bookData.title || !bookData.author) {
        // Simulación de error del cliente (400 Bad Request)
        const error = new Error('Title and author are required.');
        (error as any).statusCode = 400; 
        throw error;
    }

    const newBook: Book = {
        id: Math.max(...books.map(b => b.id), 0) + 1, // Nuevo ID
        ...bookData,
        price: bookData.price || 0,
        createdAt: new Date(),
    };

    books.push(newBook);
    return newBook;
}