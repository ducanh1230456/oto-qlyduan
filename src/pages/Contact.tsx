import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Contact() {
  const { cart } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
      isValid = false;
    }

    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập nội dung tư vấn';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const orderItems = cart.map(({ product, quantity }) => {
          const type = 'category' in product ? `Phụ kiện - ${product.category}` : `Ô tô - ${product.brand}`;
          return `${product.name} | ${type} | SL: ${quantity} | ${product.price.toLocaleString('vi-VN')} VND`;
        }).join('\n');
        const orderTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
          alert('Chưa cấu hình Web3Forms Access Key cho email nhận yêu cầu.');
          return;
        }

        // Gửi dữ liệu qua Web3Forms API (Không cần backend)
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            order_items: orderItems || 'Khách chưa chọn sản phẩm trong giỏ hàng.',
            order_total: cart.length ? `${orderTotal.toLocaleString('vi-VN')} VND` : 'Chưa có sản phẩm',
            subject: `Yêu cầu tư vấn mới từ ${formData.name}`,
            from_name: 'Đức Anh Website'
          }),
        });

        const result = await response.json();
        
        if (result.success) {
          setIsSubmitted(true);
          setFormData({ name: '', phone: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          // Nếu bạn chưa thay Access Key, form sẽ báo lỗi ở đây
          console.error('Web3Forms Error:', result);
          alert('Có lỗi xảy ra (Có thể do chưa cấu hình Access Key). Vui lòng kiểm tra lại.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Có lỗi xảy ra khi kết nối. Vui lòng thử lại sau.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Xóa lỗi khi người dùng bắt đầu gõ
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Liên hệ</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Kết nối với Đức Anh</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn tìm kiếm chiếc xe mơ ước.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-full border border-white/10 shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Địa chỉ</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Vạn Phúc Building, Đường Tố Hữu<br />
                    Hà Đông, Hà Nội<br />
                    Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-full border border-white/10 shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Hotline</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Tư vấn bán hàng:<br />
                    <a href="tel:0866795497" className="text-white hover:underline">0866 795 497</a><br />
                    Zalo:<br />
                    <a href="https://zalo.me/0559923116" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">0559 923 116</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-full border border-white/10 shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Email</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    <a href="mailto:ducanh231106@gmail.com" className="hover:text-white transition-colors">ducanh231106@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-full border border-white/10 shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Giờ làm việc</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Thứ 2 - Thứ 6: 08:00 - 18:00<br />
                    Thứ 7 - CN: 09:00 - 17:00
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps iframe */}
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://maps.google.com/maps?q=V%E1%BA%A1n%20Ph%C3%BAc%20Building,%20%C4%90%C6%B0%E1%BB%9Dng%20T%E1%BB%91%20H%E1%BB%AFu,%20H%C3%A0%20%C4%90%C3%B4ng,%20H%C3%A0%20N%E1%BB%99i&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider">Gửi yêu cầu tư vấn</h2>
            
            {isSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500 text-emerald-400 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-2">Cảm ơn bạn!</h3>
                <p>Yêu cầu tư vấn của bạn đã được gửi thành công. Đội ngũ Đức Anh sẽ liên hệ lại trong thời gian sớm nhất.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/50 transition-colors`}
                  placeholder="Nhập họ tên của bạn"
                />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Số điện thoại *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-black border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/50 transition-colors`}
                  placeholder="Nhập số điện thoại"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Nội dung tư vấn *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-black border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/50 transition-colors resize-none`}
                  placeholder="Bạn quan tâm đến mẫu xe nào? Hãy để lại lời nhắn..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white hover:bg-gray-200 transition-colors rounded-xl group uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
                {!isSubmitting && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}




