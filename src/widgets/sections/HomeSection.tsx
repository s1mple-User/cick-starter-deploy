"use client";

import { motion } from "framer-motion";
import { ButtonCustom } from "@/src/shared/ButtonCustom/custom-button";

export function HomeSection() {
    // Варианты для контейнера, чтобы заголовки шли друг за другом
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Задержка между текстами
                delayChildren: 0.2,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } // Плавный выезд
        },
    };

    return (
        <section className="flex justify-center items-center min-h-[60vh] p-8 overflow-hidden">
            <motion.div 
                className="max-w-4xl w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="text-center mb-8">
                    <motion.h2 
                        variants={textVariants}
                        className="opacity-80 text-3xl font-bold text-white"
                    >
                        Join a global community of backers funding for projects
                    </motion.h2>

                    <motion.h1 
                        variants={textVariants}
                        className="text-[#487D49] text-5xl font-bold my-4"
                    >
                        Bring Your Creative Ideas to Life
                    </motion.h1>

                    <motion.h2 
                        variants={textVariants}
                        className="text-3xl font-bold text-white"
                    >
                        Spread the word and gather support from backers
                    </motion.h2>
                </div>
                
                <motion.div 
                    className="flex justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20, 
                        delay: 1.2 
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ButtonCustom text="Start" variant="outlined" />
                </motion.div>
            </motion.div>
        </section>
    );
}