"use client"

import { Box, Typography } from '@mui/material';
import { ButtonCustom } from '../../shared/ButtonCustom/custom-button';
import { CreditCard } from '../CreditCard/credit-card';

interface ProjectCardProps {
  title: string;
  amount: number;
  image?: string; 
  card_type: "green" | "red";
}

export function ProjectCard({ title, amount, image, card_type }: ProjectCardProps) {
  const borderColor = card_type === "red" ? '#ff0000' : '#4d7831';
  const textColor = card_type === "red" ? '#ff0000' : '#558b2f'; 

  const displayAmount = amount > 0 ? `+${amount}$` : `${amount}$`;

  return (
    <>
     <CreditCard card_number='2222' price={2222} type='Visa' />
     
       <Box sx={{ 
      width: 280, 
      height: 380, 
      border: `1.5px solid ${borderColor}`, 
      p: 3, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      bgcolor: 'rgba(255, 255, 255, 0.05)', 
      borderRadius: '16px', 
      position: 'relative',
      transition: 'transform 0.2s',
      '&:hover': { transform: 'scale(1.02)' } 
    }}>
      
      <Typography variant="h6" sx={{ 
        color: 'white', 
        mb: 2, 
        fontWeight: 500, 
        textTransform: 'uppercase',
        letterSpacing: '1px' 
      }}>
        {title}
      </Typography>

      <Box sx={{ 
        width: '100%', 
        height: '160px', 
        border: '1px solid rgba(255, 255, 255, 0.5)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        mb: 4, 
        borderRadius: '12px', 
        overflow: 'hidden'
      }}>
        <Typography variant="caption" sx={{ color: 'white', opacity: 0.8 }}>
          PHOTO
        </Typography>
      </Box>
        <ButtonCustom 
        paddingY='14px'
        paddingX='80px'
          text={displayAmount} 
          variant='outlined'  
        />
   
    </Box>
    </>
  );
}