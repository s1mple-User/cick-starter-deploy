import React from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

export function ContactList() {
  const contacts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    name: 'Name',
  }));

  return (
    <Box 
      className="w-full max-w-[350px] border-[10px] border-[#487D49] bg-[#487D49] h-[800px] flex flex-col"
    >
      <Box 
        className="bg-white flex-grow overflow-y-auto"
        sx={{
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: '#487D49', borderRadius: '10px' },
        }}
      >
        <List sx={{ p: 0 }}>
          {contacts.map((contact) => (
            <ListItem 
              key={contact.id}
              alignItems="center"
              sx={{ 
                py: 2, 
                px: 3,
                borderBottom: '4px solid #487D49', 
                transition: 'all 0.3s ease-in-out', 
                '&:last-child': { borderBottom: 0 },
                '&:hover': { 
                  bgcolor: '#487D49',
                  cursor: 'pointer',
                  '& .MuiTypography-root': { color: 'white' }
                }
              }}
            >
              <ListItemAvatar sx={{ minWidth: 70 }}>
                <Avatar sx={{ width: 55, height: 55, bgcolor: '#d9d9d9' }} />
              </ListItemAvatar>
              <ListItemText 
                primary={
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 400, 
                      ml: 1,
                      transition: 'color 0.3s ease-in-out' 
                    }}
                  >
                    {contact.name}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}