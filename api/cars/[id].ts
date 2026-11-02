import type { Request, Response } from 'express';
import { mockCars } from '../../src/data/cars';

export default function handler(request: Request, response: Response) {
  const car = mockCars.find(item => item.id === request.query.id);
  if (!car) return response.status(404).json({ error: 'Car not found' });
  return response.status(200).json(car);
}
