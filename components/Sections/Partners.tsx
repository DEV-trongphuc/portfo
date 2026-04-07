
import React from 'react';
import { PARTNERS } from '../../constants';
import { ExternalLink, Handshake } from 'lucide-react';
import { Partner } from '../../types'; // Import Partner type
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  return (
    <section className="pb-32 pt-10 relative z-10 overflow-hidden">
       {/* --- DECOR: NETWORK MESH BACKGROUND --- */}
       <div className="absolute inset-0 pointer-events-none -z-10">
            <svg className="absolute w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Random connecting lines representing network */}
                <path d="M0 100 Q 20 80 40 100 T 80 100" stroke="white" fill="none" vectorEffect="non-scaling-stroke"/>
                <path d="M10 0 Q 30 50 60 0" stroke="white" fill="none" vectorEffect="non-scaling-stroke"/>
                <circle cx="20" cy="80" r="1" fill="white"/>
                <circle cx="80" cy="20" r="1" fill="white"/>
                <circle cx="50" cy="50" r="1" fill="white"/>
            </svg>
            
            {/* Ambient Glows */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -[120px]"></div>
       </div>
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 border-t border-white/5 pt-16">
             <div>
                <span className="text-gold-500 font-black tracking-[0.4em] uppercase text-[10px] block mb-2 flex items-center gap-2">
                    <Handshake size={14} /> Strategic Network
                </span>
                {/* Changed heading text */}
                <p className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">DOM CUSTOMER / OUTSOURCE</p>
             </div>
             <p className="text-gray-500 text-sm max-w-sm text-right">
                Đồng hành cùng các thương hiệu hàng đầu để tạo ra giá trị bền vững và tăng trưởng vượt bậc.
             </p>
        </div>
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PARTNERS.map((partner: Partner, index) => ( // Use Partner type
            <a 
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative aspect-[4/3] flex items-center justify-center bg-[#0C0C0C] border border-white/5 rounded-2xl hover:border-gold-500/30 transition-all duration-500 overflow-hidden"
            >
               {/* Hover Gradient */}
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               {/* Content */}
               <div className="relative z-10 flex flex-col items-center gap-4 p-6 text-center w-full"> {/* Reduced gap-6 to gap-4 */}
                  {/* Removed p-2 from this div to make the image fully cover the circle */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-2xl flex items-center justify-center">
                      <img 
                        src={partner.image} 
                        alt={partner.name} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                      />
                  </div>
                  
                  <div>
                    <span className="text-xs md:text-sm font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors block mb-1"> {/* Reduced mb-2 to mb-1 */}
                        {partner.name}
                    </span>
                    {/* New: Display industry */}
                    <p className="text-[10px] font-medium text-gray-600 group-hover:text-gray-400 transition-colors uppercase tracking-wider">
                        {partner.industry}
                    </p>
                    <div className="h-[2px] w-0 bg-gold-500 mx-auto group-hover:w-1/2 transition-all duration-500 mt-2"></div> {/* Added mt-2 for spacing */}
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <ExternalLink size={16} className="text-gold-500" />
                  </div>
               </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
