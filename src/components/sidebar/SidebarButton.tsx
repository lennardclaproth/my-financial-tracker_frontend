import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SvgIcon from "@mui/icons-material/Home";
import theme from "../../theme/Theme";

interface SidebarButtonProps {
  index: number;
  handleClick: (e: any, index: any) => void;
  icon: typeof SvgIcon;
}
function SidebarButton({ index, handleClick, icon }: SidebarButtonProps) {
  return (
    <ListItem
      key={index}
      disablePadding
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        margin: "auto",
        borderRadius: "5px",
      }}
    >
      <ListItemButton
        sx={{
          justifyContent: "center",
          height: "40px",
          width: "40px",
          borderRadius: "5px",
          px: 2.5,
          color: theme.palette.secondary.main,
        }}
        onClick={(e) => handleClick(e, index)}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: "auto",
            justifyContent: "center",
          }}
        >
          <SvgIcon
            component={icon}
            sx={{ color: theme.palette.secondary.main }}
          />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
}

export default SidebarButton;
