import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import CarCard from '../components/CarCard';
import { Car } from '../types';
import { mockCars } from '../data/cars';

export default function Home() {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);
  const [bestSellingCars, setBestSellingCars] = useState<Car[]>([]);
  const [newCars, setNewCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [showAllBestSelling, setShowAllBestSelling] = useState(false);
  const [showAllNew, setShowAllNew] = useState(false);

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setFeaturedCars(mockCars);
      setBestSellingCars(mockCars.filter(c => c.isBestSeller));
      setNewCars(mockCars.filter(c => c.isNew));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const displayedFeatured = showAllFeatured ? featuredCars : featuredCars.slice(0, 4);
  const displayedBestSelling = showAllBestSelling ? bestSellingCars : bestSellingCars.slice(0, 4);
  const displayedNew = showAllNew ? newCars : newCars.slice(0, 4);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Car"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              Định nghĩa lại <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                Sự sang trọng
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-lg">
              Khám phá bộ sưu tập những mẫu xe đẳng cấp nhất thế giới, được tuyển chọn kỹ lưỡng dành riêng cho bạn.
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white hover:bg-gray-200 transition-colors rounded-full group"
            >
              Khám phá ngay
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Xe Nổi Bật</h2>
              <p className="text-gray-400 max-w-2xl">Những mẫu xe được yêu thích nhất trong tháng, mang đến trải nghiệm lái tuyệt vời và phong cách sống đẳng cấp.</p>
            </div>
            <button
              onClick={() => setShowAllFeatured(!showAllFeatured)}
              className="hidden md:flex items-center text-sm font-semibold text-white hover:text-gray-300 transition-colors group"
            >
              {showAllFeatured ? 'Thu gọn' : 'Xem tất cả'}
              <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${showAllFeatured ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayedFeatured.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}

          <div className="mt-12 text-center md:hidden">
            <button
              onClick={() => setShowAllFeatured(!showAllFeatured)}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-colors rounded-full"
            >
              {showAllFeatured ? 'Thu gọn' : 'Xem tất cả xe'}
            </button>
          </div>
        </div>
      </section>

      {/* Best Selling Cars Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Xe Bán Chạy</h2>
              <p className="text-gray-400 max-w-2xl">Những mẫu xe được săn đón nhiều nhất, khẳng định đẳng cấp và sự lựa chọn hoàn hảo của khách hàng.</p>
            </div>
            <button
              onClick={() => setShowAllBestSelling(!showAllBestSelling)}
              className="hidden md:flex items-center text-sm font-semibold text-white hover:text-gray-300 transition-colors group"
            >
              {showAllBestSelling ? 'Thu gọn' : 'Xem tất cả'}
              <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${showAllBestSelling ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayedBestSelling.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center md:hidden">
            <button
              onClick={() => setShowAllBestSelling(!showAllBestSelling)}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-colors rounded-full"
            >
              {showAllBestSelling ? 'Thu gọn' : 'Xem tất cả xe'}
            </button>
          </div>
        </div>
      </section>

      {/* New Cars Section */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Xe Mới Về</h2>
              <p className="text-gray-400 max-w-2xl">Khám phá những siêu phẩm mới nhất vừa cập bến Đức Anh, dẫn đầu xu hướng công nghệ và thiết kế.</p>
            </div>
            <button
              onClick={() => setShowAllNew(!showAllNew)}
              className="hidden md:flex items-center text-sm font-semibold text-white hover:text-gray-300 transition-colors group"
            >
              {showAllNew ? 'Thu gọn' : 'Xem tất cả'}
              <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${showAllNew ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayedNew.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center md:hidden">
            <button
              onClick={() => setShowAllNew(!showAllNew)}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-colors rounded-full"
            >
              {showAllNew ? 'Thu gọn' : 'Xem tất cả xe'}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">Đánh giá khách hàng</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">Những trải nghiệm thực tế từ các khách hàng VIP đã tin tưởng và lựa chọn Đức Anh.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Nguyễn Văn A',
                role: 'Doanh nhân',
                content: 'Dịch vụ tại Đức Anh thực sự đẳng cấp. Tôi rất hài lòng với chiếc Mercedes S-Class mới mua. Quá trình tư vấn và giao xe diễn ra cực kỳ chuyên nghiệp.',
                avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
              },
              {
                name: 'Trần Thị B',
                role: 'Giám đốc sáng tạo',
                content: 'Tôi đã tìm kiếm chiếc Porsche 911 màu đỏ này rất lâu. Cảm ơn Đức Anh đã hỗ trợ nhập khẩu và hoàn thiện thủ tục nhanh chóng hơn mong đợi.',
                avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
              },
              {
                name: 'Lê Hoàng C',
                role: 'CEO Tech Company',
                content: 'Không chỉ bán xe, Đức Anh còn mang đến một phong cách sống. Các sự kiện tri ân khách hàng và dịch vụ hậu mãi ở đây luôn làm tôi ấn tượng.',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black border border-white/5 p-8 rounded-2xl hover:border-white/20 transition-colors"
              >
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 font-light leading-relaxed mb-8 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-widest uppercase text-gray-500 mb-12">Đối tác thương hiệu</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Lexus'].map((brand) => (
              <div key={brand} className="text-2xl md:text-4xl font-bold tracking-tighter hover:text-white transition-colors cursor-pointer">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

