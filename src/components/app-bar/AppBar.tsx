import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Divider } from "@mui/material";
import Summary from "./Summary";
import DateFilterComponent from "./DateFilter";
import theme from "theme/Theme";
import HorizontalFlexBox from "components/containers/HorizontalFlexBox";

const AppBarComponent = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        borderRadius: "16px",
        minWidth: "250px",
        maxWidth: "350px",
        marginRight: "2rem",
        marginTop: "0.5rem",
        height: "64px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        verticalAlign: "center",
        overflow: "hidden",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <HorizontalFlexBox
        sx={{ padding: 0, background: theme.palette.primary.dark }}
      >
        <Summary />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: theme.palette.secondary.main,
            opacity: "0.3",
          }}
        />
        <DateFilterComponent />
      </HorizontalFlexBox>
    </AppBar>
  );
};
export default AppBarComponent;
