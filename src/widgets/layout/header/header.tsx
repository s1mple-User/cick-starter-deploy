"use client";

import { motion, Variants } from "framer-motion";
import { links } from "@/src/shared/lib/consts";
import logo from "@/public/img/Frame_10.png";
import Image from "next/image"; 
import Link from "next/link";

export function Header() {
    // Анимация появления всего хедера
    const headerVariants: Variants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                type: "spring", 
                stiffness: 80, 
                damping: 20,
                staggerChildren: 0.1,
                delayChildren: 0.3
            } 
        }
    };

    // Анимация для отдельных ссылок
    const linkVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.header 
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col md:flex-row items-center justify-between p-4 border-b-4 border-[#487D49] gap-4 bg-transparent"
        >
            {/* Логотип с легким покачиванием при появлении */}
            <motion.div 
                className="w-[150px] md:w-[300px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <Image 
                    src={logo} 
                    alt="Logo" 
                    width={300} 
                    height={150}
                    className="w-full h-auto"
                    priority
                />
            </motion.div>

            <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
                {links.map((item) => (
                    <motion.div
                        key={item.link}
                        variants={linkVariants}
                        whileHover={{ y: -2 }}
                    >
                        <Link
                            href={item.link} 
                            className="text-white text-lg md:text-2xl px-3 py-1 md:px-4 md:py-2 rounded hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}
            </nav>

            {/* Заглушка для симметрии или будущего аватара */}
            <div className="hidden md:block w-[150px] md:w-[300px]" />
        </motion.header>
    );
}