import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Paper } from '@mui/material';
import { ButtonCustom } from '@/src/shared/ButtonCustom/custom-button';

const mockCards = [
    { id: 1, name: 'Visa **** 1234' },
    { id: 2, name: 'MasterCard **** 5678' },
    { id: 3, name: 'Приморье **** 9012' },
];

interface MoneySendFormProps {
    onClose?: () => void;
    currentAmount?: string; 
}

export function MoneySendForm({ onClose, currentAmount = '80$/1500$' }: MoneySendFormProps) {
    const [selectedCard, setSelectedCard] = useState('');
    const [amountToSend, setAmountToSend] = useState('');

    const handleSend = () => {
        console.log('Отправка:', { card: selectedCard, amount: amountToSend });
        if (onClose) onClose();
    };

    return (
        <Paper
            elevation={0} 
            sx={{
                p: 4,
                width: '100%',
                maxWidth: '550px',
                backgroundColor: '#82D13D', 
                borderRadius: '12px',
                color: 'white',
                boxSizing: 'border-box'
            }}
        >
            <Box display="flex" gap={4} alignItems="stretch">
              
                <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between">
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '500',
                            letterSpacing: '1px',
                            mb: 4
                        }}
                    >
                        PROJECT
                    </Typography>

                        <ButtonCustom text="currentAmount" paddingY='7px' paddingX='10px' />
                </Box>

                <Box flex={1.2} display="flex" flexDirection="column" gap={2}>
                    <TextField
                        select
                        fullWidth
                        value={selectedCard}
                        onChange={(e) => setSelectedCard(e.target.value)}
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            displayEmpty: true,
                            renderValue: (selected) => {
                                if ((selected as string).length === 0) {
                                    return <span style={{ color: '#aaa' }}>select card</span>;
                                }
                                return mockCards.find(c => c.id === selected)?.name;
                            },
                        }}
                        InputProps={{
                            sx: {
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                            },
                        }}
                    >
                        {mockCards.map((card) => (
                            <MenuItem key={card.id} value={card.id}>{card.name}</MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        fullWidth
                        value={amountToSend}
                        
                        placeholder="how much..."
                        variant="outlined"
                        size="small"
                        type='number'
                        onChange={(e) => {
        const val = e.target.value;
        
        if (Number(val) >= 0 || val === '') {
            setAmountToSend(val);
        }
    }}
                        InputProps={{
                            sx: {
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        onClick={handleSend}
                        sx={{
                            alignSelf: 'flex-end',
                            mt: 1,
                            px: 5,
                            py: 1,
                            backgroundColor: '#4A7822', // Темно-зеленый
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#3d631c',
                                boxShadow: 'none',
                            },
                        }}
                    >
                        send
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}