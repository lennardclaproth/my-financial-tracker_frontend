import { Box, BoxProps } from "@mui/material";

function VerticalFlexBox({ children, sx }: BoxProps) {
  return (
    <Box
      sx={[{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        padding: 0
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      { children }
    </Box>
  );
}

export default VerticalFlexBox;
