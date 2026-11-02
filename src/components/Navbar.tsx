import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Heart, Scale, Menu, X, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { wishlist, compareList, cart } = useAppContext();

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Ô tô', path: '/catalog' },
    { name: 'Phụ kiện', path: '/accessories' },
    { name: 'Giới thiệu', path: '/about' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold tracking-wider uppercase">Đức Anh</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gray-300 ${
                  isActive(link.path) ? 'text-white border-b-2 border-white pb-1' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-6 pl-6 border-l border-white/20">
              <Link to="/cart" className="relative group" aria-label="Giỏ hàng">
                <ShoppingCart className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-emerald-400 text-black text-xs font-bold rounded-full min-w-4 h-4 px-1 flex items-center justify-center">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
              </Link>
              <Link to="/compare" className="relative group">
                <Scale className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                {compareList.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {compareList.length}
                  </span>
                )}
              </Link>
              <Link to="/wishlist" className="relative group">
                <Heart className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white">
              <span className="flex items-center gap-2"><ShoppingBag className="h-4 w-4" /> Giỏ hàng</span>
              {cart.length > 0 && <span className="bg-emerald-400 text-black text-xs font-bold rounded-full min-w-5 h-5 px-1 flex items-center justify-center">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
            </Link>
            <Link
              to="/compare"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
            >
              <span>So sánh xe</span>
              {compareList.length > 0 && (
                <span className="bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {compareList.length}
                </span>
              )}
            </Link>
            <Link
              to="/wishlist"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
            >
              <span>Xe yêu thích</span>
              {wishlist.length > 0 && (
                <span className="bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

