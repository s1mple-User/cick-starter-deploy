"use client" 
import { projects } from "@/src/shared/lib/consts"
import { useParams } from "next/navigation" 
import { motion, AnimatePresence } from "framer-motion"
import BgFrame from "@/public/bg/bg-green.png"
import { CustomCard } from "@/src/entities"

export function DetailProject() {
    const params = useParams()
    const id = params?.id 

    const filteredProjects = projects.filter(i => String(i.id) === id)
    
    if (!id) return <div className="p-20">Loading...</div>

    return (
        <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
                <motion.div
                    key="project-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
               
                  <motion.div 
                    className="relative left-[180px] top-[50px] z-10"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                      {filteredProjects.map((card) => (
                        <CustomCard key={card.id} {...card} />
                    ))}
                  </motion.div>

                    {/* Секция с описанием */}
                    <motion.section 
                        className="relative w-full min-h-[600px] flex items-center justify-center px-20 mt-30"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ 
                            backgroundImage: `url(${BgFrame.src})`, 
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "top center"
                        }}
                    >
                        {filteredProjects.map((i) => (
                            <motion.p 
                                key={i.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="max-w-2xl text-lg text-center leading-relaxed"
                            >
                                {i.description}
                            </motion.p>
                        ))}
                    </motion.section>
                </motion.div>
            ) : (
                <motion.div 
                    key="not-found"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center min-h-[400px]"
                >
                    <p className="text-xl font-bold">Project not found</p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}