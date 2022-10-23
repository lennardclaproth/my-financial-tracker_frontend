import type { NextPage } from "next";
import { Box, Button, Divider, Grid, Menu, Tab, Tabs } from "@mui/material";
import Wizard from "modules/file-upload/bank-transactions/Wizard";
import VerticalFlexBox from "components/containers/VerticalFlexBox";
import HorizontalFlexBox from "components/containers/HorizontalFlexBox";
import ContainerCard from "components/containers/ContainerCard";
import Header from "components/headers/Header";
import React from "react";
import {
  BankIcon,
  DownloadIcon,
  ImportExportIcon,
  MonetizationIcon,
} from "modules/icons/Icons";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import theme from "theme/Theme";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function AuditDataHandler() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    // <Grid container direction="row" alignItems="start" height={1}>
      <ContainerCard
        header={<Header title={"Data to audit"} />}
        body={
          <HorizontalFlexBox sx={{ padding: 0, verticalAlign: "top" }}>
            <VerticalFlexBox sx={{ marginTop: 0}}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{}}
              >
                <Tab
                  label="Bank import"
                  icon={<BankIcon fontSize="inherit" />}
                  iconPosition="start"
                  {...a11yProps(0)}
                  sx={{
                    pl: 0,
                    minHeight: 0,
                    justifyContent: "flex-start",
                    mt: theme.spacing(1),
                  }}
                />
                <Tab
                  label="Broker import"
                  icon={<MonetizationIcon fontSize="inherit" />}
                  iconPosition="start"
                  {...a11yProps(1)}
                  sx={{
                    pl: 0,
                    minHeight: 0,
                    justifyContent: "flex-start",
                    mt: theme.spacing(1),
                  }}
                />
                <Tab
                  label="Export your data"
                  icon={<DownloadIcon fontSize="inherit" />}
                  iconPosition="start"
                  {...a11yProps(2)}
                  sx={{
                    pl: 0,
                    alignItems: "flex-start",
                    minHeight: 0,
                    justifyContent: "flex-start",
                    mt: theme.spacing(1),
                  }}
                />
              </Tabs>
            </VerticalFlexBox>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ paddingLeft: theme.spacing(3), height: "500px", overflowY:"scroll"}}>
              <Wizard />
            </Box>
          </HorizontalFlexBox>
        }
      ></ContainerCard>
    // </Grid>
  );
};

export default AuditDataHandler;
