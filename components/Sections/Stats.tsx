
import React from 'react';
import { STATS } from '../../constants';
import { motion, useSpring, useInView } from 'framer-motion';

const Counter = ({ value, suffix }: { value: string; suffix: string }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    
    // Parse number from string (e.g., "4.8" -> 4.8)
    const numericValue = parseFloat(value);
    const isFloat = value.includes('.');
    
    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        duration: 2
    });

    React.useEffect(() => {
        if (isInView) {
            springValue.set(numericValue);
        }
    }, [isInView, numericValue, springValue]);

    const [displayValue, setDisplayValue] = React.useState("0");

    React.useEffect(() => {
        return springValue.on("change", (latest) => {
            if (isFloat) {
                 setDisplayValue(latest.toFixed(1));
            } else {
                 setDisplayValue(Math.floor(latest).toString());
            }
        });
    }, [springValue, isFloat]);

    return (
        <span ref={ref} className="flex items-baseline justify-center">
            {displayValue}<span className="text-gold-500 ml-1">{suffix}</span>
        </span>
    );
};

const Stats: React.FC = () => {
  return (
    <div className="w-full bg-dark-bg py-20 relative z-20 overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:divide-x lg:divide-white/5">
            {STATS.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: index * 0.1 
              }}
              className="text-center group"
            >
                <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-gold-500 transition-colors">{stat.label}</p>
            </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
