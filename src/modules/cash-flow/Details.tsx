import PieChartComponent from "../../components/charts/PieChart";
import InfoCard from "../../components/cards/InfoCard";
import { SxProps } from "@mui/material";
import HorizontalFlexBox from "../../components/containers/HorizontalFlexBox";
import VerticalFlexBox from "../../components/containers/VerticalFlexBox";
import theme from "theme/Theme";

interface customProps {
  sx: SxProps;
}

const data = [
  {
    name: "Investing",
    value: 300,
    total: 1600,
    color: theme.selectionPalette.darkGreen.main,
    percentage: 10.0,
  },
  {
    name: "Travelling",
    value: 440,
    total: 1600,
    color: theme.selectionPalette.mediumGreen.main,
    percentage: 8.0,
  },
  {
    name: "Saving",
    value: 812.31,
    total: 1600,
    color: theme.selectionPalette.lightGreen.main,
    percentage: -15.0,
  },
  {
    name: "Insurance",
    value: 590,
    total: 1600,
    color: "#005f73ff",
    percentage: 6.0,
  },
  {
    name: "Groceries",
    value: 330,
    total: 1600,
    color: "#0a9396ff",
    percentage: -3.0,
  },
  {
    name: "Dinner",
    value: 300,
    total: 1600,
    color: "#94d2bdff",
    percentage: 5.0,
  },
  {
    name: "Activities",
    value: 629,
    total: 1600,
    color: "#e9d8a6ff",
    percentage: 12.0,
  },
  {
    name: "Streaming",
    value: 125.24,
    total: 1600,
    color: "#ee9b00ff",
    percentage: -10.0,
  },
  {
    name: "Server costs",
    value: 300,
    total: 1600,
    color: "#ca6702ff",
    percentage: 25.0,
  },
  {
    name: "Telephone",
    value: 300,
    total: 1600,
    color: "#bb3e03ff",
    percentage: -11.0,
  },
  {
    name: "Car",
    value: 900.12,
    total: 1600,
    color: "#ae2012ff",
    percentage: 13.0,
  },
  {
    name: "Presents",
    value: 300,
    total: 1600,
    color: "#9b2226ff",
    percentage: 0,
  },
];

const DetailsLayout = (props: customProps) => {
  return (
    <HorizontalFlexBox
      sx={[
        { width: "100%", height: "100%", padding: 3 },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <PieChartComponent data={data} sx={{ width: "30%" }} />
      <VerticalFlexBox
        sx={{
          width: "65%",
          height: "inherit",
          flexWrap: "wrap",
          margin: "auto",
          overflowX: "auto",
        }}
      >
        {data.map((dataPoint, index) => (
          <InfoCard
            key={index}
            title={dataPoint.name}
            amount={dataPoint.value}
            percentage={dataPoint.percentage}
            cardColor={dataPoint.color}
            divider={true}
            sx={{ width: "50%" }}
          />
        ))}
      </VerticalFlexBox>
    </HorizontalFlexBox>
  );
};

export default DetailsLayout;
