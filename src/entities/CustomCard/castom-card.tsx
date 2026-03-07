import React, { useState } from 'react';
import { Box, Typography, Paper, ClickAwayListener } from '@mui/material';
import { ButtonCustom } from "../../shared/ButtonCustom/custom-button";
import Link from 'next/link';


interface CustomCardProps {
    title: string;
    description: string;
    category: string;
    money: number | string;
    amount: number | string;
    id:number
}

export function CustomCard({ title, description, category, money, amount,id}: CustomCardProps) {
    const [showForm, setShowForm] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => setShowForm(false)}>
            
            <Box component="section">
                <Paper
                    elevation={0}
                    sx={{
                        width: '100%',
                        maxWidth: '1300px',
                        border: '2px solid white',
                        borderRadius: '16px',
                        p: 3,
                        backgroundColor: 'transparent',
                        display: 'flex',
                        position: 'relative',
                        color: 'white',
                        mb: 10
                    }}
                >
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            width: '100%', 
                            gap: 3, 
                            flexDirection: { xs: 'column', lg: 'row' } 
                        }}
                    >
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 2 }}>
                                {title}
                            </Typography>
                            
                            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9, maxWidth: '800px' }}>
                                {description}
                            </Typography>

                            <Typography variant="h6" sx={{ fontStyle: 'italic', opacity: 0.8, mb: 1 }}>
                                {category}
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 'auto' }}>
                                <Link href={`/project/${id}`}>
                                <Box onClick={() => setShowForm(!showForm)} sx={{ cursor: 'pointer' }}>
                                    <ButtonCustom text={`${amount}/${money}$`} />
                                </Box>
                                 </Link>

                                <Box sx={{ border: '2px solid white', borderRadius: '8px', px: 3, py: 1 }}>
                                    <Typography sx={{ fontSize: '1.2rem' }}>Tg:Name</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                width: { xs: '100%', lg: '400px' },
                                height: '250px',
                                border: '2px solid white',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifySelf: 'center', 
                                justifyContent: 'center',
                                fontSize: '2rem'
                            }}
                        >
                            PHOTO
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </ClickAwayListener>
    );
}