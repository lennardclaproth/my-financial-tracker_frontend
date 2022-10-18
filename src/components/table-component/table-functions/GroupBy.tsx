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
import { SortProps } from "../types";

function GroupBy({ selectedColumn }: SortProps) {
  return (
    <Grid container>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          padding: theme.spacing(1)
        //   justifyContent: "center",
        }}
      >
        <Switch
          checked={selectedColumn.isGrouped}
          onChange={() => {
            selectedColumn.toggleGroupBy();
          }}
        />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
        //   justifyContent: "center",  
        }}
      >
        <Typography variant="subtitle2" sx={{ marginTop: "auto",marginBottom: "auto" }}>
          Group by
        </Typography>
      </Grid>
    </Grid>
  );
}

export default GroupBy;
