import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const money = (amount: number) => `${amount.toLocaleString('vi-VN')} ₫`;

export default function Cart() {
  const { cart, removeFromCart, updateCartQuantity } = useAppContext();
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  return <main className="min-h-screen bg-black text-white pt-24 pb-32"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <Link to="/accessories" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8"><ArrowLeft className="h-4 w-4" /> Tiếp tục mua sắm</Link>
    <h1 className="text-4xl md:text-5xl font-bold mb-10">Giỏ hàng</h1>
    {!cart.length ? <div className="text-center py-20 border border-white/10 rounded-3xl bg-zinc-900/40"><ShoppingBag className="h-12 w-12 mx-auto text-gray-500 mb-4" /><p className="text-xl text-gray-300 mb-6">Giỏ hàng đang trống</p><Link to="/accessories" className="inline-flex bg-white text-black rounded-lg px-6 py-3 font-semibold">Khám phá phụ kiện</Link></div> : <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
      <div className="space-y-4">{cart.map(({ product, quantity }) => {
        const isAccessory = 'category' in product;
        return <article key={`${isAccessory ? 'accessory' : 'car'}-${product.id}`} className="flex gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-4"><img src={product.image} alt={product.name} className="w-28 sm:w-36 aspect-square object-cover rounded-xl" /><div className="flex-1 min-w-0"><Link to={isAccessory ? `/accessories/${product.id}` : `/car/${product.id}`} className="font-semibold text-lg hover:text-emerald-300">{product.name}</Link><p className="text-gray-400 text-sm mt-1">{isAccessory ? product.category : 'Ô tô'} · {money(product.price)}</p><div className="flex items-center justify-between mt-4"><div className="inline-flex items-center border border-white/20 rounded-lg"><button aria-label="Giảm số lượng" onClick={() => updateCartQuantity(product.id, quantity - 1)} className="p-2 hover:bg-white/10"><Minus className="h-4 w-4" /></button><span className="w-9 text-center">{quantity}</span><button aria-label="Tăng số lượng" onClick={() => updateCartQuantity(product.id, quantity + 1)} className="p-2 hover:bg-white/10"><Plus className="h-4 w-4" /></button></div><button aria-label={`Xóa ${product.name}`} onClick={() => removeFromCart(product.id)} className="text-gray-500 hover:text-red-400 p-2"><Trash2 className="h-5 w-5" /></button></div></div></article>;
      })}</div>
      <aside className="rounded-2xl border border-white/10 bg-zinc-900 p-6 sticky top-28"><h2 className="text-xl font-semibold mb-6">Tóm tắt đơn hàng</h2><div className="flex justify-between text-gray-400 mb-4"><span>Tạm tính</span><span>{money(total)}</span></div><div className="border-t border-white/10 pt-4 flex justify-between text-lg font-bold"><span>Tổng cộng</span><span>{money(total)}</span></div><Link to="/contact" className="block mt-6 text-center rounded-xl bg-white text-black px-5 py-4 font-bold hover:bg-emerald-300">Liên hệ đặt hàng</Link><p className="text-xs text-gray-500 mt-4">Đơn hàng được xác nhận và tư vấn trực tiếp qua trang liên hệ.</p></aside>
    </div>}
  </div></main>;
}
