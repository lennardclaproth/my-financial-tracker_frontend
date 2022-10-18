import type { NextPage, NextPageContext } from "next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Overview from "modules/cash-flow/Overview";
import Details from "modules/cash-flow/Details";
import ContainerCard from "components/containers/ContainerCard";
import TableComponent from "components/table-component/Table";
import React, { useEffect, useState } from "react";
import RequestHandler from "modules/request-handler/RequestHandler";
import { wrapper } from "store/store";
import { useSelector } from "react-redux";
import HorizontalFlexBox from "components/containers/HorizontalFlexBox";
import theme from "theme/Theme";
import VerticalFlexBox from "components/containers/VerticalFlexBox";
import Header from "components/headers/Header";
import moment from "moment";
// import { buttons, views } from "./static-data/Views";
import {
  buttons,
  taggingButtons,
  views,
} from "modules/cash-flow/static-data/Views";
import { columnProps } from "modules/cash-flow/static-data/TableConfig";
import { CashFlowProps } from "modules/cash-flow/types";
import Button from "@mui/material/Button";
import HelpOutlineRounded from "@mui/icons-material/HelpOutlineRounded";
import { grey } from "@mui/material/colors";
import { AddRounded } from "@mui/icons-material";
import Right from "components/Drawers/Right";
import ImageCard from "components/cards/ImageCard";
import tag from "illustrations/illustrations-svg/tag.svg";
import Typography from "@mui/material/Typography";
import SelectList from "components/select/Select";
import { TextField } from "@mui/material";
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
// TODO add typings

function getActiveView(
  view: string,
  activeMonth: any,
  setActiveMonth: () => void,
  cashFlowState: any
) {
  switch (view) {
    case views.Overview:
      return (
        <Overview
          activeMonth={activeMonth}
          setActiveMonth={setActiveMonth}
          cashFlow={cashFlowState}
          sx={{ height: "500px", padding: 0 }}
        />
      );
    case views.Incoming:
      return <Details sx={{ height: "500px", padding: 0 }} />;
    case views.Outgoing:
      return <Details sx={{ height: "500px", padding: 0 }} />;
  }
}

