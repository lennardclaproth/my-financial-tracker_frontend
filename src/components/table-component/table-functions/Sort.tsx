/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import theme from "../../../theme/Theme";
import { SortProps } from "../types";
import { HorizontalRuleIcon, SortAscIcon, SortDescIcon } from "modules/icons/Icons";

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
              <SortDescIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                selectedColumn.toggleSortBy();
              }}
            >
              <SortAscIcon />
            </IconButton>
          )
        ) : (
          <IconButton
            onClick={() => {
              selectedColumn.toggleSortBy();
            }}
            sx={{}}
          >
            <HorizontalRuleIcon />
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
