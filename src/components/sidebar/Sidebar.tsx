import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import SvgIcon from "@mui/icons-material/Home";
import { Button, MenuItem, Typography } from "@mui/material";
import router from "next/router";
import logo from "logo/logo.png";
import Image from "next/image";
import Menu from "../menu/Menu";
import SidebarButton from "./SidebarButton";
import theme from "theme/Theme";
import {
  BankIcon,
  DashboardIcon,
  DollarBillIcon,
  DownloadIcon,
  ImportExportIcon,
  MonetizationIcon,
  PieChartIcon,
  SavingsIcon,
  TagIconOutlined,
  TagRulerIcon,
} from "modules/icons/Icons";

const buttons = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    menuButtons: [
      {
        icon: DollarBillIcon,
        name: "Cash flow",
        route: "/cash-flow",
      },
      {
        icon: PieChartIcon,
        name: "Portfolio",
        route: "/portfolio",
      },
      {
        icon: SavingsIcon,
        name: "Savings",
        route: "/savings",
      },
    ],
  },
  {
    name: "Import data",
    icon: ImportExportIcon,
    menuButtons: [
      {
        icon: BankIcon,
        name: "Bank import",
        route: "/bank-import",
      },
      {
        icon: MonetizationIcon,
        name: "Broker import",
        route: "/broker-import",
      },
      {
        icon: DownloadIcon,
        name: "Export your data",
        route: "/export",
      },
    ],
  },
  {
    name: "Tag",
    icon: TagIconOutlined,
    menuButtons: [
      {
        icon: TagRulerIcon,
        name: "Manage tags",
        route: "/manage-tags",
      },
    ],
  },
];

const StyledSidebar = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  "& .MuiDrawer-paper": {
    background: theme.palette.primary.dark,
    borderRadius: "16px",
    marginLeft: "0.5rem",
    marginTop: "0.5rem",
    height: "calc(100% - 1rem)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    border: "0px",
  },
}));

export default function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = React.useState<number>(0);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(index);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledSidebar variant="permanent">
      <Button
        sx={{
          justifyContent: "center",
          mt: theme.spacing(1),
          borderRadius: "16px",
          overflow: "hidden",
        }}
        onClick={() => {
          router.push("/");
        }}
      >
        <div
          style={{ borderRadius: "5px", overflow: "hidden", height: "40px" }}
        >
          <Image src={logo} alt="MFT logo" width={40} height={40} />
        </div>
      </Button>
      <List>
        {buttons.map((button, index) => (
          <SidebarButton
            key={`appDrawerButton-${index}`}
            index={index}
            handleClick={handleClick}
            icon={button.icon}
          />
        ))}
      </List>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        menuwidth={"200px"}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: 0,
          horizontal: -12,
        }}
      >
        {buttons[activeMenu].menuButtons.map((menuButton, index) => (
          <MenuItem
            onClick={() => {
              handleClose(), router.push(menuButton.route);
            }}
            key={`menuButton-${index}`}
          >
            <SvgIcon component={menuButton.icon} />
            <Typography variant="subtitle2" sx={{ marginLeft: 1 }}>
              {menuButton.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </StyledSidebar>
  );
}
