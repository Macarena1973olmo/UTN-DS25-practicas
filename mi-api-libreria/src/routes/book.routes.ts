// src/routes/book.routes.ts
import { Router } from 'express';
import * as bookController from '../controllers/book.controller';

const router = Router();

// Endpoint para obtener todos los libros (GET /api/libros)
router.get('/', bookController.getAllBooks); 

// Endpoint para crear un nuevo libro (POST /api/libros)
router.post('/', bookController.createBook); 

// Exporta el router para que app.ts lo pueda usar
export const bookRoutes = router;