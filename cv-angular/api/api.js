// ========================================
// API REST SIMPLE PARA GESTIONAR PROYECTOS
// ========================================

// 1. IMPORTAR LAS LIBRERÍAS QUE NECESITAMOS
const express = require('express'); // Express: framework para crear APIs
const cors = require('cors');       // CORS: permite que otros sitios web usen nuestra API

// 2. CONFIGURAR NUESTRA APLICACIÓN
const app = express();              // Crear la aplicación Express
const PORT = 3001;                  // Puerto donde va a correr nuestro servidor

// 3. CONFIGURAR MIDDLEWARES (funciones que se ejecutan antes de las rutas)
app.use(cors());                    // Permitir peticiones desde cualquier origen
app.use(express.json());            // Convertir JSON del body de las peticiones a objetos JavaScript

// 4. CREAR NUESTRA "BASE DE DATOS" EN MEMORIA
// ⚠️ IMPORTANTE: Esta base de datos se borra cuando apagamos el servidor

let experiences = [
  { 
    id: 1, 
    period: 'Agosto 2025 - Noviembre 2025', 
    company: 'ES Consulting', 
    position: 'Practicante',
  },
  { 
    id: 2, 
    period: 'Mar 2024 - Jun 2024', 
    company: 'Tech Solutions Inc.', 
    position: 'Asistente de Desarrollo',
  }
];

// ========================================
// DEFINIR LAS RUTAS DE NUESTRA API (CRUD)
// ========================================


// 5. RUTA GET /experiences - OBTENER TODAS LAS EXPERIENCIAS
app.get('/experiences', (req, res) => {
  // Retorna el array completo de experiencias
  res.json(experiences); 
});


// 6. RUTA GET /experiences/:id - OBTENER UNA EXPERIENCIA ESPECÍFICA POR ID
app.get('/experiences/:id', (req, res) => {
  const id = Number(req.params.id);           
  const experience = experiences.find(e => e.id === id); 
  
  // Si no encuentra la experiencia, devolver error 404
  if (!experience) {
    return res.status(404).json({ error: 'Experiencia no encontrada' });
  }
  
  res.json(experience); 
});


// 7. RUTA POST /experiences - CREAR UNA NUEVA EXPERIENCIA
app.post('/experiences', (req, res) => {
  const { period, company, position } = req.body; 
  
  // Validar campos obligatorios
  if (!company || !position || !period) {
    return res.status(422).json({ error: 'Los campos "period", "company" y "position" son obligatorios' });
  }
  
  // Generar un nuevo ID 
  const newId = Math.max(0, ...experiences.map(e => e.id)) + 1;
  
  // Crear la nueva experiencia
  const newExperience = { 
    id: newId, 
    period, 
    company, 
    position
  };
  
  experiences.push(newExperience); 
  res.status(201).json(newExperience); // Devolver la experiencia creada con código 201
});


// 8. RUTA PATCH /experiences/:id - ACTUALIZAR PARCIALMENTE UNA EXPERIENCIA
app.patch('/experiences/:id', (req, res) => {
  const id = Number(req.params.id);           
  const experience = experiences.find(e => e.id === id); 
  
  // Si no encuentra la experiencia, devolver error 404
  if (!experience) {
    return res.status(404).json({ error: 'Experiencia no encontrada' });
  }

  const { period, company, position } = req.body; 
  
  // Actualizar solo los campos que vienen en la petición
  if (period !== undefined) experience.period = period;
  if (company !== undefined) experience.company = company;
  if (position !== undefined) experience.position = position;

  res.json(experience); 
});


// 9. RUTA DELETE /experiences/:id - ELIMINAR UNA EXPERIENCIA
app.delete('/experiences/:id', (req, res) => {
  const id = Number(req.params.id);                    
  const index = experiences.findIndex(e => e.id === id); 
  
  // Si no encuentra la experiencia, devolver error 404
  if (index === -1) {
    return res.status(404).json({ error: 'Experiencia no encontrada' });
  }
  
  // Eliminar la experiencia del array
  const deletedExperience = experiences.splice(index, 1)[0];
  res.json(deletedExperience); 
});

// 10. MANEJAR RUTAS NO ENCONTRADAS (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// 11. INICIAR EL SERVIDOR
app.listen(PORT, () => {
  console.log(`🚀 API de Experiencia Laboral escuchando en http://localhost:${PORT}`);
  console.log(`📋 Endpoints disponibles:`);
  console.log(`   GET    /experiences     - Ver todas las experiencias`);
  console.log(`   GET    /experiences/:id - Ver una experiencia específica`);
  console.log(`   POST   /experiences     - Crear una nueva experiencia`);
  console.log(`   PATCH  /experiences/:id - Actualizar una experiencia`);
  console.log(`   DELETE /experiences/:id - Eliminar una experiencia`);
});