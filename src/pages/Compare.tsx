import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Compare() {
  const { compareList, removeFromCompare } = useAppContext();

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <Scale className="h-10 w-10 text-indigo-500" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">So sánh xe</h1>
        </div>

        {compareList.length > 0 ? (
          <div className="overflow-x-auto pb-8 rounded-2xl border border-white/10 bg-zinc-950/50 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[1000px] table-fixed">
              <thead className="bg-zinc-950 border-b border-white/10">
                <tr>
                  <th className="p-8 border-r border-white/10 w-1/4 align-bottom bg-black/20">
                    <h2 className="text-2xl font-bold uppercase tracking-wider mb-2">So sánh</h2>
                    <p className="text-sm text-gray-400 font-light">Chi tiết thông số kỹ thuật</p>
                  </th>
                  {compareList.map((car) => (
                    <th key={car.id} className="p-8 border-r border-white/10 w-1/4 relative group align-top">
                      <button
                        onClick={() => removeFromCompare(car.id)}
                        className="absolute top-4 right-4 p-2 bg-black/80 hover:bg-red-500 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                        title="Xóa khỏi so sánh"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 relative">
                        <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">{car.brand}</p>
                      <h3 className="text-xl font-bold text-white leading-tight mb-4 h-14 line-clamp-2">{car.name}</h3>
                      <Link to={`/car/${car.id}`} className="inline-flex items-center justify-center w-full py-3 text-sm font-bold text-black bg-white hover:bg-gray-200 transition-colors rounded-xl uppercase tracking-wider">
                        Xem chi tiết
                      </Link>
                    </th>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <th key={`empty-${i}`} className="p-8 border-r border-white/10 w-1/4 align-top">
                      <div className="aspect-[16/10] rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-gray-500 mb-6 bg-white/5">
                        <Scale className="h-8 w-8 mb-3 opacity-50" />
                        <span className="text-sm font-medium uppercase tracking-wider">Thêm xe</span>
                      </div>
                      <div className="h-[104px] flex flex-col justify-end">
                        <Link to="/catalog" className="inline-flex items-center justify-center w-full py-3 text-sm font-bold text-white border border-white/20 hover:bg-white/10 transition-colors rounded-xl uppercase tracking-wider">
                          Chọn xe
                        </Link>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-6 px-8 font-medium text-gray-400 border-r border-white/10 bg-black/20 group-hover:bg-transparent transition-colors">Giá bán</td>
                  {compareList.map((car) => (
                    <td key={car.id} className="p-6 px-8 text-2xl font-bold text-white border-r border-white/10">${car.price.toLocaleString()}</td>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={`empty-price-${i}`} className="p-6 px-8 text-gray-600 border-r border-white/10">-</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-6 px-8 font-medium text-gray-400 border-r border-white/10 bg-black/20 group-hover:bg-transparent transition-colors">Động cơ</td>
                  {compareList.map((car) => (
                    <td key={car.id} className="p-6 px-8 text-gray-300 border-r border-white/10">{car.engine}</td>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={`empty-engine-${i}`} className="p-6 px-8 text-gray-600 border-r border-white/10">-</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-6 px-8 font-medium text-gray-400 border-r border-white/10 bg-black/20 group-hover:bg-transparent transition-colors">Nhiên liệu</td>
                  {compareList.map((car) => (
                    <td key={car.id} className="p-6 px-8 text-gray-300 border-r border-white/10">{car.fuel}</td>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={`empty-fuel-${i}`} className="p-6 px-8 text-gray-600 border-r border-white/10">-</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-6 px-8 font-medium text-gray-400 border-r border-white/10 bg-black/20 group-hover:bg-transparent transition-colors">Năm sản xuất</td>
                  {compareList.map((car) => (
                    <td key={car.id} className="p-6 px-8 text-gray-300 border-r border-white/10">{car.year}</td>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={`empty-year-${i}`} className="p-6 px-8 text-gray-600 border-r border-white/10">-</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-6 px-8 font-medium text-gray-400 border-r border-white/10 bg-black/20 group-hover:bg-transparent transition-colors align-top">Tổng quan</td>
                  {compareList.map((car) => (
                    <td key={car.id} className="p-6 px-8 text-gray-400 text-sm leading-relaxed border-r border-white/10 align-top">{car.description}</td>
                  ))}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <td key={`empty-desc-${i}`} className="p-6 px-8 text-gray-600 border-r border-white/10">-</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-32 bg-zinc-900/50 rounded-3xl border border-white/5">
            <Scale className="h-16 w-16 text-gray-600 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Danh sách so sánh trống</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Bạn chưa chọn mẫu xe nào để so sánh. Hãy khám phá danh mục và chọn tối đa 3 xe để so sánh.</p>
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
