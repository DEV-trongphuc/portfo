import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, CheckCircle, RefreshCw, Server, Send, Database } from 'lucide-react';

interface LogLine {
  time: string;
  type: 'info' | 'success' | 'warn' | 'error';
  msg: string;
}

const TechLab: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(0); // 0: Idle, 1: Webhook, 2: Script Router, 3: CRM/Zalo sync
  const [logs, setLogs] = useState<LogLine[]>([
    { time: 'Ready', type: 'info', msg: 'Hệ thống định tuyến DOMATION DATA khởi động thành công.' }
  ]);

  const addLog = (msg: string, type: 'info' | 'success' | 'warn' | 'error' = 'info') => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs(prev => [...prev, { time, type, msg }]);
  };

  const handleStartSimulation = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setActiveStep(1);
    setLogs([]);
    
    addLog(' Nhận webhook realtime từ API quảng cáo Facebook (fb_leads_webhook)', 'info');
    
    setTimeout(() => {
      setActiveStep(2);
      addLog('️ Đang kiểm tra danh sách Sale đang hoạt động (Active Shifts)...', 'info');
      addLog(' Thực hiện thuật toán chia đều Round-Robin...', 'info');
      addLog(' Đã định tuyến Lead: Giao cho Sale Nguyễn Văn A', 'success');
    }, 2000);

    setTimeout(() => {
      setActiveStep(3);
      addLog(' Đồng bộ dữ liệu Lead vào cơ sở dữ liệu CRM...', 'info');
      addLog(' Gửi thông báo đẩy qua Zalo Bot cho Sale Nguyễn Văn A', 'info');
      addLog(' Hoàn tất định tuyến dữ liệu. Thời gian đồng bộ: 2.1 giây', 'success');
      setActiveStep(0);
      setIsPlaying(false);
    }, 4500);
  };

  return (
    <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-8 shadow-sm space-y-8 select-none">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-900/30 pb-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#161033] px-3 py-1 rounded-full border border-purple-900/40">
            Data Routing Engine
          </span>
          <h3 className="text-2xl font-black text-white mt-2">
            MarTech Pipeline Simulator
          </h3>
          <p className="text-xs text-slate-400 font-light mt-1">
            Mô phỏng quy trình định tuyến lead theo thuật toán Round-Robin của domation.net/data.
          </p>
        </div>

        <button
          onClick={handleStartSimulation}
          disabled={isPlaying}
          className="w-full md:w-auto px-6 py-3 bg-[#161033] disabled:from-slate-300 disabled:to-slate-400 text-white font-black text-xs uppercase tracking-widest rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
        >
          {isPlaying ? (
            <>
              <RefreshCw size={14} className="animate-spin" /> Processing
            </>
          ) : (
            <>
              <Play size={14} fill="currentColor" /> Run Simulation Test
            </>
          )}
        </button>
      </div>

      {/* Nodes Map Visualization */}
      <div className="relative py-12 px-6 bg-[#030014] border border-purple-900/30 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 min-h-[220px]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        {/* Node 1: Webhook input */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={activeStep === 1 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1 }}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 shadow-md transition-all duration-300 ${
              activeStep === 1 
                ? 'bg-[#0f0b24] text-white border-purple-400 scale-110 shadow-purple-500/20' 
                : 'bg-[#0f0b24] text-slate-400 border-purple-900/40'
            }`}
          >
            <Send size={24} />
          </motion.div>
          <span className="text-[10px] font-black uppercase text-slate-200 mt-3 tracking-wider">Facebook Lead API</span>
          <span className="text-[9px] text-slate-400 font-bold">Realtime Webhook</span>
        </div>

        {/* Flow Line 1 */}
        <div className="hidden md:block flex-1 h-0.5 bg-purple-950/50 relative overflow-hidden mx-4">
          {activeStep === 1 && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            />
          )}
        </div>

        {/* Node 2: Routing logic */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={activeStep === 2 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1 }}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 shadow-md transition-all duration-300 ${
              activeStep === 2 
                ? 'bg-indigo-600 text-white border-indigo-400 scale-110 shadow-indigo-500/20' 
                : 'bg-[#0f0b24] text-slate-400 border-purple-900/40'
            }`}
          >
            <Server size={24} />
          </motion.div>
          <span className="text-[10px] font-black uppercase text-slate-200 mt-3 tracking-wider">Round-Robin Router</span>
          <span className="text-[9px] text-slate-400 font-bold">Shift & Rule Engine</span>
        </div>

        {/* Flow Line 2 */}
        <div className="hidden md:block flex-1 h-0.5 bg-purple-950/50 relative overflow-hidden mx-4">
          {activeStep === 2 && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            />
          )}
        </div>

        {/* Node 3: CRM/Zalo sync */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={activeStep === 3 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1 }}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 shadow-md transition-all duration-300 ${
              activeStep === 3 
                ? 'bg-fuchsia-600 text-white border-fuchsia-400 scale-110 shadow-fuchsia-500/20' 
                : 'bg-[#0f0b24] text-slate-400 border-purple-900/40'
            }`}
          >
            <Database size={24} />
          </motion.div>
          <span className="text-[10px] font-black uppercase text-slate-200 mt-3 tracking-wider">Zalo Bot & CRM</span>
          <span className="text-[9px] text-slate-400 font-bold">Notification & DB Sync</span>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="bg-[#161033] border border-purple-900/40 rounded-2xl p-6 shadow-inner text-slate-200 font-mono text-xs overflow-hidden">
        <div className="flex items-center justify-between border-b border-purple-900/40 pb-3 mb-4 text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal size={14} />
            <span>DOMATION Lead Console Log</span>
          </div>
          <span className="text-[9px] bg-slate-800 px-2 py-0.5 rounded font-black tracking-widest">LIVE STATUS</span>
        </div>
        <div className="space-y-2 max-h-[160px] overflow-y-auto scrollbar-thin">
          <AnimatePresence>
            {logs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-3 leading-relaxed"
              >
                <span className="text-slate-400 shrink-0 select-none">[{log.time}]</span>
                <span className={`shrink-0 ${
                  log.type === 'success' ? 'text-emerald-400' :
                  log.type === 'warn' ? 'text-amber-400' :
                  log.type === 'error' ? 'text-rose-400' :
                  'text-slate-400'
                }`}>
                  {log.type === 'success' ? '' : 'i'}
                </span>
                <span className="text-slate-300 text-justify">{log.msg}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
};

export default TechLab;
