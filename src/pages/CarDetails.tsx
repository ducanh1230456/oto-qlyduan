import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Scale, CheckCircle2, ChevronRight, ChevronLeft, ShoppingCart } from 'lucide-react';
import { Car } from '../types';
import { useAppContext } from '../context/AppContext';
import { mockCars } from '../data/cars';

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addToWishlist, removeFromWishlist, isInWishlist, addToCompare, removeFromCompare, isInCompare, addToCart } = useAppContext();

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      const foundCar = mockCars.find(c => c.id === id);
      setCar(foundCar || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white">
        <h2 className="text-3xl font-bold mb-4">Không tìm thấy xe</h2>
        <Link to="/catalog" className="text-indigo-400 hover:text-indigo-300 underline">Quay lại danh mục</Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(car.id);
  const isCompared = isInCompare(car.id);

  const images = [car.image, ...(car.gallery || [])];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-black min-h-screen text-white pb-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/catalog" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors group mb-8">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Quay lại danh mục
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">{car.brand}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">{car.name}</h1>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Giá niêm yết</p>
            <p className="text-3xl md:text-4xl font-light">${car.price.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-6 group">
          <motion.img
            key={activeImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={images[activeImageIndex]}
            alt={`${car.name} view ${activeImageIndex + 1}`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative flex-shrink-0 w-32 aspect-[16/9] rounded-xl overflow-hidden snap-start transition-all ${
                  activeImageIndex === index ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 uppercase tracking-wider border-b border-white/10 pb-4">Tổng quan</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-12 font-light">
              {car.description}
            </p>

            <h2 className="text-2xl font-semibold mb-6 uppercase tracking-wider border-b border-white/10 pb-4">Thông số kỹ thuật</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Động cơ</p>
                <p className="text-xl font-medium">{car.engine}</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Nhiên liệu</p>
                <p className="text-xl font-medium">{car.fuel}</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Năm sản xuất</p>
                <p className="text-xl font-medium">{car.year}</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Thương hiệu</p>
                <p className="text-xl font-medium">{car.brand}</p>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 sticky top-28">
              <h3 className="text-2xl font-bold mb-8">Sở hữu ngay</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Bảo hành chính hãng 3 năm</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Hỗ trợ tài chính lên đến 80%</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Giao xe tận nhà miễn phí</span>
                </div>
              </div>

              <a href="tel:0866795497" className="w-full flex items-center justify-center bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors mb-4 text-lg">
                Gọi ngay: 0866 795 497
              </a>

              <button onClick={() => addToCart(car)} className="w-full flex items-center justify-center gap-2 bg-emerald-400 text-black font-bold py-4 rounded-xl hover:bg-emerald-300 transition-colors mb-4 text-lg">
                <ShoppingCart className="h-5 w-5" /> Thêm xe vào giỏ hàng
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => isWishlisted ? removeFromWishlist(car.id) : addToWishlist(car)}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-colors ${
                    isWishlisted ? 'bg-red-500/10 border-red-500 text-red-500' : 'border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  <span className="text-sm font-medium">{isWishlisted ? 'Đã lưu' : 'Lưu'}</span>
                </button>
                <button
                  onClick={() => isCompared ? removeFromCompare(car.id) : addToCompare(car)}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-colors ${
                    isCompared ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' : 'border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  <Scale className="h-5 w-5" />
                  <span className="text-sm font-medium">{isCompared ? 'Đang so sánh' : 'So sánh'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

