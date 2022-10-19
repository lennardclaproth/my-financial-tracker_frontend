import { ArrowDownIcon, ArrowUpIcon, LineChartIcon } from "modules/icons/Icons";

const buttons = [
  {
    viewName: "Overview",
    icon: <LineChartIcon />,
  },
  {
    viewName: "Incoming",
    icon: <ArrowDownIcon />,
  },
  {
    viewName: "Outgoing",
    icon: <ArrowUpIcon />,
  },
];

enum views {
  Overview = "Overview",
  Incoming = "Incoming",
  Outgoing = "Outgoing",
}

export { buttons, views}