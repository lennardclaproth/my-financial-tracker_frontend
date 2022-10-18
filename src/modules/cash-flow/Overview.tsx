import LineChartComponent from "../../components/charts/LineChart";
import InfoCard from "../../components/cards/InfoCard";
import theme from "../../theme/Theme";
import HorizontalFlexBox from "../../components/containers/HorizontalFlexBox";
import { SxProps } from "@mui/material";
import VerticalFlexBox from "../../components/containers/VerticalFlexBox";

interface customProps {
  cashFlow: [any];
  sx: SxProps;
  setActiveMonth: () => void
  activeMonth: any,
}

const Overview = ({cashFlow, sx, setActiveMonth, activeMonth}: customProps) => {

  return (
    <VerticalFlexBox
      sx={[
        { width: "100%", height: "100%", padding: 3 },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <HorizontalFlexBox
        sx={{
          width: "80%",
          justifyContent: "space-between",
          margin: "auto",
          marginTop: theme.spacing(1),
        }}
      >
        {/* TODO: refactor loading of info cards here. */}
        <InfoCard
          title="Income"
          amount={activeMonth.incoming}
          percentage={activeMonth.incomingDelta}
          cardColor={"#31572c"}
          divider={true}
          sx={{ width: "400px" }}
        />
        <InfoCard
          title="Expenses"
          amount={activeMonth.outgoing}
          percentage={activeMonth.outgoingDelta}
          cardColor={"#AE2012"}
          divider={true}
          sx={{ width: "400px" }}
        />

        <InfoCard
          title="Net cash"
          amount={activeMonth.netProfitLoss}
          percentage={activeMonth.netProfitLossDelta}
          cardColor={"#005F73"}
          divider={true}
          sx={{ width: "400px" }}
        />
      </HorizontalFlexBox>

      <LineChartComponent
        data={cashFlow}
        setActiveMonth={setActiveMonth}
        activeMonth={activeMonth}
        sx={{paddingBottom: 0}}
      />
    </VerticalFlexBox>
  );
};

export default Overview;
