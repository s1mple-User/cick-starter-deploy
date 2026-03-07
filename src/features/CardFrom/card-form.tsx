import { Box, Typography, TextField } from '@mui/material';
import { ButtonCustom } from '../../shared/ButtonCustom/custom-button';

export function AddCard() {
  return (
    <Box sx={{ 
      bgcolor: '#8CC63F', 
      p: 4, 
      borderRadius: 4, 
      border: '2px solid white', 
      width: 600, 
      height: 400, 
      color: 'white',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>Card</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '70%' }}>
        {[
          { label: 'number...', type: 'text' },
          { label: 'password...', type: 'password' },
          { label: 'type...', type: 'text' }
        ].map((field) => (
          <TextField
            key={field.label}
            placeholder={field.label}
            type={field.type}
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                fontWeight: 'bold',
                '& fieldset': { borderColor: 'white', borderWidth: 2, borderRadius: 2 },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
              },
              '& input::placeholder': { color: 'white', opacity: 0.8 }
            }}
          />
        ))}
      </Box>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
        flexGrow: 1, 
        mt:3
     }}>
          <ButtonCustom text='add' />
      </Box>
    </Box>
  );
}