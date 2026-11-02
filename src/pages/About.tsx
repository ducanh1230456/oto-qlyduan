import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, BadgeDollarSign, ThumbsUp, CreditCard, CheckCircle2 } from 'lucide-react';

export default function About() {
  const strengths = [
    {
      icon: <ThumbsUp className="h-8 w-8 text-white" />,
      title: 'Uy tín hàng đầu',
      description: 'Hơn 10 năm kinh nghiệm phân phối các dòng xe sang trọng, phục vụ hàng ngàn khách hàng VIP.'
    },
    {
      icon: <BadgeDollarSign className="h-8 w-8 text-white" />,
      title: 'Giá tốt nhất',
      description: 'Cam kết mang đến mức giá cạnh tranh nhất thị trường cùng nhiều ưu đãi đặc quyền.'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: 'Bảo hành chính hãng',
      description: 'Mọi chiếc xe đều được bảo hành toàn cầu theo tiêu chuẩn khắt khe nhất của hãng.'
    },
    {
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: 'Hỗ trợ trả góp',
      description: 'Thủ tục tài chính nhanh gọn, hỗ trợ vay lên đến 80% giá trị xe với lãi suất ưu đãi.'
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2000"
            alt="Đức Anh Showroom"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Về chúng tôi</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Đức Anh</h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Biểu tượng của sự hoàn mỹ và đẳng cấp trong thế giới xe hơi sang trọng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wider">Lịch sử hình thành</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
              Được thành lập vào năm 2014, Đức Anh bắt đầu từ một showroom nhỏ với niềm đam mê mãnh liệt dành cho những cỗ máy tốc độ hoàn hảo. Trải qua một thập kỷ phát triển, chúng tôi tự hào trở thành điểm đến tin cậy của giới tinh hoa.
              Mỗi chiếc xe tại Đức Anh không chỉ là một phương tiện di chuyển, mà còn là một tác phẩm nghệ thuật, một tuyên ngôn về phong cách sống và sự thành đạt của chủ nhân.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wider">Sứ mệnh & Tầm nhìn</h2>
            <ul className="space-y-6 text-left max-w-2xl mx-auto">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-white shrink-0 mt-1" />
                <p className="text-gray-400 text-lg font-light">Mang đến những mẫu xe sang trọng, độc bản và chất lượng nhất.</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-white shrink-0 mt-1" />
                <p className="text-gray-400 text-lg font-light">Cung cấp dịch vụ hậu mãi tiêu chuẩn 5 sao, vượt trên sự mong đợi.</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-white shrink-0 mt-1" />
                <p className="text-gray-400 text-lg font-light">Trở thành biểu tượng phân phối xe siêu sang số 1 tại Việt Nam.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">Tại sao chọn Đức Anh?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">Chúng tôi không chỉ bán xe, chúng tôi trao gửi những giá trị đẳng cấp và sự an tâm tuyệt đối.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 border border-white/5 p-8 rounded-2xl hover:border-white/20 transition-colors"
              >
                <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

