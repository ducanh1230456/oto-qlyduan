import type { Request, Response } from 'express';
import { accessories } from '../../src/data/accessories';

export default function handler(request: Request, response: Response) {
  const accessory = accessories.find(item => item.id === request.query.id);
  if (!accessory) return response.status(404).json({ error: 'Accessory not found' });
  return response.status(200).json(accessory);
}
