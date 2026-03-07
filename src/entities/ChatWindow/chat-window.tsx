import { Avatar, Box, Container, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Message } from "../Message/message";
import { SendMessageForm } from "@/src/features";

export function ChatWindow() {
  // Sample data to demonstrate a mixed flow
  const messages = [
    { id: 1, text: "Hey there!", isMe: false },
    { id: 2, text: "Hi! How's it going?", isMe: true },
    { id: 3, text: "All good, just testing this UI.", isMe: false },
  ];

  return (
    <Box className="h-[800px] w-[1000px] flex flex-col bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
      <ListItem 
        sx={{ 
          py: 2, 
          px: 3,
          bgcolor: "#487D49",
          color: "white",
        }}
      >
        <ListItemAvatar sx={{ minWidth: 70 }}>
          <Avatar sx={{ width: 55, height: 55, bgcolor: '#d9d9d9' }} />
        </ListItemAvatar>
        <ListItemText 
          primary={<Typography variant="h5" sx={{ fontWeight: 500 }}>TEST USER</Typography>}
        />
      </ListItem>

      {/* Message Area */}
      <Container 
        maxWidth={false}
        className="flex-grow overflow-y-auto p-6 flex flex-col gap-6"
        sx={{
          bgcolor: '#f5f5f5', // Slight contrast for the background
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: '#cccccc', borderRadius: '10px' },
        }}
      >
        {/* If you want a chronological mix, map a single array here */}
        {messages.map((msg) => (
          <Message key={msg.id} text={msg.text} isMe={msg.isMe} />
        ))}

        <Box className="self-end flex flex-col gap-6">
          {[1, 2, 3].map((item, index) => (
            <Message key={`right-${index}`} text={`Message ${item}`} isMe={true} />
          ))}
        </Box>
      </Container>

      {/* Footer / Input */}
      <Box sx={{ p: 2, borderTop: '1px solid #eee',ml:10 }}>
        <SendMessageForm />
      </Box>
    </Box>
  );
}