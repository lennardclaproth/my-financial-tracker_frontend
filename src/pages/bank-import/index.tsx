import type { NextPage } from "next";
import { Grid } from "@mui/material";
import Wizard from "../../modules/file-upload/bank-transactions/Wizard";

const BankImport: NextPage = () => {

  return (
    <Grid container direction="row" alignItems="start" height={1}>
        <Wizard />
    </Grid>
  );
};

export default BankImport;
