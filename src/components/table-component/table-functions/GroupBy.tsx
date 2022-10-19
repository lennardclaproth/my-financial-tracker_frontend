/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import theme from "../../../theme/Theme";
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
