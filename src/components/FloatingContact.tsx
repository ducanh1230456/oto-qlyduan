import React, { useState } from 'react';
import { Phone, MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingContact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', interest: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsPopupOpen(false);
        setFormData({ name: '', phone: '', interest: '' });
      }, 3000);
    }
  };

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a
          href="tel:0866795497"
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg shadow-emerald-500/20 transition-transform hover:scale-110 flex items-center justify-center group relative"
          title="Gọi ngay"
        >
          <Phone className="h-6 w-6" />
          <span className="absolute right-full mr-4 bg-black text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Gọi ngay: 0866 795 497
          </span>
        </a>
        
        <a
          href="https://zalo.me/0559923116"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 hover:bg-indigo-600 text-white p-4 rounded-full shadow-lg shadow-indigo-500/20 transition-transform hover:scale-110 flex items-center justify-center group relative"
          title="Chat tư vấn"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-4 bg-black text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat tư vấn (Zalo)
          </span>
        </a>
      </div>

      {/* Quick Consultation Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <h3 className="text-2xl font-bold mb-2 uppercase tracking-wider text-white">Đăng ký tư vấn</h3>
              <p className="text-gray-400 mb-8 font-light">Để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ ngay qua Zalo hoặc SĐT.</p>

              {isSubmitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500 text-emerald-400 p-6 rounded-xl text-center">
                  <p className="font-bold mb-2">Đăng ký thành công!</p>
                  <p className="text-sm">Chúng tôi sẽ liên hệ với bạn trong ít phút.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại (Zalo) *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Mẫu xe quan tâm (Không bắt buộc)"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-black bg-white hover:bg-gray-200 transition-colors rounded-xl group uppercase tracking-wider mt-4"
                  >
                    Gửi thông tin
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}


