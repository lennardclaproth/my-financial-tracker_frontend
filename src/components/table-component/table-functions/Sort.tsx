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

function Sort({ selectedColumn }: SortProps) {
  return (
    <Grid container>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          paddingLeft: theme.spacing(2)
        }}
      >
        {selectedColumn.isSorted ? (
          selectedColumn.isSortedDesc ? (
            <IconButton
              onClick={() => {
                selectedColumn.toggleSortBy();
              }}
            >
              <KeyboardDoubleArrowDownRoundedIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                selectedColumn.toggleSortBy();
              }}
            >
              <KeyboardDoubleArrowUpRoundedIcon />
            </IconButton>
          )
        ) : (
          <IconButton
            onClick={() => {
              selectedColumn.toggleSortBy();
            }}
            sx={{}}
          >
            <HorizontalRuleRoundedIcon />
          </IconButton>
        )}
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
        }}
      >
        <Typography variant="subtitle2" sx={{ marginTop: "auto", marginBottom: "auto" }}>
          Sort
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Sort;
