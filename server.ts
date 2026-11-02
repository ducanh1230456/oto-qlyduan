import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { mockCars } from './src/data/cars';
import { accessories } from './src/data/accessories';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // API routes
  // Lấy toàn bộ danh sách xe
  app.get('/api/cars', (req, res) => {
    res.json(mockCars);
  });

  // Lấy thông tin chi tiết của một xe theo ID
  app.get('/api/cars/:id', (req, res) => {
    const car = mockCars.find(c => c.id === req.params.id);
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ error: 'Car not found' });
    }
  });

  app.get('/api/accessories', (_req, res) => {
    res.json(accessories);
  });

  app.get('/api/accessories/:id', (req, res) => {
    const accessory = accessories.find(item => item.id === req.params.id);
    if (accessory) {
      res.json(accessory);
    } else {
      res.status(404).json({ error: 'Accessory not found' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(error => {
  console.error('Unable to start server:', error);
  process.exitCode = 1;
});

