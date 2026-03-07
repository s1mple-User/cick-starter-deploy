import { Box, Typography, TextField, Button, Switch, MenuItem, FormControl, Select } from '@mui/material';

export function SettingsForm() {
  return (
<Box sx={{ bgcolor: '#8CC63F', p: 4, borderRadius: 4, border: '2px solid white', width: 900, color: 'white' }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textTransform: 'uppercase' }}>SETTINGS:</Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {[
            { label: 'private:', key: 'private' },
            { label: 'hide project balance:', key: 'balance' },
            { label: 'mode 18+:', key: 'mode' }
          ].map((item) => (
            <Box key={item.key} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{item.label}</Typography>
              <Switch 
                sx={{ 
                  '& .MuiSwitch-switchBase.Mui-checked': { color: 'white' },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { bgcolor: '#4F772D', opacity: 1 }
                }} 
              />
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
            <h1 className='font-bold text-xl'>CHOOSE CONTENT LANGUAGE</h1>
          <FormControl sx={{ minWidth: 200 }}>
            <Select
              defaultValue="English"
              sx={{ 
                color: 'white', 
                fontWeight: 'bold',
                '.MuiOutlinedInput-notchedOutline': { borderColor: 'white', borderWidth: 2 },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '& .MuiSvgIcon-root': { color: 'white' }
              }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Russian">Russian</MenuItem>
            </Select>
          </FormControl>

          <Button 
            variant="outlined" 
            color="error"
            sx={{ borderColor: '#FF0000', color: '#FF0000', fontWeight: 'bold', fontSize: '1.1rem', '&:hover': { borderColor: '#cc0000', bgcolor: 'rgba(255,0,0,0.05)' } }}
          >
            delete account
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
