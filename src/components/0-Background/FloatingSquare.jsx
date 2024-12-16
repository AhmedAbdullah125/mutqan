import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../../Context/ThemeContext';

const SQUARE_COUNT = 15;
const LARGE_SQUARE_SIZE = 40;
const DEFAULT_SQUARE_SIZE = 35;
const COLLISION_DISTANCE = 60;

export default function FloatingSquares() {
  const { isDarkMode } = useTheme();
  
  // تحديد اتجاه الصفحة (RTL أو LTR)
  const isRTL = document.documentElement.dir === 'rtl';

  const [squares, setSquares] = useState(() => 
    Array(SQUARE_COUNT).fill(null).map((_, i) => ({
      id: i,
      // المربعات تبدأ من مكان عشوائي
      x: Math.random() * window.innerWidth, 
      y: Math.random() * window.innerHeight,
      size: i < 2 ? LARGE_SQUARE_SIZE : DEFAULT_SQUARE_SIZE,
      velocity: {
        x: (Math.random() - 0.5) * 0.8 * (isRTL ? -1 : 1), // عكس الاتجاه في RTL
        y: (Math.random() - 0.5) * 0.8
      },
      rotation: Math.random() * 360,
      glowIntensity: Math.random()
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSquares(prevSquares => {
        return prevSquares.map(square => {
          let newX = square.x + square.velocity.x;
          let newY = square.y + square.velocity.y;
          let newVelocityX = square.velocity.x;
          let newVelocityY = square.velocity.y;
          let newRotation = square.rotation + 0.2;
          let newGlowIntensity = (Math.sin(Date.now() / 1000 + square.id) + 1) / 2;

          if (newX <= 0 || newX >= window.innerWidth - square.size) {
            newVelocityX *= -0.9;
            newX = newX <= 0 ? 0 : window.innerWidth - square.size;
          }
          if (newY <= 0 || newY >= window.innerHeight - square.size) {
            newVelocityY *= -0.9;
            newY = newY <= 0 ? 0 : window.innerHeight - square.size;
          }

          prevSquares.forEach(otherSquare => {
            if (otherSquare.id !== square.id) {
              const dx = newX - otherSquare.x;
              const dy = newY - otherSquare.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < COLLISION_DISTANCE) {
                const angle = Math.atan2(dy, dx);
                const force = (COLLISION_DISTANCE - distance) / COLLISION_DISTANCE * 0.4;
                newVelocityX += Math.cos(angle) * force;
                newVelocityY += Math.sin(angle) * force;
              }
            }
          });

          const maxVelocity = 1.2;
          newVelocityX = Math.max(Math.min(newVelocityX, maxVelocity), -maxVelocity);
          newVelocityY = Math.max(Math.min(newVelocityY, maxVelocity), -maxVelocity);

          return {
            ...square,
            x: newX,
            y: newY,
            rotation: newRotation,
            glowIntensity: newGlowIntensity,
            velocity: { x: newVelocityX, y: newVelocityY }
          };
        });
      });
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {squares.map((square) => (
        <motion.div
          key={square.id}
          animate={{
            x: square.x * (isRTL ? -1 : 1), // عكس الحركة على المحور x في حالة RTL
            y: square.y,
            rotate: square.rotation,
          }}
          transition={{
            type: "tween",
            duration: 0.016,
            ease: "linear"  // تحسين السلاسة باستخدام tween و ease
          }}
          style={{
            width: square.size,
            height: square.size,
            opacity: 0.7 + square.glowIntensity * 0.3,
          }}
          className={`
            absolute rounded-xl backdrop-blur-md transform-gpu
            bg-gradient-to-br ${isDarkMode ? 
              'from-violet-600/20 via-indigo-500/20 to-cyan-500/20' : 
              'from-green-500/20 via-green-400/45 to-green-500/20'}
            border-2 border-transparent
            ${isDarkMode ? 
              'hover:border-violet-500 hover:shadow-violet-500/50' : 
              'hover:border-emerald-400 hover:shadow-emerald-400/50'}
            before:content-[''] before:absolute before:inset-[-4px]
            before:rounded-xl before:bg-gradient-to-r
            ${isDarkMode ? 
              'before:from-violet-500/30 before:via-indigo-500/30 before:to-cyan-500/30' : 
              'before:from-emerald-400/30 before:via-sky-400/30 before:to-orange-400/30'}
            before:animate-pulse before:blur-xl
            after:content-[''] after:absolute after:inset-0
            after:rounded-xl after:bg-gradient-to-br
            ${isDarkMode ? 
              'after:from-violet-600/10 after:to-cyan-500/10' :
              'after:from-emerald-400/10 after:to-orange-400/10'}
            after:animate-shimmer after:blur-md
          `}
        />
      ))}
    </div>
  );
}
