import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, MessageSquare, Compass, Phone, SendHorizontal, X } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface DomiBotProps {
  onNavigate: (tab: string) => void;
  activeTab: string;
  onClose?: () => void;
}

const API_KEY = (process.env.GEMINI_API_KEY || (process.env as any).API_KEY) as string;

// System Prompt with complete details about Huynh Trong Phuc
const SYSTEM_INSTRUCTION = `
Bạn là DomiBot, trợ lý ảo AI đại diện cho Huynh Trong Phuc (biệt danh TURNIO) - Chuyên gia Digital Marketing, MarTech & Fullstack Developer, và là Founder của DOMARKETING (DOMATION).
Nhiệm vụ của bạn là trò chuyện với nhà tuyển dụng, đối tác hoặc khách hàng ghé thăm portfolio này. Hãy trả lời một cách tự tin, chuyên nghiệp, thông minh, thỉnh thoảng sử dụng emoji thích hợp để tạo cảm giác thân thiện nhưng vẫn ngầu và am hiểu công nghệ.

Dưới đây là thông tin chi tiết về Huynh Trong Phuc:
- **Họ tên**: Huynh Trong Phuc (TURNIO)
- **Vai trò**: CEO Founder DOMARKETING / DOMATION, Digital Marketing & Fullstack Developer.
- **Thống kê nổi bật (Stats)**:
  - 11K+ người theo dõi lập trình trên TikTok (@turnio.dev).
  - Quản lý ngân sách quảng cáo hơn 500M VNĐ/tháng.
  - Chỉ số ROAS (Return on Ad Spend) trung bình đạt 4.8x.
  - Hơn 150K+ Lead chất lượng cao đã được tạo ra cho các đối tác.
- **Kỹ năng cốt lõi**:
  - **Performance Marketing**: Tối ưu Meta & Google Ads, tư duy phễu bền vững, tập trung vào Leads chất lượng cao.
  - **Fullstack Development**: ReactJS, NextJS, NodeJS, Golang, Python, MongoDB, TailwindCSS, Zalo Mini App.
  - **Process Automation**: Google Apps Script, kết nối API (CRM, Leads), Zapier, n8n, Cloudflare Workers, Server-side tracking (GTM Server).
- **Dự án và sản phẩm tiêu biểu**:
  - **DOMATION CRM System**: Hệ thống CRM tùy chỉnh đầy đủ tính năng: quản lý khách hàng, lịch sử chăm sóc, phễu bán hàng (Deals), kiểm kho sản phẩm, tài chính hóa đơn, ticket CSKH.
  - **Zalo Mini Apps**: Lập trình native (React & TypeScript) giúp tích điểm QR Code, đặt lịch hẹn, thăng hạng thành viên. Tải dưới 1s. Demo trực tuyến tại tab "zalo".
  - **Mystery Tarot**: Website trải nghiệm Tarot kỹ thuật số. Đạt 1000+ người dùng trong tuần đầu tiên. Viết hơn 600 bài viết SEO hoàn toàn bằng AI. Địa chỉ: https://www.mystery-tarot.net/ (xem tại tab "tarot").
  - **Sách "Facebook Ads - AI Chạy Không Được"**: Sách đúc kết 5 năm chạy ads ngân sách lớn, hướng dẫn tối ưu giá thầu và tư duy scale. Có bản preview lật trang 3D độc đáo ở tab "book".
  - **Realtime Meta Insights**: Quét dữ liệu từ Facebook Ads API và tạo báo cáo tự động thời gian thực.
  - **Lead to CRM Connector**: Google Apps Script đưa Leads từ FB/Web về CRM MISA/Salesforce trong chưa đầy 5 giây.
- **Thành tựu thực chiến (Outsource Highlights)**:
  - **IDEAS Institute**: Đem về 12600+ Leads, tăng x3 lượng tuyển sinh MBA, giảm chi phí/học viên từ 18tr xuống 12-14tr.
  - **Phúc Lộc Thọ**: 1600+ Leads nhượng quyền, mở thêm hơn 20 cửa hàng mới.
  - **Ampersand Group**: Chạy quảng cáo cho 6 thương hiệu F&B nổi tiếng như Haagen Dazs, The Running Bean, Snowee, Esta Saigon.
- **Chứng chỉ**: FreeCodeCamp Front End Developer, Responsive Web Design, Javascript Advanced (Fullstack F8), SEO TopCV.

**HÀNH ĐỘNG ĐẶC BIỆT (UI NAVIGATION)**:
Bạn có khả năng chuyển tab hiển thị trên màn hình của người dùng để dẫn họ đến đúng sản phẩm/thông tin họ quan tâm. Hãy thêm mã điều hướng đặc biệt ở CUỐI CÙNG của câu trả lời của bạn theo cú pháp: [NAVIGATE: <tên_tab>].
Các tên tab hợp lệ gồm:
- \`dashboard\` : Xem tổng quan chỉ số và các thẻ MarTech.
- \`partners\` : Xem danh sách các đối tác & khách hàng đồng hành.
- \`outsource\` : Xem kết quả thực chiến (Case Studies: IDEAS, Phúc Lộc Thọ, v.v.).
- \`zalo\` : Xem Zalo Mini App và giả lập điện thoại.
- \`tarot\` : Xem dự án Mystery Tarot và đánh giá cộng đồng.
- \`book\` : Xem sách Facebook Ads 3D lật trang.
- \`certifications\` : Xem chứng chỉ và kinh nghiệm làm việc.
- \`saas\` : Xem các giải pháp SaaS (DOMATION CRM, MINTH CRM, LMS).
- \`martech\` : Xem hệ thống DOMATION Data Routing (Chia Data).
- \`meta-report\` : Xem báo cáo Realtime Meta Insights.
- \`automation\` : Xem kịch bản tự động hóa AutoFlow Pro.
- \`landings\` : Xem các dự án Landing Page tối ưu chuyển đổi.

Ví dụ: "Bạn có thể xem bản xem trước sách 3D của tôi ngay tại đây nhé! [NAVIGATE: book]" hoặc "Dưới đây là chứng chỉ của tôi. [NAVIGATE: certifications]"
Lưu ý: Không bao giờ được bịa đặt thông tin khác ngoài dữ liệu được cung cấp. Nếu người dùng hỏi điều gì không có ở đây, hãy trả lời khéo léo và hướng họ hỏi về năng lực của Phúc.
`;

