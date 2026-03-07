import React from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper 
} from '@mui/material';
import BgFrame from "@/public/bg/bg-white.png"

interface RegisterCardProps {
  channgeState: () => void; 
}

export  function LoginCard({channgeState}:RegisterCardProps) {
  return (
    <Box 
      sx={{ 
        
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
          backgroundImage: `url(${BgFrame.src})`, 
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "top center",
                mt:30
      }}
    >
      <Paper 
        elevation={0} 
        sx={{ 
          padding: '40px 20px', 
          width: '450px', 
          backgroundColor: '#8bc34a',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ color: 'white', mb: 1, fontWeight: 'normal' }}
        >
          Login:
        </Typography>

        <Box>
          <Typography sx={{ color: 'white', mb: 0.5 }}>email</Typography>
          <TextField 
            fullWidth 
            variant="outlined" 
            size="small"
            sx={{ 
              backgroundColor: 'white', 
              borderRadius: '8px',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' } 
            }} 
          />
        </Box>

        <Box>
          <Typography sx={{ color: 'white', mb: 0.5 }}>password</Typography>
          <TextField 
            fullWidth 
            type="password"
            variant="outlined" 
            size="small"
            sx={{ 
              backgroundColor: 'white', 
              borderRadius: '8px',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' } 
            }} 
          />
        </Box>

        <Button 
          variant="contained" 
          fullWidth
          sx={{ 
            backgroundColor: '#4e7e4e', 
            textTransform: 'none', 
            fontSize: '1.2rem',
            mt: 2,
            '&:hover': { backgroundColor: '#3d633d' }
          }}
        >
          send
        </Button>

        <Button 
        onClick={channgeState}
          variant="contained" 
          fullWidth
          sx={{ 
            backgroundColor: '#4e7e4e', 
            textTransform: 'none', 
            fontSize: '1.2rem',
            '&:hover': { backgroundColor: '#3d633d' }
          }}
        >
          register
        </Button>
      </Paper>
    </Box>
  );
}