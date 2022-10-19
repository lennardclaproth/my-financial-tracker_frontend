import * as React from "react";
import Box from "@mui/material/Box";
import { CardActionArea, colors, Divider, SvgIcon } from "@mui/material";
import theme from "../../theme/Theme";
import InfoCard from "../cards/InfoCard";
import MenuComponent from "../menu/Menu";
import { grey } from "@mui/material/colors";
import { DollarBillIcon, PieChartIcon, PlaceholderIcon, SavingsIcon } from "modules/icons/Icons";

interface SummaryItem {
  icon?: typeof SvgIcon;
  value: Number;
  growthPercentage: Number;
  name: string;
}

const cummulativeSummary: SummaryItem = {
  value: 100234210.12,
  growthPercentage: 10,
  name: "Net worth",
};

const summary: Array<SummaryItem> = [
  {
    icon: DollarBillIcon,
    value: 10000,
    growthPercentage: 10,
    name: "Cash",
  },
  {
    icon: PieChartIcon,
    value: 11100.23,
    growthPercentage: -22,
    name: "Portfolio",
  },
  {
    icon: SavingsIcon,
    value: 11100.23,
    growthPercentage: 0,
    name: "Savings",
  },
];

const SummaryComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ width: "75%" }}>
      <CardActionArea
        sx={{
          color: theme.palette.secondary.main,
          paddingLeft: theme.spacing(1),
        }}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <InfoCard
          cardColor={theme.palette.primary.dark}
          fontColor={theme.palette.secondary.main}
          title={cummulativeSummary.name}
          amount={cummulativeSummary.value}
          percentage={cummulativeSummary.growthPercentage}
          sx={{
            padding: theme.spacing(1),
            paddingLeft: 0,
            paddingTop: 0.5,
            margin: 0,
            height: "64px",
          }}
        ></InfoCard>
      </CardActionArea>
      <MenuComponent
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        menuwidth={"350px"}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: 0,
          horizontal: 0,
        }}
      >
        {summary.map((element, index) => (
            <Box
              key={`summaryMenu-${index}`}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(1),
              }}
            >
              <SvgIcon
                component={element.icon ? element.icon : PlaceholderIcon}
                sx={{ color: theme.palette.primary.main }}
              />
              <InfoCard
                cardColor={colors.common.white}
                amount={element.value}
                title={element.name}
                percentage={element.growthPercentage}
                sx={{ margin: 0, width: "100%", paddingRight: 0 }}
              />
            </Box>
        ))}
      </MenuComponent>
    </Box>
  );
};
export default SummaryComponent;