const SUGGESTIONS = [
  { text: "Zalo Mini App hoạt động thế nào?", tag: "zalo" },
  { text: "Kể về dự án IDEAS Institute", tag: "outsource" },
  { text: "Sách Facebook Ads có gì hay?", tag: "book" },
  { text: "Xem danh sách các đối tác", tag: "partners" },
];

// Fallback response engine for local execution
const getLocalResponse = (input: string): { text: string; tab?: string } => {
  const query = input.toLowerCase();
  
  if (query.includes('zalo') || query.includes('mini app') || query.includes('miniapp')) {
    return {
      text: "Tôi thiết lập Zalo Mini App hoàn toàn bằng React và TypeScript (code native 100%) để đạt tốc độ tải cực đỉnh dưới 1s. Tích hợp sẵn hệ thống tích điểm QR, thăng hạng thành viên tự động đồng bộ. Tôi đã chuyển màn hình sang phần giả lập Zalo Mini App để bạn trải nghiệm trực tiếp rồi đấy! ",
      tab: 'zalo'
    };
  }
  
  if (query.includes('sách') || query.includes('book') || query.includes('facebook ads') || query.includes('ai chạy')) {
    return {
      text: "Cuốn sách 'Facebook Ads - AI Chạy Không Được' là cẩm nang đúc kết 5 năm thực chiến tối ưu ngân sách của tôi. Nó cung cấp bản đồ tư duy giúp nhà quảng cáo vượt qua bão bùng giá thầu. Bạn có thể lật xem thử bản thảo 3D ngay trên màn hình chính nhé! ",
      tab: 'book'
    };
  }
  
  if (query.includes('ideas') || query.includes('tuyển sinh') || query.includes('thạc sĩ') || query.includes('mba')) {
    return {
      text: "Tại IDEAS Institute, tôi đã triển khai phễu thu Lead thạc sĩ chất lượng cao. Giúp tăng số lượng tuyển sinh MBA lên gấp 3 lần, thu về hơn 12,600 leads và giảm chi phí trên mỗi học viên thành công từ 18tr xuống 12-14tr. Tôi đã mở phần Kết quả thực chiến để bạn theo dõi chi tiết! ",
      tab: 'outsource'
    };
  }

  if (query.includes('phúc lộc thọ') || query.includes('nhượng quyền')) {
    return {
      text: "Chiến dịch nhượng quyền Phúc Lộc Thọ mang lại hơn 1,600 Leads chất lượng cao với ngân sách 200M, hỗ trợ mở rộng thành công hơn 20 cửa hàng mới trên toàn quốc. Xem chi tiết case study ở phần chiến dịch outsource! ",
      tab: 'outsource'
    };
  }

  if (query.includes('tarot') || query.includes('mystery')) {
    return {
      text: "Mystery Tarot là dự án cá nhân tâm huyết của tôi về trải nghiệm tâm linh số. Dự án đạt hơn 1000 người dùng trong tuần đầu tiên và tích hợp hơn 600 bài viết chuẩn SEO được tối ưu hóa tự động bằng AI. Giao diện được thiết kế mượt mà như native app. Tôi đã chuyển tab sang mục Tarot để bạn xem giao diện và feedback cộng đồng! ",
      tab: 'tarot'
    };
  }

  if (query.includes('crm') || query.includes('pos') || query.includes('minth') || query.includes('lms') || query.includes('learning') || query.includes('saas') || query.includes('e-learning')) {
    return {
      text: "Chào mừng bạn đến với khu vực SaaS Apps! Tại đây bạn có thể xem các giải pháp ERP/CRM hoàn chỉnh của tôi bao gồm: DOMATION CRM (dành cho doanh nghiệp SME), MINTH CRM & POS (dành cho các cửa hàng bán lẻ tinh gọn), và LMS E-LEARNING Platform (quản lý học tập trực tuyến). Tôi đã chuyển màn hình sang tab SaaS Apps rồi đấy! ",
      tab: 'saas'
    };
  }

  if (query.includes('data routing') || query.includes('chia data') || query.includes('martech') || query.includes('lọc số')) {
    return {
      text: "Hệ thống DOMATION Data Routing hỗ trợ chuyển dữ liệu tự động thời gian thực từ Landing Page, Facebook Ads, Zalo Form về CRM nội bộ. Phân chia Data xoay vòng Round-Robin cho các Sale, tự động đền bù số lỗi qua Zalo Bot. Tôi đã chuyển sang tab Martech để bạn xem chi tiết! ",
      tab: 'martech'
    };
  }

  if (query.includes('báo cáo ads') || query.includes('meta report') || query.includes('meta-report') || query.includes('insight') || query.includes('quét ads')) {
    return {
      text: "Hệ thống Realtime Meta Insights quét dữ liệu trực tiếp từ Facebook Ads API để tạo báo cáo trực quan, theo dõi tức thời hiệu suất quảng cáo (ROAS, CPM, CPC). Tôi đã mở tab Ads Report để bạn theo dõi! ",
      tab: 'meta-report'
    };
  }

  if (query.includes('ai custom') || query.includes('ai agent') || query.includes('trợ lý ảo') || query.includes('tro ly ao') || query.includes('knowledge base') || query.includes('kiến thức ai')) {
    return {
      text: "Tôi có giải pháp Trợ Lý Ảo AI Custom thông minh như chuyên gia, cho phép thiết lập Knowledge Base riêng và huấn luyện từ website/tài liệu của bạn. Tôi đã mở tab AI Custom cho bạn trải nghiệm và trò chuyện thử! ",
      tab: 'ai-agent'
    };
  }

  if (query.includes('flow') || query.includes('automation') || query.includes('autoflow') || query.includes('n8n') || query.includes('zapier')) {
    return {
      text: "Hệ thống AutoFlow Pro thiết lập các kịch bản tự động hóa quy trình vận hành (Zalo ZNS, SMS, Webhook, CRM) giúp giảm thiểu sai sót thủ công và tối ưu năng suất. Tôi đã chuyển sang tab Automation để bạn xem chi tiết! ",
      tab: 'automation'
    };
  }

  if (query.includes('landing') || query.includes('website') || query.includes('nava') || query.includes('ideas mba') || query.includes('giới thiệu')) {
    return {
      text: "Tôi đã thiết kế và triển khai hàng loạt Landing Page tối ưu hóa tỷ lệ chuyển đổi (CRO) cho các đối tác lớn nhỏ. Tôi đã chuyển sang tab Landings để bạn xem các dự án thực tế! ",
      tab: 'landings'
    };
  }

  if (query.includes('đối tác') || query.includes('partner') || query.includes('khách hàng') || query.includes('hợp tác')) {
    return {
      text: "Chào mừng bạn đến với danh sách Đối Tác & Khách Hàng đồng hành cùng tôi! Tại đây bạn có thể xem các doanh nghiệp, thương hiệu đã tin tưởng hợp tác trong các dự án công nghệ và marketing. Tôi đã mở tab Partners cho bạn! ",
      tab: 'partners'
    };
  }

  if (query.includes('chứng chỉ') || query.includes('học vấn') || query.includes('freecodecamp') || query.includes('cert') || query.includes('kinh nghiệm') || query.includes('cv') || query.includes('sơ yếu')) {
    return {
      text: "Tôi có các chứng chỉ Lập trình viên Front-End, Responsive Web Design từ FreeCodeCamp và Javascript Advanced từ F8. Về kinh nghiệm, tôi đã làm việc tại IDEAS Institute, Le Gia ICT và hiện là Founder tại DOMARKETING. Tôi đã chuyển giao diện sang tab Chứng chỉ & Kinh nghiệm để bạn tiện theo dõi! ",
      tab: 'certifications'
    };
  }

  if (query.includes('chỉ số') || query.includes('dashboard') || query.includes('overview') || query.includes('tổng quan')) {
    return {
      text: "Tôi đã chuyển bạn về màn hình Dashboard Tổng Quan để theo dõi các chỉ số vận hành quan trọng như lượt Subs TikTok, ngân sách quảng cáo tháng, và Leads đã tạo. ",
      tab: 'dashboard'
    };
  }

  if (query.includes('liên hệ') || query.includes('sđt') || query.includes('email') || query.includes('phone') || query.includes('mạng xã hội')) {
    return {
      text: "Bạn có thể kết nối với tôi qua LinkedIn bằng nút liên hệ trên Navbar hoặc gửi tin nhắn trực tiếp qua các mạng xã hội. Rất mong được hợp tác cùng bạn! "
    };
  }

  return {
    text: "DomiBot xin chào! Tôi là trợ lý AI của Phúc. Bạn có muốn tìm hiểu về các giải pháp SaaS (DOMATION CRM, LMS), lập trình Zalo Mini App, sách Facebook Ads, các chiến dịch tự động hóa hay danh sách đối tác không? Hãy chọn gợi ý hoặc gõ câu hỏi nhé! ",
    tab: 'dashboard'
  };
};

