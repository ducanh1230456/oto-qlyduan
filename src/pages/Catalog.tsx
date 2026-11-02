import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';
import CarCard from '../components/CarCard';
import { Car } from '../types';
import { mockCars } from '../data/cars';

export default function Catalog() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialBrand = queryParams.get('brand') || 'All';

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setCars(mockCars);
      setLoading(false);
      if (initialBrand !== 'All') {
        setSelectedBrand(initialBrand);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [initialBrand]);

  useEffect(() => {
    let result = cars;

    if (searchTerm) {
      result = result.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (selectedBrand !== 'All') {
      result = result.filter(car => car.brand === selectedBrand);
    }

    result = result.filter(car => car.price >= priceRange[0] && car.price <= priceRange[1]);

    setFilteredCars(result);
  }, [cars, searchTerm, selectedBrand, priceRange]);

  const brands = ['All', ...Array.from(new Set(cars.map(c => c.brand)))];

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Danh mục xe</h1>
          <p className="text-gray-400 max-w-2xl">Khám phá bộ sưu tập xe hơi sang trọng của chúng tôi. Lọc theo thương hiệu, giá cả hoặc tìm kiếm mẫu xe yêu thích của bạn.</p>
        </div>

        {/* Horizontal Filters */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Tìm kiếm</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tên xe..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* Brands */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Thương hiệu</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand === 'All' ? 'Tất cả' : brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                Mức giá: <span className="text-white">${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}</span>
              </label>
              <div className="py-2">
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-400">Hiển thị <span className="text-white font-medium">{filteredCars.length}</span> kết quả</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-zinc-900/50 rounded-2xl border border-white/5">
              <p className="text-xl text-gray-400 mb-4">Không tìm thấy xe phù hợp</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBrand('All');
                  setPriceRange([0, 500000]);
                }}
                className="text-white underline hover:text-gray-300 transition-colors"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
