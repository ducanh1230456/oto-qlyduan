export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  engine: string;
  fuel: string;
  description: string;
  image: string;
  gallery: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Accessory {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  features: string[];
}

export interface CartItem {
  product: Accessory | Car;
  quantity: number;
}
