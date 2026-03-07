"use client";

import { motion, Variants } from "framer-motion";
import { ChatWindow, ContactList } from "@/src/entities";

export function ChatPage() {

    const containerVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            filter: "blur(10px)" 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1] as const, 
                staggerChildren: 0.15 
            } 
        }
    };

    return (
        <motion.div 
            className="flex ml-48 mt-20 mb-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <ContactList />
            <ChatWindow />
        </motion.div>
    );
}