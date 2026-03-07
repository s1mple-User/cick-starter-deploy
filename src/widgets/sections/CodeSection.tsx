"use client"; // Обязательно для Next.js App Router

import Image from "next/image";
import { motion } from "framer-motion";
import BgFrame from "@/public/bg/bg-white.png";
import CodeImg from "@/public/img/code.png";

export function CodeSection() {
    // Варианты анимации для контейнера (staggerChildren позволяет элементам появляться по очереди)
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2, // Задержка между появлением li
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section 
            className="relative w-full min-h-[600px] flex items-center justify-center px-20 mt-30"
            style={{ 
                backgroundImage: `url(${BgFrame.src})`, 
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "top center"
            }}
        >
            <motion.div 
                className="flex flex-col md:flex-row items-center gap-10 md:gap-36 max-w-7xl w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} // Анимация сработает один раз при скролле
                variants={containerVariants}
            >
                <div className="max-w-md text-black text-center md:text-left">
                    <motion.h2 
                        variants={itemVariants}
                        className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                    >
                        Explore Categories
                    </motion.h2>
                    
                    <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                        {[
                            { label: "Design & Tech", desc: "From gadgets to sustainable tools." },
                            { label: "Arts", desc: "Music, photography, and visual arts." },
                            { label: "Games", desc: "Tabletop and video games." },
                            { label: "Film", desc: "Indie movies and documentaries." }
                        ].map((item, index) => (
                            <motion.li key={index} variants={itemVariants}>
                                <span className="font-bold">{item.label}:</span> {item.desc}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <motion.div 
                    className="w-full max-w-[300px] md:max-w-[450px]"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image 
                        src={CodeImg} 
                        alt="Code Illustration" 
                        width={450}
                        height={350}
                        priority 
                        className="object-contain w-full h-auto"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}