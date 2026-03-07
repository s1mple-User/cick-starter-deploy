"use client"
import { LoginCard, RegisterCard } from "@/src/shared"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function AuthSection() {
    const [active, setActive] = useState(false)

    const channgeState = () => setActive((prev) => !prev);

    return (
        <div style={{ 
            position: 'relative', 
            width: '100%', 
            height: '600px', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1000px'
        }}>
          
            <AnimatePresence>
                {active ? (
                    <motion.div
                        key="login"
                        initial={{ y: '100%', opacity: 0, zIndex: 2 }} 
                        animate={{ y: 0, opacity: 1, zIndex: 2 }}
                        exit={{ y: '10%', opacity: 0.5, scale: 0.95, zIndex: 1 }} 
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{ position: 'absolute' }}
                    >
                        <LoginCard channgeState={channgeState} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="register"
                        initial={{ y: '100%', opacity: 0, zIndex: 2 }}
                        animate={{ y: 0, opacity: 1, zIndex: 2 }}
                        exit={{ y: '10%', opacity: 0.5, scale: 0.95, zIndex: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{ position: 'absolute' }}
                    >
                        <RegisterCard channgeState={channgeState} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}