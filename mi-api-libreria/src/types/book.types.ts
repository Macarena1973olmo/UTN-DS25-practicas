// src/types/book.types.ts

// Asegúrate de que TODAS las interfaces tengan 'export'
export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    imageUrl?: string; 
    createdAt?: Date; 
}

export interface CreateBookRequest {
    title: string;
    author: string;
    price: number;
    imageUrl?: string; 
}

// 🎯 BookResponse (la que estaba fallando)
export interface BookResponse { 
    book: Book;
    message: string;
}

// BooksListResponse (la que se usa en getAllBooks)
export interface BooksListResponse {
    books: Book[];
    total: number;
}