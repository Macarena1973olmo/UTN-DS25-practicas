// mi-api-libreria/src/app.ts (SOLUCIÓN DE CONTINGENCIA)
import express from 'express';
// ⚠️ Importamos el controlador directamente para la prueba
import * as bookController from './controllers/book.controller'; 
import cors from 'cors'; 

const app = express();
const PORT = 3000;

app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type'] }));
app.use(express.json()); 

// app.use('/api/libros', bookRoutes); // COMENTADO para esta prueba

// 🎯 PRUEBA DIRECTA: Conecta el endpoint al Controller sin usar el archivo de rutas
app.get('/api/libros', bookController.getAllBooks); 

app.get('/', (req, res) => {
    res.send('API de Librería: Prueba Directa Activa.');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});