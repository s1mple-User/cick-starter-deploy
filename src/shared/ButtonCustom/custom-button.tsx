import { CustomButtonProps } from "@/src/types/style-type";
import { Button, ButtonProps } from "@mui/material";


export function ButtonCustom({
  text,
  textSize = "20px",
  textColor = "white",    
  borderColor = "white",
  paddingX = "100px",
  paddingY = "15px",
  variant = "outlined",
  hoverTextColor = "black",
  bg="None",
  hoverBg = "white"
}: CustomButtonProps) {
  return (
    <Button
      variant={variant}
      sx={{
        fontSize:textSize,
        color: textColor,
        borderColor: borderColor,
        paddingX: paddingX,
        backgroundColor:bg,
        paddingY: paddingY,
        textTransform: "none",
        "&:hover": {
          color:hoverTextColor,
          backgroundColor: hoverBg,
        },
      }} 
    >
      {text}
    </Button>
  );
}