const CashFlow: NextPage<CashFlowProps> = ({ transactions, cashFlow }) => {
  const filter = useSelector((state: any) => state.globalFilter.dateFilter);
  const [prevFilterState, setPrevFilterState] = useState(filter);
  const [cashFlowState, setCashflowState] = useState(cashFlow);
  const [activeView, setActiveView] = useState("Overview");
  const [activeTagView, setActiveTagView] = useState("Tag");
  const [activeMonth, setActiveMonth] = useState(cashFlow[cashFlow.length - 1]);
  const [drawerActive, setDrawerActive] = useState(false);
  useEffect(() => {
    const handleFetch = () => {
      RequestHandler.GET("/Transaction/Bank/CashFlow", {
        params: { filter: filter },
      }).then((res: any) => setCashflowState(res.data));
    };
    if (prevFilterState != filter) {
      handleFetch();
    }
    setPrevFilterState(filter);
  }, [filter, prevFilterState]);

  return (
    <VerticalFlexBox sx={{ padding: 0 }}>
      <ContainerCard
        sx={{ marginBottom: theme.spacing(3) }}
        header={
          <Header
            title={moment(activeMonth.dateString).format("MMMM YYYY")}
            activeView={activeView}
            setActiveView={setActiveView}
            functions={buttons.map((button: any, index: number) => {
              return (
                <Button
                  key={index}
                  variant="text"
                  onClick={() => {
                    setActiveView(button.viewName);
                  }}
                  disableElevation
                  startIcon={button.icon}
                  sx={{
                    borderRadius: "8px",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottom:
                      button.viewName === activeView
                        ? `1px solid ${theme.palette.primary.main}`
                        : "none",
                    marginBottom: "-1px",
                    marginLeft: theme.spacing(1),
                  }}
                >
                  {button.viewName}
                </Button>
              );
            })}
            sx={{}}
          />
        }
        body={
          <HorizontalFlexBox sx={{ padding: 0 }}>
            {getActiveView(
              activeView,
              activeMonth,
              setActiveMonth,
              cashFlowState
            )}
          </HorizontalFlexBox>
        }
      />
      <VerticalFlexBox sx={{ width: "100%", padding: 0 }}>
        <ContainerCard
          header={
            <Header
              title={"Transactions"}
              activeView={activeView}
              setActiveView={setActiveView}
              functions={
                <HorizontalFlexBox sx={{ padding: 0 }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setDrawerActive(true);
                    }}
                    disableElevation
                    startIcon={<AddRounded />}
                    sx={{
                      borderRadius: "8px",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      marginBottom: "-1px",
                      color: theme.palette.secondary.main,
                      minHeight: "36.5px",
                      marginLeft: theme.spacing(1),
                    }}
                  >
                    Tag
                  </Button>
                  <Right
                    open={drawerActive}
                    onClose={() => {
                      setDrawerActive(false);
                    }}
                  >
                    <HorizontalFlexBox sx={{ width: "100%" }}>
                      <Header
                        title={"Tagging"}
                        activeView={activeTagView}
                        setActiveView={setActiveTagView}
                        functions={taggingButtons.map(
                          (button: any, index: number) => {
                            return (
                              <Button
                                key={index}
                                variant="text"
                                onClick={() => {
                                  setActiveTagView(button.viewName);
                                }}
                                disableElevation
                                startIcon={button.icon}
                                sx={{
                                  borderRadius: "8px",
                                  borderBottomLeftRadius: 0,
                                  borderBottomRightRadius: 0,
                                  borderBottom:
                                    button.viewName === activeView
                                      ? `1px solid ${theme.palette.primary.main}`
                                      : "none",
                                  marginBottom: "-1px",
                                  marginLeft: theme.spacing(1),
                                }}
                              >
                                {button.viewName}
                              </Button>
                            );
                          }
                        )}
                        sx={{
                          marginLeft: theme.spacing(3),
                          marginRight: theme.spacing(3),
                          marginTop: theme.spacing(3),
                        }}
                      />
                    </HorizontalFlexBox>
                    <HorizontalFlexBox sx={{ justifyContent: "center" }}>
                      <ImageCard
                        cardheight={"200px"}
                        cardwidth={"400px"}
                        imageheight={"200px"}
                        imagewidth={"400px"}
                        image={tag}
                        alt={"fileArrowUploadGreen"}
                        sx={{ boxShadow: "none", padding: 0 }}
                      />
                    </HorizontalFlexBox>
                    <HorizontalFlexBox sx={{ padding: 0 }}>
                      <VerticalFlexBox>
                        <Typography
                          variant="h6"
                          paragraph
                          sx={{ color: grey[700] }}
                          align="center"
                        >
                          Welcome to the tagging page!
                        </Typography>
                        <Typography
                          variant="body1"
                          paragraph
                          sx={{ color: grey[600] }}
                          align="center"
                        >
                          You can select a tag from the select field or create a
                          new one.
                        </Typography>
                      </VerticalFlexBox>
                    </HorizontalFlexBox>
                    <HorizontalFlexBox>
                      {/* <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        size="large"
                        // startIcon={<FileOpenRounded />}
                        sx={{
                          borderRadius: "10px",
                          color: theme.palette.secondary.main,
                        }}
                        disableElevation
                      >
                        <input
                          hidden
                          accept="csv"
                          type="file"
                          onChange={(event) => {
                            handleUpload(event);
                          }}
                        />
                        new Tag
                      </Button> */}
                      {/* <SelectList /> */}
                      <TextField
                        error={false}
                        id="standard-error-helper-text"
                        label="Give your tag a name"
                        variant="standard"
                        required
                      />
                    </HorizontalFlexBox>
                  </Right>
                  <Button
                    variant="text"
                    onClick={() => {}}
                    disableElevation
                    sx={{
                      borderRadius: "8px",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      marginBottom: "-1px",
                      marginLeft: theme.spacing(1),
                      minHeight: "36.5px",
                      color: grey[500],
                    }}
                  >
                    <HelpOutlineRounded />
                  </Button>
                </HorizontalFlexBox>
              }
              sx={{}}
            />
          }
          body={
            <TableComponent data={transactions} columnProps={columnProps} />
            // <TableComponent
            //   data={transactions}
            // />
          }
        />
      </VerticalFlexBox>
    </VerticalFlexBox>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const transactionsRequest = await RequestHandler.GET("/Transaction/Bank");
    const cashFlowRequest = await RequestHandler.GET(
      "/Transaction/Bank/CashFlow",
      { params: { filter: store.getState().globalFilter.dateFilter } }
    );

    return {
      props: {
        transactions: transactionsRequest.data ? transactionsRequest.data : [],
        cashFlow: cashFlowRequest.data ? cashFlowRequest.data : [],
      },
    };
  }
);

export default CashFlow;
