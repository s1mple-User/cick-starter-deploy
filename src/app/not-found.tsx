"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonCustom } from "@/src/shared/ButtonCustom/custom-button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-white overflow-hidden">
      {/* Декоративный размытый фон */}
      <motion.div 
        className="absolute w-72 h-72 bg-[#487D49] rounded-full blur-[120px] opacity-30"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 text-center">
        {/* Анимированный номер 404 */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 120, 
            damping: 10 
          }}
          className="text-[10rem] md:text-[15rem] font-bold leading-none text-[#487D49] drop-shadow-2xl"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
            Страница не найдена
          </h2>
          <p className="text-base md:text-lg mb-10 opacity-80 max-w-sm mx-auto">
            Похоже, эта идея еще не реализована или адрес был изменен.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
                <ButtonCustom 
                    text="Вернуться на главную" 
                    paddingX="40px" 
                    paddingY="12px"
                />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}