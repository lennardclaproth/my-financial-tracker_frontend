import {
    ArrowDownwardRounded,
    ArrowUpwardRounded,
    ShowChartRounded,
    SellRounded,
    TableChartRounded
  } from "@mui/icons-material";

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

const taggingButtons = [
    {
      viewName: "Tag",
      icon: <SellRounded />,
    },
    {
      viewName: "Transactions",
      icon: <TableChartRounded />,
    }
  ];

enum views {
  Overview = "Overview",
  Incoming = "Incoming",
  Outgoing = "Outgoing",
}

export { buttons, views, taggingButtons };
