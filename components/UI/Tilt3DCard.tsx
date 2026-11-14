import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

/**
 * Interactive pointer-reactive 3D perspective card on fine-pointer devices.
 * Automatically stays flat on touch screens for smooth vertical scrolling.
 */
const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  maxTilt = 4.5,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 240, damping: 24, mass: 0.5 };
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]),
    springConfig
  );

  const isFinePointer = () =>
    typeof window !== 'undefined' &&
    (window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isFinePointer()) return;
    const rect = ref.current.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => isFinePointer() && setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformPerspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={isFinePointer() ? { scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={`relative ${hovered ? 'will-change-transform' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Tilt3DCard;