const DomiBot: React.FC<DomiBotProps> = ({ onNavigate, activeTab, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Xin chào! Tôi là DomiBot  - trợ lý AI của Huynh Trong Phuc. Tôi có thể giải đáp mọi thắc mắc của bạn về kinh nghiệm lập trình, các dự án marketing tự động hóa và các sản phẩm của Phúc. Hãy thử hỏi tôi xem sao nhé!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Gemini API key is available
    if (API_KEY) {
      setIsOnline(true);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      if (isOnline && API_KEY) {
        // Build history payload for Gemini api
        const historyParts = messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        }));

        historyParts.push({
          role: 'user',
          parts: [{ text: textToSend }]
        });

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: historyParts,
              systemInstruction: {
                parts: [{ text: SYSTEM_INSTRUCTION }]
              },
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 800
              }
            })
          }
        );

        if (!response.ok) {
          throw new Error('Gemini API call failed');
        }

        const data = await response.json();
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        
        processReply(replyText);
      } else {
        // Fallback to local heuristic engine
        setTimeout(() => {
          const localResult = getLocalResponse(textToSend);
          processReply(localResult.text + (localResult.tab ? ` [NAVIGATE: ${localResult.tab}]` : ''));
        }, 1000);
      }
    } catch (error) {
      console.error("DomiBot API error:", error);
      // Fallback on error
      setTimeout(() => {
        const localResult = getLocalResponse(textToSend);
        processReply(localResult.text + (localResult.tab ? ` [NAVIGATE: ${localResult.tab}]` : '') + " (Lưu ý: Đang chạy ở chế độ Heuristic do kết nối mạng)");
      }, 1000);
    }
  };

  const processReply = (rawReply: string) => {
    setIsTyping(false);
    
    // Parse navigate tag e.g. [NAVIGATE: zalo]
    const navRegex = /\[NAVIGATE:\s*(\w+)\]/i;
    const match = rawReply.match(navRegex);
    let cleanReply = rawReply;
    let targetTab = '';

    if (match) {
      targetTab = match[1].toLowerCase();
      cleanReply = rawReply.replace(navRegex, '').trim();
    }

    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      sender: 'bot',
      text: cleanReply,
      timestamp: new Date()
    }]);

    if (targetTab) {
      onNavigate(targetTab);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0f0b24]/70 border border-purple-900/40 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl">
      {/* Bot Header */}
      <div className="px-8 py-5 bg-[#0f0b24] text-white flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0f0b24]/10 flex items-center justify-center border border-white/20 shadow-inner relative overflow-hidden">
            <img src="https://crm-domation.vercel.app/LOGO.jpg" alt="DomiBot Avatar" className="w-full h-full object-cover" />
            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-purple-900/40 ${isOnline ? 'bg-emerald-400' : 'bg-amber-400'}`} />
          </div>
          <div>
            <h4 className="font-bold text-sm tracking-wide">DomiBot v2.5</h4>
            <p className="text-[10px] text-white/70 font-medium">Trợ lý AI của Trong Phuc</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0f0b24]/10 rounded-full border border-purple-900/40 text-[9px] font-black uppercase tracking-wider">
            <Sparkles size={10} className="text-amber-300" />
            <span>{isOnline ? 'Gemini Live' : 'AI Agent Local'}</span>
          </div>
          {onClose && (
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Messages Window */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 scrollbar-thin">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border overflow-hidden ${
                msg.sender === 'user' 
                  ? 'bg-[#161033] text-slate-300 border-purple-900/40' 
                  : 'bg-[#161033] text-white border-purple-900/40'
              }`}>
                {msg.sender === 'user' ? <User size={14} /> : <img src="https://crm-domation.vercel.app/LOGO.jpg" alt="DomiBot" className="w-full h-full object-cover" />}
              </div>

              {/* Speech Bubble */}
              <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm font-light ${
                msg.sender === 'user'
                  ? 'bg-[#0f0b24] text-white rounded-tr-none font-normal'
                  : 'bg-[#161033] text-white rounded-tl-none border border-purple-900/30'
              }`}>
                <div className="whitespace-pre-wrap">{msg.text}</div>
                <div className={`text-[9px] mt-1 text-right block ${msg.sender === 'user' ? 'text-white/60' : 'text-slate-400'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 max-w-[80%]"
            >
              <div className="w-8 h-8 rounded-full bg-[#161033] text-white border border-purple-900/40 flex items-center justify-center shrink-0 overflow-hidden">
                <img src="https://crm-domation.vercel.app/LOGO.jpg" alt="DomiBot" className="w-full h-full object-cover" />
              </div>
              <div className="px-4 py-3 bg-[#161033] text-white rounded-2xl rounded-tl-none border border-purple-900/30 shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      <div className="px-6 py-2 bg-[#030014] border-t border-purple-900/30 flex flex-wrap gap-2">
        {SUGGESTIONS.map((sug, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(sug.text)}
            className="flex items-center gap-1 px-3 py-1.5 bg-[#0f0b24] border border-purple-900/40 hover:border-purple-900/40 hover:bg-[#030014] rounded-full text-slate-300 hover:text-white text-xs transition-all duration-200 shadow-sm"
          >
            <Compass size={12} className="text-slate-300 shrink-0" />
            <span>{sug.text}</span>
          </button>
        ))}
      </div>

      {/* Input bar */}
      <div className="p-4 bg-[#0f0b24] border-t border-purple-900/30 flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
          placeholder="Hỏi DomiBot về dự án, kỹ năng của Phúc..."
          className="flex-1 px-5 py-3 border border-purple-900/40 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm bg-[#030014] text-white font-light"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSendMessage(input)}
          className="w-10 h-10 rounded-full bg-[#0f0b24] text-white flex items-center justify-center hover:bg-violet-700 transition-colors shadow-md hover:shadow-lg shrink-0"
        >
          <SendHorizontal size={16} />
        </motion.button>
      </div>
    </div>
  );
};

export default DomiBot;
