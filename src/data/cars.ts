import { Car } from '../types';

export const mockCars: Car[] = [
  {
    id: '1',
    name: 'Mercedes-Benz S-Class S 500',
    brand: 'Mercedes-Benz',
    price: 115000,
    year: 2024,
    engine: '3.0L Inline-6 Turbo',
    fuel: 'Hybrid',
    description: 'The S-Class is the flagship sedan of Mercedes-Benz, offering unparalleled luxury, advanced technology, and a smooth, powerful ride.',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1622200294737-33230a84d4b1?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true
  },
  {
    id: '2',
    name: 'BMW 7 Series 740i',
    brand: 'BMW',
    price: 97000,
    year: 2024,
    engine: '3.0L TwinPower Turbo Inline-6',
    fuel: 'Gasoline',
    description: 'The BMW 7 Series combines striking design, luxurious comfort, and innovative technology to deliver a premium driving experience.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Porsche 911 Carrera',
    brand: 'Porsche',
    price: 114000,
    year: 2024,
    engine: '3.0L Twin-Turbo Flat-6',
    fuel: 'Gasoline',
    description: 'The iconic Porsche 911 Carrera delivers thrilling performance, timeless design, and everyday usability.',
    image: 'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true
  },
  {
    id: '4',
    name: 'Audi e-tron GT',
    brand: 'Audi',
    price: 106000,
    year: 2024,
    engine: 'Dual Synchronous Electric Motors',
    fuel: 'Electric',
    description: 'The Audi e-tron GT is a fully electric grand tourer that blends striking proportions, dynamic performance, and zero emissions.',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1000'
    ],
    isNew: true
  },
  {
    id: '5',
    name: 'Mercedes-AMG G 63',
    brand: 'Mercedes-Benz',
    price: 180000,
    year: 2024,
    engine: '4.0L V8 Biturbo',
    fuel: 'Gasoline',
    description: 'The G-Class is an off-road legend with a luxurious interior, iconic boxy design, and immense power from its AMG V8 engine.',
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true
  },
  {
    id: '6',
    name: 'BMW M4 Competition',
    brand: 'BMW',
    price: 83000,
    year: 2024,
    engine: '3.0L TwinPower Turbo Inline-6',
    fuel: 'Gasoline',
    description: 'The BMW M4 Competition offers track-ready performance, aggressive styling, and a driver-focused cockpit.',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '7',
    name: 'Lexus LC 500',
    brand: 'Lexus',
    price: 99000,
    year: 2024,
    engine: '5.0L Naturally Aspirated V8',
    fuel: 'Gasoline',
    description: 'The Lexus LC 500 is a stunning luxury coupe featuring a naturally aspirated V8 engine, exquisite craftsmanship, and a comfortable ride.',
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '8',
    name: 'Range Rover Autobiography',
    brand: 'Land Rover',
    price: 142000,
    year: 2024,
    engine: '4.4L Twin-Turbo V8',
    fuel: 'Gasoline',
    description: 'The Range Rover Autobiography represents the pinnacle of luxury SUVs, offering supreme comfort, advanced technology, and legendary off-road capability.',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true
  },
  {
    id: '9',
    name: 'Porsche Taycan Turbo S',
    brand: 'Porsche',
    price: 195000,
    year: 2024,
    engine: 'Dual Electric Motors',
    fuel: 'Electric',
    description: 'The Porsche Taycan Turbo S is an all-electric sports car that delivers blistering acceleration, precise handling, and a high-tech interior.',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000'
    ],
    isNew: true
  },
  {
    id: '10',
    name: 'Aston Martin DB12',
    brand: 'Aston Martin',
    price: 245000,
    year: 2024,
    engine: '4.0L Twin-Turbo V8',
    fuel: 'Gasoline',
    description: 'The Aston Martin DB12 is a super tourer that combines breathtaking design, luxurious craftsmanship, and exhilarating performance.',
    image: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=1000'
    ],
    isNew: true
  },
  {
    id: '11',
    name: 'Ferrari Roma',
    brand: 'Ferrari',
    price: 222000,
    year: 2024,
    engine: '3.9L Twin-Turbo V8',
    fuel: 'Gasoline',
    description: 'The Ferrari Roma is a stunningly beautiful grand tourer that perfectly blends timeless elegance with modern performance.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000'
    ],
    isNew: true
  },
  {
    id: '12',
    name: 'Lamborghini Huracán EVO',
    brand: 'Lamborghini',
    price: 260000,
    year: 2024,
    engine: '5.2L Naturally Aspirated V10',
    fuel: 'Gasoline',
    description: 'The Huracán EVO is the evolution of the most successful V10-powered Lamborghini ever, offering amplified performance and emotion.',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true
  },
  {
    id: '13',
    name: 'McLaren Artura',
    brand: 'McLaren',
    price: 233000,
    year: 2024,
    engine: '3.0L Twin-Turbo V6 Hybrid',
    fuel: 'Hybrid',
    description: 'The McLaren Artura is a next-generation high-performance hybrid supercar, combining ultra-light engineering with blistering electrified power.',
    image: 'https://images.unsplash.com/photo-1605816988069-b11383b50717?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1605816988069-b11383b50717?auto=format&fit=crop&q=80&w=1000'
    ],
    isNew: true
  },
  {
    id: '14',
    name: 'Rolls-Royce Ghost',
    brand: 'Rolls-Royce',
    price: 340000,
    year: 2024,
    engine: '6.75L Twin-Turbo V12',
    fuel: 'Gasoline',
    description: 'The Rolls-Royce Ghost is the purest expression of Rolls-Royce, offering an exceptionally smooth ride and unparalleled bespoke luxury.',
    image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '15',
    name: 'Bentley Continental GT',
    brand: 'Bentley',
    price: 235000,
    year: 2024,
    engine: '4.0L Twin-Turbo V8',
    fuel: 'Gasoline',
    description: 'The Bentley Continental GT is the definitive luxury grand tourer, combining phenomenal performance with exquisite craftsmanship.',
    image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true
  },
  {
    id: '16',
    name: 'Tesla Model S Plaid',
    brand: 'Tesla',
    price: 89990,
    year: 2024,
    engine: 'Tri Motor All-Wheel Drive',
    fuel: 'Electric',
    description: 'The Model S Plaid has the quickest acceleration of any vehicle in production, along with an updated interior and yoke steering.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000'
    ],
    isNew: true,
    isBestSeller: true
  },
  {
    id: '17',
    name: 'Maserati MC20',
    brand: 'Maserati',
    price: 215000,
    year: 2024,
    engine: '3.0L Twin-Turbo V6',
    fuel: 'Gasoline',
    description: 'The Maserati MC20 marks a new era for the Trident brand, featuring a carbon fiber monocoque and the innovative Nettuno V6 engine.',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1000'
    ],
    isNew: true
  },
  {
    id: '18',
    name: 'Alfa Romeo Giulia Quadrifoglio',
    brand: 'Alfa Romeo',
    price: 81000,
    year: 2024,
    engine: '2.9L Twin-Turbo V6',
    fuel: 'Gasoline',
    description: 'The Giulia Quadrifoglio is a high-performance sports sedan that embodies the spirit of Alfa Romeo with its Ferrari-derived V6 and sharp handling.',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1000'
    ]
  }
];
