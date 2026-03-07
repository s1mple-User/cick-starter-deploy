"use client"

import { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence, Variants } from 'framer-motion'; // Добавили motion
import { AddCard, ProjectCard, SettingsForm } from '@/src/shared';
import { Profile } from '@/src/entities/Profile/profile';
import { AddProject } from '@/src/features';

const SidebarButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  color: active ? '#8cc63f' : 'white',
  backgroundColor: '#487D49',
  borderColor: 'white',
  borderRadius: 0,
  padding: '16px',
  fontSize: '1.2rem',
  textTransform: 'lowercase',
  borderBottom: '2px solid white',
  width: '100%',
  position: 'relative', // Для позиционирования индикатора
  '&:hover': {
    backgroundColor: '#3e6b3f',
    color: '#8cc63f',
  },
}));

// Варианты анимации для контента
const tabContentVariants: Variants = {
  initial: { opacity: 0, x: 10 },
  enter: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.3, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    x: -10, 
    transition: { duration: 0.2 } 
  }
};

export function DashboardSections() {
  const [activeTab, setActiveTab] = useState('transaction');

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#8cc63f', p: 5 }}>
      <Stack direction="row" spacing={8}>

        {/* Сайдбар с анимацией кнопок */}
        <Box sx={{ width: 250, border: '2px solid white', borderRadius: 1, overflow: 'hidden', height: 'fit-content' }}>
          <Stack>
            {['profile', 'transaction', 'add project', 'add card', 'settings'].map((tab) => (
              <SidebarButton 
                key={tab}
                active={activeTab === tab} 
                onClick={() => setActiveTab(tab)}
              >
                {/* Анимированный фон/индикатор активного таба */}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabHighlight"
                    className="absolute inset-0 bg-white/5" // Легкий подсвет
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </SidebarButton>
            ))}
          </Stack>
        </Box>

        {/* Основной контент с AnimatePresence */}
        <Box sx={{ flexGrow: 1, position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // Ключ обязателен для работы exit анимации
              variants={tabContentVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {activeTab === 'transaction' && (
                <ProjectCard amount={222} title='2222' image='2222' card_type='green' />
              )}
              {activeTab === 'profile' && <Profile />}
              {activeTab === 'add project' && <AddProject />}
              {activeTab === 'settings' && <SettingsForm />}
              {activeTab === 'add card' && <AddCard />}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Stack>
    </Box>
  );
}