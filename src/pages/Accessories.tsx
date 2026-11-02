import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import { accessories } from '../data/accessories';
import { useAppContext } from '../context/AppContext';

const money = (amount: number) => `${amount.toLocaleString('vi-VN')} ₫`;

export default function Accessories() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Tất cả');
  const { addToCart } = useAppContext();
  const categories = ['Tất cả', ...new Set(accessories.map(item => item.category))];
  const products = useMemo(() => accessories.filter(item =>
    (category === 'Tất cả' || item.category === category) &&
    `${item.name} ${item.category}`.toLocaleLowerCase('vi').includes(query.toLocaleLowerCase('vi'))
  ), [category, query]);

  return <div className="min-h-screen bg-black text-white pt-24 pb-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 mb-4">Đức Anh Tech</p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Phụ kiện công nghệ</h1>
      <p className="text-gray-400 max-w-2xl mb-10">Thiết bị thông minh giúp mỗi hành trình an toàn, tiện nghi và kết nối hơn.</p>
      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5 mb-8 grid md:grid-cols-[1fr_auto] gap-5">
        <label className="relative block"><span className="sr-only">Tìm phụ kiện</span><Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Tìm tên phụ kiện..." className="w-full bg-black border border-white/20 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-white/50" /></label>
        <div className="flex gap-2 overflow-x-auto">{categories.map(item => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-lg px-4 py-3 text-sm ${category === item ? 'bg-white text-black' : 'bg-black text-gray-300 border border-white/10'}`}>{item}</button>)}</div>
      </div>
      <p className="text-gray-400 mb-6">{products.length} sản phẩm</p>
      {products.length ? <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{products.map(item => <article key={item.id} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70">
        <Link to={`/accessories/${item.id}`} className="block aspect-[16/10] overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" /></Link>
        <div className="p-5"><p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">{item.category}</p><Link to={`/accessories/${item.id}`} className="text-xl font-semibold hover:text-emerald-300">{item.name}</Link><p className="text-gray-400 text-sm mt-2 line-clamp-2">{item.description}</p>
          <div className="flex items-center justify-between mt-5 gap-3"><strong className="text-lg">{money(item.price)}</strong><button onClick={() => addToCart(item)} className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2.5 text-sm font-semibold hover:bg-emerald-300"><ShoppingCart className="h-4 w-4" /> Thêm giỏ</button></div>
        </div>
      </article>)}</div> : <div className="text-center py-20 text-gray-400">Không tìm thấy phụ kiện phù hợp.</div>}
    </div>
  </div>;
}

