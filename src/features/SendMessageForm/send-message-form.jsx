import React from 'react';
import { TextField, Button, Box } from '@mui/material';

export  function SendMessageForm() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 800, m: 2 }}>
      <TextField
        fullWidth
        placeholder="Type..."
        variant="outlined"
        sx={{
            
          '& .MuiOutlinedInput-root': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            '& fieldset': {
              borderColor: '#ccc', // Цвет рамки как на скрине
              borderWidth: '2px',
            },
          },
        }}
      />
      <Button
        variant="contained"
        disableElevation
        sx={{
          height: '56px', // Высота должна совпадать с TextField
          backgroundColor: '#8bc34a', // Тот самый зеленый цвет
          color: 'white',
          textTransform: 'none',
          fontSize: '1.2rem',
          padding: '0 30px',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          '&:hover': {
            backgroundColor: '#7cb342',
          },
        }}
      >
        Send
      </Button>
    </Box>
  );
}