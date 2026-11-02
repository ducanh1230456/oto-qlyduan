import type { Request, Response } from 'express';
import { accessories } from '../src/data/accessories';

export default function handler(_request: Request, response: Response) {
  response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  return response.status(200).json(accessories);
}
