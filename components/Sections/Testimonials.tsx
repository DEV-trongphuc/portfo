
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FEEDBACKS = [
    {
        name: "CEO Phúc Lộc Thọ",
        msg: "Số liệu tháng này tốt quá em. ROAS x5 là kỷ lục từ trước tới giờ của bên anh. Tiếp tục phát huy nhé!",
        time: "10:30 AM",
        avatar: "https://ui-avatars.com/api/?name=P+L+T&background=EAB308&color=000"
    },
    {
        name: "Marketing Manager - En Group",
        msg: "Tool tự động em viết chạy mượt lắm. Team Sale đỡ phải nhập liệu thủ công, tiết kiệm được cả 2 tiếng mỗi ngày.",
        time: "14:20 PM",
        avatar: "https://ui-avatars.com/api/?name=E+G&background=3B82F6&color=fff"
    },
    {
        name: "Ms. Lan - Spa Owner",
        msg: "Khách khen app đặt lịch dễ dùng em ạ. Từ lúc có app, tỷ lệ khách quên lịch giảm hẳn. Cảm ơn em nhiều nha!",
        time: "09:15 AM",
        avatar: "https://ui-avatars.com/api/?name=L+S&background=EC4899&color=fff"
    }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-dark-bg relative z-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
            <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs">Trust & Feedback</span>
            <h2 className="text-4xl font-black text-white mt-4 text-center">CLIENT SAID.</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-8 relative">
             {/* Chat connecting line background */}
             <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/5 md:left-1/2 -translate-x-1/2 z-0"></div>

            {FEEDBACKS.map((fb, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20, 
                        delay: i * 0.2 
                    }}
                    className={`relative z-10 flex gap-4 ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                >
                    <motion.img 
                        whileHover={{ scale: 1.2 }}
                        src={fb.avatar} 
                        alt={fb.name} 
                        className="w-12 h-12 rounded-full border-2 border-dark-bg ring-2 ring-white/10 shadow-lg" 
                    />
                    
                    <div className={`relative max-w-[85%] p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 ${i % 2 !== 0 ? 'bg-gold-500 text-black rounded-tr-none' : 'bg-dark-card border border-white/10 text-white rounded-tl-none'}`}>
                        <p className="text-xs font-bold mb-2 opacity-80 uppercase tracking-wide">{fb.name}</p>
                        <p className="text-sm font-medium leading-relaxed">
                            {fb.msg}
                        </p>
                        <span className="text-[9px] opacity-60 block text-right mt-3 font-mono font-bold">{fb.time}</span>
                        
                        {/* Chat bubble tail */}
                        <div className={`absolute top-0 w-4 h-4 ${i % 2 !== 0 ? '-right-2 bg-gold-500' : '-left-2 bg-dark-card border-l border-t border-white/10'} transform rotate-45`}></div>
                    </div>
                </motion.div>
            ))}

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-12 pt-8 relative z-10"
            >
                 <button className="group px-8 py-4 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-all inline-flex items-center gap-2 hover:scale-105 active:scale-95 duration-300">
                    <MessageCircle size={16} className="group-hover:animate-bounce" /> Load more feedback
                 </button>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
