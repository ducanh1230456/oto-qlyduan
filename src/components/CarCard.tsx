import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Scale, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { Car } from '../types';
import { useAppContext } from '../context/AppContext';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist, addToCompare, removeFromCompare, isInCompare, addToCart } = useAppContext();
  const isWishlisted = isInWishlist(car.id);
  const isCompared = isInCompare(car.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car);
    }
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isCompared) {
      removeFromCompare(car.id);
    } else {
      addToCompare(car);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      <Link to={`/car/${car.id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(car); }}
              className="p-2 rounded-full bg-emerald-400 text-black hover:bg-emerald-300"
              title="Thêm xe vào giỏ hàng"
              aria-label={`Thêm ${car.name} vào giỏ hàng`}
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button
              onClick={handleWishlist}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                isWishlisted ? 'bg-red-500 text-white' : 'bg-black/50 text-white hover:bg-white hover:text-black'
              }`}
              title={isWishlisted ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleCompare}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                isCompared ? 'bg-indigo-500 text-white' : 'bg-black/50 text-white hover:bg-white hover:text-black'
              }`}
              title={isCompared ? 'Xóa khỏi so sánh' : 'Thêm vào so sánh'}
            >
              <Scale className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-semibold tracking-widest text-gray-300 uppercase mb-1">{car.brand}</p>
            <h3 className="text-xl font-bold text-white leading-tight">{car.name}</h3>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">Giá từ</p>
              <p className="text-2xl font-light text-white">${car.price.toLocaleString()}</p>
            </div>
            <p className="text-sm font-medium text-gray-400">{car.year}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Động cơ</p>
              <p className="text-sm text-gray-300 truncate">{car.engine}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Nhiên liệu</p>
              <p className="text-sm text-gray-300">{car.fuel}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
