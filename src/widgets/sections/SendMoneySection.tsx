"use client";

import { motion } from "framer-motion";
import BgFrame from "@/public/bg/bg-white.png";
import { MoneySendForm } from "@/src/features";

export function SendMoneySection() {
    return (
        <motion.section 
           
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            
            className="relative mt-36 min-h-[500px] flex items-center justify-center py-36"
            style={{ 
                backgroundImage: `url(${BgFrame.src})`, 
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
            }}
        >
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                    delay: 0.2, 
                    duration: 0.6, 
                    type: "spring", 
                    stiffness: 100 
                }}
                className="w-full max-w-xl  px-4"
            >
                <MoneySendForm />
            </motion.div>
        </motion.section>
    );
}