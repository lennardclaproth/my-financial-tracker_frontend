import type { NextPage, NextPageContext } from "next";
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
import {
  overviewTabs,
  taggingButtons,
  views,
} from "modules/cash-flow/static-data/Views";
import { columnProps } from "modules/cash-flow/static-data/TableConfig";
import { CashFlowProps } from "modules/cash-flow/types";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { DownloadIcon, HelpIcon, PlusIcon } from "modules/icons/Icons";
import { CashFlow, Transaction } from "modules/request-handler/types";
import NewTag from "modules/tagging/NewTag";
import { Dialog } from "@mui/material";
import Wizard from "modules/file-upload/bank-transactions/Wizard";
import AuditDataHandler from "modules/file-upload/AuditDataHandler";

// TODO add typings

function getActiveView(
  view: number,
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
  const [activeView, setActiveView] = useState(1);
  const [activeMonth, setActiveMonth] = useState(cashFlow[cashFlow.length - 1]);
  const [drawerActive, setDrawerActive] = useState(false);
  const [dialogActive, setDialogActive] = useState(false);
  useEffect(() => {
    const handleFetch = () => {
      RequestHandler.GET<CashFlow>("/Transaction/Bank/CashFlow", {
        params: { filter: filter },
      }).then((res: any) => setCashflowState(res));
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
            tabs={overviewTabs}
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
                    startIcon={<PlusIcon />}
                    sx={{
                      borderRadius: ".5rem",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      marginBottom: "-1px",
                      color: theme.palette.secondary.main,
                      minHeight: "3rem",
                      marginLeft: theme.spacing(1),
                    }}
                  >
                   New tag
                  </Button>
                  {/* TODO: change this to use drawer component and use a module to load in the drawer */}
                  <NewTag
                    drawerActive={drawerActive}
                    setDrawerActive={setDrawerActive}
                  ></NewTag>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setDialogActive(true);
                    }}
                    disableElevation
                    startIcon={<DownloadIcon fontSize="inherit"/>}
                    sx={{
                      borderRadius: ".5rem",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderBottom: 0,
                      marginBottom: "-1px",
                      minHeight: "3rem",
                      marginLeft: theme.spacing(1),
                    }}
                  >
                    Import
                  </Button>
                  <Dialog
                    open={dialogActive}
                    maxWidth="md"
                    scroll="body"
                    onClose={() => {
                      setDialogActive(false);
                    }}
                    // sx={{ borderRadius: "1rem !important" }}
                    PaperProps={{
                      style: { borderRadius: "1rem" },
                    }}
                  >
                    <AuditDataHandler />
                  </Dialog>
                  <Button
                    variant="text"
                    onClick={() => {}}
                    disableElevation
                    sx={{
                      borderRadius: ".5rem",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      marginBottom: "-1px",
                      marginLeft: theme.spacing(1),
                      minHeight: "3rem",
                      color: grey[500],
                    }}
                  >
                    <HelpIcon />
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
    const transactionsRequest = await RequestHandler.GET<Transaction>(
      "/Transaction/Bank"
    );
    const cashFlowRequest = await RequestHandler.GET<CashFlow>(
      "/Transaction/Bank/CashFlow",
      { params: { filter: store.getState().globalFilter.dateFilter } }
    );

    return {
      props: {
        transactions: transactionsRequest ? transactionsRequest : [],
        cashFlow: cashFlowRequest ? cashFlowRequest : [],
      },
    };
  }
);

export default CashFlow;
