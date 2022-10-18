import { Box } from "@mui/material";
import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import ToolTipComponent from "./Tooltip";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <ToolTipComponent
        tooltipcolorkey="fill"
        tooltipprops={{ active, payload, label }}
      />
    );
  }
  return null;
};

export default function PieChartComponent({sx, data}:any) {
  return (
    <Box
      sx={[
        { width: "100%", height: "100%"},
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={"70%"}
            outerRadius={"100%"}
            fill="#8884d8"
            dataKey="value"
            stroke=""
          >
            {data.map((entry:any, index: number) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={CustomTooltip} />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}
