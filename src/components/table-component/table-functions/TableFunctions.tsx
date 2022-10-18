/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../../../theme/Theme";
import MenuComponent from "../../menu/Menu";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { TableFunctionsProps } from "../types";
import TableSort from "./Sort";
import Sort from "./Sort";
import GroupBy from "./GroupBy";
import Search from "./Search";

function TableFunctions({
  selectedColumn,
  anchorEl,
  handleClose,
  open,
}: TableFunctionsProps) {
  return (
    <MenuComponent
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      menuwidth={"250px"}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: 0,
        horizontal: 190,
      }}
      sx={{ padding: theme.spacing(1) }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          marginLeft: theme.spacing(2),
          marginTop: theme.spacing(1),
        }}
      >
        {selectedColumn?.Header}
      </Typography>
      <Search selectedColumn={selectedColumn}/>
      <GroupBy selectedColumn={selectedColumn}/>
      <Sort selectedColumn={selectedColumn}/>
    </MenuComponent>
  );
}

export default TableFunctions;
