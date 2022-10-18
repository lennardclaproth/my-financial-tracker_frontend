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

function Search({ selectedColumn }: SortProps) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          value={selectedColumn.filterValue || ""}
          onChange={(e) => {
            selectedColumn.setFilter(e.target.value || undefined);
          }}
          hiddenLabel
          fullWidth
          id="standard-size-small"
          size="small"
          variant="standard"
          placeholder={`search ${selectedColumn.Header}...`}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            margin: theme.spacing(2),
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Search;
