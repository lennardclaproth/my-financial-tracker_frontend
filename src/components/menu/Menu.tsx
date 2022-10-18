import * as React from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import {
  styled,
} from "@mui/material";

const StyledMenu = styled((props: CustomMenuProps) => <Menu {...props} />)(
  ({ theme, menuwidth }) => ({
    "& .MuiPaper-root": {
      borderRadius: "16px",
      borderRight: "none",
      color: theme.palette.primary.main,
      width: menuwidth,
      padding: theme.spacing(1),
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1) !important",
      "& .MuiCard-root": {
        boxShadow: "none !important",
      },
      "& .MuiList-root":{
        paddingTop:0,
        paddingBottom:0,
        
      },
      "& .MuiMenuItem-root": {
          borderRadius: "8px",
        "& .MuiSvgIcon-root": {
          color: theme.palette.primary.main,
        },
      },
    },
  })
);

interface CustomMenuProps extends MenuProps {
  menuwidth: String;
}

const SummaryComponent = ({
  anchorEl,
  open,
  onClose,
  children,
  menuwidth,
  anchorOrigin,
  transformOrigin,
  sx,
}: CustomMenuProps) => {
  return (
    <StyledMenu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      menuwidth={menuwidth}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      sx={[
        {},
        // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </StyledMenu>
  );
};
export default SummaryComponent;
