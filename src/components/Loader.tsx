import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 800); // Wait for split animation
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-bg-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl font-sans tracking-[0.2em] text-text-primary uppercase">
          Jaffa Group
        </h1>
        <motion.div 
          className="h-[2px] bg-accent-gold mt-4"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
