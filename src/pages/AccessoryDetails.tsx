import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import { accessories } from '../data/accessories';
import { useAppContext } from '../context/AppContext';

export default function AccessoryDetails() {
  const { id } = useParams();
  const product = accessories.find(item => item.id === id);
  const { addToCart } = useAppContext();
  if (!product) return <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center"><h1 className="text-3xl font-bold mb-4">Không tìm thấy sản phẩm</h1><Link to="/accessories" className="underline">Quay lại phụ kiện</Link></div>;
  return <main className="min-h-screen bg-black text-white pt-24 pb-32"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <Link to="/accessories" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8"><ArrowLeft className="h-4 w-4" /> Tất cả phụ kiện</Link>
    <div className="grid lg:grid-cols-2 gap-12 items-start"><img src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover rounded-3xl border border-white/10" />
      <div><p className="uppercase tracking-[0.2em] text-emerald-400 text-sm mb-3">{product.category}</p><h1 className="text-4xl md:text-5xl font-bold mb-5">{product.name}</h1><p className="text-3xl mb-6">{product.price.toLocaleString('vi-VN')} ₫</p><p className="text-gray-300 leading-relaxed mb-8">{product.description}</p>
        <h2 className="text-lg font-semibold uppercase tracking-wider mb-4">Tính năng nổi bật</h2><ul className="space-y-3 mb-9">{product.features.map(feature => <li key={feature} className="flex gap-3 text-gray-300"><Check className="h-5 w-5 text-emerald-400 shrink-0" />{feature}</li>)}</ul>
        <button onClick={() => addToCart(product)} className="inline-flex items-center justify-center gap-3 rounded-xl bg-white text-black px-8 py-4 font-bold hover:bg-emerald-300"><ShoppingCart className="h-5 w-5" /> Thêm vào giỏ hàng</button>
        <p className="text-gray-500 text-sm mt-5">Liên hệ để được tư vấn lắp đặt và kiểm tra khả năng tương thích với xe.</p>
      </div></div>
  </div></main>;
}
