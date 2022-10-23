import {
  ArrowDownIcon,
  ArrowUpIcon,
  LineChartIcon,
  TableIcon,
  TagIcon,
} from "modules/icons/Icons";

const overviewTabs = [
  {
    index: 1,
    viewName: "Overview",
    icon: <LineChartIcon fontSize="inherit" />,
  },
  {
    index: 2,
    viewName: "Incoming",
    icon: <ArrowDownIcon fontSize="inherit" />,
  },
  {
    index: 3,
    viewName: "Outgoing",
    icon: <ArrowUpIcon fontSize="inherit" />,
  },
];

const taggingButtons = [
  {
    index: 1,
    viewName: "Tag",
    icon: <TagIcon fontSize="inherit" />,
  },
  {
    index: 2,
    viewName: "Transactions",
    icon: <TableIcon fontSize="inherit" />,
  },
];

enum views {
  Overview = 1,
  Incoming = 2,
  Outgoing = 3,
}

export { overviewTabs, views, taggingButtons };
