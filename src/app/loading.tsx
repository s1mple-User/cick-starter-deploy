"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#8cc63f] z-50">
    
      <motion.div
        className="w-20 h-20 border-8 border-[#487D49] border-t-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        className="mt-6 text-white text-2xl font-bold tracking-widest uppercase"
      >
        Loading...
      </motion.h2>

      <div className="absolute bottom-0 left-0 w-full h-2 overflow-hidden bg-[#487D49]">
        <motion.div 
          className="h-full bg-white w-1/3"
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}