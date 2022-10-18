import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import theme from "../../theme/Theme";
import ToolTipComponent from "./Tooltip";

// TODO: check if cleanup is possible

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <ToolTipComponent
        tooltipcolorkey="stroke"
        tooltipprops={{ active, payload, label }}
      />
    );
  }

  return null;
};

interface LineChartProps {
  data: any;
  setActiveMonth: any;
  activeMonth: any;
  sx?: SxProps;
}

export default function LineChartComponent({
  data,
  setActiveMonth,
  activeMonth,
  sx
}: LineChartProps) {
  return (
    <Box
      sx={[
        { width: "100%", height: "100%", padding:theme.spacing(3)},
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <ResponsiveContainer>
        <ComposedChart
          margin={{ top: 10, left: -15, right: 0, bottom: 0 }}
          data={data}
          onClick={(e) => {
            setActiveMonth(
              e && Array.isArray(e.activePayload)
                ? e.activePayload[0].payload
                : activeMonth
            );
          }}
        >
          <CartesianGrid
            stroke={theme.palette.grey[300]}
            vertical={false}
            strokeDasharray="2"
          />
          <XAxis
            dataKey="dateString"
            width={100}
            tickLine={true}
            tickSize={5}
            tickMargin={5}
            tick={{ fill: theme.palette.grey[700], fontSize: ".8rem" }}
            stroke={theme.palette.grey[300]}
          />
          <YAxis
            type="number"
            allowDecimals={false}
            width={70}
            axisLine={false}
            tickLine={false}
            tickSize={15}
            tick={{ fill: theme.palette.grey[800], fontSize: ".8rem" }}
            tickCount={8}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            name="Income"
            dataKey="incoming"
            dot={false}
            stroke={"#31572c"}
            fill={"#31572c"}
            fillOpacity=".1"
            strokeWidth={3}
            type="monotone"
          />
          <Area
            name="Expenses"
            dataKey="outgoing"
            dot={false}
            stroke={"#ae2112"}
            fill={"#ae2112"}
            fillOpacity=".1"
            strokeWidth={3}
            type="monotone"
          />
          <Area
            name="Net"
            dataKey="netProfitLoss"
            dot={false}
            stroke={"#015f73"}
            fill={"#015f73"}
            fillOpacity=".1"
            strokeWidth={3}
            type="monotone"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
}
