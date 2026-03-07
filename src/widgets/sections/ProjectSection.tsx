"use client";

import { motion, Variants } from "framer-motion";
import { ButtonCustom } from "@/src/shared/ButtonCustom/custom-button";
import Saidbar from "../layout/saidbar/saidbar";
import { projects } from "@/src/shared/lib/consts";
import { CustomCard } from "@/src/entities";

export function ProjectsSection() {
    // Варианты для самого главного контейнера
    const rootVariants: Variants = {
        hidden: { 
            opacity: 0,
            scale: 0.98
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
                // Запускаем анимации детей (Saidbar и Main) через stagger
                staggerChildren: 0.2 
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -15 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 15 
            }
        },
    };

    return (
        <motion.div 
            // Анимируем общий div
            variants={rootVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row min-h-screen bg-[#87CF3E] p-4 gap-4 overflow-hidden"
        >
                <Saidbar />
            

            <motion.main 
                className="flex-1 space-y-4"
                // Наследует состояние "visible" от родителя, 
                // но мы добавляем свою задержку для вложенных карточек
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.1 }
                    }
                }}
            >
                {/* Анимированный поиск */}
                <motion.div variants={itemVariants} className="flex gap-4">
                    <div className="relative flex-1">
                        <motion.input 
                            whileFocus={{ scale: 1.01 }}
                            type="text" 
                            placeholder="search" 
                            className="w-full bg-transparent border-2 border-white rounded-lg p-3 pl-4 text-white placeholder-white/70 outline-none transition-colors focus:border-white/100 border-white/50"
                        />
                        <span className="absolute right-4 top-3 text-white">🔍</span>
                    </div>
                    <ButtonCustom text="Search" paddingX="50px" paddingY="10px" />
                </motion.div>

                {/* Список карточек */}
                <div className="space-y-4">
                    {projects.map((card) => (
                        <motion.div 
                            key={card.id} 
                            variants={itemVariants}
                            layout
                            whileHover={{ y: -3 }}
                            className="cursor-pointer"
                        >
                            <CustomCard {...card} />
                        </motion.div>
                    ))}
                </div>
            </motion.main>
        </motion.div>
    );
}