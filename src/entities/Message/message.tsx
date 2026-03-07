import React from 'react';
import { Box, Paper, PaperProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface BubbleProps extends PaperProps {
  isMe?: boolean;
}

const ChatBubble = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isMe',
})<BubbleProps>(({ isMe }) => ({
  position: 'relative',
  padding: '16px', 
  width: '280px', 
  minHeight: '50px',
  height: 'auto',   
  
  borderRadius: isMe ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
  backgroundColor: isMe ? '#487D49' : '#E0E0E0',
  color: isMe ? '#FFFFFF' : '#000000',
  boxShadow: 'none',
  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  wordBreak: 'break-word',

  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    width: '12px',
    height: '12px',
    backgroundColor: 'inherit',
    ...(isMe ? {
      right: '-5px',
      clipPath: 'polygon(0 0, 0% 100%, 100% 100%)',
    } : {
      left: '-5px',
      clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
    }),
  },
}));

interface MessageProps {
  text: string;
  isMe?: boolean;
}

export function Message({ text, isMe = true }: MessageProps) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: isMe ? 'flex-end' : 'flex-start',
        width: '100%', 
        my: 1, 
        px: 2,
        boxSizing: 'border-box'
      }}
    >
      <ChatBubble isMe={isMe} elevation={0}>
        <Typography 
          variant="body1"
          sx={{ 
            fontWeight: 500, 
            lineHeight: 1.4,
            textAlign: 'left',
            width: '100%',
            whiteSpace: 'pre-wrap'
          }}
        >
          {text}
        </Typography>
      </ChatBubble>
    </Box>
  );
}