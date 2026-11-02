import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import CarCard from '../components/CarCard';
import { useAppContext } from '../context/AppContext';

export default function Wishlist() {
  const { wishlist } = useAppContext();

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <Heart className="h-10 w-10 text-red-500 fill-current" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Xe yêu thích</h1>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-zinc-900/50 rounded-3xl border border-white/5">
            <Heart className="h-16 w-16 text-gray-600 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Danh sách yêu thích trống</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Bạn chưa lưu mẫu xe nào. Hãy khám phá bộ sưu tập của chúng tôi và thêm những chiếc xe bạn yêu thích.</p>
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white hover:bg-gray-200 transition-colors rounded-full group"
            >
              Khám phá ngay
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
