/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import theme from "theme/Theme";
import { SortProps } from "../types";
import { SearchIcon } from "modules/icons/Icons";

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
                <SearchIcon />
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
