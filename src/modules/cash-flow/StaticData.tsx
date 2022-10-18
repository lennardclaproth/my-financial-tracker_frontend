import {
  ArrowDownwardRounded,
  ArrowUpwardRounded,
  ShowChartRounded,
} from "@mui/icons-material";
import InfoCard from "../../components/cards/InfoCard";

const buttons = [
  {
    viewName: "Overview",
    icon: <ShowChartRounded />,
  },
  {
    viewName: "Incoming",
    icon: <ArrowDownwardRounded />,
  },
  {
    viewName: "Outgoing",
    icon: <ArrowUpwardRounded />,
  },
];

enum views {
  Overview = "Overview",
  Incoming = "Incoming",
  Outgoing = "Outgoing",
}

export { columnProps, testData, buttons, views}