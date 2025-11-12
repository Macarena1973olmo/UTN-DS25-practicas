import { Request, Response, NextFunction } from 'express';
// Importamos solo los tipos necesarios y las interfaces de respuesta
import { BooksListResponse, CreateBookRequest, BookResponse } from '../types/book.types'; 
import * as bookService from '../services/book.service';

// Handler para GET /api/libros
export async function getAllBooks(req: Request, res: Response<BooksListResponse>, next: NextFunction) {
    try {
        const books = await bookService.getAllBooks();
        res.json({
            books,
            total: books.length
        });
    } catch (error) {
        next(error); 
    }
}

// Handler para POST /api/libros (Crear Libro)
export async function createBook(
    // Tipado de la Request: req.body es CreateBookRequest
    req: Request<{}, BookResponse, CreateBookRequest>, 
    // Tipado de la Response: res.json debe tener la forma de BookResponse ({book, message})
    res: Response<BookResponse>, 
    next: NextFunction
) {
    try {
        const newBook = await bookService.createBook(req.body);
        
        // Respuesta HTTP 201 Created (Éxito al crear recurso)
        // El cuerpo del JSON ahora cumple con BookResponse
        res.status(201).json({
            book: newBook,
            message: 'Book created successfully'
        });
    } catch (error) {
        next(error); 
    }
}