import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Car className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold tracking-wider uppercase">Đức Anh</span>
            </Link>
            <p className="text-gray-400 hover:text-white transition-colors duration-300 cursor-default text-sm leading-relaxed mb-6">
              Đại lý xe hơi sang trọng hàng đầu, cung cấp những mẫu xe đẳng cấp nhất từ các thương hiệu danh tiếng trên thế giới.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/dtung2204" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300" title="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://zalo.me/0559923116" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300" title="Zalo">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300" title="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300" title="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Thương hiệu</h3>
            <ul className="space-y-4">
              <li><Link to="/catalog?brand=Mercedes-Benz" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">Mercedes-Benz</Link></li>
              <li><Link to="/catalog?brand=BMW" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">BMW</Link></li>
              <li><Link to="/catalog?brand=Audi" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">Audi</Link></li>
              <li><Link to="/catalog?brand=Porsche" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">Porsche</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Khám phá</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">Về chúng tôi</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">Sản phẩm</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">Liên hệ</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">Tài chính & Bảo hiểm</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Liên hệ</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white transition-colors duration-300 cursor-default">Vạn Phúc Building, Đường Tố Hữu, Hà Đông, Hà Nội</li>
              <li className="hover:text-white transition-colors duration-300 cursor-default">Hotline: 0866 795 497</li>
              <li className="hover:text-white transition-colors duration-300 cursor-default">Zalo: 0559 923 116</li>
              <li className="hover:text-white transition-colors duration-300 cursor-default">Email: ducanh231106@gmail.com</li>
              <li className="hover:text-white transition-colors duration-300 cursor-default">Giờ làm việc: 8:00 - 18:00 (T2 - CN)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Đức Anh. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Chính sách bảo mật</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



