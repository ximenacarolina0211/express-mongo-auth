import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use('/api/users', userRoutes);

// 404 handler
app.use('*', (req, res) => {
  console.log(`Route not found: ${req.method} ${req.path}`);
  res.status(404).json({ message: 'Route not found', method: req.method, path: req.path });
});

export default app;
