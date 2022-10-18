import Card, { CardProps } from "@mui/material/Card";
import { Drawer, styled, SxProps } from "@mui/material";
import { shouldForwardProp } from "@mui/styled-engine";
import { Component, ReactElement } from "react";
import theme from "theme/Theme";

export default function Right({ open, onClose, children }) {
  return (
    <Drawer
      PaperProps={{ style: { width: "45%" } }}
      onClose={onClose}
      anchor={"right"}
      open={open}
      sx={{
        "& .MuiBackdrop-root": {
          opacity: "0 !important",
        },
        padding: theme.spacing(3)
      }}
    >
        {children}
    </Drawer>
  );
}
