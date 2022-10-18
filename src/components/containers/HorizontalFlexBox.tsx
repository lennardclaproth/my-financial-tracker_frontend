import { Box, BoxProps } from "@mui/material";

function HorizontalFlexBox({ children, sx }: BoxProps) {
  return (
    <Box
      sx={[{
        display: "flex",
        flexDirection: "row",
        verticalAlign: "middle",
        alignItems: "center"},
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      { children }
    </Box>
  );
}

export default HorizontalFlexBox;
